<script>
    import { onMount, onDestroy } from "svelte";
    import {
        Chart,
        LineController,
        BarController,
        PieController,
        LineElement,
        BarElement,
        PointElement,
        ArcElement,
        LinearScale,
        CategoryScale,
        Title,
        Tooltip,
        Legend,
    } from "chart.js";


    export let id = ""; // default empty string, so no id attribute if not set
    export let height = 300;
    export let type = "line";
    export let data = { labels: [], datasets: [] };
    export let options = {};

    let canvas;
    let chart = null;

    Chart.register(
        LineController,
        BarController,
        PieController,
        LineElement,
        BarElement,
        PointElement,
        ArcElement,
        LinearScale,
        CategoryScale,
        Title,
        Tooltip,
        Legend,
    );

    onMount(() => {
        chart = new Chart(canvas, {
            type,
            data,
            options,
        });
    });

    // Reactive statement runs whenever `type`, `data`, or `options` change
    $: if (chart) {
        chart.destroy();
        chart = new Chart(canvas, {
            type,
            data,
            options,
        });
    }

    onDestroy(() => {
        chart?.destroy();
    });
</script>

<canvas
    bind:this={canvas}
    {...id ? { id } : {}}
    {height}
    style="max-width: 100%;"
></canvas>
