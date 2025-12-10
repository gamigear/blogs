<script setup>
import { ref, computed } from 'vue';
import * as ordersData from '../../../data/dashboards/ecommerce/ordersdata';
import VueMultiselect from 'vue-multiselect';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'


const dataToPass = {
  activepage: 'Orders',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Orders',
};


</script>


<template>
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-2 row-cols-1">
    <div className="col" v-for='(idx) in ordersData.ordersCard' :key='idx.id'>
      <SpkReusebleJobs :list="idx" :listCard="true" :cardClass="`dashboard-main-card card ${idx.priceColor}`"
        :NoCountUp="true" />
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xl-12">
       <SpkOrdersGridtable />
    </div>
  </div>
  <!-- End::row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
