<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { achievements } from '$lib/data/achievements';
	import SectionLabel from './SectionLabel.svelte';
</script>

<section
	use:reveal
	class="pb-[calc(2*var(--leading))] pt-[calc(1.5*var(--leading))] transition-[opacity,transform] duration-700 ease-out"
>
	<div
		class="rounded-panel bg-accent2-100 px-[clamp(24px,4vw,60px)] py-[clamp(28px,3.5vw,52px)]"
	>
		<SectionLabel tone="accent2" class="mb-[var(--leading)]">Achievements &amp; education</SectionLabel>

		<div
			class="grid gap-x-[clamp(28px,4vw,64px)] gap-y-[var(--leading)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
		>
			{#each achievements as item (item.title)}
				<div>
					<h3 class="mb-2 font-heading text-[20px] leading-[1.25]">{item.title}</h3>
					<p class="m-0 text-[14.5px] leading-[1.6] text-ink/78">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
