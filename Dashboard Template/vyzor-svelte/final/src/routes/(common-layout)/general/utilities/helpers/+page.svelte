<script lang="ts">
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Helpers | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Helpers" activepage="Utilities" page="Helpers" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={12} xl={12} lg={12} md={12} sm={12} class="">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Colors With backgrounds</div>
            </CardHeader>
            <CardBody>
                <div class="text-bg-primary p-3">
                    Primary with contrasting color
                </div>
                <div class="text-bg-secondary p-3">
                    Secondary with contrasting color
                </div>
                <div class="text-bg-success p-3">
                    Success with contrasting color
                </div>
                <div class="text-bg-danger p-3">
                    Danger with contrasting color
                </div>
                <div class="text-bg-warning p-3">
                    Warning with contrasting color
                </div>
                <div class="text-bg-info p-3">Info with contrasting color</div>
                <div class="text-bg-light p-3 text-default">
                    Light with contrasting color
                </div>
                <div class="text-bg-dark p-3 text-white">
                    Dark with contrasting color
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9} xl={9} lg={6} md={6} sm={12} class="">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">With Other Components</div>
            </CardHeader>
            <CardBody>
                <h6 class="fw-medium mb-3">Badges:</h6>
                <SpkBadge Color="" CustomClass="text-bg-primary me-1"
                    >Primary</SpkBadge
                >
                <SpkBadge Color="" CustomClass="text-bg-info mb-4"
                    >Info</SpkBadge
                >
                <h6 class="fw-medium mb-3">cards:</h6>
                <div
                    class="card text-bg-success mb-3 text-fixed-white"
                    style="max-width: 18rem;"
                >
                    <div class="card-header border-bottom-0">
                        <div class="card-title text-fixed-white">Header</div>
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text text-fixed-white">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div
                    class="card text-bg-danger mb-3 text-fixed-white"
                    style="max-width: 18rem;"
                >
                    <div class="card-header border-bottom-0">
                        <div class="card-title text-fixed-white">Header</div>
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text text-fixed-white">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={3} lg={6} md={6} sm={12} class="">
        <Card class="custom-card streched-card">
            <CardHeader>
                <div class="card-title">Card With Stretched Links</div>
            </CardHeader>
            <CardBody class="grid-cards">
                <Image
                    class="bd-placeholder-img card-img-top card-img"
                    src="../../images/media/media-4.jpg"
                    alt="..."
                />
                <div class="card-body pb-0">
                    <h5 class="card-title">Card with stretched links</h5>
                    <p class="card-text">
                        <a
                            href="#!"
                            class="stretched-link text-danger"
                            style="position: relative;"
                            >Stretched link will not work here, because <code
                                >position: relative</code
                            > is added to the link</a
                        >
                    </p>
                    <p
                        class="card-text bg-light mb-0 p-1 rounded"
                        style="transform: rotate(0);"
                    >
                        This <a href="#!" class="text-warning stretched-link"
                            >stretched link
                        </a>
                        will only be spread over the <code>p</code>-tag, because
                        a transform is applied to it.
                    </p>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={12} xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Clearfix</div>
            </CardHeader>
            <CardBody>
                <div class="bg-light clearfix">
                    <SpkButton
                        color="primary"
                        customClass="btn btn-primary float-start m-1"
                        >Example Button floated left</SpkButton
                    >
                    <SpkButton
                        color="primary"
                        customClass="btn btn-primary float-end m-1"
                        >Example Button floated right</SpkButton
                    >
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={12} xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Colored links</div>
            </CardHeader>
            <CardBody>
                <div class="d-flex justify-content-evenly flex-wrap">
                    <a href="#!" class="link-primary fw-medium fs-15 p-1"
                        >Primary</a
                    >
                    <a href="#!" class="link-secondary fw-medium fs-15 p-1"
                        >Secondary</a
                    >
                    <a href="#!" class="link-success fw-medium fs-15 p-1"
                        >Success</a
                    >
                    <a href="#!" class="link-danger fw-medium fs-15 p-1"
                        >Danger</a
                    >
                    <a href="#!" class="link-warning fw-medium fs-15 p-1"
                        >Warning</a
                    >
                    <a href="#!" class="link-info fw-medium fs-15 p-1">Info</a>
                    <a href="#!" class="link-light fw-medium fs-15 p-1">Light</a
                    >
                    <a href="#!" class="link-dark fw-medium fs-15 p-1">Dark</a>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Ratio</div>
            </CardHeader>
            <CardBody>
                <div class="ratio ratio-16x9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-lDlbQ7DiCI"
                        title="YouTube video player"
                        style="border: 0px;"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Aspect ratios</div>
                    </CardHeader>
                    <div class="card-body bd-example-ratios">
                        <div class="ratio ratio-1x1 me-1">
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                1x1
                            </div>
                        </div>
                        <div class="ratio ratio-4x3 me-1">
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                4x3
                            </div>
                        </div>
                        <div class="ratio ratio-16x9 me-1">
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                16x9
                            </div>
                        </div>
                        <div class="ratio ratio-21x9">
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                21x9
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Custom ratios</div>
                    </CardHeader>
                    <div
                        class="card-body bd-example-ratios bd-example-ratios-breakpoint overflow-x-auto"
                    >
                        <div class="ratio me-1" style="--bs-aspect-ratio: 50%">
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                2x1
                            </div>
                        </div>
                        <div class="ratio ratio-4x3">
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                4x3, then 2x1
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Vertical Stacking</div>
            </CardHeader>
            <CardBody>
                <div class="vstack gap-3">
                    <div class="bg-light border p-1 px-2 rounded">
                        First item
                    </div>
                    <div class="bg-light border p-1 px-2 rounded">
                        Second item
                    </div>
                    <div class="bg-light border p-1 px-2 rounded">
                        Third item
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Horizontal Stacking</div>
            </CardHeader>
            <CardBody>
                <div class="hstack gap-3 mb-3">
                    <div class="bg-light border p-1 px-2 rounded">
                        First item
                    </div>
                    <div class="bg-light border p-1 px-2 rounded">
                        Second item
                    </div>
                    <div class="bg-light border p-1 px-2 rounded">
                        Third item
                    </div>
                </div>
                <div class="hstack gap-3 mb-3">
                    <div class="bg-light border p-1 px-2 rounded">
                        First item
                    </div>
                    <div class="bg-light border ms-auto p-1 px-2 rounded">
                        Second item
                    </div>
                    <div class="bg-light border p-1 px-2 rounded">
                        Third item
                    </div>
                </div>
                <div class="hstack gap-3">
                    <div class="bg-light border p-1 px-2 rounded">
                        First item
                    </div>
                    <div class="bg-light border ms-auto p-1 px-2 rounded">
                        Second item
                    </div>
                    <div class="vr"></div>
                    <div class="bg-light border p-1 px-2 rounded">
                        Third item
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-4 -->

