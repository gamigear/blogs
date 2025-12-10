
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import * as areachartdata from "../../../../shared/data/charts/apexcharts/areachartdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import MainLayout from "@/Layouts/layout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const AreaChart = () => {

    return (

        <Fragment>

            <Head title={"Apex Area Charts"} />

            <Pageheader title="Charts" currentpage="Apex Area Charts" subtitle="Apex Charts" activepage="Apex Area Charts" />

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic">
                                <Spkapexcharts chartOptions={areachartdata.Areabasicoptions} chartSeries={areachartdata.Areabasicseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Spline Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline">
                                <Spkapexcharts chartOptions={areachartdata.Areasplineoptions} chartSeries={areachartdata.Areasplineseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative">
                                <Spkapexcharts chartOptions={areachartdata.Areavalueoptions} chartSeries={areachartdata.Areavalueseries} type="area" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Selection-Github Style Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="wrapper">
                                <div id="chart-months">
                                    <Spkapexcharts chartOptions={areachartdata.Areagithuboptions} chartSeries={areachartdata.Areagithubseries} type="area" width={"100%"} height={130} />
                                </div>

                                <div className="github-style d-flex align-items-center">
                                    <div className="me-2">
                                        <BaseImage className="userimg rounded" src="/build/assets/images/faces/1.jpg"
                                            data-hovercard-user-id="634573" alt="" width="38" height="38" />
                                    </div>
                                    <div className="userdetails lh-1">
                                        <BaseLink href="#!" className="username fw-semibold fs-14">coder</BaseLink>
                                        <span className="cmeta d-block mt-1">
                                            <span className="commits"></span> commits
                                        </span>
                                    </div>
                                </div>

                                <div id="chart-years">
                                    <Spkapexcharts chartOptions={areachartdata.optionsYears} chartSeries={areachartdata.seriesYears} type="area" width={"100%"} height={140} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked">
                                <Spkapexcharts chartOptions={areachartdata.Areastackoptions} chartSeries={areachartdata.Areastackseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Irregular Time Series Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-irregular">
                                <Spkapexcharts chartOptions={areachartdata.Areatimeoptions} chartSeries={areachartdata.Areatimeseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Null Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null">
                                <Spkapexcharts chartOptions={areachartdata.Areanulloptions} chartSeries={areachartdata.Areanullseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart-Datetime X-Axis Chart</div>

                        </Card.Header>
                        <Card.Body>
                            <div id="area-datetime">
                                <Spkapexcharts chartOptions={areachartdata.Dateoptions} chartSeries={areachartdata.Dateseries} type='area' height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};
// Assign layout
AreaChart.layout = (page) => <MainLayout>{page}</MainLayout>;
export default AreaChart;
