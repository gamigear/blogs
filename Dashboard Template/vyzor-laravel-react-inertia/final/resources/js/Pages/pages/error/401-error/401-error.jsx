import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Head, Link } from "@inertiajs/react";
import AuthenticationLayout from "@/Layouts/authenticationlayout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";


const Error401 = () => {

    return (

        <Fragment>

            <Head title="Error-401" />

            <div className="page error-bg">
                <div className="error-page-background grid-cards">
                    <BaseImage src="/build/assets/images/media/backgrounds/10.svg" alt="" />
                </div>

                {/* <!-- Start::error-page --> */}

                <Row className="align-items-center justify-content-center h-100 g-0">
                    <Col xl={7} lg={7} md={7} className="col-12">
                        <div className="text-center px-2">
                            <div className="text-center mb-5">
                                <BaseImage src="/build/assets/images/media/backgrounds/11.png" alt="" className="w-sm-auto w-100 h-100" />
                            </div>
                            <span className="d-block fs-4 text-primary fw-semibold">Oops! Something Went Wrong</span>
                            <p className="error-text mb-0">401</p>
                            <p className="fs-5 fw-normal mb-4">There was an issue with the page. Try again <br /> later or contact support.</p>
                            <Link href={`${__APP_BASE_PATH__}/dashboards/sales`} className="btn btn-primary btn-w-lg">Back to home<i className="ti ti-arrow-narrow-right ms-2"></i></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
};
// Assign layout
Error401.layout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;
export default Error401;
