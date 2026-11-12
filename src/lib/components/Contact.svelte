<script lang="ts">
	import { site } from '$lib/data/site';
	import Card from './Card.svelte';
	import Section from './Section.svelte';
</script>

<Section id="contact" title="Contact">
	<div class="grid two">
		<Card stock="salmon" label="See also" note="Correspondence">
			<h3>Open to SDE and AI/ML engineering roles.</h3>
			<p>Fastest way to reach me is email. The CV has the full project and skills list.</p>
			<p class="gap"><a class="strong" href="mailto:{site.email}">{site.email}</a></p>
			<p><a class="strong" href="tel:{site.phone.href}">{site.phone.display}</a></p>
			<p class="gap">
				<a href={site.links.github} target="_blank" rel="noopener">GitHub</a>.
				<a href={site.links.linkedin} target="_blank" rel="noopener">LinkedIn</a>.
				<a href={site.links.leetcode} target="_blank" rel="noopener">LeetCode</a>.
			</p>
		</Card>

		<!--
			Netlify Forms: the attributes below are read from the prerendered HTML at
			deploy time, which is what registers the form. Submissions POST natively
			to Netlify, which then redirects to /thanks.
		-->
		<form
			class="slip on-paper"
			name="contact"
			method="POST"
			action="/thanks/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label>
					Leave this field empty if you are human: <input name="bot-field" tabindex="-1" />
				</label>
			</p>

			<h3>Request slip <span>Please print</span></h3>

			<label for="c-name">
				Name
				<input id="c-name" name="name" type="text" required placeholder="Your name" />
			</label>

			<label for="c-email">
				Email
				<input id="c-email" name="email" type="email" required placeholder="you@company.com" />
			</label>

			<label for="c-msg">
				Message
				<textarea id="c-msg" name="message" required placeholder="The role, the team, the stack"
				></textarea>
			</label>

			<button type="submit">Send message</button>
		</form>
	</div>
</Section>

<style>
	.strong {
		font-weight: 700;
	}

	/* The form is a library request slip: a paler paper than the cards, a
	   printed heading, and fields you fill in on dashed lines. */
	.slip {
		display: grid;
		gap: 1.1rem;
		min-width: 0;
		padding: 1.4rem 1.6rem 1.6rem;
		background: var(--slip);
		color: var(--ink);
		box-shadow:
			0 10px 18px -8px var(--shadow),
			0 2px 3px var(--shadow);
		rotate: 0.5deg;
	}

	h3 {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 12px;
		padding-bottom: 0.4rem;
		border-bottom: 2px solid var(--ink);
		font-family: var(--slab);
		font-size: 1.3rem;
		font-weight: 700;
	}

	h3 span {
		color: var(--ink-dim);
		font-family: var(--type);
		font-size: 0.85rem;
		font-weight: 400;
	}

	label {
		display: grid;
		gap: 2px;
		color: var(--ink-dim);
		font-size: 0.85rem;
	}

	input,
	textarea {
		width: 100%;
		padding: 4px 0;
		border: 0;
		border-bottom: 1px dashed var(--ink-dim);
		border-radius: 0;
		background: none;
		color: var(--ink);
		font: inherit;
		font-size: 1rem;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--ink-dim);
		opacity: 0.75;
	}

	/* The message area is ruled like the cards. */
	textarea {
		min-height: calc(4 * var(--lh));
		resize: vertical;
		line-height: var(--lh);
		border-bottom-style: solid;
		background-image: linear-gradient(to bottom, transparent calc(100% - 1px), var(--line) 0);
		background-size: 100% var(--lh);
	}

	input:focus-visible,
	textarea:focus-visible {
		outline: none;
		border-bottom: 2px solid var(--rule);
	}

	button {
		justify-self: start;
		padding: 8px 18px;
		border: 0;
		background: var(--ink);
		color: var(--slip);
		font-weight: 700;
	}

	button:hover {
		background: var(--rule);
	}
</style>
