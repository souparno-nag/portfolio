<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tone?: 'neutral' | 'accent' | 'accent2';
		children: Snippet;
	};

	let { tone = 'neutral', children }: Props = $props();

	const tones = {
		neutral: 'bg-neutral-100 text-neutral-800',
		accent: 'bg-accent-100 text-accent-800',
		accent2: 'bg-accent2-100 text-accent2-800'
	};
</script>

<span
	class="inline-flex items-center rounded-tag px-[15px] py-1.5 text-[13.5px] tracking-[0.02em] {tones[
		tone
	]}"
>
	{@render children()}
</span>
