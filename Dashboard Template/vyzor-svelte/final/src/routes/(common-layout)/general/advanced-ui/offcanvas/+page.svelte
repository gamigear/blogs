<script lang="ts">
  import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
  import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
  import {
    dataoffcanvas1,
    offcanvas1,
    offcanvas3,
    offcanvas4,
    offcanvas5,
    offcanvas2,
  } from "$lib/components/common/prism-code/advanceuiprism";
  import { Col, Offcanvas, OffcanvasBody, Row } from "@sveltestrap/sveltestrap";
  import { OffcanvasData } from "$lib/data/adavanec-ui/Offcanvasdata";
  let toggles: Record<string, boolean> = {};

    function toggle(key: string): void {
        // If the key doesn't exist, initialize it as false first
        if (!(key in toggles)) {
            toggles[key] = false;
        }
        toggles[key] = !toggles[key];
        toggles = { ...toggles }; // trigger reactivity
    }
</script>

<!-- Page Title -->
<svelte:head>
  <title>Offcanvas | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Offcanvas" activepage="Advanced Ui" page="Offcanvas" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <ShowCode
            
            title=" Live demo"
            svelteCode={offcanvas1}
            dataCode={dataoffcanvas1}
        >
            <a
                class="btn btn-primary mb-1"
                data-bs-toggle="offcanvas"
                on:click={() => toggle("withhref")}
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
            >
                Link with href
            </a>
            <button
                class="btn btn-primary mb-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                on:click={() => toggle("withhref")}
                aria-controls="offcanvasExample"
            >
                Button with data-bs-target
            </button>
            <Offcanvas
                isOpen={toggles["withhref"]}
                toggle={() => toggle("withhref")}
                header="Notifications"
                placement="start"
                class="custom-offcanvas1"
                tabindex={-1}
                id="offcanvasExample"
            >
                <div class="">
                    <div class="">
                        <ul class="list-group list-group-flush mb-0">
                            {#each OffcanvasData as idx}
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            {#if idx.src}
                                                <div
                                                    class="avatar avatar-md avatar-rounded"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        alt="avatar"
                                                        class="rounded-circle"
                                                        src={idx.src}
                                                    />
                                                </div>
                                            {:else}
                                                <div
                                                    class={`avatar avatar-md bg-${idx.color} text-fixed-white avatar-rounded`}
                                                >
                                                    {idx.text}
                                                </div>
                                            {/if}
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">
                                                {idx.name}<span
                                                    class="badge bg-light text-muted float-end"
                                                    >{idx.date}</span
                                                >
                                            </p>
                                            <span class="fs-12 text-muted">
                                                <i
                                                    class="ri-time-line align-middle me-1 d-inline-block"
                                                ></i>{idx.time}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </Offcanvas>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            
            title="Body scrolling"
            svelteCode={offcanvas2}
            dataCode={dataoffcanvas1}
        >
            <button
                class="btn btn-primary"
                on:click={() => toggle("bodyScrolling")}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
                >Enable body scrolling
            </button>
            <Offcanvas
                scroll
                isOpen={toggles["bodyScrolling"]}
                toggle={() => toggle("bodyScrolling")}
                backdrop={true}
                placement="start"
                header="Notifications"
                class="custom-offcanvas1"
                tabindex={-1}
                id="offcanvasExample"
            >
                <OffcanvasBody class="p-0">
                    <div class="">
                        <ul class="list-group list-group-flush mb-0">
                            {#each OffcanvasData as idx}
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            {#if idx.src}
                                                <div
                                                    class="avatar avatar-md avatar-rounded"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        alt="avatar"
                                                        class="rounded-circle"
                                                        src={idx.src}
                                                    />
                                                </div>
                                            {:else}
                                                <div
                                                    class={`avatar avatar-md bg-${idx.color} text-fixed-white avatar-rounded`}
                                                >
                                                    {idx.text}
                                                </div>
                                            {/if}
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">
                                                {idx.name}<span
                                                    class="badge bg-light text-muted float-end"
                                                    >{idx.date}</span
                                                >
                                            </p>
                                            <span class="fs-12 text-muted">
                                                <i
                                                    class="ri-time-line align-middle me-1 d-inline-block"
                                                ></i>{idx.time}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            
            title=" Static backdrop"
            svelteCode={offcanvas3}
            dataCode={dataoffcanvas1}
        >
            <button
                class="btn btn-primary"
                type="button"
                on:click={() => toggle("staticBackdrop")}
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
            >
                Toggle static offcanvas
            </button>
            <Offcanvas
                backdrop={false}
                isOpen={toggles["staticBackdrop"]}
                toggle={() => toggle("staticBackdrop")}
                placement="start"
                header="Notifications"
                class="custom-offcanvas1"
                tabindex={-1}
                id="offcanvasExample"
            >
                <OffcanvasBody class="p-0">
                    <div class="">
                        <ul class="list-group list-group-flush mb-0">
                            {#each OffcanvasData as idx}
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            {#if idx.src}
                                                <div
                                                    class="avatar avatar-md avatar-rounded"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        alt="avatar"
                                                        class="rounded-circle"
                                                        src={idx.src}
                                                    />
                                                </div>
                                            {:else}
                                                <div
                                                    class={`avatar avatar-md bg-${idx.color} text-fixed-white avatar-rounded`}
                                                >
                                                    {idx.text}
                                                </div>
                                            {/if}
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">
                                                {idx.name}<span
                                                    class="badge bg-light text-muted float-end"
                                                    >{idx.date}</span
                                                >
                                            </p>
                                            <span class="fs-12 text-muted">
                                                <i
                                                    class="ri-time-line align-middle me-1 d-inline-block"
                                                ></i>{idx.time}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            
            title="Body scrolling and backdrop"
            svelteCode={offcanvas4}
            dataCode={dataoffcanvas1}
        >
            <button
                class="btn btn-primary"
                on:click={() => toggle("Bodytogglebackdrop")}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                >Enable both scrolling &amp; backdrop</button
            >
            <Offcanvas
                backdrop={true}
                isOpen={toggles["Bodytogglebackdrop"]}
                toggle={() => toggle("Bodytogglebackdrop")}
                placement="start"
                header="Notifications"
                class="custom-offcanvas1"
                tabindex={-1}
                id="offcanvasExample"
            >
                <OffcanvasBody class="p-0">
                    <div class="">
                        <ul class="list-group list-group-flush mb-0">
                            {#each OffcanvasData as idx}
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            {#if idx.src}
                                                <div
                                                    class="avatar avatar-md avatar-rounded"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        alt="avatar"
                                                        class="rounded-circle"
                                                        src={idx.src}
                                                    />
                                                </div>
                                            {:else}
                                                <div
                                                    class={`avatar avatar-md bg-${idx.color} text-fixed-white avatar-rounded`}
                                                >
                                                    {idx.text}
                                                </div>
                                            {/if}
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">
                                                {idx.name}<span
                                                    class="badge bg-light text-muted float-end"
                                                    >{idx.date}</span
                                                >
                                            </p>
                                            <span class="fs-12 text-muted">
                                                <i
                                                    class="ri-time-line align-middle me-1 d-inline-block"
                                                ></i>{idx.time}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            
            title="Placement"
            svelteCode={offcanvas5}
            dataCode={dataoffcanvas1}
        >
            <button
                class="btn btn-primary mb-1"
                on:click={() => toggle("Placement")}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop">Toggle top offcanvas</button
            >
            <Offcanvas
                isOpen={toggles["Placement"]}
                toggle={() => toggle("Placement")}
                placement="top"
                header="Offcanvas top"
                tabindex={-1}
                id="offcanvasTop"
            >
                ...
            </Offcanvas>
            <button
                class="btn btn-primary mb-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                on:click={() => toggle("placementEnd")}
                aria-controls="offcanvasRight">Toggle right offcanvas</button
            >
            <Offcanvas
                isOpen={toggles["placementEnd"]}
                toggle={() => toggle("placementEnd")}
                placement="end"
                header="Notifications"
                class="custom-offcanvas1"
                tabindex={-1}
                id="offcanvasExample"
            >
                <OffcanvasBody class="p-0">
                    <div class="">
                        <ul class="list-group list-group-flush mb-0">
                            {#each OffcanvasData as idx}
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            {#if idx.src}
                                                <div
                                                    class="avatar avatar-md avatar-rounded"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        alt="avatar"
                                                        class="rounded-circle"
                                                        src={idx.src}
                                                    />
                                                </div>
                                            {:else}
                                                <div
                                                    class={`avatar avatar-md bg-${idx.color} text-fixed-white avatar-rounded`}
                                                >
                                                    {idx.text}
                                                </div>
                                            {/if}
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">
                                                {idx.name}<span
                                                    class="badge bg-light text-muted float-end"
                                                    >{idx.date}</span
                                                >
                                            </p>
                                            <span class="fs-12 text-muted">
                                                <i
                                                    class="ri-time-line align-middle me-1 d-inline-block"
                                                ></i>{idx.time}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
            <button
                class="btn btn-primary mb-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
                on:click={() => toggle("bottom")}
                aria-controls="offcanvasBottom">Toggle bottom offcanvas</button
            >
            <Offcanvas
                isOpen={toggles["bottom"]}
                toggle={() => toggle("bottom")}
                placement="bottom"
                header="Offcanvas bottom"
                tabindex={-1}
                id="offcanvasTop"
            >
                ...
            </Offcanvas>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->
