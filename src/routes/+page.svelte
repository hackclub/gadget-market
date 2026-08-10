<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { data } = $props();
	let listings = $derived(data.listings.filter((listing) => listing.visible));
	let gridItems = $derived(
		listings.length < 4 ? [...listings, ...Array(4 - listings.length).fill(null)] : listings
	);
	let index = 31;
	let note: HTMLDivElement;

	onMount(() => {
		let cancelled = false;
		let cleanup: (() => void) | undefined;

		(async () => {
			const { gsap } = await import('gsap');
			const { Draggable, InertiaPlugin } = await import('gsap/all');
			if (cancelled) return;

			gsap.registerPlugin(Draggable, InertiaPlugin);

			const noteRotation = gsap.getProperty(note, 'rotation') as number;
			const noteSway = gsap.quickTo(note, 'rotation', { duration: 0.2, ease: 'power3' });
			let noteSettleTween: gsap.core.Tween | undefined;

			const settleNote = () => {
				noteSettleTween = gsap.to(note, {
					rotation: noteRotation,
					duration: 2.2,
					ease: 'elastic.out(1.4, 0.5)',
					overwrite: true
				});
			};
			const draggables = Draggable.create('.dragg', {
				bounds: '#top',
				inertia: true,
				throwResistance: 5000,
				edgeResistance: 0.5,
				maxDuration: 0.3,
				overshootTolerance: 0.2,
				snap: {
					x: function (this: Draggable, endValue: number) {
						const maxThrow = 70;
						return Math.max(this.x - maxThrow, Math.min(this.x + maxThrow, endValue));
					},
					y: function (this: Draggable, endValue: number) {
						const maxThrow = 70;
						return Math.max(this.y - maxThrow, Math.min(this.y + maxThrow, endValue));
					}
				},
				onPress() {
					((index += 1),
						gsap.to(this.target, {
							scale: 1.05,
							duration: 0.15,
							zIndex: index
						}));
				},

				onRelease() {
					gsap.to(this.target, {
						scale: 1.0,
						duration: 0.15
					});
				}
			});

			const noteDraggable = Draggable.create('.note', {
				type: 'rotation',
				onPress() {
					noteSettleTween?.kill();
				},
				onRelease: settleNote
			});
			const onNoteMove = (e: MouseEvent) => {
				noteSettleTween?.kill();
				const rect = note.getBoundingClientRect();
				const relX = (e.clientX - rect.left) / rect.width - 0.5;
				noteSway(noteRotation + relX * 12);
			};
			note.addEventListener('mousemove', onNoteMove);
			note.addEventListener('mouseleave', settleNote);

			cleanup = () => {
				draggables.forEach((d) => d.kill());
				noteDraggable.forEach((d) => d.kill());
				note.removeEventListener('mousemove', onNoteMove);
				note.removeEventListener('mouseleave', settleNote);
			};
		})();

		return () => {
			cancelled = true;
			cleanup?.();
		};
	});
</script>

