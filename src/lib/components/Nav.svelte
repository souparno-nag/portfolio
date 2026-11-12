<script lang="ts">
	import { site } from '$lib/data/site';
	import { terminal } from '$lib/terminal.svelte';

	// "Souparno Nag" is filed surname first, as a catalogue would.
	const [first, ...rest] = site.name.split(' ');
	const filedAs = `${rest.join(' ')}, ${first}`;
</script>

<nav class="wrap">
	<a class="plate" href="/#top" aria-label="{site.name}, back to the top">{filedAs}</a>
	<a class="link" href="/#skills">Skills</a>
	<a class="link" href="/#experience">Experience</a>
	<a class="link" href="/#projects">Projects</a>
	<a class="link" href="/#contact">Contact</a>
	<button
		class="btn ghost"
		type="button"
		aria-expanded={terminal.open}
		aria-controls="terminal"
		onclick={() => (terminal.open = !terminal.open)}
	>
		Terminal <kbd>`</kbd>
	</button>
	<a class="btn" href={site.cv} download target="_blank" rel="noopener">Download CV</a>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px 20px;
		padding-block: 22px;
	}

	/* The label holder on the front of a catalogue drawer. */
	.plate {
		margin-right: auto;
		padding: 6px 16px;
		border: 3px solid var(--tab);
		background: var(--buff);
		color: var(--ink);
		font-family: var(--slab);
		font-size: 1.1rem;
		font-weight: 700;
		text-decoration: none;
		box-shadow: 0 2px 0 var(--shadow);
	}

	.link {
		text-decoration: none;
		border-bottom: 1px dashed var(--desk-dim);
	}

	.link:hover {
		border-bottom-style: solid;
	}

	@media (max-width: 520px) {
		kbd {
			display: none;
		}
	}
</style>
