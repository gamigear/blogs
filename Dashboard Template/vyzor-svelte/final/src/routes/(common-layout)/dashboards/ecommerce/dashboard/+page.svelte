<script lang="ts">
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import SpkEcommercecard from "$lib/@spk/dashboards-reusable/spk-ecommercecard.svelte";
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        CategorySalesList,
        CountryStats,
        EcommerceCards,
        EcommerceCategeriesOptions,
        EcommerceOptions,
        FeedbackData,
        Orders,
        ProductList,
        ProductsTable,
        TransactionsEcommerce,
    } from "$lib/data/dashboards/ecommerce/ecommercedashboardata";
    import {
        ecommerceDropdown,
        SortByDropdown,
    } from "$lib/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Dashboard | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Dashboard"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Dashboard"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={6}>
        <Row>
            {#each EcommerceCards as item}
                <Col lg={6}>
                    <SpkEcommercecard
                        cardClass="dashboard-main-card"
                        ecommerce={item}
                    />
                </Col>
            {/each}
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Sales Statistics</div>
                    </CardHeader>
                    <CardBody>
                        <Row class="sales-stats mb-3">
                            <Col xl={4} lg={4} md={4} sm={4} class="">
                                <div>Orders</div>
                                <div class="d-flex align-items-center gap-1">
                                    <span class="fs-16 fw-semibold">3,542</span>
                                    <span class="text-success"
                                        ><i
                                            class="ti ti-arrow-narrow-up align-middle"
                                        ></i>
                                        <SpkBadge
                                            Color=""
                                            CustomClass="bg-success-transparent"
                                            >0.9%</SpkBadge
                                        ></span
                                    >
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={4} class="">
                                <div>Revenue</div>
                                <div class="d-flex align-items-center gap-1">
                                    <span class="fs-16 fw-semibold"
                                        >$52,38,346</span
                                    >
                                    <span class="text-success"
                                        ><i
                                            class="ti ti-arrow-narrow-up align-middle"
                                        ></i>
                                        <SpkBadge
                                            Color=""
                                            CustomClass="bg-success-transparent"
                                            >0.39%</SpkBadge
                                        ></span
                                    >
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={4} class="">
                                <div>Conversion Ratio</div>
                                <div class="mb-0">
                                    <span
                                        class="fs-16 fw-semibold text-secondary"
                                        >33.7%</span
                                    >
                                </div>
                            </Col>
                        </Row>
                        <div id="sale-stats">
                            <Spkapexcharts
                                id="sale-stats"
                                options={EcommerceOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Top Selling Products</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                            header={[
                                { title: "S.no" },
                                { title: "Product Category" },
                                {
                                    title: "Sale Value",
                                    headerClassname: "text-center",
                                },
                                 {
                                    title: "Total Sales",
                                    headerClassname: "text-center",
                                },
                                {
                                    title: "Status",
                                    headerClassname: "text-center",
                                },
                            ]}
                        >
                            {#each ProductsTable as product}
                                <tr>
                                    <td class={product.borderClass}
                                        >{product.id}</td
                                    >
                                    <td class={product.borderClass}>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-sm avatar-rounded bg-light"
                                                >
                                                    <Image
                                                        width={28}
                                                        height={28}
                                                        src={product.image}
                                                        alt={product.name}
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fw-semibold"
                                                    >{product.name}</span
                                                >
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        class={`text-center ${product.borderClass}`}
                                        >${product.price}</td
                                    >
                                    <td
                                        class={`text-center ${product.borderClass}`}
                                        >{product.quantity.toLocaleString()}</td
                                    >
                                    <td class={product.borderClass}>
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`${product.status === "In Stock" ? "bg-success-transparent" : "bg-danger-transparent"}`}
                                        >
                                            {product.status}
                                        </SpkBadge>
                                    </td>
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Recent Orders</div>
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled ecommerce-recent-orders-list">
                            {#each ProductList as item}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-3"
                                    >
                                        <div class="lh-1">
                                            <span class="avatar avatar-md">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">
                                                <a href="#!">{item.name}</a>
                                            </span>
                                            <span class="text-muted fs-12"
                                                >{item.category}</span
                                            >
                                        </div>
                                        <div class="text-end">
                                            <div class="fw-semibold">
                                                ${item.price}
                                            </div>
                                            <span class="fs-12 text-muted"
                                                >Price</span
                                            >
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Top Categories</div>
                    </CardHeader>
                    <CardBody>
                        <div id="top-categories">
                            <Spkapexcharts
                                id="top-categories"
                                options={EcommerceCategeriesOptions}
                            />
                        </div>
                        <ul class="list-unstyled top-categories-list mt-3">
                            {#each CategorySalesList as item}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <div class="flex-fill">
                                            {item.category}
                                        </div>
                                        <div class="fw-semibold">
                                            {item.sales}
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Top Countries By Sales</div>
                    </CardHeader>
                    <CardBody>
                        <div class="d-flex align-items-center mb-3 flex-wrap">
                            <div>
                                <h4 class="mb-0 lh-1">38,256</h4>
                            </div>
                            <div>
                                <SpkBadge
                                    Color=""
                                    CustomClass="bg-primary-transparent ms-2 me-1"
                                    >12.24%</SpkBadge
                                ><span class="text-muted fs-11"
                                    >Since last week</span
                                >
                            </div>
                        </div>
                        <ul class="pt-2 list-unstyled top-country-sales-list">
                            {#each CountryStats as country, index}
                                <li
                                    class={index === CountryStats.length - 1
                                        ? "mb-0"
                                        : ""}
                                >
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div
                                            class="d-flex align-items-center lh-1 gap-2"
                                        >
                                            <span
                                                class="avatar avatar-xs avatar-rounded"
                                            >
                                                <Image
                                                    src={country.flag}
                                                    alt={country.name}
                                                />
                                            </span>
                                            <span class="top-country-name"
                                                >{country.name}</span
                                            >
                                        </div>
                                        <div>
                                            <i
                                                class={`ti ti-trending-${country.trend} fs-16 ${country.trend === "up" ? "text-success" : "text-danger"}`}
                                            ></i>
                                        </div>
                                        <div class="fs-14">
                                            {country.value.toLocaleString()}
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card atm-card border-0 overflow-hidden">
                    <CardBody>
                        <div class="atm-card-background-container grid-cards">
                            <Image
                                src="../../images/ecommerce/png/21.png"
                                alt=""
                            />
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <div>
                                <svg
                                    width="50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 3"
                                    viewBox="0 0 128 128"
                                    ><path
                                        fill="#ffd66e"
                                        d="M30.07,31.722H97.931a12.415,12.415,0,0,1,12.415,12.415V83.865A12.413,12.413,0,0,1,97.933,96.278H30.069A12.415,12.415,0,0,1,17.654,83.864V44.138A12.416,12.416,0,0,1,30.07,31.722Z"
                                    ></path><path
                                        fill="#005f75"
                                        d="M97.931,30.047H30.069A14.1,14.1,0,0,0,15.98,44.135V83.862A14.106,14.106,0,0,0,30.069,97.953H97.931A14.106,14.106,0,0,0,112.02,83.862V44.135A14.1,14.1,0,0,0,97.931,30.047ZM71.883,51.653c0,.034.014.064.02.1a1.628,1.628,0,0,0,.173.511c.017.03.039.056.058.086a1.638,1.638,0,0,0,.351.4c.016.013.023.033.04.046a14.084,14.084,0,0,1-.008,22.421c-.023.018-.034.045-.056.064a1.523,1.523,0,0,0-.544.909,1.655,1.655,0,0,0-.042.207c0,.053-.031.1-.031.153V94.6H56.155V76.531c0-.048-.023-.089-.028-.137a1.607,1.607,0,0,0-.042-.209,1.632,1.632,0,0,0-.147-.433c-.02-.036-.047-.067-.069-.1a1.635,1.635,0,0,0-.358-.407c-.011-.008-.015-.021-.026-.029a14.081,14.081,0,0,1,0-22.429c.011-.008.015-.021.026-.029a1.635,1.635,0,0,0,.358-.407c.023-.035.049-.066.069-.1a1.632,1.632,0,0,0,.147-.433,1.607,1.607,0,0,0,.042-.209c0-.047.028-.088.028-.137V33.4H71.845V51.463A1.564,1.564,0,0,0,71.883,51.653ZM108.672,71.1H79.905a17.275,17.275,0,0,0,.133-13.878h28.633ZM19.328,57.218H47.962A17.274,17.274,0,0,0,48.1,71.1H19.328ZM30.069,33.4H52.807V50.678a17.492,17.492,0,0,0-2.967,3.191H19.328V44.135A10.751,10.751,0,0,1,30.069,33.4ZM19.328,83.862V74.444H50.07a17.517,17.517,0,0,0,2.736,2.878V94.6H30.069A10.753,10.753,0,0,1,19.328,83.862ZM97.931,94.6H75.193V77.325a17.509,17.509,0,0,0,2.738-2.88h30.74v9.418A10.753,10.753,0,0,1,97.931,94.6Zm10.74-40.735H78.16a17.492,17.492,0,0,0-2.966-3.191V33.4H97.931a10.751,10.751,0,0,1,10.74,10.739Z"
                                    ></path></svg
                                >
                            </div>
                            <h6
                                class="fw-semibold mb-0 flex-fill text-fixed-black"
                            >
                                Debit Card
                            </h6>
                            <div>
                                <span
                                    class="float-end badge badge-sm bg-primary rounded-pill"
                                    >Max Bank</span
                                >
                            </div>
                        </div>
                        <p class="fs-18 mb-3 text-fixed-black">
                            **** **** **** ****
                        </p>
                        <div class="fs-15 mb-3 text-fixed-black">
                            ELISA GIBSON ANABELLA
                        </div>
                        <div class="d-flex align-items-center gap-3 flex-wrap">
                            <div class="flex-fill">
                                <span
                                    class="fs-13 mb-1 text-white-75 text-fixed-black"
                                    >Exp Date:05/27</span
                                >
                            </div>
                            <div>
                                <span class="fs-14 mb-1"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32.003"
                                        height="20"
                                        ><path
                                            fill="#26A6D1"
                                            d="M19.994 10c0 5.524-4.475 10-9.997 10s-9.997-4.477-9.997-10 4.476-10 9.997-10 9.997 4.477 9.997 10z"
                                        ></path><path
                                            fill="#E2574C"
                                            d="M22.003 0c-2.242 0-4.306.747-5.974 1.994l.008.001c.328.317.69.54.969.905l-2.08.033c-.326.329-.623.687-.903 1.059h3.668c.279.335.537.626.771.996h-5.104c-.187.322-.36.653-.511.997h6.196c.162.343.307.602.43.965h-6.993c-.111.345-.206.698-.278 1.058h7.564c.074.346.131.666.17.992h-7.884c-.033.329-.05.663-.05 1h7.991c0 .354-.025.682-.061 1h-7.88c.034.339.084.672.15 1h7.552c-.078.324-.168.65-.281.988h-7.016c.106.342.235.674.376.998h6.21c-.172.364-.367.655-.582.996h-5.121c.202.35.425.684.667 1.004l3.684.055c-.314.377-.717.604-1.084.934.02.016-.587-.002-1.782-.021 1.818 1.876 4.359 3.046 7.178 3.046 5.523 0 10-4.477 10-10s-4.476-10-10-10z"
                                        ></path></svg
                                    ></span
                                >
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">
                            Customers Satisfaction
                            <a
                                href="#!"
                                class="d-block fs-12 text-muted fw-normal text-decoration-underline"
                                >View report <i class="ti ti-arrow-narrow-right"
                                ></i></a
                            >
                        </div>
                        <div class="text-end">
                            <span class="d-block fw-semibold">25,765</span>
                            <span class="d-block fs-12 text-muted"
                                >Total Customers</span
                            >
                        </div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <ul class="list-group list-group-flush">
                            {#each FeedbackData as item}
                                <li class="list-group-item">
                                    <div
                                        class="d-flex align-items-center gap-2 mb-1"
                                    >
                                        <div
                                            class={`fs-14 fw-semibold mb-0 text-${item.colorClass}`}
                                        >
                                            {item.percentage}%
                                        </div>
                                        <div class="text-muted flex-fill fs-12">
                                            {item.label}
                                        </div>
                                        <div>
                                            <span class="avatar avatar-xs">
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={item.emojiSrc}
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        class="progress progress-xs progress-animate"
                                        role="progressbar"
                                        aria-valuenow={item.percentage}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            class={`progress-bar bg-${item.colorClass}`}
                                            style="width:{item.percentage}% ;"
                                        ></div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Transaction History</div>
                        <a
                            href="#!"
                            class="text-muted text-decoration-underline fs-12"
                            >View All <i class="ti ti-arrow-narrow-right"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled transaction-history-list">
                            {#each TransactionsEcommerce as txn}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <div class="lh-1">
                                            <span
                                                class="avatar avatar-md avatar-rounded"
                                            >
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={txn.image}
                                                    alt={txn.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="fw-semibold">
                                                {txn.name}
                                            </div>
                                            <span class="text-muted fs-12"
                                                >{txn.method}</span
                                            >
                                        </div>
                                        <div class="text-end">
                                            <div class="fw-semibold">
                                                {txn.amount}
                                            </div>
                                            <SpkBadge
                                                Color=""
                                                CustomClass={`${txn.statusClass}`}
                                                >{txn.status}</SpkBadge
                                            >
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Order History</div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkDropdown
                        option={SortByDropdown}
                        ToggleClass="btn btn-outline-light btn-wave waves-effect waves-light no-caret"
                        parent={`Filters <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        Caret={false}
                    />
                    <div>
                        <Input
                            class=""
                            type="text"
                            placeholder="Search Here"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Order ID" },
                        { title: "Customer" },
                        { title: "Product" },
                        { title: "Quantity", headerClassname: "text-center" },
                        { title: "Total Amount" },
                        { title: "Payment Method" },
                        { title: "Date" },
                        { title: "Status" },
                        { title: "Action" },
                    ]}
                >
                    {#each Orders as order}
                        <tr>
                            <td class={order.borderClass}><a href="#!">{order.id}</a></td>
                            <td  class={order.borderClass}><a href="#!">{order.customer}</a></td>
                            <td  class={order.borderClass}>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={order.productImage}
                                                alt={order.productName}
                                            />
                                        </span>
                                    </div>
                                    <div>{order.productName}</div>
                                </div>
                            </td>
                            <td class={`text-center ${order.borderClass}`}>{order.quantity}</td>
                            <td  class={order.borderClass}>{order.price}</td>
                            <td  class={order.borderClass}>{order.paymentMethod}</td>
                            <td  class={order.borderClass}>{order.date}</td>
                            <td  class={order.borderClass}>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${order.statusClass}`}
                                    >{order.status}</SpkBadge
                                >
                            </td>
                            <td  class={order.borderClass}>
                                <SpkDropdown
                                    option={ecommerceDropdown}
                                    ToggleClass="btn btn-icon btn-sm btn-light border no-caret"
                                    parent={`<i class="fe fe-more-vertical"/>`}
                                    Caret={false}
                                />
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="">
                <div class="d-flex align-items-center flex-wrap">
                    <div>
                        Showing 6 Entries <i
                            class="bi bi-arrow-right ms-2 fw-semibold"
                        ></i>
                    </div>
                    <div class="ms-auto">
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-2"
                        >
                            <Pagination
                                class="mb-0 flex-wrap customPaginationPageBottom"
                            >
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >2</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >...</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >17</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        class="text-primary"
                                        >Next</PaginationLink
                                    >
                                </PaginationItem>
                            </Pagination>
                        </nav>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->
