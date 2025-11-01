<script>
	import ProjectCard from '$lib/ui/ProjectCard.svelte';
</script>

<section class="projects">
	<div class="container">
		<h2 class="projects__title title">Projects</h2>
		<p class="projects__description">
			This is some projects I've worked on recently. Keep in mind that some projects are confidential and cannot be
			displayed here nor can I show their source code.
		</p>

		<div class="projects__grid">
			<ProjectCard
				title="JF Alcoentre"
				description="Official website for the Alcoentre Parish Council, built to provide information and services to the local community."
				image_url="images/jf-alcoentre.jpg"
				app_url="https://jf-alcoentre.pt"
				github_repo_url="asd"
				gitlab_repo_url="asd"
				tech={{
					dotnet: true,
					jquery: true,
					bootstrap: true,
					sqlserver: true,
					sass: true,
					azure: true
				}}
			/>
			<ProjectCard
				title="Centro Social e Paroquial de Moscavide"
				description="Website for the Social and Parish Center of Moscavide, showcasing their services, events, and community initiatives."
				app_url="https://centrosocialparoquialdemoscavide.org/"
				image_url="images/cspm.jpg"
				tech={{
					dotnet: true,
					jquery: true,
					bootstrap: true,
					sqlserver: true,
					sass: true,
					azure: true
				}}
			/>
		</div>
	</div>
</section>

<style>
	.projects {
		background-color: var(--color-primary-lightest);
		padding-block: 4rem;
		color: var(--shade-darkest);

		.projects__title {
			margin-block-end: 1rem;
		}

		.projects__description {
			margin-block-end: 3em;
		}

		.projects__grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
			gap: 2rem;
			margin-top: 2rem;
		}
	}
</style>
