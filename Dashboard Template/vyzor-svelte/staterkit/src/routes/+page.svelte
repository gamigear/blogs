<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { getItem } from "$lib/utility/localStorageController";
	import { base } from "$app/paths";
	let isAuthenticated = getItem("access_token");
	const basePath = base;
	onMount(() => {
		goto(`${basePath}/dashboards/sales`);
		if (isAuthenticated) {
		} else {
			goto(`${basePath}/login `);
		}
	});
</script>


