<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { projects } from '$lib/data/projects';
	import SectionLabel from './SectionLabel.svelte';
</script>

<section
	id="work"
	use:reveal
	class="py-[calc(2*var(--leading))] transition-[opacity,transform] duration-700 ease-out"
>
	<SectionLabel class="mb-[calc(1.5*var(--leading))]">Projects</SectionLabel>

	<div
		class="grid gap-[clamp(18px,2.4vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]"
	>
		{#each projects as project (project.title)}
			<article
				class="flex flex-col gap-3 rounded-md bg-surface p-[clamp(20px,2vw,28px)] shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg motion-reduce:hover:translate-y-0"
			>
				<span class="text-[10px] uppercase tracking-[0.1em] text-accent">{project.kicker}</span>
				<h3 class="font-heading text-[22px] leading-[1.2]">{project.title}</h3>
				<p class="m-0 flex-1 text-[14.5px] leading-[1.62] text-ink/80">{project.body}</p>
				{#if project.repo}
					<a
						href={project.repo}
						target="_blank"
						rel="noopener"
						class="text-[13.5px] font-semibold text-accent-700 no-underline hover:text-accent"
					>
						View on GitHub →
					</a>
				{/if}
			</article>
		{/each}
	</div>
</section>
