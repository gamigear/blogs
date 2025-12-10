import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueApexCharts from "../components/UI/apexcharts.vue";
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import Vue3Tour from 'vue3-tour'
import 'vue3-tour/dist/vue3-tour.css'
import { vMaska } from 'maska/vue';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc.js'
import 'jsvectormap/dist/maps/world.js'
import 'jsvectormap/dist/jsvectormap.css'
import VueMultiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css";
import DropZone from "dropzone-vue";
import 'dropzone-vue/dist/dropzone-vue.common.css';
import { Countdown } from 'vue3-flip-countdown'
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { VueEditor } from "vue3-editor";
import VueSweetalert2 from 'vue-sweetalert2';
import vue3StarRatings from "vue3-star-ratings";
import "vue3-colorpicker/style.css";
// import SmartTable from 'vuejs-smart-table'
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.component("EasyDataTable", Vue3EasyDataTable);
  nuxt.vueApp.use(Vue3ColorPicker);
  nuxt.vueApp.directive('maska', vMaska);
  nuxt.vueApp.use(Vue3Tour);
  nuxt.vueApp.use(DropZone);
  nuxt.vueApp.use(VueSweetalert2);
  // nuxt.vueApp.use(SmartTable)
  nuxt.vueApp.use(PerfectScrollbarPlugin);
  nuxt.vueApp.component("apexchart", VueApexCharts);
  nuxt.vueApp.component("vue3-star-ratings", vue3StarRatings);
  nuxt.vueApp.component("jsVectorMap", jsVectorMap);
  nuxt.vueApp.component("Datepicker", Datepicker);
  nuxt.vueApp.component("VueEditor", VueEditor);
  nuxt.vueApp.component("Countdown", Countdown);
  nuxt.vueApp.component("VueMultiselect", VueMultiselect);
  nuxt.vueApp.component("Datepicker", Datepicker);

  // Particle effects
nuxt.vueApp.use(Particles, {
  init: async (engine: any) => {
    await loadFull(engine);
  }
});
 

});
