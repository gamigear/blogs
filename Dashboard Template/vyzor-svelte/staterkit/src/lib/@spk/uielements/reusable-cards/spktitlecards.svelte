<script lang="ts">
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardTitle,
        Image,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "../Button/SpkButton.svelte";

    export let CustomBodyclass: string = "";
    export let CustomHeaderclass: string = "";
    export let Imgsrc: string = "";
    export let Footertext: string = "";
    export let Title: string = "";
    export let Customclass: string = "";
    export let Customfooterclass: string = "";
    export let Icon: string = "";
    export let LinkClass: string = "";
    export let Icontag: boolean = false;
    export let Linktag: boolean = false;
    export let ButtonTag: boolean = false;
    export let Cardheader: boolean = false;
    export let Imagetag: boolean = false;
    export let Cardfooter: boolean = false;
    export let Anchortagbefore: boolean = false;
    export let OnclickFunc: (event: MouseEvent) => void;
    export let Navigate: string = "";
    export let AnchortagNavigate: string = "";
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
