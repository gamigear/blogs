<script lang="ts">
    import { Card, CardBody } from "@sveltestrap/sveltestrap";

    interface MedicalCardData {
        title?: string;
        value?: string | number;
        month?: string;
        percent?: string;
        percentColor?: string;
        svgColor?: string;
        svgIcon?: string;
        icon?: string;
    }

    export let medical: MedicalCardData = {};
    export let cardClass: string = "";
    export let bodyClass: string = "";
</script>

<Card class={`custom-card ${cardClass}`}>
        <CardBody class={bodyClass}>
          <div class="d-flex align-items-start justify-content-between mb-2">
            <div class="flex-fill">
              <div class="mb-2">{medical.title}</div>
              <h4 class={`fw-semibold text-${medical.svgColor} mb-0`}>{medical.value}</h4>
            </div>
            <div>
              <span class={`avatar avatar-md bg-${medical.svgColor}-transparent svg-${medical.svgColor}`}>
                {@html medical.svgIcon}
              </span>
            </div>
          </div>
          <div class="d-flex fs-13 align-items-center justify-content-between">
            <div class="text-muted">{medical.month}</div>
            <div class={`text-${medical.percentColor} fw-medium d-inline-flex`}>
              <i class={medical.icon}></i>
              {medical.percent}
            </div>
          </div>
        </CardBody>
      </Card>