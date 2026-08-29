<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { experience } from '$lib/data/experience';
	import SectionLabel from './SectionLabel.svelte';
</script>

<section
	id="experience"
	use:reveal
	class="py-[calc(2*var(--leading))] transition-[opacity,transform] duration-700 ease-out"
>
	<SectionLabel class="mb-[calc(1.5*var(--leading))]">Experience</SectionLabel>

	{#each experience as role, i (role.title)}
		<div
			class="grid grid-cols-1 items-start gap-[clamp(16px,3vw,44px)] sm:grid-cols-[minmax(120px,170px)_1fr] {i >
			0
				? 'pt-[var(--leading)]'
				: ''} {i < experience.length - 1
				? 'border-b border-[var(--divider)] pb-[var(--leading)]'
				: ''}"
		>
			<div class="flex items-center gap-2.5 text-[14px] font-semibold text-ink/65">
				<span
					class="size-3 flex-none rounded-full {role.tone === 'accent'
						? 'bg-accent'
						: 'bg-accent2-500'}"
				></span>
				{role.period}
			</div>
			<div>
				<h3 class="mb-1 font-heading text-[23px]">{role.title}</h3>
				<p class="mb-3 text-[13px] text-ink/60">{role.location}</p>
				<ul
					class="grid max-w-[62ch] list-disc gap-2 pl-5 text-[15px] leading-[var(--leading)] text-ink/80"
				>
					{#each role.points as point (point)}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</section>
