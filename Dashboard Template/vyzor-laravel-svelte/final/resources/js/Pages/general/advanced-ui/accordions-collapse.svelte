<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import SpkAccordions from "@/shared/@spk/advanced-ui/SpkAccordions.svelte";
    import { Row, Col, Collapse } from "@sveltestrap/sveltestrap";
    import {
        Basicdata,
        Customdata,
        Flushdata,
    } from "@/shared/data/adavanec-ui/accordionsdata";
    import {
        accordion1,
        accordion3,
        accordion4,
        accordion5,
        accordion6,
        accordion7,
        accordion16,
        accordion8,
        accordion9,
        accordion2,
        accordion10,
        accordion11,
        accordion12,
        accordion13,
        accordion14,
        accordion15,
        dataaccordion1,
    } from "@/shared/data/prism-code/advanceuiprism";

    let isOpen1 = false;
    let isOpen2 = false;

    // Function to toggle both collapses
    function toggleBoth() {
        // If both collapses are open, close them, otherwise open them
        isOpen1 = !isOpen1;
        isOpen2 = !isOpen2;
    }

    // Function to toggle the first collapse individually
    function toggleFirst() {
        isOpen1 = !isOpen1;
    }

    // Function to toggle the second collapse individually
    function toggleSecond() {
        isOpen2 = !isOpen2;
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>AccordionsCollapse | Vyzor - Svelte Admin & Dashboard Template</title
    >
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Accordions" activepage="Advanced Ui" page="Accordions" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Basic Accordion"
            svelteCode={accordion1}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions {card} Id="accordionExample" />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Always Open Accordion <p class='text-muted subtitle fs-12 fw-normal mt-2'>Omit the <code>data-bs-parent</code>
                            attribute on each
                            <code>.accordion-collapse</code>
                            to make accordion items stay open when another item is opened.
                        </p>"
            svelteCode={accordion2}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    {card}
                    stayOpen={true}
                    Id="accordionPanelsStayOpenExample"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Flush Accordion <p class='subtitle text-muted fs-12 fw-normal'>
                            Add <code>.accordion-flush</code> to remove the default
                            <code>background-color</code>,
                            some borders, and some rounded corners to render accordions edge-to-edge with
                            their
                            parent container.
                        </p>"
            svelteCode={accordion3}
            dataCode={dataaccordion1}
            customCardBodyClass="p-0"
        >
            {#each Flushdata as card}
                <SpkAccordions Flush={true} {card} Id="accordionFlushExample" />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<h6 class="mb-3">Light Colors:</h6>
<Row>
    <Col xl={12}>
        <ShowCode
            title=" Primary"
            svelteCode={accordion4}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-primary"
                    {card}
                    Id="accordionPrimaryExample"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="  Secondary"
            svelteCode={accordion5}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-secondary"
                    {card}
                    Id="accordionSecondaryExample"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<h6 class="mb-3">Solid Colors:</h6>
<Row>
    <Col xl={12}>
        <ShowCode
            title=" Primary"
            svelteCode={accordion6}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-solid-primary"
                    {card}
                    Id="accordionPrimarySolidExample"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Secondary"
            svelteCode={accordion7}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-solid-secondary"
                    {card}
                    Id="accordionSecondarySolidExample"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<h6 class="mb-3">Colored Borders:</h6>
<Row>
    <Col xl={12}>
        <ShowCode
            title=" Primary"
            svelteCode={accordion8}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-border-primary accordions-items-seperate"
                    {card}
                    Id="accordionprimaryborderExample"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Success"
            svelteCode={accordion9}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-border-success accordions-items-seperate"
                    {card}
                    Id="accordionsuccessborderExample"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
    <Col xl={12}>
        <ShowCode title=" Example" svelteCode={accordion14}>
            <p class="mb-0">
                <a
                    class="btn btn-primary collapsed mb-2"
                    data-bs-toggle="collapse"
                    id="collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    Link with href
                </a>
                <button
                    class="btn btn-secondary collapsed mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    id="collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    Button with data-bs-target
                </button>
            </p>
            <Collapse class="collapse" toggler="#collapseExample" isOpen>
                <div class="card card-body mb-0">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                </div>
            </Collapse>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Targets Collapse" svelteCode={accordion15}>
            <p class="mb-0">
                <a
                    class="btn btn-primary mb-2"
                    data-bs-toggle="collapse"
                    on:click={toggleFirst}
                    href="#!"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                    >Toggle first element</a
                >
                <button
                    class="btn btn-success mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#multiCollapseExample2"
                    on:click={toggleSecond}
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                    >Toggle second element</button
                >
                <button
                    class="btn btn-danger mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".multi-collapse"
                    aria-expanded="false"
                    on:click={toggleBoth}
                    aria-controls="multiCollapseExample1 multiCollapseExample2"
                    >Toggle both elements</button
                >
            </p>
            <Row>
                <div class="col m-1">
                    <Collapse isOpen={isOpen1} class="multi-collapse">
                        <div class="card card-body mb-0">
                            Some placeholder content for the first collapse
                            component of this multi-collapse example. This panel
                            is hidden by default but revealed when the user
                            activates the relevant trigger.
                        </div>
                    </Collapse>
                </div>
                <div class="col m-1">
                    <Collapse isOpen={isOpen2} class="multi-collapse">
                        <div class="card card-body mb-0">
                            Some placeholder content for the second collapse
                            component of this multi-collapse example. This panel
                            is hidden by default but revealed when the user
                            activates the relevant trigger.
                        </div>
                    </Collapse>
                </div>
            </Row>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Custom Icon Accordion"
            svelteCode={accordion12}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordion-customicon1 accordions-items-seperate"
                    {card}
                    Id="accordioncustomicon1Example"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="  Custom Accordion" svelteCode={accordion13}>
            {#each Customdata as card}
                <SpkAccordions
                    CustomClass="customized-accordion accordions-items-seperate"
                    {card}
                    Id="customizedAccordion"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-7 -->

<!-- Start:: row-9 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Left Aligned Icons"
            svelteCode={accordion10}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordionicon-left accordions-items-seperate"
                    {card}
                    Id="accordioniconLeftExample"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Without Icon"
            svelteCode={accordion11}
            dataCode={dataaccordion1}
        >
            {#each Basicdata as card}
                <SpkAccordions
                    CustomClass="accordionicon-none accordions-items-seperate"
                    {card}
                    Id="accordioniconnoIconExample"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-9 -->

<!-- Start:: row-10 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Horizontal Collapse" svelteCode={accordion16}>
            <p>
                <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    id="collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                >
                    Toggle width collapse
                </button>
            </p>
            <div style="min-height: 120px;">
                <Collapse
                    class="collapse-horizontal"
                    toggler="#collapseWidthExample"
                    id="collapseWidthExample"
                    horizontal={true}
                >
                    <div class="card card-body" style="width: 230px;">
                        This is some placeholder content for a horizontal
                        collapse. It's hidden by default and shown when
                        triggered.
                    </div>
                </Collapse>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-10 -->
