import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // works by default
      // to: "info@twotwelve.studio",
      to: "leslyalc12@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ message: "Email sent", data });
  } catch (error: any) {
    console.error("Resend Error:", error);
    return res
      .status(500)
      .json({ message: "Email failed", error: error.message });
  }
}
