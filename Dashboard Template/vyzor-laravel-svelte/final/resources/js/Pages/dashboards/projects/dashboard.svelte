<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkDashboardcard from "@/shared/@spk/dashboards-reusable/projects/spk-dashboardcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        dashboardCards,
        ProjectOptions,
        ProjectsSummary,
        Recentupdates,
        TaskList,
        TaskOptions,
        Transactions,
        UrgentTasks,
    } from "@/shared/data/dashboards/projects/projectdashboardata";
    import {
        SortByDropdown,
        WeekDropdown,
    } from "@/shared/data/uielements/dropdowndata";
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
    subTitle="Projects"
    activepage="Dashboards"
    page="Dashboard"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={9}>
        <Row>
            {#each dashboardCards as idx}
                <Col xl={3}>
                    <SpkDashboardcard cardClass={idx.cardClass} project={idx} />
                </Col>
            {/each}
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Projects Overview</div>
                    </CardHeader>
                    <CardBody>
                        <div id="projects-overview">
                            <Spkapexcharts
                                id="projects-overview"
                                options={ProjectOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Task Activity</div>
            </CardHeader>
            <CardBody>
                <div id="task-activity">
                    <Spkapexcharts id="task-activity" options={TaskOptions} />
                </div>
            </CardBody>
            <CardFooter class="p-0">
                <ListGroup class="list-group-flush project-task-activity-list">
                    {#each TaskList as task}
                        <ListGroupItem>
                            <div class="d-flex align-items-start gap-2">
                                <div class="flex-fill">
                                    <span
                                        class={`d-block fw-semibold task-type ${task.className}`}
                                    >
                                        {task.type}
                                    </span>
                                    <span class="fs-12 text-muted">
                                        {task.trend === "increase"
                                            ? "Increased"
                                            : "Decreased"} by{" "}
                                        <span
                                            class={`mx-1 ${task.trend === "increase" ? "text-success" : "text-danger"}`}
                                        >
                                            {task.percentage}
                                        </span>
                                        This year
                                    </span>
                                </div>
                                <div class="fw-semibold">{task.count}</div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Recent Activity</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled projects-recent-activity-list">
                    {#each Recentupdates as item}
                        <li>
                            <div class="d-flex align-items-start gap-3">
                                <div>
                                    <span
                                        class={`avatar avatar-md avatar-rounded ${item.status}`}
                                    >
                                        <Image
                                            width={40}
                                            height={40}
                                            src={item.avatar}
                                            alt={item.name}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div
                                        class="d-flex align-items-start justify-content-between mb-1 flex-wrap"
                                    >
                                        <div class="d-block fw-semibold">
                                            {item.name}
                                        </div>
                                        <SpkBadge
                                            Color=""
                                            CustomClass="bg-light text-muted border"
                                            >{item.date}</SpkBadge
                                        >
                                    </div>
                                    <div class="descrption mb-1">
                                        {item.description}
                                    </div>
                                    {#if item.file}
                                        <div
                                            class="p-1 border border-dotted rounded position-relative"
                                        >
                                            <!-- svelte-ignore a11y_consider_explicit_label -->
                                            <!-- svelte-ignore element_invalid_self_closing_tag -->
                                            <a
                                                href="#!"
                                                class="stretched-link"
                                            />
                                            <div
                                                class="d-flex align-items-center gap-2"
                                            >
                                                <SpkBadge
                                                    Color=""
                                                    CustomClass="bg-success"
                                                    >{item.file.type}</SpkBadge
                                                >
                                                <span class="fs-11"
                                                    >{item.file.name}</span
                                                >
                                            </div>
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={6}>
        <Card class="custom-card overflow-hidden custom-table-tasks">
            <CardHeader class="justify-content-between">
                <div class="card-title">Urgent Tasks</div>
                <SpkDropdown
                    option={WeekDropdown}
                    ToggleClass="fs-12 text-muted no-caret border-0"
                    Caret={false}
                    parent={`Today <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                />
            </CardHeader>
            <CardBody class="p-0 custom-project-avatar">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Task" },
                        { title: "Deadline" },
                        { title: "Assigned To" },
                        { title: "Priority" },
                        { title: "Status" },
                    ]}
                >
                    {#each UrgentTasks as task, index}
                        <tr>
                            <td
                                class={index === UrgentTasks.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                <div class="d-flex align-items-center gap-2">
                                    <div class="form-check mb-0">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id={task.id}
                                        />
                                    </div>
                                    <a href="#!" class="urgent-task-title"
                                        >{task.title}</a
                                    >
                                </div>
                            </td>
                            <td
                                class={index === UrgentTasks.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                {task.dueDate}
                            </td>
                            <td
                                class={index === UrgentTasks.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                <div class="avatar-list-stacked mb-0">
                                    {#each task.avatars ?? [] as imgSrc}
                                        <span
                                            class="avatar avatar-xs avatar-rounded"
                                        >
                                            <Image src={imgSrc} alt="img" />
                                        </span>
                                    {/each}
                                </div>
                            </td>
                            <td
                                class={index === UrgentTasks.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                {task.priority}
                            </td>
                            <td
                                class={index === UrgentTasks.length - 1
                                    ? "border-bottom-0"
                                    : ""}
                            >
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${task.statusClass}`}
                                >
                                    {task.status}
                                </SpkBadge>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter>
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
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Recent Transactions</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled projects-recent-transactions-list">
                    {#each Transactions as tx}
                        <li>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md avatar-rounded bg-${tx.avatarColor}-transparent`}
                                    >
                                        {tx.name.charAt(0)}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{tx.name}</span
                                    >
                                    <span class="fs-13 text-muted"
                                        >{tx.dateTime}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <span class="d-block fw-semibold"
                                        >{tx.amount}</span
                                    >
                                    <span
                                        class={`fw-medium fs-13 ${tx.status === "Completed" ? "text-success" : tx.status === "Pending" ? "text-warning" : "text-danger"}`}
                                    >
                                        {tx.status}
                                    </span>
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
        <Card class="custom-card custom-table-tasks">
            <CardHeader class="justify-content-between">
                <div class="card-title">Projects Summary</div>
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
                        ToggleClass="btn-primary btn-sm btn-wave waves-effect waves-light"
                        Caret={true}
                        parent="Sort By"
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0 custom-project-avatar">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    showCheckbox={true}
                    header={[
                        { title: "Project Name" },
                        { title: "Start Date" },
                        { title: "End Date" },
                        { title: "Status" },
                        { title: "Progress" },
                        { title: "Team" },
                        { title: "Budget" },
                        { title: "Actions" },
                    ]}
                >
                    {#each ProjectsSummary as project}
                        <tr>
                            <td class={project.borderBottom}>
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id={project.id}
                                    aria-label="..."
                                />
                            </td>
                            <td class={project.borderBottom}>{project.name}</td>
                            <td class={project.borderBottom}
                                >{project.startDate}</td
                            >
                            <td class={project.borderBottom}
                                >{project.endDate}</td
                            >
                            <td class={project.borderBottom}>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`bg-${project.status === "Completed" ? "success" : "primary"}-transparent`}
                                >
                                    {project.status}
                                </SpkBadge>
                            </td>
                            <td class={project.borderBottom}>
                                <div class="d-flex align-items-center">
                                    <div
                                        class="progress progress-animate progress-xs w-100"
                                        role="progressbar"
                                        aria-valuenow={project.progress}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <!-- svelte-ignore element_invalid_self_closing_tag -->
                                        <div
                                            class={`progress-bar progress-bar-striped progress-bar-animated bg-${project.progressColor}`}
                                            style="width: {project.progress}%;"
                                        />
                                    </div>
                                    <div class="ms-2">
                                        {project.progress}%
                                    </div>
                                </div>
                            </td>
                            <td class={project.borderBottom}>
                                <div class="avatar-list-stacked">
                                    {#each project.avatars as avatar}
                                        <span
                                            class="avatar avatar-xs avatar-rounded"
                                        >
                                            <Image
                                                src={`../../images/faces/${avatar}`}
                                                alt="avatar"
                                            />
                                        </span>
                                    {/each}
                                    {#if project.moreAvatars}
                                        <a
                                            class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                                            href="#!"
                                        >
                                            +{project.moreAvatars}
                                        </a>
                                    {/if}
                                </div>
                            </td>
                            <td class={project.borderBottom}
                                >{project.amount}</td
                            >
                            <td class={project.borderBottom}>
                                <div class="btn-list">
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-sm btn-icon btn-primary-light btn-wave"
                                    >
                                        <i class="ri-edit-line"></i>
                                    </SpkButton>
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-sm btn-icon btn-danger-light btn-wave"
                                    >
                                        <i class="ri-delete-bin-line"></i>
                                    </SpkButton>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter>
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
</Row>

<!-- End:: row-3 -->
