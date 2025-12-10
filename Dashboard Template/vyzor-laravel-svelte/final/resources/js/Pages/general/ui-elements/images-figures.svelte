<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/ShowCode/ShowCode.svelte";
    import {
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
    } from "@/shared/data/prism-code/uielementsprim";
    import { Col, Image, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>ImagesFigures | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader
    homepage="Images & Figures"
    activepage="UI Elements"
    page="Images & Figures"
/>
<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <ShowCode title="Responsive image" svelteCode={image1}>
            <p class="card-title mb-3">
                Use <code> .img-fluid </code> class to the img tag to get responsive
                image.
            </p>
            <div class="text-center">
                <Image
                    src="../../images/media/media-48.jpg"
                    class="img-fluid"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Image With Radius" svelteCode={image2}>
            <p class="card-title mb-3">
                Use <code>.rounded</code> class along with
                <code>.img-fluid</code> to get border radius.
            </p>
            <div class="text-center">
                <Image
                    src="../../images/media/media-49.jpg"
                    class="img-fluid rounded"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Rounded Image" svelteCode={image3}>
            <p class="card-title mb-3">
                Use <code>.rounded-pill</code> class to <code>img</code> tag to get
                rounded image.
            </p>
            <div class="text-center">
                <Image
                    src="../../images/media/media-50.jpg"
                    class="img-fluid rounded-pill"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Image Left Align" svelteCode={image4}>
            <div class="d-inline-block">
                <Image
                    class="rounded float-start"
                    src="../../images/media/media-53.jpg"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Image Center Align" svelteCode={image5}>
            <Image
                class="rounded mx-auto d-block"
                src="../../images/media/media-55.jpg"
                alt="..."
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Image Right Align" svelteCode={image6}>
            <div class="">
                <Image
                    class="rounded float-end"
                    src="../../images/media/media-54.jpg"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Figures"
            customCardBodyClass="d-flex justify-content-between gap-2"
            svelteCode={image7}
        >
            <figure class="figure me-2">
                <Image
                    class="bd-placeholder-img figure-img img-fluid rounded card-img"
                    src="../../images/media/media-56.jpg"
                    alt="..."
                />
                <figcaption class="figure-caption mt-2">
                    A caption for the above image.
                </figcaption>
            </figure>
            <figure class="figure float-end">
                <Image
                    class="bd-placeholder-img figure-img img-fluid rounded card-img"
                    src="../../images/media/media-57.jpg"
                    alt="..."
                />
                <figcaption class="figure-caption text-end mt-2">
                    A caption for the above image.
                </figcaption>
            </figure>
        </ShowCode>
    </Col>
    <Col xl={3}>
        <ShowCode title="Image Thumbnail" svelteCode={image8}>
            <p class="card-title mb-3">
                Use <code> .img-thumbnail </code> to give an image a rounded 1px
                border.
            </p>
            <div class="text-center">
                <Image
                    src="../../images/media/media-51.jpg"
                    class="img-thumbnail"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={3}>
        <ShowCode title="Rounded Thumbnail" svelteCode={image9}>
            <p class="card-title mb-3">
                Use <code> .rounded-pill </code> along with
                <code> .img-thummbnail </code> to get radius.
            </p>
            <div class="text-center">
                <Image
                    src="../../images/media/media-52.jpg"
                    class="img-thumbnail rounded-pill"
                    alt="..."
                />
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->
