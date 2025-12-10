
import MainLayout from "@/Layouts/layout";
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Boxplothoptions, Boxplothseries, Boxplotoptions, Boxplotseries, Boxplotsoptions, Boxplotsseries } from "../../../../shared/data/charts/apexcharts/boxplotdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";


const BoxplotChart = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title={"Apex Boxplot Charts"} />

            <Pageheader title="Apex Charts" subtitle="Apex Charts" currentpage="Apex Boxplot Charts" activepage="Apex Boxplot Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Boxplot Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-basic">
                                <Spkapexcharts chartOptions={Boxplotoptions} chartSeries={Boxplotseries} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Boxplot With Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-scatter">
                                <Spkapexcharts chartOptions={Boxplotsoptions} chartSeries={Boxplotsseries} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Horizontal Boxplot Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-horizontal">
                                <Spkapexcharts chartOptions={Boxplothoptions} chartSeries={Boxplothseries} type="boxPlot" width={"100%"} height={320} />
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
BoxplotChart.layout = (page) => <MainLayout>{page}</MainLayout>;
export default BoxplotChart;
