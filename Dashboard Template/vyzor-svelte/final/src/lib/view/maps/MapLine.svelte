<script lang="ts">
  import { onMount } from "svelte";
  import type { JsvMap } from "jsvectormap";
  export let id = "";
  export let customClass = "";
  let mapLines: JsvMap | null = null;
  onMount(() => {
    if (typeof window === "undefined") return; // SSR protection
    requestAnimationFrame(() => {
      mapLines = new jsVectorMap({
        selector: document.querySelector(`#lines-map`),
        map: "world",
        markers: [
          { name: "Russia", coords: [61.524, 105.3188] },
          { name: "Egypt", coords: [26.8206, 30.8025] },
          { name: "Greenland", coords: [71.7069, -42.6043], offsets: [2, 10] },
          { name: "Canada", coords: [56, -106], offsets: [-7, 12] },
        ],
        lines: [
          {
            from: "Russia",
            to: "Egypt",
            style: { stroke: "#abb0b7", strokeWidth: 1.5 },
          },
          {
            from: "Canada",
            to: "Russia",
            style: { stroke: "#abb0b7", strokeWidth: 1.5 },
          },
        ],
        lineStyle: {
          strokeDasharray: "6 3 6",
          animation: true,
        },
        markerStyle: {
          initial: {
            r: 6,
            fill: "#1266f1",
            stroke: "#fff",
            strokeWidth: 3,
          },
        },
        markerLabelStyle: {
          initial: {
            fontSize: 13,
            fontWeight: 500,
            fill: "#35373e",
          },
        },
        labels: {
          markers: {
            render: function (marker) {
              return marker.name;
            },
          },
        },
      });
    });

    // Cleanup on component destroy
    return () => {
      if (mapLines) {
        mapLines.destroy();
        mapLines = null;
      }
    };

  });
</script>

<div {id} class={customClass}></div>
