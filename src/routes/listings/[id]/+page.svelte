<script>
    let { data } = $props();
    let listing = $derived(data.listing);
</script>

<div class="page-outline p-5 min-h-screen flex flex-col">
    <a href="/"><img src="/shopback.webp" alt="back to home" class="m-5 md:ml-16 max-w-30 glow hover:scale-102 transition"/></a>


    <div class="flex flex-col justify-center items-center flex-1">

        <div class="flex flex-col sm:flex-row gap-4 justify-center *:hover:scale-102 *:transition text-xl mt-8 md:mt-0">
            <a href="https://hackclub.enterprise.slack.com/team/{listing.slack_id}" class="bg-[#C2E7FF] p-4 px-8 glow text-center">message @{listing.slack_username} on slack</a>
            <a href="{listing.project_repo}" class="bg-[#E7FF86] p-4 px-8 glow text-center">github repo</a>
            <!-- <a href="{listing.project_demo}" class="bg-[#FFD3D0] p-4 px-8 glow">video demo</a> -->
        </div>

        <div class="flex flex-col xl:flex-row gap-8 items-center lg:items-start mt-6">
            <img src="{listing.project_flyer}" alt="{listing.project_name}" class="w-full max-w-md lg:w-105 -rotate-1 object-cover rounded mx-auto pt-4"/>
            <div class="flex flex-col space-y-2 items-center lg:items-stretch">

                <div class="bg-[#F9F7EC] p-6 pb-12 sm:p-10 max-w-4xl lg:aspect-3/2 grid grid-cols-1 sm:grid-cols-[6fr_4fr] rounded relative overflow-hidden">
                    <img src="/postcard-texture.png" alt="" class="hidden sm:block absolute top-0 right-0 w-80 pointer-events-none select-none" />
                    <div class="flex flex-col justify-between text-center sm:text-left order-2 sm:order-1">
                        <div>
                            <h1 class="text-4xl heavywei text-[#FF8E12]">{listing.project_name}</h1>
                            <p class="text-lg">{listing.project_tagline}</p> 
                            <p class="mt-8">{listing.project_description}</p>                            
                        </div>
                        <div class="mt-8 text-2xl">
                            <p class="heavywei text-[#FF8E12]">{listing.project_stock} in stock</p>
                            <p class="heavywei text-[#FF8E12]">pcb fully assembled? {listing.project_assembled}</p> 
                        </div>
                    </div>
                    <div class="grid grid-cols-2 items-center gap-4 sm:flex sm:flex-col sm:gap-0 justify-between sm:items-end sm:border-l-4 border-dashed border-[#ACD43C] pb-8 sm:pb-0 pl-0 sm:pl-8 mb-8 sm:mb-0 ml-0 sm:ml-8 text-center sm:text-righ order-1 sm:order-2">

                        <img src="/stamp-{listing.project_stars}.png" alt="stamp" class="z-30 w-34 rotate-1 object-contain hover:scale-101"/>

                        <div class="w-full space-y-4 text-xl text-right *:border-b-4 *:border-dashed *:border-[#ACD43C] *:pb-1">
                            <div class="">by @{listing.slack_username}</div>
                            <div class="">{listing.country}</div>
                            <div class="">{listing.region}</div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>

    </div>


    
</div>