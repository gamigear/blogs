<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkEmployeecard from "@/shared/@spk/reusable-widgets/spk-employeecard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        CrmOptions,
        Deals,
        LeadOptions,
        Overviewtable,
        StatCards,
        StaticOptions,
        Tasks,
        TopdealsTable,
        TrafficSources,
        Upcoming,
    } from "@/shared/data/dashboards/crm/crmdashboarddata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        ListGroup,
        ListGroupItem,
        Nav,
        NavItem,
        NavLink,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    let activeTab = 2;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Dashboard | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Dashboard"
    subTitle="CRM"
    activepage="Dashboards"
    page="Dashboard"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={5}>
        <Row>
            {#each StatCards as idx}
                <Col lg={6}>
                    <SpkEmployeecard widget={idx} />
                </Col>
            {/each}
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Revenue Analytics</div>
                    </CardHeader>
                    <CardBody class="pb-0">
                        <div id="crm-revenue-analytics">
                            <Spkapexcharts
                                id="crm-revenue-analytics"
                                options={CrmOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={4}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Tasks List</div>
                        <Nav
                            class="nav-tabs justify-content-end nav-tabs-header card-headertabs"
                            role="tablist"
                        >
                            <NavItem role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 1), e.preventDefault();
                                    }}
                                    active={activeTab == 1}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#today"
                                    aria-selected="false"
                                    tabindex={-1}>Today</NavLink
                                >
                            </NavItem>
                            <NavItem role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 2), e.preventDefault();
                                    }}
                                    active={activeTab == 2}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#Upcoming"
                                    aria-selected="true">Upcoming</NavLink
                                >
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody class="todo-tab p-0">
                        <TabContent id="crmDash_Tab">
                            <TabPane
                                class={`border-0 ${activeTab == 1 ? "active" : ""}`}
                                id="today"
                                role="tabpanel"
                            >
                                <ul class="list-unstyled task-list-tab">
                                    {#each Tasks as task}
                                        <li>
                                            <div
                                                class="d-flex align-items-start gap-2 flex-wrap"
                                            >
                                                <div class="mb-3 form-check">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        defaultChecked={task.completed}
                                                    />
                                                </div>
                                                <div class="flex-fill">
                                                    <div
                                                        class="d-flex align-items-center gap-2 mb-1"
                                                    >
                                                        <a
                                                            href="#!"
                                                            class="crm-task-name"
                                                        >
                                                            {task.title}
                                                        </a>
                                                        <span
                                                            id={`crmdash-${task.id}`}
                                                            class="avatar avatar-xs avatar-rounded bg-light border text-muted fw-semibold flex-shrink-0"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i
                                                                class="ti ti-info-circle fs-11"
                                                            ></i>
                                                        </span>
                                                        <SpkTooltips
                                                            content={task.status}
                                                            targetId={`crmdash-${task.id}`}
                                                            placement="top"
                                                        ></SpkTooltips>
                                                    </div>
                                                    <div
                                                        class="d-flex align-items-center gap-2 lh-1"
                                                    >
                                                        <a
                                                            href="#!"
                                                            class="fs-12"
                                                        >
                                                            {task.code}
                                                        </a>
                                                        <div class="vr"></div>
                                                        <span
                                                            class="text-muted mb-0 fs-12"
                                                        >
                                                            <i
                                                                class="ti ti-user me-1 fw-medium"
                                                            ></i>
                                                            {task.assignee}
                                                        </span>
                                                        <div class="vr"></div>
                                                        <SpkBadge
                                                            Color=""
                                                            CustomClass={`${task.priority === "High" ? "bg-danger-transparent" : task.priority === "Medium" ? "bg-warning-transparent" : "bg-success-transparent"}`}
                                                        >
                                                            {task.priority}
                                                        </SpkBadge>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span
                                                        class="d-block fw-medium"
                                                        >{task.dueTime}</span
                                                    >
                                                    <span
                                                        class="d-block fs-12 text-muted"
                                                        >Due Time</span
                                                    >
                                                </div>
                                            </div>
                                        </li>
                                    {/each}
                                </ul>
                            </TabPane>
                            <TabPane
                                class={`border-0 ${activeTab == 2 ? "active" : ""}`}
                                id="Upcoming"
                                role="tabpanel"
                            >
                                <ul class="list-unstyled task-list-tab">
                                    {#each Upcoming as task}
                                        <li>
                                            <div
                                                class="d-flex align-items-start gap-2 flex-wrap"
                                            >
                                                <div class="mb-3 form-check">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        defaultChecked={task.completed}
                                                    />
                                                </div>
                                                <div class="flex-fill">
                                                    <div
                                                        class="d-flex align-items-center gap-2 mb-1"
                                                    >
                                                        <a
                                                            href="#!"
                                                            class="crm-task-name"
                                                        >
                                                            {task.title}
                                                        </a>
                                                        <span
                                                            id={`crmdash2-${task.id}`}
                                                            class="avatar avatar-xs avatar-rounded bg-light border text-muted fw-semibold flex-shrink-0"
                                                            data-bs-toggle="tooltip"
                                                            title={task.status}
                                                        >
                                                            <i
                                                                class="ti ti-info-circle fs-11"
                                                            ></i>
                                                        </span>
                                                        <SpkTooltips
                                                            placement="top"
                                                            content="Not Started"
                                                            targetId={`crmdash2-${task.id}`}
                                                        ></SpkTooltips>
                                                    </div>
                                                    <div
                                                        class="d-flex align-items-center gap-2 lh-1"
                                                    >
                                                        <a
                                                            href="#!"
                                                            class="fs-12"
                                                            >{task.code}</a
                                                        >
                                                        <div class="vr"></div>
                                                        <span
                                                            class="text-muted mb-0 fs-12"
                                                        >
                                                            <i
                                                                class="ti ti-user me-1 fw-medium"
                                                            ></i>{task.assignee}
                                                        </span>
                                                        <div class="vr"></div>
                                                        <SpkBadge
                                                            Color=""
                                                            CustomClass={`${task.priority === "High" ? "bg-danger-transparent" : task.priority === "Medium" ? "bg-warning-transparent" : "bg-success-transparent"}`}
                                                        >
                                                            {task.priority}
                                                        </SpkBadge>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span
                                                        class="d-block fw-medium"
                                                        >{task.dueDate}</span
                                                    >
                                                    <span
                                                        class="d-block fs-12 text-muted"
                                                        >Due Date</span
                                                    >
                                                </div>
                                            </div>
                                        </li>
                                    {/each}
                                </ul>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody>
                        <div
                            class="d-flex align-items-center justify-content-between flex-wrap"
                        >
                            <div class="lead-title total">Total Leads</div>
                            <div class="lead-title target">Leads Target</div>
                        </div>
                        <div
                            class="progress-stacked progress-animate progress-sm my-3"
                        >
                            <div
                                class="progress-bar"
                                role="progressbar"
                                style="width: 68%;"
                                aria-valuenow={68}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                            <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style="width: 32%;"
                                aria-valuenow={32}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                        </div>
                        <div
                            class="d-flex align-items-center gap-3 justify-content-between flex-wrap"
                        >
                            <div>
                                <span class="text-success fw-medium me-2"
                                    ><i class="ti ti-arrow-up me-1"
                                    ></i>3.25%</span
                                > Compared to last week
                            </div>
                            <div>
                                <a
                                    href="#!"
                                    class="link-primary text-decoration-underline"
                                    >Leads Report <i
                                        class="ti ti-arrow-narrow-right"
                                    ></i></a
                                >
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Leads By Source</div>
            </CardHeader>
            <CardBody class="mx-auto">
                <div id="leads-source">
                    <Spkapexcharts id="leads-source" options={LeadOptions} />
                </div>
            </CardBody>
            <CardFooter class="p-0">
                <ListGroup class="list-group-flush leads-source-list">
                    {#each TrafficSources as source}
                        <ListGroupItem class="">
                            <div
                                class="d-flex align-items-center justify-content-between"
                            >
                                <div class="fw-semibold">{source.name}</div>
                                <div class="lh-1 text-end">
                                    <span class="d-block fw-semibold mb-0">
                                        <span
                                            class={`d-inline-flex align-items-center fw-medium me-2 fs-12 ${source.trend === "up" ? "text-success" : "text-danger"}`}
                                        >
                                            <i
                                                class={`ti ti-arrow-${source.trend} me-1`}
                                            ></i>
                                            {source.percentage}
                                        </span>
                                        {source.count.toLocaleString()}
                                    </span>
                                </div>
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
                <div class="card-title">Top Deals</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled crm-top-deals">
                    {#each Deals as user}
                        <li>
                            <div class="d-flex align-items-top flex-wrap">
                                <div class="me-2">
                                    <span
                                        class="avatar avatar-sm avatar-rounded fw-semibold bg-primary-transparent"
                                    >
                                        {#if user.avatar}
                                            <Image
                                                src={user.avatar}
                                                alt={user.name}
                                            />
                                        {:else}
                                            {user.initials}
                                        {/if}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <p class="fw-semibold mb-0">{user.name}</p>
                                    <span class="text-muted fs-12"
                                        >{user.email}</span
                                    >
                                </div>
                                <div class="fw-semibold fs-15">
                                    {user.amount}
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
                <div class="card-title">Deals Statistics</div>
            </CardHeader>
            <CardBody class="py-0">
                <div id="deals-statistics">
                    <Spkapexcharts
                        id="deals-statistics"
                        options={StaticOptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={6}>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Leads Overview</div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Lead Name" },
                        { title: "Company" },
                        { title: "Status" },
                        { title: "Source" },
                    ]}
                >
                    {#each Overviewtable as lead}
                        <tr>
                            <td class={lead.borderClass}>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={lead.avatar}
                                                alt={lead.name}
                                            />
                                        </span>
                                    </div>
                                    <div>{lead.name}</div>
                                </div>
                            </td>
                            <td class={lead.borderClass}>{lead.company}</td>
                            <td class={lead.borderClass}>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${lead.status.colorClass}`}
                                    >{lead.status.label}</SpkBadge
                                >
                            </td>
                            <td class={lead.borderClass}>{lead.source}</td>
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
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Top Deals</div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    tableClass="text-nowrap"
                    Responsive={true}
                    header={[
                        { title: "Deal ID" },
                        { title: "Deal Name" },
                        { title: "Client Name" },
                        { title: "Deal Amount" },
                        { title: "Status" },
                        { title: "Closing Date" },
                        { title: "Sales Rep" },
                        { title: "Priority" },
                        { title: "Actions" },
                    ]}
                >
                    {#each TopdealsTable as deal}
                        <tr>
                            <td class={deal.borderClass}
                                ><a href="#!">{deal.id}</a></td
                            >
                            <td class={deal.borderClass}>{deal.title}</td>
                            <td class={deal.borderClass}>
                                <div
                                    class="d-flex align-items-center gap-2 position-relative"
                                >
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a href="#!" class="stretched-link"></a>
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={deal.companyLogo}
                                                alt={deal.companyName}
                                            />
                                        </span>
                                    </div>
                                    <div>{deal.companyName}</div>
                                </div>
                            </td>
                            <td class={deal.borderClass}>{deal.amount}</td>
                            <td class={deal.borderClass}
                                ><SpkBadge
                                    Color=""
                                    CustomClass={`${deal.status.colorClass}`}
                                    >{deal.status.label}</SpkBadge
                                ></td
                            >
                            <td class={deal.borderClass}>{deal.closeDate}</td>
                            <td class={deal.borderClass}>{deal.owner}</td>
                            <td class={deal.borderClass}>{deal.priority}</td>
                            <td class={deal.borderClass}>
                                <div class="btn-list">
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-icon btn-primary-light btn-sm"
                                    >
                                        <i class="ti ti-edit"></i>
                                    </SpkButton>
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-icon btn-danger-light btn-sm"
                                    >
                                        <i class="ti ti-trash"></i>
                                    </SpkButton>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter>
                <div class="d-flex align-items-center flex-wrap">
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
