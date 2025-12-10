<script lang="ts">
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import SpkCoursecard from "$lib/@spk/dashboards-reusable/spk-coursecard.svelte";
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        CategoryListData,
        CourseCards,
        CourseListData,
        Coursesdata,
        CoursesOverview,
        Instructors,
        PayoutOptions,
        ProgressData,
        StudentOptions,
    } from "$lib/data/dashboards/coursedata";
    import { DropdownToday, ecommerceDropdown, SortByDropdown } from "$lib/data/uielements/dropdowndata";
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
        Progress,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Courses | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Courses" activepage="Dashboards" page="Courses" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row class="row-cols-xxl-5">
    {#each CourseCards as idx}
        <div class="col">
            <SpkCoursecard cardClass={idx.cardClass} course={idx} />
        </div>
    {/each}
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Students Analysis</div>
            </CardHeader>
            <CardBody>
                <div id="students-analysis">
                    <Spkapexcharts
                        id="students-analysis"
                        options={StudentOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Courses List</div>
                <a href="#!" class="text-muted"
                    >View All <i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush">
                    {#each CourseListData as course}
                        <ListGroupItem class="">
                            <div
                                class="d-flex align-items-start flex-wrap gap-3"
                            >
                                <div class="lh-1">
                                    <span class="avatar avatar-xl">
                                        <Image src={course.image} alt="img" />
                                    </span>
                                </div>
                                <div class="flex-fill fw-medium">
                                    <a
                                        href="#!"
                                        class="text-muted d-block mb-1 fs-10"
                                        title="Category"
                                    >
                                        <i class="ti ti-tag fs-11 align-middle"
                                        ></i>&nbsp;{course.category}
                                    </a>
                                    <a href="#!" class="d-block mb-2 fs-14"
                                        >{course.title}</a
                                    >
                                    <div
                                        class="d-flex align-items-center flex-wrap gap-3"
                                    >
                                        <div class="d-flex align-items-center">
                                            <a href="#!" class="me-2 lh-1">
                                                <span
                                                    class="avatar avatar-xs avatar-rounded"
                                                >
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={course.instructor
                                                            .avatar}
                                                        alt="img"
                                                    />
                                                </span>
                                            </a>
                                            <a href="#!" class="flex-fill fs-12"
                                                >{course.instructor.name}</a
                                            >
                                        </div>
                                        <div class="fs-12">
                                            <span class="me-2"
                                                >{course.views}</span
                                            >
                                            <span
                                                class="d-inline-flex align-items-center"
                                            >
                                                <i
                                                    class="ri-star-fill fs-16 text-warning me-1"
                                                ></i>({course.rating})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xl={3}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Top Course Categories</div>
                <a href="#!" class="text-muted"
                    >View All <i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled top-course-categories-list">
                    {#each CategoryListData as item}
                        <li>
                            <div
                                class="d-flex align-items-center gap-3 flex-wrap"
                            >
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md bg-${item.color}-transparent`}
                                    >
                                        {item.initials}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="fw-semibold d-block"
                                        >{item.title}</span
                                    >
                                    <span class="fs-12">{item.courseCount}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span class="fw-semibold"
                                        >{item.studentCount}</span
                                    >
                                    <span class="d-block text-muted"
                                        >Students</span
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

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xxl={3} xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Top Instructors</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled top-instructors-list">
                    {#each Instructors as instructor}
                        <li>
                            <div
                                class="d-flex align-items-center gap-3 flex-wrap"
                            >
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-md online avatar-rounded"
                                    >
                                        <Image
                                            width={40}
                                            height={40}
                                            src={instructor.image}
                                            alt={instructor.name}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div
                                        class="d-flex align-items-center gap-2 lh-1 mb-1"
                                    >
                                        <span class="fw-semibold d-block"
                                            >{instructor.name}</span
                                        >
                                        <div class="vr"></div>
                                        <div
                                            class="d-inline-flex align-items-center"
                                        >
                                            {instructor.rating}
                                            <i
                                                class="ti ti-star-filled ms-1 text-warning"
                                            ></i>
                                        </div>
                                    </div>
                                    <span class="text-muted fs-13"
                                        >{instructor.students}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span class="fw-semibold d-block"
                                        >{instructor.earnings}</span
                                    >
                                    <span class="fw-semibold fs-13 text-muted"
                                        >Earnings</span
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
                <div class="card-title">Upcoming Schedules</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled upcoming-schedules-list">
                    {#each Coursesdata as course}
                        <li>
                            <div
                                class="d-flex align-items-center justify-content-between gap-1"
                            >
                                <div class="w-50">
                                    <div class="mb-1 fw-semibold text-truncate">
                                        {course.title}
                                    </div>
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
                                                    src={course.image}
                                                    alt={course.instructor}
                                                />
                                            </span>
                                        </div>
                                        <div>{course.instructor}</div>
                                    </div>
                                </div>
                                <div class="text-end w-50">
                                    <div class="mb-1">{course.dateRange}</div>
                                    <span class="d-block fs-12 text-muted"
                                        >{course.time}</span
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
                <div class="card-title">Payout Report</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-4 mb-5">
                    <div class="col">
                        <div
                            class="d-flex align-items-center p-2 border border-dashed rounded"
                        >
                            <div class="me-3">
                                <span
                                    class="avatar radius-5 bg-primary-transparent text-primary"
                                    ><i class="ti ti-cash fs-5"></i></span
                                >
                            </div>
                            <div class="flex-1">
                                <span class="fs-12 text-muted">Paid</span>
                                <span
                                    class="fs-16 fw-semibold d-flex align-items-center"
                                    >$68,400</span
                                >
                                <span class="text-success fs-12"
                                    ><i class="ti ti-arrow-up me-1"
                                    ></i>4.26%</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div
                            class="d-flex align-items-center p-2 border border-dashed rounded"
                        >
                            <div class="me-3">
                                <span
                                    class="avatar radius-5 bg-secondary-transparent text-secondary"
                                    ><i class="ti ti-x fs-5"></i></span
                                >
                            </div>
                            <div class="flex-1">
                                <span class="fs-12 text-muted">Unpaid</span>
                                <span
                                    class="fs-16 fw-semibold d-flex align-items-center"
                                    >$21,300</span
                                >
                                <span class="text-danger fs-12"
                                    ><i class="ti ti-arrow-down me-1"
                                    ></i>0.86%</span
                                >
                            </div>
                        </div>
                    </div>
                </Row>
                <div id="payout-Report">
                    <Spkapexcharts id="payout-Report" options={PayoutOptions} />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={12}>
        <Card class="custom-card">
            <CardHeader class="flex-between justify-content-between">
                <div class="card-title">Ongoing Courses</div>
                <SpkDropdown
                    option={DropdownToday}
                    ToggleClass="text-muted no-caret border-0 p-0"
                    parent={`View All <i class="ri-arrow-down-s-line align-middle ms-1"></i>`}
                    Caret={false}
                />
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled ongoing-courses-list">
                    {#each ProgressData as item}
                        <li>
                            <div
                                class="d-flex align-items-center gap-3 flex-wrap"
                            >
                                <div>
                                    <span
                                        class={`avatar avatar-md ${item.avatarClass}`}
                                    >
                                        <i class={`${item.iconClass} fs-5`}></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div
                                        class="d-flex justify-content-between mb-1 flex-wrap"
                                    >
                                        <span
                                            class="fw-semibold d-block w-75 text-truncate"
                                        >
                                            {item.title}
                                        </span>
                                        <div>
                                            <p class="mb-0 fs-13 text-muted">
                                                <i
                                                    class="ti ti-arrow-up align-middle me-1 text-success"
                                                ></i>
                                                {item.progress}%
                                            </p>
                                        </div>
                                    </div>
                                    <Progress
                                        color={item.progressClass}
                                        class="progress-xs"
                                        animated
                                        striped
                                        value={item.progress}
                                    />
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
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
                <div class="card-title">Courses Overview</div>
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
                        tableClass="text-nowrap"
                        showCheckbox={true}
                        Responsive={true}
                        header={[
                            { title: "Course Name" },
                            { title: "Instructor" },
                            { title: "Start Date" },
                            { title: "Total Enrolled" },
                            { title: "Average Rating" },
                            { title: "Status" },
                            { title: "Revenue" },
                            { title: "Actions" },
                        ]}
                    >
                        {#each CoursesOverview as course}
                            <tr>
                                <td>
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id={course.id}
                                        aria-label="..."
                                    />
                                </td>
                                <td>{course.title}</td>
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
                                                    src={course.avatar}
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                        <div>{course.instructorName}</div>
                                    </div>
                                </td>
                                <td>{course.date}</td>
                                <td>{course.students}</td>
                                <td>
                                    <div
                                        class="d-inline-flex align-items-center"
                                    >
                                        {course.rating}
                                        <i
                                            class="ti ti-star-filled text-warning ms-1"
                                        ></i>
                                    </div>
                                </td>
                                <td>
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`${course.statusClass}`}
                                        >{course.status}</SpkBadge
                                    >
                                </td>
                                <td>{course.earnings}</td>
                                <td>
                                    <SpkDropdown 
                                    option={ecommerceDropdown}
                                    ToggleClass="btn btn-icon btn-sm btn-light border no-caret"
                                    parent={`<i class="fe fe-more-vertical"></i>`}
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
                            <Pagination class="customPaginationPageBottom ">
                                <PaginationItem>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">2</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">...</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">17</PaginationLink
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
