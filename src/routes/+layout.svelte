<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import WoodBorders from '$lib/components/WoodBorders.svelte';
	import { afterNavigate } from '$app/navigation';
	let { children } = $props();

	// Skip the wood-border slide-in when arriving via browser back/forward,
	// so it doesn't replay every time someone navigates back to a page.
	let skipEntranceAnimation = $state(false);
	afterNavigate(({ type }) => {
		skipEntranceAnimation = type === 'popstate';
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="page-wrapper">
	<WoodBorders width={60} mobileWidth={20} skipAnimation={skipEntranceAnimation} />
	{@render children()}
</div>

<style>
	.page-wrapper {
		position: relative;
		min-height: 100vh;
	}
</style>