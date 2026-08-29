<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>Message sent — {site.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="py-[calc(3*var(--leading))]">
	<div class="rounded-panel bg-accent2-100 px-[clamp(24px,4vw,60px)] py-[clamp(36px,5vw,72px)]">
		<h1 class="mb-[var(--leading)] max-w-[18ch] font-heading text-[clamp(32px,5vw,56px)] leading-[1.1]">
			Thanks — your message is in.
		</h1>
		<p class="mb-[var(--leading)] max-w-[48ch] text-[16px] leading-[var(--leading)] text-ink/80">
			I read everything that comes through and will reply as soon as I can. If it is urgent, email
			me directly at
			<a href="mailto:{site.email}" class="text-accent-700 hover:text-accent">{site.email}</a>.
		</p>
		<Button href="/" variant="primary">Back to the portfolio</Button>
	</div>
</section>
