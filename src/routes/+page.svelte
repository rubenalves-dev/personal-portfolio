<script lang="ts">
	import Projects from './Projects.svelte';
	import Form from './Form.svelte';
	import type { Infer, SuperValidated } from 'sveltekit-superforms';
	import type { ContactSchema } from '$lib/schemas/contact';
	import Section from '$lib/components/ui/layout/section.svelte';
	import me from '$lib/assets/images/me.png';

	type Props = {
		data: {
			contactForm: SuperValidated<Infer<ContactSchema>>;
		};
	};

	const props: Props = $props();
</script>

<Section title="About me">
	<img src={me} alt="" class="mix-blend-soft-light" />
</Section>

<Projects />
<Form contactForm={props.data.contactForm} />
<!-- <Hero /> -->
<!-- <About /> -->
<!-- <Projects /> -->
<!-- <Contact /> -->
