
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkMedicalcard from "@/shared/@spk/dashboards-reusable/spk-medicalcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Appointments,
        DepartmentOptions,
        Departments,
        Doctors,
        DoctorSchedules,
        GenderData,
        MedicalCards,
        MedicalOptions,
        PatientRecords,
        PatientsOptions,
        TestRecords,
    } from "@/shared/data/dashboards/medicaldata";
    import { medicalDropdown, SortByDropdown } from "@/shared/data/uielements/dropdowndata";
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
        Nav,
        NavLink,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { Svroller } from "svrollbar";

    let activeTab = 3;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Medical | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Medical" activepage="Dashboards" page="Medical" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={5}>
        <Row>
            {#each MedicalCards as item}
                <Col xl={6}>
                    <SpkMedicalcard cardClass={item.cardClass} bodyClass={item.bodyClass} medical={item.medical} />
                </Col>
            {/each}
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Patient Statistics</div>
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                >1D</SpkButton
                            >
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                >1W</SpkButton
                            >
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                >1M</SpkButton
                            >
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                >6M</SpkButton
                            >
                            <SpkButton
                                color=""
                                buttontype="button"
                                customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                >1Y</SpkButton
                            >
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div id="patients-statistics">
                            <Spkapexcharts
                                id="patients-statistics"
                                options={MedicalOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={7}>
        <div class="row">
            <Col xl={12}>
                <Card class="custom-card available-treatments-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Available Treatments</div>
                        <a href="#!" class="text-muted fs-13"
                            >View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody>
                        <Row class="gy-sm-0 gy-3">
                            {#each Departments as dept}
                                <Col
                                    xxl={2}
                                    xl={2}
                                    lg={3}
                                    md={3}
                                    sm={3}
                                    class="col text-center"
                                >
                                    <a
                                        aria-label="anchor"
                                        href="#!"
                                        class={`btn ${dept.btnClass} btn-icon`}
                                    >
                                        <i class={dept.iconClass}></i>
                                    </a>
                                    <a href="#!" class="d-block mt-3 fw-medium">
                                        {dept.label}
                                    </a>
                                </Col>
                            {/each}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={7}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Today's Appointments</div>
                        <a href="#!" class="text-muted fs-13"
                            >View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap appointments-table"
                        >
                            {#each Appointments as appt, index}
                                <tr>
                                    <td
                                        class={index === Appointments.length - 1
                                            ? "border-bottom-0"
                                            : ""}
                                    >
                                        <div
                                            class="d-flex align-items-center gap-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-sm avatar-rounded"
                                                >
                                                    <Image
                                                        src={appt.imageUrl}
                                                        alt={appt.name}
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    class="fw-semibold d-block"
                                                    >{appt.name}</span
                                                >
                                                <span class="fs-13 text-muted"
                                                    >{`${appt.gender},${appt.age}Yrs`}</span
                                                >
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        class={index === Appointments.length - 1
                                            ? "border-bottom-0"
                                            : ""}
                                    >
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`badge ${appt.badgeClass}`}
                                            >{appt.department}</SpkBadge
                                        >
                                    </td>
                                    <td
                                        class={index === Appointments.length - 1
                                            ? "border-bottom-0"
                                            : ""}
                                    >
                                        {appt.time}
                                    </td>
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={5}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Available Doctors</div>
                    </CardHeader>
                    <CardBody>
                        <Nav
                            class="nav-style-1 nav-pills mb-4 nav-justified"
                            role="tablist"
                        >
                            <NavLink
                                on:click={(e) => {
                                    (activeTab = 1), e.preventDefault();
                                }}
                                active={activeTab == 1}
                                class="nav-link px-2"
                                href="#tue"
                                aria-selected="false"
                                tabindex={-1}
                            >
                                <span class="d-block mb-1">22</span>
                                <span class="op-6 fs-12">Sat</span>
                            </NavLink>
                            <NavLink
                                on:click={(e) => {
                                    (activeTab = 2), e.preventDefault();
                                }}
                                active={activeTab == 2}
                                class="nav-link px-2"
                                href="#wed"
                                aria-selected="false"
                                tabindex={-1}
                            >
                                <span class="d-block mb-1">23</span>
                                <span class="op-6 fs-12">Sun</span>
                            </NavLink>
                            <NavLink
                                on:click={(e) => {
                                    (activeTab = 3), e.preventDefault();
                                }}
                                active={activeTab == 3}
                                class="nav-link px-2"
                                data-bs-toggle="tab"
                                aria-current="page"
                                role="tab"
                                href="#thu"
                                aria-selected="true"
                                tabindex={-1}
                            >
                                <span class="d-block mb-1">24</span>
                                <span class="op-6 fs-12">Mon</span>
                            </NavLink>
                            <NavLink
                                on:click={(e) => {
                                    (activeTab = 4), e.preventDefault();
                                }}
                                active={activeTab == 4}
                                class="nav-link px-2"
                                href="#fri"
                                aria-selected="false"
                                tabindex={-1}
                            >
                                <span class="d-block mb-1">25</span>
                                <span class="op-6 fs-12">Tue</span>
                            </NavLink>
                            <NavLink
                                on:click={(e) => {
                                    (activeTab = 5), e.preventDefault();
                                }}
                                active={activeTab == 5}
                                class="nav-link px-2"
                                href="#sat"
                                aria-selected="false"
                                tabindex={-1}
                            >
                                <span class="d-block mb-1">26</span>
                                <span class="op-6 fs-12">Wed</span>
                            </NavLink>
                        </Nav>
                        <ul
                            class="list-unstyled overflow-y-scroll availabe-doctors-list"
                            id="available-doctors"
                        >
                                {#each DoctorSchedules as doctor}
                                    <li class="">
                                        <div
                                            class="d-flex align-items-start gap-2 mb-3"
                                        >
                                            <div class="flex-fill">
                                                <span
                                                    class="d-block fw-semibold"
                                                    >{doctor.name}</span
                                                >
                                                <span
                                                    class={`fs-13 ${doctor.departmentClass}`}
                                                    >{doctor.department}</span
                                                >
                                            </div>
                                            <div
                                                class="fs-13 text-muted d-flex align-items-center gap-1"
                                            >
                                                <i class="ti ti-clock-hour-3"
                                                ></i>
                                                {doctor.time}
                                            </div>
                                        </div>
                                    </li>
                                {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </div>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={3} xl={6} class="">
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Patients Visits</div>
            </CardHeader>
            <CardBody>
                <div id="patients-visits">
                    <Spkapexcharts
                        id="patients-visits"
                        options={PatientsOptions}
                    />
                </div>
            </CardBody>
            <CardFooter class="p-0">
                <ListGroup class="list-group-flush">
                    {#each GenderData as item}
                        <ListGroupItem class="">
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md avatar-rounded ${item.avatarBgClass}`}
                                    >
                                        <i class={item.iconClass}></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="fw-semibold d-block"
                                        >{item.label}</span
                                    >
                                    <span class="fs-13 d-block text-muted">
                                        <span
                                            class={`${item.trendColorClass} me-2 d-inline-flex align-items-center`}
                                        >
                                            <i class={item.trendIconClass}
                                            ></i>{item.trendText}
                                        </span>
                                        {item.trendLabel}
                                    </span>
                                </div>
                                <div
                                    class={`fw-semibold text-${item.trendColor}`}
                                >
                                    {item.percentage}
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardFooter>
        </Card>
    </Col>
    <Col xxl={3} xl={6} class="">
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Top Doctors</div>
                <a href="#!" class="fs-13 text-muted"
                    >View All<i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush">
                    {#each Doctors as doctor}
                        <ListGroupItem class="">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <a href="#!" class="stretched-link"></a>
                            <div class="d-flex align-items-center gap-3">
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-md avatar-rounded bg-light"
                                    >
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{doctor.name}</span
                                    >
                                    <span class="d-block fs-13 text-muted"
                                        >{doctor.specialization}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <div>
                                        <span
                                            class="d-inline-flex align-items-center"
                                        >
                                            {doctor.rating}
                                            <i
                                                class="ti ti-star-filled ms-1 text-warning"
                                            ></i>
                                        </span>
                                    </div>
                                    <span class="fs-13 text-muted"
                                        >{doctor.experience}</span
                                    >
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={6} class="">
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Patients Reports</div>
                <a href="#!" class="fs-13 text-muted"
                    >View All<i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled patients-reports-list">
                    {#each TestRecords as record}
                        <li>
                            <div
                                class="d-flex align-items-center gap-2 flex-wrap"
                            >
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md ${record.bgClass} avatar-rounded`}
                                    >
                                        <i class={record.iconClass}></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{record.name}</span
                                    >
                                    <span class="d-block fs-13 text-muted"
                                        >{record.testType}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span
                                        class="d-flex align-items-center gap-1"
                                    >
                                        <i
                                            class={`${record.statusIcon} ${record.statusColor} fs-20`}
                                        ></i>
                                        {record.statusText}
                                    </span>
                                    <span class="fs-13 text-muted"
                                        >{record.date}</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={6} class="">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Top Departments</div>
            </CardHeader>
            <CardBody class="py-0">
                <div id="top-departments">
                    <Spkapexcharts
                        id="top-departments"
                        options={DepartmentOptions}
                    />
                </div>
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
                <div class="card-title">Patient Records</div>
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
                        { title: "Patient ID" },
                        { title: "Name" },
                        { title: "Age" },
                        { title: "Gender" },
                        { title: "Consultation Type" },
                        { title: "Doctor" },
                        { title: "Status" },
                        { title: "Appointment Date" },
                        { title: "Time" },
                        { title: "Actions" },
                    ]}
                >
                    {#each PatientRecords as appt}
                        <tr>
                            <td>{appt.id}</td>
                            <td>{appt.name}</td>
                            <td>{appt.age}</td>
                            <td>{appt.gender}</td>
                            <td>{appt.department}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded bg-light"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={appt.doctorImage}
                                                alt={appt.doctorName}
                                            />
                                        </span>
                                    </div>
                                    <div>{appt.doctorName}</div>
                                </div>
                            </td>
                            <th>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`badge ${appt.statusBadgeClass}`}
                                    >{appt.status}</SpkBadge
                                >
                            </th>
                            <th>{appt.date}</th>
                            <th>{appt.time}</th>
                            <th>
                                <SpkDropdown 
                                option={medicalDropdown}
                                Caret={false}
                                ToggleClass="btn btn-icon btn-sm btn-light no-caret"
                                parent={`<i class="ti ti-dots-vertical"></i>`}
                                />
                            </th>
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
                            <Pagination class="mb-0 flex-wrap customPaginationPageBottom">
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

<!-- End:: row-3 -->
