<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import * as timelinedata from "@/shared/data/charts/apexcharts/timelinechartsdata";
    import {
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>TimelineChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Timeline Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Timeline Charts"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Basic Timeline Chart</div>
            </CardHeader>
            <CardBody>
                <div id="timeline-basic">
                    <Spkapexcharts
                        options={timelinedata.Timelineoptions}
                        id="timeline-basic"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Multiple Colored Timeline Chart</div>
            </CardHeader>
            <CardBody>
                <div id="timeline-colors">
                    <Spkapexcharts
                        options={timelinedata.Timecoloroptions}
                        id="timeline-colors"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Multi Series Timeline Chart</div>
            </CardHeader>
            <CardBody>
                <div id="timeline-multi">
                    <Spkapexcharts
                        options={timelinedata.Timemultioptions}
                        id="timeline-multi"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Advanced Timeline Chart</div>
            </CardHeader>
            <CardBody>
                <div id="timeline-advanced">
                    <Spkapexcharts
                        options={timelinedata.Timeadvanceoptions}
                        id="timeline-advanced"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Timeline-Grouped Rows</div>
            </CardHeader>
            <CardBody>
                <div id="timeline-grouped">
                    <Spkapexcharts
                        options={timelinedata.Timegroupoptions}
                        id="timeline-grouped"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Dumbbell Chart</div>
            </CardHeader>
            <CardBody>
                <div id="dumbbell-chart">
                    <Spkapexcharts
                        options={timelinedata.Timedumbeloptions}
                        id="dumbbell-chart"
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
