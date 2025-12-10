
import SpkButton from "../../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from 'react-hook-form';
import { Head, Link, router } from "@inertiajs/react";
import AuthenticationLayout from "@/Layouts/authenticationlayout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const Basic = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [passwordVisibility, setPasswordVisibility] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const onSubmit = (_data) => {
        router.get(`${__APP_BASE_PATH__}/dashboards/sales`);
        toast.success('Created Password successful', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const newPassword = watch('newPassword');

    return (

        <Fragment>

            <Head title="Resetpassword-Basic" />

            <div className="authentication-basic-background">
                <BaseImage src="/build/assets/images/media/backgrounds/9.png" alt="" />
            </div>

            <div className="container">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                        <Card className="custom-card border-0 my-4">
                            <Card.Body className="card-body p-5">
                                <div className="mb-4">
                                    <Link href={`${__APP_BASE_PATH__}/dashboards/sales`}>
                                        <BaseImage src="/build/assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                                    </Link>
                                </div>
                                <div>
                                    <h4 className="mb-1 fw-semibold">Reset Password</h4>
                                    <p className="mb-4 text-muted fw-normal text-nowrap">Set your new password here.</p>
                                </div>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row className="row gy-3">
                                        <Col xl={12}>
                                            <label htmlFor="reset-password" className="form-label text-default">Current Password</label>
                                            <div className="position-relative custom-auth">
                                                <Form.Control
                                                    type={passwordVisibility.current ? 'text' : 'password'}
                                                    id="currentPassword"
                                                    placeholder="Current password"
                                                    className="form-control form-control-lg"
                                                    {...register('currentPassword', { required: 'Current password is required' })}
                                                />
                                                <BaseLink href="#!" onClick={() => togglePasswordVisibility('current')} className="show-password-button text-muted" id="button-addon2"><i className={`${passwordVisibility.current ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} /></BaseLink>
                                            </div>
                                            {errors.currentPassword && <p className="text-danger text-sm">{errors.currentPassword.message}</p>}
                                        </Col>
                                        <Col xl={12} className="custom-auth">
                                            <label htmlFor="reset-newpassword" className="form-label text-default">New Password</label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={passwordVisibility.new ? 'text' : 'password'}
                                                    id="newPassword"
                                                    placeholder="New password"
                                                    className="form-control form-control-lg"
                                                    {...register('newPassword', {
                                                        required: 'New password is required',
                                                        minLength: {
                                                            value: 6,
                                                            message: 'Password must be at least 6 characters',
                                                        },
                                                    })}
                                                />
                                                <BaseLink href="#!" onClick={() => togglePasswordVisibility('new')} className="show-password-button text-muted" id="button-addon21"><i className={`${passwordVisibility.new ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} /></BaseLink>
                                            </div>
                                            {errors.newPassword && <p className="text-danger text-sm">{errors.newPassword.message}</p>}
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={passwordVisibility.confirm ? 'text' : 'password'}
                                                    id="confirmPassword"
                                                    placeholder="Confirm password"
                                                    className="form-control form-control-lg"
                                                    {...register('confirmPassword', {
                                                        required: 'Please confirm your password',
                                                        validate: (value) =>
                                                            value === newPassword || 'Passwords do not match',
                                                    })}
                                                />
                                                <BaseLink href="#!" onClick={() => togglePasswordVisibility('confirm')} className="show-password-button text-muted" id="button-addon22"><i className={`${passwordVisibility.confirm ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} /></BaseLink>
                                            </div>
                                            {errors.confirmPassword && <p className="text-danger text-sm">{errors.confirmPassword.message}</p>}
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-3">
                                        <SpkButton Buttontype="submit" Customclass="btn btn-primary">Reset Password</SpkButton>
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
                                    Dont want to reset? <Link href={`${__APP_BASE_PATH__}/pages/authentication/sign-in/basic`} className="text-primary">Sign In</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        </Fragment>
    )
};
// Assign layout
Basic.layout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;
export default Basic;
