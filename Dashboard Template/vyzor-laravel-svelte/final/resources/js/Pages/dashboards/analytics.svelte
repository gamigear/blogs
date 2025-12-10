<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkAnalyticscard from "@/shared/@spk/dashboards-reusable/spk-analyticscard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        AnalyticData,
        Audienceoptions,
        Averageoptions,
        BrowsersData,
        CountryData,
        Devices,
        Engagementdata,
        InfluencerData,
        ListItemsData,
        Sessionoptions,
        Timeoptions,
    } from "@/shared/data/dashboards/analyticsdata";
    import {
        dayDropdown,
        DropdownDownload,
        SortByDropdown,
    } from "@/shared/data/uielements/dropdowndata";
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
</script>

<!-- Page Title -->
<svelte:head>
    <title>Analytics | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Analytics" activepage="Dashboards" page="Analytics" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={9}>
        <Row>
            {#each AnalyticData as idx}
                <Col xxl={3} lg={6}>
                    <SpkAnalyticscard analytic={idx} />
                </Col>
            {/each}
            <Col xxl={4}>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Sessions By Device</div>
                        <SpkDropdown
                            option={dayDropdown}
                            CustomClass="ms-auto"
                            ToggleClass="p-0 fs-12 text-muted border-0"
                            parent={`View All <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        />
                    </CardHeader>
                    <CardBody>
                        <div id="sessions-device">
                            <Spkapexcharts
                                id="sessions-device"
                                options={Sessionoptions}
                            />
                        </div>
                    </CardBody>
                    <CardFooter class="p-0">
                        <div class="row">
                            {#each Devices as device}
                                <div class="col">
                                    <div
                                        class={`p-3 text-center ${device.border ? "border-sm-end" : ""}`}
                                    >
                                        <h5 class="fw-semibold mb-1">
                                            {device.percentage}
                                        </h5>
                                        <span class="fs-12 d-block"
                                            >{device.label}</span
                                        >
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </CardFooter>
                </Card>
            </Col>
            <Col xxl={8}>
                <Card class=" custom-card">
                    <CardHeader class="">
                        <div class="card-title">Audience Metrics</div>
                    </CardHeader>
                    <CardBody>
                        <div id="audience-metrics">
                            <Spkapexcharts
                                id="audience-metrics"
                                options={Audienceoptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={4}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Visitors By Countries</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-wrap visitors-countries-table"
                            header={[
                                { title: "S.No" },
                                { title: "Country" },
                                { title: "Visitors" },
                            ]}
                        >
                            {#each CountryData as data}
                                <tr>
                                    <td class="border-bottom-0">{data.rank}</td>
                                    <td class="border-bottom-0">
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs">
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={data.flagUrl}
                                                        alt={data.country}
                                                    />
                                                </span>
                                            </div>
                                            <div class="fw-semibold">
                                                {data.country}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-bottom-0">
                                        <span class="fs-12 text-muted me-2">
                                            (
                                            <i
                                                class={`ti ti-arrow-${data.percentageChange === "0.85%" ? "down text-danger" : "up text-success"} fs-16 align-middle`}
                                            ></i>
                                            {data.percentageChange})
                                        </span>
                                        {data.count.toLocaleString()}
                                    </td>
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={8}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Top Campaigns</div>
                        <SpkDropdown
                            option={DropdownDownload}
                            ToggleClass="p-0 fs-12 text-muted tag-link border-0"
                            parent={`View All <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        />
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                            header={[
                                { title: "Provider" },
                                { title: "Sales" },
                                { title: "Goal" },
                                { title: "Status" },
                                {
                                    title: "Action",
                                    headerClassname: "text-center",
                                },
                            ]}
                        >
                            {#each InfluencerData as data}
                                <tr>
                                    <td class={data.borderClass}>
                                        <div
                                            class="d-flex align-items-center lh-1"
                                        >
                                            <span
                                                class="avatar avatar-sm p-1 bg-light me-2"
                                            >
                                                <Image
                                                    src={data.avatarUrl}
                                                    alt={data.name}
                                                />
                                            </span>
                                            <div>
                                                <p class="fw-medium mb-1">
                                                    {data.name}
                                                </p>
                                                <span class="fs-12 text-muted"
                                                    >{data.role}</span
                                                >
                                            </div>
                                        </div>
                                    </td>
                                    <td class={data.borderClass}
                                        >{data.earnings}</td
                                    >
                                    <td class={data.borderClass}>
                                        <span
                                            class={`text-${data.percentageColor}`}
                                        >
                                            {data.percentage}
                                        </span>
                                    </td>
                                    <td class={data.borderClass}>
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`${data.status === "Achieved" ? "bg-success-transparent" : "bg-info-transparent"}`}
                                        >
                                            {data.status}
                                        </SpkBadge>
                                    </td>
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <td class={`text-end ${data.borderClass}`}>
                                        <div class="btn-list">
                                            <a
                                                href="#!"
                                                id={`icon-${data.id}`}
                                                class="btn btn-light btn-icon btn-sm"
                                            >
                                                <i class="bi bi-pencil-square"
                                                ></i>
                                            </a>
                                            <SpkTooltips
                                                placement="top"
                                                content="Edit"
                                                targetId={`icon-${data.id}`}
                                            ></SpkTooltips>
                                            <a
                                                href="#!"
                                                id={`analytics-${data.id}`}
                                                class="btn btn-light btn-icon btn-sm"
                                            >
                                                <i class="bi bi-trash"></i>
                                            </a>
                                            <SpkTooltips
                                                placement="top"
                                                content="Delete"
                                                targetId={`analytics-${data.id}`}
                                            ></SpkTooltips>
                                        </div>
                                    </td>
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Engagement Metrics</div>
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
                                {
                                    title: "S.No",
                                    headerClassname: "text-center",
                                },
                                { title: "User" },
                                { title: "Sessions" },
                                { title: "Country" },
                                { title: "Page Views" },
                                { title: "Bounce Rate" },
                                {
                                    title: "Conversion Rate",
                                    headerClassname: "text-center",
                                },
                            ]}
                        >
                            {#each Engagementdata as user}
                                <tr>
                                    <td class="text-center">{user.rank}</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-sm avatar-rounded"
                                                >
                                                    <Image
                                                        width={28}
                                                        height={28}
                                                        src={user.avatarUrl}
                                                        alt={user.name}
                                                    />
                                                </span>
                                            </div>
                                            <div>{user.name}</div>
                                        </div>
                                    </td>
                                    <td>{user.clicks}</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-xs avatar-rounded"
                                                >
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={user.countryFlagUrl}
                                                        alt={user.country}
                                                    />
                                                </span>
                                            </div>
                                            <div>{user.country}</div>
                                        </div>
                                    </td>
                                    <td class="">{user.views}</td>
                                    <td class="">{user.conversionRate}</td>
                                    <td class="text-center"
                                        >{user.percentage}</td
                                    >
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                    <CardFooter class="border-top-0">
                        <div class="d-flex align-items-center flex-wrap">
                            <div>
                                Showing 5 Entries <i
                                    class="bi bi-arrow-right ms-2 fw-semibold"
                                ></i>
                            </div>
                            <div class="ms-auto">
                                <nav
                                    aria-label="Page navigation"
                                    class="pagination-style-4"
                                >
                                    <Pagination
                                        class="mb-0 customPaginationPageBottom"
                                    >
                                        <PaginationItem>
                                            <PaginationLink
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                href="#">Prev</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                href="#">1</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink 
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                href="#">2</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink class="text-primary"
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                href="#">next</PaginationLink
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
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Browser Insights</div>
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled browser-insights-list">
                            {#each BrowsersData as browser}
                                <li>
                                    <div class="d-flex align-items-start gap-3">
                                        <div class="lh-1">
                                            <span
                                                class="avatar avatar-rounded avatar-sm"
                                            >
                                                <Image
                                                    width={28}
                                                    height={28}
                                                    src={browser.imageUrl}
                                                    alt={browser.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-medium"
                                                >{browser.name}</span
                                            >
                                            <span
                                                class="d-block text-muted fs-12"
                                                >{browser.company}</span
                                            >
                                        </div>
                                        <div class="text-end w-25">
                                            <span
                                                class="d-block mb-1 fw-semibold"
                                                >{browser.downloads.toLocaleString()}</span
                                            >
                                            <Progress
                                                class="progress-xs w-75 ms-auto"
                                                color={browser.progressColor}
                                                value={browser.progress}
                                            />
                                            <!-- <SpkProgress
                                                variant={browser.progressColor}
                                                animated
                                                striped
                                                mainClass="progress-xs w-75 ms-auto"
                                                now={browser.progress}
                                            /> -->
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
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Users By Time Of Week</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <div id="users-by-time">
                            <Spkapexcharts
                                id="users-by-time"
                                options={Timeoptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Top Referral Pages</div>
                    </CardHeader>
                    <CardBody>
                        <div class="d-flex align-items-center mb-3 flex-wrap">
                            <h4 class="fw-bold mb-0">4,289</h4>
                            <div class="ms-2">
                                <SpkBadge
                                    Color=""
                                    CustomClass="badge bg-success-transparent"
                                    >1.02<i
                                        class="ri-arrow-up-s-fill align-mmiddle ms-1"
                                    ></i></SpkBadge
                                >
                                <span class="text-muted ms-1 text-nowrap"
                                    >compared to last week</span
                                >
                            </div>
                        </div>
                        <div
                            class="progress-stacked progress-animate progress-sm mb-4"
                        >
                            <div
                                class="progress-bar"
                                role="progressbar"
                                style="width: 21%"
                                aria-valuenow={21}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                            <div
                                class="progress-bar bg-info"
                                role="progressbar"
                                style="width:26%"
                                aria-valuenow={26}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style="width: 35%;"
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                            <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style="width: 18%;"
                                aria-valuenow={18}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                        </div>
                        <ul class="list-unstyled mb-0 pt-2 top-referral-pages">
                            {#each ListItemsData as item}
                                <li class={item.className}>
                                    <div
                                        class="d-flex align-items-center justify-content-between"
                                    >
                                        <div>{item.path}</div>
                                        <div class="fs-12 text-muted">
                                            {item.views}
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
                        <div class="card-title">Average Sessions</div>
                    </CardHeader>
                    <CardBody class="pb-0">
                        <div
                            class="d-flex gap-3 flex-wrap align-items-center mb-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32px"
                                height="32px"
                                class="text-primary bg-primary-transparent rounded-1 px-1"
                                viewBox="0 0 24 24"
                                ><g fill="currentColor"
                                    ><path fill-opacity="0.5" d="M8 13h6v4H8z"
                                    ></path><path d="M6 6H4v12h2zm14 1H8v4h12z"
                                    ></path></g
                                ></svg
                            >
                            <div>
                                <h6 class="fw-medium mb-0">3m 45s</h6>
                            </div>
                            <div class="ms-auto text-muted fs-11 text-end">
                                <div class="fw-medium">From Last Week</div>
                                <span class="text-success fw-semibold">
                                    1.25% <i
                                        class="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"
                                    ></i></span
                                >
                            </div>
                        </div>
                        <div id="analytics-avgsession">
                            <Spkapexcharts
                                id="analytics-avgsession"
                                options={Averageoptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->
