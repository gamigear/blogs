<script>
    // import "swiper/swiper-bundle.css";
    import { onMount } from "svelte";
    import { themeStore } from "@/components/switcher/switcher.js";

    let themeLoaded = false;

    onMount(() => {
        themeStore.custompageLocalStorage();
        themeLoaded = true;
        let html = document.querySelector("html");
        
        html.removeAttribute("data-page-style");
        html.removeAttribute("data-width");
        html.removeAttribute("data-menu-position");
        html.removeAttribute("data-header-position");
    });
</script>

{#if themeLoaded}
    <!-- <div class="page"> -->
    <slot />
    <!-- </div> -->
{/if}
