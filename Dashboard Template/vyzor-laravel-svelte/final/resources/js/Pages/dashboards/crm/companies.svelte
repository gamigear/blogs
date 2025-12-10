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
        Selectdata,
        Selectdatas,
    } from "@/shared/data/dashboards/crm/companiesdata";
    import { crmDashDropdown } from "@/shared/data/uielements/dropdowndata";
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
        Offcanvas,
        OffcanvasBody,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";

    let compines = CompaniesTable;

    const handleremove = (id) => {
        compines = compines.filter((item) => item.id !== id);
    };

    let show = {};

    function handleShow(name) {
        show = { ...show, [name]: true };
    }

    function handleClose(name) {
        show = { ...show, [name]: false };
    }

    let avatar;
    let fileinput;

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        if (image) {
            let reader = new FileReader();
            reader.readAsDataURL(image);

            reader.onload = (e) => {
                avatar = e.target.result;
            };
        }
    };

    let date = new Date();
</script>

<!-- Page Title -->
<svelte:head>
    <title>Companies | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Companies"
    subTitle="CRM"
    activepage="Dashboards"
    page="Companies"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Companies</div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkButton
                        color="primary"
                        customClass="btn btn-wave"
                        onclickfunc={() => handleShow("modal")}
                        ><i class="ri-add-line me-1 fw-medium align-middle"
                        ></i>Add Company</SpkButton
                    >
                    <SpkButton color="success" customClass="btn btn-wave"
                        >Export As CSV</SpkButton
                    >
                    <SpkDropdown
                        option={crmDashDropdown}
                        ToggleClass="btn btn-light btn-wave waves-effect waves-light no-caret"
                        Caret={false}
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    tableClass="text-nowrap"
                    Responsive={true}
                    showCheckbox={true}
                    header={[
                        { title: "Company Name" },
                        { title: "Email" },
                        { title: "Phone" },
                        { title: "Company Size" },
                        { title: "Industry" },
                        { title: "Key Contact" },
                        { title: "Total Deals" },
                        { title: "Actions" },
                    ]}
                >
                    {#each compines as row (row.id)}
                        <tr class="crm-contact">
                            <td>
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id={`checkboxNoLabel${row.id}`}
                                    value=""
                                    aria-label="..."
                                />
                            </td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-md bg-light avatar-rounded"
                                        >
                                            <Image
                                                src={row.companyLogo}
                                                alt={row.companyName}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <a
                                            on:click={() =>
                                                handleShow("offcanvas")}
                                            href="#!"
                                            role="button"
                                            aria-controls="offcanvasExample"
                                        >
                                            {row.companyName}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="d-block mb-1">
                                    <i
                                        class="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"
                                    ></i>
                                    {row.email}
                                </span>
                            </td>
                            <td>
                                <span class="d-block">
                                    <i
                                        class="ri-phone-line me-2 align-middle fs-14 text-muted d-inline-block"
                                    ></i>
                                    {row.phone}
                                </span>
                            </td>
                            <td>
                                <div
                                    class="d-flex align-items-center flex-wrap gap-1"
                                >
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`badge bg-${row.badgeColor}`}
                                    >
                                        {row.employeeBadge}
                                    </SpkBadge>
                                </div>
                            </td>
                            <td>{row.industry}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-rounded avatar-sm"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={row.personImage}
                                                alt={row.personName}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-medium"
                                            >{row.personName}</span
                                        >
                                    </div>
                                </div>
                            </td>
                            <td>{row.score}</td>
                            <td>
                                <div class="btn-list">
                                    <a
                                        on:click={() => handleShow("offcanvas")}
                                        data-bs-toggle="offcanvas"
                                        href="#!"
                                        role="button"
                                        aria-controls="offcanvasExample"
                                        class="btn btn-sm btn-warning-light btn-icon"
                                        aria-label="Offcanvas profile picture"
                                    >
                                        <i class="ri-eye-line"></i>
                                    </a>
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-sm btn-info-light btn-icon"
                                    >
                                        <i class="ri-pencil-line"></i>
                                    </SpkButton>
                                    <SpkButton
                                        color=""
                                        onclickfunc={() => handleremove(row.id)}
                                        customClass="btn btn-sm btn-danger-light btn-icon contact-delete"
                                    >
                                        <i class="ri-delete-bin-line"></i>
                                    </SpkButton>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0">
                <div class="d-flex align-items-center flex-wrap gap-1">
                    <div>
                        Showing 10 Entries <i
                            class="bi bi-arrow-right ms-2 fw-medium"
                        ></i>
                    </div>
                    <div class="ms-auto">
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-4"
                        >
                            <Pagination class="mb-0 customPaginationPageBottom">
                                <PaginationItem disabled>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
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
<!--End::row-1 -->

