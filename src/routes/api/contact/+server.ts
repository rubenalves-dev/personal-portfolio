import { env } from "$env/dynamic/private";
import { isStringNullOrEmpty } from "$lib/utils/strings.js";
import { json } from "@sveltejs/kit";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST({request}) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (isStringNullOrEmpty(name) || isStringNullOrEmpty(email) || isStringNullOrEmpty(message)) {
          return json({ error: 'Missing required fields: name, email, and message.' }, { status: 400 });
        }

    await resend.emails.send({
      from: "Contact Form <hello@raiiaa.dev>",
      to: 'contact@raiiaa.dev',
      subject: `New Portfolio message from ${name}`,
      html: `
        <h1>New message from ${name}</h1>
        <p>You received a new message via your portfolio contact form.</p>
        <br />
        <h2>Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email?.toString(),
    });

    return json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    return json({ error: 'Failed to send message' }, {status: 500});
  }
}
