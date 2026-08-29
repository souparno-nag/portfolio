<script lang="ts">
	import { site } from '$lib/data/site';
	import Button from './Button.svelte';
	import SectionLabel from './SectionLabel.svelte';
</script>

<section id="top" class="relative pb-[calc(2*var(--leading))] pt-[calc(2.5*var(--leading))]">
	<!-- The sage circle that bleeds off the right edge of the design. -->
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-[190px] right-[min(0px,calc(100vw-1420px))] z-0 h-[430px] w-[430px] rounded-full bg-accent2-200"
	></div>

	<div class="relative z-[1]">
		<SectionLabel class="mb-[var(--leading)]">{site.role}</SectionLabel>

		<h1
			class="mb-[var(--leading)] -ml-[0.028em] max-w-[15ch] font-heading text-[clamp(40px,6.2vw,80px)] leading-[1.07] tracking-[-0.02em]"
		>
			{site.name}
		</h1>

		<p
			class="mb-[var(--leading)] max-w-[26ch] font-heading text-[clamp(19px,2.2vw,26px)] leading-[1.4]"
		>
			{site.tagline}
		</p>

		<p class="mb-[var(--leading)] max-w-[52ch] text-[16px] leading-[var(--leading)] text-ink/80">
			{site.intro}
		</p>

		<div class="flex flex-wrap gap-3">
			<Button href={site.cv} variant="primary" download target="_blank" rel="noopener">
				Download CV
			</Button>
			<Button href={site.links.github} target="_blank" rel="noopener">GitHub</Button>
			<Button href={site.links.linkedin} target="_blank" rel="noopener">LinkedIn</Button>
		</div>
	</div>
</section>
