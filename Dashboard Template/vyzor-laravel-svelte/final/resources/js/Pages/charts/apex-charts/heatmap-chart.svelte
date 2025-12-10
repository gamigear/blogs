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
        Heatboptions,
        Heatmultioptions,
        Heatrangeoptions,
        Heatshadeoptions,
    } from "@/shared/data/charts/apexcharts/heatmapadata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>HeatmapChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader
    homepage="Apex Heatmap Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Heatmap Charts"
/>
<!-- Page Header Close -->
<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Basic Heatmap Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="heatmap-basic">
                    <Spkapexcharts id="heatmap-basic" options={Heatboptions} />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Multi Series Heatmap Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="heatmap-multiseries">
                    <Spkapexcharts
                        id="heatmap-multiseries"
                        options={Heatmultioptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Color Range Heatmap Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="heatmap-colorrange">
                    <Spkapexcharts
                        id="heatmap-colorrange"
                        options={Heatrangeoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Heatmap Range Without Shades</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="heatmap-range">
                    <Spkapexcharts
                        id="heatmap-range"
                        options={Heatshadeoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
