import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message, hp } = await request.json();

        if (hp) {
            return NextResponse.json({ error: "Spam detected" }, { status: 400 });
        }

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "daelsand@espol.edu.ec",
            subject,
            html: `
                <h2>New Contact Form Message</h2>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}