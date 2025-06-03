import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const form = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // Read the email template
    const templatePath = path.join(process.cwd(), 'email-template.html');
    let emailTemplate = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual values
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    emailTemplate = emailTemplate
      .replace(/\{\{name\}\}/g, form.name || 'Anonymous')
      .replace(/\{\{email\}\}/g, form.email || 'No email provided')
      .replace(/\{\{subject\}\}/g, form.subject || 'No subject')
      .replace(/\{\{message\}\}/g, form.message || 'No message content')
      .replace(/\{\{timestamp\}\}/g, timestamp);

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: `"${form.name}" <${form.email}>`,
      to: process.env.SMTP_USER,
      subject: `New Portfolio Message: ${form.subject || 'Contact Form Submission'}`,
      html: emailTemplate
    })


    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.log("FAILED...", error);

    return NextResponse.json({ error: "Failed to send message, please try again later." }, { status: 500 });
  }
}
