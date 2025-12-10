<script lang="ts">
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        AvatarImages,
        projectData,
        Projectselectdata,
    } from "$lib/data/dashboards/projects/projectlistdata";
    import { projectListDropdown } from "$lib/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        Col,
        Image,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    import { base } from "$app/paths";
    const basePath = base;
    const statusBadgeClass: any = {
        "In Progress": "bg-info-transparent",
        Completed: "bg-success-transparent",
        Delayed: "bg-warning-transparent",
        "Not Started": "bg-light text-default",
    };

    const priorityColorClass = {
        High: "text-danger",
        Medium: "text-info",
        Low: "text-primary",
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>ProjectsList | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Projects List"
    subTitle="Projects"
    activepage="Dashboards"
    page="Projects List"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody class="p-3">
                <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-3"
                >
                    <div class="d-flex gap-1 project-list-main flex-wrap">
                        <a
                            href={`${basePath}/dashboards/projects/create-project`}
                            class="btn btn-primary me-2 custom-project-list"
                            ><i class="ri-add-line me-1 fw-medium align-middle"
                            ></i>New Project</a
                        >
                        <Select
                            items={Projectselectdata}
                            placeholder="Sort By"
                            class="projects-sort basic-multi-select custom-project-list"
                            clearable={false}
                                    showChevron={true}
                        />
                    </div>
                    <div class="avatar-list-stacked">
                        {#each AvatarImages as src, index}
                            <span class="avatar avatar-sm avatar-rounded">
                                <Image {src} alt={`avatar-${index + 1}`} />
                            </span>
                        {/each}
                        <a
                            class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                            href="#!"
                        >
                            +8
                        </a>
                    </div>
                    <div class="d-flex" role="search">
                        <Input
                            class="me-2"
                            type="search"
                            placeholder="Search Project"
                            aria-label="Search"
                        />
                        <SpkButton
                            color="light"
                            customClass="btn"
                            buttontype="submit">Search</SpkButton
                        >
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End::row-1 -->

<!-- Start::row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card overflow-hidden">
            <CardBody class="p-0">
               <SpkTablescomponent
                    Responsive={true}
                        tableClass="text-nowrap"
                        header={[
                            { title: "Project Name" },
                            { title: "Client Name" },
                            { title: "Start Date" },
                            { title: "End Date" },
                            { title: "Status" },
                            { title: "Budget (USD)" },
                            { title: "Assigned Team" },
                            { title: "Priority" },
                            { title: "Actions" },
                        ]}
                    >
                        {#each projectData as project}
                            <tr>
                                <td>{project.name}</td>
                                <td>
                                    <div
                                        class="d-flex align-items-center gap-1"
                                    >
                                        <div class="lh-1">
                                            <span
                                                class="avatar avatar-sm avatar-rounded"
                                            >
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={project.companyLogo}
                                                    alt="logo"
                                                />
                                            </span>
                                        </div>
                                        <div>{project.companyName}</div>
                                    </div>
                                </td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`${statusBadgeClass[project.status]}`}
                                    >
                                        {project.status}
                                    </SpkBadge>
                                </td>
                                <td>{project.budget}</td>
                                <td>
                                    <div class="avatar-list-stacked">
                                        {#each project.team ?? [] as avatar}
                                            <span
                                                class="avatar avatar-sm avatar-rounded"
                                            >
                                                <Image src={avatar} alt="img" />
                                            </span>
                                        {/each}
                                        {#if project.extraTeam > 0}
                                            <a
                                                class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                href="#!"
                                            >
                                                +{project.extraTeam}
                                            </a>
                                        {/if}
                                    </div>
                                </td>
                                <td>
                                    <span
                                        class={`${priorityColorClass[project.priority]} d-flex align-items-center`}
                                    >
                                        <i
                                            class="ri-circle-fill me-1 fs-10 lh-1"
                                        ></i>{project.priority}
                                    </span>
                                </td>
                                <td>
                                    <SpkDropdown
                                        option={projectListDropdown}
                                        ToggleClass="btn btn-icon btn-sm btn-light no-caret"
                                        Caret={false}
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
                        Showing 10 Entries <i
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
                                        >...</PaginationLink
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

<!-- End::row-2 -->
