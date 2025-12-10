<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        CompaniesTable,
        Developerdata,
    } from "@/shared/data/dashboards/jobs/searchcompanydata";
    import { SearchCompanyDropdown } from "@/shared/data/uielements/dropdowndata";
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
    import Select from "svelte-select";
    let open = false;
    let opens = false;
    const handleOpen = (e) => {
        e.preventDefault();
        open = !open;
    };
    const handleOpen1 = (e) => {
        e.preventDefault();
        opens = !opens;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>SearchCompany | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Search Company"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Search Company"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={3}>
        <Card class="custom-card products-navigation-card">
            <CardBody class="p-0">
                <div class="p-4 border-bottom">
                    <h6 class="fw-medium mb-0">Industry Type</h6>
                    <div class="px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="c-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="c-1">
                                R & D
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Accounting
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Business Process
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Consulting
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Admin Support
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >7,165</SpkBadge
                            >
                        </div>
                        <Collapse isOpen={open}>
                            <div id="category-more">
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="cc-6"
                                    />
                                    <label class="form-check-label" for="cc-6">
                                        HR
                                    </label>
                                    <SpkBadge
                                        Color="light"
                                        CustomClass="badge text-default  float-end"
                                        >5,964</SpkBadge
                                    >
                                </div>
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="cc-7"
                                    />
                                    <label class="form-check-label" for="cc-7">
                                        Marketing
                                    </label>
                                    <SpkBadge
                                        Color="light"
                                        CustomClass="badge text-default  float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                            </div>
                        </Collapse>
                        <a
                            class="ecommerce-more-link badge bg-primary-transparent"
                            aria-expanded={open}
                            onclick={handleOpen}
                            data-bs-toggle="collapse"
                            href="#category-more"
                            role="button"
                            aria-controls="category-more">More</a
                        >
                    </div>
                </div>
                <div class="p-4 border-bottom">
                    <h6 class="fw-medium mb-0">Location</h6>
                    <div class="px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="available-1">
                                Hyderabad
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Banglore
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >2,186</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="available-3"
                            />
                            <label class="form-check-label" for="available-3">
                                Chennai
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >734</SpkBadge
                            >
                        </div>
                        <Collapse isOpen={opens}>
                            <div id="location-more">
                                <div class="form-check mb-2">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="c-6"
                                    />
                                    <label class="form-check-label" for="c-6">
                                        Pune
                                    </label>
                                    <SpkBadge
                                        Color="light"
                                        CustomClass="badge text-default  float-end"
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
                                        USA
                                    </label>
                                    <SpkBadge
                                        Color="light"
                                        CustomClass="badge text-default  float-end"
                                        >2,123</SpkBadge
                                    >
                                </div>
                            </div>
                        </Collapse>
                        <a
                            class="ecommerce-more-link badge bg-primary-transparent"
                            data-bs-toggle="collapse"
                            href="#location-more"
                            role="button"
                            aria-expanded={opens}
                            onclick={handleOpen1}
                            aria-controls="location-more">More</a
                        >
                    </div>
                </div>
                <div class="p-4 border-bottom">
                    <h6 class="fw-medium mb-0">Company Size</h6>
                    <div class="px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="bond-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="bond-1">
                                0-50
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >145</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="bond-2"
                            />
                            <label class="form-check-label" for="bond-2">
                                50 - 100
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >432</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="bond-3"
                            />
                            <label class="form-check-label" for="bond-3">
                                100 - 150
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >123</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="p-4 border-bottom">
                    <h6 class="fw-medium mb-0">Recruiter Type</h6>
                    <div class="px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="Recruiter-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="Recruiter-1">
                                Direct Company
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >13</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="Recruiter-2"
                            />
                            <label class="form-check-label" for="Recruiter-2">
                                Agency
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >67</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="p-4 border-bottom">
                    <h6 class="fw-medium mb-0">Job Vacancies</h6>
                    <div class="px-0 py-3 pb-0">
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="vacancies-1"
                                defaultChecked
                            />
                            <label class="form-check-label" for="vacancies-1">
                                0 -10
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >13</SpkBadge
                            >
                        </div>
                        <div class="form-check mb-2">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="vacancies-2"
                            />
                            <label class="form-check-label" for="vacancies-2">
                                10 - 20
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >67</SpkBadge
                            >
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="vacancies-3"
                            />
                            <label class="form-check-label" for="vacancies-3">
                                20 +above
                            </label>
                            <SpkBadge
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >67</SpkBadge
                            >
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <h6 class="fw-medium mb-0">Type of Employement</h6>
                    <div class="px-0 py-3 pb-0">
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
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Color="light"
                                CustomClass="badge text-default  float-end"
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
                                Color="light"
                                CustomClass="badge text-default  float-end"
                                >1,432</SpkBadge
                            >
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9}>
        <Row class="align-items-center mb-4">
            <Col lg={12}>
                <div class="input-group companies-search-input">
                    <Input
                        type="text"
                        class="form-control-lg w-25"
                        aria-label="Text input with segmented dropdown button"
                        placeholder="Enter your keyword here"
                    />
                    <Select
                        items={Developerdata}
                        class="rounded-0 custom-select search-company"
                        placeholder="All categories"
                        clearable={false}
                        showChevron={true}
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
        </Row>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody>
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <h5 class="fw-medium mb-0 flex-grow-1">
                                1287 <span class="fw-normal fs-18"
                                    >Companies match for your search</span
                                >
                            </h5>
                            <SpkDropdown
                                end
                                option={SearchCompanyDropdown}
                                ToggleClass="border no-caret"
                                Color="outline-light"
                                parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"/>`}
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
                            tableClass="tex-nowrap company-search-table"
                        >
                            {#each CompaniesTable as company}
                                <tr>
                                    <td>
                                        <div
                                            class="d-flex align-items-center gap-3"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-xl bg-light"
                                                >
                                                    <Image
                                                        src={company.logo}
                                                        alt={company.name}
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <h6 class="fw-semibold mb-0">
                                                    {company.name}
                                                </h6>
                                                <span
                                                    class="text-muted fs-13 d-block"
                                                    >{company.location}</span
                                                >
                                                <SpkBadge
                                                    Color=""
                                                    CustomClass={`bg-${company.color}-transparent`}
                                                    >{company.industry}</SpkBadge
                                                >
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="d-block text-muted fs-13 mb-1"
                                                >Established</span
                                            >
                                            <span class="fw-semibold"
                                                >{company.established}</span
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="d-block text-muted fs-13 mb-1"
                                                >Rating</span
                                            >
                                            <span class="fw-semibold">
                                                {company.rating}
                                                <i
                                                    class="ti ti-star-filled text-warning ms-1"
                                                ></i>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="d-block text-muted fs-13 mb-1"
                                                >Employees</span
                                            >
                                            <span class="fw-semibold"
                                                >{company.employees}</span
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">
                                            <span
                                                class="d-block text-muted fs-13 mb-1"
                                                >Job Vacancies</span
                                            >
                                            <span class="fw-semibold"
                                                >{company.jobVacancies}</span
                                            >
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <a
                                            href="#!"
                                            class="btn btn-primary-light d-inline-flex align-items-center"
                                        >
                                            Website<i
                                                class="ti ti-arrow-narrow-right ms-2"
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
        <Pagination
            class="mb-4 justify-content-end d-flex customPaginationPageBottom"
        >
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

<!-- End:: row-1 -->
