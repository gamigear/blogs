<script lang="ts">
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";

    interface ListData {
        title?: string;
        count?: number | string;
        price?: string;
        priceColor?: string;
        iconColor?: string;
        icon?: string;
        smallText?: string;
        avatarClass?: string;
        ValueClass?: string;
        ValueClass1?: string;
        flexClass?: string;
        percent?: string;
        svgIcon?: string;
        percentColor?: string;
        titles?: string;
    }

    export let cardClass: string = "";
    export let bodyClass: string = "";
    export let list: ListData = {};
    export let listCard: boolean = false;
    export let titleClass: string = "";
    export let jobsCard: boolean = false;
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class={bodyClass}>
        <div class={`d-flex align-items-start gap-3 ${list.flexClass}`}>
            <div class="flex-fill">
                <h6 class={titleClass}>{list.title}</h6>
                <div class="pb-0 mt-0">
                    {#if listCard}
                        <div>
                            <span class="fs-13 fw-medium">{list.titles}</span>
                            <div
                                class={`d-flex align-items-center gap-2 mb-2 ${list.ValueClass1}`}
                            >
                                <h4 class={`fw-medium mb-0 ${list.ValueClass}`}>
                                    <span
                                        class="count-up"
                                        data-count={list.count}
                                    >
                                        {list.count}
                                    </span>
                                </h4>
                                {#if listCard}
                                <span class={`badge bg-${list.priceColor}`}>{list.price}</span>
                                {/if}
                            </div>
                            <p
                                class={`text-muted fs-12 mb-0 lh-1 ${list.smallText}`}
                            >
                                <span
                                    class={`text-${list.iconColor} me-1 d-inline-block ${list.percentColor}`}
                                >
                                    <i class={list.icon}></i>
                                    {list.percent}
                                </span>
                                <span class="monthly-percent">this month</span>
                            </p>
                        </div>
                    {/if}
                    {#if jobsCard}
                        <div class="d-flex align-items-center gap-2">
                            <h3 class="fw-semibold mb-0">{list.count}</h3>
                            <span class={`text-${list.iconColor}`}
                                ><i class={list.icon}></i>{list.percent}</span
                            >
                        </div>
                    {/if}
                </div>
            </div>
            <div
                class={`avatar ${list.avatarClass} bg-${list.priceColor}-transparent mb-3 svg-${list.priceColor} mx-auto`}
            >
                {@html list.svgIcon}
            </div>
        </div>
    </CardBody>
</Card>
