<script>
    import { onMount, onDestroy, tick } from "svelte";
    import * as echarts from "echarts";

    export let option = {};
    export let chartId = "echart";
    export let customClass = "";

    let chart;

    onMount(async () => {
        await tick();
        const chartDom = document.getElementById(chartId);
        chart = echarts.init(chartDom);
        chart.setOption(option);

        // Properly bind resize
        const handleResize = () => chart.resize();
        window.addEventListener("resize", handleResize);

        // Optional: observe container changes
        const resizeObserver = new ResizeObserver(() => chart.resize());
        resizeObserver.observe(chartDom);

        // Cleanup
        onDestroy(() => {
            chart.dispose();
            window.removeEventListener("resize", handleResize);
            resizeObserver.disconnect();
        });
    });
</script>

<div style="max-width:100%; height:300px;" class={customClass} id={chartId}></div>