<div class="page-outline" id="top">
	<img
		src="/landingtop.webp"
		alt=""
		class="animate-in-top h-12 w-full object-cover object-center md:h-auto"
	/>

	<a href="https://hackclub.com/"
		><img
			style="position: absolute; top: 110px; left: -2px; border: 0; width: 256px; z-index: 999;"
			class="fade-in-up fade-delay-0 hidden md:block"
			src="https://assets.hackclub.com/banners/2026.svg"
			alt="Hack Club"
		/></a
	>

	<div
		class="fade-in-up fade-delay-1 my-18 flex h-fit w-full flex-col items-center justify-center gap-0"
	>
		<div class="mx-auto flex w-full flex-col items-center justify-center">
			<img src="/bluepin.svg" alt="" class="z-30 -mb-3 w-6" />
			<div class="grid w-fit grid-cols-1 grid-rows-1">
				<div
					class="col-start-1 row-start-1 h-[95%] w-[95%] place-self-center bg-[#b55008a4] blur-[2px]"
				></div>

				<div
					class="note max-h-xl relative z-20 col-start-1 row-start-1 max-w-2xl origin-top -rotate-1 place-self-center border-18 border-[#ACD43C] bg-[#F1EFE2] px-10 py-4 shadow transition hover:scale-101"
					bind:this={note}
				>
					<p class="heavywei text-3xl text-[#EC7B00]">welcome to gadget market!</p>
					<div class="border-t-6 border-dotted border-[#ACD43C]"></div>

					<div class="space-y-6 py-6 text-center text-lg">
						<p>
							This is a place for teenagers around the world to trade PCBs! Join <a
								href="https://hackclub.enterprise.slack.com/archives/C0AJQ0HBC12"
								class="link text-[#4F74ED]">#gadget-market</a
							> in Hack Club Slack for updates + questions!
						</p>

						<p>
							Make a gadget, then put it onto this market! We give grants up to 210 USD for you to
							build your project - go to <a href="/docs/start" class="link text-[#4F74ED]"
								>Getting Started</a
							>!
						</p>

						<p>
							Have PCBs to list on the market already? Check out <a
								href="/docs/skip"
								class="link text-[#4F74ED]">here</a
							> for instructions! We also give 30 USD shipping grants + prizes :D
						</p>
					</div>

					<p class="heavywei text-right text-3xl text-[#EC7B00]">from hack club</p>
				</div>

				<p
					class="z-10 col-start-1 row-start-1 flex h-[95%] w-[95%] items-end justify-end p-2 text-[#ed9945] blur-[0.4px]"
				>
					oh hey! get building :p
				</p>
			</div>
		</div>
	</div>

	<div class="fade-in-up fade-delay-2 flex flex-wrap items-center justify-center space-x-8">
		<div class="flex items-center">
			<a href="/docs/start">
				<img
					src="/flyer-getting-started.png"
					alt="Getting Started"
					class="dragg glow relative w-36 -rotate-2 md:w-52"
				/>
			</a>
			<a href="/docs/design-requirements" class="mt-6 -ml-4">
				<img
					src="/flyer-design-reqs.png"
					alt="Project Design Requirements"
					class="dragg glow relative w-36 rotate-1 md:w-52"
				/>
			</a>
			<a href="/docs/list" class="-mt-6 -ml-4">
				<img
					src="/flyers-list.png"
					alt="How to List Your Projects on the Market"
					class="dragg glow relative w-36 -rotate-3 md:w-52"
				/>
			</a>
		</div>

		<div class="group flex flex-col items-center justify-center">
			<p class="pb-1 text-[#B55108] opacity-50 transition group-hover:opacity-100">
				<i>organizers of this program!</i>
			</p>

			<div class="flex items-end">
				<a href="https://hackclub.enterprise.slack.com/team/U04KEK4TS72" target="_blank"
					><img src="/wanted-acon.webp" alt="@acon" class="glow z-10 max-w-25 -rotate-2" /></a
				>
				<a href="https://hackclub.enterprise.slack.com/team/U06CRF4DLSU" target="_blank"
					><img src="/wanted-mpk.webp" alt="@mpk" class="glow z-2 max-w-25 rotate-1" /></a
				>
				<a href="https://hackclub.enterprise.slack.com/team/U083PK90X4G" target="_blank"
					><img src="/wanted-sophia.webp" alt="@sophia" class="glow z-30 max-w-25 -rotate-3" /></a
				>
			</div>
		</div>
	</div>
</div>
<div class="fade-in-up fade-delay-3 flex flex-col items-center justify-center py-12 pr-8 pl-8">
	<p class="mb-4 text-center text-[#B55108]">
		<i>click on any of the flyers below to see the project listing!</i>
	</p>
	<div class="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
		{#each gridItems as listing}
			<div>
				{#if listing}
					<a href="/listings/{listing.id}">
						<img src={listing.project_flyer} alt="" class="glow transition hover:rotate-1" />
					</a>
				{:else}
					<img src="/project-placeholder.webp" alt="" />
				{/if}
			</div>
		{/each}
	</div>
</div>

<div class="fade-in-up fade-delay-4 mb-10 flex flex-col items-center justify-center py-12">
	<a href="#top" class="glow -rotate-1 bg-[#F1EFE2] px-16 py-4 shadow transition hover:scale-103">
		<p class="heavywei text-2xl">back to top</p>
	</a>
</div>

<div class="fade-in-up fade-delay-5">
	<Footer />
</div>

<style>
	.animate-in-top {
		opacity: 0;
		animation: slide-in-top 350ms ease-out 700ms forwards;
	}

	@keyframes slide-in-top {
		from {
			opacity: 0;
			translate: 0 -100%;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.animate-in-top {
			animation: none;
			opacity: 1;
		}
	}

	.fade-in-up {
		opacity: 0;
		animation: fade-in-up 500ms ease-out forwards;
	}

	.fade-delay-0 {
		animation-delay: 750ms;
	}

	.fade-delay-1 {
		animation-delay: 1050ms;
	}

	.fade-delay-2 {
		animation-delay: 1200ms;
	}

	.fade-delay-3 {
		animation-delay: 1350ms;
	}

	.fade-delay-4 {
		animation-delay: 1500ms;
	}

	.fade-delay-5 {
		animation-delay: 1650ms;
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			translate: 0 16px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.fade-in-up {
			animation: none;
			opacity: 1;
		}
	}
</style>
