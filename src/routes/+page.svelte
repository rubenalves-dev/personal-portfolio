<script lang="ts">
	import AboutImage from '$lib/assets/images/me.png';
	import Button from '$lib/ui/Button.svelte';
	import ProjectCard from '$lib/ui/ProjectCard.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
</script>

<Hero />

<section class="about container">
	<div class="about__wrapper">
		<div class="about__image-wrapper">
			<img class="about__image" alt="Stylized Rúben Alves" src={AboutImage} />
		</div>

		<div class="about__content">
			<h2 class="about__title">About me</h2>
			<p class="about__text">
				I'm a <em>fullstack</em><em>&nbsp;</em><em>developer</em> from Portugal focused on creating scalable and bullet proof
				solutions, planning, designing, building and implementing them for your needs.
			</p>
			<p class="about__text">
				I'm <em>passionate</em> about emerging technologies and AI innovations, always seeking better ways to work.
				Whether it's a new framework, library, or development practice, I'm <em>constantly</em><em>&nbsp;</em><em
					>learning</em
				>, trying to be more knowledgeable every day, so I can <em>deliver</em> even more and be aware of the
				<em>new</em><em>&nbsp;</em><em>possibilities</em>
				for the market.
			</p>
			<p class="about__text about__text--cta">
				<em>Got</em><em>&nbsp;</em><em>interested?</em> Let's collaborate and bring <em>YOUR</em> ideas to life!
			</p>

			<!-- <Button href="#more-about-me" variant="link" size="sm">More about me <i class="icon-arrow-right"></i></Button> -->
		</div>
	</div>
</section>

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

<Contact />

<style>
	.about {
		margin: 4rem auto;
		padding: 0 1rem;

		@media (max-width: 48rem) {
			margin: 0rem auto;
		}

		.about__wrapper {
			display: grid;
			grid-template-columns: minmax(10rem, 2fr) 3fr;
			align-items: center;
			gap: 2rem;

			@media (max-width: 48rem) {
				grid-template-columns: 1fr;
				grid-template-rows: auto auto;
				gap: 1.5rem;
			}
		}

		.about__image-wrapper {
			width: 100%;
			height: 100%;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: stretch;
			background: var(--shade-light);
			border-radius: 1rem;

			@media (max-width: 48rem) {
				background: none;
				max-height: 20rem;
			}

			.about__image {
				width: 100%;
				height: 100%;
				mix-blend-mode: overlay;
				height: auto;
				opacity: 1;
				object-fit: cover;

				@media (max-width: 48rem) {
					display: none;
				}
			}
		}

		.about__title {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		.about__text {
			color: var(--shade-dark);
			margin-bottom: 1rem;
			text-wrap: balance;

			&:last-child {
				margin-bottom: 0;
			}

			&.about__text--cta {
				margin-bottom: 2rem;
			}
		}
	}

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
