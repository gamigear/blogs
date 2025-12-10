<script lang="ts" setup>
import * as productsData from '../../../data/dashboards/ecommerce/productsdata';
import 'sweetalert2/dist/sweetalert2.min.css'

// Page metadata
const dataToPass = {
    activepage: 'Products',
    title: 'Dashboards',
    subtitle: 'Ecommerce',
    currentpage: 'Products',
}


</script>


<template>
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row row-cols-xxl-5 row-cols-md-2 row-cols-1">
        <div className="col" v-for='(idx,index) in productsData.productCards' :key='index'>
            <SpkReusebleJobs :listCard="true" :cardClass="`dashboard-main-card card ${idx.priceColor}`" :list="idx" :NoCountUp="true" />
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <SpkProductsGridtable />
        </div>
    </div>
    <!-- End::row-2 -->
</template>

<style scoped>

</style>
