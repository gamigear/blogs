<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkSocialcard from "@/shared/@spk/dashboards-reusable/spk-socialcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        AcivitySocial,
        Audiencedata,
        EngagementOptions,
        Insightsdata,
        MetricsOptions,
        SocialCards,
        SocialGenderoptions,
        SocialMediaData,
        SocialMediaOptions,
        Suggestion,
    } from "@/shared/data/dashboards/socialmediadata";
    import {
        socialmediaDropdown1,
        socialmediaDropdown2,
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
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>SocialMedia | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Social Media"
    activepage="Dashboards"
    page="Social Media"
/>
<!-- Page Header Close -->

<Row>
    <Col xxl={9}>
        <Row>
            {#each SocialCards as idx}
                <Col xxl={3} md={6}>
                    <SpkSocialcard
                        cardClass="dashboard-main-card"
                        media={idx}
                    />
                </Col>
            {/each}
            <Col xl={8}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Profile Visits</div>
                    </CardHeader>
                    <CardBody>
                        <div id="profile-analysis">
                            <Spkapexcharts
                                id="profile-analysis"
                                options={SocialMediaOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Audience By Gender</div>
                    </CardHeader>
                    <CardBody>
                        <div id="audience-by-gender">
                            <Spkapexcharts
                                id="audience-by-gender"
                                options={SocialGenderoptions}
                            />
                        </div>
                        <div class="row mt-0">
                            <div
                                class="col-6 border-end border-inline-end-dashed text-center"
                            >
                                <p class="text-muted mb-1 fs-12">Male</p>
                                <h6 class="text-primary mb-0">12.34K</h6>
                            </div>
                            <div class="col-6 text-center">
                                <p class="text-muted mb-1 fs-12">Female</p>
                                <h6 class="text-secondary mb-0">10.19K</h6>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={6}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Top Audience Countries</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                            header={[
                                { title: "S.No" },
                                { title: "Country" },
                                { title: "Engagement" },
                                { title: "Followers" },
                            ]}
                        >
                            {#each Audiencedata as row}
                                <tr>
                                    <td class={row.borderClass}>{row.id}</td>
                                    <td class={row.borderClass}>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-sm"
                                                >
                                                    <Image
                                                        src={`../images/flags/${row.flag}`}
                                                        alt={row.country}
                                                    />
                                                </span>
                                            </div>
                                            <div class="fw-semibold">
                                                {row.country}
                                            </div>
                                        </div>
                                    </td>
                                    <td class={row.borderClass}>
                                        <span class="d-block">
                                            {row.likes.toLocaleString()}
                                            <i
                                                class="ti ti-thumb-up text-muted fs-18"
                                            ></i>
                                        </span>
                                    </td>
                                    <td class={row.borderClass}>
                                        <div class="d-block">
                                            {row.count}
                                            <span
                                                class={`fs-12 ${row.change > 0 ? "text-success" : "text-danger"} ms-1 d-inline-flex`}
                                            >
                                                <i
                                                    class={`${row.change > 0 ? "ti ti-trending-up" : "ti ti-trending-down"} me-1 align-middle`}
                                                ></i>
                                                {Math.abs(row.change).toFixed(
                                                    2,
                                                )}%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={6}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Post Insights</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                            header={[
                                { title: "Post Name" },
                                { title: "Posted" },
                                { title: "Platform" },
                                { title: "Views" },
                                { title: "Action" },
                            ]}
                        >
                            {#each Insightsdata as row}
                                <tr>
                                    <td class={row.borderClass}>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm">
                                                    <Image
                                                        width={28}
                                                        height={28}
                                                        src={`../images/media/${row.image}`}
                                                        alt={row.title}
                                                    />
                                                </span>
                                            </div>
                                            <span class="fw-medium"
                                                >{row.title}</span
                                            >
                                        </div>
                                    </td>
                                    <td class={row.borderClass}>{row.date}</td>
                                    <td class={row.borderClass}>
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`bg-${row.platformColor}-transparent`}
                                            >{row.platform}</SpkBadge
                                        >
                                    </td>
                                    <td class={row.borderClass}
                                        >{row.followers}</td
                                    >
                                    <td class={`text-end ${row.borderClass}`}>
                                        <SpkDropdown
                                            option={socialmediaDropdown2}
                                            ToggleClass="btn btn-icon btn-sm btn-primary-light no-caret"
                                            parent={`<i class="ti ti-dots-vertical"></i>`}
                                        />
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
                        <div class="card-title">
                            Social Media Performance Overview
                        </div>
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
                                ToggleClass=" btn btn-sm btn-wave waves-effect waves-light no-caret btn-primary"
                                parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                            />
                        </div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                            showCheckbox={true}
                            header={[
                                { title: "Platform" },
                                { title: "Posts" },
                                { title: "Likes" },
                                { title: "Shares" },
                                { title: "Comments" },
                                { title: "Impressions" },
                                { title: "Followers" },
                                { title: "CTR (%)" },
                                { title: "Actions" },
                            ]}
                        >
                            {#each SocialMediaData as data}
                                <tr>
                                    <td>
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id={data.id}
                                            value=""
                                            aria-label="..."
                                            defaultChecked={data.id == 1 ||
                                                data.id == 4 ||
                                                data.id == 5}
                                        />
                                    </td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class={`avatar avatar-sm bg-${data.color}-transparent`}
                                                >
                                                    <i
                                                        class={`ri ${data.avatar} fs-5`}
                                                    ></i>
                                                </span>
                                            </div>
                                            <div>{data.platform}</div>
                                        </div>
                                    </td>
                                    <td>{data.followers}</td>
                                    <td>{data.impressions.toLocaleString()}</td>
                                    <td>{data.clicks.toLocaleString()}</td>
                                    <td>{data.conversions}</td>
                                    <td>{data.conversionRate}</td>
                                    <td>{data.reach}</td>
                                    <td>
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`bg-${data.badgeColor}-transparent`}
                                            >{data.growth}</SpkBadge
                                        >
                                    </td>
                                    <td>
                                        <SpkDropdown
                                            end
                                            option={socialmediaDropdown1}
                                            ToggleClass="btn btn-icon btn-sm btn-light no-caret"
                                            Caret={false}
                                            parent={`<i class="ti ti-dots-vertical"></i>`}
                                        />
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
                                    class="pagination-style-2"
                                >
                                    <Pagination
                                        class="mb-0 flex-wrap customPaginationPageBottom"
                                    >
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                >Prev</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                >1</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink
                                                href="#"
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                >2</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                ><i class="bi bi-three-dots"></i></PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                on:click={(e) =>
                                                    e.preventDefault()}
                                                >17</PaginationLink
                                            >
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                on:click={(e) =>
                                                    e.preventDefault()}
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
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Recent Activity</div>
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled social-recent-activity-list">
                            {#each AcivitySocial as activity}
                                <li>
                                    <div class="d-flex align-items-start gap-3">
                                        <div class="lh-1">
                                            <span
                                                class={`avatar avatar-md avatar-rounded ${activity.badgeColor}`}
                                            >
                                                <i
                                                    class={`fs-5 ${activity.icon}`}
                                                ></i>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div
                                                class="d-flex align-items-start gap-2 justify-content-between mb-1"
                                            >
                                                <span
                                                    class="fw-semibold d-block"
                                                    >{activity.platform}</span
                                                >
                                                <SpkBadge
                                                    Color=""
                                                    CustomClass={`${activity.badgeColor}`}
                                                    >{activity.time}</SpkBadge
                                                >
                                            </div>
                                            <div
                                                class="fs-13 text-muted social-activity"
                                            >
                                                {activity.activity}
                                            </div>
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
                        <div class="card-title">Audience Age Metrics</div>
                    </CardHeader>
                    <CardBody class="py-0">
                        <div id="audience-age-metrics">
                            <Spkapexcharts
                                id="audience-age-metrics"
                                options={MetricsOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Suggestions</div>
                        <a href="#!" class="text-muted"
                            >View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled social-suggestions-list">
                            {#each Suggestion as user}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-3"
                                    >
                                        <div class="lh-1">
                                            <span class="avatar avatar-md">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={user.imageSrc}
                                                    alt={user.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block"
                                                >{user.name}</span
                                            >
                                            <span class="text-muted d-block"
                                                >{user.mutualFriends}</span
                                            >
                                        </div>
                                        <div>
                                            <SpkButton
                                                color="light"
                                                customClass="btn btn-sm btn-icon border"
                                            >
                                                <i class="ri-user-add-line"></i>
                                            </SpkButton>
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
                        <div class="card-title">Engagement</div>
                        <div class="d-flex align-items-center gap-2">
                            <span class="fs-12 text-success"
                                ><i class="ti ti-arrow-up"></i>2.45%</span
                            >
                            <h5 class="fw-semibold mb-0">231,232</h5>
                        </div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <div id="social-engagement">
                            <Spkapexcharts
                                id="social-engagement"
                                options={EngagementOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>
