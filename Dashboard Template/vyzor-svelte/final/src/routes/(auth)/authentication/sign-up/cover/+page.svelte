<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation"; // SvelteKit navigation
    import {
        Card,
        CardBody,
        Col,
        Form,
        Image,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import { base } from "$app/paths";
    const basePath = base;
    let values = {
        email: "",
        password: "",
        showPassword: false,
    };

    let errors: { email?: string; password?: string } = {};

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};

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

        errors = newErrors;
        return Object.keys(newErrors).length === 0;
    };

    const togglePassword = () => {
        values.showPassword = !values.showPassword;
    };

    let matched: string;
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        if (validate()) {
            matched = "Save Password successful";
            goto(`${basePath}/`);
        }
    };

     const setBodyClass = (action: string) => {
        if (action === "add") {
            document.body.classList.add("bg-white");
        } else {
            document.body.classList.remove("bg-white");
        }
    };

    onMount(() => {
        if (localStorage.getItem("visited") === "true") {
            setBodyClass("add");
        } else {
            setBodyClass("add");
            localStorage.setItem("visited", "true");
        }

        const handleBeforeUnload = () => {
            setBodyClass("remove");
            localStorage.removeItem("visited");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            setBodyClass("remove");
            localStorage.removeItem("visited");
        };
    });

</script>

<!-- Page Title -->
<svelte:head>
    <title>Signup-Cover | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Row class="authentication authentication-cover-main mx-0">
    <Col xxl={9} xl={9}>
        <Row class="justify-content-center align-items-center h-100">
            <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
                <Card class="custom-card border-0  shadow-none my-4">
                    <CardBody class="p-5">
                        <div>
                            <h4 class="mb-1 fw-semibold">
                                Create your account
                            </h4>
                            <p class="mb-4 text-muted fw-normal">
                                Please enter valid credentials
                            </p>
                        </div>
                        <Form on:submit={handleSubmit}>
                            <Row class="gy-3">
                                <Col xl={12}>
                                    <Label
                                        for="signup-username"
                                        class="text-default">User Name</Label
                                    >
                                    <Input
                                        type="text"
                                        class=""
                                        id="signup-username"
                                        placeholder="Enter User Name"
                                        defaultValue="Tom Phillip"
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Label
                                        for="signin-email"
                                        class="text-default">Email</Label
                                    >
                                    <Input
                                        type="email"
                                        class="form-control "
                                        id="signup-firstname"
                                        placeholder="Enter Email ID"
                                        bind:value={values.email}
                                    />
                                    {#if errors.email}
                                        <p class="text-danger text-sm">
                                            {errors.email}
                                        </p>
                                    {/if}
                                </Col>
                                <Col xl={12} class="mb-2">
                                    <Label
                                        for="signin-password"
                                        class="text-default d-block"
                                        >Password</Label
                                    >
                                    <div class="position-relative">
                                        <Input
                                            type={values.showPassword
                                                ? "text"
                                                : "password"}
                                            class="form-control "
                                            id="signup-password"
                                            placeholder="Password"
                                            bind:value={values.password}
                                        />
                                        <a
                                            href="#!"
                                            class="show-password-button text-muted"
                                            on:click={togglePassword}
                                        >
                                            {#if values.showPassword}
                                                <i
                                                    class="ri-eye-line align-middle"
                                                ></i>
                                            {:else}
                                                <i
                                                    class="ri-eye-off-line align-middle"
                                                ></i>
                                            {/if}
                                        </a>
                                        {#if errors.password}
                                            <p class="text-danger text-sm">
                                                {errors.password}
                                            </p>
                                        {/if}

                                        {#if matched}
                                            <p class="text-success text-sm">
                                                {matched}
                                            </p>
                                        {/if}
                                    </div>
                                </Col>
                            </Row>
                            <div class="d-grid mt-3">
                                <SpkButton
                                    buttontype="submit"
                                    customClass="btn btn-primary"
                                    >Sign Up</SpkButton
                                >
                            </div>
                        </Form>
                        <div class="text-center my-3 authentication-barrier">
                            <span class="op-4 fs-13">OR</span>
                        </div>
                        <div class="d-grid mb-3">
                            <SpkButton
                                customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3"
                            >
                                <span class="avatar avatar-xs">
                                    <Image
                                        src="../../images/media/apps/google.png"
                                        alt=""
                                    />
                                </span>
                                <span
                                    class="lh-1 ms-2 fs-13 text-default fw-medium"
                                    >Signup with Google</span
                                >
                            </SpkButton>
                            <SpkButton
                                customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill"
                            >
                                <span class="avatar avatar-xs">
                                    <Image
                                        src="../../images/media/apps/facebook.png"
                                        alt=""
                                    />
                                </span>
                                <span
                                    class="lh-1 ms-2 fs-13 text-default fw-medium"
                                    >Signup with Facebook</span
                                >
                            </SpkButton>
                        </div>
                        <div class="text-center mt-3 fw-medium">
                            Already have a account? <a
                                href={`${basePath}/authentication/sign-in/basic/`}
                                class="text-primary">Sign In</a
                            >
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3} xl={3} lg={12} class="d-xl-block d-none px-0">
        <div class="authentication-cover overflow-hidden">
            <div class="authentication-cover-logo">
                <a href={`${basePath}/dashboards/sales`}>
                    <Image
                        src="../../images/brand-logos/toggle-logo.png"
                        alt="logo"
                        class="desktop-dark"
                    />
                </a>
            </div>
            <div class="authentication-cover-background">
                <Image src="../../images/media/backgrounds/9.png" alt="" />
            </div>
            <div class="authentication-cover-content">
                <div class="p-5">
                    <h3 class="fw-semibold lh-base">Welcome to Dashboard</h3>
                    <p class="mb-0 text-muted fw-medium">
                        Manage your website and content with ease using our
                        powerful admin tools.
                    </p>
                </div>
                <div>
                    <Image
                        src="../../images/media/media-72.png"
                        alt=""
                        class="img-fluid"
                    />
                </div>
            </div>
        </div>
    </Col>
</Row>
