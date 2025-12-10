
import VueApexCharts from "../components/UI/apexcharts.vue";
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import VueSweetalert2 from 'vue-sweetalert2';

import "vue3-colorpicker/style.css";

import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';

export default defineNuxtPlugin((nuxt) => {

  nuxt.vueApp.use(Vue3ColorPicker);
  nuxt.vueApp.use(VueSweetalert2);
  // nuxt.vueApp.use(SmartTable)
  nuxt.vueApp.use(PerfectScrollbarPlugin);
  nuxt.vueApp.component("apexchart", VueApexCharts);
  nuxt.vueApp.component("Datepicker", Datepicker);

  // Particle effects
nuxt.vueApp.use(Particles, {
  init: async (engine: any) => {
    await loadFull(engine);
  }
});
 

});
