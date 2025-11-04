import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import {zod4} from 'sveltekit-superforms/adapters'
import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { env } from "$env/dynamic/private";
import z from "zod";

const resend = new Resend(env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
  email: z.email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message must be less than 5000 characters'),
})

export type ContactForm = typeof contactSchema;

export const load: PageServerLoad = async () => {
  const contactForm = await superValidate(zod4(contactSchema));

  return {contactForm}
}

export const actions: Actions = {
  contact: async (event) => {
    const form = await superValidate(event.request, zod4(contactSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const name = form.data.name;
    const email = form.data.email;
    const message = form.data.message;

    await resend.emails.send({
      from: "Contact <hello@raiiaa.dev>",
      to: "contact@raiiaa.dev",
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
      replyTo: email,
    })

    return {form}
  }
}
