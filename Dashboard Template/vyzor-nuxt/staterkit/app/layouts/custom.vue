<template>
    <slot />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { switcherStore } from '~/stores/switcher'

const switcher = switcherStore()

onMounted(() => {
    switcher.custompageLocalStorage()
})
</script>

<style scoped>
/* Optional styles */
</style>
