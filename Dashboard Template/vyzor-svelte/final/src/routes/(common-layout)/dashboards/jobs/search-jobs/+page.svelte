<script lang="ts">
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        initializeSlider,
        JobTable,
    } from "$lib/data/dashboards/jobs/searchjobdata";
    import { jobsDropdown } from "$lib/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        Col,
        Collapse,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onDestroy, onMount } from "svelte";
    let open = false;
    const handleToOpen = (e: Event) => {
        e.preventDefault();
        open = !open;
    };

    let lowerValue = 8000;
    let upperValue = 40000;

    // Refs for the slider and the displayed values
    let nonLinearSlider: any;
    let lowerValueNode: any;
    let upperValueNode: any;

    // Function to update values
    const updateValues = (newLowerValue: number, newUpperValue: number) => {
        if (newLowerValue !== null) {
            lowerValue = newLowerValue;
        }
        if (newUpperValue !== null) {
            upperValue = newUpperValue;
        }
    };

    onMount(() => {
        // Initialize the slider and pass the necessary elements and update function
        initializeSlider(
            nonLinearSlider,
            lowerValueNode,
            upperValueNode,
            updateValues,
        );
    });

    // Clean up when the component is destroyed
    onDestroy(() => {
        if (nonLinearSlider && nonLinearSlider.noUiSlider) {
            nonLinearSlider.noUiSlider.destroy();
        }
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>SearchJobs | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Search Jobs"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Search Jobs"
/>
<!-- Page Header Close -->

<!-- Start::row-2 -->

<Row>
    <Col xxl={3} xl={3} class="">
        <Card class="custom-card products-navigation-card overflow-hidden">
            <CardBody class="p-0">
                <div class="py-4 px-sm-4 p-3 border-bottom">
                    <h6 class="fw-medium mb-0">Categories</h6>
                    <div class="px-sm-2 px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="c-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="c-1">
                                Software Engineer
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >2,712</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="c-2"
                            />
                            <label class="form-check-label" for="c-2">
                                Data Analyst
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >536</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="c-3"
                                defaultChecked
                            />
                            <label class="form-check-label" for="c-3">
                                Product Manager
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >18,289</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="c-4"
                                defaultChecked
                            />
                            <label class="form-check-label" for="c-4">
                                UI/UX Designer
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >3,453</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="c-5"
                            />
                            <label class="form-check-label" for="c-5">
                                Marketing Specialist
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >7,165</SpkBadge
                            >
                        </div>
                        <Collapse isOpen={open}>
                            <div class="" id="category-more">
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-6"
                                    />
                                    <label class="form-check-label" for="c-6">
                                        HR Manager
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="badge bg-light text-default fw-500 float-end"
                                        >5,964</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-7"
                                    />
                                    <label class="form-check-label" for="c-7">
                                        Full Stack Developer
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="badge bg-light text-default fw-500 float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-8"
                                    />
                                    <label class="form-check-label" for="c-8">
                                        Network Administrator
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="badge bg-light text-default fw-500 float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-9"
                                    />
                                    <label class="form-check-label" for="c-9">
                                        Sales Manager
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="badge bg-light text-default fw-500 float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-10"
                                    />
                                    <label class="form-check-label" for="c-10">
                                        Customer Support Lead
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="badge bg-light text-default fw-500 float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                            </div>
                        </Collapse>
                        <a
                            class="ecommerce-more-link badge bg-primary-transparent"
                            data-bs-toggle="collapse"
                            href="#category-more"
                            role="button"
                            aria-expanded={open}
                            onclick={handleToOpen}
                            aria-controls="category-more">More</a
                        >
                    </div>
                </div>
                <div class="py-4 px-sm-4 p-3 border-bottom">
                    <h6 class="fw-medium mb-0">Shift Type</h6>
                    <div class="px-sm-2 px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="j-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="j-1">
                                Day Shift
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >512</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="j-2"
                                defaultChecked
                            />
                            <label class="form-check-label" for="j-2">
                                Night Shift
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >2,186</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="j-3"
                                defaultChecked
                            />
                            <label class="form-check-label" for="j-3">
                                Flexible
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >734</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="j-4"
                            />
                            <label class="form-check-label" for="j-4">
                                Rotational
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="badge bg-light text-default fw-500 float-end"
                                >16</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="py-4 px-sm-4 p-3 border-bottom">
                    <h6 class="fw-medium mb-0">Salary Range</h6>
                    <div class="py-3 pb-0 pt-5">
                        <div id="nonlinear" bind:this={nonLinearSlider}></div>
                        <div class="d-flex mt-4">
                            <div class="fw-semibold h6 mb-0">
                                $<span
                                    id="lower-value"
                                    bind:this={lowerValueNode}
                                    >{lowerValue}</span
                                >
                            </div>
                            &nbsp; -- &nbsp;
                            <div class="fw-semibold h6 mb-0">
                                $<span
                                    id="upper-value"
                                    bind:this={upperValueNode}
                                    >{upperValue}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-4 px-sm-4 p-3 border-bottom">
                    <h6 class="fw-medium mb-0">Qualification</h6>
                    <div class="px-sm-2 px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-1"
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-1"
                            >
                                Computer Science
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >16,563</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-2"
                                defaultChecked
                            />
                            <label class="form-check-label" for="q-2">
                                Marketing
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >15,234</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-3"
                            />
                            <label class="form-check-label" for="q-3">
                                Design
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >6,278</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-4"
                                defaultChecked
                            />
                            <label class="form-check-label" for="q-4">
                                Business
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >4,531</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-5"
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-5"
                            >
                                HR Management
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >2,405</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-6"
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-6"
                            >
                                Product Management
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >453</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-7"
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-7"
                            >
                                Web Development
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >123</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-8"
                            />
                            <label class="form-check-label" for="q-8">
                                IT
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >422</span
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="q-9"
                            />
                            <label class="form-check-label" for="q-9">
                                Customer Service
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >256</span
                            >
                        </div>
                    </div>
                </div>
                <div class="py-4 px-sm-4 p-3">
                    <h6 class="fw-medium mb-0">Experience</h6>
                    <div class="px-sm-2 px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="e-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="e-1">
                                1-3 years
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >156</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="e-2"
                            />
                            <label class="form-check-label" for="e-2">
                                2-4 years
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >632</span
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="e-3"
                                defaultChecked
                            />
                            <label class="form-check-label" for="e-3">
                                3-5 years
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >32</span
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="e-4"
                                defaultChecked
                            />
                            <label class="form-check-label" for="e-4">
                                4-6 years
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >54</span
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="e-5"
                                defaultChecked
                            />
                            <label class="form-check-label" for="e-5">
                                5+ years
                            </label>
                            <span
                                class="badge bg-light text-default fw-500 float-end"
                                >44</span
                            >
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9} xl={9} class="">
        <Row>
            <Col lg={12}>
                <div class="input-group companies-search-input mb-4">
                    <Input
                        type="text"
                        class="form-control-lg w-25"
                        aria-label="Text input with segmented dropdown button"
                        placeholder="Enter your keyword here"
                    />
                    <Input
                        type="text"
                        class="form-control-lg w-25"
                        aria-label="Text input with segmented dropdown button"
                        placeholder="Search by location"
                    />
                    <SpkButton
                        color="primary"
                        buttontype="button"
                        customClass="btn z-0"
                        ><i class="ri-search-line"></i></SpkButton
                    >
                </div>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody class="p-3">
                        <Row class="align-items-center">
                            <Col sm={8}>
                                <div class="d-flex">
                                    <h5 class="fw-medium mb-0">
                                        <span class="fw-normal">Showing</span> 3456
                                        Jobs
                                    </h5>
                                </div>
                            </Col>
                            <Col sm={4} class="text-sm-end mt-3 mt-sm-0">
                                <SpkDropdown
                                    option={jobsDropdown}
                                    ToggleClass="btn btn-outline-light border dropdown-toggle no-caret"
                                    Caret={false}
                                    parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card border-bottom-0 overflow-hidden">
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                        >
                            {#each JobTable as job}
                                <tr>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-3"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class={`avatar avatar-xl bg-${job.avatarColor}-transparent svg-${job.avatarColor}`}
                                                >
                                                    {@html job.svgIcon}
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-1">
                                                    {job.title}
                                                </h6>
                                                <span class="d-block fw-medium"
                                                    >{job.company}</span
                                                >
                                                <span
                                                    class="d-block text-muted fs-13"
                                                    >{job.location}</span
                                                >
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="fs-13 d-block text-muted mb-1"
                                                >Job Vacancies</span
                                            >
                                            <span class="fw-semibold"
                                                >{job.jobVacancies}</span
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="fs-13 d-block text-muted mb-1"
                                                >Qualification</span
                                            >
                                            <span class="fw-semibold"
                                                >{job.qualification}</span
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="fs-13 d-block text-muted mb-1"
                                                >Experience</span
                                            >
                                            <span class="fw-semibold"
                                                >{job.experience}</span
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="fs-13 d-block text-muted mb-1"
                                                >Shift</span
                                            >
                                            <SpkBadge
                                                Color=""
                                                CustomClass={`${job.shiftColor}  `}
                                                >{job.shift}</SpkBadge
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="fs-13 d-block text-muted mb-1"
                                                >Salary</span
                                            >
                                            <span class="fw-semibold"
                                                >{job.salaryRange}</span
                                            >
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <div class="mb-2">
                                            <!-- svelte-ignore a11y_consider_explicit_label -->
                                            <a
                                                href="#!"
                                                id={`search-job-filled-${job.id}`}
                                                class="btn btn-icon btn-warning-light rounded-circle btn-sm"
                                            >
                                                <span
                                                    ><i
                                                        class="ti ti-star-filled align-middle"
                                                    ></i></span
                                                >
                                            </a>
                                            <SpkTooltips
                                                placement="top"
                                                content="Featured Jobs"
                                                targetId={`search-job-filled-${job.id}`}
                                            ></SpkTooltips>
                                        </div>
                                        <a
                                            href="#!"
                                            class="text-primary fw-medium d-inline-flex"
                                        >
                                            Apply Now <i
                                                class="ti ti-arrow-narrow-right ms-2 lh-base rtl-rotate"
                                            ></i>
                                        </a>
                                    </td>
                                </tr>
                            {/each}
                        </SpkTablescomponent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Pagination class="mb-4 justify-content-end d-flex customPaginationPageBottom">
            <PaginationItem disabled>
                <PaginationLink on:click={(e) => e.preventDefault()}
                    >Prev</PaginationLink
                >
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink on:click={(e) => e.preventDefault()}
                    >1</PaginationLink
                >
            </PaginationItem>
            <PaginationItem>
                <PaginationLink on:click={(e) => e.preventDefault()}
                    >2</PaginationLink
                >
            </PaginationItem>
            <PaginationItem>
                <PaginationLink on:click={(e) => e.preventDefault()}
                    >3</PaginationLink
                >
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    class="text-primary"
                    on:click={(e) => e.preventDefault()}>Next</PaginationLink
                >
            </PaginationItem>
        </Pagination>
    </Col>
</Row>

<!-- End::row-2 -->
