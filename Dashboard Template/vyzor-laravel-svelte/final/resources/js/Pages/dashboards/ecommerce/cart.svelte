<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        CartData,
        PricingSummary,
    } from "@/shared/data/dashboards/ecommerce/cartdata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { Link } from "@inertiajs/svelte";

    let basePath = __BASE_PATH__;

    function dec(el) {
        let unit = parseInt(
            el.currentTarget.parentElement.querySelector("input").value,
            10,
        );
        if (unit <= 1) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value =
                unit - 1;
        }
    }

    function inc(el) {
        let unit = parseInt(
            el.currentTarget.parentElement.querySelector("input").value,
            10,
        );
        el.currentTarget.parentElement.querySelector("input").value = unit + 1;
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>Cart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Cart"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Cart"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={9}>
        <Card class="custom-card overflow-hidden">
            <CardBody class="p-0">
                <SpkTablescomponent Responsive={true} tableClass="text-nowrap">
                    {#each CartData as product}
                        <tr>
                            <td class={product.borderClass}>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="lh-1">
                                        <span class="avatar avatar-xxl">
                                            <Image
                                                src={`${basePath}${product.image}`}
                                                alt={product.name}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block text-muted mb-1"
                                            >{product.brand}</span
                                        >
                                        <h6 class="fw-semibold">
                                            {product.name}
                                        </h6>
                                        <div
                                            class="d-flex align-items-center gap-2 fs-13"
                                        >
                                            <div>
                                                Color : <span
                                                    class="fw-medium text-muted"
                                                    >{product.color}</span
                                                >
                                            </div>
                                            <div class="vr"></div>
                                            <div>
                                                Size : <span
                                                    class="fw-medium text-muted"
                                                    >{product.size}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class={product.borderClass}>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${product.stockStatus === "In Stock" ? "bg-success-transparent" : "bg-danger-transparent"} fs-13`}
                                >
                                    {product.stockStatus}
                                </SpkBadge>
                            </td>
                            <td class={product.borderClass}>
                                <div class="fw-medium">
                                    ${product.price.toFixed(2)}
                                </div>
                            </td>
                            <td class={product.borderClass}>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div
                                    class="d-inline-flex rounded align-items-center flex-nowrap order-qnt gap-2 p-1 bg-light"
                                >
                                    <a
                                        onclick={dec}
                                        href="#!"
                                        class="badge bg-white p-2 border text-muted fs-13 product-quantity-minus"
                                    >
                                        <i class="ri-subtract-line"></i>
                                    </a>
                                    <Input
                                        type="text"
                                        class="form-control-cart border-0 text-center w-100 shadow-none"
                                        aria-label="quantity"
                                        value={product.quantity}
                                        readonly
                                    />

                                    <a
                                        onclick={inc}
                                        href="#!"
                                        class="badge bg-white p-2 border text-muted fs-13 product-quantity-plus"
                                    >
                                        <i class="ri-add-line"></i>
                                    </a>
                                </div>
                            </td>
                            <td class={product.borderClass}>
                                <div class="fw-medium">
                                    ${(
                                        product.price * product.quantity
                                    ).toFixed(2)}
                                </div>
                            </td>
                            <td class={product.borderClass}>
                                <div
                                    class="d-flex align-items-center gap-2 lh-1"
                                >
                                    <div>
                                        <a
                                            href="#!"
                                            class="text-muted d-inline-flex align-items-center justify-content-center"
                                            ><i class="ti ti-trash me-1"
                                            ></i>Delete</a
                                        >
                                    </div>
                                    <div class="vr"></div>
                                    <div>
                                        <a
                                            href="#!"
                                            class="text-muted d-inline-flex align-items-center justify-content-center"
                                            ><i class="ti ti-heart me-1"
                                            ></i>Save For Later</a
                                        >
                                    </div>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
                <div class="table-responsive"></div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={3}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Order Summary</div>
                <div class="text-end">
                    <span class="text-muted fs-13">Estimated Delivery</span>
                    <span class="d-block fw-medium">13,Apr 2025</span>
                </div>
            </CardHeader>
            <CardHeader>
                <span class="d-block fs-14 fw-medium mb-1">Have a coupon?</span>
                <div class="input-group mb-1">
                    <Input
                        type="text"
                        class="form-control-sm"
                        placeholder="Coupon Code"
                        aria-label="coupon-code"
                        aria-describedby="coupons"
                    />
                    <SpkButton
                        color="primary"
                        customClass="btn input-group-text">Apply</SpkButton
                    >
                </div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled cart-order-summary-list">
                    {#each PricingSummary as item}
                        <li>
                            <div
                                class="d-flex align-items-center justify-content-between"
                            >
                                <div>{item.label}</div>
                                <div
                                    class={`fw-medium ${ item.isFree ? "text-success" : ""}`}
                                >
                                    {item.value}
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
            <CardFooter class="d-grid">
                <Link
                    href={`${basePath}/dashboards/ecommerce/checkout`}
                    class="btn btn-primary d-inline-flex align-items-center justify-content-center"
                    >Proceed to checkout<i class="ti ti-arrow-narrow-right ms-1"
                    ></i></Link
                >
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
