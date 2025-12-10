<script lang="ts">
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        AssuranceCards,
        CareInstructions,
        ProductDetailsdata,
        ProductFeatures,
        Ratings,
    } from "$lib/data/dashboards/ecommerce/productdetailsdata";
    import {
        Card,
        CardBody,
        Col,
        Container,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    const basePath = base
    import { register } from "swiper/element/bundle";
    onMount(()=>{
        register()
    })
    let thumbsSwiper: any; // This will store the swiper instance
    let autoplayConfig = { delay: 2500, disableOnInteraction: false };
    // Function to handle the swiper instance assignment
    const setThumbsSwiper = (swiper: any) => {
        thumbsSwiper = swiper;
    };

    function dec(el: any) {
        let unit = parseInt(
            el.currentTarget.parentElement.querySelector("input").value,
            10,
        );
        if (unit <= 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value =
                unit - 1;
        }
    }
    function inc(el: any) {
        let unit = parseInt(
            el.currentTarget.parentElement.querySelector("input").value,
            10,
        );
        el.currentTarget.parentElement.querySelector("input").value = unit + 1;
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>ProductDetails | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Product Details"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Product Details"
/>
<!-- Page Header Close -->

<Container>
    <Row>
        <Col xl={12}>
            <Card class="custom-card">
                <CardBody>
                    <Row class="g-5">
                        <Col xl={6}>
                            <swiper-container
                                class="swiper mySwiper swiper-preview-details bg-light product-details-page mb-2"
                                thumbs-swiper=".my-thumbs"
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                autoplay={autoplayConfig}
                            >
                                <swiper-slide>
                                    <div class="" id="img-container">
                                        <Image
                                            class="img-fluid"
                                            src="../../images/ecommerce/jpg/4.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class=" image-container">
                                        <Image
                                            class="img-fluid"
                                            src="../../images/ecommerce/jpg/2.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class=" image-container">
                                        <Image
                                            class="img-fluid"
                                            src="../../images/ecommerce/jpg/3.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class=" image-container">
                                        <Image
                                            class="img-fluid"
                                            src="../../images/ecommerce/jpg/1.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class=" image-container">
                                        <Image
                                            class="img-fluid"
                                            src="../../images/ecommerce/jpg/5.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class=" image-container">
                                        <Image
                                            class="img-fluid"
                                            src="../../images/ecommerce/jpg/6.jpg"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                            <swiper-container
                                class="swiper swiper-view-details mt-2 my-thumbs"
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={6}
                                freeMode={true}
                                watchSlidesProgress={true}
                            >
                                <swiper-slide class="swiper-slide">
                                    <Image
                                        class="img-fluid"
                                        src="../../images/ecommerce/jpg/4.jpg"
                                        alt="img"
                                    />
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <Image
                                        class="img-fluid"
                                        src="../../images/ecommerce/jpg/2.jpg"
                                        alt="img"
                                    />
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <Image
                                        class="img-fluid"
                                        src="../../images/ecommerce/jpg/3.jpg"
                                        alt="img"
                                    />
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <Image
                                        class="img-fluid"
                                        src="../../images/ecommerce/jpg/1.jpg"
                                        alt="img"
                                    />
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <Image
                                        class="img-fluid"
                                        src="../../images/ecommerce/jpg/5.jpg"
                                        alt="img"
                                    />
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <Image
                                        class="img-fluid"
                                        src="../../images/ecommerce/jpg/6.jpg"
                                        alt="img"
                                    />
                                </swiper-slide>
                            </swiper-container>
                        </Col>
                        <Col xl={6}>
                            <div>
                                <h4 class="fw-semibold">
                                    Nike Air Max 2025 Sneakers
                                </h4>
                                <div
                                    class="d-flex align-items-center mb-4 flex-wrap"
                                >
                                    <div class="text-warning">
                                        <i class="ti ti-star-filled"></i>
                                        <i class="ti ti-star-filled"></i>
                                        <i class="ti ti-star-filled"></i>
                                        <i class="ti ti-star-filled"></i>
                                        <i class="ti ti-star-half-filled"></i>
                                    </div>
                                    <span class="text-muted ms-1 fs-13"
                                        >4.5 (2.4k Reviews)</span
                                    >
                                </div>
                                <div class="mb-4">
                                    <p
                                        class="mb-1 lh-1 fs-11 text-success fw-semibold"
                                    >
                                        Special Offer
                                    </p>
                                    <div class="mb-1 d-flex align-items-center">
                                        <span class="h3 fw-semibold mb-0"
                                            ><sup class="fs-14">$</sup
                                            >129.99</span
                                        ><SpkBadge
                                            Color=""
                                            CustomClass="ms-3 bg-danger-transparent"
                                            >50% Off</SpkBadge
                                        >
                                    </div>
                                    <p class="mb-0 text-muted">
                                        M.R.P : <s>$259.99</s>
                                    </p>
                                </div>
                                <div class="mb-4">
                                    <h6 class="fw-semibold mb-3">
                                        Description :
                                    </h6>
                                    <p class="text-muted mb-0">
                                        These stylish Nike Air Max 2025 sneakers
                                        are designed for ultimate comfort and
                                        durability. Featuring a sleek,
                                        breathable mesh upper, the shoe’s
                                        advanced Air Max cushioning system
                                        ensures you stay comfortable on your
                                        feet all day long. Whether you're
                                        running errands or running a marathon,
                                        these sneakers will give you the support
                                        you need. Available in multiple colors.
                                    </p>
                                </div>
                                <div class="mb-4">
                                    <h6 class="fw-semibold mb-3">Colors :</h6>
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <div class="mb-0 d-flex flex-wrap gap-1">
                                        <a
                                            class="color-1 product-colors selected"
                                            href="#!"
                                        >
                                            <i
                                                class="ri-checkbox-blank-circle-fill"
                                            ></i>
                                        </a>
                                        <a
                                            class="color-2 product-colors"
                                            href="#!"
                                        >
                                            <i
                                                class="ri-checkbox-blank-circle-fill"
                                            ></i>
                                        </a>
                                        <a
                                            class="color-3 product-colors"
                                            href="#!"
                                        >
                                            <i
                                                class="ri-checkbox-blank-circle-fill"
                                            ></i>
                                        </a>
                                        <a
                                            class="color-4 product-colors"
                                            href="#!"
                                        >
                                            <i
                                                class="ri-checkbox-blank-circle-fill"
                                            ></i>
                                        </a>
                                        <a
                                            class="color-5 product-colors"
                                            href="#!"
                                        >
                                            <i
                                                class="ri-checkbox-blank-circle-fill"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h6 class="fw-semibold mb-3">Size:</h6>
                                    <div class="mb-0 d-flex flex-wrap gap-1">
                                        <a
                                            class="product-sizes selected"
                                            href="#!"
                                        >
                                            6
                                        </a>
                                        <a class="product-sizes" href="#!">
                                            7
                                        </a>
                                        <a class="product-sizes" href="#!">
                                            8
                                        </a>
                                        <a class="product-sizes" href="#!">
                                            9
                                        </a>
                                        <a class="product-sizes" href="#!">
                                            10
                                        </a>
                                        <a class="product-sizes" href="#!">
                                            11
                                        </a>
                                        <a class="product-sizes" href="#!">
                                            12
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="fw-semibold mb-3">Quantity:</h6>
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <div
                                        class="d-inline-flex rounded align-items-center flex-nowrap order-qnt gap-2 p-1 bg-light"
                                    >
                                        <a
                                            href="#!"
                                            onclick={dec}
                                            class="badge bg-white p-2 border text-muted fs-13 product-quantity-minus"
                                        >
                                            <i class="ri-subtract-line"></i>
                                        </a>
                                        <input
                                            type="text"
                                            class="form-control form-control-cart border-0 text-center w-100 shadow-none"
                                            aria-label="quantity"
                                            id="product-qty1"
                                            defaultValue={1}
                                        />
                                        <a
                                            href="#!"
                                            onclick={inc}
                                            class="badge bg-white p-2 border text-muted fs-13 product-quantity-plus"
                                        >
                                            <i class="ri-add-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="d-flex align-items-center justify-content-center gap-2 mt-5 flex-wrap"
                            >
                                <a
                                    href={`${basePath}/dashboards/ecommerce/cart`}
                                    class="btn btn-light btn-lg btn-w-lg disabled border"
                                    ><i class="ti ti-shopping-cart me-1"></i>Add
                                    To Cart</a
                                >
                                <a
                                    href={`${basePath}/dashboards/ecommerce/checkout`}
                                    class="btn btn-light btn-lg btn-w-lg disabled border"
                                    >Buy Now</a
                                >
                            </div>
                        </Col>
                        <Col xxl={12} xl={12} class="">
                            <Row class="justify-content-center mb-4">
                                {#each AssuranceCards as card}
                                    <Col
                                        xxl={4}
                                        xl={4}
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        class="col-12 mt-sm-0 mt-3"
                                    >
                                        <div
                                            class="ecommerce-assurance p-5 text-center"
                                        >
                                            <div class="lh-1 mb-3">
                                                <span
                                                    class="avatar avatar-md avatar-rounded bg-success svg-white"
                                                >
                                                    {@html card.icon}
                                                </span>
                                            </div>
                                            <h6 class="fw-semibold">
                                                {card.title}
                                            </h6>
                                            <span class="d-block text-muted"
                                                >{card.description}</span
                                            >
                                        </div>
                                    </Col>
                                {/each}
                            </Row>
                            <div class="mb-4">
                                <Row class="g-5">
                                    <Col xl={6}>
                                        <h6 class="fw-semibold mb-3">
                                            Product Details :
                                        </h6>
                                        <SpkTablescomponent
                                            Responsive={true}
                                            tableClass="table-bordered text-lg-wrap product-details-table"
                                        >
                                            {#each ProductDetailsdata as detail}
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        class="fw-semibold"
                                                    >
                                                        {detail.label}
                                                    </th>
                                                    <td>{detail.value}</td>
                                                </tr>
                                            {/each}
                                        </SpkTablescomponent>
                                    </Col>
                                    <Col xl={6}>
                                        <div class="mb-4">
                                            <h6 class="fw-semibold mb-3">
                                                Features :
                                            </h6>
                                            <ul
                                                class="list-unstyled product-details-features-list"
                                            >
                                                {#each ProductFeatures as feature}
                                                    <li>{feature}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                        <div class="mb-4">
                                            <h6 class="fw-semibold mb-3">
                                                Care Instructions :
                                            </h6>
                                            <ul
                                                class="list-unstyled product-details-features-list"
                                            >
                                                {#each CareInstructions as instruction}
                                                    <li>{instruction}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div class="mb-0">
                                <p class="fs-15 fw-semibold mb-3">
                                    Reviews & Ratings :
                                </p>
                                <Row>
                                    <Col
                                        xxl={4}
                                        xl={12}
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        class=""
                                    >
                                        <div
                                            class="d-flex align-items-top mb-3"
                                        >
                                            <div class="me-2 lh-1">
                                                <i
                                                    class="ri-star-fill fs-25 text-warning"
                                                ></i>
                                            </div>
                                            <div class="lh-1">
                                                <p class="mb-1">4.2 out of 5</p>
                                                <p
                                                    class="mb-0 text-muted fs-11"
                                                >
                                                    Based on (23,435) ratings
                                                </p>
                                            </div>
                                        </div>
                                        {#each Ratings as rating}
                                            <div
                                                class="d-flex align-items-center mb-3"
                                            >
                                                <div
                                                    class="fs-12 me-2 fw-semibold"
                                                >
                                                    {rating.stars}
                                                    <i
                                                        class="ri-star-fill fs-10"
                                                    ></i>
                                                </div>
                                                <div
                                                    class="progress progress-xs flex-fill"
                                                >
                                                    <!-- svelte-ignore element_invalid_self_closing_tag -->
                                                    <div
                                                        class={`progress-bar ${rating.color}`}
                                                        role="progressbar"
                                                        style="width: {rating.percentage}%;"
                                                        aria-valuenow={rating.percentage}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <div
                                                    class="text-muted ms-2 fs-12"
                                                >
                                                    ({rating.count})
                                                </div>
                                            </div>
                                        {/each}
                                    </Col>
                                    <Col
                                        xxl={8}
                                        xl={12}
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        class="mt-xxl-0 mt-3"
                                    >
                                        <div class="border p-3">
                                            <div
                                                class="d-sm-flex d-block align-items-top mb-3"
                                            >
                                                <div
                                                    class="d-flex flex-fill align-items-start gap-3"
                                                >
                                                    <div>
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../../images/faces/15.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div class="lh-1 me-2">
                                                        <p
                                                            class="mb-1 fw-semibold fs-14"
                                                        >
                                                            John Doe
                                                        </p>
                                                        <div class="mb-1">
                                                            <i
                                                                class="ri-star-s-fill text-warning align-middle fs-12"
                                                            ></i>
                                                            <i
                                                                class="ri-star-s-fill text-warning align-middle fs-12"
                                                            ></i>
                                                            <i
                                                                class="ri-star-s-fill text-warning align-middle fs-12"
                                                            ></i>
                                                            <i
                                                                class="ri-star-s-fill text-warning align-middle fs-12"
                                                            ></i>
                                                            <i
                                                                class="ri-star-s-line text-warning align-middle fs-12"
                                                            ></i>
                                                        </div>
                                                        <div
                                                            class="fs-11 text-muted"
                                                        >
                                                            Reviewed on 24
                                                            May,2025
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2"
                                                >
                                                    <SpkBadge
                                                        Color=""
                                                        CustomClass="bg-success"
                                                        >Verified Purchase</SpkBadge
                                                    >
                                                </div>
                                            </div>
                                            <div class="ps-sm-3 ps-0 mb-3">
                                                <p
                                                    class="fw-semibold mb-1 ps-2"
                                                >
                                                    Wonderful product&#128512;
                                                </p>
                                                <p class="mb-0 text-muted ps-2">
                                                    The comfort is unmatched! I
                                                    love the sleek design, and
                                                    the Air Max cushioning is
                                                    fantastic.
                                                </p>
                                            </div>
                                            <div
                                                class="product-images ps-sm-4 ps-0"
                                            >
                                                <Row>
                                                    <Col xl={6}>
                                                        <div
                                                            class="products-review-images"
                                                        >
                                                            <a href="#!">
                                                                <Image
                                                                    class=""
                                                                    src="../../images/ecommerce/jpg/1.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                            <a href="#!">
                                                                <Image
                                                                    class=""
                                                                    src="../../images/ecommerce/jpg/2.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </Col>
                                                    <Col
                                                        xl={6}
                                                        class="d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2 flex-wrap gap-2"
                                                    >
                                                        <SpkButton
                                                            color=""
                                                            customClass="btn btn-sm btn-warning-light me-2"
                                                            >Report abuse</SpkButton
                                                        >
                                                        <SpkButton
                                                            color=""
                                                            customClass="btn btn-sm btn-icon btn-success-light me-2"
                                                        >
                                                            <i
                                                                class="ri-thumb-up-line"
                                                            ></i>
                                                        </SpkButton>
                                                        <SpkButton
                                                            color=""
                                                            customClass="btn btn-sm btn-icon btn-danger-light"
                                                        >
                                                            <i
                                                                class="ri-thumb-down-line"
                                                            ></i>
                                                        </SpkButton>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    </Row>
</Container>
