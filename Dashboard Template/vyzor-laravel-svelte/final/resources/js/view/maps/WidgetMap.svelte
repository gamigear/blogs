<script>
    import { onMount, tick } from "svelte";
    export let id = "";
    export let customClass = "";
    let map = null;
    onMount(async () => {
        await tick()
        if (typeof window === "undefined") return; // SSR protection
        requestAnimationFrame(() => {
            map = new jsVectorMap({
                selector: document.querySelector(`#sales-locations`),
                map: "world",
                zoomButtons: false,
                markers: [
                    {
                        name: "Argentina",
                        coords: [-38.4161, -63.6167],
                    },
                    { name: "France", coords: [46.6034, 1.8883] },
                    { name: "USA", coords: [37.0902, -95.7129] },
                ],
                markerStyle: {
                    initial: {
                        r: 5,
                        fill: "var(--primary-color)",
                        stroke: "rgba(255,255,255,0.1)",
                        strokeWidth: 2,
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
            if (map) {
                map.destroy();
                map = null;
            }
        };
    });
</script>

<div {id} class={customClass}></div>
