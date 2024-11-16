"use server";

import { IContact } from "@/types/contact";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER_EMAIL,
    pass: process.env.NODEMAILER_USER_AUTH_PASSWORD,
  }
})
export async function send_contact_form(data: IContact) {
  try {
    const { name, email, message } = data;

    transporter.sendMail({
      from: email,
      to: process.env.NODEMAILER_USER_EMAIL,
      subject: `Portfolio Contact Form: ${name}`,
      text: message + "\n\n" + `From: ${email}`,
      headers: {
        "X-ReplyTo": email,
      }
    })



  } catch (error) {
    throw new Error("Failed to send message");
  }
}