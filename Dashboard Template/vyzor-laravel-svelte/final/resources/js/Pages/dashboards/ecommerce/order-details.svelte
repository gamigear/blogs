<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        DetailsTable,
        OrderTimeline,
        PaymentDetails,
        UserInfoList,
    } from "@/shared/data/dashboards/ecommerce/orderdetailsdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        ListGroup,
        ListGroupItem,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>OrderDetails | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Order Details"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Order Details"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xxl={9}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="nowrap text-nowrap"
                            header={[
                                { title: "Product" },
                                { title: "SKU" },
                                {
                                    title: "Quantity",
                                    headerClassname: "text-center",
                                },
                                { title: "Price Per Unit" },
                                { title: "Total", headerClassname: "text-end" },
                            ]}
                        >
                            {#each DetailsTable as product}
                                <tr>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-3"
                                        >
                                            <div class="lh-1">
                                                <span class="avatar avatar-xxl">
                                                    <Image
                                                        src={product.imageUrl}
                                                        alt={product.name}
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    class="d-block text-muted mb-1"
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
                                                        >
                                                            {product.color}</span
                                                        >
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div>
                                                        Size : <span
                                                            class="fw-medium text-muted"
                                                        >
                                                            {product.size}</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-muted">
                                            {product.id}
                                        </div>
                                    </td>
                                    <td
                                        class="product-quantity-container text-center"
                                    >
                                        {product.quantity}
                                    </td>
                                    <td>
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td class="text-end">
                                        ${(
                                            product.price * product.quantity
                                        ).toFixed(2)}
                                    </td>
                                </tr>
                            {/each}
                            <tr>
                                <td colSpan={3} class="border-bottom-0"></td>
                                <td colSpan={2} class="border-bottom-0">
                                    <!-- svelte-ignore a11y_misplaced_scope -->
                                    <table
                                        class="table table-sm text-nowrap mb-0 table-borderless"
                                    >
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    Sub Total :
                                                </td>
                                                <td class="text-end">
                                                    <span class="mb-0 fw-medium"
                                                        >$419.97</span
                                                    >
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    Avail Discount :
                                                </td>
                                                <td class="text-end">
                                                    <span class="mb-0 fw-medium"
                                                        >-$30.00</span
                                                    >
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    Coupon Discount :
                                                </td>
                                                <td class="text-end">
                                                    <span class="mb-0 fw-medium"
                                                        >-$41.99</span
                                                    >
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row"> Vat : </td>
                                                <td class="text-end">
                                                    <span class="mb-0 fw-medium"
                                                        >$67.99</span
                                                    >
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row"> Total : </td>
                                                <td class="text-end">
                                                    <span
                                                        class="mb-0 fw-medium fs-15"
                                                        >$415.97</span
                                                    >
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={7}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Order Activity</div>
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled order-activity-list">
                            {#each OrderTimeline as item}
                                <li class={item.isVisible ? "" : "pending"}>
                                    <div
                                        class="d-flex align-items-start justify-content-between"
                                    >
                                        <div class="w-50">
                                            <h6 class="fw-medium mb-1">
                                                {item.title}
                                            </h6>
                                            <div
                                                class={`text-muted ${item.isVisible ? "" : "d-none"}`}
                                            >
                                                {item.description}
                                            </div>
                                        </div>
                                        <div
                                            class={`fs-13 text-end ${item.isVisible ? "" : "d-none"}`}
                                        >
                                            <span class="d-block mb-1"
                                                >{item.date}</span
                                            >
                                            <span class="d-block text-muted"
                                                >{item.time}</span
                                            >
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={5}>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Billing Address</div>
                        <a
                            href="#!"
                            class="btn btn-primary-light btn-sm d-inline-flex align-items-center justify-content-center"
                            ><i class="ti ti-edit me-1"></i>Edit</a
                        >
                    </CardHeader>
                    <CardBody>
                        <span class="d-block fw-medium mb-2">Tom Phillip</span>
                        <ul class="list-unstyled order-address-list">
                            <li>9876 Maple Avenue, Unit 12C</li>
                            <li>New York, NY 10001</li>
                            <li>United States</li>
                            <li>(212) 555-0987</li>
                        </ul>
                    </CardBody>
                </Card>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Shipping Address</div>
                        <a
                            href="#!"
                            class="btn btn-primary-light btn-sm d-inline-flex align-items-center justify-content-center"
                            ><i class="ti ti-edit me-1"></i>Edit</a
                        >
                    </CardHeader>
                    <CardBody>
                        <span class="d-block fw-medium mb-2">Tom Phillip</span>
                        <ul class="list-unstyled order-address-list mb-3">
                            <li>9876 Maple Avenue, Unit 12C</li>
                            <li>New York, NY 10001</li>
                            <li>United States</li>
                            <li>(212) 555-0987</li>
                        </ul>
                        <span class="d-block fw-medium mb-2">Visa Card</span>
                        <span class="d-block">**** **** **** 1234</span>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Customer Details</div>
                        <SpkBadge
                            Color=""
                            CustomClass="bg-primary-transparent fs-13"
                            >18 Orders</SpkBadge
                        >
                    </CardHeader>
                    <CardBody class="p-0">
                        <ListGroup class="list-group-flush">
                            {#each UserInfoList as item}
                                <ListGroupItem class="">
                                    <div
                                        class="d-flex align-items-center justify-content-between"
                                    >
                                        <div class="fs-13 text-muted">
                                            <i class={`${item.icon} me-2 fs-14`}
                                            ></i>
                                            {item.label}
                                        </div>
                                        {@html item.value}
                                    </div>
                                </ListGroupItem>
                            {/each}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Payment Details</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <ListGroup class="list-group-flush">
                            {#each PaymentDetails as item}
                                <ListGroupItem class="">
                                    <div
                                        class="d-flex align-items-center justify-content-between"
                                    >
                                        <div class="fs-13 text-muted">
                                            {item.label}
                                        </div>
                                        <div class="fw-medium">
                                            {@html item.value}
                                        </div>
                                    </div>
                                </ListGroupItem>
                            {/each}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!--End::row-1 -->
