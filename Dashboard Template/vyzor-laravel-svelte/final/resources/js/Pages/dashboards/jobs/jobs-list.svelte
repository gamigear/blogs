
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import { JobsListData } from "@/shared/data/dashboards/jobs/joblistdata";
    import { JobsListDropdown } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { Link } from '@inertiajs/svelte';
    const basePath = __BASE_PATH__;
</script>

<!-- Page Title -->
<svelte:head>
    <title>JobsList | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Jobs List"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Jobs List"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">All Jobs List</div>
                <div class="d-flex flex-wrap gap-2">
                    <Link
                        href={`${basePath}/dashboards/jobs/job-post`}
                        class="btn btn-primary btn-wave"
                    >
                        <i class="ri-add-line me-1 align-middle"></i>Post Job
                    </Link>
                    <div>
                        <Input
                            class=""
                            type="text"
                            placeholder="Search Here"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <SpkDropdown
                        option={JobsListDropdown}
                        Caret={false}
                        ToggleClass="btn btn-primary btn-wave no-caret"
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="table-hover text-nowrap"
                    showCheckbox={true}
                    showCheckClass="ps-4"
                    header={[
                        { title: "Job Title" },
                        { title: "Company" },
                        { title: "Department" },
                        { title: "Applications" },
                        { title: "Vacancies" },
                        { title: "Status" },
                        { title: "Job Type" },
                        { title: "Posted Date" },
                        { title: "Action" },
                    ]}
                >
                    {#each JobsListData as job}
                        <tr>
                            <td class="ps-4">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id={`checkboxNoLabel${job.id}`}
                                    defaultChecked={job.id == 2 ||
                                        job.id == 3 ||
                                        job.id == 6 ||
                                        job.id == 7}
                                />
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="lh-1">
                                        <span
                                            class={`avatar avatar-md avatar-rounded bg-${job.svgClass}-transparent svg-${job.svgClass}`}
                                        >
                                            {@html job.svgIcon}
                                        </span>
                                    </div>
                                    <div class="ms-2">
                                        <p
                                            class="fw-medium mb-0 d-flex align-items-center"
                                        >
                                            <Link
                                                href={`${basePath}/dashboards/jobs/job-details`}
                                                >{job.title}</Link
                                            >
                                        </p>
                                        <p class="fs-12 text-muted mb-0">
                                            {job.location}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span
                                        class="avatar avatar-md me-1 avatar-rounded"
                                    >
                                        <Image
                                            src={job.imgSrc}
                                            alt={job.company}
                                        />
                                    </span>
                                    <a href="#!" class="fw-medium mb-0">
                                        {job.company}
                                    </a>
                                </div>
                            </td>
                            <td>{job.department}</td>
                            <td>{job.applicants}</td>
                            <td>{job.interviews}</td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`rounded-pill bg-${job.color}-transparent`}
                                >
                                    {job.status}
                                </SpkBadge>
                            </td>
                            <td>{job.employmentType}</td>
                            <td>{job.postedDate}</td>
                            <td>
                                <Link
                                    href={`${basePath}/dashboards/jobs/job-details`}
                                    class="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1"
                                >
                                    <i class="ri-eye-line"></i>
                                </Link>
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1"
                                >
                                    <i class="ri-edit-line"></i>
                                </a>
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                                >
                                    <i class="ri-delete-bin-line"></i>
                                </a>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0">
                <div class="d-flex align-items-center flex-wrap overflow-auto">
                    <div class="mb-2 mb-sm-0">
                        Showing <b>1</b> to <b>10</b> of <b>100</b> entries
                        <i class="bi bi-arrow-right ms-2 fw-medium"></i>
                    </div>
                    <div class="ms-auto">
                        <Pagination
                            class="mb-0 overflow-auto customPaginationPageBottom jobs-list-pagination"
                        >
                            <PaginationItem disabled>
                                <PaginationLink
                                    on:click={(e) => e.preventDefault()}
                                    >Prev</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink
                                    on:click={(e) => e.preventDefault()}
                                    >1</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    on:click={(e) => e.preventDefault()}
                                    >2</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    on:click={(e) => e.preventDefault()}
                                    >3</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    on:click={(e) => e.preventDefault()}
                                    >4</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    on:click={(e) => e.preventDefault()}
                                    >5</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    class="text-primary"
                                    on:click={(e) => e.preventDefault()}
                                    >Next</PaginationLink
                                >
                            </PaginationItem>
                        </Pagination>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
