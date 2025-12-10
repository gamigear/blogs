
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import SpkRibbons from "@/shared/@spk/advanced-ui/spk-ribbons.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Ribbon4,
        Ribbon6,
        Ribbons2,
        Ribbons3,
    } from "@/shared/data/adavanec-ui/ribbonsdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Ribbons | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Ribbons" activepage="Advanced Ui" page="Ribbons" />
<!-- Page Header Close -->

<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">RIBBON STYLE 1</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3">
                    <Col xl={6}>
                        <Card
                            class="custom-card mb-0 ribbon-card shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon"
                                    ribbonColor="primary"
                                    ribbonPosition="ribbon-top-left"
                                >
                                    <span>ribbon</span>
                                </SpkRibbons>
                                <div
                                    class="card-subtitle fw-semibold mb-2 text-end"
                                >
                                    Top Left
                                </div>
                                <span class="d-block"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card
                            class="custom-card mb-0 ribbon-card shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon"
                                    ribbonColor="secondary"
                                    ribbonPosition="ribbon-top-right"
                                >
                                    <span>ribbon</span>
                                </SpkRibbons>
                                <div
                                    class="card-subtitle fw-semibold mb-2 text-start"
                                >
                                    Top Right
                                </div>
                                <span class="d-block"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card
                            class="custom-card mb-0 ribbon-card shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon"
                                    ribbonColor="success"
                                    ribbonPosition="ribbon-bottom-left"
                                >
                                    <span>ribbon</span>
                                </SpkRibbons>
                                <span class="d-block"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                                <div
                                    class="card-subtitle fw-semibold mt-2 text-end"
                                >
                                    Bottom Left
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card
                            class="custom-card mb-0 ribbon-card shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon"
                                    ribbonColor="orange"
                                    ribbonPosition="ribbon-bottom-right"
                                >
                                    <span>ribbon</span>
                                </SpkRibbons>
                                <span class="d-block"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                                <div
                                    class="card-subtitle fw-semibold mt-2 text-start"
                                >
                                    Bottom Right
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">RIBBON STYLE 2</div>
            </CardHeader>
            <CardBody class="p-4">
                <Row class="gy-3">
                    {#each Ribbons2 as idx}
                        <Col xl={6}>
                            <Card class="custom-card mb-0 shadow-none border">
                                <CardBody class="p-4">
                                    <SpkRibbons
                                        ribbonClass="ribbon-2"
                                        ribbonColor={idx.color}
                                        ribbonPosition={`ribbon-${idx.position}`}
                                    >
                                        <span>Congratulations</span>
                                    </SpkRibbons>
                                    <span class="d-block pt-4"
                                        >Join us in congratulating [Employee
                                        Name] for their outstanding
                                        contributions and dedication. Their hard
                                        work and commitment have truly set a
                                        standard for excellence. Let's celebrate
                                        their achievements together!</span
                                    >
                                    <div
                                        class={`card-subtitle fw-semibold mt-2 text-${idx.class}`}
                                    >
                                        {idx.title} Ribbon
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">RIBBON STYLE 3</div>
            </CardHeader>
            <CardBody class="p-4">
                <Row class="gy-3">
                    {#each Ribbons3 as idx}
                        <Col xl={3}>
                            <Card class="custom-card mb-0 shadow-none border">
                                <CardBody class="p-4">
                                    <SpkRibbons
                                        ribbonClass="ribbon-3"
                                        ribbonColor={idx.color}
                                        ribbonPosition={idx.position}
                                    >
                                        <span><i class="fe fe-zap"></i></span>
                                    </SpkRibbons>
                                    <div
                                        class={`card-subtitle fw-semibold mb-2 text-${idx.class}`}
                                    >
                                        {idx.title}
                                    </div>
                                    <span class="d-block"
                                        >Join us in congratulating [Employee
                                        Name] for their outstanding
                                        contributions and dedication. Their hard
                                        work and commitment have truly set a
                                        standard for excellence. Let's celebrate
                                        their achievements together!</span
                                    >
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">RIBBON STYLE 4</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3">
                    {#each Ribbon4 as idx}
                        <Col xl={6}>
                            <Card class="custom-card mb-0 shadow-none border">
                                <CardBody class="p-4">
                                    <SpkRibbons
                                        ribbonClass="ribbon-4"
                                        ribbonColor={idx.color}
                                        ribbonPosition={idx.position}
                                    >
                                        <span>{idx.titleClass}</span>
                                    </SpkRibbons>
                                    <div
                                        class={`card-subtitle fw-semibold mb-2 text-${idx.class}`}
                                    >
                                        {idx.title}
                                    </div>
                                    <span class="d-block"
                                        >Join us in congratulating [Employee
                                        Name] for their outstanding
                                        contributions and dedication. Their hard
                                        work and commitment have truly set a
                                        standard for excellence. Let's celebrate
                                        their achievements together!</span
                                    >
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-4 -->

<!-- Start:: row-5 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">RIBBON STYLE 5</div>
            </CardHeader>
            <CardBody>
                <div class="row gy-3">
                    <div class="col-xl-3">
                        <Card
                            class="custom-card mb-0 overflow-hidden shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon-5 ribbon-primary top-left"
                                    >OFFER</SpkRibbons
                                >
                                <div
                                    class="card-subtitle fw-semibold mb-2 text-end"
                                >
                                    Top Left
                                </div>
                                <span class="d-block"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-xl-3">
                        <Card
                            class="custom-card mb-0 overflow-hidden shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon-5 ribbon-secondary top-right"
                                    >OPEN</SpkRibbons
                                >
                                <div
                                    class="card-subtitle fw-semibold mb-2 text-start"
                                >
                                    Top Right
                                </div>
                                <span class="d-block"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-xl-3">
                        <Card
                            class="custom-card mb-0 overflow-hidden shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon-5 ribbon-success bottom-left"
                                    >CLOSE</SpkRibbons
                                >
                                <span class="d-block mb-2"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                                <div class="card-subtitle fw-semibold text-end">
                                    Bottom Left
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-xl-3">
                        <Card
                            class="custom-card mb-0 overflow-hidden shadow-none border"
                        >
                            <CardBody class="p-4">
                                <SpkRibbons
                                    ribbonClass="ribbon-5 ribbon-orange bottom-right"
                                    >SALE</SpkRibbons
                                >
                                <span class="d-block mb-2"
                                    >Join us in congratulating [Employee Name]
                                    for their outstanding contributions and
                                    dedication. Their hard work and commitment
                                    have truly set a standard for excellence.
                                    Let's celebrate their achievements together!</span
                                >
                                <div
                                    class="card-subtitle fw-semibold text-start"
                                >
                                    Bottom Right
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-5 -->

<!-- Start:: row-6 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">RIBBON STYLE 6</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3">
                    {#each Ribbon6 as idx}
                        <Col xl={6}>
                            <Card class="custom-card mb-0 shadow-none border">
                                <CardBody class="p-4">
                                    <SpkRibbons
                                        ribbonClass={`ribbon-6 ribbon-${idx.position} ribbon-${idx.color}`}
                                        >{idx.titleClass}</SpkRibbons
                                    >
                                    <div
                                        class={`card-subtitle fw-semibold mb-2 text-${idx.class}`}
                                    >
                                        {idx.title}
                                    </div>
                                    <span class="d-block"
                                        >Join us in congratulating [Employee
                                        Name] for their outstanding
                                        contributions and dedication. Their hard
                                        work and commitment have truly set a
                                        standard for excellence. Let's celebrate
                                        their achievements together!</span
                                    >
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-6 -->
