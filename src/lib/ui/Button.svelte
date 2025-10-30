<script module>
	type ButtonVariant = 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline' | 'link';
	type ButtonShape = 'square' | 'pill' | 'rectangular' | 'circle';
	type ButtonState = 'default' | 'loading' | 'disabled';
	type ButtonSize = 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
	import { isStringNullOrEmpty } from '$lib/utils/strings';
	import type { Snippet } from 'svelte';

	type Props = {
		text?: string;
		children?: Snippet;
		shape?: ButtonShape;
		variant?: ButtonVariant;
		state?: ButtonState;
		size?: ButtonSize;
		href?: string;
		style?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
		type?: 'button' | 'submit' | 'reset';
	};

	let props: Props = $props();

	let classes = [
		'btn',
		!isStringNullOrEmpty(props.size) && 'btn--' + props.size,
		!isStringNullOrEmpty(props.variant) && 'btn--' + props.variant,
		!isStringNullOrEmpty(props.state) && 'btn--' + props.state,
		!isStringNullOrEmpty(props.shape) && 'btn--' + props.shape
	]
		.filter(Boolean)
		.join(' ');
</script>

{#snippet buttonContent()}
	<span class="btn__text">
		{#if props.children}
			{@render props.children()}
		{:else if !isStringNullOrEmpty(props.text)}
			{props.text}
		{:else}
			Button
		{/if}
	</span>
{/snippet}

{#if 'href' in props && !isStringNullOrEmpty(props.href)}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class={classes} target={props.target} href={props.href} style={props.style}>
		{@render buttonContent()}
	</a>
{:else}
	<button
		class={classes}
		type={(props as Props).type ?? 'button'}
		disabled={props.state === 'disabled'}
		style={props.style}
	>
		{@render buttonContent()}
	</button>
{/if}

<style>
	a.btn:not(.btn--link) {
		text-decoration: none;
	}

	.btn {
		--btn-color: var(--shade-lightest);
		--btn-background-color: var(--color-primary);

		--btn-padding-block: 0.5em;
		--btn-padding-inline: 2em;

		--btn-border-radius: 0.5rem;
		--btn-border-width: 0;
		--btn-border-color: var(--_btn-color, var(--btn-color));

		--btn-letter-spacing: normal;
		--btn-font-size: 1rem;
		--btn-min-width: 0;

		--_btn-color: var(--btn-color);
		--_btn-background-color: var(--btn-background-color);
		--_btn-font-size: var(--btn-font-size);

		display: inline-flex;
		align-items: stretch;
		justify-content: center;
		gap: 0.5rem;
		width: max-content;
		min-width: var(--btn-min-width);
		text-transform: uppercase;

		color: var(--_btn-color);
		background-color: var(--_btn-background-color);
		padding: var(--btn-padding-block) var(--btn-padding-inline);

		border: var(--btn-border-width) solid var(--btn-border-color);
		border-radius: var(--btn-border-radius);

		margin-right: calc(var(--letter-spacing) * -1);
		cursor: pointer;
		user-select: none;
		transition: 150ms all ease;

		& .btn__text {
			display: flex;
			align-items: center;
			justify-content: center;
			color: inherit;
			font-family: var(--body-font);
			font-size: var(--btn-font-size);
			font-weight: 800;
			letter-spacing: var(--btn-letter-spacing);
		}

		&:hover {
			color: var(--_btn-color);
			background-color: color-mix(in oklab, var(--_btn-background-color) 90%, var(--shade-lightest));
		}

		&:active {
			scale: 0.98;
		}

		&.btn--sm {
			--btn-font-size: 0.875rem;
		}

		&.btn--md {
			--btn-font-size: 1rem;
		}

		&.btn--lg {
			--btn-font-size: 1.25rem;
		}

		&.btn--primary {
			--btn-color: var(--shade-lightest);
			--btn-background-color: var(--color-primary);
		}

		&.btn--primary-outline {
			--btn-color: var(--color-primary);
			--btn-background-color: transparent;
			--btn-border-width: 2px;
		}

		&.btn--secondary {
			--btn-color: var(--shade-lightest);
			--btn-background-color: var(--color-secondary);
			--btn-border-width: 2px;
		}

		&.btn--secondary-outline {
			--btn-color: var(--color-secondary);
			--btn-background-color: transparent;
			--btn-border-width: 2px;
		}

		&.btn--link {
			--btn-color: var(--color-primary);
			--btn-background-color: transparent;
			--btn-padding-block: 0;
			--btn-padding-inline: 0;
			--btn-border-width: 0;

			&:hover {
				color: color-mix(in oklab, var(--btn-color) 70%, var(--shade-lightest));
			}

			&:active {
				scale: 1;
			}
		}

		&.btn--disabled {
			--_btn-color: var(--shade-darker);
			--_btn-background-color: var(--shade-lighter);
			cursor: not-allowed;
			pointer-events: none;
		}

		&.btn--loading {
			--_btn-color: var(--shade-darker);
			--_btn-background-color: var(--shade-lighter);
			cursor: wait;
			pointer-events: none;
		}

		&.btn--square {
			--btn-padding-inline: var(--btn-padding-block, 0.5em);
			aspect-ratio: 1 / 1;
		}
	}
</style>
