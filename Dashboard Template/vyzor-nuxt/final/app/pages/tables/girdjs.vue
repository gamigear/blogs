<script lang="ts" setup>


definePageMeta({
    layout: 'default',
    middleware: ['auth']
})

const dataToPass = {
    title: 'Tables',
    currentpage: 'Grid Js',
    activepage: 'Grid Js'
};

</script>
<template>
    <Pageheader :propData="dataToPass" />
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title"> Basic Grid table </div>
                </div>
                <div class="card-body">
                    <CustomizeGridjs />
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped></style>