<!-- Start:: Company Details Offcanvas -->

<Offcanvas
    placement="end"
    class="offcanvas-end"
    isOpen={show["offcanvas"] || false}
    id="Contact_offcanvas"
    toggle={() => handleClose("offcanvas")}
    tabindex={-1}
    aria-labelledby="offcanvasExample"
>
    <OffcanvasBody class="p-0">
        <div
            class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover"
        >
            <div>
                <span
                    class="avatar avatar-xxl avatar-rounded me-3 bg-light p-2"
                >
                    <Image
                        width={80}
                        height={80}
                        src="../../images/company-logos/1.png"
                        alt=""
                    />
                </span>
            </div>
            <div class="flex-fill main-profile-info">
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fw-medium mb-1">Spruko Technologies</h6>
                    <SpkButton
                        color=""
                        buttontype="button"
                        onclickfunc={() => handleClose("offcanvas")}
                        customClass="btn-close invert-1 p-0"
                    ></SpkButton>
                </div>
                <p class="mb-1 text-muted op-7">Telecommunications</p>
                <p class="fs-12 mb-4 op-5">
                    <span class="me-3"
                        ><i class="ri-building-line me-1 align-middle"
                        ></i>Georgia</span
                    >
                    <span class="d-inline-flex align-items-center"
                        ><i class="ri-map-pin-line me-1 align-middle"
                        ></i>Washington D.C</span
                    >
                </p>
                <div class="d-flex mb-0">
                    <div class="me-4">
                        <p class="fw-medium fs-20 text-shadow mb-0">113</p>
                        <p class="mb-0 fs-11 op-5">Deals</p>
                    </div>
                    <div class="me-4">
                        <p class="fw-medium fs-20 text-shadow mb-0">$12.2k</p>
                        <p class="mb-0 fs-11 op-5">Contributions</p>
                    </div>
                    <div class="me-4">
                        <p class="fw-medium fs-20 text-shadow mb-0">$10.67k</p>
                        <p class="mb-0 fs-11 op-5">Comitted</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 border-bottom border-block-end-dashed">
            <div class="mb-0">
                <p class="fs-15 mb-2 fw-medium">Professional Bio :</p>
                <p class="text-muted op-8 mb-0">
                    <b class="text-default">Spruko</b> Technologies is a leading
                    technology company specializing in innovative software solutions
                    for businesses worldwide. With a strong focus on cutting-edge
                    technologies and a team of skilled professionals.
                </p>
            </div>
        </div>
        <div class="p-4 border-bottom border-block-end-dashed">
            <p class="fs-14 mb-2 me-4 fw-medium">Contact Information :</p>
            <div class="">
                <div class="d-flex align-items-center mb-2">
                    <div class="me-2">
                        <span
                            class="avatar avatar-sm avatar-rounded bg-light text-muted"
                        >
                            <i class="ri-mail-line align-middle fs-14"></i>
                        </span>
                    </div>
                    <div>spruko2981@gmail.com</div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="me-2">
                        <span
                            class="avatar avatar-sm avatar-rounded bg-light text-muted"
                        >
                            <i class="ri-phone-line align-middle fs-14"></i>
                        </span>
                    </div>
                    <div>1678-28993-223</div>
                </div>
                <div class="d-flex align-items-center mb-0">
                    <div class="me-2">
                        <span
                            class="avatar avatar-sm avatar-rounded bg-light text-muted"
                        >
                            <i class="ri-map-pin-line align-middle fs-14"></i>
                        </span>
                    </div>
                    <div>
                        MIG-1-11, Monroe Street, Georgetown, Washington D.C,
                        USA,20071
                    </div>
                </div>
            </div>
        </div>
        <div
            class="p-4 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4"
        >
            <p class="fs-14 mb-0 fw-medium">Social Networks :</p>
            <div class="btn-list mb-0">
                <SpkButton
                    color=""
                    customClass="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0"
                >
                    <i class="ri-facebook-line fw-medium"></i>
                </SpkButton>
                <SpkButton
                    color=""
                    customClass="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0"
                >
                    <i class="ri-twitter-x-line fw-medium"></i>
                </SpkButton>
                <SpkButton
                    color=""
                    customClass="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0"
                >
                    <i class="ri-instagram-line fw-medium"></i>
                </SpkButton>
                <SpkButton
                    color=""
                    customClass="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0"
                >
                    <i class="ri-github-line fw-medium"></i>
                </SpkButton>
                <SpkButton
                    color=""
                    customClass="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0"
                >
                    <i class="ri-youtube-line fw-medium"></i>
                </SpkButton>
            </div>
        </div>
        <div
            class="p-4 border-bottom border-block-end-dashed d-flex align-items-center gap-3"
        >
            <div class="fs-14 fw-medium">Company Size:</div>
            <div>
                <SpkBadge Color="" CustomClass="bg-primary-transparent m-1"
                    >Corporate</SpkBadge
                > - 1001+ Employees
            </div>
        </div>
        <div class="p-4 d-flex align-items-center gap-3">
            <div class="fs-14 fw-medium">Key Contact :</div>
            <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                    <span class="avatar avatar-rounded avatar-sm">
                        <Image src="../../images/faces/2.jpg" alt="img" />
                    </span>
                </div>
                <div class="fw-medium">Lisa Convay</div>
            </div>
        </div>
    </OffcanvasBody>
