<script>
	import DownloadIcon from '@lucide/svelte/icons/download';
	import Button from '../button/button.svelte';
</script>

<header id="header" class="fixed inset-0 bottom-auto z-10 border-b border-foreground/30 py-6 backdrop-blur-xs">
	<div class="container mx-auto flex items-center justify-between">
		<div class="text-foreground">RAIIAA.dev</div>
		<nav>
			<ul class="flex items-center gap-2">
				<li><Button variant="ghost">About</Button></li>
				<li><Button variant="ghost">Projects</Button></li>
				<li><Button variant="ghost" href="#contact-me">Contacts</Button></li>
				<!-- <li><ModeToggle /></li> -->
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
	}
</style>
