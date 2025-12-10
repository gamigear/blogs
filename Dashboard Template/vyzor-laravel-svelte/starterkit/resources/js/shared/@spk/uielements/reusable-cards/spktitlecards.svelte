<script>
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardTitle,
        Image,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "../Button/SpkButton.svelte";

    export let CustomBodyclass = "";
    export let CustomHeaderclass = "";
    export let Imgsrc = "";
    export let Footertext = "";
    export let Title = "";
    export let Customclass = "";
    export let Customfooterclass = "";
    export let Icon = "";
    export let LinkClass = "";
    export let Icontag = false;
    export let Linktag = false;
    export let ButtonTag = false;
    export let Cardheader = false;
    export let Imagetag = false;
    export let Cardfooter = false;
    export let Anchortagbefore = false;
    export let OnclickFunc;
    export let Navigate = "";
    export let AnchortagNavigate = "";
</script>

<Card class={Customclass}>
    {#if Imagetag}
        <Image src={Imgsrc} class="card-img-top" alt="..." />
    {/if}
    {#if Anchortagbefore}
        <!-- svelte-ignore attribute_invalid_property_name -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href={AnchortagNavigate} class="card-anchor"></a>
    {/if}
    {#if Cardheader}
        <CardHeader class={CustomHeaderclass}>
            <CardTitle>
                {Title}
            </CardTitle>
            {#if Linktag}
                <a
                    href={Navigate}
                    data-bs-toggle="card-remove"
                    on:click={OnclickFunc}
                    class={LinkClass}
                >
                    {#if Icontag}
                        <i class={Icon}></i>
                    {/if}
                </a>
            {/if}
        </CardHeader>
    {/if}
    <CardBody class={CustomBodyclass}>
        <slot />
    </CardBody>
    {#if Cardfooter}
        <CardFooter class={Customfooterclass}>
            {#if ButtonTag}
                <SpkButton color="primary">Read More</SpkButton>
            {:else}
                {Footertext}
            {/if}
        </CardFooter>
    {/if}
</Card>
