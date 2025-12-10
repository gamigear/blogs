
<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Card, CardBody, CardHeader, Col, Row } from "@sveltestrap/sveltestrap";
    import * as barchartdata from "$lib/data/charts/apexcharts/barchartsdata"
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>BarChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
   <!-- Page Header -->
  <Pageheader homepage='Apex Bar Charts'  activepage='Charts' subTitle="Apex Charts" page='Apex Bar Charts' />
  <!-- Page Header Close -->

    <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Basic Bar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-basic">
                                <Spkapexcharts id="bar-basic" options={barchartdata.Barbasicoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Grouped Bar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-group">
                                <Spkapexcharts id="bar-group" options={barchartdata.Bargroupoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Stacked Bar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-stacked">
                                <Spkapexcharts id="bar-stacked" options={barchartdata.Barstackoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">100% Stacked Bar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-full">
                                <Spkapexcharts id="bar-full" options={barchartdata.Barstack1options}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Bar Chart With Negative Values</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-negative">
                                <Spkapexcharts id="bar-negative" options={barchartdata.Barchartoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Bar Chart With Markers</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-markers">
                                <Spkapexcharts id="bar-markers" options={barchartdata.Barmakeroptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Reversed Bar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-reversed">
                                <Spkapexcharts  id="bar-reversed" options={barchartdata.Barreverseoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Bar With Category DataLabels</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-categories">
                                <Spkapexcharts id="bar-categories" options={barchartdata.Barlableoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Patterned Bar Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-pattern">
                                <Spkapexcharts id="bar-pattern" options={barchartdata.Barpatternoptions}/>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Bar With Image Fill</div>
                        </CardHeader>
                        <CardBody>
                            <div id="bar-image">
                                <Spkapexcharts id="bar-image"  options={barchartdata.Barimgoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 

    