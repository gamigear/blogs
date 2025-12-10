<!-- EChart.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import * as echarts from 'echarts';

    export let option = {}; // Pass options as a prop
    export let chartId = 'echart'; // Default ID for the chart
    let chart:any;

    onMount(() => {
        const chartDom = document.getElementById(chartId);
        chart = echarts.init(chartDom);
        chart.setOption(option);
        window.addEventListener('resize', chart.resize);
        // Cleanup on component destroy
        return () => {
            chart.dispose();
            window.removeEventListener('resize', chart.resize);
        };
    });
</script>

<style>
   
       
         /* Default height, can be overridden */
       

</style>

<div class={`echart-charts`}  id={chartId}></div>
