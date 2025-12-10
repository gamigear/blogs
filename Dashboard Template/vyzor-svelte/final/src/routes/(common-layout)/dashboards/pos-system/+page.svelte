<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { type SwiperContainer } from "swiper/element/bundle";
    import { onMount, onDestroy } from "svelte";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import {
        CartItems,
        Orders,
        Systemcards,
    } from "$lib/data/dashboards/pos-systemdata";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import SpkPoscard from "$lib/@spk/dashboards-reusable/spk-poscard.svelte";

    //  Isotope
    let iso: any;
    let Isotope: any;
    let activeFilter = "*";
    // Active filter

    // Initialize isotope on mount
    onMount(async () => {
        if (typeof window !== "undefined") {
            const module = await import("isotope-layout");
            Isotope = module.default;

            iso = new Isotope(".list-wrapper", {
                itemSelector: ".card-item",
                layoutMode: "fitRows",
                fitWidth: true, // Automatically adjusts item widths based on container size
                percentPosition: true,
            });
        }
    });

    // Handle filter tab click
    function handleTabClick(filter: string) {
        activeFilter = filter;
        if (iso) {
            iso.arrange({ filter });
        }
    }

    let swiperEl: SwiperContainer | undefined;
    onMount(() => {
        if (swiperEl != undefined) {
            const swiperParams = {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: true,
                breakpoints: {
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
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
                    1600: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1800: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                },
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl, swiperParams);

            // and now initialize it
            swiperEl.initialize();
        }
    });

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
    <title>PosSystem | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="POS System" activepage="Dashboards" page="POS System" />
<!-- Page Header Close -->

