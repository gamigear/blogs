<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkSchoolcard from "@/shared/@spk/dashboards-reusable/spk-schoolcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Analyticspayments,
        SchoolAttendanceOptions,
        SchoolCards,
        SchoolEvents,
        SchoolOptions,
        SchoolOverviewOptions,
        StudentActivities,
        StudentPayments,
        TopStudents,
    } from "@/shared/data/dashboards/schooldata";
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

    import { onMount } from "svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>School | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="School" activepage="Dashboards" page="School" />
<!-- Page Header Close -->
<!-- Start:: row-1 -->

<Row>
    <Col xxl={3}>
        <Row>
            {#each SchoolCards as idx}
                <Col xxl={12} lg={6} class="">
                    <SpkSchoolcard
                        cardClass={idx.cardClass}
                        bodyClass={idx.bodyClass}
                        school={idx.school}
                    />
                </Col>
            {/each}
        </Row>
    </Col>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">School Revenue</div>
            </CardHeader>
            <CardBody>
                <div id="school-revenue">
                    <Spkapexcharts
                        id="school-revenue"
                        options={SchoolOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Events</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled school-events-list my-1">
                    {#each SchoolEvents as event}
                        <li class={event.cardClass}>
                            <div
                                class="d-flex align-items-center gap-3 flex-wrap flex-xxl-nowrap"
                            >
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md ${event.bgClass}`}
                                    >
                                        <i class={`ti ${event.icon} fs-5`}></i>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <div
                                        class="d-flex align-items-center gap-3 justify-content-between flex-wrap"
                                    >
                                        <span class="d-block fw-semibold"
                                            >{event.title}</span
                                        >
                                        <SpkBadge
                                            Color=""
                                            CustomClass=" bg-light text-default border"
                                            >{event.date}</SpkBadge
                                        >
                                    </div>
                                    <div
                                        class="text-muted fs-13 event-description"
                                    >
                                        {event.description}
                                    </div>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Students Activity</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled students-activity-list">
                    {#each StudentActivities as activity}
                        <li class={activity.listClass}>
                            <div class="d-flex align-items-start gap-2">
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-md avatar-rounded"
                                    >
                                        {#if activity.avatar}
                                            <Image
                                                src={activity.avatar}
                                                alt={activity.name}
                                            />
                                        {:else}
                                            <span
                                                class="avatar avatar-md avatar-rounded bg-warning"
                                            >
                                                {activity.initials}
                                            </span>
                                        {/if}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div
                                        class="d-flex align-items-start justify-content-between gap-3"
                                    >
                                        <span class="d-block fw-semibold"
                                            >{activity.name}</span
                                        >
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`badge ${activity.badgeClass}`}
                                            >{activity.date}</SpkBadge
                                        >
                                    </div>
                                    <span class="fs-13 text-muted"
                                        >{activity.description}</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Students Overview</div>
            </CardHeader>
            <CardBody>
                <div id="students-overview">
                    <Spkapexcharts
                        id="students-overview"
                        options={SchoolOverviewOptions}
                    />
                </div>
            </CardBody>
            <CardFooter>
                <Row class="g-0">
                    <div class="col border-end border-inline-end-dashed">
                        <div class="text-center">
                            <span class="student-overview-type boys">Boys</span>
                            <h5
                                class="mb-0 mt-1 fw-semibold d-flex align-items-center justify-content-center gap-1"
                            >
                                6,560
                                <span
                                    class="badge bg-success-transparent rounded-pill d-inline-flex align-items-center"
                                >
                                    <i class="ti ti-arrow-up me-1"></i>2.45%
                                </span>
                            </h5>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <span class="student-overview-type girls"
                                >Girls</span
                            >
                            <h5
                                class="mb-0 mt-1 fw-semibold d-flex align-items-center justify-content-center gap-1"
                            >
                                3,354
                                <span
                                    class="badge bg-danger-transparent rounded-pill d-inline-flex align-items-center"
                                >
                                    <i class="ti ti-arrow-down me-1"></i>6.76%
                                </span>
                            </h5>
                        </div>
                    </div>
                </Row>
            </CardFooter>
        </Card>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Top Students</div>
                <a href="#!" class="text-muted fs-13"
                    >View All<i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush">
                    {#each TopStudents as student}
                        <ListGroupItem class="">
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-md">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={student.avatar}
                                            alt={student.name}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{student.name}</span
                                    >
                                    <span class="fs-13 text-muted"
                                        >{student.grade}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span>
                                        GPA : <span
                                            class="fw-medium text-primary"
                                            >{student.gpa}</span
                                        >
                                    </span>
                                    <span
                                        class={`${student.achievementClass} fs-13 d-block`}
                                    >
                                        {student.achievement}
                                    </span>
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Students Fee Analytics</div>
                <a href="#!" class="text-muted fs-13"
                    >View All<i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody class="p-0">
                <div class="table-responsive">
                    <table class="table text-nowrap">
                        <tbody>
                            {#each Analyticspayments as payment}
                                <tr >
                                    <td class={payment.borderBotttom}>{payment.id}</td>
                                    <td class={payment.borderBotttom}>
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-md avatar-rounded"
                                                >
                                                    <Image
                                                        src={payment.imageUrl}
                                                        alt="img"
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    class="d-block fw-semibold lh-1 mb-1"
                                                    >{payment.name}</span
                                                >
                                                <span class="fs-13 text-muted"
                                                    >{payment.feeType}</span
                                                >
                                            </div>
                                        </div>
                                    </td>
                                    <td class={`text-end ${payment.borderBotttom}`}>
                                        <span
                                            class={`fs-13 fw-semibold ${payment.status === "Paid" ? "text-success" : payment.status === "Pending" ? "text-danger" : "text-warning"}`}
                                        >
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xxl={9}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Student Summary</div>
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
                        Caret={false}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Student ID" },
                        { title: "Name" },
                        { title: "Grade" },
                        { title: "Fee Status" },
                        { title: "Attendance (%)" },
                        { title: "Marks (%)" },
                        { title: "Last Payment Date" },
                        { title: "Total Fees Paid" },
                    ]}
                >
                    {#each StudentPayments as payment}
                        <tr>
                            <td>{payment.id}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={payment.imageUrl}
                                                alt={payment.name}
                                            />
                                        </span>
                                    </div>
                                    <div class="fw-semibold">
                                        {payment.name}
                                    </div>
                                </div>
                            </td>
                            <td>{payment.grade}</td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${payment.status === "Paid" ? "bg-success" : payment.status === "Pending" ? "bg-warning" : "bg-danger"}`}
                                >
                                    {payment.status}
                                </SpkBadge>
                            </td>
                            <td>{payment.currentPerformance}</td>
                            <td>{payment.previousPerformance}</td>
                            <td>{payment.dueDate}</td>
                            <td>{payment.amount}</td>
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
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Attendance Overview</div>
                <a href="#!" class="btn btn-primary-light btn-sm">View All</a>
            </CardHeader>
            <CardBody>
                <div id="attendance-overview">
                    <Spkapexcharts
                        id="attendance-overview"
                        options={SchoolAttendanceOptions}
                    />
                </div>
            </CardBody>
            <CardFooter class="p-0">
                <div class="row mt-0 g-0">
                    <div
                        class="col-6 border-end border-inline-end-dashed text-center p-3"
                    >
                        <p class="mb-1 fw-medium">Boys</p>
                        <h5 class="text-warning fw-semibold mb-0">12.34K</h5>
                    </div>
                    <div class="col-6 text-center p-3">
                        <p class="mb-1 fw-medium">Girls</p>
                        <h5 class="text-primary fw-semibold mb-0">10.19K</h5>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->
