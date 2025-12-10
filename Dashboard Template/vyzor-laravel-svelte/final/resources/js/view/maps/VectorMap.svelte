<script>
    import { onMount, tick } from "svelte";
    export let id = "";
    export let customClass = "";
    let map = null;
    onMount(async () => {
        await tick();

        if (typeof window === "undefined") return; // SSR protection
        requestAnimationFrame(() => {
            map = new jsVectorMap({
                selector: "#vector-map",
                map: "world",
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
