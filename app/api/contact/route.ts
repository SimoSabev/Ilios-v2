import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(200),
    email: z.string().trim().email("Valid email is required"),
    phone: z.string().trim().max(50).optional().or(z.literal("")),
    company: z.string().trim().max(200).optional().or(z.literal("")),
    message: z.string().trim().min(1, "Message is required").max(5000),
    website: z.string().optional(), // honeypot, checked at runtime below
})

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL ?? "office@iliosdecor.com"

    if (!apiKey || !fromEmail) {
        console.error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL environment variable")
        return NextResponse.json(
            { error: "Email service is not configured yet." },
            { status: 503 },
        )
    }

    let json: unknown
    try {
        json = await request.json()
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
    }

    const parsed = contactSchema.safeParse(json)
    if (!parsed.success) {
        return NextResponse.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input." },
            { status: 400 },
        )
    }

    const { name, email, phone, company, message, website } = parsed.data

    // Honeypot field: real visitors never fill this in.
    if (website) {
        return NextResponse.json({ success: true })
    }

    const resend = new Resend(apiKey)

    try {
        await resend.emails.send({
            from: fromEmail,
            to: receiverEmail,
            replyTo: email,
            subject: `New contact form submission from ${name}`,
            html: `
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
                ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
            `,
        })

        await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: "We've received your message - ILIOS Decor",
            html: `
                <p>Hi ${escapeHtml(name)},</p>
                <p>Thank you for reaching out to ILIOS Decor. We've received your message and will get back to you shortly.</p>
                <p><strong>Your message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
                <p>Best regards,<br/>ILIOS Decor</p>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        console.error("Failed to send contact form email", error)
        return NextResponse.json(
            { error: "Failed to send your message. Please try again later." },
            { status: 502 },
        )
    }
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}
