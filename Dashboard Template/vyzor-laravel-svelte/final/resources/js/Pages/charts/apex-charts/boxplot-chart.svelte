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
        Boxplothoptions,
        Boxplotoptions,
        Boxplotsoptions,
    } from "@/shared/data/charts/apexcharts/boxplotdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>BoxplotChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Boxplot Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Boxplot Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Basic Boxplot Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="boxplot-basic">
                    <Spkapexcharts
                        id="boxplot-basic"
                        options={Boxplotoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Boxplot With Scatter Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="boxplot-scatter">
                    <Spkapexcharts
                        id="boxplot-scatter"
                        options={Boxplotsoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Horizontal Boxplot Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="boxplot-horizontal">
                    <Spkapexcharts
                        id="boxplot-horizontal"
                        options={Boxplothoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