</Offcanvas>

<!-- End:: Company Details Offcanvas -->

<!-- Start:: Add Company -->

<Modal
    isOpen={show["modal"] || false}
    toggle={() => handleClose("modal")}
    fade
    id="create-company"
    tabindex={-1}
    centered
>
    <ModalHeader class="" toggle={() => handleClose("modal")}>
        <h6 class="modal-title">Add Company</h6>
    </ModalHeader>
    <ModalBody class="">
        <Row class="gy-3">
            <Col xl={12}>
                <div class="mb-0 text-center">
                    <span class="avatar avatar-xxl avatar-rounded p-2 bg-light">
                        {#if avatar}
                            <img
                                loading="lazy"
                                class="avatar"
                                src={avatar}
                                alt="Avatar"
                            />
                        {:else}
                            <img
                                src="../../images/faces/9.jpg"
                                alt="Profile"
                                id="profile-img"
                            />
                        {/if}
                        <a
                            href="#!"
                            class="badge rounded-pill bg-primary avatar-badge"
                            on:click={() => fileinput.click()}
                            aria-label="Change profile picture"
                        >
                            <i class="fe fe-camera"></i>
                        </a>

                        <input
                            style="display:none"
                            type="file"
                            class="position-absolute w-100 h-100 op-0"
                            id="profile-change"
                            accept=".jpg, .jpeg, .png"
                            on:change={onFileSelected}
                            bind:this={fileinput}
                        />
                    </span>
                </div>
            </Col>
            <Col xl={6}>
                <Label for="company-name">Company Name</Label>
                <Input
                    type="text"
                    id="company-name"
                    placeholder="Contact Name"
                />
            </Col>
            <Col xl={6}>
                <Label for="company-lead-score">Total Deals</Label>
                <Input
                    type="number"
                    id="company-lead-score"
                    placeholder="Total Deals"
                />
            </Col>
            <Col xl={12}>
                <Label for="company-mail">Email</Label>
                <Input
                    type="email"
                    id="company-mail"
                    placeholder="Enter Email"
                />
            </Col>
            <Col xl={12}>
                <Label for="company-phone">Phone No</Label>
                <Input
                    type="tel"
                    id="company-phone"
                    placeholder="Enter Phone Number"
                />
            </Col>
            <Col xl={12}>
                <Label for="key-contact">Key Contact</Label>
                <Input
                    type="text"
                    id="key-contact"
                    placeholder="Contact Name"
                />
            </Col>
            <Col xl={12}>
                <Label>Industry</Label>
                <Select
                    items={Selectdatas}
                    placeholder="Select Industry"
                    clearable={false}
                    showChevron={true}
                    class="basic-multi-select"
                />
            </Col>
            <Col xl={12}>
                <Label>Company Size</Label>
                <Select
                    items={Selectdata}
                    value={Selectdata[0]}
                    class="basic-multi-select"
                    clearable={false}
                    showChevron={true}
                />
            </Col>
        </Row>
    </ModalBody>
    <ModalFooter>
        <SpkButton
            color="light"
            buttontype="button"
            onclickfunc={() => handleClose("modal")}>Cancel</SpkButton
        >
        <SpkButton color="primary" buttontype="button">Create Contact</SpkButton
        >
    </ModalFooter>
</Modal>
<!-- End:: Add Company -->
