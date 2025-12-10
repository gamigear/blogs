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
