<script>
    import { Alert, Button } from "@sveltestrap/sveltestrap";

    export let color = "";

    // Optional CSS classes
    export let customClass = "";
    export let customBtnClass = "";
    export let customImgClass = "";

    // Alert text content
    export let text = "";
    export let text2 = "";
    export let text3 = "";

    // Optional icon or image (SVG string or URL)
    export let icon = "";
    export let img = "";
    export let iconClass = "";

    // Visibility and behavior
    export let isVisible = true;
    export let showCloseButton = true;
    export let dismissible = false;
    // Function to close an alert
    const closeAlert = () => {
        isVisible = false; // Set visibility to false when closed
    };
</script>

{#if isVisible}
    <Alert {color} class={customClass} role="alert" {dismissible}>
        {#if icon}
            <span class={iconClass}>{@html icon}</span
            ><!-- Add the icon here -->
        {/if}

        {#if img}
            <div class={customImgClass}>
                <img
                    loading="lazy"
                    src={img}
                    alt="img"
                /><!-- Add the Image here -->
            </div>
        {/if}

        {#if text}
            <span>{@html text}</span>
        {/if}
        {#if text2}
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#!" class="alert-link">{text2}</a>{text3}
            <!-- Add the Link here -->
        {/if}

        {#if showCloseButton}
            <Button
                color=""
                type="button"
                class={`btn-close ${customBtnClass} `}
                aria-label="Close"
                on:click={closeAlert}
            >
                <i class="bi bi-x"></i>
            </Button>
        {/if}

        <slot />
    </Alert>
{/if}

<style lang="scss">
    /* Add any additional styles here */
</style>
