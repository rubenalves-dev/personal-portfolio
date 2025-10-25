<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import AboutImage from '$lib/assets/images/me.png';

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

	<div class="hero__content">
		<p class="hero__subtitle">Fullstack developer <span class="hero__flag">&#127477;&#127481;</span></p>
		<h1 class="hero__title">Rúben Alves</h1>
		<Button href="#contact-me" iconRight="icon-arrow-right">Get in touch</Button>
	</div>
</section>

<section class="about container">
	<div class="about__wrapper">
		<div class="about__image-wrapper">
			<img class="about__image" alt="Stylized Rúben Alves" src={AboutImage} />
		</div>

		<div class="about__content">
			<h2 class="about__title">About me</h2>
			<p class="about__text">
				I'm a web developer focused on building scalable and bullet proof solutions, planning, designing, building and
				implementing them for your needs.
			</p>
			<p class="about__text">
				I'm passionate about discovering new technologies, libraries, frameworks, and now, artificial intellegence. I
				love to try new things and to find better ways to do things.
			</p>
			<p class="about__text">Let's work together to bring your ideas to life!</p>
		</div>
	</div>
</section>

<h2>Projects</h2>

<div>
	<div class="card">
		<h3>JF Alcoentre</h3>
		<a href="https://jf-alcoentre.pt" target="_blank">Visit &ShortRightArrow;</a>
	</div>

	<div class="card">
		<h3>Centro Social e Paroquial de Moscavide</h3>
		<a href="https://centrosocialparoquialdemoscavide.org/" target="_blank">Visit &ShortRightArrow;</a>
	</div>

	<Button variant="primary">primario</Button>
	<Button variant="secondary">secundario</Button>
	<Button variant="link" href="google.com">link</Button>
</div>

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
			.hero__title {
				text-transform: uppercase;
				color: var(--color-primary);
				font-size: clamp(3rem, 6vw, 6rem);
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
	}

	.about {
		margin: 4rem auto;
		padding: 0 1rem;

		.about__wrapper {
			display: grid;
			grid-template-columns: minmax(300px, 2fr) 3fr;
			gap: 2rem;
		}

		.about__image-wrapper {
			width: 100%;
			height: 100%;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			background: var(--shade-light);
			border-radius: 1rem;

			.about__image {
				aspect-ratio: 3/4;
				width: 100%;
				height: 100%;
				mix-blend-mode: overlay;
				height: auto;
				opacity: 1;
				object-fit: cover;
			}
		}

		.about__title {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		.about__text {
			font-size: 1.125rem;
			line-height: 1.6;
			color: var(--shade-dark);
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
