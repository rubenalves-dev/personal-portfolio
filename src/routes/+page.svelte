<script lang="ts">
	import ProjectCard from '$lib/components/ui/card/project-card/project-card.svelte';
	import Section from '$lib/components/ui/layout/section.svelte';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';

	import Mail from '@lucide/svelte/icons/mail';
	import Pin from '@lucide/svelte/icons/map-pin';
	import FileText from '@lucide/svelte/icons/file-text';
	import Download from '@lucide/svelte/icons/download';

	import Item from '$lib/components/ui/item/item.svelte';
	import ItemContent from '$lib/components/ui/item/item-content.svelte';
	import ItemMedia from '$lib/components/ui/item/item-media.svelte';
	import ItemTitle from '$lib/components/ui/item/item-title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ItemDescription from '$lib/components/ui/item/item-description.svelte';
	import { contactSchema, type ContactForm } from '$lib/schemas/contact';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { toast } from 'svelte-sonner';

	type Props = {
		data: {
			form: SuperValidated<Infer<ContactForm>>;
		};
	};

	let props: Props = $props();

	const form = superForm(props.data.form, {
		validators: zod4Client(contactSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (!f.valid) {
				toast.error('Please fix the errors in the form before submitting.');
			}
		},
		onResult: ({ result }) => {
			if (result.type === 'success') {
				toast.success('Message sent successfully!');
			} else if (result.type === 'error') {
				toast.error('There was an error sending your message.');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Section title="Featured Projects">
	<div class="grid grid-cols-3">
		<ProjectCard
			title="I;m hero"
			description="A very short description to show the project description"
			source_url="www.github.com"
		/>
	</div>
</Section>

<Section title="Get in touch">
	<div class="grid grid-cols-2">
		<div>
			<Item class="gap-6">
				<ItemMedia class="aspect-square size-12 rounded-full bg-primary text-white"><Mail /></ItemMedia>
				<ItemContent>
					<ItemTitle>E-mail</ItemTitle>
					<ItemDescription>hello@raiiaa.dev</ItemDescription>
				</ItemContent>
			</Item>

			<Item class="gap-6">
				<ItemMedia class="aspect-square size-12 rounded-full bg-primary text-white"><Pin /></ItemMedia>
				<ItemContent>
					<ItemTitle>Location</ItemTitle>
					<ItemDescription>Santarém, Portugal</ItemDescription>
				</ItemContent>
			</Item>

			<Item class="gap-6">
				<ItemMedia class="aspect-square size-12 rounded-full bg-primary text-white"><FileText /></ItemMedia>
				<ItemContent>
					<ItemTitle>Resume</ItemTitle>
					<Button variant="link" class="w-max px-0!"><Download />Download CV</Button>
				</ItemContent>
			</Item>
		</div>
		<div>
			<SuperDebug data={form} />

			<form method="POST" use:enhance>
				<Form.Field class="mb-4" {form} name="name">
					<Form.Control>
						<Form.Label class="text-foreground!">Name</Form.Label>
						<Input type="text" bind:value={$formData.name} placeholder="Your Name" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field class="mb-4" {form} name="email">
					<Form.Control>
						<Form.Label class="text-foreground!">E-mail</Form.Label>
						<Input type="email" bind:value={$formData.email} placeholder="Your Email" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field class="mb-4" {form} name="name">
					<Form.Control>
						<Form.Label class="text-foreground!">Message</Form.Label>
						<Textarea bind:value={$formData.message} placeholder="Your Message" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Button>Send Message</Form.Button>
			</form>
		</div>
	</div>
</Section>

<!-- <Hero /> -->
<!-- <About /> -->
<!-- <Projects /> -->
<!-- <Contact /> -->
