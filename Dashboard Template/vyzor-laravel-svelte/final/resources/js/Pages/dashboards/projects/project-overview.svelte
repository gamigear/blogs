<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import { onMount } from "svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Badges,
        Filedocument,
        Tasks,
        TimelineMessages,
        TodoItems,
    } from "@/shared/data/dashboards/projects/projectoverviewdata";
    import {
        DropdownDownload,
        projectListDropdown1,
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
        Row,
        Table,
    } from "@sveltestrap/sveltestrap";
    import SortablePkg from "sortablejs";
    import { Link } from "@inertiajs/svelte";
    // but only on client-side - check for window
    let Sortable = SortablePkg;
    let HandleDrag;

    onMount(() => {
        new Sortable(HandleDrag, {
            handle: ".todo-handle",
            animation: 150,
        });
    });

    const basePath = __BASE_PATH__;
</script>

<!-- Page Title -->
<svelte:head>
    <title>ProjectOverview | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Projects Overview"
    subTitle="Projects"
    activepage="Dashboards"
    page="Projects Overview"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Project Details</div>
                <div class="btn-list">
                    <Link
                        href={`${basePath}/dashboards/projects/create-project`}
                        class="btn btn-sm btn-primary btn-wave"
                        ><i class="ri-add-line align-middle me-1 fw-medium"
                        ></i>Create Project</Link
                    >
                    <a href="#!" class="btn btn-sm btn-secondary btn-wave"
                        ><i class="ri-share-line align-middle fw-medium me-1"
                        ></i>Share</a
                    >
                </div>
            </CardHeader>
            <CardBody>
                <div class="d-flex align-items-center mb-4 gap-2 flex-wrap">
                    <div class="lh-1">
                        <span class="avatar avatar-lg me-1 bg-primary"
                            ><i class="ri-stack-line fs-24 lh-1"></i></span
                        >
                    </div>
                    <div>
                        <h6 class="fw-medium mb-2">E-commerce Platform</h6>
                        <SpkBadge
                            Color=""
                            CustomClass="badge bg-success-transparent"
                        >
                            In progress</SpkBadge
                        >
                        <span class="text-muted fs-12"
                            ><i class="ri-circle-fill text-success mx-2 fs-9"
                            ></i>Last Updated 1 Day Ago</span
                        >
                    </div>
                    <div class="ms-auto align-self-start">
                        <SpkDropdown
                            option={projectListDropdown1}
                            ToggleClass="btn btn-icon btn-sm btn-primary-light no-caret"
                            Caret={false}
                            parent={`<i class="fe fe-more-vertical"/>`}
                        />
                    </div>
                </div>
                <div class="fs-15 fw-medium mb-2">Project Description :</div>
                <p class="text-muted mb-4">
                    The Customer Feedback Dashboard Development project aims to
                    create a comprehensive dashboard that aggregates and
                    visualizes customer feedback data. This will enable our team
                    to gain actionable insights and improve customer
                    satisfaction.
                </p>
                <div class="d-flex gap-5 mb-4 flex-wrap">
                    <div class="d-flex align-items-center gap-2 me-3">
                        <span
                            class="avatar avatar-md avatar-rounded me-1 bg-success"
                            ><i
                                class="ri-calendar-event-line fs-18 lh-1 align-middle"
                            ></i></span
                        >
                        <div>
                            <div class="fw-medium mb-0">Start Date</div>
                            <span class="fs-12 text-muted">March 1, 2025</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2 me-3">
                        <span
                            class="avatar avatar-md avatar-rounded me-1 bg-info"
                            ><i class="ri-time-line fs-18 lh-1 align-middle"
                            ></i></span
                        >
                        <div>
                            <div class="fw-medium mb-0">End Date</div>
                            <span class="fs-12 text-muted">July 15, 2025</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <span class="avatar avatar-md avatar-rounded me-1"
                            ><Image
                                width={40}
                                height={40}
                                src="../../images/faces/11.jpg"
                                alt=""
                            /></span
                        >
                        <div>
                            <span class="d-block fs-14 fw-medium"
                                >John Smith</span
                            >
                            <span class="fs-12 text-muted">Project Manager</span
                            >
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <div class="fs-15 fw-medium mb-2">Key tasks :</div>
                            <ul class="task-details-key-tasks mb-0">
                                <li>
                                    Initial planning phase of the project
                                    including scoping and goal setting.
                                </li>
                                <li>
                                    Designing the product layout, wireframes,
                                    and UI elements.
                                </li>
                                <li>
                                    Coding and development of the website
                                    interface, functionality, and integration.
                                </li>
                                <li>
                                    Testing the product and website for bugs and
                                    quality assurance checks.
                                </li>
                                <li>
                                    Deploy the final product to the live server.
                                </li>
                                <li>
                                    Perform usability testing and iterate based
                                    on feedback.
                                </li>
                            </ul>
                        </div>
                        <Col xl={12}>
                            <div
                                class="d-flex align-items-center justify-content-between mb-2"
                            >
                                <div class="fs-15 fw-medium">Sub Tasks :</div>
                                <a
                                    href="#!"
                                    class="btn btn-primary-light btn-wave btn-sm"
                                    >See More</a
                                >
                            </div>
                            <ListGroup>
                                {#each Tasks as task}
                                    <ListGroupItem class="list-group-item">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <i
                                                    class="ri-link fs-15 lh-1 p-1 bg-primary-transparent rounded-circle"
                                                ></i>
                                            </div>
                                            <div class="fw-medium">
                                                {task.title}
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                {/each}
                            </ListGroup>
                        </Col>
                    </div>
                </div>
                <div class="fs-15 fw-medium mb-2">Skills :</div>
                <div class="d-flex gap-2 flex-wrap">
                    {#each Badges as badge}
                        <SpkBadge
                            Color=""
                            CustomClass={`badge ${badge.className}`}
                        >
                            {badge.label}
                        </SpkBadge>
                    {/each}
                </div>
            </CardBody>
            <div class="card-footer">
                <div
                    class="d-flex align-items-center justify-content-between gap-2 flex-wrap"
                >
                    <div class="d-flex gap-3 align-items-center">
                        <span class="fs-12">Assigned To :</span>
                        <div class="avatar-list-stacked">
                            <span
                                id="project-John"
                                class="avatar avatar-sm avatar-rounded"
                            >
                                <Image
                                    src="../../images/faces/2.jpg"
                                    alt="img"
                                />
                            </span>
                            <SpkTooltips
                                placement="top"
                                content="John"
                                customClass="tooltip-primary"
                                targetId="project-John"
                            ></SpkTooltips>
                            <span
                                id="project-Emily"
                                class="avatar avatar-sm avatar-rounded"
                            >
                                <Image
                                    src="../../images/faces/8.jpg"
                                    alt="img"
                                />
                            </span>
                            <SpkTooltips
                                placement="top"
                                content="Emily"
                                customClass="tooltip-primary"
                                targetId="project-Emily"
                            ></SpkTooltips>
                            <span
                                id="project-Liam"
                                class="avatar avatar-sm avatar-rounded"
                            >
                                <Image
                                    src="../../images/faces/5.jpg"
                                    alt="img"
                                />
                            </span>
                            <SpkTooltips
                                placement="top"
                                content="Liam"
                                customClass="tooltip-primary"
                                targetId="project-Liam"
                            ></SpkTooltips>
                            <span
                                id="project-Sophia"
                                class="avatar avatar-sm avatar-rounded"
                            >
                                <Image
                                    src="../../images/faces/10.jpg"
                                    alt="img"
                                />
                            </span>
                            <SpkTooltips
                                placement="top"
                                content="Sophia"
                                customClass="tooltip-primary"
                                targetId="project-Sophia"
                            ></SpkTooltips>
                            <span
                                id="project-Charlotte"
                                class="avatar avatar-sm avatar-rounded"
                            >
                                <Image
                                    src="../../images/faces/15.jpg"
                                    alt="img"
                                />
                            </span>
                            <SpkTooltips
                                placement="top"
                                content="Charlotte"
                                customClass="tooltip-primary"
                                targetId="project-Charlotte"
                            ></SpkTooltips>
                        </div>
                    </div>
                    <div class="d-flex gap-3 align-items-center">
                        <span class="fs-12">Status :</span>
                        <span class="d-block"
                            ><SpkBadge Color="info" CustomClass="badge"
                                >On going</SpkBadge
                            ></span
                        >
                    </div>
                    <div class="d-flex gap-3 align-items-center">
                        <span class="fs-12">Priority :</span>
                        <span class="d-block fs-14 fw-medium"
                            ><SpkBadge Color="secondary" CustomClass="badge"
                                >Medium</SpkBadge
                            ></span
                        >
                    </div>
                </div>
            </div>
        </Card>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Project Documents</div>
                <SpkDropdown
                    option={DropdownDownload}
                    ToggleClass="btn btn-light btn-full btn-sm no-caret"
                    parent={`View All <i class="ti ti-chevron-down ms-1"></i>`}
                />
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush">
                    {#each Filedocument as file}
                        <ListGroupItem class="">
                            <div
                                class="d-flex align-items-center flex-wrap gap-2"
                            >
                                <div class="lh-1">
                                    <span
                                        class={`avatar avatar-md avatar-rounded ${file.avatarClass} bg-light lh-1`}
                                    >
                                        <Image
                                            width={40}
                                            height={40}
                                            src={file.img}
                                            alt={file.name}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="#!">
                                        <span class="d-block fw-medium"
                                            >{file.name}</span
                                        >
                                    </a>
                                    <span
                                        class="d-block text-muted fs-12 fw-normal"
                                        >{file.size}</span
                                    >
                                </div>
                                <div class="btn-list">
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-sm btn-icon btn-info-light btn-wave"
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
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={6}>
        <Card class="custom-card justify-content-between">
            <CardHeader>
                <div class="card-title">Project Discussions</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled project-timeline">
                    {#each TimelineMessages as msg}
                        <li>
                            <div>
                                <span
                                    class="avatar avatar-sm avatar-rounded project-timeline-avatar"
                                >
                                    <Image src={msg.avatar} alt={msg.name} />
                                </span>
                                <div
                                    class="mb-2 d-flex align-items-start gap-2 flex-wrap"
                                >
                                    <div>
                                        <span class="fw-medium"
                                            >{`${msg.name} (${msg.role})`}</span
                                        >
                                    </div>
                                    <span
                                        class="ms-auto bg-light text-default badge"
                                        >{msg.time}</span
                                    >
                                </div>
                                <p class="text-muted mb-2">{msg.message}</p>
                                {#if msg.attachment}
                                    <p class="project-activity-media mb-0">
                                        <a href="#!">
                                            <Image
                                                src={msg.attachment.img}
                                                alt="attachment"
                                                class="img-fluid bg-light"
                                            />
                                        </a>
                                        <span class="fs-11 text-muted ms-2"
                                            >{msg.attachment.size}</span
                                        >
                                    </p>
                                {/if}
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
            <CardFooter>
                <div class="d-sm-flex align-items-center lh-1">
                    <div
                        class="me-sm-2 mb-2 mb-sm-0 p-1 rounded-circle bg-primary-transparent d-inline-block"
                    >
                        <Image
                            width={28}
                            height={28}
                            src="../../images/faces/5.jpg"
                            alt=""
                            class="avatar avatar-sm avatar-rounded"
                        />
                    </div>
                    <div class="flex-fill">
                        <div class="input-group flex-nowrap">
                            <Input
                                type="text"
                                class="w-sm-50 border shadow-none"
                                placeholder="Share your thoughts"
                                aria-label="Recipient's username with two button addons"
                            />
                            <SpkButton
                                color=""
                                customClass="btn-primary-light btn-sm btn-wave wave-effect waves-light"
                                buttontype="button"
                                ><i class="bi bi-emoji-smile"></i></SpkButton
                            >
                            <SpkButton
                                color=""
                                customClass="btn-primary-light btn-sm btn-wave wave-effect waves-light"
                                buttontype="button"
                                ><i class="bi bi-paperclip"></i></SpkButton
                            >
                            <SpkButton
                                color=""
                                customClass="btn-primary-light btn-sm btn-wave wave-effect waves-light"
                                buttontype="button"
                                ><i class="bi bi-camera"></i></SpkButton
                            >
                            <SpkButton
                                color=""
                                customClass="btn-primary btn-wave text-nowrap  wave-effect waves-light"
                                buttontype="button">Post</SpkButton
                            >
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">To Do Tasks</div>
                <div class="btn btn-sm btn-primary-light btn-wave">
                    <i class="ri-add-line align-middle me-1 fw-medium"></i>Add
                    Task
                </div>
            </CardHeader>
            <CardBody class="p-0 position-relative" id="todo-content">
                <Table responsive={true}>
                    <thead
                        ><tr
                            ><th>
                                <input
                                    class="form-check-input check-all"
                                    type="checkbox"
                                    id="all-tasks"
                                    value=""
                                    aria-label="..."
                                />
                            </th><th class="todolist-handle-drag"> </th><th
                                scope="col">Task Title</th
                            ><th scope="col">Status</th><th scope="col"
                                >End Date</th
                            ><th scope="col">Action</th></tr
                        >
                    </thead>
                    <tbody id="todo-drag" bind:this={HandleDrag}>
                        {#each TodoItems as item, index}
                            <tr class="todo-box">
                                <td
                                    class={`task-checkbox ${index === TodoItems.length - 1 ? "border-bottom-0" : ""}`}
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        aria-label="..."
                                        defaultChecked={item.checked}
                                    />
                                </td>
                                <td
                                    class={index === TodoItems.length - 1
                                        ? "border-bottom-0"
                                        : ""}
                                >
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-icon btn-sm btn-wave btn-light todo-handle"
                                        >: :</SpkButton
                                    >
                                </td>
                                <td
                                    class={index === TodoItems.length - 1
                                        ? "border-bottom-0"
                                        : ""}
                                >
                                    <div class="fw-medium todo-task-title text-truncate">
                                        {item.title}
                                    </div>
                                </td>
                                <td
                                    class={index === TodoItems.length - 1
                                        ? "border-bottom-0"
                                        : ""}
                                >
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`badge ${item.badgeClass}`}
                                    >
                                        <i
                                            class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"
                                        ></i>
                                        {item.status}
                                    </SpkBadge>
                                </td>
                                <td
                                    class={index === TodoItems.length - 1
                                        ? "border-bottom-0"
                                        : ""}
                                >
                                    {item.date}
                                </td>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <td
                                    class={`text-end ${index === TodoItems.length - 1 ? "border-bottom-0" : ""}`}
                                >
                                    <div class="d-flex gap-2">
                                        <a
                                            href="#!"
                                            class="btn btn-icon btn-sm btn-info-light btn-wave"
                                        >
                                            <i class="ri-edit-line"></i>
                                        </a>
                                        <a
                                            href="#!"
                                            class="btn btn-icon btn-sm btn-danger-light btn-wave"
                                        >
                                            <i class="ri-delete-bin-line"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
