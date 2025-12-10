<script lang="ts">
    import { Col } from "@sveltestrap/sveltestrap";

    interface ProductCardProps {
        color?: string;
        svgIcon?: string;
        title?: string;
        value?: string | number;
        percentage?: string;
        percentageColor?: string;
    }

    export let products: ProductCardProps = {};
</script>
 <Col xxl={2} xl={3} lg={4} md={6}>
        <div class="text-center">
          <div class="lh-1 mb-3">
            <span class={`avatar avatar-lg bg-${products.color}-transparent avatar-rounded`}>
              <span class={`avatar avatar-sm bg-${products.color} avatar-rounded svg-white`}>
                {@html products.svgIcon}
              </span>
            </span>
          </div>
          <span class="d-block mb-1">{products.title}</span>
          <h5 class="fw-semibold">{products.value}</h5>
          <div class="fs-13">
            <span class={`text-${products.percentageColor} me-1`}>{products.percentage} </span>  This Week
          </div>
        </div>
      </Col>