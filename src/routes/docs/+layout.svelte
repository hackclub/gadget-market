<script>
	let { data, children } = $props();
</script>

<div class="docs-layout">
	<nav class="sidebar">
		<div>
			<a href="/"><img src="/shopback.png" alt="back to home" class="m-5 max-w-30 glow hover:scale-102 transition"/></a>
			{#each data.docs as doc}
				<p>
					<a href="/docs/{doc.slug}">{doc.title}</a>
				</p>
			{/each}
		</div>
	</nav>

	<main class="docs-content">

		<div class="bg-[#F1EFE2] px-16 py-4 mt-5">
			{@render children()}
		</div>
		
	</main>
</div>

<style>
	.docs-layout {
		display: flex;
		gap: 2rem;
	}

	.sidebar {
		width: 220px;
		flex-shrink: 0;
	}

	.sidebar a {
		display: block;
		padding: 0.5rem 0;
		text-decoration: none;
	}

	.docs-content {
		flex: 1;
		max-width: 700px;
	}
</style>