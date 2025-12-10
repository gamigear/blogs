<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        modal1,
        modal2,
        modal3,
        modal4,
        modal5,
        modal6,
        modal7,
        modal8,
        modal9,
        modal12,
        modal13,
        modal14,
        modal15,
        modal10,
        modal11,
    } from "$lib/components/common/prism-code/advanceuiprism.js";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        Button,
        Col,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

    // Define the modal state as an object
    let modals: any = {};

    // Function to open the modal
    const handleModalOpen = (modalName: any) => {
        modals[modalName] = true;
    };

    // Function to close the modal
    const handleModalClose = (modalName: any) => {
        modals[modalName] = false;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>ModalsCloses | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Pageheader
    homepage="Modal & Closes"
    activepage="Advanced UI"
    page="Modal & Closes"
/>

<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <ShowCode title="Basic Modal" svelteCode={modal1}>
            <button
                type="button"
                on:click={() => handleModalOpen("basicModal")}
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Launch demo modal
            </button>
            <Modal
                isOpen={modals["basicModal"]}
                toggle={() => handleModalClose("basicModal")}
            >
                <ModalHeader toggle={() => handleModalClose("basicModal")}
                    >Modal title</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("basicModal")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Static backdrop" svelteCode={modal2}>
            <button
                type="button"
                class="btn btn-primary"
                on:click={() => handleModalOpen("Staticbackdrop")}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Launch static backdrop modal
            </button>

            <Modal
                backdrop="static"
                isOpen={modals["Staticbackdrop"]}
                toggle={() => handleModalOpen("Staticbackdrop")}
            >
                <ModalHeader toggle={() => handleModalClose("Staticbackdrop")}
                    >Modal title</ModalHeader
                >
                <ModalBody
                    >I will not close if you click outside me. Don't even try to
                    press escape key.</ModalBody
                >
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("Staticbackdrop")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Scrolling long content" svelteCode={modal3}>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                on:click={() => handleModalOpen("ScrollingContent")}
                data-bs-target="#exampleModalScrollable"
            >
                Scrolling long content
            </button>

            <Modal
                scrollable={true}
                isOpen={modals["ScrollingContent"]}
                toggle={() => handleModalClose("ScrollingContent")}
            >
                <ModalHeader toggle={() => handleModalClose("ScrollingContent")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Libero ipsum quasi, error quibusdam debitis
                        maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti
                        quis reiciendis veritatis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea voluptatibus, ipsam quo est rerum modi quos
                        expedita facere, ex tempore fuga similique ipsa
                        blanditiis et accusamus temporibus commodi voluptas!
                        Nobis veniam illo architecto expedita quam ratione
                        quaerat omnis. In, recusandae eos! Pariatur, deleniti
                        quis ad nemo ipsam officia temporibus, doloribus fuga
                        asperiores ratione distinctio velit alias hic modi
                        praesentium aperiam officiis eaque, accusamus aut.
                        Accusantium assumenda, commodi nulla provident
                        asperiores fugit inventore iste amet aut placeat
                        consequatur reprehenderit. Ratione tenetur eligendi,
                        quis aperiam dolores magni iusto distinctio voluptatibus
                        minus a unde at! Consequatur voluptatum in eaque
                        obcaecati, impedit accusantium ea soluta, excepturi,
                        quasi quia commodi blanditiis? Qui blanditiis iusto
                        corrupti necessitatibus dolorem fugiat consequuntur quod
                        quo veniam? Labore dignissimos reiciendis accusamus
                        recusandae est consequuntur iure.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("ScrollingContent")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Vertically centered modal" svelteCode={modal4}>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                on:click={() => handleModalOpen("verticallyCentered")}
                data-bs-target="#exampleModalScrollable2"
            >
                Vertically centered modal
            </button>

            <Modal
                centered
                fade
                isOpen={modals["verticallyCentered"]}
                toggle={() => handleModalClose("verticallyCentered")}
                id="exampleModalScrollable2"
            >
                <ModalHeader
                    toggle={() => handleModalClose("verticallyCentered")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Libero ipsum quasi, error quibusdam debitis
                        maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti
                        quis reiciendis veritatis.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("verticallyCentered")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Vertical Centered Scrollable" svelteCode={modal5}>
            <button
                type="button"
                class="btn btn-primary"
                on:click={() => handleModalOpen("verticalCenteredScrollable")}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalScrollable3"
            >
                Vertically centered scrollable modal
            </button>

            <Modal
                centered
                fade
                isOpen={modals["verticalCenteredScrollable"]}
                toggle={() => handleModalClose("verticalCenteredScrollable")}
                id="exampleModalScrollable2"
            >
                <ModalHeader
                    toggle={() =>
                        handleModalClose("verticalCenteredScrollable")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea voluptatibus, ipsam quo est rerum modi quos
                        expedita facere, ex tempore fuga similique ipsa
                        blanditiis et accusamus temporibus commodi voluptas!
                        Nobis veniam illo architecto expedita quam ratione
                        quaerat omnis. In, recusandae eos! Pariatur, deleniti
                        quis ad nemo ipsam officia temporibus, doloribus fuga
                        asperiores ratione distinctio velit alias hic modi
                        praesentium aperiam officiis eaque, accusamus aut.
                        Accusantium assumenda, commodi nulla provident
                        asperiores fugit inventore iste amet aut placeat
                        consequatur reprehenderit. Ratione tenetur eligendi,
                        quis aperiam dolores magni iusto distinctio voluptatibus
                        minus a unde at! Consequatur voluptatum in eaque
                        obcaecati, impedit accusantium ea soluta, excepturi,
                        quasi quia commodi blanditiis? Qui blanditiis iusto
                        corrupti necessitatibus dolorem fugiat consequuntur quod
                        quo veniam? Labore dignissimos reiciendis accusamus
                        recusandae est consequuntur iure.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() =>
                            handleModalClose("verticalCenteredScrollable")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
       <ShowCode title="Tooltips and popovers" svelteCode={modal6}>
            <button
                type="button"
                class="btn btn-primary"
                on:click={() => handleModalOpen("TooltipsAndPopovers")}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalScrollable4"
            >
                Launch demo modal
            </button>

            <Modal
                centered
                fade
                isOpen={modals["TooltipsAndPopovers"]}
                toggle={() => handleModalClose("TooltipsAndPopovers")}
                id="exampleModalScrollable2"
            >
                <ModalHeader
                    toggle={() => handleModalClose("TooltipsAndPopovers")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    <h5>Popover in a modal</h5>
                    <p>
                        This <SpkButton
                            color="secondary"
                            href="#!"
                            id="btn-pop"
                            text="button"
                        />
                        <SpkPopovers
                            trigger="click"
                            targetId="btn-pop"
                            placement="right"
                            title="Popover title"
                            content={`Popover body content is set in this attribute.`}
                        />
                        triggers a popover on click.
                    </p>
                    <hr />
                    <h5>Tooltips in a modal</h5>
                    <p>
                        <a
                            href="#!"
                            id="This-link"
                            class="text-primary"
                            data-bs-toggle="tooltip"
                            title="Tooltip">This link</a
                        >
                        <SpkTooltips
                            placement="top"
                            targetId="This-link"
                            content="Tooltip"
                        /> and
                        <a
                            href="#!"
                            id="that-link"
                            class="text-primary"
                            data-bs-toggle="tooltip"
                            title="Tooltip">that link</a
                        >
                        <SpkTooltips
                            placement="top"
                            targetId="that-link"
                            content="Tooltip"
                        />have tooltips on hover.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("TooltipsAndPopovers")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Using the grid" svelteCode={modal7}>
            <button
                type="button"
                class="btn btn-primary"
                on:click={() => handleModalOpen("UsingTheGrid")}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalScrollable5"
            >
                Launch demo modal
            </button>
            <Modal
                scrollable
                centered
                fade
                isOpen={modals["UsingTheGrid"]}
                toggle={() => handleModalClose("UsingTheGrid")}
                id="exampleModalScrollable2"
            >
                <ModalHeader toggle={() => handleModalClose("UsingTheGrid")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    <div class="container-fluid">
                        <Row>
                            <div class="col-md-4 bg-light border">
                                .col-md-4
                            </div>
                            <div class="col-md-4 ms-auto bg-light border">
                                .col-md-4 .ms-auto
                            </div>
                        </Row>
                        <div class="row mt-3">
                            <div class="col-md-3 ms-auto bg-light border">
                                .col-md-3 .ms-auto
                            </div>
                            <div class="col-md-2 ms-auto bg-light border">
                                .col-md-2 .ms-auto
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6 ms-auto bg-light border">
                                .col-md-6 .ms-auto
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-sm-9 bg-light border">
                                Level 1: .col-sm-9
                                <Row>
                                    <div class="col-8 col-sm-6 bg-light border">
                                        Level 2: .col-8 .col-sm-6
                                    </div>
                                    <div class="col-4 col-sm-6 bg-light border">
                                        Level 2: .col-4 .col-sm-6
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("UsingTheGrid")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="  Toggle between modals" svelteCode={modal8}>
            <a
                class="btn btn-primary"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                on:click={() => handleModalOpen("ToggleBetweenModals1")}
                role="button"
                >Open first modal
            </a>

            <Modal
                centered
                fade
                isOpen={modals["ToggleBetweenModals1"]}
                toggle={() => handleModalClose("ToggleBetweenModals1")}
                id="exampleModalScrollable2"
            >
                <ModalHeader
                    toggle={() => handleModalClose("ToggleBetweenModals1")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    Show a second modal and hide this one with the button below.
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        on:click={() => handleModalOpen("ToggleBetweenModals2")}
                        >Open second modal</Button
                    >
                </ModalFooter>
            </Modal>
            <Modal
                centered
                fade
                isOpen={modals["ToggleBetweenModals2"]}
                toggle={() => handleModalClose("ToggleBetweenModals2")}
                id="exampleModalScrollable2"
            >
                <ModalHeader
                    toggle={() => handleModalClose("ToggleBetweenModals2")}
                    >Modal title</ModalHeader
                >
                <ModalBody>
                    Show a second modal and hide this one with the button below.
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        on:click={() =>
                            handleModalClose("ToggleBetweenModals2")}
                        >Back to first</Button
                    >
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Optional sizes" svelteCode={modal9}>
            <button
                type="button"
                on:click={() => handleModalOpen("toggleXl")}
                class="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalXl">Extra large modal</button
            >
            <button
                type="button"
                on:click={() => handleModalOpen("toggleLg")}
                class="btn btn-secondary m-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLg">Large modal</button
            >
            <button
                type="button"
                on:click={() => handleModalOpen("toggleSm")}
                class="btn btn-warning m-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalSm">Small modal</button
            >
            <Modal
                isOpen={modals["toggleXl"]}
                toggle={() => handleModalClose("toggleXl")}
                size="xl"
            >
                <ModalHeader toggle={() => handleModalClose("toggleXl")}
                    >Extra large modal</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("toggleXl")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["toggleLg"]}
                toggle={() => handleModalClose("toggleLg")}
                size="lg"
            >
                <ModalHeader toggle={() => handleModalClose("toggleLg")}
                    >Large modal</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("toggleLg")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["toggleSm"]}
                toggle={() => handleModalClose("toggleSm")}
                size="sm"
            >
                <ModalHeader toggle={() => handleModalClose("toggleSm")}
                    >Small modal</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("toggleSm")}
                        >Close</Button
                    >
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={12}>
        <ShowCode title="    Fullscreen modal" svelteCode={modal10}>
            <div class="bd-example">
                <button
                    type="button"
                    on:click={() => handleModalOpen("togglefullscreen")}
                    class="btn btn-primary mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreen">Full screen</button
                >
                <button
                    type="button"
                    on:click={() => handleModalOpen("tog_fullscreen_sm")}
                    class="btn btn-secondary mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenSm"
                    >Full screen below sm</button
                >
                <button
                    type="button"
                    on:click={() => handleModalOpen("tog_fullscreen_md")}
                    class="btn btn-warning mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenMd"
                    >Full screen below md</button
                >
                <button
                    type="button"
                    on:click={() => handleModalOpen("tog_fullscreen_lg")}
                    class="btn btn-info mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenLg"
                    >Full screen below lg</button
                >
                <button
                    type="button"
                    on:click={() => handleModalOpen("tog_fullscreen_xl")}
                    class="btn btn-success mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenXl"
                    >Full screen below xl</button
                >
                <button
                    type="button"
                    on:click={() => handleModalOpen("tog_fullscreen_xxl")}
                    class="btn btn-danger mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenXxl"
                    >Full screen below xxl</button
                >
            </div>
            <Modal
                isOpen={modals["togglefullscreen"]}
                toggle={() => handleModalClose("togglefullscreen")}
                fullscreen
                id="exampleModalFullscreen"
            >
                <ModalHeader toggle={() => handleModalClose("togglefullscreen")}
                    >Full screen modal</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("togglefullscreen")}
                        >Cancel</Button
                    >
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_fullscreen_sm"]}
                toggle={() => handleModalClose("tog_fullscreen_sm")}
                id="exampleModalFullscreenSm"
            >
                <ModalHeader
                    toggle={() => handleModalClose("tog_fullscreen_sm")}
                >
                    Full screen below sm</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_fullscreen_sm")}
                        >Cancel</Button
                    >
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_fullscreen_md"]}
                toggle={() => handleModalClose("tog_fullscreen_md")}
                id="exampleModalFullscreenMd"
            >
                <ModalHeader
                    toggle={() => handleModalClose("tog_fullscreen_md")}
                >
                    Full screen below md</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_fullscreen_md")}
                        >Cancel</Button
                    >
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_fullscreen_lg"]}
                toggle={() => handleModalClose("tog_fullscreen_lg")}
                id="exampleModalFullscreenLg"
            >
                <ModalHeader
                    toggle={() => handleModalClose("tog_fullscreen_lg")}
                >
                    Full screen below lg</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_fullscreen_lg")}
                        >Cancel</Button
                    >
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_fullscreen_xl"]}
                toggle={() => handleModalClose("tog_fullscreen_xl")}
                id="exampleModalFullscreenXl"
            >
                <ModalHeader
                    toggle={() => handleModalClose("tog_fullscreen_xl")}
                >
                    Full screen below xl</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_fullscreen_xl")}
                        >Cancel</Button
                    >
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_fullscreen_xxl"]}
                toggle={() => handleModalClose("tog_fullscreen_xxl")}
                id="exampleModalFullscreenXxl"
            >
                <ModalHeader
                    toggle={() => handleModalClose("tog_fullscreen_xxl")}
                >
                    Full screen below xxl</ModalHeader
                >
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_fullscreen_xxl")}
                        >Cancel</Button
                    >
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xl={12}>
        <ShowCode title=" Varying modal content" svelteCode={modal11}>
            <button
                type="button"
                on:click={() => handleModalOpen("tog_mdo")}
                class="btn btn-primary mb-1"
                data-bs-toggle="modal"
                data-bs-target="#formmodal"
                data-bs-whatever="@mdo">Open modal for @mdo</button
            >
            <button
                type="button"
                on:click={() => handleModalOpen("tog_fat")}
                class="btn btn-secondary mb-1"
                data-bs-toggle="modal"
                data-bs-target="#formmodal"
                data-bs-whatever="@fat">Open modal for @fat</button
            >
            <button
                type="button"
                on:click={() => handleModalOpen("tog_getbootstrap")}
                class="btn btn-light mb-1"
                data-bs-toggle="modal"
                data-bs-target="#formmodal"
                data-bs-whatever="@getbootstrap"
                >Open modal for @getbootstrap</button
            >
            <Modal
                isOpen={modals["tog_mdo"]}
                toggle={() => handleModalClose("tog_mdo")}
                id="formmodal"
            >
                <ModalHeader toggle={() => handleModalClose("tog_mdo")}
                    >New message</ModalHeader
                >
                <ModalBody>
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label"
                                >Recipient:</label
                            >
                            <input
                                type="text"
                                value="@mdo"
                                class="form-control"
                                id="recipient-name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label"
                                >Message:</label
                            >
                            <textarea class="form-control" id="message-text"
                            ></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_mdo")}
                        >Close</Button
                    >
                    <Button type="button" color="primary">Send message</Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_fat"]}
                toggle={() => handleModalClose("tog_fat")}
                id="formmodal"
            >
                <ModalHeader toggle={() => handleModalClose("tog_fat")}
                    >New message</ModalHeader
                >
                <ModalBody>
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label"
                                >Recipient:</label
                            >
                            <input
                                type="text"
                                value="@fat"
                                class="form-control"
                                id="recipient-name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label"
                                >Message:</label
                            >
                            <textarea class="form-control" id="message-text"
                            ></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_fat")}
                        >Close</Button
                    >
                    <Button type="button" color="primary">Send message</Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={modals["tog_getbootstrap"]}
                toggle={() => handleModalClose("tog_getbootstrap")}
                id="formmodal"
            >
                <ModalHeader toggle={() => handleModalClose("tog_getbootstrap")}
                    >New message</ModalHeader
                >
                <ModalBody>
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label"
                                >Recipient:</label
                            >
                            <input
                                type="text"
                                value="@getbootstrap"
                                class="form-control"
                                id="recipient-name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label"
                                >Message:</label
                            >
                            <textarea class="form-control" id="message-text"
                            ></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        on:click={() => handleModalClose("tog_getbootstrap")}
                        >Close</Button
                    >
                    <Button type="button" color="primary">Send message</Button>
                </ModalFooter>
            </Modal>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
    <Col xl={12}>
        <!-- <div class="card custom-card">
            <div class="card-header justify-content-between">
                <div class="card-title">Modal Animation Effects</div>
                <div class="prism-toggle">
                    <button class="btn btn-sm btn-primary-light"
                        >Show Code<i
                            class="ri-code-line ms-2 d-inline-block align-middle"
                        ></i></button
                    >
                </div>
            </div>
            <div class="card-body">
                <Row>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-scale"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Scale</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-slide-in-right"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Slide In Right</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-slide-in-bottom"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Slide In Bottom</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-newspaper"
                            data-bs-toggle="modal"
                            href="#modaldemo8">News paper</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-fall"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Fall</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-flip-horizontal"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Flip Horizontal</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-flip-vertical"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Flip Vertical</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-super-scaled"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Super Scaled</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-sign"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Sign</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-rotate-bottom"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Rotate Bottom</a
                        >
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-3">
                        <a
                            class="modal-effect btn btn-primary d-grid mb-3"
                            data-bs-effect="effect-rotate-left"
                            data-bs-toggle="modal"
                            href="#modaldemo8">Rotate Left</a
                        >
                    </div>
                </Row>
                <div class="modal fade" id="modaldemo8">
                    <div
                        class="modal-dialog modal-dialog-centered text-center"
                        role="document"
                    >
                        <div class="modal-content modal-content-demo">
                            <div class="modal-header">
                                <h6 class="modal-title">Message Preview</h6>
                                <button
                                    aria-label="Close"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                ></button>
                            </div>
                            <div class="modal-body text-start">
                                <h6>
                                    Why We Use Electoral College, Not Popular
                                    Vote
                                </h6>
                                <p class="text-muted mb-0">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content
                                    here', making it look like readable English.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary"
                                    >Save changes</button
                                >
                                <button
                                    class="btn btn-light"
                                    data-bs-dismiss="modal">Close</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-none border-top-0">
                <pre class="language-html"><code class="language-html"
                        >&lt;div class="row "&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale" data-bs-toggle="modal" href="#modaldemo8"&gt;Scale&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right" data-bs-toggle="modal" href="#modaldemo8"&gt;Slide In Right&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo8"&gt;Slide In Bottom&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper" data-bs-toggle="modal" href="#modaldemo8"&gt;Newspaper&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall" data-bs-toggle="modal" href="#modaldemo8"&gt;Fall&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo8"&gt;Flip Horizontal&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical" data-bs-toggle="modal" href="#modaldemo8"&gt;Flip Vertical&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled" data-bs-toggle="modal" href="#modaldemo8"&gt;Super Scaled&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign" data-bs-toggle="modal" href="#modaldemo8"&gt;Sign&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom" data-bs-toggle="modal" href="#modaldemo8"&gt;Rotate Bottom&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-6 col-md-4 col-xl-3"&gt;
        &lt;a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left" data-bs-toggle="modal" href="#modaldemo8"&gt;Rotate Left&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="modal fade"  id="modaldemo8"&gt;
    &lt;div class="modal-dialog modal-dialog-centered text-center" role="document"&gt;
        &lt;div class="modal-content modal-content-demo"&gt;
            &lt;div class="modal-header"&gt;
                &lt;h6 class="modal-title"&gt;Message Preview&lt;/h6&gt;&lt;button aria-label="Close" class="btn-close" data-bs-dismiss="modal"&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class="modal-body text-start"&gt;
                &lt;h6&gt;Why We Use Electoral College, Not Popular Vote&lt;/h6&gt;
                &lt;p class="text-muted mb-0"&gt;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="modal-footer"&gt;
                &lt;button class="btn btn-primary" &gt;Save changes&lt;/button&gt; &lt;button class="btn btn-light" data-bs-dismiss="modal" &gt;Close&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code
                    ></pre>
            </div>
        </div> -->
    </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-6 -->
<h6 class="mb-3">Close Buttons:</h6>
<Row>
    <div class="col-xl-4">
       <ShowCode title="Basic Close" svelteCode={modal13}>
            <button type="button" class="btn-close" aria-label="Close"></button>
        </ShowCode>
    </div>
    <div class="col-xl-4">
        <ShowCode title=" Disabel state" svelteCode={modal14}>
            <button type="button" class="btn-close" disabled aria-label="Close"
            ></button>
        </ShowCode>
    </div>
    <div class="col-xl-4">
         <ShowCode
            title=" White variant"
            customCardClass="overflow-hidden"
            customCardBodyClass="bg-black"
            svelteCode={modal15}
        >
            <button
                type="button"
                class="btn-close btn-close-white"
                aria-label="Close"
            ></button>
            <button
                type="button"
                class="btn-close btn-close-white"
                disabled
                aria-label="Close"
            ></button>
        </ShowCode>
    </div>
</Row>
<!-- End:: row-6 -->
