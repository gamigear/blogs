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
    import { Scatterboptions, Scatterdateoptions, Scatterfilloptions } from "$lib/data/charts/apexcharts/scatterchartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>ScatterChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Scatter Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Scatter Charts"
/>
<!-- Page Header Close -->

  <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Scatter Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="scatter-basic">
                                <Spkapexcharts options={Scatterboptions} id="scatter-basic" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Datetime Scatter Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="scatter-datetime">
                                <Spkapexcharts options={Scatterdateoptions}  id="scatter-datetime" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Image Fill Scatter Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="scatter-image">
                                <Spkapexcharts options={Scatterfilloptions} id="scatter-image"  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 