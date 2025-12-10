
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>

<script>
    import SpkListcard from "@/shared/@spk/application-reusable/spk-listcard.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import { DeliveryStatus, OrdersCard, PaymenntStatus } from "@/shared/data/dashboards/ecommerce/ordersdata";
    import { ecommerceDropdown1 } from "@/shared/data/uielements/dropdowndata";
    import OrdersGrid from "@/view/ecommercesGrid/ordersGrid.svelte";
    import { Card, CardBody, CardHeader, Col, Input, Row } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Orders | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Orders"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Orders"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row class="row-cols-xxl-5">
    {#each OrdersCard as idx}
        <div class="col">
            <SpkListcard
                list={idx}
                listCard={true}
                cardClass={`dashboard-main-card orders-main-cards ${idx.priceColor}`}
            />
        </div>
    {/each}
</Row>

<!--End::row-1 -->

  <!-- Start::row-2 --> 

            <Row>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardHeader class="justify-content-between border-bottom-0">

                             <!-- Search Bar --> 

                            <div class="w-sm-25">
                                <Input class="" type="search" id="search-input" placeholder="Search Product" aria-label="search-product" />
                            </div>

                             <!-- Filters Section --> 

                            <div class="d-flex gap-3 flex-wrap w-sm-50 align-items-center justify-content-end custom-search1 mt-3 mt-sm-0">

                                 <!-- Category Filter --> 

                                <div>
                                   <SpkDropdown
                            option={ecommerceDropdown1}
                            ToggleClass="btn btn-primary-light"
                            CustomClass="d-grid"
                            Caret={true}
                            parent={`<i class="ri-upload-2-line me-1"></i>Export`}
                        />
                                </div>

                                 <!-- Status Filter --> 

                                <div class="custom-list-select custom-list-select1">
                                    <Select 
                                    items={PaymenntStatus}
                                    placeholder="Payment Status"
                                    clearable={false}
                                    showChevron={true}
                                    />
                                    <!-- <SpkSelect option={PaymenntStatus} placeholder="Payment Status" classprefix="Select2" /> -->
                                </div>

                                 <!-- Stock Filter --> 

                                <div class="custom-list-select custom-list-select1">
                                    <Select 
                                    items={DeliveryStatus}
                                    placeholder="Payment Status"
                                    clearable={false}
                                    showChevron={true}
                                    />
                                    <!-- <SpkSelect option={DeliveryStatus} placeholder="Delivery Status" classprefix="Select2" /> -->

                                </div>
                            </div>
                        </CardHeader>

                         <!-- Table inside the card-body --> 

                        <CardBody class="p-0">
                            <div id="orders-table" class="grid-card-table">
                                <!-- <OrderTable /> -->
                                 <OrdersGrid />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!-- End::row-2 --> 
