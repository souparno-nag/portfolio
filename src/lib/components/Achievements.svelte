<script lang="ts">
	import { achievements } from '$lib/data/achievements';
	import Card from './Card.svelte';
	import Section from './Section.svelte';

	const stock = ['salmon', 'buff', 'sky'] as const;
</script>

<Section id="achievements" title="Achievements and education">
	<div class="grid">
		{#each achievements as item, i (item.title)}
			<Card stock={stock[i % stock.length]} label={item.label}>
				<h3>{item.title}.</h3>
				<p>{item.body}</p>
			</Card>
		{/each}
	</div>
</Section>
