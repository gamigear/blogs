<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import * as echartsdata from "$lib/data/charts/echartdata";
    import SpkEChart from "$lib/@spk/charts/SpkEChart.svelte";
    import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>EchartCharts | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Echart Charts" activepage="Charts" page="Echart Charts" />
<!-- Page Header Close -->

<!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Line Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Lineoption} chartId="echart-basic-line" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Smoothed Line Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Smoothoption}  chartId="echart-smoothed-line" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>
                                Basic Area Chart
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Basicoption}  chartId="echart-area-line" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Stacked Line Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Stackoption}  chartId="echart-stacked-line" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Stacked Area Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Stackareaoption}  chartId="echart-stacked-area" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Step Line Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Stepoption}  chartId="echart-step-line" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Bar Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Baroption}  chartId="echart-bar-basic" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Bar With Background Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Backoption}  chartId="echart-bar-background" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Style For a Single Bar Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Styleoption}  chartId="echart-bar-single" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Water Fall Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Wateroption}  chartId="echart-waterfall" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Bar With Negative Values Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Negativeoption}  chartId="echart-negative-values" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Bar With Labels Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.BarWithLabels}  chartId="echart-bar-labels" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Horizontal Bar Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Horizontaloption}  chartId="echart-bar-horizontal" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Horizontal Stacked Bar Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.HoriStackoption}  chartId="echart-stacked-horizontal" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Pie Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Pieoption} chartId="echart-pie" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Doughnut Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Doughnutoption}  chartId="echart-doughnut" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Scatter Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Scattoption}  chartId="echart-scatter" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Bubble Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Bubbleoption} chartId="echart-bubble" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Candlestick Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Candleoption}  chartId="echart-candlestick" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Radar Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Radaroption}  chartId="echart-basic-radar" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Heatmap Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Heatoption} chartId="echart-heatmap" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Treemap Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Treeoption} chartId="echart-treemap" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Funnel Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Funneloption} chartId="echart-funnel" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Gauge Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Gaugeoption} chartId="echart-gauge-basic" />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Simple Graph Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <SpkEChart option={echartsdata.Graphoption} chartId="echart-simple-graph" />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <!--End::row-1 --> 

