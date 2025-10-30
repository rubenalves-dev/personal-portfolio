<script lang="ts">
	import { imageWithFallback, ImageManager } from '$lib/utils/files/image-manager';
	import { isStringNullOrEmpty } from '$lib/utils/strings';
	import Button from './Button.svelte';

	type Props = {
		title: string;
		image_url?: string;
		description?: string;
		github_repo_url?: string;
		gitlab_repo_url?: string;
		app_url?: string;
		tech?: {
			svelte?: boolean;
			angular?: boolean;
			react?: boolean;
			vue?: boolean;
			nodejs?: boolean;
			nextjs?: boolean;
			nuxtjs?: boolean;

			dotnet?: boolean;
			bootstrap?: boolean;
			jquery?: boolean;
			sass?: boolean;
			azure?: boolean;
			sqlserver?: boolean;
		};
	};

	const props: Props = $props();

	const hasRepo = props.github_repo_url || props.gitlab_repo_url;
	const imageSrc = ImageManager.getImageUrl(props.image_url, 'project');

	const techBadges = [
		{ key: 'dotnet', label: 'Dotnet', icon: 'dot-net', color: '#512bd4' },
		{ key: 'svelte', label: 'Svelte', icon: 'svelte', color: '#ff3e00' },
		{ key: 'react', label: 'React', icon: 'react', color: '#61dafb' },
		{ key: 'vue', label: 'Vue', icon: 'vue-dot-js', color: '#42b883' },
		{ key: 'angular', label: 'Angular', icon: 'angular', color: '#dd0031' },
		{ key: 'nextjs', label: 'Next.js', icon: 'next-dot-js', color: '#000000' },
		{ key: 'nuxtjs', label: 'Nuxt.js', icon: 'nuxt-dot-js', color: '#00dc82' },
		{ key: 'nodejs', label: 'Node.js', icon: 'node-dot-js', color: '#339933' },
		{ key: 'bootstrap', label: 'Bootstrap', icon: 'bootstrap', color: '#7952b3' },
		{ key: 'sass', label: 'Sass', icon: 'sass', color: '#cc6699' },
		{ key: 'jquery', label: 'jQuery', icon: 'jquery', color: '#0769ad' },
		{ key: 'sqlserver', label: 'SQL Server', color: '#cc2927' },
		{ key: 'azure', label: 'Azure', icon: 'azuredevops', color: '#0089d6' }
	].filter((tech) => props.tech?.[tech.key as keyof typeof props.tech]);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<article class="project-card">
	<div class="project-card__image-wrapper">
		<img use:imageWithFallback={{ fallback: 'project' }} src={imageSrc} alt={props.title} class="project-card__image" />

		{#if techBadges.length > 0}
			<div class="project-card__badges">
				{#each techBadges as tech, i (i)}
					<span class="badge" style="--badge-color: {tech.color}">
						{tech.label}
						{#if !isStringNullOrEmpty(tech.icon)}<i class={'badge__icon icon-' + tech.icon}></i>{/if}
					</span>
				{/each}
			</div>
		{/if}
	</div>

	<div class="project-card__content">
		<div class="project-card__header">
			<h3 class="project-card__title">{props.title}</h3>
			<div class="project-card__goto-links">
				{#if props.github_repo_url}
					<Button
						href={props.github_repo_url}
						variant="primary-outline"
						target="_blank"
						style="--btn-color: var(--shade-dark); --btn-background-color: var(--shade-lightest);"
						size="sm"
						shape="square"
					>
						<i class="icon-github-f"></i>
					</Button>
				{/if}

				{#if props.gitlab_repo_url}
					<Button
						href={props.gitlab_repo_url}
						variant="primary-outline"
						target="_blank"
						style="--btn-color: var(--shade-lightest); --btn-background-color: #fc6d26; --btn-border-color: #fc6d26;"
						size="sm"
						shape="square"
					>
						<i class="icon-gitlab-f"></i>
					</Button>
				{/if}

				{#if !hasRepo}
					<div class="project-card__no-repo">
						<i class="icon-github-f"></i>
						<div class="project-card__no-repo-line"></div>
					</div>
				{/if}
			</div>
		</div>

		{#if props.description}
			<p class="project-card__description">{props.description}</p>
		{/if}

		<div class="project-card__goto-app">
			<Button href={props.app_url} target="_blank">
				Visit <i class="icon-external-link"></i>
			</Button>
		</div>
	</div>
</article>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		background: var(--color-secondary-lightest);
		border-radius: 1rem;
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 0.25);
		height: 100%;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

			.project-card__image {
				transform: scale(1.05);
			}
		}

		.project-card__image-wrapper {
			margin: 1rem 1rem 0 1rem;
			border-radius: 0.5rem;
			overflow: hidden;
			background: var(--shade-lightest);
			aspect-ratio: 5 / 3;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				inset: 0;
				background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.2) 100%);
				pointer-events: none;
				z-index: 1;
			}

			&::before {
				content: '';
				position: absolute;
				inset: 0;
				box-shadow: 0 0 1.5rem -1rem black inset;
				pointer-events: none;
				z-index: 1;
			}
		}

		.project-card__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s ease;
		}

		.project-card__content {
			display: flex;
			flex-direction: column;
			flex: 1;
			padding: 1.5rem;
			gap: 1rem;
		}

		.project-card__header {
			display: grid;
			align-items: flex-start;
			justify-content: flex-start;
			grid-template-columns: auto 1fr;
			flex-wrap: wrap;
			gap: 1rem;
			flex: 1;
		}

		.project-card__title {
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--shade-darker);
			margin: 0;
			line-height: 1.2;
		}

		.project-card__description {
			font-size: 1rem;
			line-height: 1.6;
			color: var(--shade-dark);
			margin: 0;
			flex: 1;
		}

		.project-card__links {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			width: 100%;
		}

		.project-card__icon-link {
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--shade-dark);
			transition:
				color 0.2s ease,
				transform 0.2s ease;
		}

		.project-card__icon-link:hover {
			color: var(--shade-darkest);
			transform: scale(1.1);
		}

		.project-card__no-repo {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--shade-darker);
		}

		.project-card__no-repo-line {
			position: absolute;
			width: 2rem;
			height: 2px;
			background: var(--color-primary);
			transform: rotate(-45deg);
		}

		.project-card__goto-links {
			display: flex;
			gap: 0.5rem;
			align-items: stretch;
		}

		.project-card__goto-app {
			display: flex;
			align-items: stretch;
			justify-content: stretch;

			:global(.btn) {
				width: 100%;
			}

			:global(.btn .btn__text) {
				gap: 0.5rem;
			}

			:global(.btn [class*='icon']) {
				margin-top: -0.25rem;
			}
		}

		.project-card__badges {
			display: flex;
			flex-wrap: wrap-reverse;
			gap: 0.5rem;
			position: absolute;
			inset: auto 0 0 0;
			padding: 0.75rem 1rem;
			z-index: 2;

			.badge {
				display: inline-flex;
				gap: 0.25rem;
				padding: 0.25rem 0.75rem;
				border-radius: 1rem;
				font-size: 0.75rem;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.5px;
				backdrop-filter: blur(3px);
				background: color-mix(in srgb, var(--badge-color, var(--shade-light)) 15%, rgb(255 255 255 / 0.8));
				color: color-mix(in srgb, var(--badge-color, var(--shade-dark)) 80%, black);
				border: 1px solid color-mix(in srgb, var(--badge-color, var(--shade-light)) 30%, rgb(255 255 255 / 0.8));
			}

			.badge__icon {
				font-size: 1rem;
			}
		}
	}
</style>
