<script>
    import {
        Card,
        Image,
        CardHeader,
        CardBody,
        CardFooter,
    } from "@sveltestrap/sveltestrap";

    export let Imagesrc = "";
    export let CardFooterTag = false;
    export let Footertext = "";
    export let Title = "";
    export let Linktag = false;
    export let CardHeaderTag = false;
    export let Imgposition = "";
    export let Imgclass = "";
    export let Navigate = "";
</script>

<Card class="custom-card">
    {#if Linktag}
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href={Navigate} class="card-anchor"></a>
    {/if}
    <div class="row g-0">
        {#if Imgposition === "before"}
            <div class="col-md-4">
                <Image src={Imagesrc} class={Imgclass} alt="..." />
            </div>
        {/if}
        <div class="col-md-8">
            {#if CardHeaderTag}
                <CardHeader>
                    <div class="card-title">{Title}</div>
                </CardHeader>
            {/if}
            <CardBody>
                <slot />
            </CardBody>
            {#if CardFooterTag}
                <CardFooter>
                    <p class="card-text">
                        <small class="text-muted">{Footertext}</small>
                    </p>
                </CardFooter>
            {/if}
        </div>
        {#if Imgposition === "after"}
            <div class="col-md-4">
                <Image
                    src={Imagesrc}
                    class="img-fluid rounded-sm-end rounded-bottom h-100 w-100"
                    alt="..."
                />
            </div>
        {/if}
    </div>
</Card>
