<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title?: string;
		children?: Snippet;
	};

	const props: Props = $props();
</script>

<section class="container mx-auto mb-16 flex flex-col gap-8 py-6">
	<h2>{props.title ?? 'Section'}</h2>

	<div>
		{#if props.children}
			{@render props.children()}
		{/if}
	</div>
</section>

<style>
	/*:global(h2) {
		font-size: 2.5rem;
		line-height: 2;
		font-weight: bold;
		position: relative;

		&::after {
			--line-height: 0.25rem;
			--line-width: calc(15 * var(--line-height));

			content: '';
			position: absolute;

			left: 0;
			bottom: 0;
			width: var(--line-width);
			height: var(--line-height);
			background-color: var(--color-primary);
			z-index: 1;
		}
	}*/

	h2 {
		font-size: 2.5rem;
		line-height: 2;
		font-weight: bold;
		position: relative;

		&::after {
			--line-height: 0.25rem;
			--line-width: calc(15 * var(--line-height));

			content: '';
			position: absolute;

			left: 0;
			bottom: 0;
			width: var(--line-width);
			height: var(--line-height);
			background-color: var(--color-primary);
			z-index: 1;
		}
	}
</style>
