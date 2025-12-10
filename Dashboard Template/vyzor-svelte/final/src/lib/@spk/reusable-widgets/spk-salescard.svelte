<script lang="ts">
    import Spkapexcharts from "../charts/Spkapexcharts.svelte";

    interface SalesCardProps {
        color?: string;
        svgIcon?: string;
        title?: string;
        value?: string | number;
        inc?: string;
        id?: string;
        chartOptions?: any;
        chartSeries?: any;
        height?: number | string;
        width?: number | string;
        type?: string;
    }

    export let sales: SalesCardProps = {};
</script>

<div class="col-md-6 col-lg-6 col-xl-3">
    <div class="card custom-card">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div class="mb-2">
                    <span
                        class={`avatar avatar-md bg-${sales.color}-transparent svg-${sales.color}`}
                    >
                        {@html sales.svgIcon}
                    </span>
                </div>
                <span class="fs-16">{sales.title}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <span
                        class="fs-20 fw-medium mb-0 d-flex align-items-center"
                    >
                        {sales.value}
                    </span>
                    <span class="fs-13 text-muted">{sales.inc}</span>
                </div>
                <div id={sales.id}>
                    <Spkapexcharts id={sales.id} options={sales.chartOptions} />
                </div>
            </div>
        </div>
    </div>
</div>
