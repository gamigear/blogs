<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        CustomReviews,
        Reviews,
        Testimonials3,
        Testimonialsdata,
    } from "@/shared/data/pages/testimonialsdata";
    import SpkTestimonialcard from "@/shared/@spk/reusable-pages/spk-testimonialcard.svelte";
    import SpkTeststylecard from "@/shared/@spk/reusable-pages/spk-teststylecard.svelte";
    import { Image } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    const basePath = __BASE_PATH__;

    //     swipers

    let swiperEl;
    let swiperEl2;
    let swiperEl3;
    let swiperEl4;
    onMount(() => {
        if (swiperEl != undefined) {
            const swiperParams = {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1112: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl, swiperParams);

            // and now initialize it
            swiperEl.initialize();
        }

        if (swiperEl2 != undefined) {
            const swiperParams = {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
                pagination: { dynamicBullets: true, clickable: true },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl2, swiperParams);

            // and now initialize it
            swiperEl2.initialize();
        }

        if (swiperEl3 != undefined) {
            const swiperParams = {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1112: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl3, swiperParams);

            // and now initialize it
            swiperEl3.initialize();
        }
        if (swiperEl4 != undefined) {
            const swiperParams = {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1112: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl4, swiperParams);

            // and now initialize it
            swiperEl4.initialize();
        }
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>Testimonials | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Testimonials" activepage="Pages" page="Testimonials" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<div class="row gy-5">
    <div class="col-xl-12">
        <div class="testimonials-heading-section text-center mb-5">
            <span class="badge bg-primary-transparent rounded-pill">
                Testimonials Style 1
            </span>
            <h2 class="fw-semibold mt-2 mb-1">What Our Clients Say</h2>
            <span class="d-block text-muted fs-16 mb-3"
                >Real feedback from customers who trust our services.</span
            >
        </div>
        <swiper-container
            init="false"
            bind:this={swiperEl}
            class="testimonialSwiperService1 swiper swiper-backface-hidden testimonial-style1"
        >
            {#each Reviews as review}
                <swiper-slide class="swiper-slide">
                    <SpkTestimonialcard test={review} />
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
    <div class="col-xl-12">
        <div class="testimonials-heading-section text-center mb-5">
            <span class="badge bg-primary-transparent rounded-pill">
                Testimonials Style 2
            </span>
            <h2 class="fw-semibold mt-2 mb-1">Customer Testimonials</h2>
            <span class="d-block text-muted fs-16 mb-3"
                >Hear how we've made a difference in our clients’ lives.</span
            >
        </div>
        <swiper-container
            init="false"
            bind:this={swiperEl2}
            class="testimonialSwiperService swiper swiper-backface-hidden testimonials-swiper-2"
        >
            {#each CustomReviews as review}
                <swiper-slide class="swiper-slide">
                    <SpkTeststylecard cardClass={review.color} style={review} />
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
    <div class="col-xl-12">
        <div class="testimonials-heading-section text-center mb-5">
            <span class="badge bg-primary-transparent rounded-pill">
                Testimonials Style 3
            </span>
            <h2 class="fw-semibold mt-2 mb-1">Client Feedback</h2>
            <span class="d-block text-muted fs-16 mb-3"
                >Discover why our clients choose us time and again.</span
            >
        </div>
        <swiper-container
            init="false"
            bind:this={swiperEl3}
            class="testimonialSwiper3 swiper swiper-backface-hidden"
        >
            {#each Testimonials3 as testimonial}
                <swiper-slide class="swiper-slide">
                    <div class="card custom-card">
                        <div class="card-body text-center p-5">
                            <div class="testimonaial-3-quote">
                                <i class="bx bxs-quote-alt-left"></i>
                            </div>
                            <div class="lh-1 mb-4">
                                <span class="avatar avatar-xl avatar-rounded">
                                    <Image
                                        src={`${basePath}${testimonial.image}`}
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div class="mb-2 text-warning fs-15">
                                {#each [...Array(5)] as _, index}
                                    <i
                                        class={`ri-star-fill ${index < Math.floor(testimonial.rating) ? "" : "ri-star-half-line"}`}
                                    ></i>
                                {/each}
                            </div>
                            <p>{testimonial.text}</p>
                            <div
                                class="d-flex align-items-center justify-content-start"
                            >
                                <div class="flex-grow-1">
                                    <h6 class="mb-1">{testimonial.name}</h6>
                                    <span class="fs-14 fw-normal text-muted"
                                        >{testimonial.role}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
    <div class="col-xl-12">
        <div class="testimonials-heading-section text-center mb-5">
            <span class="badge bg-primary-transparent rounded-pill">
                Testimonials Style 4
            </span>
            <h2 class="fw-semibold mt-2 mb-1">
                Real Stories from Real Clients
            </h2>
            <span class="d-block text-muted fs-16 mb-3"
                >Authentic testimonials from customers sharing their success.</span
            >
        </div>
        <swiper-container
            init="false"
            bind:this={swiperEl4}
            class="testimonialSwiper1 testimonial-style4 swiper swiper-backface-hidden"
        >
            {#each Testimonialsdata as testimonial}
                <swiper-slide class="swiper-slide">
                    <div class={`card custom-card ${testimonial.cardClass}`}>
                        <div class="card-body p-5">
                            <div class="lh-1">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <Image
                                        src={`${basePath}${testimonial.image}`}
                                        alt={testimonial.name}
                                    />
                                </span>
                            </div>
                            <div>
                                <div class="main-content">
                                    <div class="mb-2 text-warning fs-15">
                                        {#each [...Array(5)] as _, index}
                                            <i
                                                class={`ri-star-fill ${index < Math.floor(testimonial.rating) ? "" : "ri-star-half-line"}`}
                                            ></i>
                                        {/each}
                                    </div>
                                    <p class="text-muted mb-3">
                                        {testimonial.text}
                                    </p>
                                    <div>
                                        <span class="d-block fw-semibold"
                                            >{testimonial.name}</span
                                        >
                                        <span class="fs-13 text-muted"
                                            >{testimonial.role}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
</div>
<!--End::row-1 -->