<Row>
    <Col xxl={9}>
        <Row>
            <Col xl={12}>
                <h5 class="fw-semibold mb-3 d-flex align-items-center">
                    Orders<SpkBadge
                        Color=""
                        CustomClass="badge bg-primary ms-2 rounded-pill"
                        >08</SpkBadge
                    >
                </h5>
                <swiper-container init="false" bind:this={swiperEl}>
                    {#each Orders as idx}
                        <swiper-slide class="swiper-slide">
                            <SpkPoscard pos={idx} />
                        </swiper-slide>
                    {/each}
                </swiper-container>
            </Col>
            <Col xl={12}>
                <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
                >
                    <h5 class="fw-semibold mb-0 d-flex align-items-center">
                        Categories<span
                            class="badge bg-success ms-2 rounded-pill">07</span
                        >
                    </h5>
                    <a href="#!" class="text-muted fs-13"
                        >View All<i class="ti ti-arrow-narrow-right ms-1"
                        ></i></a
                    >
                </div>
                <div
                    class="d-flex align-items-center gap-2 mb-4 flex-wrap pos-category pos-categories-list"
                    id="filter"
                >
                    <div
                        class={`nft-tag nft-tag-primary ${activeFilter === "*" ? "active" : ""}`}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter="*"
                            on:click={() => handleTabClick("*")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    src="../images/pos-system/20.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >All</span
                            >
                        </a>
                    </div>
                    <div
                        class={`nft-tag nft-tag-secondary ${activeFilter === ".Appetizers" ? "active" : ""} `}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter=".Appetizers"
                            on:click={() => handleTabClick(".Appetizers")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    width={26}
                                    height={26}
                                    src="../images/pos-system/1.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >Appetizers</span
                            >
                        </a>
                    </div>
                    <div
                        class={`nft-tag nft-tag-info ${activeFilter === ".Main-Course" ? "active" : ""}`}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter=".Main-Course"
                            on:click={() => handleTabClick(".Main-Course")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    width={26}
                                    height={26}
                                    src="../images/pos-system/2.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >Main Course</span
                            >
                        </a>
                    </div>
                    <div
                        class={`nft-tag nft-tag-success ${activeFilter === ".Beverages" ? "active" : ""}`}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter=".Beverages"
                            on:click={() => handleTabClick(".Beverages")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    width={26}
                                    height={26}
                                    src="../images/pos-system/3.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >Beverages</span
                            >
                        </a>
                    </div>
                    <div
                        class={`nft-tag nft-tag-danger ${activeFilter === ".Desserts" ? "active" : ""}`}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter=".Desserts"
                            on:click={() => handleTabClick(".Desserts")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    width={26}
                                    height={26}
                                    src="../images/pos-system/4.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >Desserts</span
                            >
                        </a>
                    </div>
                    <div
                        class={`nft-tag nft-tag-warning ${activeFilter === ".Soups" ? "active" : ""}`}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter=".Soups"
                            on:click={() => handleTabClick(".Soups")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    width={26}
                                    height={26}
                                    src="../images/pos-system/6.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >Soups</span
                            >
                        </a>
                    </div>
                    <div
                        class={`nft-tag nft-tag-purple ${activeFilter === ".Salads" ? "active" : ""}`}
                    >
                        <a
                            href="#!"
                            class="stretched-link categories"
                            data-filter=".Salads"
                            on:click={() => handleTabClick(".Salads")}
                        >
                            <span class={`nft-tag-icon `}>
                                <Image
                                    width={26}
                                    height={26}
                                    src="../images/pos-system/5.png"
                                    alt=""
                                />
                            </span>
                            <span class="nft-tag-text podcast-category-text"
                                >Salads</span
                            >
                        </a>
                    </div>
                </div>
            </Col>
            <Col xl={12}>
                <Row class="list-wrapper ">
                    {#each Systemcards as item}
                        <Col
                            xxl={3}
                            xl={4}
                            lg={4}
                            md={6}
                            sm={6}
                            class={`col-12 card-item ${item.category}`}
                            data-category={item.category}
                        >
                            <Card
                                class={`custom-card ${item.outOfStock ? "out-of-stock" : ""}`}
                            >
                                <Image
                                    src={item.image}
                                    class="card-img-top bg-light"
                                    alt={item.title}
                                />
                                <CardBody>
                                    <div class="mb-1">
                                        <a href="#!" class="fw-medium fs-16"
                                            >{item.title}</a
                                        >
                                    </div>
                                    <div
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <h5 class="fw-semibold mb-0">
                                                ${item.price.toFixed(2)}
                                            </h5>
                                            <span
                                                class="text-muted fs-13 text-decoration-line-through"
                                                >${item.originalPrice.toFixed(
                                                    2,
                                                )}</span
                                            >
                                        </div>
                                        <div>
                                            <SpkButton
                                                id={`pos-${item.id}`}
                                                color="primary"
                                                customClass="btn btn-sm btn-wave d-inline-flex align-items-center justify-content-center"
                                                disabled={item.outOfStock}
                                            >
                                                Add Item <i
                                                    class="ti ti-plus ms-1"
                                                ></i>
                                            </SpkButton>
                                            <SpkTooltips
                                                placement="top"
                                                content="Add To Cart"
                                                targetId={`pos-${item.id}`}
                                            ></SpkTooltips>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader class="card-header justify-content-between">
                <div class="card-title">Orders Details</div>
                <SpkBadge Color="" CustomClass="badge bg-primary-transparent"
                    >4 Items</SpkBadge
                >
            </CardHeader>
            <CardBody>
                <div class="mb-4">
                    <span class="fw-semibold d-block mb-0"
                        >Recepient: Jhon Doe</span
                    >
                    <span class="d-block fs-13 text-muted mb-1"
                        >Mon - 24,Feb 2025 - 12:45PM</span
                    >
                    <span class="d-block fs-12 text-muted">#SPK1236655</span>
                </div>
                <ul class="list-unstyled pos-system-orders-list">
                    {#each CartItems as item}
                        <li>
                            <div
                                class="d-flex align-items-start gap-2 flex-wrap"
                            >
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-lg bg-light border"
                                    >
                                        <Image
                                            width={48}
                                            height={48}
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <div
                                        class="d-flex align-items-end mb-1 flex-wrap"
                                    >
                                        <span
                                            class="fw-semibold text-truncate flex-fill"
                                        >
                                            {item.title}
                                        </span>
                                        <!-- svelte-ignore a11y_consider_explicit_label -->
                                        <div
                                            class="d-flex align-items-center order-qnt gap-2"
                                        >
                                            <a
                                                href="#!"
                                                on:click={dec}
                                                class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus"
                                            >
                                                <i class="ri-subtract-line"></i>
                                            </a>
                                            <input
                                                type="text"
                                                class="form-control form-control-cart border-0 text-center w-100"
                                                aria-label="quantity"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <a
                                                href="#!"
                                                on:click={inc}
                                                class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus"
                                            >
                                                <i class="ri-add-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                                    >
                                        <div
                                            class="flex-grow-1 mb-0 text-primary"
                                        >
                                            ${item.price.toFixed(2)}
                                        </div>
                                        <div class="lh-1">
                                            <a
                                                href="#!"
                                                class="text-danger fs-12 text-decoration-underline"
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
            <CardFooter class="p-0">
                <div class="p-3 border-bottom border-bottom-dashed">
                    <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 fw-semibold mb-2"
                    >
                        <span>Sub total</span>
                        <span>$37.96</span>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2 text-muted"
                    >
                        <span>Packaging Charges:</span>
                        <span>+$5.00</span>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 text-muted"
                    >
                        <span>GST:</span>
                        <span>$2.99</span>
                    </div>
                </div>
                <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-2 text-primary px-3 py-2 fw-semibold fs-18 border-bottom border-bottom-dashed"
                >
                    <span>Total:</span>
                    <span>$45.00</span>
                </div>
                <div class="p-3">
                    <h6 class="fw-semibold mb-3">Payment Methods:</h6>
                    <div
                        class="btn-group flex-wrap"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio1"
                            checked
                        />
                        <label
                            class="btn btn-outline-primary btn-w-sm"
                            for="btnradio1"
                        >
                            <span class="d-block"
                                ><i class="ti ti-cash fs-5"></i></span
                            > <span class="d-block">Cash</span>
                        </label>
                        <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio2"
                        />
                        <label
                            class="btn btn-outline-primary btn-w-sm"
                            for="btnradio2"
                        >
                            <span class="d-block"
                                ><i class="ti ti-qrcode fs-5"></i></span
                            > <span class="d-block">UPI</span>
                        </label>
                        <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio3"
                        />
                        <label class="btn btn-outline-primary" for="btnradio3">
                            <span class="d-block"
                                ><i class="ti ti-credit-card fs-5"></i></span
                            > <span class="d-block">Debit Card</span>
                        </label>
                    </div>
                </div>
            </CardFooter>
            <CardFooter class="d-grid">
                <SpkButton color="primary" customClass="btn btn-lg"
                    >Pay - $45.00</SpkButton
                >
            </CardFooter>
        </Card>
    </Col>
</Row>
