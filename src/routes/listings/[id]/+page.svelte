<script>
    let { data } = $props();
    let listing = $derived(data.listing);
</script>

<div class="page-outline p-5">
    <a href="/"><p>back</p></a>


    <div class="flex space-x-8">

        
        <img src="{listing.project_image}" alt="{listing.project_name}" class="max-w-[40%]"/>
        <div class="flex flex-col space-y-2">
            <div class="flex flex-row space-x-2">
                <a href="/" class="bg-blue-300 p-2">message on slack</a>
                <a href="/" class="bg-blue-300 p-2">github repo</a>
                <a href="/" class="bg-blue-300 p-2">video demo</a>
            </div>

            <div class="bg-[#F9F7EC] p-10 max-w-4xl">
                <h1>{listing.project_name}</h1>
                <p>{listing.project_tagline}</p> 
                <p>{listing.project_description}</p>
                <p>{listing.project_stock} in stock</p>
                <p>assembled? {listing.project_assembled}</p>
            </div>
        </div>

        

    </div>




    
</div>