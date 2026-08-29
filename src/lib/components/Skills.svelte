<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { skills } from '$lib/data/skills';
	import SectionLabel from './SectionLabel.svelte';
	import Tag from './Tag.svelte';
</script>

<section
	use:reveal
	class="py-[calc(1.5*var(--leading))] transition-[opacity,transform] duration-700 ease-out"
>
	<SectionLabel class="mb-[var(--leading)]">Technical skills</SectionLabel>

	<div class="grid">
		{#each skills as group, i (group.label)}
			<div
				class="grid grid-cols-1 items-baseline gap-y-2.5 py-3 sm:grid-cols-[minmax(140px,210px)_1fr] sm:gap-x-[clamp(16px,3vw,40px)] {i <
				skills.length - 1
					? 'border-b border-[var(--divider)]'
					: ''}"
			>
				<p class="m-0 text-[14.5px] font-bold">{group.label}</p>
				<div class="flex flex-wrap gap-2">
					{#each group.items as item (item)}
						<Tag tone={group.tone}>{item}</Tag>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
