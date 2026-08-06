<script>
    let { data } = $props();
    let listing = $derived(data.listing);
</script>

<div class="page-outline p-5 min-h-screen flex flex-col">
    <a href="/"><img src="/shopback.webp" alt="back to home" class="m-5 max-w-30 glow hover:scale-102 transition"/></a>


    <div class="flex flex-col justify-center items-center flex-1">

        <div class="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <img src="{listing.project_image}" alt="{listing.project_name}" class="w-full max-w-md lg:w-105 object-cover rounded mx-auto"/>
            <div class="flex flex-col space-y-2 items-center lg:items-stretch">
                <div class="flex flex-col sm:flex-row gap-2 justify-center *:rounded *:hover:scale-105 *:transition">
                    <a href="https://hackclub.enterprise.slack.com/team/{listing.slack_id}" class="bg-[#7AD5DB] p-2 px-4">message on slack</a>
                    <a href="{listing.project_repo}" class="bg-[#E5DA03] p-2 px-4">github repo</a>
                    <a href="{listing.project_demo}" class="bg-[#FDAB91] p-2 px-4">video demo</a>
                </div>

                <div class="bg-[#F9F7EC] p-6 sm:p-10 max-w-4xl grid grid-cols-1 sm:grid-cols-2 rounded">
                    <div class="flex flex-col justify-between text-center sm:text-left">
                        <div>
                            <h1 class="text-4xl">{listing.project_name}</h1>
                            <p class="text-xl">{listing.project_tagline}</p> 
                            <p class="mt-8">{listing.project_description}</p>                            
                        </div>
                        <div class="mt-8 text-xl space-y-1">
                            <p>{listing.project_stock} in stock</p>
                            <p>assembled? {listing.project_assembled}</p> 
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-center sm:items-end border-t-4 sm:border-t-0 sm:border-l-4 border-dashed border-[#ACD43C] pt-8 sm:pt-0 pl-0 sm:pl-8 mt-8 sm:mt-0 ml-0 sm:ml-8 text-center sm:text-right">

                        <div class="bg-pink-300 w-20 h-20 flex items-center justify-center text-xs text-center text-white p-2">
                            stamp / stars
                        </div>

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