<script lang="ts">
    import { Card, CardBody } from "@sveltestrap/sveltestrap";

    interface Project {
        title?: string;
        price?: string | number;
        svgColor?: string;
        svgIcon?: string;
    }

    export let project: Project = {};
    export let cardClass: string = "";
    export let bodyClass: string = "";
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
