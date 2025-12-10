<script >
    import { Accordion, AccordionItem } from "@sveltestrap/sveltestrap";
    export let card = {};
    export let Id;
    export let CustomClass = "";
    export let Flush = undefined;
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
