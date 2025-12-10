<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";
    import SpkButton from "../uielements/Button/SpkButton.svelte";

    export let price = {};
    export let cardClass = "";
</script>

<Card
    class={`custom-card dashboard-main-card pricing-card pricing-${price.color} ${cardClass}`}
>
    <CardBody class="p-4">
        {#if price.badge}
            <SpkBadge
                Color=""
                CustomClass="bg-dark text-white pricing-recommended-badge"
            >
                Recommended
            </SpkBadge>
        {/if}
        <div class="lh-1 mb-3">
            <span
                class={`avatar avatar-lg avatar-rounded bg-${price.color}-transparent svg-${price.color}`}
            >
                {@html price.svgIcon}
            </span>
        </div>
        <h5 class="fw-semibold">{price.title}</h5>
        <p class="text-muted">{price.description}</p>
        <div class="pricing-count">
            <span class="fs-13 d-block mb-1">Start at</span>
            <div class="d-flex align-items-end gap-2">
                <h2 class="fw-semibold mb-0 lh-1">{price.price}</h2>
                <span class="fs-13">/ {price.user} per user</span>
            </div>
        </div>

        <hr class="section-devider my-4" />

        <ul class="list-unstyled pricing-features-list">
            {#each price.features ?? [] as item}
                <li>
                    {#if typeof item === "string"}
                        {item}
                    {:else}
                        <span class="fw-medium">{item.label}</span> {item.value}
                    {/if}
                </li>
            {/each}
        </ul>
        <div class="d-grid mt-4">
            <SpkButton
                color=""
                customClass={`btn btn-lg btn-${price.btnColor}`}
            >
                Get Started
            </SpkButton>
        </div>
    </CardBody>
</Card>