<!-- Start:: row-5 -->

<Row>
    <div class="col-xl-4">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Vstack For Buttons</div>
            </CardHeader>
            <CardBody>
                <div class="vstack gap-2 col-md-5 mx-auto">
                    <SpkButton color="primary" customClass="btn btn-primary"
                        >Save changes</SpkButton
                    >
                    <SpkButton
                        color="outline-primary"
                        customClass="btn btn-outline-primary">Cancel</SpkButton
                    >
                </div>
            </CardBody>
        </Card>
    </div>
    <div class="col-xl-4">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Inline Form With Hstack</div>
            </CardHeader>
            <CardBody>
                <div class="hstack gap-3 flex-wrap flex-xl-nowrap">
                    <input
                        class="form-control me-auto"
                        type="text"
                        placeholder="Add your item here..."
                        aria-label="Add your item here..."
                    />
                    <SpkButton color="primary" customClass="btn btn-primary"
                        >Submit</SpkButton
                    >
                    <div class="vr"></div>
                    <SpkButton
                        color="outline-danger"
                        customClass="btn btn-outline-danger">Reset</SpkButton
                    >
                </div>
            </CardBody>
        </Card>
    </div>
    <div class="col-xl-4">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Text Truncation</div>
            </CardHeader>
            <CardBody>
                <Row>
                    <div class="col-2 text-truncate">
                        This text is quite long, and will be truncated once
                        displayed.
                    </div>
                </Row>

                <!-- Inline level -->
                <span
                    class="d-inline-block text-truncate"
                    style="max-width: 150px;"
                >
                    This text is quite long, and will be truncated once
                    displayed.
                </span>
            </CardBody>
        </Card>
    </div>
</Row>

<!-- End:: row-5 -->

<!-- Start:: row-6 -->

<Row>
    <div class="col-xl-4">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">CUSTOM FOCUS RING</div>
            </CardHeader>
            <CardBody>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                >
                    Custom focus ring
                </a>
            </CardBody>
        </Card>
    </div>
    <div class="col-xl-4">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">CSS VARIABLE FOCUS RING</div>
            </CardHeader>
            <CardBody>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                    style="--bs-focus-ring-color:rgba(var(--success-rgb), .25) "
                >
                    Green focus ring
                </a>
            </CardBody>
        </Card>
    </div>
    <div class="col-xl-4">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">BLURRY OFFSET FOCUS RING</div>
            </CardHeader>
            <div class="card-body p-4">
                <a
                    href="#!"
                    class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                    style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px ;--bs-focus-ring-blur:4px "
                >
                    Blurry offset focus ring
                </a>
            </div>
        </Card>
    </div>
</Row>

<!-- End:: row-6 -->

<Col xl={6}>
    <Card class="custom-card">
        <CardHeader>
            <div class="card-title">FOCUS RING UTILITIES</div>
        </CardHeader>
        <CardBody>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2"
                    >Primary focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2"
                    >Secondary focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2"
                    >Success focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
                    >Danger focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"
                    >Warning focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2"
                    >Info focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2"
                    >Light focus</a
                >
            </p>
            <p>
                <a
                    href="#!"
                    class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2"
                    >Dark focus</a
                >
            </p>
        </CardBody>
    </Card>
</Col>
