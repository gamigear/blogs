<script lang="ts">
    import Carousel from "svelte-carousel";
    import { browser } from "$app/environment"; // Ensure we are only rendering on the client side
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        carousel1,
        carousel2,
        carousel3,
        datacarousel2,
        datacarousel10,
        carousel9,
        carousel10,
        datacarousel9,
        datacarousel3,
        datacarousel4,
        datacarousel1,
        carousel4,
        carousel5,
        carousel6,
        carousel7,
        carousel8,
    } from "$lib/components/common/prism-code/advanceuiprism.js";
    import {
        SlidesOnly,
        Controls,
        Indicators,
        AutoPlay,
    } from "$lib/data/adavanec-ui/carouseldata.js";
    import Slidewithcaption from "$lib/view/carousel/Slidewithcaption.svelte";
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
            {#if browser}
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
            {/if}
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="With controls"
            svelteCode={carousel2}
            dataCode={datacarousel2}
        >
            {#if browser}
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
            {/if}
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="With indicators"
            svelteCode={carousel3}
            dataCode={datacarousel3}
        >
            {#if browser}
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
            {/if}
        </ShowCode>
    </Col>
    <!-- </Row> -->
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <!-- <Row>
  <Col xl={6} lg={6} md={6} sm={12}>
    <ShowCode title="Auto Play Variant" svelteCode={carousel4} dataCode={datacarousel4}>
        {#if browser}
            <Carousel particlesToShow={3} particlesToScroll={1} autoplay arrows={false} autoplayDuration={1000} >
            {#each AutoPlay as src}
                <div class="item">
                <img  loading="lazy" {src} alt="" class="d-block w-100" />
                </div>
            {/each}
            </Carousel>
        {/if}
    </ShowCode>
  </Col>
  <Col xl={6} lg={6} md={6} sm={12}>
    <ShowCode title="Multiple slide" svelteCode={carousel5}>
        {#if browser}
            <Carousel particlesToShow={3} particlesToScroll={1} autoplay arrows={true} autoplayDuration={1000} >
            {#each AutoPlay as src}
                <div class="item">
                <img  loading="lazy" {src} alt="" class="d-block w-100" />
                </div>
            {/each}
            </Carousel>
        {/if}
    </ShowCode>
  </Col>
</Row> -->
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <!-- <Row> -->
    <!-- <Col xl={4} lg={6} md={6} sm={12}>
    <ShowCode title="Marquee Mode" svelteCode={carousel6}>
        {#if browser}
            <Carousel autoplayDuration={0} duration={2000} autoplay timingFunction="linear" dots={false} arrows={false} swiping={false} >
            {#each AutoPlay as src}
                <div class="item">
                <img  loading="lazy" {src} alt="" class="d-block w-100" />
                </div>
            {/each}
            </Carousel>
        {/if}
    </ShowCode>
  </Col> -->
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode
            title="Autoplay with duration progress"
            svelteCode={carousel7}
        >
            {#if browser}
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
            {/if}
        </ShowCode>
    </Col>
    <Col xl={4} lg={6} md={6} sm={12}>
        <ShowCode title="Autoplay with pause on focus" svelteCode={carousel8}>
            {#if browser}
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
            {/if}
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
    <!-- </Row> -->
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <!-- <Row> -->

    <Col xl={4} lg={6} md={6} sm={12}>
        <!-- <ShowCode title="Crossfade" svelteCode={carousel10} dataCode={datacarousel10}>
            <Crossfade />
        </ShowCode> -->
    </Col>
</Row>
<!-- End:: row-4 -->
