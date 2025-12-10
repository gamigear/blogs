<script>
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardTitle,
        Collapse,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "../Button/SpkButton.svelte";

    export let CustomCardClass = "";
    export let Customheaderclass = "";
    export let footertext = "";
    export let Title = "";
    export let Navigate = "";
    export let expandButton = false;
    export let collapseToggle = false;
    export let normalToggle = false;
    export let hideToggle = false;

    // State variables
    let BasicExpanded = true;
    let Basicshow = true;

    // Toggle expand state
    function BasicHandleExpandClick() {
        BasicExpanded = !BasicExpanded;
    }

    // Hide the close button
    function closeButtonFunc() {
        Basicshow = false;
    }

    //  full screen

    //Fullscreen
    let isFullscreen = false; // Track fullscreen state

    function toggleFullscreen() {
        isFullscreen = !isFullscreen; // Toggle fullscreen state
    }
</script>

{#if Basicshow}
    <Card
        class={`custom-card ${CustomCardClass} ${isFullscreen ? "card-fullscreen" : ""} `}
    >
        <CardHeader
            class={`card-header justify-content-between border-bottom-0 ${Customheaderclass}`}
        >
            {#if collapseToggle}
                <CardTitle>
                    {Title}
                </CardTitle>
            {/if}

            {#if hideToggle}
                {#if Basicshow}
                    <CardTitle>
                        {Title}
                    </CardTitle>
                {:else}
                    {null}
                {/if}
            {/if}

            {#if normalToggle}
                <CardTitle>
                    {Title}
                </CardTitle>
            {/if}

            <!-- svelte-ignore a11y_consider_explicit_label -->
            {#if expandButton}
                <a href={Navigate} on:click={BasicHandleExpandClick}>
                    <i
                        class={`${BasicExpanded ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line"} fs-18`}
                    ></i>
                </a>
            {/if}
            {#if hideToggle}
                {#if Basicshow}
                    <a href={Navigate} on:click={closeButtonFunc}>
                        <i class="ri-close-line fs-18"></i>
                    </a>
                {/if}
            {/if}

            {#if normalToggle}
                <a href={Navigate} on:click={toggleFullscreen}>
                    <i class="ri-fullscreen-line"></i>
                </a>
            {/if}
        </CardHeader>

        {#if collapseToggle}
            <Collapse class="border-top" isOpen={BasicExpanded}>
                <div>
                    <CardBody>
                        <slot />
                    </CardBody>
                    <CardFooter>
                        <SpkButton color="primary">{footertext}</SpkButton>
                    </CardFooter>
                </div>
            </Collapse>
        {/if}

        {#if hideToggle}
            {#if Basicshow}
                <CardBody class="border-top">
                    <slot />
                </CardBody>
                <CardFooter>
                    <SpkButton color="primary">{footertext}</SpkButton>
                </CardFooter>
            {:else}
                {null}
            {/if}
        {/if}

        {#if normalToggle}
            <CardBody class="border-top">
                <slot />
            </CardBody>
            <CardFooter>
                <SpkButton color="primary">{footertext}</SpkButton>
            </CardFooter>
        {/if}
    </Card>
{/if}
