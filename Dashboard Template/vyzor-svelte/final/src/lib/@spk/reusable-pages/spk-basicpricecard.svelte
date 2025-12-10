<script lang="ts">
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";
    import SpkButton from "../uielements/Button/SpkButton.svelte";

    type BasicFeatureItem = string | { value: string };
    interface SpkBasicPriceCardProps {
        title?: string;
        price?: string;
        year?: string;
        percent?: string;
        btnColor?: string;
        priceColor?: string;
        badgeColor?: string;
        features?: BasicFeatureItem[];
        titleColor?: string;
    }
    export let price: SpkBasicPriceCardProps = {};
    export let cardClass: string = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class="p-4 text-center">
        <h5 class={`fw-semibold mb-3 ${price.titleColor}`}>{price.title}</h5>
        <div class="d-flex align-items-end justify-content-center gap-1 mb-4">
            <h2 class={`fw-semibold mb-0 lh-1 text-${price.priceColor}`}>
                {price.price}
            </h2>
            <span class="fs-13">/ {price.year}</span>
        </div>
        <ul class="list-unstyled pricing-features-list-1 mx-5 text-start mb-4">
            {#each price.features ?? [] as item}
                <li>
                    {typeof item === "string" ? item : item.value}
                </li>
            {/each}
        </ul>
        <div>
            <SpkBadge
                Color=""
                CustomClass={`bg-${price.badgeColor}-transparent py-1 px-3 fs-13 rounded-pill fw-normal`}
            >
                {price.percent} Off</SpkBadge
            >
            <div class="d-grid mt-3">
                <SpkButton color={price.btnColor} customClass="btn btn-lg"
                    >Choose Plan</SpkButton
                >
            </div>
        </div>
    </CardBody>
</Card>
