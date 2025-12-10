
<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "@sveltestrap/sveltestrap";
    import { Bubble3doptions, Bubbleoptions } from "$lib/data/charts/apexcharts/bubblechartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>BubbleChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

 <!-- Page Header -->
  <Pageheader homepage='Apex Bubble Charts'activepage='Charts' subTitle="Apex Charts" page='Apex Bubble Charts' />
  <!-- Page Header Close -->
    
    <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Simple Bubble Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="bubble-simple">
                                <Spkapexcharts id="bubble-simple" options={Bubbleoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>3D Bubble Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="bubble-3d">
                                <Spkapexcharts id="bubble-3d" options={Bubble3doptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 