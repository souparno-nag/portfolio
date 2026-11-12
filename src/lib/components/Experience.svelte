<script lang="ts">
	import { experience } from '$lib/data/experience';
	import Card from './Card.svelte';
	import Section from './Section.svelte';
</script>

<Section id="experience" title="Experience">
	<div class="grid two">
		{#each experience as role (role.org)}
			<Card stock="sky" label={role.period} note={role.location}>
				<h3 class="org">{role.org}.</h3>
				<p>{role.position}.</p>
				{#each role.points as point, i (point)}
					<p class={i === 0 ? 'gap' : undefined}>{point}</p>
				{/each}
			</Card>
		{/each}
	</div>
</Section>

<style>
	.org {
		text-transform: uppercase;
	}
</style>
