<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    export let project = {};
    export let cardClass = "";
    export let bodyClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class={bodyClass}>
        <div class="d-flex align-items-start gap-3">
            <div class="lh-1">
                <span
                    class={`avatar avatar-md bg-${project.svgColor}-transparent svg-${project.svgColor}`}
                >
                    {@html project.svgIcon}
                </span>
            </div>
            <div>
                <span class="d-block text-muted mb-1">{project.title}</span>
                <h5 class="fw-semibold mb-0">{project.price}</h5>
            </div>
        </div>
    </CardBody>
</Card>
