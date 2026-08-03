<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import WoodBorders from '$lib/components/WoodBorders.svelte';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="page-wrapper">
	<WoodBorders width={60} mobileWidth={20} />
	{@render children()}
</div>

<style>
	.page-wrapper {
		position: relative;
		min-height: 100vh;
	}
</style>