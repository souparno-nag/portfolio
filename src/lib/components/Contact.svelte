<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$lib/data/site';
	import Button from './Button.svelte';

	const field =
		'w-full rounded-md border border-[var(--divider)] bg-bg px-2.5 py-1.5 text-[14px] text-ink caret-accent hover:border-ink/45 focus-visible:border-accent focus-visible:outline-offset-0';
</script>

<section
	id="contact"
	use:reveal
	class="pb-[calc(2*var(--leading))] transition-[opacity,transform] duration-700 ease-out"
>
	<div
		class="grid items-start gap-x-[clamp(28px,5vw,80px)] gap-y-[var(--leading)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]"
	>
		<div>
			<h2 class="mb-3 font-heading text-[clamp(28px,3.4vw,38px)] leading-[1.15]">
				Open to SDE and AI/ML engineering roles.
			</h2>
			<p class="mb-[var(--leading)] max-w-[44ch] text-[16px] leading-[var(--leading)] text-ink/80">
				Fastest way to reach me is email. The CV has the full project and skills list.
			</p>
			<div class="grid gap-2.5 text-[16px] leading-[1.5]">
				<a href="mailto:{site.email}" class="text-accent-700 underline-offset-[3px] hover:text-accent">
					{site.email}
				</a>
				<a
					href="tel:{site.phone.href}"
					class="text-accent-700 underline-offset-[3px] hover:text-accent"
				>
					{site.phone.display}
				</a>
			</div>
			<div class="mt-[var(--leading)] flex flex-wrap gap-2">
				<Button href={site.links.github} size="sm" target="_blank" rel="noopener">GitHub</Button>
				<Button href={site.links.linkedin} size="sm" target="_blank" rel="noopener">LinkedIn</Button>
				<Button href={site.links.leetcode} size="sm" target="_blank" rel="noopener">LeetCode</Button>
			</div>
		</div>

		<!--
			Netlify Forms: the attributes below are read from the prerendered HTML at
			deploy time, which is what registers the form. Submissions POST natively
			to Netlify, which then redirects to /thanks.
		-->
		<form
			name="contact"
			method="POST"
			action="/thanks/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			class="grid gap-3 rounded-panel bg-accent-100 p-[clamp(24px,3vw,40px)]"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p class="hidden">
				<label>
					Leave this field empty if you are human: <input name="bot-field" tabindex="-1" />
				</label>
			</p>

			<div>
				<label for="c-name" class="mb-[5px] block text-[12px] text-ink/70">Name</label>
				<input id="c-name" name="name" type="text" required placeholder="Your name" class={field} />
			</div>

			<div>
				<label for="c-email" class="mb-[5px] block text-[12px] text-ink/70">Email</label>
				<input
					id="c-email"
					name="email"
					type="email"
					required
					placeholder="you@company.com"
					class={field}
				/>
			</div>

			<div>
				<label for="c-msg" class="mb-[5px] block text-[12px] text-ink/70">Message</label>
				<textarea
					id="c-msg"
					name="message"
					required
					placeholder="The role, the team, the stack"
					class="{field} min-h-24 resize-y rounded-lg"
				></textarea>
			</div>

			<Button type="submit" variant="primary" class="justify-self-start">Send message</Button>
		</form>
	</div>
</section>
