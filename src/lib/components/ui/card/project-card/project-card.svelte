<script lang="ts">
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import Github from '@lucide/svelte/icons/github';
	import { Card, CardContent, CardTitle, CardDescription } from '..';
	import { Button } from '../../button';
	import { ImageManager } from '$lib/utils/files/image-manager';

	type Props = {
		title: string;
		description?: string;
		image?: string;

		source_url?: string;
		live_url?: string;
	};

	const props: Props = $props();
</script>

<Card
	class="group overflow-hidden p-0 transition  duration-300 hover:-translate-y-1 hover:drop-shadow-lg hover:drop-shadow-primary/15"
>
	<CardContent class="p-0">
		<div class="aspect-video overflow-hidden">
			<img
				src={ImageManager.getImageUrl(props.image, 'project')}
				alt={props.title}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		</div>

		<article class="flex flex-col gap-4 p-6 pb-4">
			<header class="flex flex-col gap-2">
				<CardTitle>{props.title}</CardTitle>
				<CardDescription>{props.description}</CardDescription>
			</header>

			{#if props.source_url || props.live_url}
				<div class="flex gap-2">
					{#if props.source_url}
						<Button variant="outline"><Github /> Source Code</Button>
					{/if}
					{#if props.live_url}
						<Button><ExternalLink /> Live App</Button>
					{/if}
				</div>
			{/if}
		</article>
	</CardContent>
</Card>

<style>
	:global(.project-card) {
		cursor: pointer;
		&:hover {
			translate: 0 -0.5rem;
			box-shadow: var(--project-card-shadow) !important;
		}
	}
</style>
