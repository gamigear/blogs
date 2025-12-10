<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Carousel from "svelte-carousel";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        carousel1,
        carousel2,
        carousel3,
        datacarousel2,
        carousel9,
        datacarousel9,
        datacarousel3,
        datacarousel1,
        carousel7,
        carousel8,
    } from "@/shared/data/prism-code/advanceuiprism.js";
    import {
        SlidesOnly,
        Controls,
        Indicators,
        AutoPlay,
    } from "@/shared/data/adavanec-ui/carouseldata.js";
    import Slidewithcaption from "@/view/carousel/Slidewithcaption.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Carousel | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Carousel" activepage="Advanced Ui" page="Carousel" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="Slides Only"
            svelteCode={carousel1}
            dataCode={datacarousel1}
        >
            <!-- {#if browser} -->
                <!-- Ensure carousel only renders in the browser (client-side) -->
                <Carousel
                    particlesToShow={1}
                    particlesToScroll={1}
                    arrows={false}
                    dots={false}
                    autoplay
                    autoplayDuration={3000}
                >
                    <!-- Loop through images array and render each image -->
                    {#each SlidesOnly as src}
                        <div class="item">
                            <img
                                loading="lazy"
                                {src}
                                alt=""
                                class="d-block w-100"
                            />
                        </div>
                    {/each}
                </Carousel>
            <!-- {/if} -->
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="With controls"
            svelteCode={carousel2}
            dataCode={datacarousel2}
        >
            <!-- {#if browser} -->
                <!-- Ensure carousel only renders in the browser (client-side) -->
                <Carousel
                    particlesToShow={1}
                    particlesToScroll={1}
                    arrows={true}
                    dots={false}
                    autoplay
                    autoplayDuration={3000}
                >
                    <!-- Loop through images array and render each image -->
                    {#each Controls as src}
                        <div class="item">
                            <img
                                loading="lazy"
                                {src}
                                alt=""
                                class="d-block w-100"
                            />
                        </div>
                    {/each}
                </Carousel>
            <!-- {/if} -->
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="With indicators"
            svelteCode={carousel3}
            dataCode={datacarousel3}
        >
            <!-- {#if browser} -->
                <!-- Ensure carousel only renders in the browser (client-side) -->
                <Carousel
                    particlesToShow={1}
                    particlesToScroll={1}
                    arrows={true}
                    dots={true}
                    autoplay
                    autoplayDuration={3000}
                >
                    <!-- Loop through images array and render each image -->
                    {#each Indicators as src}
                        <div class="item">
                            <img
                                loading="lazy"
                                {src}
                                alt=""
                                class="d-block w-100"
                            />
                        </div>
                    {/each}
                </Carousel>
            <!-- {/if} -->
        </ShowCode>
    </Col>
   
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="Autoplay with duration progress"
            svelteCode={carousel7}
        >
            <!-- {#if browser} -->
                <Carousel
                    particlesToShow={1}
                    particlesToScroll={1}
                    autoplay
                    arrows={true}
                    autoplayDuration={3000}
                    autoplayProgressVisible
                >
                    {#each AutoPlay as src}
                        <div class="item">
                            <img
                                loading="lazy"
                                {src}
                                alt=""
                                class="d-block w-100"
                            />
                        </div>
                    {/each}
                </Carousel>
            <!-- {/if} -->
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode title="Autoplay with pause on focus" svelteCode={carousel8}>
            <!-- {#if browser} -->
                <Carousel
                    autoplay
                    autoplayDuration={5000}
                    autoplayProgressVisible
                    pauseOnFocus
                >
                    {#each AutoPlay as src}
                        <div class="item">
                            <img
                                loading="lazy"
                                {src}
                                alt=""
                                class="d-block w-100"
                            />
                        </div>
                    {/each}
                </Carousel>
            <!-- {/if} -->
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="With captions"
            svelteCode={carousel9}
            dataCode={datacarousel9}
        >
            <Slidewithcaption />
        </ShowCode>
    </Col>

</Row>
<!-- End:: row-4 -->
