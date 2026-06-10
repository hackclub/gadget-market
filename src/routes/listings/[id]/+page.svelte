<script>
    let { data } = $props();
    let listing = $derived(data.listing);
</script>

<div>
    <a href="/"><p>back</p></a>
    <h1>{listing.project_name}</h1>
    <img src="{listing.project_image}" alt="{listing.project_name}" />
</div>