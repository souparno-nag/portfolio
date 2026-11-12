<script lang="ts">
	import { site } from '$lib/data/site';

	const [first, ...rest] = site.name.split(' ');
	// Main-entry form: surname in capitals, then the given name.
	const heading = `${rest.join(' ').toUpperCase()}, ${first}.`;
	const subjects = site.subjects.map((subject, i) => `${i + 1}. ${subject}.`).join(' ');
</script>

<section id="top" class="hero">
	<div class="card">
		<div class="no"><span>{site.callNumber}</span><span>Main entry</span></div>
		<div class="entry">
			<h1 aria-label={site.name}>{heading}</h1>
			<p class="tagline">{site.tagline}</p>
			<p class="intro">{site.intro}</p>
			<p class="subjects">{subjects}</p>
			<span class="stamp">{site.availability}</span>
		</div>
	</div>

	<div class="actions">
		<a class="btn" href="/#contact">Get in touch</a>
		<a class="btn ghost" href="/#projects">Browse the projects</a>
	</div>
</section>

<style>
	.hero {
		display: grid;
		gap: 26px;
		padding-block: 14px 8px;
	}

	/* The one large card on the desk. It is set bigger than the rest, so it
	   carries no ruled lines: they only line up at the standard text size. */
	.card {
		max-width: 840px;
		padding: 1.4rem clamp(1.2rem, 4vw, 1.9rem) 3.2rem;
		font-size: 1.08rem;
		line-height: 1.55;
		rotate: -0.7deg;
	}

	.no {
		margin-bottom: 0.9rem;
	}

	.entry {
		display: grid;
		gap: 0.9rem;
		padding-top: 1.3rem;
		border-top: 1px solid var(--rule);
	}

	h1 {
		font-family: var(--type);
		font-size: clamp(1.6rem, 4.4vw, 2.5rem);
		font-weight: 700;
		line-height: 1.1;
	}

	.tagline {
		max-width: 34ch;
		font-size: clamp(1.12rem, 2.4vw, 1.4rem);
		font-weight: 700;
		line-height: 1.35;
	}

	.intro {
		max-width: 68ch;
		text-indent: 1.6em;
	}

	.subjects {
		font-style: italic;
	}

	/* A rubber stamp: double border, red ink, slightly off square. */
	.stamp {
		justify-self: end;
		margin-top: 0.2rem;
		padding: 5px 12px 2px;
		border: 3px double var(--rule);
		color: var(--rule);
		font-size: 0.92rem;
		font-weight: 700;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		rotate: -4deg;
		opacity: 0.88;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
	}
</style>
