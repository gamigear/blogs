
<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import * as areachartdata from "$lib/data/charts/apexcharts/areachartdata"
    import { Card, CardBody, CardHeader, Col, Image, Row } from "@sveltestrap/sveltestrap";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>AreaChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
  homepage="Apex Area Charts"
  page="Apex Area Charts"
   activepage='Charts' subTitle="Apex Charts"
/>
<!-- Page Header Close -->

 <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Basic Area Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-basic">
                                <Spkapexcharts id="area-basic" options={areachartdata.Areabasicoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Spline Area Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-spline">
                                <Spkapexcharts id="area-spline" options={areachartdata.Areasplineoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Area Chart With Negative Values</div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-negative">
                                <Spkapexcharts id="area-negative" options={areachartdata.Areavalueoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Selection-Github Style Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="wrapper">
                                <div id="chart-months">
                                    <Spkapexcharts id="chart-months" options={areachartdata.Areagithuboptions}  />
                                </div>

                                <div class="github-style d-flex align-items-center">
                                    <div class="me-2">
                                        <Image class="userimg rounded" src="../../images/faces/1.jpg"
                                            data-hovercard-user-id="634573" alt="" width={38} height={38} />
                                    </div>
                                    <div class="userdetails lh-1">
                                        <a href="#!" class="username fw-semibold fs-14">coder</a>
                                        <span class="cmeta d-block mt-1">
                                            <span class="commits"></span> commits
                                        </span>
                                    </div>
                                </div>

                                <div id="chart-years">
                                    <Spkapexcharts id="chart-years" options={areachartdata.optionsYears} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Stacked Area Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-stacked">
                                <Spkapexcharts id="area-stacked" options={areachartdata.Areastackoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Irregular Time Series Chart</div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-irregular">
                                <Spkapexcharts id="area-irregular" options={areachartdata.Areatimeoptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Area Chart With Null Values</div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-null">
                                <Spkapexcharts id="area-null" options={areachartdata.Areanulloptions}  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">Area Chart-Datetime X-Axis Chart</div>
                            <div class="btn-group ms-auto">
                                <SpkButton color="primary" customClass="btn  btn-sm">1M</SpkButton>
                                <SpkButton color="primary" customClass="btn  btn-sm">6M</SpkButton>
                                <SpkButton color="primary" customClass="btn  btn-sm">1Y</SpkButton>
                                <SpkButton color="primary" customClass="btn  btn-sm">ALL</SpkButton>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div id="area-datetime">
                                <Spkapexcharts id="area-datetime" options={areachartdata.Dateoptions} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 

    