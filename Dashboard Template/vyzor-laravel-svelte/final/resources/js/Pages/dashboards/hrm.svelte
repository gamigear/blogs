<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkHrmcard from "@/shared/@spk/dashboards-reusable/spk-hrmcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Applicants,
        AttendanceData,
        AttendanceOptions,
        AttendancesToday,
        CandidateOptions,
        EmployeeOptions,
        Employees,
        Hrmcards,
    } from "@/shared/data/dashboards/hrmdata";
    import {
        hrmDropdown1,
        SortByDropdown,
    } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
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
    <title>Hrm | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="HRM" activepage="Dashboards" page="HRM" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={4} xl={6} class="">
        <Row>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardBody class="p-0">
                        <div class="row g-0">
                            {#each Hrmcards as idx}
                                <Col xl={6}>
                                    <SpkHrmcard
                                        cardClass={idx.cardClass}
                                        hrm={idx}
                                    />
                                </Col>
                            {/each}
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody>
                        <h6 class="fw-semibold mb-3">Employees Status</h6>
                        <div class="progress-stacked progress-xl mb-3">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                style="width: 25%;"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                25%
                            </div>
                            <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style="width: 35%;"
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                35%
                            </div>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style="width: 25%;"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                25%
                            </div>
                            <div
                                class="progress-bar bg-danger"
                                role="progressbar"
                                style="width: 15%;"
                                aria-valuenow={15}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                15%
                            </div>
                        </div>
                        <Row class="gy-2">
                            <Col xl={6}>
                                <div
                                    class="d-flex align-items-center gap-4 flex-wrap"
                                >
                                    <div class="employee-status-marker remote">
                                        Remote :
                                    </div>
                                    <div class="fw-semibold">4,075</div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div
                                    class="d-flex align-items-center gap-4 flex-wrap"
                                >
                                    <div
                                        class="employee-status-marker probation"
                                    >
                                        Probation :
                                    </div>
                                    <div class="fw-semibold">5,775</div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div
                                    class="d-flex align-items-center gap-4 flex-wrap"
                                >
                                    <div
                                        class="employee-status-marker contract"
                                    >
                                        Contract :
                                    </div>
                                    <div class="fw-semibold">3,976</div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div
                                    class="d-flex align-items-center gap-4 flex-wrap"
                                >
                                    <div
                                        class="employee-status-marker work-home"
                                    >
                                        Work From Home :
                                    </div>
                                    <div class="fw-semibold">1,675</div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={5} xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Candidate Statistics</div>
            </CardHeader>
            <CardBody class="p-0">
                <div class="row g-0 border-bottom border-block-end-dashed">
                    <Col xl={6} class="border-end">
                        <div class="text-center p-3">
                            <span class="d-block text-muted mb-1"
                                >Total Candidates Hired</span
                            >
                            <h5 class="fw-semibold mb-0">576</h5>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div class="text-center p-3">
                            <span class="d-block text-muted mb-1"
                                >Total Responses</span
                            >
                            <h5 class="fw-semibold mb-0">1,854</h5>
                        </div>
                    </Col>
                </div>
                <div id="candidate-statistics" class="p-3">
                    <Spkapexcharts
                        id="candidate-statistics"
                        options={CandidateOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Attendance Overview</div>
            </CardHeader>
            <CardBody>
                <div id="attendance-overview">
                    <Spkapexcharts
                        id="attendance-overview"
                        options={AttendanceOptions}
                    />
                </div>
                <ul class="list-unstyled my-4 hrm-attendance-overview-list">
                    {#each AttendanceData as attendance}
                        <li>
                            <div
                                class="d-flex align-items-center justify-content-between gap-2"
                            >
                                <div
                                    class={`attendance-type ${attendance.className}`}
                                >
                                    {attendance.type}
                                </div>
                                <div class="fw-semibold">
                                    {attendance.count.toLocaleString()}
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
                <div class="d-grid">
                    <SpkButton color="" customClass="btn btn-light btn-lg"
                        >View Complete Statistics <i
                            class="ti ti-arrow-narrow-right ms-1"
                        ></i></SpkButton
                    >
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={4}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Employees By Department</div>
            </CardHeader>
            <CardBody>
                <div id="employee-department">
                    <Spkapexcharts
                        id="employee-department"
                        options={EmployeeOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={4}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Employees List</div>
                <a href="#!" class="text-muted fs-13"
                    >View All<i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled hrm-employee-list">
                    {#each Employees as employee}
                        <li>
                            <div
                                class="d-flex align-items-center gap-2 flex-wrap"
                            >
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-md avatar-rounded"
                                    >
                                        <Image
                                            src={employee.image}
                                            alt={employee.name}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold">
                                        {employee.name}
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`bg-${employee.badgeColor}-transparent ms-2`}
                                        >
                                            {employee.department}
                                        </SpkBadge>
                                    </span>
                                    <span class="text-muted fs-13"
                                        >{employee.role}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span class="fw-medium"
                                        >{employee.joinDate}</span
                                    >
                                    <span class="d-block fs-12 mt-1 text-muted"
                                        >Joined</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={4}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Today's Attendance</div>
                <Dropdown>
                    <DropdownToggle tag="a" class="fs-12 text-muted border-0 customHrmDrop " color=""
                        >Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i></DropdownToggle
                    >
                    <DropdownMenu>
                        <DropdownItem>This Week</DropdownItem>
                        <DropdownItem>This Month</DropdownItem>
                        <DropdownItem>This Year</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    Hover={true}
                    tableClass="text-nowrap table-hover"
                    header={[
                        { title: "Name" },
                        { title: "Time In" },
                        { title: "Status" },
                    ]}
                >
                    {#each AttendancesToday as attendance}
                        <tr>
                            <td class={attendance.borderClass}>
                                <div class="d-flex align-items-center gap-2">
                                    <span
                                        class="avatar avatar-md bg-light p-1 avatar-rounded"
                                    >
                                        <Image
                                            width={40}
                                            height={40}
                                            src={attendance.image}
                                            alt={attendance.name}
                                        />
                                    </span>
                                    <div>
                                        <p class="fw-medium mb-0">
                                            {attendance.name}
                                        </p>
                                        <span class="text-muted fs-12"
                                            >{attendance.role}</span
                                        >
                                    </div>
                                </div>
                            </td>
                            <td class={attendance.borderClass}
                                >{attendance.time}</td
                            >
                            <td class={attendance.borderClass}>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`bg-${attendance.badgeColor}-transparent rounded-pill min-w-badge`}
                                >
                                    {attendance.status}
                                </SpkBadge>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Applicant Details</div>
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
                        ToggleClass="btn-primary btn-sm btn-wave waves-effect waves-light no-caret "
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        Caret={false}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    showCheckbox={true}
                    header={[
                        { title: "Application ID" },
                        { title: "Applicant Name" },
                        { title: "Position Applied" },
                        { title: "Date Of Application" },
                        { title: "Email" },
                        { title: "Work Experience" },
                        { title: "Status" },
                        { title: "Action" },
                    ]}
                >
                    {#each Applicants as applicant, index}
                        <tr>
                            <th scope="row">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id={`checkboxNoLabel${index}`}
                                    defaultValue=""
                                    defaultChecked={applicant.id == 2 ||
                                        applicant.id == 4 ||
                                        applicant.id == 5}
                                    aria-label="..."
                                />
                            </th>
                            <td>{applicant.application}</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span
                                        class="avatar avatar-sm me-2 avatar-rounded"
                                    >
                                        <Image
                                            width={28}
                                            height={28}
                                            src={applicant.image}
                                            alt="img"
                                        />
                                    </span>
                                    {applicant.name}
                                </div>
                            </td>
                            <td>{applicant.role}</td>
                            <td>{applicant.dateApplied}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.experience}</td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`bg-${applicant.status === "New" ? "primary" : applicant.status === "Interviewed" ? "success" : applicant.status === "Hired" ? "info" : applicant.status === "Under Review" ? "secondary" : "danger"}-transparent`}
                                >
                                    {applicant.status}
                                </SpkBadge>
                            </td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <a
                                        aria-label="anchor"
                                        href="#!"
                                        class="btn btn-icon waves-effect waves-light btn-sm btn-success-light rounded-circle"
                                    >
                                        <i class="ri-phone-line"></i>
                                    </a>
                                    <a
                                        aria-label="anchor"
                                        href="#!"
                                        class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light rounded-circle"
                                    >
                                        <i class="ri-edit-line"></i>
                                    </a>
                                    <a
                                        aria-label="anchor"
                                        href="#!"
                                        class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-danger-light rounded-circle"
                                    >
                                        <i class="ri-delete-bin-line"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0">
                <div class="d-flex align-items-center">
                    <div>
                        Showing 5 Entries <i
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
                                        href="#"><i class="bi bi-three-dots"></i></PaginationLink
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

<!-- End:: row-3 -->
