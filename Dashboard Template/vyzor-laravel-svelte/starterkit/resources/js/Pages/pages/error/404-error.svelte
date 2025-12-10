<script context="module">
    import Authlayout from "@/layouts/Authlayout.svelte";
    export const layout = Authlayout;
</script>

<script>
    import { Col, Image } from "@sveltestrap/sveltestrap";
import {Link} from '@inertiajs/svelte'
    const basePath = __BASE_PATH__;
</script>

<!-- Page Title -->
<svelte:head>
    <title>404Error | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<div class="page error-bg">
    <div class="error-page-background grid-cards">
        <Image src="../../images/media/backgrounds/10.svg" alt="" />
    </div>

    <!-- Start::error-page -->

    <div class="row align-items-center justify-content-center h-100 g-0">
        <Col xl={7} lg={7} md={7} class="col-12">
            <div class="text-center">
                <div class="text-center mb-5 grid-cards">
                    <Image
                        src="../../images/media/backgrounds/11.png"
                        alt=""
                        class="w-sm-auto w-100 h-100"
                    />
                </div>
                <span class="d-block fs-4 text-primary fw-semibold"
                    >Oops! Something Went Wrong</span
                >
                <p class="error-text mb-0">404</p>
                <p class="fs-5 fw-normal mb-4">
                    There was an issue with the page. Try again <br /> later or contact
                    support.
                </p>
                <Link
                    href={`${basePath}/dashboards/sales`}
                    class="btn btn-primary btn-w-lg"
                    >Back to home<i class="ti ti-arrow-narrow-right ms-2"
                    ></i></Link
                >
            </div>
        </Col>
    </div>
</div>
