<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import {
        Mixedareaoptions,
        Mixedaxisoptions,
        Mixedcolumnoptions,
        Mixedlineoptions,
    } from "$lib/data/charts/apexcharts/mixedchartsdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>MixedChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Mixed Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Mixed Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Line & Column Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="mixed-linecolumn">
                    <Spkapexcharts
                        id="mixed-linecolumn"
                        options={Mixedlineoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Multiple Y-Axis Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="mixed-multiple-y">
                    <Spkapexcharts
                        id="mixed-multiple-y"
                        options={Mixedaxisoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Line & Area Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="mixed-linearea">
                    <Spkapexcharts
                        id="mixed-linearea"
                        options={Mixedareaoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Line,Column & Area Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="mixed-all">
                    <Spkapexcharts
                        id="mixed-all"
                        options={Mixedcolumnoptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
