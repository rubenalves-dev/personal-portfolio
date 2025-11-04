<script>
	import DownloadIcon from '@lucide/svelte/icons/download';
	import Button from '../button/button.svelte';
	import ModeToggle from '../mode-toggle/mode-toggle.svelte';
</script>

<header
	id="header"
	class="fixed inset-0 bottom-auto z-10 border-b border-foreground/30 bg-background/90 py-6 backdrop-blur-xs"
>
	<div class="container mx-auto flex items-center justify-between">
		<div class="text-foreground">RAIIAA.dev</div>
		<nav>
			<ul class="flex items-center gap-2">
				<li><ModeToggle /></li>
				<li><Button variant="ghost">About</Button></li>
				<li><Button variant="ghost">Projects</Button></li>
				<li><Button variant="ghost">Contacts</Button></li>
				<li><Button><DownloadIcon />Curriculum Vitae</Button></li>
			</ul>
		</nav>
	</div>
</header>
