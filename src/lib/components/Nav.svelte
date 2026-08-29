<script lang="ts">
	import { site } from '$lib/data/site';
	import Button from './Button.svelte';
</script>

<nav
	class="relative z-10 mx-auto flex max-w-[1180px] flex-wrap items-center gap-4 px-[var(--edge)] py-3"
>
	<a href="/#top" class="mr-auto font-heading text-[18px] text-ink no-underline">{site.name}</a>
	<a href="/#work" class="text-[14px] text-ink no-underline hover:text-accent">Work</a>
	<a href="/#experience" class="text-[14px] text-ink no-underline hover:text-accent">Experience</a>
	<a href="/#contact" class="text-[14px] text-ink no-underline hover:text-accent">Contact</a>
	<Button href={site.cv} variant="primary" size="sm" download target="_blank" rel="noopener">
		Download CV
	</Button>
</nav>
