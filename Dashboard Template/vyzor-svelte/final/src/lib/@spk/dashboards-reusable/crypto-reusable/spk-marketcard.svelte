<script lang="ts">
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import { Card, CardBody, CardFooter, Image, ListGroup, ListGroupItem } from "@sveltestrap/sveltestrap";

    interface MarketData {
        imgSrc?: string;
        title?: string;
        subtitle?: string;
        price?: string;
        value?: string;
        percent?: string;
        chartOptions?: any;
        todayPrice?: string;
        badge?: string;
        id?: string;
        chartId?:string;
    }

    export let market: MarketData = {};
    export let cardClass: string = "";
    export let bodyClass: string = "";
</script>

<Card class={`custom-card ${cardClass}`}>
        <CardBody class={bodyClass}>
          <div class="d-flex align-items-center mb-4 flex-wrap">
            <div class="d-flex align-items-center">
              <div class="me-2">
                <span class="avatar avatar-md avatar-rounded bg-light p-2">
                  <Image src={market.imgSrc} alt={market.title} />
                </span>
              </div>
              <div class="mb-0 fw-medium">
                {market.title}
              </div>
            </div>
            <div class="ms-auto">
              <div id="bitcoin-chart">
                <Spkapexcharts id={market.chartId} options={market.chartOptions}/>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-end">
            <div>
              <p class="mb-1">{market.subtitle}</p>
              <p class="fs-20 mb-0 fw-medium lh-1 text-primary">{market.price}</p>
            </div>
            <div class="ms-auto text-end">
              <p class="mb-0">{market.value}</p>
              <p class="mb-0 text-muted"><span class="text-muted">Vol:</span> {market.percent}</p>
            </div>
          </div>
        </CardBody>
        <CardFooter class="p-0">
          <ListGroup class="border-0 list-group-flush">
            <ListGroupItem>
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="mb-0 font-weight-semibold text-dark">
                  Price Change <span class="badge bg-primary-transparent ms-3 text-primary">Increased</span>
                </p>
                <p class="text-success mb-0 font-weight-normal fs-13">
                  <span class="numberfont">{market.todayPrice}</span> today
                </p>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="mb-0 font-weight-semibold text-dark">Market Rank {@html market.badge}</p>
                <p class="text-dark mb-0 fs-15">
                  <span class="numberfont">{market.id}</span>
                </p>
              </div>
            </ListGroupItem>
          </ListGroup>
        </CardFooter>
      </Card>