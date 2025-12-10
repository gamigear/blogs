
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        BasicTable,
        Data1,
        Data2,
        Data3,
        Columns,
    } from "@/shared/data/tables/gridjsdata";
    import Grid from 'gridjs-svelte/gridjs.svelte';
     import { Col ,Row} from "@sveltestrap/sveltestrap";
      import SpkBasicCard from "@/shared/@spk/SpkBasicCard.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>GridjsTables | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Grid Js" activepage="Tables" page="Grid Js" />
<!-- Page Header Close -->
<!-- Start::row-1 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle="  Basic Table">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-example1">
                                    <Grid data={BasicTable} columns={['Date', 'Name', 'Email', 'Id', 'Price', 'Quantity', 'Total']} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!--End::row-1 -->

                <!-- Start:: row-2 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle="Table With Pagination">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-pagination">
                                    <Grid data={BasicTable} columns={['Date',{name: 'Name',width: '200px'},'Email', 'ID',{name: 'Total',width: '160px'}]} sort={true} pagination={{ enabled: true, limit: 5 }} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-2 -->
                
                <!-- Start:: row-3 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle=" Table With Search">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-search">
                                    <Grid
								data={BasicTable} columns={['Date',{name: 'Name',width: '200px'},'Email', 'ID',{name: 'Total',width: '160px'}]}  search={true} pagination={{ enabled: true, limit: 5 }} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-3 -->

                <!-- Start:: row-4 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle=" Table Sorting">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-sorting">
                                    <Grid data={BasicTable} columns={['Date', 'Name', 'Email', 'ID', 'Price']} sort={true} pagination={{ enabled: true, limit: 5 }} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-4 -->

                <!-- Start:: row-5 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle="  Table Loading">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-loading">
                                    <Grid data={Data1} sort={true} search={true} columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']}  pagination={{ enabled: true, limit: 5 }}  />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-5 -->

                <!-- Start:: row-6 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle="  Basic Table">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-wide">
                                    <Grid  data={Data2} sort={true} columns={['Date', 'Name', 'EMail', 'Order Id', 'Product', 'Category', 'Price', 'Quantity', 'Total']} pagination={{  limit: 5,  }}  resizable={true} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-6 -->

                <!-- Start:: row-7 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle=" Fixed Header">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-header-fixed">
                                    <Grid data={Data3} sort={true} search={true} fixedHeader={true} height='350px' columns={['Date', 'Name', 'Email', 'Id', 'Price', 'Quantity', 'Total']} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-7 -->

                <!-- Start:: row-8 -->
                <Row>
                    <Col xl={12}>
                        <SpkBasicCard cardProps="custom-card" headerTitle=" Hidden Columns">
                            <div slot="customheader"></div>
                            <div slot="content">
                                <div id="grid-hidden-column">
                                    <Grid data={BasicTable} sort={true} search={true} columns={Columns} />
                                </div>
                            </div>
                        </SpkBasicCard>
                    </Col>
                </Row>
                <!-- End:: row-8 -->

                <style global>
                    @import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
                </style>