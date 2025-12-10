<script >
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    
    export let analytic = {};
    export let cardClass = "";
    export let bodyClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class={bodyClass}>
        <div class="d-flex align-items-start gap-3">
            <div>
                <span
                    class={`avatar avatar-md bg-${analytic.svgColor} svg-white`}
                >
                    {@html analytic.svgIcon}
                </span>
            </div>
            <div>
                <span class="d-block text-muted">{analytic.title}</span>
                <h5 class="fw-semibold mb-1">{analytic.value}</h5>
                <div class="text-muted fs-12">
                    <span class={`text-${analytic.iconColor}`}>
                        <i class={analytic.icon}></i>
                        {analytic.percent}
                    </span>{" "}
                    {analytic.year}
                </div>
            </div>
        </div>
    </CardBody>
</Card>
