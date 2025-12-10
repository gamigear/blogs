<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";

    export let course = {};
    export let cardClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody>
        <div class="d-flex align-items-start gap-3 flex-wrap">
            <div class="lh-1">
                <span
                    class={`avatar avatar-lg avatar-rounded bg-${course.svgColor} svg-white`}
                >
                    {@html course.svgIcon}
                </span>
            </div>
            <div>
                <span class="d-block mb-1">
                    {course.title}
                </span>
                <div class="d-flex align-items-center gap-2">
                    <h5 class="fw-semibold mb-0">{course.value}</h5>
                    <SpkBadge
                        Color=""
                        CustomClass={`bg-${course.svgColor}-transparent rounded-pill`}
                    >
                        <i class={course.icon}></i>
                        {course.percent}
                    </SpkBadge>
                </div>
            </div>
        </div>
    </CardBody>
</Card>
