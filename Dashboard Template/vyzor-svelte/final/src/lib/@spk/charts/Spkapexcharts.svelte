<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let options = {};
    export let id = 'chart';
    export let customClass='' ;
     // Default id
    let chart:any;

    onMount(async () => {
        const { default: ApexCharts } = await import('apexcharts');
        chart = new ApexCharts(document.querySelector(`#${id}`), options);
        chart.render();
    });
   

    onDestroy(() => {
        if (chart) {
            chart.destroy(); // Clean up chart instance
        }
    });
</script>

<div id={id} class={customClass}></div>

<style>
    /* Optional: You can add styles here if needed */
</style>
