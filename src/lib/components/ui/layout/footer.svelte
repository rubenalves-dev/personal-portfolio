<script>
	import Button from '../button/button.svelte';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Instagram from '@lucide/svelte/icons/instagram';
	import Mail from '@lucide/svelte/icons/mail';
</script>

<footer class="mt-16 border-t border-foreground/30 py-8 backdrop-blur-sm">
	<div class="container mx-auto flex flex-col gap-6 text-center">
		<div class="flex items-center justify-center gap-4">
			<Button variant="ghost" size="icon-lg"><Github class="size-6" /></Button>
			<Button variant="ghost" size="icon-lg"><Linkedin class="size-6" /></Button>
			<Button variant="ghost" size="icon-lg"><Instagram class="size-6" /></Button>
			<Button variant="ghost" size="icon-lg"><Mail class="size-6" /></Button>
		</div>

		<p class="text-foreground">© Rúben Alves. All rights reserved</p>
	</div>
</footer>

<style>
	footer {
		background: var(--dynamic-background), var(--static-background);
		background-blend-mode: var(--dynamic-background-blend-mode), var(--static-background-blend-mode);
		background-attachment: fixed;
		isolation: isolate;
	}
</style>
