<script lang="ts">
    import { goto } from "$app/navigation"; // for navigation
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import {
        Card,
        CardBody,
        Col,
        Form,
        Image,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    const basePath = base;
    let currentPassword = "";
    let newPassword = "";
    let confirmPassword = "";

    let errors: any = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    let passwordVisibility = {
        current: false,
        new: false,
        confirm: false,
    };

    function togglePasswordVisibility(field: keyof typeof passwordVisibility) {
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
    let reseted: string;
    function onSubmit(e: Event) {
        e.preventDefault();
        if (validateForm()) {
            reseted = "Created Password successful";
            goto(`${basePath}/dashboards/sales`);
        }
    }

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
    <title>Resetpassowrd-Cover | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore element_invalid_self_closing_tag -->
<Row class="authentication authentication-cover-main mx-0">
    <Col xxl={9} xl={9} class="">
        <Row class="justify-content-center align-items-center h-100">
            <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
                <Card class="custom-card border-0 shadow-none my-4">
                    <CardBody class="p-5">
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
                                                togglePasswordVisibility(
                                                    "current",
                                                )}
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
                                                togglePasswordVisibility(
                                                    "confirm",
                                                )}
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
                            Dont want to reset? <a
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
