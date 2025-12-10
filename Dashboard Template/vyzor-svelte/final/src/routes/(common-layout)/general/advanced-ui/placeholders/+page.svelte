<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardTitle,
        Col,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        placeholder1,
        placeholder2,
        placeholder3,
        placeholder4,
    } from "$lib/components/common/prism-code/advanceuiprism.js";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Placeholders | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Placeholders"
    activepage="Advanced Ui"
    page="Placeholders"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xl={6} lg={6} md={6} sm={12}>
        <Card class="custom-card">
            <Image
                class="card-img-top"
                src="../../images/media/media-60.jpg"
                alt=""
            />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Go somewhere</a>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6} lg={6} md={6} sm={12}>
        <Card class="" aria-hidden="true">
            <Image
                class="card-img-top"
                src="../../images/media/media-61.jpg"
                alt=""
            />
            <div class="card-body">
                <div class="h5 card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </div>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4 ms-1"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6 ms-1"></span>
                </p>

                <a
                    href="#!"
                    tabIndex={-1}
                    class="btn btn-primary disabled placeholder col-6"
                ></a>
            </div>
        </Card>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Animation"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={placeholder2}
        >
            <p class="placeholder-glow mb-0">
                <span class="placeholder col-12"></span>
            </p>
            <p class="placeholder-wave mb-0">
                <span class="placeholder col-12"></span>
            </p>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <ShowCode
                    title="Sizing"
                    customCardClass="custom-card"
                    customCardBodyClass=""
                    svelteCode={placeholder1}
                >
                    <span class="placeholder col-12 placeholder-xl mb-1"></span>
                    <span class="placeholder col-12 placeholder-lg"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12 placeholder-sm"></span>
                    <span class="placeholder col-12 placeholder-xs"></span>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode
                    title="Colors"
                    customCardClass="custom-card"
                    customCardBodyClass=""
                    svelteCode={placeholder3}
                >
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12 bg-primary"></span>
                    <span class="placeholder col-12 bg-secondary"></span>
                    <span class="placeholder col-12 bg-success"></span>
                    <span class="placeholder col-12 bg-danger"></span>
                    <span class="placeholder col-12 bg-warning"></span>
                    <span class="placeholder col-12 bg-info"></span>
                    <span class="placeholder col-12 bg-light"></span>
                    <span class="placeholder col-12 bg-dark"></span>
                </ShowCode>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <ShowCode
                    title="Width"
                    customCardClass="custom-card"
                    customCardBodyClass=""
                    svelteCode={placeholder4}
                >
                    <span class="placeholder bg-primary col-6"></span>
                    <span class="placeholder bg-primary w-75"></span>
                    <div>
                        <span class="placeholder bg-primary" style="width: 25%;"
                        ></span>
                    </div>
                </ShowCode>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->
