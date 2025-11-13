<script lang="ts">
	import { isStringNullOrEmpty } from '$lib/utils/strings';
	import type { Snippet } from 'svelte';

	type Props = {
		title?: string;
		children?: Snippet;
		id?: string;
	};

	const props: Props = $props();
</script>

<section id={props.id} class="container mx-auto mb-8 flex flex-col gap-8 py-6">
	{#if !isStringNullOrEmpty(props.title)}
		<h2>{props.title}</h2>
	{/if}

	<div>
		{#if props.children}
			{@render props.children()}
		{/if}
	</div>
</section>

<style>
	section {
		padding-top: var(--header-size);
	}

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
