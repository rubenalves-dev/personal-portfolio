<script lang="ts">
	import { FormButton, FormControl, FormField, FormFieldErrors, FormLabel } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '$lib/components/ui/item';
	import Section from '$lib/components/ui/layout/section.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';

	import Mail from '@lucide/svelte/icons/mail';
	import Send from '@lucide/svelte/icons/send';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import FileText from '@lucide/svelte/icons/file-text';
	import Loader from '@lucide/svelte/icons/loader-circle';
	import Download from '@lucide/svelte/icons/download';

	import type { SuperValidated } from 'sveltekit-superforms';
	import { type Infer, superForm } from 'sveltekit-superforms';
	import { contactSchema, type ContactSchema } from '$lib/schemas/contact';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';

	type Props = {
		contactForm: SuperValidated<Infer<ContactSchema>>;
	};

	let props: Props = $props();
	let loading = $state(false);

	const contactForm = superForm(props.contactForm, {
		validators: zod4Client(contactSchema),
		onSubmit: () => {
			toast.loading('Sending message...');
			loading = true;
		},
		onError: ({ result }) => {
			toast.error('' + result.error.message);
			loading = false;
		},
		onResult: (event) => {
			loading = false;
			switch (event.result.type) {
				case 'success':
					toast.success('Message sent successfully!');
					break;
				case 'error':
					toast.error('Failed to send message.');
					break;
				default: {
					if (event.result.status == 429) {
						toast.error('Too many requests. Please try again later.');
					} else {
						toast.error('An unexpected error occurred.');
					}
					break;
				}
			}
		}
	});

	const { form: formData, enhance } = contactForm;
</script>

<Section id="contact-me" title="Get in touch">
	<div class="auto-fit-grid" style="--min-col-size:250px">
		<div>
			<Item class="gap-6">
				<ItemMedia class="aspect-square size-12 rounded-full bg-primary text-white"><Mail /></ItemMedia>
				<ItemContent>
					<ItemTitle>E-mail</ItemTitle>
					<ItemDescription>hello@raiiaa.dev</ItemDescription>
				</ItemContent>
			</Item>

			<Item class="gap-6">
				<ItemMedia class="aspect-square size-12 rounded-full bg-primary text-white"><MapPin /></ItemMedia>
				<ItemContent>
					<ItemTitle>Location</ItemTitle>
					<ItemDescription>Santarém, Portugal</ItemDescription>
				</ItemContent>
			</Item>

			<Item class="gap-6">
				<ItemMedia class="aspect-square size-12 rounded-full bg-primary text-white"><FileText /></ItemMedia>
				<ItemContent>
					<ItemTitle>Resume</ItemTitle>
					<Button variant="link" href="/documents/CV-en.pdf" target="_blank" download="CV-en.pdf" class="w-max px-0!"
						><Download />Download CV</Button
					>
				</ItemContent>
			</Item>
		</div>
		<div>
			<form method="POST" action="?/contact" use:enhance>
				<FormField class="mb-4" form={contactForm} name="name">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel class="text-foreground!">Name</FormLabel>
							<Input {...props} type="text" bind:value={$formData.name} placeholder="Your Name" />
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>

				<FormField class="mb-4" form={contactForm} name="email">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel class="text-foreground!">E-mail</FormLabel>
							<Input {...props} type="email" bind:value={$formData.email} placeholder="Your Email" />
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>

				<FormField class="mb-4" form={contactForm} name="message">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel class="text-foreground!">Message</FormLabel>
							<Textarea {...props} bind:value={$formData.message} placeholder="Your Message" />
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>

				<FormButton disabled={loading}>
					{#if loading}
						<Loader class="animate-spin" />
					{:else}
						<Send />
					{/if}
					Send Message
				</FormButton>
			</form>
		</div>
	</div>
</Section>
