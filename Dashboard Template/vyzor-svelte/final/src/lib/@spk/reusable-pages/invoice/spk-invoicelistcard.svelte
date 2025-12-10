<script lang="ts">
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import { Card, CardBody } from "@sveltestrap/sveltestrap";

    interface SpkInvoiceListItem {
        cardClass?: string;
        title?: string;
        price?: string | number;
        value?: string;
        color?: string;
        dollar?: string;
        kelvin?: string;
        arrow?: string;
        percent?: string;
        percentColor?: string;
        svgIcon?: string;
    }

    export let list: SpkInvoiceListItem = {};
</script>

<Card class={`custom-card dashboard-main-card ${list.cardClass || ""}`}>
    <CardBody class="p-4">
        <div class="d-flex align-items-start gap-3">
            <div class="flex-fill">
                <h6 class="mb-2 fs-12">{list.title}</h6>
                <div class="pb-0 mt-0">
                    <div>
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <h4 class="fw-medium mb-0">
                                {list.dollar}<span class="count-up" data-count="471"
                                    >{list.price}</span
                                >{list.kelvin}
                            </h4>
                            <SpkBadge
                                Color=""
                                CustomClass={`bg-${list.color}`}
                                >{list.value}</SpkBadge
                            >
                        </div>
                        <p class="text-muted fs-12 mb-0 lh-1">
                            <span
                                class={`text-${list.percentColor} me-1 fw-medium`}
                            >
                                <i
                                    class={`ri-arrow-${list.arrow}-s-line me-1 align-middle`}
                                ></i>{list.percent}
                            </span>
                            <span> this month</span>
                        </p>
                    </div>
                </div>
            </div>
            <div
                class={`avatar avatar-lg bg-${list.color}-transparent svg-${list.color}`}
            >
                {@html list.svgIcon}
            </div>
        </div>
    </CardBody>
</Card>
