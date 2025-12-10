<script lang="ts">
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import Spkapexcharts from "../charts/Spkapexcharts.svelte";

interface StockCardProps {
    imgSrc?: string;
    title?: string;
    subtitle?: string;
    percent?: string;
    percentColor?: string;
    value?: string;
    chartId?: string;
    chartOptions?: any;
    chartSeries?: any;
}

export let stock:StockCardProps={}
export let cardClass:string=""

</script>

<Card class={`custom-card ${cardClass}`}>
        <CardBody>
          <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
            <div class="d-flex flex-fill align-items-center">
              <div class="me-2 lh-1">
                <span class="avatar avatar-md">
                  <Image src={stock.imgSrc} alt="" class="invert-1"/>
                </span>
              </div>
              <div class="lh-1">
                <span class="d-block text-default fw-medium">
                  {stock.title}
                </span>
              </div>
            </div>
            <div class="fs-12 text-end">
              <span class="text-uppercase fw-semibold">{stock.subtitle}</span>
              <span class={`text-${stock.percentColor} d-block`}>
                {stock.percent}
                <i class="ti ti-arrow-bear-right"></i>
              </span>
            </div>
          </div>

          <div class="d-flex align-items-end justify-content-between">
            <div>
              <span class="d-block text-muted fs-12">Current value</span>
              <h6 class="fw-semibold mb-0">{stock.value}</h6>
            </div>
            <div id={stock.chartId}>
              <Spkapexcharts id={stock.chartId} options={stock.chartOptions}/>
            </div>
          </div>
        </CardBody>
      </Card>