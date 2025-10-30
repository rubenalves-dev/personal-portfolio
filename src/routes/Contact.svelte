<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/ui/Button.svelte';

	type ContactFormResponse =
		| {
				success: boolean;
				message: string;
		  }
		| {
				error: string;
		  };

	let isSubmitting = $state(false);
	let feedbackMessage = $state({
		type: '' as 'success' | 'error' | '',
		text: ''
	});
</script>

<section class="contact-me">
	<h2 class="contact-me__title">Contact Me</h2>

	<form
		class="form"
		action="/api/contact"
		method="POST"
		use:enhance={() => {
			isSubmitting = true;
			feedbackMessage = { type: '', text: '' };

			return async ({ result, update }) => {
				isSubmitting = false;

				if (result.type === 'success') {
					const data = result.data as ContactFormResponse | undefined;
					let message = '';
					if (data && 'success' in data) {
						message = data.message;
					}
					feedbackMessage = { type: 'success', text: message };
					const contactForm = document.querySelector('form[action="/api/contact"]');
					if (contactForm) {
						(contactForm as HTMLFormElement).reset();
					}
				} else if (result.type === 'failure') {
					const errorText = 'Submission Failed';
					feedbackMessage = { type: 'error', text: errorText };
				}

				await update();
			};
		}}
	>
		{#if feedbackMessage.text}
			<p class="form__text">{feedbackMessage.text}</p>
		{/if}

		<div class="form__group">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" required />
		</div>

		<div class="form__group">
			<label for="email">Your Email</label>
			<input type="email" id="email" name="email" required />
		</div>

		<div class="form__group">
			<label for="message">Message</label>
			<textarea id="message" name="message" rows="5" required></textarea>
		</div>

		<Button type="submit" state={isSubmitting ? 'disabled' : 'default'}>
			{isSubmitting ? 'Sending...' : 'Send Message'}
		</Button>
	</form>
</section>

<style>
	.form__group {
		margin-bottom: 1rem;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		box-sizing: border-box;
	}
</style>
