<script setup>
import { ref, computed } from 'vue'
import * as CustomerData from '../../../data/dashboards/ecommerce/customersdata'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const picked = ref(null)
// Metadata
const dataToPass = {
  activepage: 'Customers List',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Customers List',
}

// Filters
const SelectValue = ref('Select')
const Select = ['Select', 'Active', 'Block']


</script>



<template>
    <Pageheader :propData="dataToPass" />

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <SpkCustomersGridtable />
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start:: Add new customer modal -->
    <div class="modal fade" id="addtask" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content mt-5">
                <div class="modal-header">
                    <h6 class="modal-title" id="mail-ComposeLabel">Add Customer</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row gy-2">
                        <div class="col-xl-12">
                            <label for="customer-name" class="form-label">Customer Name</label>
                            <input type="text" class="form-control" id="customer-name" placeholder="Customer Name">
                        </div>
                        <div class="col-xl-12">
                            <label for="customer-email" class="form-label">Customer Email</label>
                            <input type="email" class="form-control" id="customer-email" placeholder="Customer Email">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Joined Date</label>
                            <div class="form-group">
                                <div class="input-group salesDatePicker">
                                    <div class="input-group-text text-muted"><i class="ri-calendar-line"></i> </div>
                                    <Datepicker class="form-control custom-date-picker" autoApply
                                        placeholder="Choose date and time" v-model="picked" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Status</label>
                            <VueMultiselect :searchable="true" :show-labels="false" placeholder="Customer Status"
                                v-model="SelectValue" :options="Select" :taggable="false" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Customer</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Add new customer modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
