<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import { auth } from "$lib/firebase/firebaseapi";
    import {
        Card,
        CardBody,
        Col,
        Image,
        Input,
        Nav,
        NavItem,
        NavLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    const basePath = base;

    let defaultEmail = "adminsveltets@gmail.com";
    let defaultPassword = "1234567890";
    let err = "";
    let show_password = false;
    $: type = show_password ? "text" : "password";
    let email = defaultEmail;
    let password = defaultPassword;
    let success = "";
    function onInput(event: any) {
        password = event.target.value;
    }

    const login = () => {
        err = "";
        success = "";

        // Empty check
        if (!email.trim() || !password.trim()) {
            err = "Email and Password are required.";
            return;
        }

        // Credential check
        if (email !== defaultEmail || password !== defaultPassword) {
            err = "Invalid email or password.";
            return;
        }

        success = "Login successful!";
        setTimeout(() => {
            goto(`${basePath}/dashboards/sales`);
        }, 1500);
    };

    //  fire base login

    const Login1 = async () => {
        err = "";
        success = "";

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
          console.log(userCredential.user);
            success = "Login successful!";
            // Redirect or show dashboard
            setTimeout(() => {
                goto(`${basePath}/dashboards/sales`);
            }, 1500);
        } catch (error) {
            err = "Invalid login credentials.";
            // Optional: reset form
            email = defaultEmail;
            password = defaultPassword;
        }
    };

    // Using writable store to manage the password visibility

    // Reactive type for password input

    const changeHandler = (e: any) => {
        const { name, value } = e.target;
        if (name === "email") {
            email = password;
        } else if (name === "password") {
            password = value;
        }
        err = ""; // Reset error message on every change
    };

    // tabs

    let activeTab = 1;

    const setBodyClass = (action: string) => {
        if (action === "add") {
            document.body.classList.add("authentication-background");
            document.body.style.display='block'
        } else {
            document.body.classList.remove("authentication-background");
            document.body.style.display='none'
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
            document.body.removeAttribute('style')
        };
    });
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="authentication-basic-background">
    <Image src={`${basePath}/images/media/backgrounds/9.png`} alt="" width="100%" />
