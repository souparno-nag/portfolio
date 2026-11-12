<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Card from './Card.svelte';
	import Section from './Section.svelte';

	// Mostly buff, with the odd coloured card, like a drawer that has been
	// added to over the years.
	const stock = ['buff', 'mint', 'buff', 'salmon', 'buff', 'mint', 'salmon', 'buff', 'buff'] as const;

	const position = (i: number) => `${String(i + 1).padStart(2, '0')} of ${projects.length}`;

	// "Go · Kafka · Redis" becomes "1. Go. 2. Kafka. 3. Redis."
	const tracings = (kicker: string) =>
		kicker
			.split(' · ')
			.map((subject, i) => `${i + 1}. ${subject}.`)
			.join(' ');
</script>

<Section id="projects" title="Projects">
	<div class="grid">
		{#each projects as project, i (project.title)}
			<Card stock={stock[i % stock.length]} label={project.callNumber} note={position(i)}>
				<h3>{project.title}.</h3>
				<p>{project.body}</p>
				<p class="tracings">{tracings(project.kicker)}</p>
				{#if project.repo}
					<a class="more" href={project.repo} target="_blank" rel="noopener">View on GitHub</a>
				{/if}
			</Card>
		{/each}
	</div>
</Section>
