<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>Message sent — {site.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="thanks">
	<Card stock="mint" label="Received" note="Request slip">
		<h1>Thanks. Your message is in.</h1>
		<p>
			I read everything that comes through and will reply as soon as I can. If it is urgent, email
			me directly at <a href="mailto:{site.email}">{site.email}</a>.
		</p>
	</Card>
	<a class="btn" href="/">Back to the portfolio</a>
</section>

<style>
	.thanks {
		display: grid;
		justify-items: start;
		gap: 26px;
		max-width: 640px;
		padding-block: 40px;
	}

	.thanks :global(.card) {
		rotate: -0.6deg;
	}
</style>
