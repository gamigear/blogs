<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkStockcard from "@/shared/@spk/dashboards-reusable/spk-stockcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        PortfolioOptions,
        Recentstocks,
        StockData,
        StockTable,
        Trendingdata,
        Watchlistdata,
    } from "@/shared/data/dashboards/stocksdata";
    import { SortByDropdown } from "@/shared/data/uielements/dropdowndata";
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
        Progress,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";


    let swiperEl;
    onMount(() => {
        if (swiperEl != undefined) {
            const swiperParams = {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {},
                breakpoints: {
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1800: {
                        slidesPerView: 5,
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
</script>

<!-- Page Title -->
<svelte:head>
    <title>Stocks | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Stocks" activepage="Dashboards" page="Stocks" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xl={12}>
        <h6 class="fw-semibold mb-3">My Portfolio</h6>
        <Card class="custom-card">
            <CardBody class="">
                <swiper-container
                    init="false"
                    bind:this={swiperEl}
                    class="swiper stocks-swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
                >
                    {#each StockData as stock}
                        <swiper-slide class="swiper-slide">
                            <SpkStockcard {stock} cardClass="mb-0" />
                        </swiper-slide>
                    {/each}
                </swiper-container>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={9}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Portfolio Analysis</div>
                <div role="group" class="btn-group">
                    <a class="btn btn-sm btn-primary-light" href="#!">1H</a><a
                        class="btn btn-sm btn-primary-light"
                        href="#!">6H</a
                    ><a class="btn btn-sm btn-primary-light" href="#!">12H</a><a
                        class="btn btn-sm btn-primary"
                        href="#!">1D</a
                    >
                </div>
            </CardHeader>
            <CardBody>
                <div
                    class="d-flex align-items-center gap-3 p-3 rounded border border-dashed flex-wrap"
                >
                    <div>
                        <span class="avatar avatar-lg avatar-rounded">
                            <Image
                                src="../images/media/apps/apple.png"
                                alt=""
                                class="invert-1"
                            />
                        </span>
                    </div>
                    <div class="flex-fill">
                        <span class="d-block fw-semibold">Apple Inc</span>
                        <span class="fw-medium fs-13 text-muted">AAPL</span>
                    </div>
                    <div class="text-end">
                        <div class="d-flex align-items-center mb-1 gap-2">
                            <SpkBadge
                                Color=""
                                CustomClass="bg-success rounded-pill"
                                ><i class="ti ti-arrow-narrow-up me-1"
                                ></i>0.54%</SpkBadge
                            >
                            <h4 class="fw-semibold mb-0">$1,63,340</h4>
                        </div>
                        <span class="fs-13 text-muted"
                            >Last Updated 12:24pm</span
                        >
                    </div>
                </div>
                <div id="portfolio-analysis">
                    <Spkapexcharts
                        id="portfolio-analysis"
                        options={PortfolioOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">My Watchlist</div>
                <a href="#!" class="text-muted fs-13">View All</a>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled stocks-watchlist">
                    {#each Watchlistdata as stock}
                        <li>
                            <div class="d-flex align-items-center gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-md p-1">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={stock.image}
                                            alt={stock.name}
                                            class="invert-1"
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{stock.name}</span
                                    >
                                    <span class="fs-13 text-muted"
                                        >{stock.symbol}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span class="fw-semibold d-block"
                                        >{stock.price}</span
                                    >
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`bg-${stock.changeType}-transparent`}
                                    >
                                        {stock.change}
                                    </SpkBadge>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <h6 class="fw-semibold mb-3">Trending Stocks :</h6>
        <Row>
            {#each Trendingdata as asset}
                <Col xxl={2} xl={4} lg={6} md={6} sm={12} class="">
                    <Card class="p-3 custom-card border bg-white rounded">
                        <div
                            class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3"
                        >
                            <div class="d-flex flex-fill align-items-center">
                                <div class="me-2">
                                    <span
                                        class="avatar avatar-rounded bg-light p-2"
                                    >
                                        <i
                                            class={`bi ${asset.icon} ${asset.iconColor} fs-18`}
                                        ></i>
                                    </span>
                                </div>
                                <div class="lh-1">
                                    <span
                                        class="fw-semibold d-block mb-2 text-default"
                                        >{asset.name}</span
                                    >
                                    <span class="d-block text-muted fs-12"
                                        >{asset.value}</span
                                    >
                                </div>
                            </div>
                            <div class="text-success fs-12 text-end">
                                <span class="d-block">
                                    {asset.percentChange}
                                    <i class="ti ti-arrow-bear-right"></i>
                                </span>
                                <span class="d-block">{asset.amountChange}</span
                                >
                            </div>
                        </div>
                        <div class="d-flex gap-2">
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-sm btn-light flex-fill"
                                >Short</SpkButton
                            >
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-sm btn-primary-light flex-fill"
                                >Buy</SpkButton
                            >
                        </div>
                    </Card>
                </Col>
            {/each}
        </Row>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xxl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Recent Activities</div>
                <a href="#!" class="fs-12 text-muted py-1 tag-a">
                    View All<i class="ti ti-arrow-narrow-right ms-1"></i>
                </a>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled stocks-recent-activities-list">
                    {#each Recentstocks as stock}
                        <li>
                            <div
                                class="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2"
                            >
                                <div
                                    class="d-flex flex-fill align-items-center"
                                >
                                    <div class="me-2">
                                        <span class="avatar avatar-md p-1">
                                            <Image
                                                width={40}
                                                height={40}
                                                src={stock.logo}
                                                alt={stock.name}
                                                class="invert-1"
                                            />
                                        </span>
                                    </div>
                                    <div class="lh-1">
                                        <span
                                            class="fw-semibold d-block mb-2 text-default"
                                        >
                                            {stock.name}
                                        </span>
                                        <span class="text-muted"
                                            >{stock.symbol}</span
                                        >
                                    </div>
                                </div>
                                <div class="fw-medium fs-14 text-end">
                                    <span class="d-block"
                                        >{stock.valueChange}</span
                                    >
                                </div>
                            </div>
                            <div>
                                <Progress
                                    color={stock.progressColor}
                                    class="progress-xs"
                                    animated
                                    striped
                                    value={stock.progressBarWidth}
                                />
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">My Stocks</div>
                <div class="d-flex flex-wrap gap-2">
                    <div>
                        <Input
                            class="form-control-sm"
                            type="text"
                            placeholder="Search Here"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <SpkDropdown
                        option={SortByDropdown}
                        ToggleClass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "S.No" },
                        { title: "Name" },
                        { title: "Price" },
                        { title: "Date Invested" },
                        { title: "Market Cap" },
                        { title: "Price Change" },
                        { title: "Volume" },
                        { title: "Actions" },
                    ]}
                >
                    {#each StockTable as stock}
                        <tr>
                            <td>{stock.id}</td>
                            <td>
                                <div class="d-flex align-items-start gap-3">
                                    <div class="lh-1">
                                        <span class="avatar avatar-sm">
                                            <Image
                                                width={28}
                                                height={28}
                                                src={stock.logo}
                                                alt={stock.name}
                                                class="invert-1"
                                            />
                                        </span>
                                    </div>
                                    <div class="flex-fill lh-1">
                                        <a
                                            href="#!"
                                            class="d-block mb-1 fs-14 fw-medium"
                                        >
                                            {stock.name}
                                        </a>
                                        <span class="d-block fs-12 text-muted"
                                            >{stock.symbol}</span
                                        >
                                    </div>
                                </div>
                            </td>
                            <td>{stock.price}</td>
                            <td>
                                <span class="text-muted">{stock.date}</span>
                            </td>
                            <td>{stock.marketCap}</td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`badge ${stock.change.includes("-") ? "bg-danger-transparent text-danger" : "bg-success-transparent text-success"}`}
                                >
                                    {stock.change}
                                </SpkBadge>
                            </td>
                            <td>{stock.volume}</td>
                            <td>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="btn-list">
                                    <a
                                        href="#!"
                                        id={`stocks-${stock.id}`}
                                        class="btn btn-icon btn-primary-light btn-sm"
                                    >
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                    <SpkTooltips
                                        placement="top"
                                        content="Edit"
                                        targetId={`stocks-${stock.id}`}
                                    ></SpkTooltips>
                                    <a
                                        href="#!"
                                        id={`stocks1-${stock.id}`}
                                        class="btn btn-icon btn-danger-light btn-sm"
                                    >
                                        <i class="bi bi-trash"></i>
                                    </a>
                                    <SpkTooltips
                                        placement="top"
                                        content="Delete"
                                        targetId={`stocks1-${stock.id}`}
                                    ></SpkTooltips>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0">
                <div class="d-flex align-items-center">
                    <div>
                        Showing 6 Entries <i
                            class="bi bi-arrow-right ms-2 fw-semibold"
                        ></i>
                    </div>
                    <div class="ms-auto">
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-4"
                        >
                            <Pagination class="mb-0 customPaginationPageBottom">
                                <PaginationItem disabled>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        >1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        >2</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink class="text-primary"
                                        on:click={(e) => e.preventDefault()}
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

<!-- End:: row-4 -->
