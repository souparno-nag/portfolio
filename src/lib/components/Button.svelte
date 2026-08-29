<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href?: string;
		variant?: 'primary' | 'secondary';
		size?: 'md' | 'sm';
		class?: string;
		children: Snippet;
		[key: string]: unknown;
	};

	let {
		href,
		variant = 'secondary',
		size = 'md',
		class: extra = '',
		children,
		...rest
	}: Props = $props();

	const base =
		'inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent font-heading leading-tight no-underline transition-colors';

	const variants = {
		primary: 'bg-accent text-bg hover:bg-accent-600 active:bg-accent-700',
		secondary: 'border-[var(--divider)] text-ink hover:bg-ink/7 active:bg-ink/15'
	};

	const sizes = {
		md: 'px-6 py-[11px] text-[15px]',
		sm: 'px-5 py-[9px] text-[15px]'
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class="{base} {variants[variant]} {sizes[size]} {extra}"
	{...rest}
>
	{@render children()}
</svelte:element>
