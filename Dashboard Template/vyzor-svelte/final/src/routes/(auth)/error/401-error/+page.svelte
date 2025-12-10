<script lang="ts">
    import { Col, Image, Row } from "@sveltestrap/sveltestrap";
    import { base } from "$app/paths";
    const basePath = base;
</script>

<!-- Page Title -->
<svelte:head>
    <title>401Error | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<div class="page error-bg">
    <div class="error-page-background grid-cards">
        <Image src="../images/media/backgrounds/10.svg" alt="" />
    </div>

    <!-- Start::error-page -->

    <Row class="align-items-center justify-content-center h-100 g-0">
        <Col xl={7} lg={7} md={7} class="col-12">
            <div class="text-center px-2">
                <div class="text-center mb-5 grid-cards">
                    <Image
                        src="../images/media/backgrounds/11.png"
                        alt=""
                        class="w-sm-auto w-100 h-100"
                    />
                </div>
                <span class="d-block fs-4 text-primary fw-semibold"
                    >Oops! Something Went Wrong</span
                >
                <p class="error-text mb-0">401</p>
                <p class="fs-5 fw-normal mb-4">
                    There was an issue with the page. Try again <br /> later or contact
                    support.
                </p>
                <a
                    href={`${basePath}/dashboards/sales`}
                    class="btn btn-primary btn-w-lg"
                    >Back to home<i class="ti ti-arrow-narrow-right ms-2"
                    ></i></a
                >
            </div>
        </Col>
    </Row>
</div>
