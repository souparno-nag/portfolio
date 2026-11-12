<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		/** Card stock colour. */
		stock?: 'buff' | 'salmon' | 'mint' | 'sky' | 'manila';
		/** Top-left line: a call number, a date range, a kind of entry. */
		label?: string;
		/** Top-right line, set lighter. */
		note?: string;
		children: Snippet;
	};

	let { stock = 'buff', label = '', note = '', children }: Props = $props();
</script>

<article class="card {stock}">
	<div class="no"><span>{label}</span><span>{note}</span></div>
	<div class="ru">
		{@render children()}
	</div>
</article>
