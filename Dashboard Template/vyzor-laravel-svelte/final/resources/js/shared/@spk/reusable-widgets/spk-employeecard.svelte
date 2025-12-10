<script>
    import { Col, Card, CardBody } from "@sveltestrap/sveltestrap";

    export let widget = {};
</script>

<Col>
    <Card class={`custom-card widget-card-style1 ${widget.cardColor}`}>
        <CardBody>
            <div
                class={`d-flex align-items-start gap-3 flex-wrap ${widget.divClass}`}
            >
                <div class="lh-1">
                    <span class={`avatar avatar-md bg-${widget.color}`}>
                        <i class={`${widget.iconClass} fs-5`}></i>
                    </span>
                </div>
                <div class="flex-fill">
                    <span class="d-block">{widget.title}</span>
                    <h5 class={`fw-semibold ${widget.valueClass}`}>
                        {widget.value}
                    </h5>
                    {#if widget.badge}
                        <span class={`badge bg-${widget.color}-transparent`}>
                            {widget.badgeText}
                        </span>
                    {/if}
                </div>
                <div class={`${widget.endText}`}>
                    {#if widget.crmbadge}
                        <div class={`fw-semibold text-${widget.crmiconColor}`}>
                            <i
                                class={`ti ti-arrow-narrow-${widget.crmicon} me-1`}
                            ></i>{widget.crmpercentChange}
                        </div>
                    {/if}
                    <div class={`${widget.percentageColorClass}`}>
                        {widget.percentChange}
                    </div>
                    {#if widget.crmbadge}
                        <div class="text-muted fs-12">This Year</div>
                    {/if}
                </div>
            </div>
        </CardBody>
    </Card>
</Col>
