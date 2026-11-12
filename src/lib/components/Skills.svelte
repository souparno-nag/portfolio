<script lang="ts">
	import { skills, type SkillGroup } from '$lib/data/skills';
	import Section from './Section.svelte';

	// Each tone in the data maps to one card stock.
	const stock: Record<SkillGroup['tone'], string> = {
		neutral: 'manila',
		accent: 'salmon',
		accent2: 'mint'
	};
</script>

<Section id="skills" title="Skills">
	<div class="grid guides">
		{#each skills as group (group.label)}
			<div class="card guide {stock[group.tone]}">
				<h3 class="tab">{group.label}</h3>
				<ul>
					{#each group.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>

<style>
	/* Guide cards: plain cards with a raised tab, the kind that separate
	   runs of cards in a drawer. Extra row gap leaves room for the tabs. */
	.guides {
		row-gap: 58px;
		padding-top: 28px;
	}

	.guide {
		padding-top: 1rem;
		padding-bottom: 2.4rem;
	}

	.tab {
		position: absolute;
		bottom: 100%;
		left: 8%;
		max-width: 84%;
		padding: 7px 16px 4px;
		border-radius: 8px 8px 0 0;
		background: inherit;
		box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.45) inset;
		font-family: var(--slab);
		font-size: 1.02rem;
		font-weight: 700;
		line-height: 1.2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Tabs step across the top, left to right, as they do in a real drawer. */
	.guide:nth-child(3n + 2) .tab {
		left: auto;
		right: 30%;
	}

	.guide:nth-child(3n) .tab {
		left: auto;
		right: 8%;
	}

	li {
		padding-left: 1.6em;
		text-indent: -1.6em;
	}
</style>
