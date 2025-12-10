
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";

    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Categories,
        Listviewassigneddata,
        Prioritydata,
        Statusdata,
        TodoCategories,
        TodoDropdown,
        Todotables,
    } from "@/shared/data/applications/todolistdata";
    import { SortByDropdown } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Label,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Pagination,
        PaginationItem,
        PaginationLink,
        Progress,
        Row,
        Table,
    } from "@sveltestrap/sveltestrap";
    import { DateInput } from "date-picker-svelte";
    import Select from "svelte-select";
    import SortablePkg from "sortablejs";
    import { onMount } from "svelte";
    // but only on client-side - check for window
    let Sortable = SortablePkg;
    let HandleDrag;

    onMount(() => {
        new Sortable(HandleDrag, {
            handle: ".todo-handle",
            animation: 150,
        });
    });

    let modals = {};

    // Function to open the modal
    const handleModalOpen = (modalName) => {
        modals[modalName] = true;
    };

    // Function to close the modal
    const handleModalClose = (modalName) => {
        modals[modalName] = false;
    };

    let date = new Date();
    let date1 = new Date();
</script>

<!-- Page Title -->
<svelte:head>
    <title>ToDoList | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="To Do List" activepage="Applications" page="To Do List" />
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={3}>
        <Card class="custom-card">
            <CardBody class="p-0">
                <div
                    class="p-3 task-navigation border-bottom border-block-end-dashed"
                >
                    <div class="d-grid">
                        <SpkButton
                            color=""
                            onclickfunc={() => handleModalOpen("basicModal")}
                            customClass="btn btn-primary rounded-pill d-flex align-items-center justify-content-center"
                        >
                            <i
                                class="ri-add-circle-line fs-16 align-middle me-1"
                            ></i>Create New Task
                        </SpkButton>
                    </div>
                    <ul class="list-unstyled task-main-nav mb-0 mt-3">
                        <li class="px-0 pt-0">
                            <span class="fs-11 text-muted op-7 fw-medium"
                                >Tasks</span
                            >
                        </li>
                        {#each TodoCategories as category}
                            <li class={category.active ? "active" : ""}>
                                <a href="#!">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1 todo-menu-icon"
                                            >{@html category.icon}</span
                                        >
                                        <span class="flex-fill text-nowrap"
                                            >{category.name}</span
                                        >
                                        {#if category.badgeCount}
                                            <SpkBadge
                                                Color=""
                                                CustomClass="bg-success rounded-pill"
                                                >{category.badgeCount}</SpkBadge
                                            >
                                        {/if}
                                    </div>
                                </a>
                            </li>
                        {/each}
                        <li class="px-0 pt-2">
                            <span class="fs-11 text-muted op-7 fw-medium"
                                >Categories</span
                            >
                        </li>
                        {#each Categories as category}
                            <li>
                                <a href="#!">
                                    <div
                                        class="d-flex align-items-center flex-wrap"
                                    >
                                        <span class="me-2 lh-1">
                                            <i
                                                class={`${category.iconClass} ${category.textColor}`}
                                            ></i>
                                        </span>
                                        <span class="flex-fill text-nowrap"
                                            >{category.name}</span
                                        >
                                    </div>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="p-3 text-center">
                    <Image src="../images/media/media-66.png" alt="" />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={9}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search Here"
                        aria-label=".form-control-sm example"
                    />
                </div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkDropdown
                        option={SortByDropdown}
                        ToggleClass="btn btn-primary btn-wave waves-effect waves-light no-caret"
                        parent={` Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0 position-relative" id="todo-content">
                <Table responsive={true} class="text-nowrap">
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
                            ><th scope="col">Assigned To</th><th scope="col"
                                >Priority</th
                            ><th scope="col">Due Date</th><th scope="col"
                                >Status</th
                            ><th scope="col">Created On</th><th
                                scope="col"
                                class="todolist-progress">Progress</th
                            ><th scope="col" class="text-end">Action</th></tr
                        >
                    </thead>
                    <tbody id="todo-drag" bind:this={HandleDrag}>
                        {#each Todotables as task}
                            <tr class="todo-box">
                                <td class="task-checkbox">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                    />
                                </td>
                                <td>
                                    <button
                                        class="btn btn-icon btn-sm btn-wave btn-light todo-handle"
                                        >: :</button
                                    >
                                </td>
                                <td>
                                    <a href="#!" class="fw-medium"
                                        >{task.title}</a
                                    >
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
                                                    src={task.assignee.avatar}
                                                    alt={task.assignee.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="fw-medium">
                                            {task.assignee.name}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span
                                        class={`fw-medium text-${task.priorityColor}`}
                                    >
                                        <i
                                            class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"
                                        ></i>
                                        {task.priority}
                                    </span>
                                </td>
                                <td>{task.dueDate}</td>
                                <td>
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`badge bg-${task.statusColor}-transparent`}
                                    >
                                        {task.status}
                                    </SpkBadge>
                                </td>
                                <td>{task.createdDate}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <Progress
                                            color="primary"
                                            class="progress-xs w-100"
                                            striped
                                            animated
                                            value={task.progress}
                                        />
                                        <div class="ms-2">{task.progress}%</div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <SpkDropdown
                                        option={TodoDropdown}
                                        Color="light"
                                        ToggleClass="btn btn-icon btn-sm btn-wave no-caret"
                                        Caret={false}
                                        parent={`<i class="ri-more-2-fill text-muted"></i>`}
                                    />
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </Table>
            </CardBody>
            <CardFooter class="border-top-0">
                <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                >
                    <div>
                        Showing 10 Entries <i
                            class="bi bi-arrow-right ms-2 fw-semibold"
                        ></i>
                    </div>
                    <div>
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-4"
                        >
                            <Pagination class="customPaginationPageBottom">
                                <PaginationItem disabled>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        on:click={(e) => e.preventDefault()}
                                        href="#">2</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink class="text-primary"
                                        on:click={(e) => e.preventDefault()}
                                        href="#">Next</PaginationLink
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

<!--End::row-1 -->

<!-- Start:: Add new task modal -->

<Modal
    isOpen={modals["basicModal"]}
    toggle={() => handleModalClose("basicModal")}
    fade
    centered
    id="create-task"
    tabindex={-1}
>
    <ModalHeader toggle={() => handleModalClose("basicModal")}>
        <h6 class="modal-title">Create Task</h6>
    </ModalHeader>
    <ModalBody>
        <div class="row gy-2">
            <Col xl={12}>
                <Label for="task-name" class="">Task Name</Label>
                <Input
                    type="text"
                    class=""
                    id="task-name"
                    placeholder="Task Name"
                />
            </Col>
            <Col xl={12}>
                <Label>Assigned To</Label>
                <Select
                    items={Listviewassigneddata}
                    multiFullItemClearable
                    multiple
                    value={Listviewassigneddata[0]}
                />
            </Col>
            <Col xl={6}>
                <Label class="">Assigned Date</Label>
                <div class="form-group custom-date-picker">
                    <div class="input-group custom-input-group flex-nowrap">
                        <div class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </div>
                        <DateInput
                            bind:value={date}
                            class="form-control"
                            format="yyyy-dd-mm HH:mm"
                            closeOnSelection={true}
                            timePrecision='minute'
                        />
                    </div>
                </div>
            </Col>
            <Col xl={6}>
                <Label class="">Target Date</Label>
                <div class="form-group custom-date-picker">
                    <div class="input-group custom-input-group flex-nowrap">
                        <div class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </div>
                        <DateInput
                            bind:value={date1}
                            class="form-control"
                            format="yyyy-dd-mm HH:mm"
                            closeOnSelection={true}
                            timePrecision='minute'
                        />
                    </div>
                </div>
            </Col>
            <Col xl={6}>
                <Label>Status</Label>
                <Select
                    items={Statusdata}
                    placeholder="Select"
                    clearable={false}
                    showChevron={true}
                    searchable={true}
                />
            </Col>
            <Col xl={6}>
                <Label>Priority</Label>
                <Select
                    items={Prioritydata}
                    placeholder="Select"
                    clearable={false}
                    showChevron={true}
                    searchable={true}
                />
            </Col>
        </div>
    </ModalBody>
    <ModalFooter>
        <SpkButton
            color="light"
            buttontype="button"
            onclickfunc={() => handleModalClose("basicModal")}>Cancel</SpkButton
        >
        <SpkButton color="primary" buttontype="button">Add Task</SpkButton>
    </ModalFooter>
</Modal>

<!-- End:: Add new task modal -->
