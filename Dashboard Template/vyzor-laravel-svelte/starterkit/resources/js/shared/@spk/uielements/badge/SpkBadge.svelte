<script>
    import { Badge } from "@sveltestrap/sveltestrap";

    export let text = "";
    export let Color = "";
    export let Shadow = undefined;
    export let Border = undefined;
    export let Pill = false;
    export let Positioned = false;
    export let Indicator = false;
    export let Href = ""; // Link target
    export let CustomClass = "";
</script>

<Badge
    color={Color}
    href={Href}
    shadow={Shadow}
    pill={Pill}
    indicator={Indicator}
    positioned={Positioned}
    border={Border}
    class={CustomClass}
>
    <slot />
    {#if text}
        {@html text}
    {/if}
</Badge>
