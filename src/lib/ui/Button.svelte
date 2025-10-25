<script module>
	type ButtonVariant = 'primary' | 'secondary' | 'link';
	type ButtonState = 'default' | 'loading' | 'disabled';
	type ButtonSize = 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
	import { isStringNullOrEmpty } from '$lib/utils/strings';
	import type { Snippet } from 'svelte';

	type ButtonProps = {
		iconLeft?: string;
		iconRight?: string;
		text?: string;
		children?: Snippet;
		variant?: ButtonVariant;
		state?: ButtonState;
		size?: ButtonSize;
		href?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
		type?: 'button' | 'submit' | 'reset';
	};

	// Union of possible props
	export type Props = ButtonProps;

	let props: Props = $props();

	let classes = [
		'btn',
		!isStringNullOrEmpty(props.size) && 'btn--' + props.size,
		!isStringNullOrEmpty(props.variant) && 'btn--' + props.variant,
		!isStringNullOrEmpty(props.state) && 'btn--' + props.state
	]
		.filter(Boolean)
		.join(' ');
</script>

{#snippet buttonContent()}
	{#if !isStringNullOrEmpty(props.iconLeft)}
		<span class="btn__icon btn__icon--left"><i class={props.iconLeft}></i></span>
	{/if}

	<span class="btn__text">
		{#if props.children}
			{@render props.children()}
		{:else if !isStringNullOrEmpty(props.text)}
			{props.text}
		{:else}
			Button
		{/if}
	</span>

	{#if !isStringNullOrEmpty(props.iconRight)}
		<span class="btn__icon btn__icon--right"><i class={props.iconRight}></i></span>
	{/if}
{/snippet}

{#if 'href' in props && !isStringNullOrEmpty(props.href)}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class={classes} target={props.target} href={props.href}>
		{@render buttonContent()}
	</a>
{:else}
	<button class={classes} type={(props as ButtonProps).type ?? 'button'}>
		{@render buttonContent()}
	</button>
{/if}

<style>
	a.btn {
		text-decoration: none;
	}

	.btn {
		--btn-color: var(--shade-lightest);
		--btn-background-color: var(--color-primary);

		--btn-padding-block: 0.5em;
		--btn-padding-inline: 2em;

		--btn-border-radius: 0.5rem;
		--btn-border-width: 0;
		--btn-border-color: var(--text-color);

		--btn-letter-spacing: normal;
		--btn-min-width: 0;

		--_btn-color: var(--btn-color);
		--_btn-background-color: var(--btn-background-color);

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

		& .btn__icon {
			color: inherit;
			display: inline-flex;
			align-items: center;
		}

		& .btn__text {
			color: inherit;
			font-family: var(--body-font);
			font-size: var(--font-size);
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

		&.btn--primary {
			--btn-color: var(--shade-lightest);
			--btn-background-color: var(--color-primary);
		}

		&.btn--secondary {
			--btn-color: var(--shade-lightest);
			--btn-background-color: var(--color-secondary);
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
	}
</style>
