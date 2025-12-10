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
        Areaoptions,
        Monooptions,
    } from "$lib/data/charts/apexcharts/polarareachartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>PolarareaChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Polar Area Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Polar Area Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Basic Polar Area Chart</CardTitle>
            </CardHeader>
            <CardBody>
                <div id="polararea-basic">
                    <Spkapexcharts options={Areaoptions} id="polararea-basic" />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <CardTitle>Polar Area Monochrome Chart</CardTitle>
            </CardHeader>
            <CardBody class="px-0">
                <div id="polararea-monochrome">
                    <Spkapexcharts
                        options={Monooptions}
                        id="polararea-monochrome"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
