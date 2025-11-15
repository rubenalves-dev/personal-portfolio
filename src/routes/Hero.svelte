<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Code from '@lucide/svelte/icons/code-xml';
	import ArrowDown from '@lucide/svelte/icons/arrow-down';
	// import Sparkles from '@lucide/svelte/icons/sparkles';
</script>

<section id="hero" class="relative">
	<div class="hero-background">
		<div class="hero-gradient"></div>
	</div>
	<div class="grid place-content-center px-4 py-20">
		<!-- <div
			class="mx-auto mb-4 flex w-fit items-center justify-center gap-2 rounded-full border border-secondary-200/20 bg-secondary/10 px-6 py-2 backdrop-blur-xs"
		>
			<span class="text-amber-300"><Sparkles /></span> Available for Freelance
		</div> -->
		<h1 class="text-center text-7xl text-balance">
			<span><span class="primary-gradient">R</span><span class="base-gradient">úben</span></span>
			<span><span class="primary-gradient">A</span><span class="base-gradient">lves</span></span>
		</h1>
		<p class="text-center text-balance">&ldquo;I'm just a guy who loves solving problems.&rdquo;</p>

		<div class="my-10 flex flex-wrap items-center justify-center gap-2">
			<Button size="lg" href="/#contact-me"><ArrowDown />Contact me</Button>
			<Button variant="outline" size="lg" href="/#projects"><Code />See my work</Button>
		</div>
	</div>
</section>

<style>
	#hero {
		padding-top: var(--header-size, 6rem);
	}

	.hero-background {
		position: absolute;
		inset: 0;
		z-index: -2;
		overflow-x: hidden;
		mask-image: radial-gradient(at top center, black 30%, transparent 70%);
	}

	.hero-gradient {
		position: absolute;
		opacity: 0.7;
		left: 50%;
		top: 50%;
		translate: -50% -45%;
		width: 100%;
		aspect-ratio: 1 / 1;
		z-index: -1;
		filter: blur(100px);
		background:
			radial-gradient(ellipse at 45% 50%, var(--color-primary), transparent 30%),
			radial-gradient(ellipse at 55% 65%, var(--color-secondary), transparent 40%);
		animation: gradient-move 10s ease-in-out infinite;
	}

	@keyframes gradient-move {
		0%,
		100% {
			translate: -50% -45%;
			rotate: 0deg;
		}
		50% {
			translate: -52% -50%;
			rotate: 90deg;
		}
	}
</style>
