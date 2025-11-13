<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/ui/layout/header.svelte';
	import Footer from '$lib/components/ui/layout/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import Background from '$lib/components/ui/layout/background.svelte';

	let { children } = $props();
</script>

<Toaster />
<ModeWatcher />

<Header />
<Background />

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	:global(h2) {
		font-size: 2.5rem;
	}

	:global(h3) {
		font-size: 1.875rem;
	}

	:global(h2) {
		line-height: 2;
		font-weight: bold;
		position: relative;

		&::after {
			--line-height: 0.25em;
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

	main {
		--header-padding: calc((var(--spacing) * 3) * 2);
		--header-image-size: calc(var(--spacing) * 12);
		--header-button-font-size: calc(var(--text-sm) * var(--text-sm--line-height));
		--header-button-padding: calc((var(--spacing) * 2) * 2);
		--header-size: calc(var(--header-padding) + var(--header-image-size) + 1px);

		min-height: 100vh;
		/*padding-top: var(--header-size, 6rem);*/
	}
</style>
