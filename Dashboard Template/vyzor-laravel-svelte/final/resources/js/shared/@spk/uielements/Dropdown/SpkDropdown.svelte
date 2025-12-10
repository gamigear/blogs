<script>
    import {
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "@sveltestrap/sveltestrap";

    export let option = [];
    export let parent = "";
    export let CustomClass = "";
    export let Direction = "down";
    export let Color = "";
    export let ToggleClass = "";
    export let Size = "";
    export let end = false;
    export let menucalss = "";
    export let itemclass = "";
    export let AutoClose = true;
    export let theme = "";
    export let Caret = false;
    export let Split = false;
</script>

<Dropdown
    {theme}
    autoClose={AutoClose}
    direction={Direction}
    class={CustomClass}
>
    <slot />
    <DropdownToggle
        size={Size}
        class={ToggleClass}
        color={Color}
        caret={Caret}
        split={Split}
        >{@html parent}
    </DropdownToggle>

    <!-- Dropdown Menu -->
    <DropdownMenu {end} class={menucalss}>
        <!-- Pass the direction prop here -->
        {#each option as Item}
            {#if Item.divider}
                <DropdownItem divider class="dropdown-divider" />
            {:else}
                <DropdownItem
                    active={Item.active}
                    href={Item.link}
                    class={`${itemclass} ${Item.class ? Item.class : ""}`}
                >
                    {@html Item.lable}
                    <!-- Display raw HTML content for the dropdown item label -->
                </DropdownItem>
            {/if}
        {/each}
    </DropdownMenu>
</Dropdown>
