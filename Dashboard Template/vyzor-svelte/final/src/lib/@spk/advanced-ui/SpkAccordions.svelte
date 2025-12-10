<script lang="ts">
    import { Accordion, AccordionItem } from "@sveltestrap/sveltestrap";
    export let card: any = {};
    export let Id: any;
    export let CustomClass: string = "";
    export let Flush: boolean | undefined = undefined;
    export let stayOpen = false;
</script>

<Accordion id={Id} class={CustomClass} flush={Flush} {stayOpen}>
    {#each card.items as item}
        <AccordionItem
            header={item.header}
            active={item.active}
            class={item.itemClass}
        >
            {@html item.content}
        </AccordionItem>
    {/each}
</Accordion>
