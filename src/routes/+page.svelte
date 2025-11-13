<script lang="ts">
	import Projects from './Projects.svelte';
	import Form from './Form.svelte';
	import type { Infer, SuperValidated } from 'sveltekit-superforms';
	import type { ContactSchema } from '$lib/schemas/contact';
	import AboutMe from './AboutMe.svelte';
	import Hero from './Hero.svelte';

	type Props = {
		data: {
			contactForm: SuperValidated<Infer<ContactSchema>>;
		};
	};

	const props: Props = $props();
</script>

<Hero />
<AboutMe />
<Projects />
<Form contactForm={props.data.contactForm} />
