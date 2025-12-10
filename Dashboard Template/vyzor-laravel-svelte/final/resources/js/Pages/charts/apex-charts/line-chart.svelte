<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import * as linechartdata from "@/shared/data/charts/apexcharts/linechartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>LineChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Line Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Line Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1  -->
<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Basic Line Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="line-chart">
                    <Spkapexcharts
                        id="line-chart"
                        options={linechartdata.Linebasicoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Line Chart With Data Labels</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="line-chart-datalabels">
                    <Spkapexcharts
                        id="line-chart-datalabels"
                        options={linechartdata.Linedataoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Zoomable Time Series</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="zoom-chart">
                    <Spkapexcharts
                        id="zoom-chart"
                        options={linechartdata.Linezoomoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Line With Annotations</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="annotation-chart">
                    <Spkapexcharts
                        id="annotation-chart"
                        options={linechartdata.Lineannotationoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Brush Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="wrapper">
                    <div id="brush-chart1">
                        <Spkapexcharts
                            id="brush-chart1"
                            options={linechartdata.Linebrushoptions}
                        />
                    </div>
                    <div id="brush-chart">
                        <Spkapexcharts
                            id="brush-chart"
                            options={linechartdata.optionsLine}
                        />
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>StepLine Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="stepline-chart">
                    <Spkapexcharts
                        id="stepline-chart"
                        options={linechartdata.Linestepoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Gradient Line Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="gradient-chart">
                    <Spkapexcharts
                        id="gradient-chart"
                        options={linechartdata.Linegardientoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Missing/Null Values Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="null-chart">
                    <Spkapexcharts
                        id="null-chart"
                        options={linechartdata.Linenulloptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Real Time Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="dynamic-chart">
                    <Spkapexcharts
                        id="dynamic-chart"
                        options={linechartdata.Linerealoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Dashed Line Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="dashed-chart">
                    <Spkapexcharts
                        id="dashed-chart"
                        options={linechartdata.Linedashoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Syncing Charts</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="wrapper">
                    <div id="chart-line">
                        <Spkapexcharts
                            id="chart-line"
                            options={linechartdata.Linesyncoptions}
                        />
                    </div>
                    <div id="chart-line2">
                        <Spkapexcharts
                            id="chart-line2"
                            options={linechartdata.optionsLine2}
                        />
                    </div>
                    <div id="chart-area">
                        <Spkapexcharts
                            id="chart-area"
                            options={linechartdata.optionsArea}
                        />
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>
<!-- End::row-1  -->
