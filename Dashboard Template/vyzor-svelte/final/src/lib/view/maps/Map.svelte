<script lang="ts">
  import { onMount } from "svelte";
  import type { JsvMap } from "jsvectormap";
  export let id = "";
  export let customClass = "";
  let map: JsvMap | null = null;

  onMount(() => {
    if (typeof window === "undefined") return; // SSR protection
    requestAnimationFrame(() => {
      map = new jsVectorMap({
        selector: "#marker-map",
        map: "world",
        markers: [
          {
            name: "Russia",
            coords: [61, 105],
          },
          {
            name: "Greenland",
            coords: [72, -42],
          },
          {
            name: "Canada",
            coords: [56, -106],
            style: {
              fill: "#ff9251",
            },
          },
          {
            name: "Palestine",
            coords: [31.5, 34.8],
          },
          {
            name: "Brazil",
            coords: [-14.235, -51.9253],
          },
        ],
        markerStyle: {
          hover: {
            stroke: "#DDD",
            strokeWidth: 3,
            fill: "#FFF",
          },
          selected: {
            fill: "#ff525d",
          },
        },
        labels: {
          markers: {
            render: function (marker) {
              return marker.name;
            },
          },
        },
        markerLabelStyle: {
          initial: {
            fontFamily: "Poppins",
            fontSize: 13,
            fontWeight: 500,
            fill: "#35373e",
          },
        },
      });
    });

    // Cleanup on component destroy
    return () => {
      if (map) {
        map.destroy();
        map = null;
      }
    };
  });
</script>

<div {id} class={customClass}></div>
