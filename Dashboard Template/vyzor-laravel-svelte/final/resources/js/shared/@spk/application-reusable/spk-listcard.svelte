<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import Countup from "svelte-countup";
    export let cardClass = "";
    export let bodyClass = "";
    export let list = {};
    export let listCard = false;
    export let titleClass = "";
    export let jobsCard = false;
    export let countUp = true;
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
                                    {#if countUp}
                                        <span
                                            class="count-up"
                                            data-count={list.count}
                                        >
                                            {list.count}
                                        </span>
                                    {:else}
                                        <Countup
                                            initial={0}
                                            value={list.count}
                                            duration={5000}
                                            step={1}
                                            format={false}
                                        />
                                        {#if list.sub}
                                            {list.sub}
                                        {/if}
                                    {/if}
                                </h4>
                                {#if listCard}
                                    <span class={`badge bg-${list.priceColor}`}
                                        >{list.price}</span
                                    >
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
