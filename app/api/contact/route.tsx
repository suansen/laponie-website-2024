import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function GET() {
  return NextResponse.json({
    hello: "world",
  });
}

export async function POST(request: Request) {
  const username = process.env.EMAIL_USERNAME_PRIVATE_KEY;
  const password = process.env.EMAIL_PASSWORD_PRIVATE_KEY;
  const myEmail = process.env.PERSONAL_EMAIL_PRIVATE_KEY;

  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mailOptions = {
      from: username,
      to: myEmail,
      replyTo: data.email,
      subject: `Laponie Enquiry from ${data.email}`,
      html: `
            <p>Name: ${data.name} </p>
            <p>Email: ${data.email} </p>
            <p>Tel: ${data.tel} </p>
            <p>Message: ${data.message} </p>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
