<script>
	let { children } = $props();
</script>

<div class="start-layout">
	{@render children()}
</div>

<style>
	.start-layout {
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>