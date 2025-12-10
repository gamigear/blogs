<script lang="ts">
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
    import { goto } from "$app/navigation";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    const basePath =base
    let values = {
        email: "",
        password: "",
        showPassword: false,
    };
    let errors: Record<string, string> = {};

    const validate = () => {
        const newErrors: Record<string, string> = {};

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
    let matched: string;
    const handleSubmit = (event: Event) => {
        event.preventDefault();
        if (validate()) {
            (matched = "Save Password successful"), goto(`${basePath}/dashboards/sales/`);
        }
    };

    const togglePassword = () => {
        values.showPassword = !values.showPassword;
    };

     const setBodyClass = (action: string) => {
        if (action === "add") {
            document.body.classList.add(
                "authentication-background",
                "authenticationcover-background",
                "position-relative",
            );
            document.body.style.display = "block";
        } else {
            document.body.classList.remove(
                "authentication-background",
                "authenticationcover-background",
                "position-relative",
            );
            document.body.style.display = "none";
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
            document.body.removeAttribute("style");
        };
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>Signin-Basic | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<div class="authentication-basic-background">
    <Image src="../../images/media/backgrounds/9.png" alt="" />
</div>
<div class="container">
    <Row
        class="justify-content-center align-items-center authentication authentication-basic h-100"
    >
        <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
            <Card class="custom-card border-0 my-4">
                <CardBody class="p-5">
                    <div class="mb-4">
                        <a href={`${basePath}/dashboards/sales/`}>
                            <Image
                                src="../../images/brand-logos/toggle-logo.png"
                                alt="logo"
                                class="desktop-dark"
                            />
                        </a>
                    </div>
                    <div>
                        <h4 class="mb-1 fw-semibold">Hi,Welcome back!</h4>
                        <p class="mb-4 text-muted fw-normal">
                            Please enter your credentials
                        </p>
                    </div>
                    <Form on:submit={handleSubmit}>
                        <div class="row gy-3">
                            <Col xl={12}>
                                <Label for="signin-email" class="text-default"
                                    >Email</Label
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
                                    class="text-default d-block">Password</Label
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
                                            <i class="ri-eye-line align-middle"
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
                                            {errors.password}
                                        </p>
                                    {/if}
                                </div>
                                <div class="mt-2">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="defaultCheck1"
                                            defaultChecked
                                        />
                                        <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                        >
                                            Remember me
                                        </label>
                                        <a
                                            href={`${basePath}/authentication/reset-password/basic/`}
                                            class="float-end link-danger fw-medium fs-12"
                                            >Forget password ?</a
                                        >
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div class="d-grid mt-3">
                            <SpkButton
                                buttontype="submit"
                                customClass="btn btn-primary">Sign In</SpkButton
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
                            <span class="lh-1 ms-2 fs-13 text-default fw-medium"
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
                            <span class="lh-1 ms-2 fs-13 text-default fw-medium"
                                >Signup with Facebook</span
                            >
                        </SpkButton>
                    </div>
                    <div class="text-center mt-3 fw-medium">
                        Dont have an account? <a
                            href={`${basePath}/authentication/sign-up/basic/`}
                            class="text-primary">Sign Up</a
                        >
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
</div>
