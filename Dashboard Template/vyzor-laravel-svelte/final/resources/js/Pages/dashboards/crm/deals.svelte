<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkDealscard from "@/shared/@spk/dashboards-reusable/crm/spk-dealscard.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";

    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        DangerDeals,
        dealCards,
        InfoDeal,
        PinkDeals,
        PrimaryDeal,
        SuccessDeal,
        WarningDeal,
    } from "@/shared/data/dashboards/crm/dealsdata";
    import { crmDashDropdown } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        Col,
        Input,
        InputGroup,
        Label,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { DateInput } from "date-picker-svelte";
    import { onMount } from "svelte";

    let show = false;

    function handleShow() {
        show = true;
    }

    function handleClose() {
        show = false;
    }

    let avatar; // To store the avatar image data
    let fileinput; // To reference the file input element

    const onFileSelected = (e) => {
        let image = e.target.files[0]; // Get the selected file
        if (image) {
            let reader = new FileReader();
            reader.readAsDataURL(image); // Read the file as a data URL

            reader.onload = (e) => {
                avatar = e.target.result; // Update avatar with the result
            };
        }
    };

    let firstContainerRef;
    let secondContainerRef;
    let thirdContainerRef;
    let fourthContainerRef;
    let fifthContainerRef;
    let sixthContainerRef;

    onMount(async () => {
        if (typeof global === "undefined") {
            window.global = window;
        }

        // Dynamically import dragula only on the client-side
        const dragula = await import("dragula");
        // Initialize Dragula with two containers
        const drake = dragula.default([
            firstContainerRef,
            secondContainerRef,
            thirdContainerRef,
            fourthContainerRef,
            fifthContainerRef,
            sixthContainerRef,
        ]);
        return () => drake.destroy();
    });
    // Date
    let date = new Date();
</script>

<!-- Page Title -->
<svelte:head>
    <title>Deals | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Deals"
    subTitle="CRM"
    activepage="Dashboards"
    page="Deals"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody>
                <div
                    class="d-flex align-items-center flex-wrap gap-2 justify-content-between"
                >
                    <div class="d-flex align-items-center">
                        <span class="fw-medium fs-16 me-1">Deals</span>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <SpkButton
                            color="primary"
                            customClass="btn"
                            onclickfunc={handleShow}
                            ><i class="ri-add-line me-1 fw-medium align-middle"
                            ></i>New Deal</SpkButton
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
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->

<!-- Start::row-2 -->

<Row>
    {#each dealCards as deal}
        <Col xxl={2} xl={4} lg={6} md={6}>
            <Card class="custom-card">
                <CardBody class="p-3">
                    <div
                        class="d-flex align-items-top flex-wrap justify-content-between"
                    >
                        <div>
                            <div class={`fw-medium fs-15 ${deal.labelClass}`}>
                                {deal.label}
                            </div>
                            <SpkBadge
                                Color=""
                                CustomClass="bg-light text-default"
                                >{deal.badgeText}</SpkBadge
                            >
                        </div>
                        <div>
                            <span class={`fw-medium ${deal.amountStyle}`}
                                >{deal.amount}</span
                            >
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    {/each}
</Row>

<!-- End::row-2 -->

<!-- Start::row-3 -->

<Row>
    <div class="col-xxl-2" id="leads-discovered" bind:this={firstContainerRef}>
        {#each PrimaryDeal as idx}
            <SpkDealscard deal={idx} />
        {/each}
    </div>
    <div class="col-xxl-2" id="leads-qualified" bind:this={secondContainerRef}>
        {#each WarningDeal as idx}
            <SpkDealscard deal={idx} />
        {/each}
    </div>
    <div class="col-xxl-2" id="contact-initiated" bind:this={thirdContainerRef}>
        {#each SuccessDeal as idx}
            <SpkDealscard deal={idx} />
        {/each}
    </div>
    <div class="col-xxl-2" id="needs-identified" bind:this={fourthContainerRef}>
        {#each InfoDeal as idx}
            <SpkDealscard deal={idx} />
        {/each}
    </div>
    <div class="col-xxl-2" id="negotiation" bind:this={fifthContainerRef}>
        {#each DangerDeals as idx}
            <SpkDealscard deal={idx} />
        {/each}
    </div>
    <div class="col-xxl-2" id="deal-finalized" bind:this={sixthContainerRef}>
        {#each PinkDeals as idx}
            <SpkDealscard deal={idx} />
        {/each}
    </div>
</Row>

<!-- End::row-3 -->

<!-- Start:: New Deal -->

<Modal
    isOpen={show}
    toggle={handleClose}
    fade
    id="create-deal"
    tabindex={-1}
    centered
>
    <ModalHeader toggle={handleClose}>
        <h6 class="modal-title">New Deal</h6>
    </ModalHeader>
    <ModalBody>
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
                <Label for="deal-name" class="">Contact Name</Label>
                <Input
                    type="text"
                    class=""
                    id="deal-name"
                    placeholder="Contact Name"
                />
            </Col>
            <Col xl={6}>
                <Label for="deal-lead-score" class="">Deal Value</Label>
                <Input
                    type="number"
                    class=""
                    id="deal-lead-score"
                    placeholder="Deal Value"
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
                <Label class="">Last Contacted</Label>
                <InputGroup class="custom-input-group custom-date-picker">
                    <div class="input-group-text custom-input-group text-muted">
                        <i class="ri-calendar-line"></i>
                    </div>
                    <DateInput
                        bind:value={date}
                        class="form-control"
                        format="yy-MM-dd HH:MM"
                        closeOnSelection={true}
                        dynamicPositioning={true}
                    />
                </InputGroup>
            </Col>
        </Row>
    </ModalBody>
    <ModalFooter>
        <SpkButton color="light" buttontype="button" onclickfunc={handleClose}
            >Cancel</SpkButton
        >
        <SpkButton color="primary" buttontype="button">Create Deal</SpkButton>
    </ModalFooter>
</Modal>

<!-- End:: New Deal -->
