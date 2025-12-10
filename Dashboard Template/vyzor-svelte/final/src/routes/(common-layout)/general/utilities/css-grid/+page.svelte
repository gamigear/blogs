<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
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
    <title>CssGrid | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Css Grid" activepage="Utilities" page="Css Grid" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={6}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">starts</div>
                    </CardHeader>
                    <CardBody class="bd-example-cssgrid text-center">
                        <div class="grid">
                            <div class="g-col-3 g-start-2">
                                .g-col-3 .g-start-2
                            </div>
                            <div class="g-col-4 g-start-6">
                                .g-col-4 .g-start-6
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Responsive</div>
                    </CardHeader>
                    <CardBody
                        class="bd-example-cssgrid text-center overflow-x-auto"
                    >
                        <div class="grid mb-3 grid-autocol-responsive">
                            <div class="g-col-md-4">.g-col-md-4</div>
                            <div class="g-col-md-4">.g-col-md-4</div>
                            <div class="g-col-md-4">.g-col-md-4</div>
                        </div>
                        <p>
                            Compare that to this two column layout at all
                            viewports.
                        </p>
                        <div class="grid grid-autocol-responsive">
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Auto columns</div>
                    </CardHeader>
                    <CardBody class="bd-example-cssgrid text-center nesting-grid-reponsive">
                        <p>
                            When there are no classes on the grid items (the
                            immediate children of a
                            <span class="text-danger">.grid</span>), each grid
                            item will automatically be sized to one column.
                        </p>
                        <div
                            class="grid mb-3 text-center grid-autocol-responsive overflow-x-auto"
                        >
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                        </div>
                        <p>
                            This behavior can be mixed with grid column classes.
                        </p>
                        <div
                            class="grid text-center grid-col-mixed-responsive overflow-x-auto"
                        >
                            <div class="g-col-6">.g-col-6</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Columns and gaps</div>
                    </CardHeader>
                    <CardBody
                        class="bd-example-cssgrid text-center overflow-x-auto"
                    >
                        <div
                            class="grid mb-3"
                            style="--bs-columns: 4; --bs-gap: 5rem;"
                        >
                            <div class="g-col-2">.g-col-2</div>
                            <div class="g-col-2">.g-col-2</div>
                        </div>
                        <div
                            class="grid"
                            style="--bs-columns: 10; --bs-gap: 1rem;"
                        >
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-4">.g-col-4</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Gaps</div>
                    </CardHeader>
                    <CardBody
                        class="bd-example-cssgrid text-center overflow-x-auto"
                    >
                        <p>
                            Change the vertical gaps only by modifying the <span
                                class="text-danger">rowGap</span
                            >. Note that we use gap on
                            <span class="text-danger">.grid</span>s, but rowGap
                            and <span class="text-danger">column-gap</span> can be
                            modified as needed.
                        </p>
                        <div
                            class="grid mb-3 grid-autocol-responsive"
                            style="row-gap: 0;"
                        >
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>

                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                        </div>
                        <p>
                            Because of that, you can have different vertical and
                            horizontal gaps, which can take a single value (all
                            sides) or a pair of values (vertical and
                            horizontal). This can be applied with an inline
                            style for <span class="text-danger">gap</span>, or
                            with our <span class="text-danger">--bs-gap</span> CSS
                            variable.
                        </p>
                        <div class="grid" style="--bs-gap:.25rem 1rem;">
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>

                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={6}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Three columns</div>
                    </CardHeader>
                    <CardBody class="bd-example-cssgrid text-center">
                        <div class="grid gap-3">
                            <div class="g-col-4">.g-col-4</div>
                            <div class="g-col-4">.g-col-4</div>
                            <div class="g-col-4">.g-col-4</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Wrapping</div>
                    </CardHeader>
                    <CardBody
                        class="bd-example-cssgrid text-center overflow-x-auto"
                    >
                        <div class="grid grid-autocol-responsive">
                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>

                            <div class="g-col-6">.g-col-6</div>
                            <div class="g-col-6">.g-col-6</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Nesting</div>
                    </CardHeader>
                    <CardBody
                        class="bd-example-cssgrid text-center nesting-grid-reponsive overflow-x-auto"
                    >
                        <div class="grid" style="--bs-columns: 3;">
                            <div>
                                First auto-column
                                <div class="grid">
                                    <div>Auto-column</div>
                                    <div>Auto-column</div>
                                </div>
                            </div>
                            <div>
                                Second auto-column
                                <div
                                    class="grid px-1"
                                    style="--bs-columns: 12;"
                                >
                                    <div class="g-col-6">6 of 12</div>
                                    <div class="g-col-4">4 of 12</div>
                                    <div class="g-col-2">2 of 12</div>
                                </div>
                            </div>
                            <div>Third auto-column</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">No grid classes</div>
                    </CardHeader>
                    <CardBody class="bd-example-cssgrid text-center">
                        <div class="grid" style="--bs-columns: 3;">
                            <div>Auto-column</div>
                            <div>Auto-column</div>
                            <div>Auto-column</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Adding rows</div>
                    </CardHeader>
                    <CardBody class="bd-example-cssgrid text-center">
                        <div
                            class="grid"
                            style="--bs-rows: 3; --bs-columns: 3;"
                        >
                            <div>Auto-column</div>
                            <div class="g-start-2" style="grid-row: 2">
                                Auto-column
                            </div>
                            <div class="g-start-3" style="grid-row: 3">
                                Auto-column
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Customizing</div>
                    </CardHeader>
                    <CardBody class="">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Variable</th>
                                        <th>Fallback value</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>--bs-rows</code></td>
                                        <td><code>1</code></td>
                                        <td
                                            >The number of rows in your grid
                                            template</td
                                        >
                                    </tr>
                                    <tr>
                                        <td><code>--bs-columns</code></td>
                                        <td><code>12</code></td>
                                        <td
                                            >The number of columns in your grid
                                            template</td
                                        >
                                    </tr>
                                    <tr>
                                        <td><code>--bs-gap</code></td>
                                        <td><code>1.5rem</code></td>
                                        <td
                                            >The size of the gap between columns
                                            (vertical and horizontal)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->
