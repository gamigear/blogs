<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "@sveltestrap/sveltestrap";
    import { Multioptions, Polygonoptions, Radaroptions } from "$lib/data/charts/apexcharts/radarchartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>RadarChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Radar Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Radar Charts"
/>
<!-- Page Header Close -->

 <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Radar Chart</CardTitle>
                        </CardHeader>
                        <CardBody class="">
                            <div id="radar-basic">
                                <Spkapexcharts options={Radaroptions} id="radar-basic" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Radar Chart-Multiple Series</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="radar-multiple">
                                <Spkapexcharts options={Multioptions} id="radar-multiple" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Radar Chart Polygon Fill</CardTitle>
                        </CardHeader>
                        <CardBody class="">
                            <div id="radar-polygon">
                                <Spkapexcharts options={Polygonoptions} id="radar-polygon"  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 