<script lang="ts">
    // prop import 
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { CustomerSelect, StatusSelect } from "$lib/data/dashboards/ecommerce/customersdata";
    import { ecommerceDropdown1 } from "$lib/data/uielements/dropdowndata";
    import CustomGrid from "$lib/view/ecommercesGrid/customGrid.svelte";
    import { Card, CardBody, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    import { DateInput } from "date-picker-svelte";
    let show = false;
    const handleShow = (e: Event) => {
        e.preventDefault();
        show = true;
    };
    const handleClose = () => {
        show = false;
    };

    let date = new Date();
    
</script>

<!-- Page Title -->
<svelte:head>
    <title>Customers | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Customers List"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Customers List"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <div class="card-header justify-content-between border-bottom-0">
                <!-- Search Bar -->

                <div class="w-sm-25">
                    <Input
                        class=""
                        type="search"
                        id="search-input"
                        placeholder="Search Customer"
                        aria-label="search-customer"
                    />
                </div>

                <!-- Filters Section -->

                <div class="d-flex gap-4 flex-wrap w-sm-50 justify-content-end">
                    <!-- Stock Filter -->

                    <div class="custom-list-select custom-search">
                        <Select
                            items={CustomerSelect}
                            placeholder="Customer Status"
                            clearable={false}
                                    showChevron={true}
                            value={CustomerSelect[0]}
                        />
                    </div>
                    <div class="">
                        <SpkDropdown
                            option={ecommerceDropdown1}
                            ToggleClass="btn btn-primary-light"
                            CustomClass="d-grid"
                            Caret={true}
                            parent={`<i class="ri-upload-2-line me-1"></i>Export`}
                        >
                            
                        </SpkDropdown>
                    </div>

                    <!-- Sort By Filter -->

                    <div class=" d-grid">
                        <SpkButton
                            color="primary"
                            onclickfunc={handleShow}
                            customClass="btn"
                            ><i class="ri ri-add-line me-1"></i>Add Customer</SpkButton
                        >
                    </div>
                </div>
            </div>
            <!-- Table inside the card-body -->

            <CardBody class="p-0">
                <div id="customers-list" class="grid-card-table">
                    <CustomGrid  />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->

<Modal isOpen={show} fade id="addtask" centered tabindex={-1} toggle={handleClose}>
                <ModalHeader toggle={handleClose} >
                    <h6 class="modal-title" id="mail-ComposeLabel">Add Customer</h6>
                </ModalHeader>
                <ModalBody class="px-4">
                    <div class="row gy-2">
                        <Col xl={12}>
                            <Label for="customer-name" class="">Customer Name</Label>
                            <Input type="text" class="" id="customer-name" placeholder="Customer Name" />
                        </Col>
                        <Col xl={12}>
                            <Label for="customer-email" class="">Customer Email</Label>
                            <Input type="email" class="" id="customer-email" placeholder="Customer Email" />
                        </Col>
                        <Col xl={12}>
                            <!-- svelte-ignore a11y_label_has_associated_control -->
                            <label class="form-label">Joined Date</label>
                            <div class="form-group custom-date-picker">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    <DateInput 
                                    bind:value={date}
                                    class="form-control"
                                    format="yy-MM-dd"
                                    closeOnSelection={true}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <!-- svelte-ignore a11y_label_has_associated_control -->
                            <label class="form-label">Status</label>
                            <Select
                            items={StatusSelect}
                            clearable={false}
                                    showChevron={true}
                            />
                        </Col>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <SpkButton color="light" onclickfunc={handleClose} buttontype="button" customClass="btn"
                        >Cancel</SpkButton>
                    <SpkButton color="primary" buttontype="button" customClass="btn">Add Customer</SpkButton>
                </ModalFooter>
            </Modal>
