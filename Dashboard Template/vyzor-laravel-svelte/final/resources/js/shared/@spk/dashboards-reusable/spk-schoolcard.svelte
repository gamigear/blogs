<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";


    export let school = {};
    export let cardClass = "";
    export let bodyClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class={bodyClass}>
        <div
            class="d-flex align-items-center gap-2 justify-content-between"
        >
            <div>
                <span class="d-block mb-1">{school.title}</span>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <h5 class="fw-semibold mb-0">{school.value}</h5>
                    <div class="fs-12 text-muted">
                        <SpkBadge
                            Color=""
                            CustomClass={`bg-${school.badgeColor}-transparent rounded-pill d-inline-flex align-items-center`}
                        >
                            <i
                                class={`ti ti-trending-${school.icon} me-1 align-middle`}
                            ></i>{school.percent}
                        </SpkBadge> This Year
                    </div>
                </div>
            </div>
            <div class="lh-1">
                <span
                    class={`avatar avatar-lg bg-${school.svgColor}-transparent svg-${school.svgColor}`}
                >
                    {@html school.svgIcon}
                </span>
            </div>
        </div>
    </CardBody>
</Card>
