<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import {
        Funneloptions,
        Pyramidoptions,
    } from "$lib/data/charts/apexcharts/funneldata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>FunnelChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Funnel Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Funnel Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Funnel Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="funnel-chart">
                    <Spkapexcharts options={Funneloptions} id="funnel-chart" />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Pyramid Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="pyramid-chart">
                    <Spkapexcharts
                        options={Pyramidoptions}
                        id="pyramid-chart"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
