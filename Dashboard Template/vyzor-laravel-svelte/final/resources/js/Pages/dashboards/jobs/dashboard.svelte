<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkListcard from "@/shared/@spk/application-reusable/spk-listcard.svelte";
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Acquisitions,
        GenderStats,
        Jobsactivities,
        JobsCards,
        JobsEmployeeOptions,
        JobsOverviewOptions,
        JobsPostings,
        JobsRecent,
        JobsTable,
    } from "@/shared/data/dashboards/jobs/jobsdashboardata";
    import { SortByDropdown } from "@/shared/data/uielements/dropdowndata";
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
    <title>Dashboard | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Dashboard"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Dashboard"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row class="row-cols-xxl-5">
    {#each JobsCards as idx}
        <Col>
            <SpkListcard
                titleClass="fw-normal fs-14"
                jobsCard={true}
                list={idx}
            />
        </Col>
    {/each}
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Employees Performance</div>
            </CardHeader>
            <CardBody>
                <div id="employees-performance">
                    <Spkapexcharts
                        id="employees-performance"
                        options={JobsEmployeeOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Recent Activity</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled jobs-recent-activity-list">
                    {#each Jobsactivities as activity}
                        <li>
                            <div
                                class="d-flex align-items-start gap-3 flex-wrap flex-xxl-nowrap"
                            >
                                <div>
                                    <span
                                        class="avatar avatar-md avatar-rounded"
                                    >
                                        <Image
                                            src={activity.avatar}
                                            alt={activity.name}
                                        />
                                    </span>
                                </div>
                                <div>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <div class="fw-semibold">
                                            {activity.name}
                                        </div>
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`${activity.badgeClass}`}
                                        >
                                            {activity.badgeText}
                                        </SpkBadge>
                                    </div>
                                    <div class="fs-13 description mb-1">
                                        {activity.description}
                                    </div>
                                    <span class="d-block fs-12 text-muted"
                                        >{activity.timestamp}</span
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
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Candidates Overview</div>
            </CardHeader>
            <CardBody>
                <div id="candidates-overview">
                    <Spkapexcharts
                        id="candidates-overview"
                        options={JobsOverviewOptions}
                    />
                </div>
            </CardBody>
            <CardFooter class="p-0">
                <ListGroup class="list-group-flush">
                    {#each GenderStats as stat}
                        <ListGroupItem class="">
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md bg-${stat.color}-transparent svg-${stat.color}`}
                                    >
                                        {@html stat.icon}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="fs-13 d-block"
                                        >{stat.gender}</span
                                    >
                                    <h5 class="fw-semibold mb-0">
                                        {stat.count}
                                    </h5>
                                </div>
                                <div class="text-end">
                                    <span
                                        class={stat.percentageChange > 0
                                            ? "text-success"
                                            : "text-danger"}
                                    >
                                        <i
                                            class={`ti ti-arrow-narrow-${stat.percentageChange > 0 ? "up" : "down"} me-1`}
                                        ></i>
                                        {stat.percentageChange}%
                                    </span>
                                    <span class="d-block fs-13 text-muted"
                                        >This Year</span
                                    >
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xxl={6}>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Recently Added Jobs</div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Company" },
                        { title: "Job Role" },
                        { title: "Location" },
                        { title: "Job Type" },
                    ]}
                >
                    {#each JobsTable as job, index}
                        <tr
                            class={index === JobsTable.length - 1
                                ? "border-bottom-0"
                                : ""}
                        >
                            <td
                                class={index === JobsTable.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                <div class="d-flex align-items-center gap-2">
                                    <span
                                        class="avatar avatar-sm bg-light avatar-rounded"
                                    >
                                        <Image
                                            width={28}
                                            height={28}
                                            src={job.companyLogo}
                                            alt={job.companyName}
                                        />
                                    </span>
                                    <a href="#!" class="fw-medium">
                                        {job.companyName}
                                    </a>
                                </div>
                            </td>
                            <td
                                class={index === JobsTable.length - 1
                                    ? "border-bottom-0"
                                    : ""}>{job.position}</td
                            >
                            <td
                                class={index === JobsTable.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                <span class="text-muted">
                                    <i class="ti ti-map-pin me-1"></i>
                                    {job.location}
                                </span>
                            </td>
                            <td
                                class={index === JobsTable.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${job.badgeClass} rounded-pill`}
                                    >{job.jobType}</SpkBadge
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Acquisitions</div>
            </CardHeader>
            <CardBody>
                <div class="progress progress-md mb-4 mt-2">
                    <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width:52%;"
                        aria-valuenow={52}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div
                        class="progress-bar bg-secondary"
                        role="progressbar"
                        style="width:12%;"
                        aria-valuenow={12}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width:16%;"
                        aria-valuenow={16}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width:12%;"
                        aria-valuenow={12}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width:8%;"
                        aria-valuenow={8}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                </div>
                <ListGroup class="acquisitions-list mt-1">
                    {#each Acquisitions as item}
                        <ListGroupItem class="">
                            {item.label}
                            <SpkBadge
                                Color=""
                                CustomClass={`float-end ${item.badgeClass}`}
                                >{item.count}</SpkBadge
                            >
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={12}>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Recent Jobs</div>
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup
                    class="list-group-flush overflow-y-scroll"
                    id="recent-jobs"
                >
                    {#each JobsRecent as job, index}
                        <ListGroupItem
                            class={`${index === 0 ? "border-top-0" : ""} border-start-0 border-end-0 ${index === JobsRecent.length - 1 ? "border-bottom-0" : ""}`}
                        >
                            <a href="#!">
                                <div
                                    class="d-flex align-items-center flex-wrap"
                                >
                                    <div class="me-2 lh-1">
                                        <span
                                            class={`avatar avatar-md avatar-rounded ${job.bgClass}`}
                                            >{job.initials}</span
                                        >
                                    </div>
                                    <div class="flex-fill">
                                        <p class="mb-0 fw-semibold">
                                            {job.title}
                                        </p>
                                        <p class="fs-12 text-muted mb-0">
                                            {job.companyInfo} - {job.timeInfo}
                                        </p>
                                    </div>
                                    <div class="text-end">
                                        <p
                                            class={`mb-0 fs-12 ${job.jobTypeColor}`}
                                        >
                                            {job.jobType}
                                        </p>
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`badge ${job.badgeClass}`}
                                            >{job.badge}</SpkBadge
                                        >
                                    </div>
                                </div>
                            </a>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Recent Job Postings</div>
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
                        Caret={false}
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <div class="table-responsive">
                    <SpkTablescomponent
                        tableClass="text-nowrap"
                        header={[
                            { title: "S.No" },
                            { title: "Job Title" },
                            { title: "Department" },
                            { title: "Company Name" },
                            { title: "Location" },
                            { title: "Applications" },
                            { title: "Status" },
                            { title: "Posted By" },
                            { title: "Posted Date" },
                            { title: "Actions" },
                        ]}
                    >
                        {#each JobsPostings as job}
                            <tr>
                                <td>{job.id}</td>
                                <td>{job.title}</td>
                                <td>{job.department}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>{job.applicants}</td>
                                <td>
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`${job.status === "Active" ? "bg-success-transparent" : "bg-danger-transparent"}`}
                                    >
                                        {job.status}
                                    </SpkBadge>
                                </td>
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
                                                    src={job.avatar}
                                                    alt={job.applicantName}
                                                />
                                            </span>
                                        </div>
                                        <div>{job.applicantName}</div>
                                    </div>
                                </td>
                                <td>{job.datePosted}</td>
                                <td>
                                    <div class="btn-list">
                                        <SpkButton
                                            color=""
                                            customClass="btn btn-primary-light btn-icon btn-sm"
                                        >
                                            <i class="ti ti-edit"></i>
                                        </SpkButton>
                                        <SpkButton
                                            color=""
                                            customClass="btn btn-danger-light btn-icon btn-sm"
                                        >
                                            <i class="ti ti-trash"></i>
                                        </SpkButton>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </SpkTablescomponent>
                </div>
            </CardBody>
            <CardFooter class="border-top-0">
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

<!-- End:: row-4 -->
