<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import * as columndata from "@/shared/data/charts/apexcharts/columnchartsdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>ColumnChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Column Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Column Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Basic Column Chart</div>
            </CardHeader>
            <CardBody>
                <div id="column-basic">
                    <Spkapexcharts
                        id="column-basic"
                        options={columndata.Columnbasicoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Column Chart With Datalabels</div>
            </CardHeader>
            <CardBody>
                <div id="column-datalabels">
                    <Spkapexcharts
                        id="column-datalabels"
                        options={columndata.Columnchartoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Stacked Column Chart</div>
            </CardHeader>
            <CardBody>
                <div id="column-stacked">
                    <Spkapexcharts
                        id="column-stacked"
                        options={columndata.Stackcolumnoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">100% Stacked Column Chart</div>
            </CardHeader>
            <CardBody>
                <div id="column-stacked-full">
                    <Spkapexcharts
                        id="column-stacked-full"
                        options={columndata.Columnstack1options}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Column Chart With Markers</div>
            </CardHeader>
            <CardBody>
                <div id="column-markers">
                    <Spkapexcharts
                        id="column-markers"
                        options={columndata.Columnmakeroptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Column Chart With Rotated Labels</div>
            </CardHeader>
            <CardBody>
                <div id="column-rotated-labels">
                    <Spkapexcharts
                        id="column-rotated-labels"
                        options={columndata.Columnrotateoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Column Chart With Negative Values</div>
            </CardHeader>
            <CardBody>
                <div id="column-negative">
                    <Spkapexcharts
                        id="column-negative"
                        options={columndata.Columnvalueoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Range Column Chart</div>
            </CardHeader>
            <CardBody>
                <div id="column-range">
                    <Spkapexcharts
                        id="column-range"
                        options={columndata.Columnoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Distributed Columns Chart</div>
            </CardHeader>
            <CardBody>
                <div id="columns-distributed">
                    <Spkapexcharts
                        id="columns-distributed"
                        options={columndata.Column1options}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
