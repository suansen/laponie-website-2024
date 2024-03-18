import EmailTemplate from "@/app/components/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const contactFormData = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Enquiry <enquiry@resend.dev>",
      to: ["suansen88@gmail.com"],
      subject: `Laponie Enquiry from ${contactFormData.email}`,
      react: EmailTemplate({
        name: contactFormData.name,
        email: contactFormData.email,
        tel: contactFormData.tel,
        message: contactFormData.message,
      }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
