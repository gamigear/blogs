
import SpkButton from "../../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import { Head, Link, router } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import AuthenticationLayout from "@/Layouts/authenticationlayout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const Cover = () => {

    const [formData, setFormData] = useState({
        password: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        passwords: false,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setFormErrors((prev) => ({ ...prev, [id]: '' }));
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const validate = () => {
        const errors = {};

        if (!formData.password || formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            router.get(`${__APP_BASE_PATH__}/dashboards/sales`);
            toast.success('Login successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (

        <Fragment>

            <Head title="Lockscreen-Cover" />

            <Row className="authentication authentication-cover-main mx-0">
                <Col xxl={9} xl={9}>
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card border-0 shadow-none my-4">
                                <Card.Body className="p-5">
                                    <p className="h4 mb-2 fw-semibold">Hello Tom Phillip</p>
                                    <p className="mb-3 text-muted fw-normal">Welcome Back</p>
                                    <div className="d-flex gap-2 align-items-center mb-3">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <BaseImage src="/build/assets/images/faces/12.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-dark fw-medium">tomphillip32@gmail.com</p>
                                        </div>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-3">
                                            <Col xl={12} className="mb-2">
                                                <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                                                <div className="position-relative custom-auth">
                                                    <Form.Control
                                                        type={passwordVisibility.password ? 'text' : 'password'}
                                                        className="form-control form-control-lg"
                                                        id="password"
                                                        placeholder="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                    <BaseLink onClick={() => togglePasswordVisibility('password')} href="#!" className="show-password-button text-muted" id="button-addon2"><i className={`align-middle ${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'}`}></i></BaseLink>
                                                </div>
                                                {formErrors.password && (
                                                    <p className="text-danger text-xs mt-1">{formErrors.password}</p>
                                                )}
                                            </Col>
                                        </Row>
                                        <Col xl={12} className="d-grid mt-2">
                                            <SpkButton Buttontype="submit" Customclass="btn btn-lg btn-primary">Unlock</SpkButton>
                                        </Col>
                                    </Form>
                                    <div className="text-center">
                                        <p className="fw-medium mt-3 mb-0">Try unlock with <BaseLink className="text-success" href="#!"><u>Finger print</u></BaseLink> / <BaseLink className="text-success" href="#!"><u>Face Id</u></BaseLink></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={3} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link href={`${__APP_BASE_PATH__}/dashboards/sales`}>
                                <BaseImage src="/build/assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <div className="authentication-cover-background">
                            <BaseImage src="/build/assets/images/media/backgrounds/9.png" alt="" />
                        </div>
                        <div className="authentication-cover-content">
                            <div className="p-5">
                                <h3 className="fw-semibold lh-base">Welcome to Dashboard</h3>
                                <p className="mb-0 text-muted fw-medium">Manage your website and content with ease using our powerful admin tools.</p>
                            </div>
                            <div>
                                <BaseImage src="/build/assets/images/media/media-72.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Fragment>
    )
};
// Assign layout
Cover.layout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;
export default Cover;
