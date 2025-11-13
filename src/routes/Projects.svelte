<script lang="ts">
	import ProjectCard from '$lib/components/ui/card/project-card/project-card.svelte';
	import Section from '$lib/components/ui/layout/section.svelte';

	type Project = {
		title: string;
		description: string;
		source_url: string;
		live_url: string;
	};

	const projects: Project[] = [
		{
			title: 'I;m hero',
			description: 'A very short description to show the project description',
			source_url: 'www.github.com',
			live_url: 'www.google.com'
		}
	];
</script>

{#if projects.length > 0}
	<Section id="projects" title="Featured Projects">
		<div class="auto-grid">
			{#each projects as project, i (i)}
				<ProjectCard
					title={project.title}
					description={project.description}
					source_url={project.source_url}
					live_url={project.live_url}
				/>
			{/each}
		</div>
	</Section>
{/if}
