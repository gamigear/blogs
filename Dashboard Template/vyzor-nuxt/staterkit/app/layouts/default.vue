<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { switcherStore } from "~/stores/switcher";

// Store
const switcher = switcherStore()

// Computed class based on page style
const customClass = computed(() => {
  return switcher.pageStyles === "flat" ? "main-body-container" : "";
})

// Reference for the scroll progress bar
const progressRef = ref<HTMLElement | null>(null)

// Scroll handler for updating progress
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  if (scrollHeight === 0) {
    console.log("No scroll possible")
    return
  }

  const scrollPercent = (scrollTop / scrollHeight) * 100

  if (progressRef.value) {
    progressRef.value.style.width = `${scrollPercent}%`
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  switcher.retrieveFromLocalStorage()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>


<template lang="html">
  <div ref="progressRef" class="progress-top-bar"></div>
  <Switcher />
  <Loading />
  <div class="page">
    <Header />
    <Sidebar />
    <!-- Start::app-content -->
    <div class="main-content app-content">
      <div :class="['container-fluid', 'page-container', customClass]">
        <slot />
      </div>
    </div>
    <!-- End::app-content -->
    <Footer />
  </div>
  <Backtotop />
</template>

<style lang="scss">
/* Add your styles here */
</style>
