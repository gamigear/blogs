
import MainLayout from "@/Layouts/layout";
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Bubble3doptions, Bubble3dseries, Bubbleoptions, Bubbleseries } from "../../../../shared/data/charts/apexcharts/bubblechartdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";


const BubbleChart = () => {

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title={"Apex Bubble Charts"} />

            <Pageheader title="Apex Charts" subtitle="Apex Charts" currentpage="Apex Bubble Charts" activepage="Apex Bubble Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Simple Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-simple">
                                <Spkapexcharts chartOptions={Bubbleoptions} chartSeries={Bubbleseries} type="bubble" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>3D Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-3d">
                                <Spkapexcharts chartOptions={Bubble3doptions} chartSeries={Bubble3dseries} type="bubble" width={"100%"} height={350} />
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
BubbleChart.layout = (page) => <MainLayout>{page}</MainLayout>;
export default BubbleChart;
