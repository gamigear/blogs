<script lang="ts">
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        CandidateSelect,
        initializeSlider,
        Peopletable,
        SearchSelect,
    } from "$lib/data/dashboards/jobs/searchcandidatedata";
    import {
        jobsDropdown1,
        SearchCompanyDropdown,
    } from "$lib/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        Col,
        Collapse,
        Image,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onDestroy, onMount } from "svelte";
    import Select from "svelte-select";

    let open = false;
    let opens = false;
    const handleToOpen = (e: Event) => {
        e.preventDefault();
        open = !open;
    };

    const handleToOpens = (e: Event) => {
        e.preventDefault();
        opens = !opens;
        console.log(opens)
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
    <title>SearchCandidate | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Search Candidate"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Search Candidate"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<!-- svelte-ignore attribute_invalid_property_name -->
<Row>
    <Col xxl={3} xl={4} class="">
        <Card class="custom-card products-navigation-card">
            <CardBody class="p-0">
                <div class="px-2 py-4 px-sm-4 border-bottom">
                    <h6 class="fw-medium mb-0">Categories</h6>
                    <div class="px-2 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
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
                                CustomClass="bg-light text-default fw-500 float-end"
                                >2,712</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="c-2"
                            />
                            <label class="form-check-label" for="c-2">
                                Data Analyst
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >536</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
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
                                CustomClass="bg-light text-default fw-500 float-end"
                                >18,289</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
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
                                CustomClass="bg-light text-default fw-500 float-end"
                                >3,453</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="c-5"
                            />
                            <label class="form-check-label" for="c-5">
                                HR Manager
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >7,165</SpkBadge
                            >
                        </div>
                        <Collapse isOpen={open}>
                            <div class="" id="category-more">
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-6"
                                    />
                                    <label class="form-check-label" for="c-6">
                                        Marketing Specialist
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >5,964</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-7"
                                    />
                                    <label class="form-check-label" for="c-7">
                                        Sales Manager
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-8"
                                    />
                                    <label class="form-check-label" for="c-8">
                                        Customer Support Lead
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >1,645</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-9"
                                    />
                                    <label class="form-check-label" for="c-9">
                                        Full Stack Developer
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >1,432</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-10"
                                    />
                                    <label class="form-check-label" for="c-10">
                                        Network Administrator
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >1,231</SpkBadge
                                    >
                                </div>
                            </div>
                        </Collapse>
                        <a
                            class="badge bg-primary-transparent"
                            data-bs-toggle="collapse"
                            href="#category-more"
                            role="button"
                            aria-expanded={open}
                            onclick={handleToOpen}
                            aria-controls="category-more">More</a
                        >
                    </div>
                </div>
                <div class="px-2 py-4 px-sm-4 border-bottom">
                    <h6 class="fw-medium mb-0">Notice Period</h6>
                    <div class="px-2 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="available-1">
                                Immediate
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >512</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-2"
                            />
                            <label class="form-check-label" for="available-2">
                                1 Week
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >2,186</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-3"
                            />
                            <label class="form-check-label" for="available-3">
                                2 Weeks
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >734</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-4"
                            />
                            <label class="form-check-label" for="available-4">
                                1 Month
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >734</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-5"
                            />
                            <label class="form-check-label" for="available-5">
                                2 Months
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >734</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-6"
                            />
                            <label class="form-check-label" for="available-6">
                                3+ Months
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >734</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="px-2 py-4 px-sm-4 border-bottom">
                    <h6 class="fw-medium mb-0">Job Type</h6>
                    <div class="px-2 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="j-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="j-1">
                                Full Time
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >512</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="j-2"
                                defaultChecked
                            />
                            <label class="form-check-label" for="j-2">
                                Part Time
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >2,186</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="j-3"
                                defaultChecked
                            />
                            <label class="form-check-label" for="j-3">
                                Internship
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >734</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="j-4"
                            />
                            <label class="form-check-label" for="j-4">
                                Freelancer
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >16</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="j-5"
                            />
                            <label class="form-check-label" for="j-5">
                                Remote Job
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >1,432</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="px-2 py-4 px-sm-4 border-bottom">
                    <h6 class="fw-medium mb-0">Salary Range</h6>
                    <div class="py-3 pb-0 overflow-hidden">
                        <div id="nonlinear" class="mt-4" bind:this={nonLinearSlider}></div>
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
                <div class="px-2 py-4 px-sm-4 border-bottom">
                    <h6 class="fw-medium mb-0">Qualification</h6>
                    <div class="px-2 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="q-1"
                            />
                            <label class="form-check-label" for="q-1">
                                High School
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >16,563</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="q-2"
                                defaultChecked
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-2"
                            >
                                Associate Degree
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >15,234</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="q-3"
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-3"
                            >
                                Bachelor’s Degree
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >6,278</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="q-4"
                                defaultChecked
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-4"
                            >
                                Master’s Degree
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >4,531</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="q-5"
                            />
                            <label class="form-check-label" for="q-5">
                                PhD
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >2,405</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="q-6"
                            />
                            <label
                                class="form-check-label w-50 text-truncate"
                                for="q-6"
                            >
                                Diploma/Certification
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >2,142</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="px-2 py-4 px-sm-4">
                    <h6 class="fw-medium mb-0">Skills</h6>
                    <div class="px-2 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="s-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="s-1">
                                JavaScript
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >23,156</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="s-2"
                                defaultChecked
                            />
                            <label class="form-check-label" for="s-2">
                                Python
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >15,632</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="s-3"
                            />
                            <label class="form-check-label" for="s-3">
                                React
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >15,032</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="s-4"
                                defaultChecked
                            />
                            <label class="form-check-label" for="s-4">
                                Node.js
                            </label>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default fw-500 float-end"
                                >7,154</SpkBadge
                            >
                        </div>
                        <Collapse isOpen={opens} id="sizes-more">
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-5"
                                    />
                                    <label class="form-check-label" for="s-5">
                                        SQL
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >5,946</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-6"
                                    />
                                    <label
                                        class="form-check-label w-50 text-truncate"
                                        for="s-6"
                                    >
                                        Product Management
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >3,267</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-7"
                                    />
                                    <label class="form-check-label" for="s-7">
                                        Agile/Scrum
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >578</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-8"
                                    />
                                    <label class="form-check-label" for="s-8">
                                        Data Analysis
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >142</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-9"
                                    />
                                    <label
                                        class="form-check-label w-50 text-truncate"
                                        for="s-9"
                                    >
                                        Digital Marketing
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >633</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-10"
                                    />
                                    <label class="form-check-label" for="s-10">
                                        UX/UI Design
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >452</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-11"
                                    />
                                    <label class="form-check-label" for="s-11">
                                        Networking
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >32</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="s-12"
                                    />
                                    <label class="form-check-label" for="s-12">
                                        CRM Software
                                    </label>
                                    <SpkBadge
                                        Color=""
                                        CustomClass="bg-light text-default fw-500 float-end"
                                        >12</SpkBadge
                                    >
                                </div>
                        </Collapse>
                        <a
                            class="badge bg-primary-transparent"
                            data-bs-toggle="collapse"
                            href="#sizes-more"
                            role="button"
                            aria-expanded={opens}
                            onclick={handleToOpens}
                            aria-controls="sizes-more">More</a
                        >
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9} xl={8} class="">
        <Row class="align-items-center">
            <Col lg={12}>
                <Card class="custom-card border-0 shadow-none">
                    <CardBody class="p-md-0">
                        <div class="input-group companies-search-input">
                            <Input
                                type="text"
                                class="form-control-lg search-company1"
                                aria-label="Text input with segmented dropdown button"
                                placeholder="Enter your keyword here"
                            />
                            <Select
                                class="basic-multi-select"
                                items={SearchSelect}
                                value={SearchSelect[0]}
                                clearable={false}
                                showChevron={true}
                            />
                            <Input
                                type="text"
                                class="form-control-lg search-company1"
                                aria-label="Text input with segmented dropdown button"
                                placeholder="Search by location"
                            />
                            <Select
                                class="basic-multi-select custom-select-searchcompany"
                                items={CandidateSelect}
                                value={CandidateSelect[0]}
                                clearable={false}
                                    showChevron={true}
                            />
                            <SpkButton
                                color="primary"
                                buttontype="button"
                                customClass="btn btn-lg"
                                ><i class="ri-search-line"></i></SpkButton
                            >
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody>
                        <div class="d-flex flex-wrap gap-2 align-items-center">
                            <h5 class="fw-medium mb-0 flex-grow-1">
                                1287 <span class="fw-normal fs-18"
                                    >Candidates match your search</span
                                >
                            </h5>
                            <SpkDropdown
                                option={SearchCompanyDropdown}
                                ToggleClass="btn btn-outline-light border"
                                end
                                Caret={true}
                                parent={`Sort By`}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden border-bottom-0">
                    <CardBody class="p-0">
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="text-nowrap"
                            header={[
                                { title: "Details" },
                                { title: "Education" },
                                { title: "Skills" },
                                { title: "Job Type" },
                                { title: "Salary Expectation" },
                                { title: "Notice Period" },
                                {
                                    title: "Actions",
                                    headerClassname: "text-center",
                                },
                            ]}
                        >
                            {#each Peopletable as person}
                                <tr>
                                    <td>
                                        <div>
                                            <div
                                                class="d-flex align-items-start gap-3"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-lg"
                                                    >
                                                        <Image
                                                            src={person.imageUrl}
                                                            alt={person.name}
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="fw-semibold d-block"
                                                        >{person.name}</span
                                                    >
                                                    <span>{person.role}</span>
                                                    <span
                                                        class="text-muted fs-13 d-block mb-1"
                                                        >{person.location}</span
                                                    >
                                                    <SpkBadge
                                                        Color=""
                                                        CustomClass="badge-md rounded-pill bg-primary-transparent"
                                                    >
                                                        <i
                                                            class="bi bi-briefcase me-1 align-middle"
                                                        ></i>Exp : {person.experience}
                                                    </SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{person.education}</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-1 skills-container flex-wrap"
                                        >
                                            {#each person.skills ?? [] as skill}
                                                <span
                                                    class={`badge bg-${skill.color}-transparent`}
                                                >
                                                    {skill.name}
                                                </span>
                                            {/each}
                                        </div>
                                    </td>
                                    <td>{person.employmentType}</td>
                                    <td>
                                        <span class="fw-medium"
                                            >{person.salaryRange}</span
                                        >
                                    </td>
                                    <td>{person.noticePeriod}</td>
                                    <td class="text-center">
                                        <SpkDropdown
                                            option={jobsDropdown1}
                                            ToggleClass="btn btn-icon btn-sm btn-light border no-caret"
                                            parent={`<i class="fe fe-more-vertical" />`}
                                            Caret={false}
                                        />
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

<!--End::row-1 -->
