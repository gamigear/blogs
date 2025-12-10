<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import SpkChartjs from "$lib/@spk/charts/SpkChartjs.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
import * as chartjsdata from "$lib/data/charts/chartjsdata"

</script>

<!-- Page Title -->
<svelte:head>
    <title>ChartjsCharts | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="ChartJs Charts"
    activepage="Charts"
    page="ChartJs Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Line Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs id="chartjs-line" type="line" data={chartjsdata.Data} options={chartjsdata.Option} />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Bar Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-bar"
                type="bar" options={chartjsdata.Option1} data={chartjsdata.Data1}
                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Pie Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-pie"
                type="pie" options={chartjsdata.Option2} data={chartjsdata.Data2}
                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Doughnut Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-doughnut"
                type="doughnut" options={chartjsdata.Option3} data={chartjsdata.Data3}
                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Mixed Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-mixed"
                type="bar" options={chartjsdata.mixOptions} data={chartjsdata.MixedData}

                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Polar Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-polar"
                type="polarArea" options={chartjsdata.Option5} data={chartjsdata.Data5}
                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Radial Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-radar"
                type="radar" options={chartjsdata.Option6} data={chartjsdata.Data6}
                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Scatter Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-scatter" 
                type="scatter" options={chartjsdata.Option7} data={chartjsdata.Data7} 
                />
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Chartjs Bubble Chart</div>
            </CardHeader>
            <CardBody>
                <SpkChartjs
                id="chartjs-bubble"
                type="bubble" options={chartjsdata.Option8} data={chartjsdata.Data8}
                />
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
