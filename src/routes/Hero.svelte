<script lang="ts">
	import Button from '$lib/ui/Button.svelte';

	const rows = 8;
	const randoms = Array.from({ length: rows }, () => Math.random());
</script>

{#snippet nameRow()}
	<span class="hero__background-title"><span class="hero__background-character">R</span>úben</span><span
		class="hero__background-title">&nbsp;<span class="hero__background-character">A</span>lexandre</span
	><span class="hero__background-title"
		>&nbsp<span class="hero__background-character">I</span>sa<span class="hero__background-character">í</span>as</span
	><span class="hero__background-title"
		>&nbsp;<span class="hero__background-character hero__background-character--em">A</span> lves&nbsp;</span
	>
{/snippet}

{#snippet layer(i: number)}
	<div
		class="hero__background-layer {i % 2 === 0 && 'hero__background-layer--reverse'}"
		style="--scalar: {1 + i * randoms[i]};--delay: {-10 * i}s"
	>
		<div class="hero__background-row">
			{@render nameRow()}
		</div>
		<div class="hero__background-row">
			{@render nameRow()}
		</div>
		<div class="hero__background-row">
			{@render nameRow()}
		</div>
	</div>
{/snippet}

<section class="hero">
	<div class="hero__background">
		{#each Array(rows), i (i)}
			{@render layer(i)}
		{/each}
	</div>

	<div class="hero__content container">
		<h2 class="hero__subtitle">Fullstack developer <span class="hero__flag">&#127477;&#127481;</span></h2>
		<h1 class="hero__title">Rúben Alves</h1>
		<div class="hero__button-wrapper">
			<Button href="#contact-me">Get in touch <i class="icon-arrow-right"></i></Button>
		</div>
	</div>
</section>

<style>
	.hero {
		width: 100%;
		height: 80vh;
		min-height: 20rem;
		max-height: 30rem;
		position: relative;
		display: grid;
		justify-content: center;
		align-items: center;

		.hero__background {
			position: absolute;
			z-index: -1;
			inset: 0;
			overflow-y: hidden;
			background-color: var(--shade-lightest);

			.hero__background-layer {
				display: flex;
				width: fit-content;
				animation: scroll-left calc(60s * var(--scalar, 1)) linear infinite;
				animation-delay: var(--delay, 0);
				will-change: transform;

				.hero__background-row {
					display: inline-flex;
					white-space: nowrap;
				}
			}

			.hero__background-layer--reverse {
				animation: scroll-right calc(60s * var(--scalar, 1)) linear infinite;
			}

			.hero__background-title,
			.hero__background-character {
				color: var(--shade-lighter);
				font-size: clamp(6rem, 6vw, 10rem);
				font-weight: 900;
				text-transform: uppercase;
				line-height: 0.725;
				opacity: 0.5;
				text-wrap: nowrap;
				letter-spacing: -0.1em;

				.hero__background-character {
					color: var(--shade-light);
					opacity: 0.5;

					&.hero__background-character--em {
						text-shadow:
							0.145em 0 0 var(--shade-lightest),
							0.215em 0.215em 0 var(--shade-lightest),
							0.29em 0 0 var(--shade-light);
					}
				}
			}
		}

		.hero__content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;

			.hero__title {
				text-transform: uppercase;
				color: var(--color-primary);
				font-size: clamp(3rem, 6vw, 6rem);
				margin-bottom: 1rem;
			}

			.hero__subtitle {
				display: inline-flex;
				align-items: center;
				gap: 0.5em;
				color: var(--shade-darkest);

				.hero__flag {
					font-size: 2rem;
				}
			}
		}

		.hero__button-wrapper {
			align-self: flex-end;
		}
	}

	@keyframes scroll-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@keyframes scroll-right {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}
</style>
