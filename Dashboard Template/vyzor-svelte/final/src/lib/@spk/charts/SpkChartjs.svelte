<script lang="ts">
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

    import type { ChartType, ChartData, ChartOptions } from "chart.js";

    export let id: string = ""; // default empty string, so no id attribute if not set
    export let height: number = 300;
    export let type: ChartType = "line";
    export let data: ChartData = { labels: [], datasets: [] };
    export let options: ChartOptions = {};

    let canvas: HTMLCanvasElement;
    let chart: Chart | null = null;

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
