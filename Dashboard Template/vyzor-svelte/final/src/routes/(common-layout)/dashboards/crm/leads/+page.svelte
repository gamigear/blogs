<script lang="ts">
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Leadsdata,
        LeadsSelect,
        StatusSelect,
        Tagselect,
    } from "$lib/data/dashboards/crm/leadsdata";
    import { crmDashDropdown } from "$lib/data/uielements/dropdowndata";
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
        Row,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";

    let Leads = Leadsdata;
    const handleDelete = (id: number) => {
        Leads = Leads.filter((item) => item.id !== id);
    };

    let show: boolean = false;

    function handleShow() {
        show = true;
    }

    function handleClose() {
        show = false;
    }

    let avatar: string; // To store the avatar image data
    let fileinput: any; // To reference the file input element

    const onFileSelected = (e: any) => {
        let image = e.target.files[0]; // Get the selected file
        if (image) {
            let reader = new FileReader();
            reader.readAsDataURL(image); // Read the file as a data URL

            reader.onload = (e: any) => {
                avatar = e.target.result; // Update avatar with the result
            };
        }
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>Leads | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Leads"
    subTitle="CRM"
    activepage="Dashboards"
    page="Leads"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader
                class="d-flex align-items-center justify-content-between flex-wrap gap-3"
            >
                <div class="card-title">Leads</div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkButton
                        color="primary"
                        customClass="btn"
                        onclickfunc={handleShow}
                        ><i class="ri-add-line me-1 fw-medium align-middle"
                        ></i>Create Lead</SpkButton
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
                    tableClass="text-nowrap"
                    showCheckbox={true}
                    Responsive={true}
                    header={[
                        { title: "Contact Name" },
                        { title: "Email" },
                        { title: "Phone" },
                        { title: "Lead Status" },
                        { title: "Company" },
                        { title: "Lead Source" },
                        { title: "Tags" },
                        { title: "Actions" },
                    ]}
                >
                    {#each Leads as contact}
                        <tr class="crm-contact">
                            <td>
                               <input
                                        class="form-check-input"
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
                                                src={contact.avatar}
                                                alt={contact.name}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-medium"
                                            >{contact.name}</span
                                        >
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span class="d-block mb-1">
                                        <i
                                            class="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"
                                        ></i>
                                        {contact.email}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span class="d-block">
                                        <i
                                            class="ri-phone-line me-2 align-middle fs-14 text-muted"
                                        ></i>
                                        {contact.phone}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass="badge bg-light text-default"
                                    >{contact.status}</SpkBadge
                                >
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
                                                alt={contact.companyName}
                                            />
                                        </span>
                                    </div>
                                    <div>{contact.companyName}</div>
                                </div>
                            </td>
                            <td>{contact.source}</td>
                            <td>
                                <div
                                    class="d-flex align-items-center flex-wrap gap-1"
                                >
                                    {#each contact.tags ?? [] as tag}
                                        <SpkBadge
                                            Color=""
                                            CustomClass={`badge bg-${tag.color}`}
                                        >
                                            {tag.label}
                                        </SpkBadge>
                                    {/each}
                                </div>
                            </td>
                            <td>
                                <div class="btn-list">
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-sm btn-warning-light btn-icon"
                                    >
                                        <i class="ri-eye-line"></i>
                                    </SpkButton>
                                    <SpkButton
                                        color=""
                                        customClass="btn btn-sm btn-info-light btn-icon"
                                    >
                                        <i class="ri-pencil-line"></i>
                                    </SpkButton>
                                    <SpkButton
                                        onclickfunc={() =>
                                            handleDelete(contact.id)}
                                        color=""
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
                <div class="d-flex align-items-center flex-wrap">
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

<!-- Start:: Create Contact -->

<Modal fade centered id="create-contact" isOpen={show} toggle={handleClose}>
    <ModalHeader toggle={handleClose}>
        <h6 class="modal-title">Create Lead</h6>
    </ModalHeader>
    <ModalBody>
        <Row class="gy-3">
            <Col xl={12}>
                <div class="mb-0 text-center">
                    <span class="avatar avatar-xxl avatar-rounded">
                        {#if avatar}
                            <!-- Display the selected avatar image -->
                            <img
                                loading="lazy"
                                class="avatar"
                                src={avatar}
                                alt="Avatar"
                            />
                        {:else}
                            <!-- Display a default image if no avatar is selected -->
                            <img
                                src="../../images/faces/9.jpg"
                                alt="Profile"
                                id="profile-img"
                            />
                        {/if}
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <a
                            href="#!"
                            class="badge rounded-pill bg-primary avatar-badge"
                            onclick={() => fileinput.click()}
                        >
                            <i class="fe fe-camera"></i>
                        </a>

                        <!-- Hidden file input element -->
                        <input
                            style="display:none"
                            type="file"
                            class="position-absolute w-100 h-100 op-0"
                            id="profile-change"
                            accept=".jpg, .jpeg, .png"
                            onchange={onFileSelected}
                            bind:this={fileinput}
                        />
                    </span>
                </div>
            </Col>
            <Col xl={12}>
                <Label for="contact-name" class="">Contact Name</Label>
                <Input
                    type="text"
                    class=""
                    id="contact-name"
                    placeholder="Contact Name"
                />
            </Col>
            <Col xl={12}>
                <Label for="contact-mail" class="">Email</Label>
                <Input
                    type="email"
                    class=""
                    id="contact-mail"
                    placeholder="Enter Email"
                />
            </Col>
            <Col xl={12}>
                <Label for="contact-phone" class="">Phone No</Label>
                <Input
                    type="tel"
                    class=""
                    id="contact-phone"
                    placeholder="Enter Phone Number"
                />
            </Col>
            <Col xl={12}>
                <Label for="company-name" class="">Company Name</Label>
                <Input
                    type="text"
                    class=""
                    id="company-name"
                    placeholder="Company Name"
                />
            </Col>
            <Col xl={12}>
                <Label class="">Lead Status</Label>
                <Select
                    items={StatusSelect}
                    placeholder="Select Status"
                    clearable={false}
                                    showChevron={true}
                />
            </Col>
            <Col xl={12}>
                <Label class="">Lead Source</Label>
                <Select
                    items={LeadsSelect}
                    placeholder="Select Status"
                    clearable={false}
                                    showChevron={true}
                    value={LeadsSelect[0]}
                />
            </Col>
            <Col xl={12}>
                <Label class="">Tags</Label>
                <Select
                    multiFullItemClearable
                    multiple
                    items={Tagselect}
                    placeholder="Select Status"
                />
            </Col>
        </Row>
    </ModalBody>
    <ModalFooter>
        <SpkButton
            color="light"
            buttontype="button"
            customClass="m-0 me-2"
            onclickfunc={handleClose}
            >Cancel</SpkButton
        >
        <SpkButton color="primary" buttontype="button" customClass="m-0 "
            >Create Contact</SpkButton
        >
    </ModalFooter>
</Modal>

<!-- End:: Create Contact -->
