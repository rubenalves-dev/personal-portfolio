<script>
	import DownloadIcon from '@lucide/svelte/icons/download';
	import Button from '../button/button.svelte';
	import ModeToggle from '../mode-toggle/mode-toggle.svelte';
	import logo from '$lib/assets/images/logo.svg';
</script>

<header id="header" class="fixed inset-0 bottom-auto z-10 border-b border-foreground/30 py-3 backdrop-blur-xs">
	<div class="container mx-auto flex items-center justify-between">
		<div class="flex items-center gap-2 text-foreground"><img class="max-h-12" src={logo} alt="logo" />RAiiAA</div>
		<nav>
			<ul class="flex items-center gap-2">
				<li><Button variant="ghost">About</Button></li>
				<li><Button variant="ghost">Projects</Button></li>
				<li><Button variant="ghost" href="#contact-me">Contacts</Button></li>
				<li class="me-2"><ModeToggle /></li>
				<li><Button><DownloadIcon />Curriculum Vitae</Button></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background: var(--dynamic-background), var(--static-background);
		background-blend-mode: var(--dynamic-background-blend-mode), var(--static-background-blend-mode);
		background-attachment: fixed;
		isolation: isolate;

		&:not(:is(.dark *)) {
			background-color: color-mix(in oklab, var(--color-background) 80%, transparent);
		}
	}
</style>
