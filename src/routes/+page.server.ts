import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { zod4} from 'sveltekit-superforms/adapters'
import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { RATE_LIMITER_COOKIE_SECRET } from "$env/static/private";
import { contactSchema } from "$lib/schemas/contact";
import {RateLimiter} from 'sveltekit-rate-limiter/server'
import { env } from "$env/dynamic/private";

const resend = new Resend(env.RESEND_API_KEY);
const limiter = new RateLimiter({
  IP: [10, 'h'],
  IPUA: [5, "m"],
  cookie: {
    name: 'rl_contact',
    secret: RATE_LIMITER_COOKIE_SECRET,
    rate: [2, 'm'],
    preflight: true
  }
})


export const load: PageServerLoad = async (event) => {
  await limiter.cookieLimiter?.preflight(event);
  const contactForm = await superValidate(zod4(contactSchema));

  return { contactForm }
}

export const actions: Actions = {
  contact: async (event) => {
    const status = await limiter.check(event);
    const contactForm = await superValidate(event.request, zod4(contactSchema));
    if (status.limited) {
      console.error("Rate limit exceeded. Reason: ", status.reason);
      return fail(429, { contactForm });
    }


    if (!contactForm.valid) {
      console.error("Contact form validation failed:", contactForm.errors);
      return fail(400, { contactForm });
    }

    const name = contactForm.data.name;
    const email = contactForm.data.email;
    const message = contactForm.data.message;

    await resend.emails.send({
      from: "Contact <hello@raiiaa.dev>",
      to: "contact@raiiaa.dev",
      subject: `New Portfolio message from ${name}`,
      html: `
        <h1>New message from ${name}</h1>
        <p>You received a new message via your portfolio contact contactForm.</p>
        <br />
        <h2>Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    })

    return {contactForm}
  }
}
