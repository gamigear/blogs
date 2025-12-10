<script>
    import { ListGroup } from "@sveltestrap/sveltestrap";
    // Accept the props for the ListGroup
    export let CustomClass = "";
    export let Id = "";
    export let Flush = false;
    export let Horizontal = false;
    export let Numbered = false;
</script>

<!-- The container for the list group -->
<ListGroup
    class={CustomClass}
    id={Id}
    flush={Flush}
    horizontal={Horizontal}
    numbered={Numbered}
>
    <slot />
</ListGroup>
