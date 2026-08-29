<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tone?: 'accent' | 'accent2';
		class?: string;
		children: Snippet;
	};

	let { tone = 'accent', class: extra = '', children }: Props = $props();
</script>

<p
	class="m-0 text-[13px] font-semibold uppercase tracking-[0.06em] {tone === 'accent'
		? 'text-accent-700'
		: 'text-accent2-800'} {extra}"
>
	{@render children()}
</p>
