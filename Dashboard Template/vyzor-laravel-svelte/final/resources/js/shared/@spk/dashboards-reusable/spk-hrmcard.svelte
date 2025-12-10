<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";

    export let hrm = {};
    export let cardClass=""
    export let bodyClass=""
</script>

<Card class={`custom-card ${cardClass}`}>
        <CardBody class={bodyClass}>
          <div class="mb-3">
            <span class={`avatar avatar-lg avatar-rounded bg-${hrm.svgColor}-transparent svg-${hrm.svgColor}`}>
              {@html hrm.svgIcon}
            </span>
          </div>
          <div class="text-muted mb-2">
            {hrm.title}
          </div>
          <div class="d-flex align-items-end gap-2 flex-wrap">
            <h5 class="fw-semibold mb-0 lh-1">{hrm.value}</h5>
            <div>
              <SpkBadge Color="" CustomClass={`badge bg-${hrm.iconColor}-transparent rounded-pill`}>
                <i class={hrm.iconClass}></i>{hrm.percent}
              </SpkBadge>
              <span class="text-muted fs-12">  {hrm.year}</span>
            </div>
          </div>
        </CardBody>
      </Card>