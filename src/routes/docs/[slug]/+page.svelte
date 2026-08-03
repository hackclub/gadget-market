<script>
	let { data } = $props();
</script>

<article>
	{@html data.doc.html}
</article>

<style>
	article :global(h1) {
		font-size: 2rem;
		font-weight: bold;
		margin: 1.5rem 0 1rem;
	}

	article :global(h2) {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 1.5rem 0 1rem;
	}

	article :global(h3) {
		font-size: 1.25rem;
		font-weight: bold;
		margin: 1.25rem 0 0.75rem;
	}

	article :global(p) {
		margin: 1rem 0;
		line-height: 1.6;
	}

	article :global(ul) {
		margin: 1rem 0;
		padding-left: 1.5rem;
		list-style: disc;
	}

	article :global(ol) {
		margin: 1rem 0;
		padding-left: 1.5rem;
		list-style: decimal;
	}

	article :global(li) {
		margin: 0.25rem 0;
	}

	article :global(a) {
		text-decoration: underline;
	}

	article :global(blockquote) {
		margin: 1rem 0;
		padding-left: 1rem;
		border-left: 3px solid currentColor;
		opacity: 0.85;
	}

	article :global(code) {
		font-family: monospace;
		background: rgba(0, 0, 0, 0.08);
		padding: 0.15rem 0.35rem;
		border-radius: 4px;
	}

	article :global(pre) {
		margin: 1rem 0;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.08);
		border-radius: 6px;
		overflow-x: auto;
	}

	article :global(pre code) {
		background: none;
		padding: 0;
	}

	article :global(hr) {
		margin: 2rem 0;
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.15);
	}

	article :global(img) {
		max-width: 100%;
	}
</style>