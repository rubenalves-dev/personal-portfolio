<script>
	import Button from '../button/button.svelte';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Instagram from '@lucide/svelte/icons/instagram';
	import Mail from '@lucide/svelte/icons/mail';
</script>

<footer class="border-t border-foreground/30 bg-background py-8">
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
