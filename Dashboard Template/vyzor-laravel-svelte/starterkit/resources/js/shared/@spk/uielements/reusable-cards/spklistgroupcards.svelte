<script>
    import { Card, CardFooter, CardHeader } from "@sveltestrap/sveltestrap";
    import SpkListGroup from "../ListGroup/SpkListGroup.svelte";

    export let Headertext = "";
    export let CardHeaderTag = false;
    export let Footertext = "";
    export let Listvariant;
    export let CardFooterTag = false;
    export let ListClass = "";
    export let Customfooterclass = "";
    export let Id = "";
</script>

<Card class="custom-card overflow-hidden">
    {#if CardHeaderTag}
        <CardHeader>
            {Headertext}
        </CardHeader>
    {/if}
    <SpkListGroup Flush={Listvariant} CustomClass={ListClass} {Id}>
        <slot />
    </SpkListGroup>
    {#if CardFooterTag}
        <CardFooter class={Customfooterclass}>
            {Footertext}
        </CardFooter>
    {/if}
</Card>
