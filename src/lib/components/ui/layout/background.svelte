<script lang="ts">
	// Svelte 5 runes syntax
	let targetX = $state(50);
	let targetY = $state(50);
	let currentX = 50;
	let currentY = 50;

	$effect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			targetX = e.clientX;
			targetY = e.clientY;
		};

		const smoothMove = () => {
			// Smooth interpolation toward the target
			currentX += (targetX - currentX) / 100;
			currentY += (targetY - currentY) / 100;

			document.documentElement.style.setProperty('--bg-x', `${currentX}px`);
			document.documentElement.style.setProperty('--bg-y', `${currentY}px`);

			requestAnimationFrame(smoothMove);
		};

		window.addEventListener('mousemove', handleMouseMove);
		smoothMove();

		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<style>
	:global(body:is(.dark *)) {
		--dynamic-background:
			radial-gradient(
				circle at calc(var(--bg-x, 50%) + (var(--bg-x, 50%) / 2)) calc(var(--bg-y, 50%) + (var(--bg-y, 50%) / 4)),
				color-mix(in oklab, var(--color-accent) 3%, transparent) 0%,
				color-mix(in oklab, var(--background) 30%, transparent) 80%
			),
			radial-gradient(
				circle at var(--bg-x, 50%) var(--bg-y, 30%),
				color-mix(in oklab, var(--color-primary) 20%, transparent) 0%,
				color-mix(in oklab, var(--background) 30%, transparent) 90%
			);
		--static-background:
			radial-gradient(
				120% 120% at 80% 20%,
				color-mix(in oklab, var(--color-muted) 40%, transparent) 0%,
				color-mix(in oklab, var(--color-background) 60%, transparent) 80%
			),
			linear-gradient(
				135deg,
				var(--background) 0%,
				color-mix(in oklab, var(--color-muted) 40%, transparent) 50%,
				var(--background) 100%
			);

		--dynamic-background-blend-mode: hue, multiply;
		--static-background-blend-mode: normal, normal;

		margin: 0;
		min-height: 100vh;
		background: var(--dynamic-background), var(--static-background);
		background-blend-mode: var(--dynamic-background-blend-mode), var(--static-background-blend-mode);
		background-attachment: fixed;
		will-change: background;
	}
</style>
