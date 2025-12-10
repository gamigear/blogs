<script>
    import {
        Card,
        CardHeader,
        CardFooter,
        CardBody,
    } from "@sveltestrap/sveltestrap"; // Ensure you have a Bootstrap card component or similar

    export let title;
    export let svelteCode = "";
    export let dataCode = "";
    export let customCardClass = "";
    export let customCardHeaderClass = "";
    export let customCardBodyClass = "";
    export let customCardFooterClass = "";

    let showCode = false;
    let activeTab = dataCode ? "svelte" : "svelte"; // Default to 'svelte' tab

    const toggleCode = () => {
        showCode = !showCode;
    };

    const handleTabChange = (tab) => {
        activeTab = tab;
    };
</script>

<Card class={`custom-card ${customCardClass}`}>
    <CardHeader class={`justify-content-between ${customCardHeaderClass}`}>
        <div class="card-title">{@html title}</div>
        <div class="prism-toggle">
            <button class="btn btn-sm btn-primary-light" on:click={toggleCode}>
                {showCode ? "Hide Code" : "Show Code"}
                <i
                    class={`ms-2 fs-14 align-middle d-inline-block ${showCode ? "ri-code-s-slash-line" : "ri-code-line"}`}
                ></i>
            </button>
        </div>
    </CardHeader>
    {#if showCode}
        <CardFooter class={`border-top-0 ${customCardFooterClass}`}>
            <div class="tabs">
                <button
                    class={`btn tab-button btn-primary-light btn-wave ${activeTab === "svelte" ? "active" : ""}`}
                    on:click={() => handleTabChange("svelte")}
                >
                    Svelte
                </button>
                {#if dataCode}
                    <button
                        class={`btn tab-button btn-primary-light ${activeTab === "data" ? "active" : ""}`}
                        on:click={() => handleTabChange("data")}
                    >
                        Data
                    </button>
                {/if}
            </div>
            <pre class="language-html showcode-code">
                <code class="language-html">
                    {activeTab === "svelte" ? svelteCode : dataCode}
                </code>
            </pre>
        </CardFooter>
    {:else}
        <CardBody class={customCardBodyClass}>
            <slot />
        </CardBody>
    {/if}
</Card>

<style>
    /* Add any necessary styles here */
</style>
