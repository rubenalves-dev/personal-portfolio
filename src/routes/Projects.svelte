<script>
	import ProjectCard from '$lib/components/ui/card/project-card/project-card.svelte';
	import Section from '$lib/components/ui/layout/section.svelte';
</script>

<Section title="Featured Projects">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<ProjectCard
			title="I;m hero"
			description="A very short description to show the project description"
			source_url="www.github.com"
			live_url="www.google.com"
		/>
	</div>
</Section>
