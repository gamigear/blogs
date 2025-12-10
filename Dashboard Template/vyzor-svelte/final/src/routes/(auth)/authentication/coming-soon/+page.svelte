<script lang="ts">
    import Timer from "$lib/view/Timer.svelte";
    import { Col, Image, Input, Row } from "@sveltestrap/sveltestrap";
    import { onMount, onDestroy } from "svelte";
    import { base } from "$app/paths";
    const basePath = base;

    const setBodyClass = (action: string) => {
        if (action === "add") {
            document.body.classList.add(
                "coming-soon-main",
                "position-relative",
            );
        } else {
            document.body.classList.remove(
                "coming-soon-main",
                "position-relative",
            );
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
    <title>ComingSoon | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<div class="coming-soon-background">
    <Image src="../images/media/backgrounds/9.png" alt="" />
</div>
<Row class="authentication coming-soon g-0 my-4 justify-content-center">
    <Col xxl={7} xl={7} lg={7} md={7} sm={7} class=" col-11 my-auto">
        <div class="authentication-cover text-center">
            <div class="authentication-cover-content">
                <div
                    class="row justify-content-center align-items-center mx-0 g-0"
                >
                    <div
                        class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"
                    >
                        <div>
                            <div class="mb-3">
                                <a href={`${basePath}/dashboards/sales`}>
                                    <img
                                        src="../images/brand-logos/desktop-logo.png"
                                        alt=""
                                        class="authentication-brand"
                                    />
                                    <img
                                        src="../images/brand-logos/desktop-dark.png"
                                        alt=""
                                        class="authentication-brand dark"
                                    />
                                </a>
                            </div>
                            <h1 class="mb-0">Coming Soon</h1>
                            <Timer />
                            <p class="mb-4 fs-18">
                                Big things are coming your way! We're putting
                                the final touches <br /> on something amazing. Stay
                                tuned!
                            </p>
                            <div class="input-group">
                                <Input
                                    type="email"
                                    class="form-control form-control-lg"
                                    placeholder="info@gmail.com"
                                    aria-label="info@gmail.com"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    class="btn btn-primary btn-lg"
                                    type="button"
                                    id="button-addon2">Subscribe</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Col>
</Row>
