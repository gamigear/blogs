<script lang="ts">
    import { Card, CardFooter, CardHeader } from "@sveltestrap/sveltestrap";
    import SpkListGroup from "../ListGroup/SpkListGroup.svelte";

    export let Headertext: string = "";
    export let CardHeaderTag: boolean = false;
    export let Footertext: string = "";
    export let Listvariant: boolean;
    export let CardFooterTag: boolean = false;
    export let ListClass: string = "";
    export let Customfooterclass: string = "";
    export let Id: string = "";
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
