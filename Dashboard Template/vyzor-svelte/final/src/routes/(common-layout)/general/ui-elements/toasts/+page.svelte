<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        toast1,
        toast2,
        toast3,
        toast4,
        toast5,
        toast6,
        toast7,
    } from "$lib/components/common/prism-code/uielementsprim.js";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        Button,
        Col,
        Row,
        Toast,
        ToastBody,
        ToastHeader,
    } from "@sveltestrap/sveltestrap";

    // Local reactive object for toast visibility
    let toasts: { [key: string]: boolean } = {};

    // Equivalent to React's addToast
    function addToast(toastName: string) {
        toasts = {
            ...toasts,
            [toastName]: true,
        };
    }

    // Equivalent to handleToasts
    function handleToasts(toastName: string) {
        toasts = {
            ...toasts,
            [toastName]: false,
        };
    }

    // Define an array of toast messages with different properties
    let toastsData = [
        {
            id: 1,
            message: "Hello,world! This is the Primary toast message.",
            show: true,
            color: "primary",
        },
        {
            id: 2,
            message: "Hello,world! This is the Secondary toast message.",
            show: true,
            color: "secondary",
        },
        {
            id: 3,
            message: "Hello,world! This is the Success toast message.",
            show: true,
            color: "warning",
        },
        {
            id: 4,
            message: "Hello,world! This is the Info toast message.",
            show: true,
            color: "info",
        },
    ];

    // Function to close the toast
     function handleClose(id: number | string) {
    toastsData = toastsData.map((toast) =>
      toast.id === id ? { ...toast, show: false } : toast
    );
  }
    
</script>

