<script>
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Image,
    } from "@sveltestrap/sveltestrap";

    export let Imgsrc = "";
    export let Footertext = "";
    export let Overlayclass = "";
    export let CustomTitleclass = "";
    export let Customimgclass = "";
    export let Custombodyclass = "";
    export let Customfooterclass = "";
    export let Title = "";
    export let CustomClass = "";
    export let CardHeaderTag = true;
    export let CardFooterTag = true;
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
