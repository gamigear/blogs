<script lang="ts">
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Image,
    } from "@sveltestrap/sveltestrap";

    export let header: string | any = "";
    export let footer: boolean = false;
    export let imgSrc: string = "";
    export let title: string = "";
    export let bodyText: boolean = false;
    export let titleClass: string = "";
    export let subTitle: string = "";
    export let imgClass: string = "";
    export let cardClass: string = "";
    export let bodyClass: string = "";
    export let cardFooter: string = "";
    export let cardHeader: string = "";
    export let useDivHeader: boolean = false;
    export let imgSrcA: string = "";
    export let imgClassA: string = "";
    export let imgSrcB: string = "";
    export let imgClassB: string = "";
    export let imgSrcC: string = "";
    export let imgClassC: string = "";
    export let singleImg: string = "";
    export let imgSingleSrc: string = "";
    export let linkTag: boolean = false;
    export let outBodyText: boolean = false;
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<Card class={`custom-card ${cardClass}`}>
    {#if imgSrcA}
        <Image src={imgSrcA} alt="..." class={imgClassA} />
    {/if}
    {#if linkTag}
        <a href="#!" class="card-anchor"></a>
    {/if}
    {#if singleImg === "top"}
        <a href="#!" class="p-3 pb-0 rounded-5">
            <Image
                src={imgSingleSrc}
                class="rounded-2 card-img-top"
                alt="..."
            />
        </a>
    {/if}

    {#if header}
        {#if useDivHeader}
            <CardHeader class={cardHeader}>
                <slot name="header" />
            </CardHeader>
        {:else}
            <CardHeader class={cardHeader}>
                <h5 class={`card-title ${!imgSrcC ? "fw-medium" : ""} `}>
                    {header}
                </h5>
            </CardHeader>
        {/if}
    {/if}

    {#if imgSrc}
        <Image src={imgSrc} alt="..." class={imgClass} />
    {/if}

    <CardBody class={bodyClass}>
        {#if title}
            <h6 class={`card-title ${titleClass}`}>{title}</h6>
        {/if}

        {#if subTitle}
            <p class="card-subtitle mb-3 text-muted">{subTitle}</p>
        {/if}

        <!-- {@html bodyText} -->
        {#if bodyText}
            <slot name="bodyText" />
        {/if}
    </CardBody>
    {#if outBodyText}
        <!-- {@html outBodyText} -->
        <slot name="outBodyText" />
    {/if}
    {#if imgSrcB}
        <Image src={imgSrcB} alt="..." class={imgClassB} />
    {/if}

    {#if footer}
        <CardFooter class={cardFooter}>
            <slot name="footer" />
        </CardFooter>
    {/if}

    {#if imgSrcC}
        <Image src={imgSrcC} alt="..." class={imgClassC} />
    {/if}

    {#if singleImg == "bottom"}
        <a href="#!" class="p-3 pt-0 rounded-5">
            <Image
                src={imgSingleSrc}
                class="rounded-2 card-img-bottom"
                alt="..."
            />
        </a>
    {/if}
</Card>
