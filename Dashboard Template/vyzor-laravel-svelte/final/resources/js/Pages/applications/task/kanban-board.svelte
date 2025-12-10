<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkKanbancard from "@/shared/@spk/application-reusable/spk-kanbancard.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import {
        cars,
        KanbanCards,
        kanbanCardsdanger,
        kanbanCardsinfo,
        kanbanCardsuccess,
        kanbanCardswarning,
        Option1,
        simpleItems1,
    } from "@/shared/data/applications/task/kanbandata";
    import {
        Card,
        CardBody,
        Col,
        Image,
        Input,
        Label,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    import Select from "svelte-select";
    import { DateInput } from "date-picker-svelte";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );

    //  date

    let date = new Date();
    let date1 = new Date();

    let leftContainerRef1;
    let rightContainerRef1;
    let topContainerRef1;
    let bottomContainerRef1;
    let lastContainerRef1;
    let childCount = 0;
    let childCount1 = 0;
    let childCount2 = 0;
    let childCount3 = 0;
    let childCount4 = 0;

    function updateCounts() {
        childCount = leftContainerRef1?.children.length || 0;
        childCount1 = rightContainerRef1?.children.length || 0;
        childCount2 = topContainerRef1?.children.length || 0;
        childCount3 = bottomContainerRef1?.children.length || 0;
        childCount4 = lastContainerRef1?.children.length || 0;
    }

    onMount(() => {
        const observer1 = new MutationObserver(updateCounts);
        const observer2 = new MutationObserver(updateCounts);
        const observer3 = new MutationObserver(updateCounts);
        const observer4 = new MutationObserver(updateCounts);
        const observer5 = new MutationObserver(updateCounts);

        observer1.observe(leftContainerRef1, { childList: true });
        observer2.observe(rightContainerRef1, { childList: true });
        observer3.observe(topContainerRef1, { childList: true });
        observer4.observe(bottomContainerRef1, { childList: true });
        observer5.observe(lastContainerRef1, { childList: true });

        // Initial count
        updateCounts();

        return () => {
            observer1.disconnect();
            observer2.disconnect();
            observer3.disconnect();
            observer4.disconnect();
            observer5.disconnect();
        };
    });

    onMount(async () => {
        if (typeof global === "undefined") {
            window.global = window;
        }

        // Dynamically import dragula only on the client-side
        const dragula = await import("dragula");
        // Initialize Dragula with two containers
        const drake = dragula.default([
            leftContainerRef1,
            rightContainerRef1,
            topContainerRef1,
            bottomContainerRef1,
            lastContainerRef1,
        ]);
        return () => drake.destroy();
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
</script>

<!-- Page Title -->
<svelte:head>
    <title>KanbanBoard | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Kanban Board"
    activepage="Applications"
    subTitle="Task"
    page="Kanban Board"
/>
<!-- Page Header Close -->
<!-- Start:: row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody class="p-3">
                <div
                    class="d-sm-flex align-items-center flex-wrap gap-3 kanban-header justify-content-between"
                >
                    <div
                        class="d-sm-flex align-items-center flex-wrap gap-3 w-sm-50 mb-sm-0 mb-3"
                    >
                        <div class="mb-sm-0 mb-3">
                            <SpkButton
                                color="primary"
                                customClass="btn me-2"
                                onclickfunc={() => handleModalOpen("addmodal")}
                                ><i
                                    class="ri-add-line me-1 fw-medium align-middle"
                                ></i>New Board</SpkButton
                            >
                        </div>
                        <div>
                            <div class="avatar-list-stacked">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/2.jpg"
                                        alt="img"
                                    />
                                </span>
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/8.jpg"
                                        alt="img"
                                    />
                                </span>
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/2.jpg"
                                        alt="img"
                                    />
                                </span>
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/10.jpg"
                                        alt="img"
                                    />
                                </span>
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/4.jpg"
                                        alt="img"
                                    />
                                </span>
                                <span class="avatar avatar-sm avatar-rounded">
                                    <Image
                                        src="../../images/faces/13.jpg"
                                        alt="img"
                                    />
                                </span>
                                <a
                                    class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                    href="#!"
                                >
                                    +8
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-sm-flex align-items-center justify-content-end gap-3 custom-kanaban"
                    >
                        <Select
                            items={Option1}
                            placeholder="Sort By"
                            clearable={false}
                            showChevron={true}
                        />
                        <!-- <SpkSelect name="colors" option={Option1} mainClass="w-full !rounded-md"
                                        menuplacement='auto' classprefix="Select2" defaultvalue={[Option1[0]]} /> -->
                        <div class="d-flex mt-sm-0 mt-3" role="search">
                            <Input
                                class="me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <SpkButton
                                color=""
                                customClass="btn btn-light"
                                buttontype="submit">Search</SpkButton
                            >
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start::row-2 -->
<div class="VYZOR-kanban-board">
    <div class="kanban-tasks-type new">
        <div class="pe-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="d-block fw-medium fs-15">New - 04</span>
                <div>
                    <a
                        aria-label="anchor"
                        href="#!"
                        onclick={() => handleModalOpen("taskmodal")}
                        class="btn btn-sm bg-white text-default border btn-wave"
                    >
                        <i class="ri-add-line align-middle me-1 fw-medium"
                        ></i>Add Task
                    </a>
                </div>
            </div>
        </div>
        <div class="kanban-tasks overflow-y-scroll me-3" id="new-tasks">
            <div
                id="new-tasks-draggable"
                data-view-btn="new-tasks"
                bind:this={leftContainerRef1}
                class={`${childCount === 0 ? "task-Null" : ""}`}
            >
                {#each KanbanCards as idx}
                    <SpkKanbancard kanban={idx} />
                {/each}
            </div>
        </div>
        <div
            class={`d-grid view-more-button mt-3 me-3 ${childCount === 0 ? "d-none" : ""}`}
        >
            <SpkButton color="" customClass="btn btn-primary-light btn-wave"
                >View More</SpkButton
            >
        </div>
    </div>
    <div class="kanban-tasks-type todo">
        <div class="pe-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="d-block fw-medium fs-15">Todo - 36</span>
                <div>
                    <a
                        aria-label="anchor"
                        href="#!"
                        onclick={() => handleModalOpen("taskmodal")}
                        class="btn btn-sm bg-white text-default border btn-wave"
                    >
                        <i class="ri-add-line align-middle me-1 fw-medium"
                        ></i>Add Task
                    </a>
                </div>
            </div>
        </div>
        <div class="kanban-tasks overflow-y-scroll me-3" id="todo-tasks">
            <div
                id="todo-tasks-draggable"
                data-view-btn="todo-tasks"
                bind:this={rightContainerRef1}
                class={`${childCount1 === 0 ? "task-Null" : ""}`}
            >
                {#each kanbanCardswarning as idx}
                    <SpkKanbancard kanban={idx} />
                {/each}
            </div>
        </div>
        <div
            class={`d-grid view-more-button mt-3 me-3 ${childCount1 === 0 ? "d-none" : ""}`}
        >
            <SpkButton color="" customClass="btn btn-warning-light btn-wave"
                >View More</SpkButton
            >
        </div>
    </div>
    <div class="kanban-tasks-type in-progress">
        <div class="pe-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="d-block fw-medium fs-15">On Going - 25</span>
                <div>
                    <a
                        aria-label="anchor"
                        href="#!"
                        onclick={() => handleModalOpen("taskmodal")}
                        class="btn btn-sm bg-white text-default border btn-wave"
                    >
                        <i class="ri-add-line align-middle me-1 fw-medium"
                        ></i>Add Task
                    </a>
                </div>
            </div>
        </div>
        <div class="kanban-tasks overflow-y-scroll me-3" id="inprogress-tasks">
            <div
                id="inprogress-tasks-draggable"
                data-view-btn="inprogress-tasks"
                bind:this={topContainerRef1}
                class={`${childCount2 === 0 ? "task-Null" : ""}`}
            >
                {#each kanbanCardsinfo as idx}
                    <SpkKanbancard kanban={idx} />
                {/each}
            </div>
        </div>
        <div
            class={`d-grid view-more-button mt-3 me-3 ${childCount2 === 0 ? "d-none" : ""}`}
        >
            <SpkButton color="" customClass="btn btn-info-light btn-wave"
                >View More</SpkButton
            >
        </div>
    </div>
    <div class="kanban-tasks-type inreview">
        <div class="pe-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="d-block fw-medium fs-15">In Review - 02</span>
                <div>
                    <a
                        aria-label="anchor"
                        href="#!"
                        onclick={() => handleModalOpen("taskmodal")}
                        class="btn btn-sm bg-white text-default border btn-wave"
                    >
                        <i class="ri-add-line align-middle me-1 fw-medium"
                        ></i>Add Task
                    </a>
                </div>
            </div>
        </div>
        <div class="kanban-tasks overflow-y-scroll me-3" id="inreview-tasks">
            <div
                id="inreview-tasks-draggable"
                data-view-btn="inreview-tasks"
                bind:this={bottomContainerRef1}
                class={`${childCount3 === 0 ? "task-Null" : ""}`}
            >
                {#each kanbanCardsdanger as idx}
                    <SpkKanbancard kanban={idx} />
                {/each}
            </div>
        </div>
        <div
            class={`d-grid view-more-button mt-3 me-3 ${childCount3 === 0 ? "d-none" : ""}`}
        >
            <SpkButton color="" customClass="btn btn-danger-light btn-wave"
                >View More</SpkButton
            >
        </div>
    </div>
    <div class="kanban-tasks-type completed">
        <div class="pe-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="d-block fw-medium fs-15">Completed - 36</span>
                <div>
                    <a
                        aria-label="anchor"
                        href="#!"
                        onclick={() => handleModalOpen("taskmodal")}
                        class="btn btn-sm bg-white text-default border btn-wave"
                    >
                        <i class="ri-add-line align-middle me-1 fw-medium"
                        ></i>Add Task
                    </a>
                </div>
            </div>
        </div>
        <div class="kanban-tasks overflow-y-scroll me-3" id="completed-tasks">
            <div
                id="completed-tasks-draggable"
                data-view-btn="completed-tasks"
                bind:this={lastContainerRef1}
                class={`${childCount4 === 0 ? "task-Null" : ""}`}
            >
                {#each kanbanCardsuccess as idx}
                    <SpkKanbancard kanban={idx} />
                {/each}
            </div>
        </div>
        <div
            class={`d-grid view-more-button mt-3 me-3 ${childCount4 === 0 ? "d-none" : ""}`}
        >
            <SpkButton color="" customClass="btn btn-success-light btn-wave"
                >View More</SpkButton
            >
        </div>
    </div>
</div>

<!--End::row-2 -->

<!-- Modal Code  -->

<Modal
    isOpen={modals["addmodal"]}
    toggle={() => handleModalClose("addmodal")}
    centered
    fade
    id="add-board"
    tabindex={-1}
>
    <ModalHeader toggle={() => handleModalClose("addmodal")}>
        <h6 class="modal-title">Add Board</h6>
    </ModalHeader>
    <ModalBody>
        <Row>
            <Col xl={12}>
                <label for="board-title" class="form-label"
                    >Task Board Title</label
                >
                <Input
                    type="text"
                    class=""
                    id="board-title"
                    placeholder="Board Title"
                />
            </Col>
        </Row>
    </ModalBody>
    <ModalFooter>
        <SpkButton
            color="light"
            buttontype="button"
            onclickfunc={() => handleModalClose("addmodal")}
        >
            Cancel
        </SpkButton>
        <SpkButton color="primary" buttontype="button">Add Board</SpkButton>
    </ModalFooter>
</Modal>

<!-- Start::add task modal -->

<Modal
    isOpen={modals["taskmodal"] || false}
    toggle={() => handleModalClose("taskmodal")}
    centered
    fade
    id="add-task"
    tabindex={-1}
>
    <div class="">
        <div class="">
            <ModalHeader toggle={() => handleModalClose("taskmodal")}>
                <h6>Add Task</h6>
            </ModalHeader>
            <ModalBody class="px-4">
                <Row class="gy-2">
                    <Col xl={6}>
                        <Label for="task-name" class="form-label"
                            >Task Name</Label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="task-name"
                            placeholder="Task Name"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="task-id" class="form-label">Task ID</Label>
                        <input
                            type="text"
                            class="form-control"
                            id="task-id"
                            placeholder="Task ID"
                        />
                    </Col>
                    <Col xl={12}>
                        <Label for="text-area" class="form-label"
                            >Task Description</Label
                        >
                        <textarea
                            class="form-control"
                            id="text-area"
                            rows={2}
                            placeholder="Write Description"
                        ></textarea>
                    </Col>
                    <Col xl={12}>
                        <Label for="text-area" class="form-label"
                            >Task Images</Label
                        >
                        <FilePond
                            class="multiple-filepond"
                            name="filepond"
                            labelIdle={`Drag & Drop your files or <span class="filepond--label-action">Browse</span>`}
                            stylePanelLayout=" "
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                            allowMultiple={true}
                        />
                    </Col>
                    <Col xl={12}>
                        <Label class="form-label">Assigned To</Label>
                        <Select
                            items={simpleItems1}
                            placeholder="Sort By"
                            showChevron={false}
                            multiFullItemClearable
                            multiple
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="form-label">Target Date</Label>
                        <div class="form-group custom-date-picker">
                            <div class="input-group custom-input-group">
                                <div class="input-group-text text-muted">
                                    <i class="ri-calendar-line"></i>
                                </div>
                                <DateInput
                                    bind:value={date}
                                    class="form-control"
                                    format="yy-MM-dd HH:MM"
                                    closeOnSelection={true}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Label class="form-label">Tags</Label>
                        <Select
                            items={cars}
                            multiFullItemClearable
                            multiple
                            placeholder="Sort By"
                            clearable={false}
                            showChevron={false}
                        />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <SpkButton
                    color="light"
                    buttontype="button"
                    customClass="btn btn-light"
                    onclickfunc={() => handleModalClose("taskmodal")}
                    >Cancel</SpkButton
                >
                <SpkButton
                    color="primary"
                    buttontype="button"
                    customClass="btn btn-primary">Add Task</SpkButton
                >
            </ModalFooter>
        </div>
    </div>
</Modal>

<!-- End::add task modal -->
