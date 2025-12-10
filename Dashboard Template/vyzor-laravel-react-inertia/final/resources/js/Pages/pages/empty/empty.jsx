
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Head } from "@inertiajs/react";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import MainLayout from "@/Layouts/layout";


const Empty = () => {

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Pages-Empty" />

            <Pageheader title="Pages" currentpage="Empty" activepage="Empty" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card ">
                        <Card.Body>
                            <h6 className="mb-0 ">Empty Card</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};
// Assign layout
Empty.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Empty;
