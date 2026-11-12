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

<footer class="wrap">
	<div class="row">
		<span>© {new Date().getFullYear()} {site.name}</span>
		{#each links as link (link.label)}
			<a
				href={link.href}
				target={link.external ? '_blank' : undefined}
				rel={link.external ? 'noopener' : undefined}
			>
				{link.label}
			</a>
		{/each}
	</div>
</footer>

<style>
	footer {
		margin-top: 72px;
		padding-bottom: 72px;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 24px;
		padding-top: 18px;
		border-top: 1px dashed var(--desk-dim);
		color: var(--desk-dim);
		font-size: 0.9rem;
	}

	span {
		margin-right: auto;
	}

	a:hover {
		color: var(--desk-fg);
	}
</style>
