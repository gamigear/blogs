
<script context="module">
    import Authlayout from '@/layouts/Authlayout.svelte';
    export const layout = Authlayout; 
</script>
<script>
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import {
        Card,
        CardBody,
        Col,
        Form,
        Image,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { Inertia } from "@inertiajs/inertia";
    import { onMount } from "svelte";
    import { Link } from '@inertiajs/svelte';
    const basePath = __BASE_PATH__;
    let currentPassword = "";
    let newPassword = "";
    let confirmPassword = "";

    let errors = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    let passwordVisibility = {
        current: false,
        new: false,
        confirm: false,
    };

    function togglePasswordVisibility(field) {
        passwordVisibility[field] = !passwordVisibility[field];
    }

    function validateForm() {
        let valid = true;
        errors = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        };

        if (!currentPassword) {
            errors.currentPassword = "Current password is required";
            valid = false;
        }
        if (!newPassword) {
            errors.newPassword = "New password is required";
            valid = false;
        }
        if (confirmPassword !== newPassword) {
            errors.confirmPassword = "Passwords do not match";
            valid = false;
        }

        return valid;
    }
    let reseted;
    function onSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            reseted = "Created Password successful";
            Inertia.visit(`${basePath}/dashboards/sales`);
        }
    }

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
        >Resetpassword-Basic | Vyzor - Svelte Admin & Dashboard Template</title
    >
</svelte:head>
<!-- Page Title Close -->
<div class="authentication-basic-background">
    <Image src={`${basePath}/images/media/backgrounds/9.png`} alt="" />
</div>
<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore element_invalid_self_closing_tag -->

<div class="container">
    <Row
        class="justify-content-center align-items-center authentication authentication-basic h-100"
    >
        <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
            <Card class="custom-card border-0 my-4">
                <CardBody class="card-body p-5">
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
                        <h4 class="mb-1 fw-semibold">Reset Password</h4>
                        <p class="mb-4 text-muted fw-normal">
                            Set your new password here.
                        </p>
                    </div>
                    <Form on:submit={onSubmit}>
                        <Row class="row gy-3">
                            <Col xl={12}>
                                <label
                                    for="reset-password"
                                    class="form-label text-default"
                                    >Current Password</label
                                >
                                <div class="position-relative">
                                    <Input
                                        type={passwordVisibility.current
                                            ? "text"
                                            : "password"}
                                        id="currentPassword"
                                        placeholder="Current password"
                                        class="form-control form-control-lg"
                                        bind:value={currentPassword}
                                    />
                                    <a
                                        href="#!"
                                        on:click={() =>
                                            togglePasswordVisibility("current")}
                                        class="show-password-button text-muted"
                                        id="button-addon2"
                                        ><i
                                            class={`${passwordVisibility.current ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}
                                        /></a
                                    >
                                </div>
                                {#if errors.currentPassword}
                                    <p class="text-danger text-sm">
                                        {errors.currentPassword}
                                    </p>
                                {/if}
                            </Col>
                            <Col xl={12}>
                                <label
                                    for="reset-newpassword"
                                    class="form-label text-default"
                                    >New Password</label
                                >
                                <div class="position-relative">
                                    <Input
                                        type={passwordVisibility.new
                                            ? "text"
                                            : "password"}
                                        id="newPassword"
                                        placeholder="New password"
                                        class="form-control form-control-lg"
                                        bind:value={newPassword}
                                    />
                                    <a
                                        href="#!"
                                        on:click={() =>
                                            togglePasswordVisibility("new")}
                                        class="show-password-button text-muted"
                                        id="button-addon21"
                                        ><i
                                            class={`${passwordVisibility.new ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}
                                        /></a
                                    >
                                </div>
                                {#if errors.newPassword}
                                    <p class="text-danger text-sm">
                                        {errors.newPassword}
                                    </p>
                                {/if}
                            </Col>
                            <Col xl={12}>
                                <label
                                    for="reset-confirmpassword"
                                    class="form-label text-default"
                                    >Confirm Password</label
                                >
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="position-relative">
                                    <Input
                                        type={passwordVisibility.confirm
                                            ? "text"
                                            : "password"}
                                        id="confirmPassword"
                                        placeholder="Confirm password"
                                        class="form-control form-control-lg"
                                        bind:value={confirmPassword}
                                    />

                                    <a
                                        href="#!"
                                        on:click={() =>
                                            togglePasswordVisibility("confirm")}
                                        class="show-password-button text-muted"
                                        id="button-addon22"
                                        ><i
                                            class={`${passwordVisibility.confirm ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}
                                        /></a
                                    >
                                </div>
                                {#if errors.confirmPassword}
                                    <p class="text-danger text-sm">
                                        {errors.confirmPassword}
                                    </p>
                                {/if}

                                {#if reseted}
                                    <p class="text-success text-sm">
                                        {reseted}
                                    </p>
                                {/if}
                            </Col>
                        </Row>
                        <div class="d-grid mt-3">
                            <SpkButton
                                buttontype="submit"
                                customClass="btn btn-primary"
                                >Reset Password</SpkButton
                            >
                        </div>
                    </Form>
                    <div class="text-center my-3 authentication-barrier">
                        <span class="op-4 fs-13">OR</span>
                    </div>
                    <div class="d-grid mb-3">
                        <SpkButton
                            customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex mb-3"
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
                            customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex"
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
                        Dont want to reset? <Link
                            href={`${basePath}/pages/authentication/sign-in/basic`}
                            class="text-primary">Sign In</Link
                        >
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
</div>
