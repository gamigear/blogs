<script lang="ts">
    import SpkListcard from "$lib/@spk/application-reusable/spk-listcard.svelte";
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Listviewassigneddata,
        Prioritydata,
        Statusdata,
        taskData,
        Taskstable,
    } from "$lib/data/applications/task/listviewdata";
    import { DropdownNewTasks } from "$lib/data/uielements/dropdowndata";
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
        ModalHeader,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { DateInput } from "date-picker-svelte";
    import Select from "svelte-select";

    function getStatusColor(status: string): string {
        switch (status) {
            case "Completed":
                return "success";
            case "In Progress":
                return "orange";
            case "Pending":
                return "info";
            default:
                return "secondary";
        }
    }

    function getPriorityClass(priority: string): string {
        switch (priority) {
            case "High":
                return "bg-danger-transparent";
            case "Medium":
                return "bg-warning-transparent";
            case "Low":
                return "bg-teal-transparent";
            default:
                return "bg-secondary";
        }
    }

    let date = new Date();
    let date1 = new Date();

    let allData = Taskstable;

    const handleRemove = (id: string) => {
        allData = allData.filter((idx) => idx.id !== id);
    };

    let modals: any = {};

    // Function to open the modal
    const handleModalOpen = (modalName: any) => {
        modals[modalName] = true;
    };

    // Function to close the modal
    const handleModalClose = (modalName: any) => {
        modals[modalName] = false;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>ListView | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Task List View"
    activepage="Applications"
    subTitle="Task"
    page="Task List View"
/>
<!-- Page Header Close -->

<Row>
    <Col xl={12}>
        <Row>
            {#each taskData as idx}
                <Col xl={3} lg={6}>
                    <SpkListcard
                        titleClass="mb-2 fs-12"
                        listCard={true}
                        cardClass={idx.cardClass}
                        list={idx}
                    />
                </Col>
            {/each}
        </Row>
    </Col>
</Row>
<Col xxl={12} xl={12} class="">
    <Card class="custom-card">
        <CardHeader class="justify-content-between">
            <div class="card-title">Total Tasks</div>
            <div class="d-flex">
                <SpkButton
                    color="primary"
                    onclickfunc={() => handleModalOpen("addmodal")}
                    customClass="btn btn-sm btn-wave waves-light me-1"
                    ><i class="ri-add-line fw-medium align-middle me-1"></i> Create
                    Task</SpkButton
                >
                <Modal
                    isOpen={modals["addmodal"]}
                    toggle={() => handleModalClose("addmodal")}
                    fade
                    id="create-task"
                    tabindex={-1}
                    centered
                >
                    <ModalHeader toggle={() => handleModalClose("addmodal")}>
                        <h6 class="modal-title">Add Task</h6>
                    </ModalHeader>
                    <ModalBody>
                        <Row class=" gy-2">
                            <Col xl={6}>
                                <Label for="task-name" class="">Task Name</Label
                                >
                                <Input
                                    type="text"
                                    class=""
                                    id="task-name"
                                    placeholder="Task Name"
                                />
                            </Col>
                            <Col xl={6}>
                                <Label for="task-id" class="">Task ID</Label>
                                <Input
                                    type="text"
                                    class=""
                                    id="task-id"
                                    placeholder="Task ID"
                                />
                            </Col>
                            <Col xl={6}>
                                <Label class="">Assigned Date</Label>
                                <div class="form-group custom-date-picker">
                                    <div class="input-group flex-nowrap">
                                        <div
                                            class="input-group-text text-muted"
                                        >
                                            <i class="ri-calendar-line"></i>
                                        </div>
                                        <DateInput
                                            bind:value={date}
                                            class="form-control"
                                            format="yy-MM-dd"
                                             closeOnSelection={true}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Label>Due Date</Label>
                                <div class="form-group custom-date-picker">
                                    <div class="input-group flex-nowrap">
                                        <div
                                            class="input-group-text text-muted"
                                        >
                                            <i class="ri-calendar-line"></i>
                                        </div>
                                        <DateInput
                                            bind:value={date1}
                                            class="form-control"
                                            format="yy-MM-dd"
                                             closeOnSelection={true}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Label>Status</Label>
                                <Select
                                    items={Statusdata}
                                    value={Statusdata[0]}
                                    clearable={false}
                                    showChevron={true}
                                />
                            </Col>
                            <Col xl={6}>
                                <Label>Priority</Label>
                                <Select
                                    items={Prioritydata}
                                    value={Prioritydata[0]}
                                    clearable={false}
                                    showChevron={true}
                                />
                            </Col>
                            <Col xl={12}>
                                <Label>Assigned To</Label>
                                <Select
                                    items={Listviewassigneddata}
                                    multiFullItemClearable
                                    multiple
                                />
                            </Col>
                        </Row>
                    </ModalBody>
                    <div class="modal-footer">
                        <SpkButton
                            buttontype="button"
                            onclickfunc={() => handleModalClose("addmodal")}
                            color="light"
                            customClass=""
                        >
                            Cancel
                        </SpkButton>
                        <SpkButton
                            buttontype="button"
                            color="primary"
                            customClass=""
                        >
                            Add Task
                        </SpkButton>
                    </div>
                    <!-- {/* </div> */} -->
                </Modal>
                <SpkDropdown
                    option={DropdownNewTasks}
                    ToggleClass="btn btn-icon btn-secondary btn-sm btn-wave waves-light no-caret"
                    Caret={false}
                    parent={`<i class="ti ti-dots-vertical"></i>`}
                />
            </div>
        </CardHeader>
        <CardBody class="p-0">
            <SpkTablescomponent
                tableClass="text-nowrap"
                headerClass="table-light"
                showCheckbox={true}
                Responsive={true}
                header={[
                    { title: "Task" },
                    { title: "Task ID" },
                    { title: "Assigned Date" },
                    { title: "Status" },
                    { title: "Due Date" },
                    { title: "Priority" },
                    { title: "Assigned To" },
                    { title: "Action" },
                ]}
            >
                {#each allData as task}
                    <tr class="task-list">
                        <td class="task-checkbox">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                aria-label="..."
                                defaultChecked={task.completed}
                            />
                        </td>
                        <td>
                            <a
                                href="#!"
                                class="fw-medium"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                            >
                                {task.title}
                            </a>
                        </td>
                        <td><span class="fw-medium">{task.code}</span></td>
                        <td>{task.startDate}</td>
                        <td>
                            <span
                                class={`fw-medium text-${getStatusColor(task.status)}`}
                            >
                                {task.status}
                            </span>
                        </td>
                        <td>{task.dueDate}</td>
                        <td>
                            <SpkBadge
                                Color=""
                                CustomClass={`badge ${getPriorityClass(task.priority)}`}
                            >
                                {task.priority}
                            </SpkBadge>
                        </td>
                        <td>
                            <div class="avatar-list-stacked">
                                {#each task.avatars as src}
                                    <span
                                        class="avatar avatar-sm avatar-rounded"
                                    >
                                        <Image {src} alt="img" />
                                    </span>
                                {/each}
                                {#if task.extraMembers > 0}
                                    <a
                                        class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                        href="#!"
                                    >
                                        +{task.extraMembers}
                                    </a>
                                {/if}
                            </div>
                        </td>
                        <td>
                            <SpkButton
                                color=""
                                id={`edit-${task.id}`}
                                customClass="btn btn-primary-light btn-icon btn-sm"
                            >
                                <i class="ri-edit-line"></i>
                            </SpkButton>
                            <SpkTooltips
                                placement="top"
                                content="Edit"
                                targetId={`edit-${task.id}`}
                            ></SpkTooltips>
                            <SpkButton
                                color=""
                                onclickfunc={() => handleRemove(task.id)}
                                customClass="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"
                            >
                                <i class="ri-delete-bin-5-line"></i>
                            </SpkButton>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </CardBody>
        <CardFooter class="border-top-0">
            <div class="d-flex align-items-center">
                <div>
                    Showing 10 Entries <i
                        class="bi bi-arrow-right ms-2 fw-semibold"
                    ></i>
                </div>
                <div class="ms-auto">
                    <nav
                        aria-label="Page navigation"
                        class="pagination-style-2"
                    >
                        <Pagination class="customPaginationPageBottom">
                            <PaginationItem >
                                <PaginationLink on:click={(e)=>e.preventDefault()} href="#">Prev</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink on:click={(e)=>e.preventDefault()} href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink on:click={(e)=>e.preventDefault()} href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink on:click={(e)=>e.preventDefault()} href="#">...</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink on:click={(e)=>e.preventDefault()} href="#">17</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink on:click={(e)=>e.preventDefault()} href="#" class="text-primary"
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
