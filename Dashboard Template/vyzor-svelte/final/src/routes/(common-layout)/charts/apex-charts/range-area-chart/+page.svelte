<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import {
        Basicrangeoptions,
        Rangecombooptions,
    } from "$lib/data/charts/apexcharts/rangechartdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>RangeAreaChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Range Area Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Range Area Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Basic Range Area Chart</div>
            </CardHeader>
            <CardBody>
                <div id="rangearea-basic">
                    <Spkapexcharts
                        options={Basicrangeoptions}
                        id="rangearea-basic"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Combo Range Area Chart</div>
            </CardHeader>
            <CardBody>
                <div id="rangearea-combo">
                    <Spkapexcharts
                        options={Rangecombooptions}
                        id="rangearea-combo"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
