
<script lang="ts">
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import { Svroller } from "svrollbar";
import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { ActivityLog, FileCategorie, FileCategories, FileData, FileDetails, FileMenuItems, Folders, Options, PeopleList } from "$lib/data/applications/filemanagerdata";
    import { Card, CardBody, CardHeader, Col, Image, Input, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Offcanvas, OffcanvasBody, Progress, Row } from "@sveltestrap/sveltestrap";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import { FileManager2, FileManagerDropdown } from "$lib/data/uielements/dropdowndata";
    
       let show: { [key: string]: boolean } = {};

    function handleShow(name: string) {
        show = { ...show, [name]: true };
    }

    function handleClose(name: string) {
        show = { ...show, [name]: false };
    }

</script>

<!-- Page Title -->
<svelte:head>
    <title>FileManager | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="File Manager"
    activepage="Applications"
    page="File Manager"
/>
<!-- Page Header Close -->

 <!-- Start:: row-1 --> 

            <Row class="">
                <Col xxl={3} xl={12} class="">
                    <Row>
                        <Col xxl={12} xl={6} class="">
                            <Card class="custom-card">
                                <CardBody>
                                    <Svroller width="100%" height="100%">
                                        <ul class="list-unstyled files-main-nav" id="files-main-nav">
                                            {#each FileMenuItems as item}
                                            <li class={`files-type ${item.active ? 'active' : ''}`}>
                                                <a href="#!">
                                                    <div class="d-flex align-items-center">
                                                        <div class="me-2">{@html item.icon}</div>
                                                        <span class="flex-fill text-nowrap">{item.label}</span>
                                                    </div>
                                                </a>
                                            </li>
                                            {/each}
                                        </ul>
                                    </Svroller>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={6} class="">
                            <Card class="custom-card">
                                <CardBody>
                                    <div class="filemanager-upgrade-storage w-100 text-center">
                                        <span class="d-block mb-3 p-4 bg-light rounded file-manager-upgrade-img">
                                            <Image src="../images/media/file-manager/2.png" alt="" class="img-fluid" />
                                        </span>
                                        <span class="fs-15 fw-semibold text-default">Upgrade To PRO</span>
                                        <span class="fs-13 fw-medium d-block text-muted mt-2">Unlock Pro for faster transfers, stronger security, and unlimited storage.</span>
                                        <div class="mt-3 d-grid"> <SpkButton color="primary" customClass="btn btn-lg">Upgrade Now</SpkButton>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12} class="">
                    <Card class="custom-card overflow-hidden">
                        <CardBody class="p-0">
                            <div class="file-manager-folders">
                                <div class="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                    <div class="w-50">
                                        <Input class="" type="text" placeholder="Search Files Here" aria-label="files-search" />
                                    </div>
                                    <div class="d-flex gap-2 flex-wrap justify-content-sm-end">
                                        <SpkButton color="primary" onclickfunc={() => handleShow('modal')} customClass="btn btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light">
                                            <i class="ri-add-circle-line align-middle me-1"></i>Create Folder
                                        </SpkButton>
                                        <Modal centered fade isOpen={show['modal'] || false} toggle={() => handleClose('modal')} id="create-folder" tabindex={-1} aria-labelledby="create-folder" data-bs-keyboard="false">
                                            <ModalHeader toggle={() => handleClose('modal')}>
                                                <h6 class="modal-title" id="staticBackdropLabel">Create Folder
                                                </h6>
                                            </ModalHeader>
                                            <ModalBody>
                                                <label for="create-folder1" class="form-label">Folder Name</label>
                                                <Input type="text" class="" id="create-folder1" placeholder="Folder Name" />
                                            </ModalBody>
                                            <ModalFooter>
                                                <SpkButton color="" onclickfunc={() => handleClose('modal')} buttontype="button" customClass="btn btn-sm btn-icon btn-light"
                                                    ><i class="ri-close-fill"></i></SpkButton>
                                                <SpkButton color="" buttontype="button" customClass="btn btn-sm btn-success">Create</SpkButton>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                </div>
                                <div class="p-3 file-folders-container">
                                    <div class="d-flex mb-3 align-items-center justify-content-between">
                                        <p class="mb-0 fw-medium fs-14">Categories</p>
                                        <a href="#!" class="fs-12 text-muted fw-medium"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                                    </div>
                                    <div class="row">
                                        {#each FileCategories as category}
                                        <Col xxl={4} xl={4} lg={6} md={6} class="">
                                            <Card class={`custom-card shadow-none file-category-card ${category.colorClass}`}>
                                                <CardBody class="text-center">
                                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                                    <a href="#!" class="stretched-link"></a>
                                                    <div class="d-flex align-items-center gap-2 lh-1 justify-content-end file-icons">
                                                        <div class="file-important">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2"></path><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-linejoin="round" stroke-width="16"></path></svg>
                                                        </div>
                                                        <SpkDropdown
                                                            option={FileManager2}
                                                            CustomClass="custom-dropdown customFileDrop"
                                                            ToggleClass="no-caret p-0 border-0"
                                                            Caret={false}
                                                            parent={`<i class="ri-more-2-fill fw-semibold text-muted"></i>`}
                                                            />
                                                    </div>
                                                    <div class={`mb-2 text-${category.colorClass} svg-${category.colorClass} file-img`}>
                                                        {@html category.icon}
                                                    </div>
                                                    <h6 class="fw-semibold mb-1">{category.title}</h6>
                                                    <span class="d-block text-muted">{category.fileCount} Files</span>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        {/each}
                                    </div>
                                    <div class="d-flex mb-3 align-items-center justify-content-between">
                                        <p class="mb-0 fw-medium fs-14">Folders</p>
                                        <a href="#!" class="fs-12 text-muted fw-medium"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                                    </div>
                                    <Row>
                                        {#each Folders as folder }
                                        <Col xxl={4} xl={4} lg={6} md={6} class="">
                                            <Card class="custom-card">
                                                <CardBody>
                                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                                    <a href="#!" class="stretched-link"></a>
                                                    <div class="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-start">
                                                        <div class="svg-warning text-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"></path></svg>
                                                        </div>
                                                        <div class="d-flex align-items-center gap-2 lh-1 file-icons">
                                                            {#if folder.important}
                                                            <div class="file-important true">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2"></path><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-linejoin="round" stroke-width="16"></path></svg>
                                                            </div>
                                                            {/if}
                                                            {#if folder.importants}
                                                            <div class="file-important svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2"></path><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                                                            </div>
                                                            {/if}
                                                            <SpkDropdown
                                                            option={FileManager2}
                                                            CustomClass="custom-dropdown"
                                                            ToggleClass="no-caret p-0 border-0"
                                                            Caret={false}
                                                            parent={`<i class="ri-more-2-fill fw-semibold text-muted"></i>`}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="fs-14 fw-medium mb-1 lh-1">{folder.name}</div>
                                                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                                                        <div><span class="text-muted fs-12">{folder.fileCount} Files</span></div>
                                                        <div><span class="text-default fw-medium">{folder.size}</span></div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        {/each}
                                    </Row>
                                    <div class="d-flex mb-3 align-items-center justify-content-between">
                                        <p class="mb-0 fw-medium fs-14">Recent Files</p>
                                        <a href="#!" class="fs-12 text-muted fw-medium"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                                    </div>
                                    <Row>
                                        <Col xl={12}>
                                           <SpkTablescomponent Responsive={true} Hover={true}  tableClass="text-nowrap border" tBodyClass="files-list" header={[{ title: 'File Name' }, { title: 'Category' }, { title: 'Size' }, { title: 'Date Modified' }, { title: 'Action' }]}>
                                                    {#each FileData as file}
                                                    <tr>
                                                        <th scope="row">
                                                            <div class="d-flex align-items-center">
                                                                <div class="me-0">
                                                                    <span class={`avatar avatar-sm ${file.avatarClass}`}>
                                                                        {@html file.icon}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <a href="#!" onclick={() => handleShow('offcanvas')} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                                        {file.fileName}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>{file.fileType}</td>
                                                        <td>{file.fileSize}</td>
                                                        <td>{file.fileDate}</td>
                                                        <td>
                                                            <!-- svelte-ignore a11y_consider_explicit_label -->
                                                            <div class="hstack gap-2 fs-15">
                                                                <a href="#!" class="btn btn-icon btn-sm btn-light">
                                                                    <i class="ri-eye-line"></i>
                                                                </a>
                                                                <a href="#!" class="btn btn-icon btn-sm btn-light">
                                                                    <i class="ri-delete-bin-line"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/each}
                                                </SpkTablescomponent>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={3} xl={12}>
                    <Card class="custom-card">
                        <CardBody>
                            <div class="p-1 rounded bg-light mb-4">
                                <div class="d-flex align-items-center">
                                    <div id="available-storage">
                                        <Spkapexcharts options={Options}  />
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold">Available Storage</span>
                                        <span class="fs-13 text-muted">51Gb of 64Gb</span>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-unstyled files-media-list">
                                {#each FileCategorie as item}
                                <li>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="lh-1">
                                            <span class={`avatar avatar-md avatar-rounded svg-${item.color} bg-${item.color}-transparent`}>
                                                {@html item.icon}
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <div class="fw-medium">{item.name}</div>
                                                <div class="text-muted fs-13">{item.size}</div>
                                            </div>
                                            <!-- <SpkProgress variant={item.color} mainClass="progress-bar-animated progress-xs" now={58} /> -->
                                             <Progress color={`${item.color}`} class="progress-xs" animated value={58} />
                                        </div>
                                    </div>
                                </li>
                                {/each}
                            </ul>
                        </CardBody>
                    </Card>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Recent Activity
                            </div>
                        </CardHeader>
                        <CardBody class="">
                            <ul class="list-unstyled file-manager-activity-list">
                                {#each ActivityLog as activity}
                                <li>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md avatar-rounded bg-light text-muted">
                                                <i class={`ti ${activity.icon} fs-18`}></i>
                                            </span>
                                        </div>
                                        <div class="flex-fill w-75">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <span class="fw-semibold">{activity.title}</span>
                                                <span class="fs-13 text-muted">{activity.time}</span>
                                            </div>
                                            <span class="d-block text-muted fs-13 w-100 text-truncate">
                                                {activity.description}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                {/each}
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!-- End:: row-1 --> 

             <!-- Start::mail information offcanvas --> 

            <Offcanvas placement="end" isOpen={show['offcanvas'] || false} toggle={() => handleClose('offcanvas')} class="offcanvas-end" tabindex={-1} id="offcanvasRight">
                <!-- <OffcanvasBody class="p-0"> -->
                    <div class="selected-file-details">
                        <div class="d-flex p-3 align-items-center justify-content-between border-bottom">
                            <div>
                                <h6 class="fw-medium mb-0">File Details</h6>
                            </div>
                            <div class="d-flex align-items-center">
                                <SpkDropdown
                                CustomClass="dropdown me-1 ms-auto"
                                option={FileManagerDropdown}
                                ToggleClass="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light no-caret"
                                Caret={false}
                                parent={`<i class="ri-more-2-fill"></i>`}
                                />
                                <SpkButton color="" onclickfunc={() => handleClose('offcanvas')} buttontype="button" customClass="btn btn-sm btn-icon btn-outline-light border" 
                                    ><i class="ri-close-line"></i></SpkButton>
                            </div>
                        </div>
                        <div class="filemanager-file-details" id="filemanager-file-details">
                            <div class="p-3 text-center border-bottom border-block-end-dashed">
                                <div class="file-details mb-3">
                                    <Image src="../images/media/blog/9.jpg" alt="" />
                                </div>
                                <div>
                                    <p class="mb-0 fw-medium fs-16">IMG-09123878-SPK734.jpeg</p>
                                    <p class="mb-0 text-muted fs-10">422KB | 23,Nov 2025</p>
                                </div>
                            </div>
                            <div class="p-3 border-bottom border-block-end-dashed">
                                <ListGroup>
                                    {#each FileDetails as detail}
                                    <ListGroupItem class="">
                                        <div>
                                            <p class="fw-medium mb-0">
                                                {detail.label} :{" "}
                                            </p>
                                            <span class="fs-12 text-muted">{detail.value}</span>
                                        </div>
                                    </ListGroupItem>
                                    {/each}
                                </ListGroup>
                            </div>
                            <div class="p-3 border-bottom border-block-end-dashed">
                                <p class="mb-1 fw-medium fs-14">Downloaded from :</p>
                                <a class="text-primary fw-medium text-break" href="https://themeforest.net/user/spruko/portfolio" target="_blank">
                                    <u>https://themeforest.net/user/spruko/portfolio</u>
                                </a>
                            </div>
                            <div class="p-3">
                                <p class="mb-2 fw-medium fs-14">Shared With :</p>
                                {#each PeopleList as person}
                                <a href="#!">
                                    <div class="d-flex align-items-center p-2 mb-1">
                                        <span class="avatar avatar-sm me-2 avatar-rounded">
                                            <Image src={person.avatar} alt={person.name} />
                                        </span>
                                        <span class="fw-medium flex-fill">{person.name}</span>
                                        <SpkBadge Color="" CustomClass="bg-success-transparent fw-normal">{person.date}</SpkBadge>
                                    </div>
                                </a>
                                {/each}
                            </div>
                        </div>
                    </div>
                <!-- </OffcanvasBody> -->
            </Offcanvas>

             <!-- End::mail information offcanvas --> 



    