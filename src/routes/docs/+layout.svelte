<script>
	import { page } from '$app/state';
	let { data, children } = $props();
	let mobileOpen = $state(false);
</script>

<div class="docs-layout flex min-h-screen flex-col md:flex-row md:gap-16">
	<nav class="w-full shrink-0 md:sticky md:top-0 md:h-screen md:w-3xs md:self-start">
		<div class="bg-[#2F2F2F] text-[#F1EFE2] flex h-full flex-col">
			<div class="flex items-center justify-between p-4 md:p-0">
				<a href="/" class="md:m-5">
					<img
						src="/shopback.webp"
						alt="back to home"
						class="max-w-20 glow transition hover:scale-102 md:max-w-30"
					/>
				</a>
				<button
					type="button"
					class="p-2 md:hidden"
					onclick={() => (mobileOpen = !mobileOpen)}
					aria-label="Toggle docs menu"
					aria-expanded={mobileOpen}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					>
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</button>
			</div>

			<div
				class="px-4 pb-4 md:block md:px-4 {mobileOpen ? 'block' : 'hidden'}"
				onclick={(e) => {
					if (e.target.closest('a')) mobileOpen = false;
				}}
			>
				{#each data.docs as doc}
					{@const active = page.params.slug === doc.slug}
					<div class="mb-1">
						<a
							href="/docs/{doc.slug}"
							class="block rounded px-3 py-1 transition hover:bg-[#377459] {active ? 'bg-[#16915D] font-bold' : ''}"
						>
							{doc.title}
						</a>
						{#if active && doc.headings.length}
							<ul class="mt-1 ml-3 border-l border-[#4D2A10]/30 pl-3">
								{#each doc.headings as heading}
									<li>
										<a
											href="/docs/{doc.slug}#{heading.id}"
											class="block py-1 text-sm opacity-75 transition hover:opacity-100"
										>
											{heading.text}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</div>

			<img
				src="/gadget-market-logo.webp"
				alt="Gadget Market"
				class="mt-auto hidden w-full px-6 py-4 pb-6 md:block"
			/>
		</div>
	</nav>

	<main class="docs-content">

		<div class="bg-[#F1EFE2] px-6 py-4 my-4 md:my-12 mx-6 md:ml-0 mr-6 pb-12 shadow md:px-16 md:mr-24">
			{@render children()}
		</div>

	</main>
</div>

<style>
	.docs-content {
		flex: 1;
		min-width: 0;
	}

</style>