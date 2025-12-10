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
        CardTitle,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import {
        Basicpieoptions,
        Donutoptions,
        Piechartoptions,
        Piegardientoptions,
        Pieimgoptions,
        Piemonooptions,
        Updatedoptions,
    } from "@/shared/data/charts/apexcharts/piechartdata";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";

    let Updatedseries = Updatedoptions.series;
    let series = [...Updatedseries];

    // Append a random value
    function appendData() {
        series = [...series, Math.floor(Math.random() * 100) + 1];
    }

    // Remove the last value
    function removeData() {
        if (series.length > 1) {
            series = series.slice(0, -1);
        }
    }

    // Randomize all values
    function randomize() {
        series = series.map(() => Math.floor(Math.random() * 100) + 1);
    }

    // Reset to initial state
    function reset() {
        series = [...Updatedseries];
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>PieChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Pie Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Pie Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Basic Pie Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="pie-basic">
                    <Spkapexcharts id="pie-basic" options={Basicpieoptions} />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Simple Donut Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="donut-simple">
                    <Spkapexcharts id="donut-simple" options={Donutoptions} />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Updating Donut Chart</CardTitle>
            </CardHeader>
            <div class="card-body mx-auto">
                <div id="donut-update">
                    <Spkapexcharts options={Updatedoptions} id="donut-update" />
                    <div class="text-center mt-4">
                        <SpkButton
                            size="sm"
                            color="primary"
                            customClass="m-1"
                            onclickfunc={appendData}
                        >
                            + ADD
                        </SpkButton>
                        &nbsp;
                        <SpkButton
                            size="sm"
                            color="primary"
                            customClass="m-1"
                            onclickfunc={removeData}
                        >
                            - REMOVE
                        </SpkButton>
                        &nbsp;
                        <SpkButton
                            size="sm"
                            color="primary"
                            customClass="m-1"
                            onclickfunc={randomize}
                        >
                            RANDOMIZE
                        </SpkButton>
                        &nbsp;
                        <SpkButton
                            size="sm"
                            color="primary"
                            customClass="m-1"
                            onclickfunc={reset}
                        >
                            RESET
                        </SpkButton>
                    </div>
                </div>
            </div>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Monochrome Pie Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="pie-monochrome">
                    <Spkapexcharts
                        id="pie-monochrome"
                        options={Piemonooptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Gradient Donut Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="donut-gradient">
                    <Spkapexcharts
                        options={Piegardientoptions}
                        id="donut-gradient"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Donut Chart With Patterns</CardTitle>
            </CardHeader>
            <div class="card-body">
                <div id="donut-pattern">
                    <Spkapexcharts
                        options={Piechartoptions}
                        id="donut-pattern"
                    />
                </div>
            </div>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Image Filled Pie Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="pie-image">
                    <Spkapexcharts options={Pieimgoptions} id="pie-image" />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
