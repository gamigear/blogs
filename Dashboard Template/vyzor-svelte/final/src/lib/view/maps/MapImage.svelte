<script lang="ts">
  import { onMount } from "svelte";
  import type { JsvMap } from "jsvectormap";
  export let id = "";
  export let customClass = "";
  let mapImage: JsvMap | null = null;
  onMount(() => {
    if (typeof window === "undefined") return; // SSR protection
    requestAnimationFrame(() => {
      mapImage = new jsVectorMap({
        selector: document.querySelector(`#marker-image-map`),
        map: "world",
        markers: [
          {
            name: "Palestine",
            coords: [31.5, 34.8],
          },
          {
            name: "Russia",
            coords: [61, 105],
          },
          {
            name: "greenland",
            coords: [72, -42],
          },
          {
            name: "Canada",
            coords: [56, -106],
          },
        ],

        markerStyle: {
          initial: {
            image: true,
          },
        },
        series: {
          markers: [
            {
              attribute: "image",
              scale: {
                marker1title: {
                  url: "../images/brand-logos/toggle-logo.png",
                  offset: [10, 0],
                },
                marker2title: {
                  url: "../images/brand-logos/toggle-logo.png",
                  offset: [10, 0],
                },
              },
              values: {
                0: "marker1title",
                1: "marker2title",
                2: "marker2title",
                3: "marker1title",
              },
            },
          ],
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
      if (mapImage) {
        mapImage.destroy();
        mapImage = null;
      }
    };
  });
</script>

<div {id} class={customClass}></div>
