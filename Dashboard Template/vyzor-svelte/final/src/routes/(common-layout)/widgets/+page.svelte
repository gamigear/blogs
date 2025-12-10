<script lang="ts">
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import SpkEmployeecard from "$lib/@spk/reusable-widgets/spk-employeecard.svelte";
    import SpkProductscard from "$lib/@spk/reusable-widgets/spk-productscard.svelte";
    import SpkSalescard from "$lib/@spk/reusable-widgets/spk-salescard.svelte";
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { DropdownToday } from "$lib/data/uielements/dropdowndata";
    import {
        ActivityItems,
        Categoriesdataoptions,
        Categoriesoptions,
        CategoryData,
        CategoryItemsData,
        Countries,
        Employeesdata,
        Ordersdata,
        Productsdata,
        Recentoptions,
        Revenuesoptions,
        Salesdata,
        StatusData,
        Trafficoptions,
        Transactionsdata,
        Visitorsoptions,
    } from "$lib/data/widgetsdata";
    import WidgetMap from "$lib/view/maps/WidgetMap.svelte";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Progress,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { base } from "$app/paths";
    const basePath = base;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Widgets | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Widgets" activepage="Widgets" page="Widgets" />
<!-- Page Header Close -->
<!-- Start:: row-1 -->
<div class="row row-cols-xxl-5">
    {#each Employeesdata as idx}
        <SpkEmployeecard widget={idx} />
    {/each}
</div>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    {#each Salesdata as sales}
        <SpkSalescard {sales} />
    {/each}
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody>
                <Row class="gy-4">
                    {#each Productsdata as products}
                        <SpkProductscard {products} />
                    {/each}
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xxl={3} xl={6}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Top Categories</div>
                <a href="#!" class="fs-12 text-muted">
                    View All<i class="ti ti-arrow-narrow-right ms-1"></i>
                </a>
            </CardHeader>
            <CardBody>
                <div id="top-categories">
                    <Spkapexcharts
                        id="top-categories"
                        options={Categoriesoptions}
                    />
                </div>
            </CardBody>
            <CardFooter class="p-0">
                <ul class="list-group list-group-flush">
                    {#each CategoryData as category, index}
                        <li class="list-group-item">
                            <div
                                class="d-flex align-items-start justify-content-between"
                            >
                                <div
                                    class={`top-category-type ${index === 0 ? "one" : index === 1 ? "two" : "three"}`}
                                >
                                    <div class="fw-medium">
                                        {category.title}
                                    </div>
                                    <span class="fs-13 text-muted">
                                        {category.percentageChange}
                                        <span
                                            class={`text-${category.percentageColor} ms-1 fw-medium d-inline-block`}
                                            >{category.percentage}</span
                                        >
                                    </span>
                                </div>
                                <div class="text-end">
                                    <span class="d-block fs-13 text-muted"
                                        >Sales</span
                                    >
                                    <span class="d-block fw-semibold mb-0"
                                        >{category.sales}</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardFooter>
        </Card>
    </Col>
    <Col xxl={3} xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Top Country Sales</div>
            </CardHeader>
            <CardBody class=" overflow-auto">
                <!-- <div id="sales-locations"> -->
                <WidgetMap id="sales-locations" />
                <!-- <Map  center={center} zoom={zoom} onBoundsChanged={({ center, zoom }) => { setCenter(center); setZoom(zoom) }} /> -->
                <!-- </div> -->
                <div class="mt-4">
                    <ul class="list-unstyled sales-locations-list">
                        {#each Countries as country}
                            <li>
                                <div
                                    class="d-flex align-items-center gap-2 mb-2"
                                >
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-xs avatar-rounded"
                                        >
                                            <Image
                                                src={`${basePath}${country.flag}`}
                                                alt={country.name}
                                            />
                                        </span>
                                    </div>
                                    <div class="flex-fill">{country.name}</div>
                                    <div>
                                        {country.population.toLocaleString()}
                                    </div>
                                </div>
                                <Progress
                                    color="primary"
                                    class="progress-xs"
                                    animated
                                    striped
                                    value={country.now}
                                />
                            </li>
                        {/each}
                    </ul>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Sales Revenue</div>
            </CardHeader>
            <CardBody>
                <div id="salesOverview">
                    <Spkapexcharts
                        id="salesOverview"
                        options={Revenuesoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xxl={4} xl={6}>
        <div class="card custom-card">
            <div class="card-header justify-content-between">
                <div class="card-title">Top Categories</div>
                <SpkDropdown
                    Color="primary-light"
                    Caret={false}
                    ToggleClass="no-caret"
                    Size="sm"
                    parent={`This Week<i
                            class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"
                        ></i>`}
                    option={DropdownToday}
                />
            </div>
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col">
                        <div id="top-categories1" class="py-3 text-center">
                            <Spkapexcharts
                                id="top-categories1"
                                options={Categoriesdataoptions}
                            />
                        </div>
                    </div>
                    <div class="col">
                        <ul class="list-unstyled top-categories-list1 gy-1">
                            {#each CategoryItemsData as category}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2 justify-content-between"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <!-- svelte-ignore element_invalid_self_closing_tag -->
                                            <i
                                                class={`ri-circle-fill fs-10 ${category.colorClass}`}
                                            />
                                            {category.name}
                                        </div>
                                        <div
                                            class={`fw-semibold ${category.colorClass}`}
                                        >
                                            {category.percentage}
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <Row>
                    <div class="col border-end border-inline-end-dashed">
                        <div class="text-center">
                            <span class="text-muted">Last Month</span>
                            <h4 class="fw-semibold mb-0">13,965</h4>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <span class="d-block text-muted mb-1"
                                >This Month</span
                            >
                            <h4 class="fw-semibold mb-0">15,367</h4>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    </Col>
    <Col xxl={5} xl={6}>
        <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
                <div class="card-title">Recent Orders</div>
                <a href="#!" class="link-primary fw-semibold"
                    >View All Orders<i
                        class="ri-arrow-right-s-line ms-1 align-middle"
                    ></i></a
                >
            </div>
            <div class="card-body p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Order ID" },
                        { title: "Payment Mode" },
                        { title: "Status" },
                        { title: "Amount Paid" },
                        { title: "Action" },
                    ]}
                >
                    {#each Ordersdata as txn}
                        <tr>
                            <td class={txn.borderClass}><span class="fw-semibold">{txn.id}</span></td>
                            <td class={txn.borderClass}>
                                <div>
                                    <span class="d-block fw-semibold"
                                        >{txn.method}</span
                                    >
                                    <span class="d-block fs-12 text-muted"
                                        >{txn.methodDetails}</span
                                    >
                                </div>
                            </td>
                            <td class={txn.borderClass}
                                ><SpkBadge
                                    Color=""
                                    CustomClass={`bg-${txn.statusColor}`}
                                    >{txn.status}</SpkBadge
                                ></td
                            >
                            <td class={txn.borderClass}>
                                <div>
                                    <span class="d-block fw-semibold"
                                        >{txn.amount}</span
                                    >
                                    <span class="d-block fs-12 text-muted"
                                        >{txn.date}</span
                                    >
                                </div>
                            </td>
                            <td class={txn.borderClass}>
                                <SpkButton
                                    color=""
                                    customClass="btn btn-sm btn-outline-light btn-wave waves-effect waves-light"
                                >
                                    <i
                                        class="fe fe-eye text-muted align-middle me-1"
                                    ></i>
                                    View
                                </SpkButton>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </div>
        </div>
    </Col>
    <Col xxl={3}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Social Visitors</div>
            </div>
            <div class="card-body py-0">
                <div id="social-visitors">
                    <Spkapexcharts
                        id="social-visitors"
                        options={Visitorsoptions}
                    />
                </div>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
    <Col xxl={3} xl={6}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Social Traffic</div>
            </div>
            <div class="card-body pb-0 px-0">
                <div id="social-traffic1">
                    <Spkapexcharts
                        id="social-traffic1"
                        options={Trafficoptions}
                    />
                </div>
            </div>
        </div>
    </Col>
    <Col xxl={3} xl={6}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Recent Orders</div>
            </div>
            <div class="card-body">
                <div id="recent-orders">
                    <Spkapexcharts id="recent-orders" options={Recentoptions} />
                </div>
            </div>
            <div class="card-footer">
                <Row class="gy-4">
                    {#each StatusData as item}
                        <Col xl={6} class="">
                            <div
                                class="d-flex align-items-start gap-3 flex-wrap"
                            >
                                <div>
                                    <span
                                        class={`avatar avatar-rounded ${item.colorClass}`}
                                    >
                                        {@html item.svg}
                                    </span>
                                </div>
                                <div>
                                    <span class="d-block text-muted fs-13"
                                        >{item.label}</span
                                    >
                                    <span class="d-block fw-semibold fs-16"
                                        >{item.count}</span
                                    >
                                </div>
                            </div>
                        </Col>
                    {/each}
                </Row>
            </div>
        </div>
    </Col>
    <Col xxl={3} xl={6}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Recent Transactions</div>
                <a href="#!" class="fs-12 text-muted fw-medium">
                    View All<i class="ti ti-arrow-narrow-right ms-1"></i>
                </a>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled widgets-transactions-list">
                    {#each Transactionsdata as item}
                        <li>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md avatar-rounded ${item.bgClass}`}
                                    >
                                        {@html item.svg}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{item.name}</span
                                    >
                                    <span class="d-block text-muted fs-12"
                                        >{item.time}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`${item.badgeClass}`}
                                        >{item.status}</SpkBadge
                                    >
                                    <span class="d-block mt-1"
                                        >{item.amount}</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Recent Activity</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled mb-0 ecommerce-recent-activity">
                    {#each ActivityItems as item}
                        <li class="ecommerce-recent-activity-content">
                            <div class="d-flex align-items-start">
                                <div class="me-3">
                                    <span
                                        class={`avatar avatar-sm avatar-rounded bg-light ${item.avatarTextClass} fw-semibold`}
                                    >
                                        <i class={item.iconClass}></i>
                                    </span>
                                </div>
                                <div class="activity-content">
                                    <span class="d-block fw-medium"
                                        >{item.title}</span
                                    >
                                    <span class="d-block fs-12 text-muted"
                                        >{item.subtitle}</span
                                    >
                                </div>
                                <div class="flex-fill text-end">
                                    <span
                                        class={`d-block ${item.timeColorClass} fs-11 op-7`}
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
</Row>
<!-- End:: row-6 -->
