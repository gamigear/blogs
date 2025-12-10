<template>
    <div id="loader" v-if="loading">
        <img src="/images/media/loader.svg" alt="Loading..." />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()

function startLoading() {
    loading.value = true
}

function stopLoading() {
    loading.value = false
}

let removeBeforeEach, removeAfterEach

onMounted(() => {
    removeBeforeEach = router.beforeEach((to, from, next) => {
        startLoading()
        next()
    })

    removeAfterEach = router.afterEach(() => {
        stopLoading()
    })
})

onUnmounted(() => {
    if (removeBeforeEach) removeBeforeEach()
    if (removeAfterEach) removeAfterEach()
})
</script>

<style scoped></style>
