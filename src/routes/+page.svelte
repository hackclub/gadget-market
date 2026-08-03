

<div class="page-outline" id="top">

    <img src="/landingtop.png" alt="" class="w-full object-cover object-center h-12 md:h-auto"/>

    <div class="flex flex-col items-center justify-center">

        <div class="my-10 mx-5 bg-[#F1EFE2] border-18 border-[#ACD43C] py-4 px-10 max-h-xl max-w-2xl -rotate-1 shadow relative hover:scale-101 transition">
            <img src="/bluepin.svg" alt="" class="absolute left-1/2 -translate-x-1/2 -top-6"/>
            <p class="text-[#EC7B00] heavywei text-3xl">welcome to gadget market!</p>
            <div class="border-t-6 border-dotted border-[#ACD43C]"> </div>

            <div class="space-y-6 text-center py-6 text-lg">

                <p>This is a place for teens around the world to trade PCB’s!
                Join <a href="https://hackclub.enterprise.slack.com/archives/C0AJQ0HBC12" class="text-[#4F74ED] link">#gadget-market</a> in Hack Club Slack for updates + questions! </p>

                <p>Want to list your own PCB on the market? Check out [instructions], 
                    then submit it! When your PCB gets approved, 
                    you’ll get a 30 usd grant card to pay for shipping for your trades :D </p>

                <p>You can also earn prizes when you do a certain amount of trades! Check out [instructions] for prizes. Have fun!</p>

            </div>

            <p class="text-right text-[#EC7B00] heavywei text-3xl">from hack club</p>
        </div>

    </div>




    <div>
        
    </div>



    <div class="flex flex-col justify-center items-center pl-8 pr-8 py-12">
        <p class="mb-4 text-[#B55108]"><i>click on any of the flyers below to see the project listing!</i></p>
        <div class="grid grid-cols-2 xl:grid-cols-4 max-w-6xl gap-4">
           {#each listings as listing}
                <div>
                    <!-- <div>{listing.project_name}</div> -->
                    <a href="/listings/{listing.id}">
                        <img src="{listing.project_flyer}" alt="" class="hover:rotate-1 glow transition"/>
                    </a>
                </div>
            {/each} 
        </div>
        

    </div>


    <div class="flex flex-col items-center justify-center mb-10 py-12">
        <a href="#top" class="bg-[#F1EFE2] px-16 py-4 -rotate-1 shadow hover:scale-103 glow transition">
            <p class="heavywei text-2xl">back to top</p>
        </a>
    </div>


</div>


<script>
  let { data } = $props();
  let listings = $derived(data.listings);
</script>



