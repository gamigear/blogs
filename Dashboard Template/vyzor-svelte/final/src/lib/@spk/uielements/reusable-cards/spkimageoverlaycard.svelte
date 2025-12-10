<script lang="ts">
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Image,
    } from "@sveltestrap/sveltestrap";

    export let Imgsrc: string = "";
    export let Footertext: string = "";
    export let Overlayclass: string = "";
    export let CustomTitleclass: string = "";
    export let Customimgclass: string = "";
    export let Custombodyclass: string = "";
    export let Customfooterclass: string = "";
    export let Title: string = "";
    export let CustomClass: string = "";
    export let CardHeaderTag: boolean = true;
    export let CardFooterTag: boolean = true;
</script>

<Card class={`custom-card ${CustomClass}`}>
    <Image src={Imgsrc} class={Customimgclass} alt="..." />
    <div class={`card-img-overlay d-flex flex-column p-0 ${Overlayclass}`}>
        {#if CardHeaderTag}
            <CardHeader class="card-header">
                <div class={`card-title ${CustomTitleclass}`}>
                    {Title}
                </div>
            </CardHeader>
        {/if}
        <CardBody class={Custombodyclass}>
            <slot />
        </CardBody>
        {#if CardFooterTag}
            <CardFooter class={Customfooterclass}>{Footertext}</CardFooter>
        {/if}
    </div>
</Card>
