<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "@sveltestrap/sveltestrap";
    import { Basiccandlestick, Candlebrush, Candleline, Candlexaxis, optionsBar } from "$lib/data/charts/apexcharts/candlestickdata";
    // import { Candbasicoptions, CandeoptionsBar, Candsyncoptions } from "$lib/data/charts/apexcharts/candlestickdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>CandlestickChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Candlestick Charts"
    page="Apex Candlestick Charts"
    activepage="Charts"
    subTitle="Apex Charts"
/>
<!-- Page Header Close -->

  <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Candlestick Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="candlestick-basic">
                                <Spkapexcharts id="candlestick-basic" options={Basiccandlestick}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Candlestick Synced With Brush Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                                <Spkapexcharts options={Candlebrush} id="chart-candlestick"/>
                                <Spkapexcharts id="chart-bar" options={optionsBar}  />

                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Candlestick With Category X-axis</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="candlestick-categoryx">
                                <Spkapexcharts options={Candlexaxis} id="candlestick-categoryx"  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Candlestick With Line Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="candlestick-line">
                                <Spkapexcharts options={Candleline} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 

