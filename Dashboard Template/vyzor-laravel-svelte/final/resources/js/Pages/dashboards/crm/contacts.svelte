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
        Contactstable,
        LeadData,
        SourceData,
    } from "@/shared/data/dashboards/crm/contactsdata";
    import { crmDashDropdown } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        InputGroup,
        InputGroupText,
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
    import { DateInput } from "date-picker-svelte";
    import Select from "svelte-select";
    import SpkTooltips from "../../../shared/@spk/uielements/Tooltips/SpkTooltips.svelte";

    let show = {};

    function handleShow(name) {
        show = { ...show, [name]: true };
    }

    function handleClose(name) {
        show = { ...show, [name]: false };
    }

    let Contact = Contactstable;

    const handleDelete = (id) => {
        Contact = Contact.filter((item) => item.id != id);
    };

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
    <title>Contacts | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Contacts"
    subTitle="CRM"
    activepage="Dashboards"
    page="Contacts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader
                class="d-flex align-items-center justify-content-between flex-wrap gap-3"
            >
                <div class="card-title">Contacts</div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkButton
                        color="primary"
                        customClass="btn"
                        onclickfunc={() => handleShow("modal")}
                        ><i class="ri-add-line me-1 fw-medium align-middle"
                        ></i>Create Contact</SpkButton
                    >
                    <SpkButton color="success" customClass="btn"
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
                    Responsive={true}
                    tableClass="text-nowrap"
                    showCheckbox={true}
                    header={[
                        { title: "Contact Name" },
                        { title: "Lead Score" },
                        { title: "Email" },
                        { title: "Company" },
                        { title: "Phone" },
                        { title: "Lead Source" },
                        { title: "Tags" },
                        { title: "Actions" },
                    ]}
                >
                    {#each Contact as contact (contact.id)}
                        <tr class="crm-contact">
                            <td>
                                <Input
                                    type="checkbox"
                                    id={`checkboxNoLabel${contact.id}`}
                                    value=""
                                    aria-label="..."
                                />
                            </td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-rounded avatar-sm"
                                        >
                                            <Image
                                                src={contact.image}
                                                alt={contact.name}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <a
                                            data-bs-toggle="offcanvas"
                                            on:click={() =>
                                                handleShow("offcanvas")}
                                            href="#!"
                                            role="button"
                                            aria-controls="offcanvasExample"
                                        >
                                            <span class="d-block fw-medium"
                                                >{contact.name}</span
                                            >
                                        </a>
                                        <span
                                            class="d-block text-muted fs-11"
                                            title="Last Contacted"
                                            id={`contacscontact-${contact.id}`}
                                        >
                                            <i
                                                class="ri-account-circle-line me-1 fs-13 align-middle"
                                            ></i>
                                            {contact.lastContacted}
                                        </span>
                                        <SpkTooltips
                                            content="Last Contacted"
                                            placement="top"
                                            targetId={`contacscontact-${contact.id}`}
                                            customClass="tooltip-primary"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td>{contact.score}</td>
                            <td>
                                <span class="d-block mb-1">
                                    <i
                                        class="ri-mail-line me-2 align-middle fs-14 text-muted"
                                    ></i>
                                    {contact.email}
                                </span>
                            </td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={contact.companyLogo}
                                                alt={contact.company}
                                            />
                                        </span>
                                    </div>
                                    <div>{contact.company}</div>
                                </div>
                            </td>
                            <td>
                                <span class="d-block">
                                    <i
                                        class="ri-phone-line me-2 align-middle fs-14 text-muted"
                                    ></i>
                                    {contact.phone}
                                </span>
                            </td>
                            <td>{contact.source}</td>
                            <td>
                                <div
                                    class="d-flex align-items-center flex-wrap gap-1"
                                >
                                    {#each contact.tags ?? [] as tag}
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`bg-${tag.color}`}
                                        >
                                            {tag.label}
                                        </SpkBadge>
                                    {/each}
                                </div>
                            </td>
                            <td>
                                <div class="btn-list">
                                    <a
                                        on:click={() => handleShow("offcanvas")}
                                        href="#!"
                                        class="btn btn-sm btn-warning-light btn-icon"
                                        aria-label="Offcanvas"
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
                                        onclickfunc={() =>
                                            handleDelete(contact.id)}
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
                            <Pagination
                                class="mb-0 customPaginationPageBottom "
                            >
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

<!-- Start:: Contact Details Offcanvas -->

<Offcanvas
    placement="end"
    isOpen={show["offcanvas"] || false}
    toggle={() => handleClose("offcanvas")}
    tabindex={-1}
    id="Contact_offcanvas"
    aria-labelledby="offcanvasExample"
>
    <OffcanvasBody class="p-0">
        <div
            class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover"
        >
            <div>
                <span class="avatar avatar-xxl avatar-rounded online me-3">
                    <Image
                        width={80}
                        height={80}
                        src="../../images/faces/4.jpg"
                        alt=""
                    />
                </span>
            </div>
            <div class="flex-fill main-profile-info">
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fw-medium mb-1">Jane Smith</h6>
                    <SpkButton
                        color=""
                        buttontype="button"
                        onclickfunc={() => handleClose("offcanvas")}
                        customClass="btn-close invert-1 p-0"
                    ></SpkButton>
                </div>
                <p class="mb-1 text-muted op-7">
                    Chief Executive Officer (C.E.O)
                </p>
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
                        <p class="fw-bold fs-20 text-shadow mb-0">113</p>
                        <p class="mb-0 fs-11 op-5">Deals</p>
                    </div>
                    <div class="me-4">
                        <p class="fw-bold fs-20 text-shadow mb-0">$12.2k</p>
                        <p class="mb-0 fs-11 op-5">Contributions</p>
                    </div>
                    <div class="me-4">
                        <p class="fw-bold fs-20 text-shadow mb-0">$10.67k</p>
                        <p class="mb-0 fs-11 op-5">Comitted</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 border-bottom border-block-end-dashed">
            <div class="mb-0">
                <p class="fs-15 mb-2 fw-medium">Professional Bio :</p>
                <p class="text-muted op-8 mb-0">
                    I am <b class="text-default">Jane Smith,</b> here by conclude
                    that, i am the founder and managing director of the prestigeous
                    company name laugh at all and acts as the cheif executieve officer
                    of the company.
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
                    <div>sonyataylor2531@gmail.com</div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="me-2">
                        <span
                            class="avatar avatar-sm avatar-rounded bg-light text-muted"
                        >
                            <i class="ri-phone-line align-middle fs-14"></i>
                        </span>
                    </div>
                    <div>+(555) 555-1234</div>
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
        <div class="p-4 border-bottom border-block-end-dashed">
            <p class="fs-14 mb-2 me-4 fw-medium">Tags :</p>
            <div>
                <SpkBadge Color="" CustomClass="bg-light text-muted m-1"
                    >New Lead</SpkBadge
                >
                <SpkBadge Color="" CustomClass="bg-light text-muted m-1"
                    >Others</SpkBadge
                >
            </div>
        </div>
        <div class="p-4">
            <p class="fs-14 mb-2 fw-medium">
                Relationship Manager :
                <a class="fs-14 text-primary mb-0 float-end" href="#!"
                    ><i class="ri-add-line me-1 align-middle"></i>Add Manager</a
                >
            </p>
            <div class="avatar-list-stacked">
                <span class="avatar avatar-rounded">
                    <Image src="../../images/faces/2.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                    <Image src="../../images/faces/8.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                    <Image src="../../images/faces/2.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                    <Image src="../../images/faces/10.jpg" alt="img" />
                </span>
            </div>
        </div>
    </OffcanvasBody>
</Offcanvas>

<!-- End:: Contact Details Offcanvas -->
<!-- Start:: Create Contact -->

<Modal
    centered
    isOpen={show["modal"] || false}
    toggle={() => handleClose("modal")}
    fade
    id="create-contact"
    tabindex={-1}
>
    <ModalHeader class="modal-header" toggle={() => handleClose("modal")}>
        <h6 class="modal-title">Create Contact</h6>
    </ModalHeader>
    <ModalBody class="">
        <Row class="gy-3">
            <Col xl={12}>
                <div class="mb-0 text-center">
                    <span class="avatar avatar-xxl avatar-rounded">
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
                <Label for="deal-title">Deal Title</Label>
                <Input type="text" id="deal-title" placeholder="Deal Title" />
            </Col>
            <Col xl={6}>
                <Label for="contact-lead-score">Lead Score</Label>
                <Input
                    type="number"
                    id="contact-lead-score"
                    placeholder="Lead Score"
                />
            </Col>
            <Col xl={12}>
                <Label for="contact-mail">Email</Label>
                <Input
                    type="email"
                    id="contact-mail"
                    placeholder="Enter Email"
                />
            </Col>
            <Col xl={12}>
                <Label for="contact-phone">Phone No</Label>
                <Input
                    type="tel"
                    id="contact-phone"
                    pattern="[0-9]*"
                    placeholder="Enter Phone Number"
                />
            </Col>
            <Col xl={12}>
                <Label for="company-name">Company Name</Label>
                <Input
                    type="text"
                    id="company-name"
                    placeholder="Company Name"
                />
            </Col>
            <Col xl={12}>
                <Label>Lead Source</Label>
                <Select
                    items={SourceData}
                    value={SourceData[0]}
                    clearable={false}
                    showChevron={true}
                    class="basic-multi-select"
                />
            </Col>
            <Col xl={6}>
                <Label>Last Contacted</Label>
                <div class="form-group custom-date-picker">
                    <InputGroup class="custom-input-group flex-nowrap">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            bind:value={date}
                            class="form-control"
                            format="yy-MM-dd HH:mm:ss"
                            timePrecision="minute"
                            closeOnSelection={true}
                            dynamicPositioning={true}
                        />
                    </InputGroup>
                </div>
            </Col>
            <Col xl={6}>
                <Label>Tags</Label>
                <Select
                    items={LeadData}
                    multiFullItemClearable
                    multiple
                    class="basic-multi-select"
                    clearable={false}
                    showChevron={false}
                    placeholder="Select Tag"
                />
            </Col>
        </Row>
    </ModalBody>
    <ModalFooter>
        <SpkButton
            onclickfunc={() => handleClose("modal")}
            color="light"
            buttontype="button"
            customClass="">Cancel</SpkButton
        >
        <SpkButton color="primary" buttontype="button">Create Contact</SpkButton
        >
    </ModalFooter>
</Modal>

<!-- End:: Create Contact -->
