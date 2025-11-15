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
			title: 'Personal Portfolio',
			description:
				'A personal portfolio website to showcase my projects and skills. It also serves the purpose of introducing myself to the world.',
			source_url: 'www.github.com',
			live_url: 'www.raiiaa.dev'
		}
	];
</script>

{#if projects.length > 0}
	<Section id="projects" title="Featured Projects">
		<div class="auto-grid" style="--min-col-size: 250px">
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
