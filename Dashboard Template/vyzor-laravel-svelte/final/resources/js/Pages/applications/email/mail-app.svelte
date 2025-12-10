<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>

<script>
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        MailMenuItems,
        Mailstable,
        RecipientOptions,
        TagItems,
    } from "@/shared/data/applications/email/mailappdata";
    import {
        Image,
        Input,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Offcanvas,
        Progress,
    } from "@sveltestrap/sveltestrap";
    import { Editor } from "@tadashi/svelte-editor-quill";
    import { onMount } from "svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import { MailDropdown } from "@/shared/data/uielements/dropdowndata";
    import Select from "svelte-select";
    import "quill/dist/quill.snow.css";

    let show = {};

    function handleShow(name) {
        show = { ...show, [name]: true };
    }

    function handleClose(name) {
        show = { ...show, [name]: false };
    }

    let isVisible = false;
    let isMobile = false;

    function toggleVisibility() {
        if (isMobile) {
            isVisible = !isVisible;
        }
    }

    onMount(() => {
        const handleResize = () => {
            isMobile = window.innerWidth < 992;
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    //  offcanvas editor
    const options = {
        theme: "snow",
    };

    let data = `<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
                                    <p><br></p>
                                    <ol>
                                        <li class="ql-size-normal">Write text select and edit with multiple options.</li>
                                        <li class="">This is quill snow editor.</li>
                                        <li class="">Easy to customize and flexible.</li>
                                    </ol>
                                    <p><br></p>
                                    <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
                                `;
    let text = "";
    let html = "";

    const onTextChange = (event) => {
        ({ text, html } = event?.detail ?? {});
        data = html;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>MailApp | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Mail App"
    activepage="Applications"
    subTitle="Email"
    page="Mail App"
/>
<!-- Page Header Close -->

<!-- Page Header Close -->

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="main-mail-container mb-3 gap-2 d-flex">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        class="mail-navigation border"
        onclick={toggleVisibility}
        style="display: {isMobile ? (isVisible ? 'block' : 'none') : 'block'}"
    >
        <div class="d-grid align-items-top p-3 pb-0">
            <button
                class="btn btn-primary d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#mail-Compose"
                onclick={() => handleShow("modal")}
            >
                <i class="ri-add-circle-line fs-16 align-middle me-1"></i>New
                Mail
            </button>
        </div>
        <ul class="list-unstyled mail-main-nav overflow-y-scroll" id="mail-main-nav">
                <li class="px-0 pt-0">
                    <span class="fs-11 text-muted op-7 fw-medium">MAILS</span>
                </li>
                {#each MailMenuItems as item}
                    <li class={`mail-type ${item.isActive ? "active" : ""}`}>
                        <a href="#!">
                            <div class="d-flex gap-2 align-items-center">
                                <div class="lh-1">
                                    <span class="mail-menu-icon"
                                        >{@html item.icon}</span
                                    >
                                </div>
                                <span class="flex-fill text-nowrap"
                                    >{item.label}</span
                                >
                                {#if item.count}
                                    <SpkBadge Color="" CustomClass="bg-primary"
                                        >{item.count}</SpkBadge
                                    >
                                {/if}
                            </div>
                        </a>
                    </li>
                {/each}
                <li class="px-0">
                    <span class="fs-11 text-muted op-7 fw-medium">SETTINGS</span
                    >
                </li>
                <li>
                    <a href="#!">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="lh-1">
                                <span class="mail-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        ><rect
                                            width="256"
                                            height="256"
                                            fill="none"
                                        /><path
                                            d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                                            opacity="0.2"
                                        /><circle
                                            cx="128"
                                            cy="128"
                                            r="40"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        /><path
                                            d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="16"
                                        /></svg
                                    >
                                </span>
                            </div>
                            <span class="flex-fill text-nowrap">
                                Settings
                            </span>
                        </div>
                    </a>
                </li>
                <li class="px-0">
                    <span class="fs-11 text-muted op-7 fw-medium">LABELS</span>
                </li>
                {#each TagItems as item}
                    <li>
                        <a href="#!">
                            <div class="d-flex align-items-center">
                                <span class="me-2 lh-1">
                                    <i
                                        class={`ri-circle-line align-middle fs-10 fw-semibold ${item.colorClass}`}
                                    ></i>
                                </span>
                                <span class="flex-fill text-nowrap"
                                    >{item.label}</span
                                >
                            </div>
                        </a>
                    </li>
                {/each}
                <li>
                    <div class="mb-2 fs-12">
                        <a href="#!"> 40Gb of 50Gb used </a>
                    </div>
                    <Progress
                        animated
                        color="primary"
                        value={50}
                        class="progress-xs"
                    />
                </li>
            </ul>
    </div>
    <div
        class="total-mails border"
        style="display: {isMobile ? (isVisible ? 'none' : 'block') : 'block'}"
    >
        <div
            class="total-mails-header d-flex align-items-center border-bottom flex-wrap gap-2"
        >
            <div>
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkAll"
                    defaultValue=""
                    aria-label="..."
                />
            </div>
            <div class="flex-fill d-flex align-items-center gap-3 flex-wrap">
                <h6 class="fw-medium mb-0">All Mails</h6>
                <div class="d-flex gap-2">
                    <div class="btn-list">
                        <SpkButton
                            size="sm"
                            color="light"
                            customClass="btn btn-icon"
                            id="mail-ti-refresh"
                        >
                            <i class="ti ti-refresh"></i>
                        </SpkButton>
                        <SpkTooltips
                            placement="top"
                            content="Reload"
                            targetId="mail-ti-refresh"
                        ></SpkTooltips>
                        <SpkButton
                            size="sm"
                            color="light"
                            customClass="btn btn-icon"
                            id="mail-ti-archive"
                        >
                            <i class="ti ti-archive"></i>
                        </SpkButton>
                        <SpkTooltips
                            placement="top"
                            content="Archive"
                            targetId="mail-ti-archive"
                        ></SpkTooltips>
                        <SpkButton
                            size="sm"
                            color="light"
                            id="mail-ti-trash"
                            customClass="btn btn-icon"
                        >
                            <i class="ti ti-trash"></i>
                        </SpkButton>
                        <SpkTooltips
                            placement="top"
                            content="Delete"
                            targetId="mail-ti-trash"
                        ></SpkTooltips>
                        <SpkButton
                            size="sm"
                            color="light"
                            customClass="btn btn-icon"
                            id="mail-ti-alert-circle"
                        >
                            <i class="ti ti-alert-circle"></i>
                        </SpkButton>
                        <SpkTooltips
                            placement="top"
                            content="Report Spam"
                            targetId="mail-ti-alert-circle"
                        ></SpkTooltips>
                    </div>
                    <SpkDropdown
                        option={MailDropdown}
                        ToggleClass="btn btn-icon btn-light btn-sm no-caret"
                        Caret={false}
                        parent={`<i class="ti ti-dots-vertical"></i>`}
                    />
                </div>
            </div>
            <div class="d-flex gap-2">
                <div class="input-group">
                    <Input
                        type="text"
                        class="shadow-none"
                        placeholder="Search Email"
                        aria-describedby="button-addon"
                    />
                    <SpkButton
                        color="primary"
                        customClass="btn"
                        buttontype="button"
                        ><i class="ri-search-line"></i></SpkButton
                    >
                </div>
                <SpkButton
                    color="light"
                    customClass="btn btn-icon d-lg-none d-block total-mails-close"
                    onclickfunc={toggleVisibility}
                >
                    <i class="ri-close-line"></i>
                </SpkButton>
            </div>
        </div>
        <div
            class="mail-messages overflow-y-scroll"
            id="mail-messages"
        >
           <SpkTablescomponent
                    Responsive={true}
                    Hover={true}
                    borderless={true}
                    tableClass="text-nowrap mail-messages-container"
                >
                    {#each Mailstable as mail}
                        <tr
                            class= {mail.checked?'mail-selected':''}
                        >
                            <td>
                                <input
                                    class="form-check-input mail-check-input"
                                    type="checkbox"
                                    id={mail.id}
                                    defaultChecked={mail.checked}
                                    aria-label="..."
                                />
                            </td>
                            <td>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="d-flex align-items-center gap-4">
                                    <a
                                        class={`mail-starred ${mail.starred ? "true" : ""}`}
                                        href="#!"
                                        id={`ti-star-filled-${mail.id}`}
                                    >
                                        <i class="ti ti-star-filled"></i>
                                    </a>
                                    <SpkTooltips
                                        placement="top"
                                        content="Star"
                                        targetId={`ti-star-filled-${mail.id}`}
                                    ></SpkTooltips>
                                    <a
                                        class={`mail-important ${mail.important ? "true" : ""}`}
                                        href="#!"
                                        id={`mail1-ti-bookmark-${mail.id}`}
                                    >
                                        <i class="ti ti-bookmark"></i>
                                    </a>
                                    <SpkTooltips
                                        placement="top"
                                        content="Mark As Important"
                                        targetId={`mail1-ti-bookmark-${mail.id}`}
                                    ></SpkTooltips>
                                </div>
                            </td>
                            <td>
                                <div
                                    class="d-flex align-items-center gap-2 mail-user-container"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                     onclick={() => handleShow("offcanvas")}
                                >
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded mail-msg-avatar"
                                        >
                                            <Image
                                                src={mail.senderAvatar}
                                                alt={mail.senderName}
                                            />
                                        </span>
                                    </div>
                                    <div>{mail.senderName}</div>
                                </div>
                            </td>
                            <td>
                                <div
                                    class="mail-msg"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                    onclick={() => handleShow("offcanvas")}
                                >
                                    <span
                                        class="d-block mb-0 fw-medium text-truncate w-75"
                                    >
                                        {mail.subject}
                                        {#if mail.badge}
                                            <SpkBadge
                                                Color=""
                                                CustomClass={`ms-2 ${mail.badge.className}`}
                                            >
                                                {mail.badge.text}
                                            </SpkBadge>
                                        {/if}
                                    </span>
                                    <div
                                        class="text-muted text-wrap text-truncate mail-msg-content"
                                    >
                                        {mail.content}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="mail-received-time"
                                    >{mail.time}</span
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
        </div>
    </div>
</div>

<!-- < !--End:: app - content-- >  -->

<!-- Start::mail information offcanvas -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Offcanvas
    isOpen={show["offcanvas"] || false}
    placement="end"
    toggle={() => handleClose("offcanvas")}
    class="mail-info-offcanvas"
    tabindex={-1}
    id="offcanvasRight"
>
    <!-- <div class="offcanvas-body p-0"> -->
    <div class="mails-information">
        <div class="mail-info-header d-flex flex-wrap gap-2 align-items-center">
            <div class="flex-fill">
                <button
                    class="btn btn-icon btn-light"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Print"
                    id="mail-off-printer"
                >
                    <i class="ri-printer-line"></i>
                </button>
                <SpkTooltips
                    placement="right"
                    content="Print"
                    targetId="mail-off-printer"
                />
                <button
                    class="btn btn-icon btn-light ms-1"
                    data-bs-toggle="tooltip"
                    id="mail-off-mail-open-line"
                    data-bs-placement="top"
                    data-bs-title="Mark as read"
                >
                    <i class="ri-mail-open-line"></i>
                </button>
                <SpkTooltips
                    placement="right"
                    content="Mark as read"
                    targetId="mail-off-mail-open-line"
                />
                <button
                    class="btn btn-icon btn-light ms-1"
                    data-bs-toggle="tooltip"
                    id="mail-off-refresh-line"
                    data-bs-placement="top"
                    data-bs-title="Reload"
                >
                    <i class="ri-refresh-line"></i>
                </button>
                <SpkTooltips
                    placement="right"
                    content="Reload"
                    targetId="mail-off-refresh-line"
                />
            </div>
            <button
                type="button"
                class="btn btn-sm btn-icon btn-outline-light border"
                data-bs-dismiss="offcanvas"
                onclick={() => handleClose("offcanvas")}
                aria-label="Close"
            ><i class="ri-close-line"></i></button>
        </div>
        <div class="mail-info-body p-4 overflow-y-scroll " id="mail-info-body">
            <div
                class="d-sm-flex d-block align-items-center justify-content-between mb-4"
            >
                <div>
                    <p class="fs-20 fw-medium mb-0">
                        Invoice #45678 – Payment Due Soon
                    </p>
                </div>
                <div class="float-end">
                    <span class="fs-13 fw-medium text-muted"
                        >Feb 22 2025,03:05PM</span
                    >
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mb-4">
                <div class="me-1">
                    <span
                        class="avatar avatar-md me-2 avatar-rounded mail-msg-avatar"
                    >
                        <img src="../../images/faces/6.jpg" alt="" />
                    </span>
                </div>
                <div class="flex-fill">
                    <h6 class="mb-0 fw-medium">Sarah Smith</h6>
                    <span class="text-muted fs-12">to:me</span>
                </div>
                <div class="d-flex align-items-center gap-2 fs-14">
                    <a
                        href="#!"
                        class="text-muted"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Starred"
                        id="mail-starred"
                    >
                        <i class="ri-star-line"></i>
                    </a>
                    <SpkTooltips content="Starred" placement="top" targetId="mail-starred" />
                    <a
                        href="#!"
                        class="text-muted ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Archive"
                        id="mail-Archive"
                    >
                        <i class="ri-inbox-archive-line"></i>
                    </a>
                    <SpkTooltips content="Archive" placement="top" targetId="mail-Archive" />
                    <a
                        href="#!"
                        class="text-muted ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Report spam"
                        id="mail-Reportspam"
                    >
                        <i class="ri-spam-2-line"></i>
                    </a>
                    <SpkTooltips content="Report spam" placement="top" targetId="mail-Reportspam" />
                    <a
                        href="#!"
                        class="text-muted ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Delete"
                        id="mail-Delete"
                    >
                        <i class="ri-delete-bin-line"></i>
                    </a>
                    <SpkTooltips content="Delete" placement="top" targetId="mail-Delete" />
                    <a
                        href="#!"
                        class="text-muted ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Reply"
                        id="mail-Reply"
                    >
                        <i class="ri-reply-line"></i>
                    </a>
                    <SpkTooltips content="Reply" placement="top" targetId="mail-Reply" />
                </div>
            </div>
            <div class="main-mail-content mb-4">
                <p class="text-muted mb-2">Dear Sarah</p>
                <p class="mb-2 text-muted">
                    Thank you for your prompt attention to this matter. As we
                    approach the end of the month, please ensure that the
                    payment is made by the 28th to avoid any late fees. You can
                    find the invoice attached to this email. If you require any
                    further clarification or need assistance with the payment
                    process, don't hesitate to reach out.
                </p>
                <p class="mb-2 text-muted">
                    Looking forward to your confirmation.
                </p>
                <p class="mb-0 mt-4">
                    <span class="d-block fs-13 text-muted">Best Regards,</span>
                    <span class="d-block">Finance Team</span>
                </p>
            </div>
            <div class="mail-attachments mb-4">
                <div class="row">
                    <div class="col-xl-3">
                        <div class="card custom-card">
                            <img
                                src="../../images/media/media-43.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body p-2 text-center">
                                <a href="#!" class="text-decoration-underline"
                                    >Download <i class="ti ti-download"></i></a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="card custom-card">
                            <img
                                src="../../images/media/media-44.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body p-2 text-center">
                                <a href="#!" class="text-decoration-underline"
                                    >Download <i class="ti ti-download"></i></a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mail-reply">
                <div id="mail-reply-editor" >
                    <Editor {options} {data} on:text-change={onTextChange} />
                </div>
                <div class="mail-info-footer">
                    <div class="text-end">
                        <button class="btn btn-primary">
                            <i
                                class="ri-share-forward-line me-1 d-inline-block align-middle"
                            ></i>Forward
                        </button>
                        <button class="btn btn-danger ms-1">
                            <i
                                class="ri-reply-all-line me-1 d-inline-block align-middle"
                            ></i>Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</Offcanvas>
<!-- End::mail information offcanvas -->

<!-- Start::compose mail modal -->
<Modal
    size="lg"
    fade
    isOpen={show["modal"] || false}
    id="mail-Compose"
    tabindex={-1}
    aria-labelledby="mail-ComposeLabel"
    toggle={() => handleClose("modal")}
>
    <ModalHeader class="modal-header" toggle={() => handleClose("modal")}>
        <h6 class="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
    </ModalHeader>
    <ModalBody class="modal-body px-4">
        <div class="row">
            <div class="col-xl-6 mb-2">
                <label for="fromMail" class="form-label"
                    >From<sup
                        ><i class="ri-star-s-fill text-success fs-8"></i></sup
                    ></label
                >
                <input
                    type="email"
                    class="form-control"
                    id="fromMail"
                    value="jackmiller2345@gmail.com"
                />
            </div>
            <div class="col-xl-6 mb-2">
                <label for="toMail" class="form-label"
                    >To<sup
                        ><i class="ri-star-s-fill text-success fs-8"></i></sup
                    ></label
                >
                <Select
                items={RecipientOptions}
                multiFullItemClearable
                multiple
                value={RecipientOptions[0]}
                showChevron={false}
                clearable={true}
                />
            </div>
            <div class="col-xl-6 mb-2">
                <label for="mailCC" class="form-label text-dark fw-medium"
                    >Cc</label
                >
                <input type="email" class="form-control" id="mailCC" />
            </div>
            <div class="col-xl-6 mb-2">
                <label for="mailBcc" class="form-label text-dark fw-medium"
                    >Bcc</label
                >
                <input type="email" class="form-control" id="mailBcc" />
            </div>
            <div class="col-xl-12 mb-2">
                <label for="Subject" class="form-label">Subject</label>
                <input
                    type="text"
                    class="form-control"
                    id="Subject"
                    placeholder="Subject"
                />
            </div>
            <div class="col-xl-12">
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label class="col-form-label">Content :</label>
                <div class="mail-compose">
                    <div id="mail-compose-editor">
                        <Editor {options} {data} on:text-change={onTextChange} />
                    </div>
                </div>
            </div>
        </div>
    </ModalBody>
    <ModalFooter class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal" onclick={() => handleClose('modal')}
            >Cancel</button
        >
        <button type="button" class="btn btn-primary">Send</button>
    </ModalFooter>
</Modal>
<!-- End::compose mail modal -->
