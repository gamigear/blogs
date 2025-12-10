
<script context="module">
    import Authlayout from '@/layouts/Authlayout.svelte';
    export const layout = Authlayout; 
</script>
<script>
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import { onMount } from "svelte";
    import { Inertia } from '@inertiajs/inertia';
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
    import { Link } from '@inertiajs/svelte';
    const basePath = __BASE_PATH__;
    let formData = {
        password: "",
        confirmPassword: "",
    };

    let formErrors = {};
    let passwordVisibility = {
        password: false,
        confirmPassword: false,
    };

    const handleChange = (field, value) => {
        formData[field] = value;
        formErrors[field] = "";
    };

    const togglePasswordVisibility = (
        field,
    ) => {
        passwordVisibility[field] = !passwordVisibility[field];
    };

    const validate = () => {
        const errors = {};

        if (!formData.password || formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = "Passwords do not match";
        }

        formErrors = errors;
        return Object.keys(errors).length === 0;
    };

    let matched;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            Inertia.visit(`${basePath}/dashboards/sales/`);
            matched = "Create Password Successfully";
        }
    };

    const setBodyClass = (action) => {
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
    <title
        >Create Pasword Basic | Vyzor - Svelte Admin & Dashboard Template</title
    >
</svelte:head>
<!-- Page Title Close -->

<div class="authentication-basic-background">
    <Image src={`${basePath}/images/media/backgrounds/9.png`} alt="" />
</div>
<div class="container">
    <Row
        class="justify-content-center align-items-center authentication authentication-basic h-100"
    >
        <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
            <Card class="custom-card border-0 my-4">
                <CardBody class="p-5">
                    <div class="mb-4">
                        <Link href={`${basePath}/dashboards/sales`}>
                            <Image
                                src={`${basePath}/images/brand-logos/toggle-logo.png`}
                                alt="logo"
                                class="desktop-dark"
                            />
                        </Link>
                    </div>
                    <div>
                        <h4 class="mb-1 fw-semibold">Create Password</h4>
                        <p class="mb-4 text-muted fw-normal">
                            Set your new password
                        </p>
                    </div>
                    <Form on:submit={handleSubmit}>
                        <Row class="gy-3">
                            <Col xl={12}>
                                <Label
                                    for="create-password"
                                    class="text-default">Password</Label
                                >
                                <div class="position-relative">
                                    <Input
                                        type={passwordVisibility.password
                                            ? "text"
                                            : "password"}
                                        class="form-control form-control-lg"
                                        id="password1"
                                        placeholder="password"
                                        value={formData.password}
                                        on:input={(e) =>
                                            handleChange(
                                                "password",
                                                e.target.value,
                                            )}
                                    />
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a
                                        href="#!"
                                        on:click={() =>
                                            togglePasswordVisibility(
                                                "password",
                                            )}
                                        class="show-password-button text-muted"
                                        ><i
                                            class={`align-middle ${passwordVisibility.password ? "ri-eye-line" : "ri-eye-off-line"}`}
                                        ></i></a
                                    >
                                </div>
                                {#if formErrors.password}
                                    <p class="text-danger text -xs mt-1">
                                        {formErrors.password}
                                    </p>
                                {/if}
                            </Col>
                            <Col xl={12}>
                                <Label
                                    for="create-confirmpassword"
                                    class="text-default">Confirm Password</Label
                                >
                                <div class="position-relative">
                                    <Input
                                        type={passwordVisibility.passwords
                                            ? "text"
                                            : "password"}
                                        class="form-control form-control-lg"
                                        id="confirmPassword"
                                        placeholder="confirm password"
                                        value={formData.confirmPassword}
                                        on:input={(e) =>
                                            handleChange(
                                                "confirmPassword",
                                                e.target.value,
                                            )}
                                    />
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a
                                        on:click={() =>
                                            togglePasswordVisibility(
                                                "passwords",
                                            )}
                                        href="#!"
                                        class="show-password-button text-muted"
                                        ><i
                                            class={`${passwordVisibility.passwords ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}
                                        ></i></a
                                    >
                                </div>
                                {#if formErrors.confirmPassword}
                                    <p class="text-danger text-xs mt-1">
                                        {formErrors.confirmPassword}
                                    </p>
                                {/if}
                                {#if matched}
                                    <p class="text-success text-xs mt-1">
                                        {matched}
                                    </p>
                                {/if}
                                <div class="mt-2">
                                    <div class="form-check mb-0">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="defaultCheck1"
                                            defaultChecked
                                        />
                                        <!-- svelte-ignore attribute_invalid_property_name -->
                                        <!-- svelte-ignore attribute_invalid_property_name -->
                                        <!-- svelte-ignore a11y_label_has_associated_control -->
                                        <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                        >
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div class="d-grid mt-3">
                            <SpkButton
                                buttontype="submit"
                                customClass="btn btn-primary"
                                >Create Password</SpkButton
                            >
                        </div>
                    </Form>
                    <div class="text-center my-3 authentication-barrier">
                        <span class="op-4 fs-13">OR</span>
                    </div>
                    <div class="d-grid mb-3">
                        <SpkButton
                            customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex- mb-3"
                        >
                            <span class="avatar avatar-xs">
                                <Image
                                    src={`${basePath}/images/media/apps/google.png`}
                                    alt=""
                                />
                            </span>
                            <span class="lh-1 ms-2 fs-13 text-default fw-medium"
                                >Signup with Google</span
                            >
                        </SpkButton>
                        <SpkButton
                            customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-"
                        >
                            <span class="avatar avatar-xs">
                                <Image
                                    src={`${basePath}/images/media/apps/facebook.png`}
                                    alt=""
                                />
                            </span>
                            <span class="lh-1 ms-2 fs-13 text-default fw-medium"
                                >Signup with Facebook</span
                            >
                        </SpkButton>
                    </div>
                    <div class="text-center mt-3 fw-medium">
                        Dont have an account? <Link
                            href={`${basePath}/pages/authentication/sign-up/basic`}
                            class="text-primary">Sign Up</Link
                        >
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
</div>