<!-- Page Title -->
<svelte:head>
    <title>Toasts | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Toasts" activepage="UI Elements" page="Toasts" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
         <ShowCode title="Live example" svelteCode={toast1}>
            <Button
                type="button"
                color=""
                class="btn btn-primary btn-wave"
                id="liveToastBtn"
                on:click={() => addToast("live")}>Show live toast</Button
            >
            <div class="toast-container position-fixed top-0 end-0 p-3">
                    <Toast
                        autohide
                        id="liveToast"
                        class="toast fade show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts["live"]|| false}
                        delay={3000}
                    >
                        <div
                            class=" toast-header text-default"
                            on:toggle={() => handleToasts("live")}
                        >
                            <img
                                class="bd-placeholder-img rounded"
                                src="../../images/brand-logos/favicon.ico"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <small>11 mins ago</small>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts("live")}
                            ></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </Toast>
            </div>
        </ShowCode>
       <ShowCode title="Color schemes" svelteCode={toast2}>
            {#each toastsData as toast (toast.id)}
                <Toast
                    class={`toast custom-toast align-items-center text-bg-${toast.color} border-0 ${toast.id==4?'':'mb-4'}`}
                    fade
                    isOpen={toast.show}
                >
                    <div class="d-flex">
                        <ToastBody class="">{toast.message}</ToastBody>
                        <Button
                            color=""
                            aria-label="Close"
                            on:click={() => handleClose(toast.id)}
                            class="btn-close btn-close-white me-2 m-auto p-0"
                        ></Button>
                    </div>
                </Toast>
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Basic example" svelteCode={toast3}>
            <Toast
                class="toast fade show"
                role="alert"
                aria-live="assertive"
                fade
                isOpen={toasts["basic"]}
                aria-atomic="true"
            >
                <div class="toast-header text-default">
                    <img
                        class="bd-placeholder-img rounded me-2"
                        src="../../images/brand-logos/favicon.ico"
                        alt="..."
                    />
                    <strong class="me-auto">Vyzor</strong>
                    <small>11 mins ago</small>
                    <button
                        type="button"
                        class="btn-close"
                        on:click={() => handleToasts("basic")}
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </Toast>
        </ShowCode>
       <ShowCode title="Stacking" svelteCode={toast4}>
            <div class="toast-container position-static">
                <Toast
                    class=" fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    fade
                    isOpen={toasts["stack"]}
                >
                    <div class="toast-header text-default">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/favicon.ico"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <small>just now</small>
                        <button
                            type="button"
                            class="btn-close"
                            on:click={() => handleToasts("stack")}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="toast-body">See? Just like this.</div>
                </Toast>
                <Toast
                    class="fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    fade
                    isOpen={toasts["stack1"]}
                >
                    <div class="toast-header text-default">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/favicon.ico"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <small class="text-muted">2 seconds ago</small>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            on:click={() => handleToasts("stack1")}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="toast-body">
                        Heads up, toasts will stack automatically
                    </div>
                </Toast>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
         <ShowCode title="Translucent" svelteCode={toast5}>
            <Toast
                class="fade show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                fade
                isOpen={toasts["transColor"]}
            >
                <div class="toast-header text-default">
                    <img
                        class="bd-placeholder-img rounded me-2"
                        src="../../images/brand-logos/favicon.ico"
                        alt="..."
                    />

                    <strong class="me-auto">Vyzor</strong>
                    <small class="text-muted">11 mins ago</small>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="toast"
                        on:click={() => handleToasts("transColor")}
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </Toast>
        </ShowCode>
        <ShowCode title="Custom content" svelteCode={toast6}>
            <Toast
                class="align-items-center fade show mb-3"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                fade
                isOpen={toasts["customColor"]}
            >
                <div class="d-flex">
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                    <button
                        type="button"
                        class="btn-close me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                        on:click={() => handleToasts("customColor")}
                    >
                    </button>
                </div>
            </Toast>
            <div>
                <span class="my-4 text-muted">
                    Alternatively, you can also add additional controls and
                    components to toasts.
                </span>
            </div>
            <Toast
                class="show mt-2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                fade
                isOpen={toasts["customsColor"]}
            >
                <div class="toast-body">
                    Hello, world! This is a toast message.
                    <div class="mt-2 pt-2 border-top">
                        <button
                            type="button"
                            class="btn btn-primary btn-sm btn-wave"
                            >Take action</button
                        >
                        <button
                            type="button"
                            class="btn btn-secondary btn-sm btn-wave"
                            data-bs-dismiss="toast"
                            on:click={() => handleToasts("customsColor")}
                            >Close</button
                        >
                    </div>
                </div>
            </Toast>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Color Variants Live" svelteCode={toast2}>
            <div class="btn-list">
                <Button
                    type="button"
                    on:click={() => addToast("PrimaryColor")}
                    color="primary-light"
                    class="btn me-2 btn-wave"
                    id="primaryToastBtn">Primary</Button
                >
                <Button
                    color="secondary-light"
                    type="button"
                    class="btn me-2 btn-wave"
                    on:click={() => addToast("SecondaryColor")}
                    id="secondaryToastBtn">secondary</Button
                >
                <Button
                    color="warning-light"
                    type="button"
                    class="btn  me-2 btn-wave"
                    on:click={() => addToast("WarningColor")}
                    id="warningToastBtn">warning</Button
                >
                <Button
                    color="info-light"
                    type="button"
                    class="btn  me-2 btn-wave"
                    on:click={() => addToast("InfoColor")}
                    id="infoToastBtn">info</Button
                >
                <Button
                    color="success-light"
                    type="button"
                    class="btn  me-2 btn-wave"
                    on:click={() => addToast("SuccessColor")}
                    id="successToastBtn">success</Button
                >
                <Button
                    color="danger-light"
                    type="button"
                    class="btn me-2 btn-wave"
                    on:click={() => addToast("DangerColor")}
                    id="dangerToastBtn">danger</Button
                >
            </div>
            <div class="toast-container position-fixed top-0 end-0 p-3">
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-primary-transparent"
                    delay={3000}
                    aria-atomic="true"
                    isOpen={toasts["PrimaryColor"] || false}
                    autohide={true}
                    fade
                >
                    <div class="toast-header bg-primary text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("PrimaryColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="secondaryToast"
                    color="secondary"
                    class="colored-toast bg-secondary-transparent"
                    delay={3000}
                    aria-atomic="true"
                    isOpen={toasts["SecondaryColor"] || false}
                    autohide={true}
                    fade
                >
                    <div class=" toast-header bg-secondary text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("SecondaryColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-warning-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["WarningColor"]|| false}
                    fade
                >
                    <div class="toast-header bg-warning text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("WarningColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-info-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["InfoColor"] || false}
                    fade
                >
                    <div class="toast-header bg-info text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("InfoColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-success-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["SuccessColor"] || false}
                    fade
                >
                    <div class="toast-header bg-success text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("SuccessColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-danger-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["DangerColor"] || false}
                    fade
                >
                    <div class="toast-header bg-danger text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Vyzor</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("DangerColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
         <ShowCode title="Solid Background Toasts" svelteCode={toast7}>
            <div class="btn-list">
                <button
                    type="button"
                    class="btn btn-primary me-2 btn-wave"
                    on:click={() => addToast('solidPrimary')}
                    id="solidprimaryToastBtn">Primary</button
                >
                <button
                    type="button"
                    class="btn btn-secondary me-2 btn-wave"
                    on:click={() => addToast('solidSecondary')}
                    id="solidsecondaryToastBtn">secondary</button
                >
                <button
                    type="button"
                    class="btn btn-warning me-2 btn-wave"
                    on:click={() => addToast('solidWarning')}
                    id="solidwarningToastBtn">warning</button
                >
                <button
                    type="button"
                    class="btn btn-info me-2 btn-wave"
                    on:click={() => addToast('solidInfo')}
                    id="solidinfoToastBtn">info</button
                >
                <button
                    type="button"
                    class="btn btn-success me-2 btn-wave"
                    on:click={() => addToast('solidSuccess')}
                    id="solidsuccessToastBtn">success</button
                >
                <button
                    type="button"
                    class="btn btn-danger me-2 btn-wave"
                    on:click={() => addToast('solidDanger')}
                    id="soliddangerToastBtn">danger</button
                >
            </div>
            <div class="toast-container position-fixed top-0 end-0 p-3">
                    <Toast
                        autohide
                        id="solid-primaryToast"
                        class="toast colored-toast bg-primary text-fixed-white"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        delay={3000}
                        isOpen={toasts['solidPrimary'] || false}
                        fade
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('solidPrimary')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                    <Toast
                        autohide
                        id="solid-secondaryToast"
                        class="toast colored-toast bg-secondary text-fixed-white"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['solidSecondary'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-secondary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('solidSecondary')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                    <Toast
                        autohide
                        id="solid-warningToast"
                        class="toast colored-toast bg-warning text-fixed-white"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['solidWarning'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-warning text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('solidWarning')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                    <Toast
                        autohide
                        id="solid-infoToast"
                        class="toast colored-toast bg-info text-fixed-white"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['solidInfo'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-info text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('solidInfo')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                    <Toast
                        id="solid-successToast"
                        class="toast colored-toast bg-success text-fixed-white"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['solidSuccess'] || false}
                        fade
                        autohide
                        delay={3000}
                    >
                        <div class="toast-header bg-success text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('solidSuccess')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                    <Toast
                        autohide
                        id="solid-dangerToast"
                        class="toast colored-toast bg-danger text-fixed-white"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['solidDanger'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-danger text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('solidDanger')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Toast Placements" svelteCode={toast7}>
            <div class="btn-list">
                <button
                    type="button"
                    on:click={() => addToast('topLeft')}
                    class="btn btn-outline-primary me-2 btn-wave"
                    id="topleftToastBtn">Top Left</button
                >
                <button
                    type="button"
                    on:click={() => addToast('topCenter')}
                    class="btn btn-outline-primary me-2 btn-wave"
                    id="topcenterToastBtn">Top Center</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('topRight')}
                    id="toprightToastBtn">Top Right</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('middleLeft')}
                    id="middleleftToastBtn">Middle Left</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('middleCenter')}
                    id="middlecenterToastBtn">Middle Center</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('middleRight')}
                    id="middlerightToastBtn">Middle Right</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('bottomLeft')}
                    id="bottomleftToastBtn">Bottom Left</button
                >
                <button
                    type="button"
                    on:click={() => addToast('bottomCenter')}
                    class="btn btn-outline-primary me-2 btn-wave"
                    id="bottomcenterToastBtn">Bottom Center</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('bottomRight')}
                    id="bottomrightToastBtn">Bottom Right</button
                >
            </div>
            <div class="toast-container position-fixed top-0 start-0 p-3">
                    <Toast
                        autohide
                        id="topleft-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['topLeft'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('topLeft')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
            </div>
            <div
                class="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
            >
                    <Toast
                        autohide
                        id="topcenter-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['topCenter'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('topCenter')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
            </div>
                <div class="toast-container position-fixed top-0 end-0 p-3">
                    <Toast
                        autohide
                        id="topright-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['topRight'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('topRight')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed top-50 start-0 translate-middle-y p-3"
                >
                    <Toast
                        autohide
                        id="middleleft-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['middleLeft'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('middleLeft')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed top-50 start-50 translate-middle"
                >
                    <Toast
                        autohide
                        id="middlecenter-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['middleCenter'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('middleCenter')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed top-50 end-0 translate-middle-y p-3"
                >
                    <Toast
                        autohide
                        id="middleright-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['middleRight'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('middleRight')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed bottom-0 start-0 p-3"
                >
                    <Toast
                        autohide
                        id="bottomleft-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['bottomLeft'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('bottomLeft')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3"
                >
                    <Toast
                        autohide
                        id="bottomcenter-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['bottomCenter'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('bottomCenter')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <Toast
                        autohide
                        id="bottomright-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['bottomRight'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('bottomRight')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <div class="col-xl-6">
        <ShowCode title="Aligning Toast Using Flexbox" svelteCode={toast7}>
            <div class="bd-example bg-light bd-example-toasts d-flex p-0">
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    class="d-flex justify-content-center align-items-center w-100"
                >
                    <Toast
                        class="toast  shadow-lg"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts["AligningToast"]}
                        fade
                    >
                        <div class="toast-header text-default">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../../images/brand-logos/favicon.ico"
                                alt="..."
                            />
                            <strong class="me-auto">Vyzor</strong>
                            <small>11 mins ago</small>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts("AligningToast")}
                            ></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </Toast>
                </div>
            </div>
        </ShowCode>
    </div>
</Row>
<!-- End:: row-4 -->
