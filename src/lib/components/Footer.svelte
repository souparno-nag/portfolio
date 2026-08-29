<script lang="ts">
	import { site } from '$lib/data/site';

	const links = [
		{ label: 'Email', href: `mailto:${site.email}`, external: false },
		{ label: 'GitHub', href: site.links.github, external: true },
		{ label: 'LinkedIn', href: site.links.linkedin, external: true },
		{ label: 'LeetCode', href: site.links.leetcode, external: true },
		{ label: 'CV', href: site.cv, external: true }
	];
</script>

<footer
	class="flex flex-wrap items-center gap-4 border-t border-[var(--divider)] pb-[calc(2*var(--leading))] pt-[var(--leading)] text-[14px] text-ink/70"
>
	<span class="mr-auto">© {new Date().getFullYear()} {site.name}</span>
	{#each links as link (link.label)}
		<a
			href={link.href}
			target={link.external ? '_blank' : undefined}
			rel={link.external ? 'noopener' : undefined}
			class="text-accent-700 underline-offset-[3px] hover:text-accent"
		>
			{link.label}
		</a>
	{/each}
</footer>
