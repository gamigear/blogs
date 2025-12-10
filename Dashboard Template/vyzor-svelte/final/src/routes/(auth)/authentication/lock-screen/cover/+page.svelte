<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
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
    let formData = {
        password: "",
    };

    let formErrors: Record<string, string> = {};
    let passwordVisibility: any = {
        password: false,
        passwords: false,
    };

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        formData = { ...formData, [target.id]: target.value };
        formErrors = { ...formErrors, [target.id]: "" };
    };

    const togglePasswordVisibility = (field: string) => {
        passwordVisibility = {
            ...passwordVisibility,
            [field]: !passwordVisibility[field],
        };
    };

    const validate = () => {
        const errors: Record<string, string> = {};
        if (!formData.password || formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        formErrors = errors;
        return Object.keys(errors).length === 0;
    };
    let matched: string;
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        if (validate()) {
            goto(`${basePath}/dashboards/sales`);
            matched = "Save Password successful";
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
    <title>Lockscreen-Cover | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Row class="authentication authentication-cover-main mx-0">
    <Col xxl={9} xl={9}>
        <Row class="justify-content-center align-items-center h-100">
            <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
                <Card class="custom-card border-0 shadow-none my-4">
                    <CardBody class="p-5">
                        <p class="h4 mb-2 fw-semibold">Hello Tom Phillip</p>
                        <p class="mb-3 text-muted fw-normal">Welcome Back</p>
                        <div class="d-flex gap-2 align-items-center mb-3">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/12.jpg"
                                        alt=""
                                    />
                                </span>
                            </div>
                            <div>
                                <p class="mb-0 text-dark fw-medium">
                                    tomphillip32@gmail.com
                                </p>
                            </div>
                        </div>
                        <Form on:submit={handleSubmit}>
                            <Row class="gy-3">
                                <Col xl={12} class="mb-2">
                                    <Label
                                        for="lockscreen-password"
                                        class="form-label text-default"
                                        >Password</Label
                                    >
                                    <div class="position-relative">
                                        <Input
                                            type={passwordVisibility.password
                                                ? "text"
                                                : "password"}
                                            class="form-control form-control-lg"
                                            id="password"
                                            placeholder="password"
                                            value={formData.password}
                                            on:input={handleChange}
                                        />
                                        <!-- svelte-ignore a11y_consider_explicit_label -->
                                        <a
                                            on:click={() =>
                                                togglePasswordVisibility(
                                                    "password",
                                                )}
                                            href="#!"
                                            class="show-password-button text-muted"
                                            id="button-addon2"
                                            ><i
                                                class={`align-middle ${passwordVisibility.password ? "ri-eye-line" : "ri-eye-off-line"}`}
                                            ></i></a
                                        >
                                    </div>
                                    {#if formErrors.password}
                                        <p class="text-danger text-xs mt-1">
                                            {formErrors.password}
                                        </p>
                                    {/if}
                                    {#if matched}
                                        <p class="text-success text-xs mt-1">
                                            {matched}
                                        </p>
                                    {/if}
                                </Col>
                            </Row>
                            <Col xl={12} class="d-grid mt-2">
                                <SpkButton
                                    buttontype="submit"
                                    customClass="btn btn-lg btn-primary"
                                    >Unlock</SpkButton
                                >
                            </Col>
                        </Form>
                        <div class="text-center">
                            <p class="fw-medium mt-3 mb-0">
                                Try unlock with <a
                                    class="text-success"
                                    href="#!"><u>Finger print</u></a
                                >
                                /
                                <a class="text-success" href="#!"
                                    ><u>Face Id</u></a
                                >
                            </p>
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
