
<script context="module">
    import Authlayout from '@/layouts/Authlayout.svelte';
    export const layout = Authlayout; 
</script>
<script>
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Timer from "@/view/Timer.svelte";
    import { Link } from '@inertiajs/svelte';
    import { Col, Image, Input } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    const basePath = __BASE_PATH__;

    const setBodyClass = (action) => {
        if (action === "add") {
            document.body.classList.add("coming-soon-main");
            document.body.style.display="block"
        } else {
            document.body.classList.remove("coming-soon-main");
            document.body.style.display="none"
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
            document.body.removeAttribute('style')
            localStorage.removeItem("visited");
        };
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>UnderMaintainance | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<div class="coming-soon-background">
    <Image src="../../images/media/backgrounds/9.png" alt="" />
</div>
<div class="row authentication coming-soon g-0 my-4 justify-content-center">
    <Col xxl={7} xl={7} lg={7} md={7} sm={7} class="col-11 my-auto">
        <div class="authentication-cover text-center">
            <div class="authentication-cover-content">
                <div
                    class="row justify-content-center align-items-center mx-0 g-0"
                >
                    <Col xxl={7} xl={7} lg={7} md={12} sm={12} class="col-12">
                        <div>
                            <div class="mb-3">
                                <Link href={`${basePath}/dashboards/sales`}>
                                    <Image
                                        src="../../images/brand-logos/desktop-logo.png"
                                        alt=""
                                        class="authentication-brand"
                                    />
                                    <Image
                                        src="../../images/brand-logos/desktop-dark.png"
                                        alt=""
                                        class="authentication-brand dark"
                                    />
                                </Link>
                            </div>
                            <h1 class="mb-0">Under Maintenance</h1>
                            <Timer />
                            <p class="mb-4 fs-18">
                                We're cooking up something great! Our website is
                                getting an <br /> upgrade – check back soon for a
                                better experience!
                            </p>
                            <div class="input-group">
                                <Input
                                    type="email"
                                    class="form-control-lg"
                                    placeholder="info@gmail.com"
                                    aria-label="info@gmail.com"
                                    aria-describedby="button-addon2"
                                />
                                <SpkButton
                                    color="primary"
                                    customClass="btn btn-lg"
                                    >Subscribe</SpkButton
                                >
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    </Col>
</div>
