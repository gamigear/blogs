<script>
    import { Button } from "@sveltestrap/sveltestrap";

    export let text = "";
    export let color = "";
    export let size = "";
    export let id = "";
    export let href = "";
    export let disabled = false;
    export let active = false;
    export let outline = false;
    export let customClass = "";
    export let buttontype = "button";
    export let onclickfunc = () => {};
    export let as = "button";
    export let value = "";
</script>

{#if as === "input"}
    <input
        type={buttontype}
        class={customClass}
        role="button"
        {value}
        on:click={onclickfunc}
    />
{:else if href}
    <a
        class={`btn btn-${color} ${size}  ${customClass}`}
        {href}
        {id}
        on:click={onclickfunc}
        aria-disabled={disabled}
    >
        {#if text}
            {@html text}
        {/if}
        <slot />
    </a>
{:else}
    <Button
        {id}
        {outline}
        {active}
        {color}
        {size}
        type={buttontype}
        class={customClass}
        on:click={onclickfunc}
        {disabled}
    >
        {#if text}
            {@html text}
        {/if}
        <slot />
    </Button>
{/if}


