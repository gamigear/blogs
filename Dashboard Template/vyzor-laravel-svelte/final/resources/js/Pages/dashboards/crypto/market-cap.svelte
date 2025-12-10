<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkMarketcard from "@/shared/@spk/dashboards-reusable/crypto-reusable/spk-marketcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        MarketData,
        MartketTable,
        PortfolioData,
    } from "@/shared/data/dashboards/crypto/marketdata";
    import { MarketcapDropdown } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        ListGroup,
        ListGroupItem,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>MarketCap | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Market Cap"
    subTitle="Crypto"
    activepage="Dashboards"
    page="Market Cap"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    {#each MarketData as market}
        <Col xxl={3} xl={6} lg={12} class="">
            <SpkMarketcard cardClass="overflow-hidden" {market} />
        </Col>
    {/each}
    <Col xxl={3} xl={6} lg={12}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">My Top Currencies</div>
                <div>
                    <a
                        href="#!"
                        class="fw-medium text-success fs-13 text-decoration-underline"
                        >View All</a
                    >
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup
                    class="list-group list-group-flush custom-market-cap"
                >
                    {#each PortfolioData as item}
                        <ListGroupItem>
                            <div
                                class="d-flex align-items-center justify-content-between flex-wrap gap-3"
                            >
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span
                                            class="avatar avatar-sm p-1 bg-light"
                                        >
                                            <Image
                                                src={item.imgSrc}
                                                alt={item.name}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-medium"
                                            >{item.name}</span
                                        >
                                    </div>
                                </div>
                                <div>
                                    <span class="fw-medium d-block"
                                        >{item.quantity}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span class="fw-medium d-block"
                                        >{item.value}</span
                                    >
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->

<!-- Start::row-2  -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Crypto MarketCap</div>
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
                        option={MarketcapDropdown}
                        ToggleClass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        Caret={false}
                    />
                    <div>
                        <SpkButton
                            color=""
                            customClass="btn btn-light btn-sm btn-wave border"
                            >View All</SpkButton
                        >
                    </div>
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "" },
                        { title: "#", headerClassname: "fw-medium" },
                        { title: "Crypto Name" },
                        { title: "MarketCap" },
                        { title: "Price (USD)" },
                        { title: "1h Change" },
                        { title: "24h Change" },
                        { title: "Volume (24h)" },
                        { title: "Circulating Supply" },
                        { title: "last 1Week" },
                        { title: "Trade" },
                    ]}
                >
                    {#each MartketTable as crypto}
                        <tr>
                            <td class="text-center">
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <a href="#!">
                                    <i class="ri-star-line fs-16 text-muted"
                                    ></i>
                                </a>
                            </td>
                            <td>{crypto.rank}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-xs avatar-rounded"
                                        >
                                            <Image
                                                src={`../../images/crypto-currencies/square-color/${crypto.name}.svg`}
                                                alt={crypto.name}
                                            />
                                        </span>
                                    </div>
                                    <div class="fw-medium">
                                        <a href="#!"
                                            >{`${crypto.name} (${crypto.symbol})`}</a
                                        >
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="fw-medium">{crypto.marketCap}</span
                                >
                            </td>
                            <td>
                                <span class="fw-medium">
                                    <a href="#!">{crypto.price}</a>
                                </span>
                            </td>
                            <td>
                                <span
                                    class={`fw-medium text-${crypto.priceChangeColor}`}
                                >
                                    <i
                                        class={`ti ti-arrow-narrow-${crypto.priceIcon} fs-15 fw-medium`}
                                    ></i>
                                    {crypto.priceChange1h}
                                </span>
                            </td>
                            <td>
                                <span
                                    class={`fw-medium text-${crypto.priceChange24hColor}`}
                                >
                                    <i
                                        class={`ti ti-arrow-narrow-${crypto.priceIcons} fs-15 fw-medium`}
                                    ></i>
                                    {crypto.priceChange24h}
                                </span>
                            </td>
                            <td>
                                <a href="#!">
                                    <span class="d-block fw-medium"
                                        >{crypto.volume}</span
                                    >
                                </a>
                            </td>
                            <td>
                                <a href="#!">
                                    <span class="fw-medium d-block"
                                        >{crypto.circulatingSupply}</span
                                    >
                                </a>
                            </td>
                            <td>
                                <div id={crypto.chartId}>
                                    <Spkapexcharts
                                        id={crypto.chartId}
                                        options={crypto.chartOptions}
                                    />
                                </div>
                            </td>
                            <td>
                                <SpkButton
                                    color=""
                                    customClass="btn btn-success-light btn-sm"
                                    >Trade</SpkButton
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0 ">
                <nav aria-label="Page navigation" class="pagination-style-2">
                    <Pagination
                        class="mb-0 flex-wrap justify-content-end d-flex customPaginationPageBottom"
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
                                ><i class="bi bi-three-dots"></i></PaginationLink
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
                                class="text-primary">Next</PaginationLink
                            >
                        </PaginationItem>
                    </Pagination>
                </nav>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!-- End::row-2  -->
