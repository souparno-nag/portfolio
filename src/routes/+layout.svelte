<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<Nav />

<div class="mx-auto max-w-[1180px] px-[var(--edge)]">
	{@render children()}
	<Footer />
</div>
