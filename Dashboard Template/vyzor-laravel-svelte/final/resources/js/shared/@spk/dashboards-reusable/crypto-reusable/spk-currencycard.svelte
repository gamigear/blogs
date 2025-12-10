<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";


    export let currency = {};
    export let cardClass=""
</script>

<Card class={`custom-card ${cardClass}`}>
        <CardBody class="mb-3">
          <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
            <div>
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="lh-1">
                  <span class="avatar avatar-rounded avatar-xs">
                    <Image  src={currency.imgSrc} alt="" />
                  </span>
                </div>
                <h6 class="fw-medium mb-0">{currency.title}</h6>
              </div>
              <span class="fs-25 d-flex align-items-center">
                {currency.percent}
                <span class="fs-12 text-warning op-7 ms-2">
                  {currency.inc}
                  <i class="ti ti-arrow-big-up-line d-inline-flex"></i>
                </span>
                {#if currency.hcount}
                <SpkBadge Color="" CustomClass="badge bg-success-transparent fs-10 ms-2">{currency.hcount}</SpkBadge>
              {/if}
              </span>
            </div>
            <div class="text-end">
              <span class={`d-block fs-14 mb-1 text-${currency.color}`}>{currency.value}</span>
              <span class="d-block text-success fw-medium">{currency.price}</span>
            </div>
          </div>
        </CardBody>
        <div id={currency.id} class="mt-1 w-100">
          <Spkapexcharts id={currency.id} options={currency.chartOptions} />
        </div>
      </Card>
