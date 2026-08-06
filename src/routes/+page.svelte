<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
    let { data } = $props();
    let listings = $derived(data.listings);
    let gridItems = $derived(
        listings.length < 4
            ? [...listings, ...Array(4 - listings.length).fill(null)]
            : listings
    );
</script>

<div class="page-outline" id="top">

    <a href="https://hackclub.com/"><img style="position: absolute; top: 110px; left: -2px; border: 0; width: 256px; z-index: 999;" class="fade-in-up fade-delay-0 hidden md:block" src="https://assets.hackclub.com/banners/2026.svg" alt="Hack Club"/></a>

    <img src="/landingtop.webp" alt="" class="w-full object-cover object-center h-12 md:h-auto animate-in-top"/>

    <div class="flex flex-col items-center justify-center">

        <div class="fade-in-up fade-delay-1 my-10 mx-5 bg-[#F1EFE2] border-18 border-[#ACD43C] py-4 px-10 max-h-xl max-w-2xl -rotate-1 shadow relative hover:scale-101 transition">
            <img src="/bluepin.svg" alt="" class="absolute left-1/2 -translate-x-1/2 -top-6"/>
            <p class="text-[#EC7B00] heavywei text-3xl">welcome to gadget market!</p>
            <div class="border-t-6 border-dotted border-[#ACD43C]"> </div>

            <div class="space-y-6 text-center py-6 text-lg">

                <p>This is a place for teenagers around the world to trade PCBs!
                Join <a href="https://hackclub.enterprise.slack.com/archives/C0AJQ0HBC12" class="text-[#4F74ED] link">#gadget-market</a> in Hack Club Slack for updates + questions! </p>

                <p>Make a gadget, then put it onto this market! 
                    We give grants up to 210 USD for you to build your project - go to <a href="/docs/start" class="link text-[#4F74ED]">Getting Started</a>! 
                    </p>

                <p>Have PCBs to list on the market already? 
                    Check out <a href="/docs/skip" class="link text-[#4F74ED]">here</a> for instructions! 
                    We also give 30 USD shipping grants + prizes :D</p>

            </div>

            <p class="text-right text-[#EC7B00] heavywei text-3xl">from hack club</p>
        </div>

    </div>




    <div class="fade-in-up fade-delay-2 flex flex-wrap gap-8 items-center justify-center">

        <div class="flex w-fit items-center justify-center space-x-2 mb-16 md:space-x-4">
            <a href="/docs/start" class="-translate-y-8 shrink-0">
                <img src="/flyer-getting-started.png" alt="Getting Started" class="w-40 -rotate-2 glow transition hover:scale-102 md:w-52"/>
            </a>
            <a href="/docs/design-requirements" class="-ml-4 translate-y-10 shrink-0">
                <img src="/flyer-design-reqs.png" alt="Project Design Requirements" class="w-40 rotate-1 glow transition hover:scale-102 md:w-52"/>
            </a>
            <a href="/docs/list" class="-ml-4 -translate-y-6 shrink-0">
                <img src="/flyers-list.png" alt="How to List" class="w-40 glow transition hover:scale-102 md:w-52"/>
            </a>
        </div>

        <div class="flex flex-col items-center justify-center group">

            <p class="text-[#B55108] pb-1 opacity-50 group-hover:opacity-100 transition"><i>organizers of this program!</i></p>

            <div class="flex items-end">
                <a href="https://hackclub.enterprise.slack.com/team/U04KEK4TS72" target="_blank"><img src="/wanted-acon.webp" alt="@acon" class="max-w-25 -rotate-2 z-10 glow"/></a>
                <a href="https://hackclub.enterprise.slack.com/team/U04KEK4TS72" target="_blank"><img src="/wanted-mpk.webp" alt="@mpk" class="max-w-25 rotate-1 z-2 glow"/></a>
                <a href="https://hackclub.enterprise.slack.com/team/U04KEK4TS72" target="_blank"><img src="/wanted-sophia.webp" alt="@sophia" class="max-w-25 -rotate-3 z-30 glow"/></a>
            </div>

        </div>


        

        

        

    </div>



    <div class="fade-in-up fade-delay-3 flex flex-col justify-center items-center pl-8 pr-8 py-12">
        <p class="mb-4 text-[#B55108] text-center"><i>click on any of the flyers below to see the project listing!</i></p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-6xl gap-4">
           {#each gridItems as listing}
                <div>
                    {#if listing}
                        <a href="/listings/{listing.id}">
                            <img src="{listing.project_flyer}" alt="" class="hover:rotate-1 glow transition"/>
                        </a>
                    {:else}
                        <img src="/project-placeholder.webp" alt="" />
                    {/if}
                </div>
            {/each}
        </div>
        

    </div>


    <div class="fade-in-up fade-delay-4 flex flex-col items-center justify-center mb-10 py-12">
        <a href="#top" class="bg-[#F1EFE2] px-16 py-4 -rotate-1 shadow hover:scale-103 glow transition">
            <p class="heavywei text-2xl">back to top</p>
        </a>
    </div>

    <div class="fade-in-up fade-delay-5">
        <Footer />
    </div>


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


