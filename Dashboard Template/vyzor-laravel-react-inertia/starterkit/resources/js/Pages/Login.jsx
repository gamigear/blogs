import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Form,  Nav, Row, Tab, } from 'react-bootstrap';
import { auth } from '../firebase/auth';
import SpkButton from '../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons';
import ParticleCard from '../shared/data/authentication/particles';
import { toast, ToastContainer } from 'react-toastify';
import FirebaseLayout from '../Layouts/Firebaselayout';
import BaseImage from "../shared/layouts-components/baseimage/baseimage";
import { Head, Link, router } from '@inertiajs/react';
import BaseLink from '../shared/layouts-components/baselink/baselink';
const Login = () => {
    const [passwordVisibility, setPasswordVisibility] = useState({});

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    };
    const [data, setData] = useState({
        "email": "adminnextjs@gmail.com",
        "password": "1234567890",
    });
    const { email, password } = data;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const [loading, setLoading] = useState(false);

    const Login = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log(userCredential.user);

            toast.success('Login successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setTimeout(() => {
                RouteChange();
            }, 1200);
        } catch (err) {
            toast.error('Invalid details', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoading(false);
        }
    };
    const [loading1, setLoading1] = useState(false);

    const Login1 = async (_e) => {
        _e.preventDefault();
        setLoading1(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (data.email === "adminnextjs@gmail.com" && data.password === "1234567890") {
            toast.success('Login successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setTimeout(() => {
                RouteChange(); // Navigate after toast delay
            }, 2000);

        } else {
            setData({
                email: "adminnextjs@gmail.com",
                password: "1234567890",
            });
            toast.error('Invalid login credentials', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,

                pauseOnHover: true,
                draggable: true,
            });
        }

        setLoading1(false);
    };


    const RouteChange = () => {
        router.visit(`${__APP_BASE_PATH__}/dashboards/sales`);
    };


    useEffect(() => {
        const body = document.body
        body.classList.add("authentication-background");
        return () => {
            body.classList.remove("authentication-background");
        };
    }, []);
    return (
        <Fragment>
            <Head title={"Home"} />
            <div className="authentication-basic-background">
                {/*<BaseImage src={BG9} alt="" />*/}
                <BaseImage src="/build/assets/images/media/backgrounds/9.png" alt="logo" className="desktop-logo" />
            </div>
            <ParticleCard />
            <div className="container">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                        <Tab.Container defaultActiveKey={"react"}>
                            <Nav variant="pills" className="justify-content-center authentication-tabs mt-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="react">
                                        <BaseImage src="/build/assets/images/brand-logos/react.png" alt="logo" className='avatar avatar-sm' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="firebase">
                                        <BaseImage src="/build/assets/images/brand-logos/firbase.png" alt="logo" className='avatar avatar-sm' />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Card className="custom-card border-0 my-4">
                                <Tab.Content className=''>
                                    <Tab.Pane eventKey="react" className='border-0 p-0'>
                                        <Card.Body className="p-sm-5 p-4">
                                            <div className="mb-4">
                                                <Link href={`${__APP_BASE_PATH__}/dashboards/sales`}>
                                                    <BaseImage src={"/build/assets/images/brand-logos/toggle-logo.png"} alt="logo" className="desktop-dark" />
                                                </Link>
                                            </div>
                                            <div>
                                                <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
                                                <p className="mb-4 text-muted fw-normal">Please enter your credentials</p>
                                            </div>
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <label htmlFor="signin-email" className="form-label text-default">Email</label>
                                                    <Form.Control type="email" name="email" className="signin-email-input" id="email" placeholder="user name"
                                                        defaultValue={email}
                                                        onChange={changeHandler}
                                                    />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <label htmlFor="signin-password" className="form-label text-default d-block">Password</label>
                                                    <div className="position-relative">
                                                        <Form.Control name="password" type={passwordVisibility.password ? 'text' : 'password'} value={password}
                                                            onChange={changeHandler} className="create-password-input" id="signin-password" placeholder="password" />
                                                        <BaseLink href="#!" onClick={() => togglePasswordVisibility('password')} className="show-password-button text-muted" id="button-addon2">
                                                            <i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></BaseLink>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
                                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                                Remember me
                                                            </label>
                                                            <BaseLink href="#!" className="float-end link-danger fw-medium fs-12">Forget password ?</BaseLink>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="d-grid mt-3">
                                                <button onClick={Login1} className={`btn btn-primary ${loading1 ? 'disabled' : ''}`}>
                                                    <i className="ri-login-circle-line me-2"></i> Sign In
                                                    {loading1 && <i className="fa fa-spinner fa-spin me-2 ms-2"></i>}
                                                </button>
                                            </div>
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
                                                        <BaseImage src="/build/assets/images/media/apps/facebook.png" alt="logo"  />
                                                    </span>
                                                    <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                                                </SpkButton>
                                            </div>
                                            <div className="text-center mt-3 fw-medium">
                                                Dont have an account? <BaseLink href="#!" className="text-primary">Sign Up</BaseLink>
                                            </div>
                                        </Card.Body>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="firebase" className='border-0 p-0'>
                                        <Card.Body className="p-sm-5 p-4">
                                            <div className="mb-4">
                                                <Link href={`${__APP_BASE_PATH__}/dashboards/sales`}>
                                                    <BaseImage src="/build/assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                                                </Link>
                                            </div>
                                            <div>
                                                <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
                                                <p className="mb-4 text-muted fw-normal">Please enter your credentials</p>
                                            </div>
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <label htmlFor="signin-email" className="form-label text-default">Email</label>
                                                    <Form.Control type="email" name="email" className="" id="email" placeholder="user name"
                                                        defaultValue={email}
                                                        onChange={changeHandler}
                                                    />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <label htmlFor="signin-password" className="form-label text-default d-block">Password</label>
                                                    <div className="position-relative">
                                                        <Form.Control name="password" type={passwordVisibility.passwords ? 'text' : 'password'} value={password}
                                                            onChange={changeHandler} className="create-password-input" id="signin-password" placeholder="password" />
                                                        <BaseLink href="#!" onClick={() => togglePasswordVisibility('passwords')} className="show-password-button text-muted" id="button-addon2">
                                                            <i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></BaseLink>

                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
                                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                                Remember me
                                                            </label>
                                                            <BaseLink href="#!" className="float-end link-danger fw-medium fs-12">Forget password ?</BaseLink>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="d-grid mt-3">
                                                <button onClick={Login} className={`btn btn-primary ${loading ? 'disabled' : ''}`}>
                                                    <i className="ri-login-circle-line me-2"></i> Sign In
                                                    {loading && <i className="fa fa-spinner fa-spin me-2 ms-2"></i>}
                                                </button>
                                            </div>
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
                                                Dont have an account? <BaseLink href="#!" className="text-primary">Sign Up</BaseLink>
                                            </div>
                                        </Card.Body>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card>
                        </Tab.Container>
                    </Col>
                </Row>
            </div>
            <ToastContainer  />
        </Fragment>
    );
};
// Assign layout
Login.layout = (page) => <FirebaseLayout>{page}</FirebaseLayout>;

export default Login;
