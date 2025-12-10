
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
    import { Treebasicoptions, Treecoloroptions, Treedisoptions, Treemultioptions } from "$lib/data/charts/apexcharts/treemapdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>TreemapChart | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Apex Treemap Charts"
    activepage="Charts"
    subTitle="Apex Charts"
    page="Apex Treemap Charts"
/>
<!-- Page Header Close -->

 <!-- Start::row-1 --> 

            <Row>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Basic Treemap Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="treemap-basic">
                                <Spkapexcharts options={Treebasicoptions} id="treemap-basic" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Multi Dimensional Treemap Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="treemap-multi">
                                <Spkapexcharts options={Treemultioptions} id="treemap-multi" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Distributed Treemap Chart</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="treemap-distributed">
                                <Spkapexcharts options={Treedisoptions}  id="treemap-distributed" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <CardTitle>Treemap with color ranges</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div id="treemap-colorranges">
                                <Spkapexcharts options={Treecoloroptions} id="treemap-colorranges"  />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!--End::row-1 --> 

    