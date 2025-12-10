<template>
    <CustomPageSwitcher />
    <slot />
    <Backtotop />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
    document.body.classList.add('landing-body')
})

onUnmounted(() => {
    document.body.classList.remove('landing-body')
})
</script>

<style></style>
