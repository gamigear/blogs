
<script context="module">
    import Authlayout from '@/layouts/Authlayout.svelte';
    export const layout = Authlayout; 
</script>
<script>
    import { onMount } from "svelte";
    import {
        Card,
        CardBody,
        Col,
        Form,
        Image,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import {Inertia} from "@inertiajs/inertia"
    import { Link } from '@inertiajs/svelte';
    const basePath = __BASE_PATH__;

    let inputValues = {
        one: "",
        two: "",
        three: "",
        four: "",
    };

    let error = "";

    let refs = {
        one: null,
        two: null,
        three: null,
        four: null,
    };

    const handleChange = (currentId, nextId, value) => {
        // const value = e.target.value;
        // if (!/^\d?$/.test(value)) return;

        inputValues = {
            ...inputValues,
            [currentId]: value,
        };

        // Focus the next input element if it exists
        const nextInput = document.getElementById(nextId);
        if (nextInput) {
            nextInput.focus();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 4);

        if (paste.length === 4) {
            inputValues.one = paste[0];
            inputValues.two = paste[1];
            inputValues.three = paste[2];
            inputValues.four = paste[3];

            refs.four?.focus();
        }

        e.preventDefault();
    };

    let verify;

    const handleSubmit = (e) => {
        e.preventDefault();

        const { one, two, three, four } = inputValues;

        if (!one || !two || !three || !four) {
            error = "All fields are required.";
            return;
        }

        const fullOTP = `${one}${two}${three}${four}`;
        Inertia.visit(`${basePath}/dashboards/sales`);

        verify = "Verify Your Account successful";
        error = "";

        // TODO: Call your backend API with OTP
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
    <title>Twostep-Basic | Vyzor - Svelte Admin & Dashboard Template</title>
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
                    <p class="h4 mb-2 fw-semibold">Verify Your Account</p>
                    <p class="mb-4 text-muted fw-normal">
                        Enter the 4 digit code sent to the registered email Id.
                    </p>
                    <Form on:submit={handleSubmit}>
                        <Row class=" gy-3">
                            <Col xl={12} class="mb-2">
                                <Row class="">
                                    <Col class="col-3">
                                        <Input
                                            id="one"
                                            type="text"
                                            maxlength={1}
                                            bind:value={inputValues.one}
                                            on:input={(e) =>
                                                handleChange(
                                                    "one",
                                                    "two",
                                                    e.target.value,
                                                )}
                                            on:paste={handlePaste}
                                            class="form-control-lg text-center "
                                        />
                                    </Col>
                                    <Col class="col-3">
                                        <Input
                                            id="two"
                                            type="text"
                                            maxlength={1}
                                            bind:value={inputValues.two}
                                            on:input={(e) =>
                                                handleChange(
                                                    "two",
                                                    "three",
                                                    e.target.value,
                                                )}
                                            class="form-control-lg text-center "
                                        />
                                    </Col>
                                    <Col class="col-3">
                                        <Input
                                            id="three"
                                            type="text"
                                            maxlength={1}
                                            bind:value={inputValues.three}
                                            on:input={(e) =>
                                                handleChange(
                                                    "three",
                                                    "four",
                                                    e.target.value,
                                                )}
                                            class="form-control-lg text-center  "
                                        />
                                    </Col>
                                    <Col class="col-3">
                                        <Input
                                            id="four"
                                            type="text"
                                            maxlength={1}
                                            bind:value={inputValues.four}
                                            on:input={(e) =>
                                                handleChange(
                                                    "four",
                                                    null,
                                                    e.target.value,
                                                )}
                                            class="form-control-lg text-center"
                                        />
                                    </Col>
                                </Row>
                                <!-- svelte-ignore a11y_label_has_associated_control -->
                                <div class="form-check mt-3">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="defaultCheck1"
                                    />
                                    <!-- svelte-ignore attribute_invalid_property_name -->
                                    <!-- svelte-ignore attribute_invalid_property_name -->
                                    <label
                                        class="form-check-label"
                                        for="defaultCheck1"
                                    >
                                        Did not recieve a code ?<Link
                                            href={`${basePath}/applications/email/mail-app`}
                                            class="text-primary ms-2 d-inline-block fw-medium"
                                            >Resend</Link
                                        >
                                    </label>
                                </div>
                            </Col>
                            <Col xl={12} class="d-grid mt-3">
                                {#if error}
                                    <p
                                        class="text-danger text-sm text-center mb-2"
                                    >
                                        {error}
                                    </p>
                                {/if}

                                {#if verify}
                                    <p
                                        class="text-success text-sm text-center mb-2"
                                    >
                                        {verify}
                                    </p>
                                {/if}
                                <SpkButton
                                    buttontype="submit"
                                    customClass="btn btn-lg btn-primary"
                                    >Verify</SpkButton
                                >
                            </Col>
                        </Row>
                    </Form>
                    <div class="text-center">
                        <p class="text-danger mt-3 mb-0 fw-medium">
                            <sup><i class="ri-asterisk"></i></sup>Keep the
                            verification code private!
                        </p>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
</div>
