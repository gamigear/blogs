
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import SpkListcard from "@/shared/@spk/application-reusable/spk-listcard.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        ProductCards,
    } from "@/shared/data/dashboards/ecommerce/productsdata";
    import EcommerceProductsGrid from "@/view/ecommercesGrid/ecommerceProductsGrid.svelte";
    import {
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Products | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Products"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Products"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row class="row-cols-xxl-5 row-cols-md-3 row-cols-1">
    {#each ProductCards as idx}
        <div class="col">
            <SpkListcard
                listCard={true}
                cardClass={`dashboard-main-card ${idx.priceColor}`}
                list={idx}
            />
        </div>
    {/each}
</Row>

<!--End::row-1 -->

<!-- Start::row-2 -->

<EcommerceProductsGrid />

<!-- End::row-2 -->
