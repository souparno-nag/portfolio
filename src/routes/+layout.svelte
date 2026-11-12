<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Terminal from '$lib/components/Terminal.svelte';

	let { children } = $props();
</script>

<Nav />

<main class="wrap">
	{@render children()}
</main>

<Footer />

<Terminal />
