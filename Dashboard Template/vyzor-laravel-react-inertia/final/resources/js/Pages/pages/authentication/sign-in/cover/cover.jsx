
import SpkButton from "../../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { Fragment, useState } from "react"
import { Card, Col, Form, Row } from "react-bootstrap";
import { Head, Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import AuthenticationLayout from "@/Layouts/authenticationlayout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const Cover = () => {

    const [values, setValues] = useState({
        email: 'tomphillip21@gmail.com',
        password: '12345678',
        showPassword: false
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!values.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = "Invalid email format.";
        }

        // Password validation
        if (!values.password) {
            newErrors.password = "Password is required.";
        } else if (values.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
            // Handle form submission logic here
        }
    };


    return (

        <Fragment>
            <Head title="Signin-Cover" />

            <Row className="authentication authentication-cover-main mx-0">
                <Col xxl={9} xl={9}>
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card border-0 shadow-none my-4">
                                <Card.Body className="p-5">
                                    <div>
                                        <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
                                        <p className="mb-4 text-muted fw-normal text-nowrap">Please enter your credentials</p>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className=" gy-3">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="signin-email" className="text-default">Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    className="form-control "
                                                    id="signup-firstname"
                                                    placeholder="Enter Email ID"
                                                    value={values.email}
                                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                            </Col>
                                            <Col xl={12} className="mb-2">
                                                <Form.Label htmlFor="signin-password" className="text-default d-block">Password</Form.Label>
                                                <div className="position-relative">
                                                    <Form.Control
                                                        type={values.showPassword ? "text" : "password"}
                                                        className="form-control "
                                                        id="signup-password"
                                                        placeholder="Password"
                                                        value={values.password}
                                                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                        isInvalid={!!errors.password}
                                                    />
                                                    <BaseLink href="#!" className="show-password-button text-muted"
                                                        onClick={() => setValues((prev) => ({ ...prev, showPassword: !prev.showPassword }))}>
                                                        {values.showPassword ? (
                                                            <i className="ri-eye-line align-middle"></i>
                                                        ) : (
                                                            <i className="ri-eye-off-line align-middle"></i>
                                                        )}
                                                    </BaseLink>
                                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap custom-login">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
                                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                        <Link href={`${__APP_BASE_PATH__}/pages/authentication/reset-password/basic`} className="link-danger fw-medium fs-12">Forget password ?</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="d-grid mt-3">
                                            <SpkButton Buttontype="submit" Customclass="btn btn-primary">Sign In</SpkButton>
                                        </div>
                                    </Form>
                                    <div className="text-center my-3 authentication-barrier">
                                        <span className="op-4 fs-13">OR</span>
                                    </div>
                                    <div className="d-grid mb-3">
                                        <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
                                            <span className="avatar avatar-xs">
                                                <BaseImage src="/build/assets/images/media/apps/google.png" alt="" />
                                            </span>
                                            <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                                        </SpkButton>
                                        <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                            <span className="avatar avatar-xs">
                                                <BaseImage src="/build/assets/images/media/apps/facebook.png" alt="" />
                                            </span>
                                            <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                                        </SpkButton>
                                    </div>
                                    <div className="text-center mt-3 fw-medium">
                                        Dont have an account? <Link href={`${__APP_BASE_PATH__}/pages/authentication/sign-up/basic/`} className="text-primary">Sign Up</Link>
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
        </Fragment>
    )
}
// Assign layout
Cover.layout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;
export default Cover;
