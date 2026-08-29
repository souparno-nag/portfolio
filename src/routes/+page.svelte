<script lang="ts">
	import Achievements from '$lib/components/Achievements.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { site } from '$lib/data/site';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		email: `mailto:${site.email}`,
		url: site.url,
		jobTitle: site.jobTitle,
		sameAs: [site.links.github, site.links.linkedin, site.links.leetcode],
		alumniOf: { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology' }
	};
</script>

<svelte:head>
	<title>{site.seoTitle}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href={site.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.seoTitle} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url} />
	<meta name="twitter:card" content="summary" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + `script>`}
</svelte:head>

<Hero />
<Skills />
<Experience />
<Projects />
<Achievements />
<Contact />
