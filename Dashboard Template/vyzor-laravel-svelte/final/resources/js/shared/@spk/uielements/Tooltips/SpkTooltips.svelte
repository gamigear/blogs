<!-- CustomTooltip.svelte -->
<script>
    import { Tooltip } from "@sveltestrap/sveltestrap";

    export let targetId = "";
    export let content = "";
    export let color = "";
    export let customClass = "";
    export let isOpen = false;
    export let placement = "top";

    let tooltipVisible = false;

    // Update the tooltip visibility based on the isOpen prop
    $: tooltipVisible = isOpen;
</script>

<Tooltip
    {color}
    animation={false}
    isOpen={tooltipVisible}
    {placement}
    target={targetId}
    class={`${customClass} bs-tooltip-auto`}
>
    {content}
    <slot />
</Tooltip>
