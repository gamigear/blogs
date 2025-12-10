<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import { Card, CardBody, CardHeader, Col, Row } from "@sveltestrap/sveltestrap";
    import * as radialdata from "$lib/data/charts/apexcharts/radialbarchartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>RadialbarChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Radialbar Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Radialbar Charts"
/>
<!-- Page Header Close -->

  <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Basic Pie Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="radialbar-basic">
                                <Spkapexcharts options={radialdata.Pieoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Multiple Radialbar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="radialbar-multiple">
                                <Spkapexcharts options={radialdata.Multiroptions} id="radialbar-multiple" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Circle Chart - Custom Angle</div>
                        </CardHeader>
                        <CardBody>
                            <div id="circle-custom">
                                <Spkapexcharts options={radialdata.Customoptions} id="circle-custom" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Gradient Circle Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="gradient-circle">
                                <Spkapexcharts options={radialdata.Gradientoptions} id="gradient-circle"  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Stroked Circular Gauge</div>
                        </CardHeader>
                        <CardBody>
                            <div id="circular-stroked">
                                <Spkapexcharts options={radialdata.Strokeoptions} id="circular-stroked" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Circle Chart With Image</div>
                        </CardHeader>
                        <CardBody>
                            <div id="circle-image">
                                <Spkapexcharts options={radialdata.Circleoptions} id="circle-image"  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Semi Circular Gauge</div>
                        </CardHeader>
                        <CardBody>
                            <div id="circular-semi">
                                <Spkapexcharts options={radialdata.Gaugeoptions} id="circular-semi" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 