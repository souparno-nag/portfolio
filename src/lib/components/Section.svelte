<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		/** Printed on the manila tab that heads the section. */
		title: string;
		children: Snippet;
	};

	let { id, title, children }: Props = $props();
</script>

<section {id} aria-labelledby="{id}-title">
	<div class="tabrow"><h2 id="{id}-title">{title}</h2></div>
	{@render children()}
</section>