</div>
<div class="container">
    <Row
        class="justify-content-center align-items-center authentication authentication-basic h-100"
    >
        <Col xxl={4} xl={5} lg={6} md={6} sm={8} class="col-12">
            <Nav pills class="justify-content-center authentication-tabs mt-2">
                <NavItem>
                    <NavLink
                        active={activeTab == 1}
                        on:click={(e) => {
                            (activeTab = 1), e.preventDefault();
                        }}
                    >
                        <Image
                            src={`${basePath}/images/media/backgrounds/9.png`}
                            alt="logo"
                            class="avatar avatar-sm"
                        />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        active={activeTab == 2}
                        on:click={(e) => {
                            (activeTab = 2), e.preventDefault();
                        }}
                    >
                        <Image
                            src={`${basePath}/images/media/backgrounds/9.png`}
                            alt="logo"
                            class="avatar avatar-sm"
                        />
                    </NavLink>
                </NavItem>
            </Nav>
            <Card class="custom-card border-0 my-4 mt-2">
                <TabContent id="loginTab">
                    <TabPane
                        class={`border-0 ${activeTab == 1 ? "active" : ""}`}
                    >
                        <CardBody class="p-5">
                            <div class="mb-4">
                                <a href={`${basePath}/dashboards/sales`}>
                                    <Image
                                        src={`${basePath}/images/brand-logos/toggle-logo.png`}
                                        alt="logo"
                                        class="desktop-dark"
                                    />
                                </a>
                            </div>
                            <div>
                                <h4 class="mb-1 fw-semibold">
                                    Hi,Welcome back!
                                </h4>
                                <p class="mb-4 text-muted fw-normal">
                                    Please enter your credentials
                                </p>
                            </div>
                            <div class="row gy-3">
                                <Col xl={12}>
                                    <label
                                        for="signin-email"
                                        class="form-label text-default"
                                        >Email</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="signin-email"
                                        placeholder="Enter Email"
                                        bind:value={email}
                                        oninput={changeHandler}
                                    />
                                </Col>
                                <Col xl={12} class="mb-2">
                                    <label
                                        for="signin-password"
                                        class="form-label text-default d-block"
                                        >Password</label
                                    >
                                    <div class="position-relative">
                                        <input
                                            {type}
                                            bind:value={password}
                                            class="form-control"
                                            id="signin-password"
                                            placeholder="Enter Password"
                                        />
                                        <a
                                            href="#!"
                                            aria-label="true"
                                            class="show-password-button text-muted"
                                            id="button-addon2"
                                            oninput={onInput}
                                            onclick={() =>
                                                (show_password =
                                                    !show_password)}
                                            ><i
                                                class={`${show_password ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}
                                            ></i></a
                                        >

                                        {#if err}
                                            <p class="error">{err}</p>
                                        {/if}
                                        {#if success}
                                            <p class="success">{success}</p>
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
                                                href={`${basePath}/authentication/reset-password/basic`}
                                                class="float-end link-danger fw-medium fs-12"
                                                >Forget password ?</a
                                            >
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div class="d-grid mt-3">
                                <button
                                    onclick={login}
                                    class={`btn btn-primary`}
                                >
                                    <i class="ri-login-circle-line me-2"></i> Sign
                                    In
                                </button>
                            </div>
                            <div
                                class="text-center my-3 authentication-barrier"
                            >
                                <span class="op-4 fs-13">OR</span>
                            </div>
                            <div class="d-grid mb-3">
                                <SpkButton
                                    customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3"
                                >
                                    <span class="avatar avatar-xs">
                                        <Image
                                            src={`${basePath}/images/media/apps/google.png`}
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
                                            src={`${basePath}/images/media/apps/facebook.png`}
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
                                Dont have an account? <a
                                    href={`${basePath}/authentication/sign-up/basic`}
                                    class="text-primary">Sign up</a
                                >
                            </div>
                        </CardBody>
                    </TabPane>
                    <TabPane
                        class={`border-0 ${activeTab == 2 ? "active" : ""}`}
                    >
                        <CardBody class="p-5">
                            <div class="mb-4">
                                <a href={`${basePath}/dashboards/sales`}>
                                    <Image
                                        src={`${basePath}/images/brand-logos/toggle-logo.png`}
                                        alt="logo"
                                        class="desktop-dark"
                                    />
                                </a>
                            </div>
                            <div>
                                <h4 class="mb-1 fw-semibold">
                                    Hi,Welcome back!
                                </h4>
                                <p class="mb-4 text-muted fw-normal">
                                    Please enter your credentials
                                </p>
                            </div>
                            <div class="row gy-3">
                                <Col xl={12}>
                                    <label
                                        for="signin-email"
                                        class="form-label text-default"
                                        >Email</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="signin-email"
                                        placeholder="Enter Email"
                                        bind:value={email}
                                        oninput={changeHandler}
                                    />
                                </Col>
                                <Col xl={12} class="mb-2">
                                    <label
                                        for="signin-password"
                                        class="form-label text-default d-block"
                                        >Password</label
                                    >
                                    <div class="position-relative">
                                        <input
                                            {type}
                                            bind:value={password}
                                            class="form-control"
                                            id="signin-password"
                                            placeholder="Enter Password"
                                        />
                                        <a
                                            href="#!"
                                            aria-label="true"
                                            class="show-password-button text-muted"
                                            id="button-addon2"
                                            oninput={onInput}
                                            onclick={() =>
                                                (show_password =
                                                    !show_password)}
                                            ><i
                                                class={`${show_password ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}
                                            ></i></a
                                        >
                                        {#if err}
                                            <p class="error">{err}</p>
                                        {/if}
                                        {#if success}
                                            <p class="success">{success}</p>
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
                                                href={`${basePath}/authentication/reset-password/basic`}
                                                class="float-end link-danger fw-medium fs-12"
                                                >Forget password ?</a
                                            >
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div class="d-grid mt-3">
                                <button
                                    onclick={Login1}
                                    class={`btn btn-primary`}
                                >
                                    <i class="ri-login-circle-line me-2"></i> Sign
                                    In
                                </button>
                            </div>
                            <div
                                class="text-center my-3 authentication-barrier"
                            >
                                <span class="op-4 fs-13">OR</span>
                            </div>
                            <div class="d-grid mb-3">
                                <SpkButton
                                    customClass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3"
                                >
                                    <span class="avatar avatar-xs">
                                        <Image
                                            src={`${basePath}/images/media/apps/google.png`}
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
                                            src={`${basePath}/images/media/apps/facebook.png`}
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
                                Dont have an account? <a
                                    href={`${basePath}/authentication/sign-up/basic`}
                                    class="text-primary">Register Here</a
                                >
                            </div>
                        </CardBody>
                    </TabPane>
                </TabContent>
            </Card>
        </Col>
    </Row>
</div>

<style>
    .error {
        color: red;
        margin-top: 10px;
    }

    .success {
        color: green;
        margin-top: 10px;
    }

    input {
        display: block;
        margin-bottom: 10px;
    }
</style>
