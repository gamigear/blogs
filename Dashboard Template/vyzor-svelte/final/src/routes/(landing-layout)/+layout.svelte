<script lang="ts">
    import { themeStore } from "$lib/components/layout-components/switcher/switcher.ts";
    import { onMount } from "svelte";
    const setBodyClass = (action: string) => {
        if (action === "add") {
            document.body.classList.add("landing-body");
            document.body.style.display = "block";
        } else {
            document.body.classList.remove("landing-body");
            document.body.style.display = "none";
        }
    };

    let intialLoad = false;

    onMount(() => {
        themeStore.custompageLocalStorage();

        let html = document.querySelector("html")!;
        html.removeAttribute("data-page-style");
        html.removeAttribute("data-width");
        html.removeAttribute("data-menu-position");
        html.removeAttribute("data-header-position");
        html.removeAttribute("data-bg-img");
        html.style.removeProperty("--body-bg-rgb");
        html.style.removeProperty("--body-bg-rgb2");
        html.style.removeProperty("--light-rgb");
        html.style.removeProperty("--form-control-bg");
        html.style.removeProperty("--input-border");

        if (localStorage.getItem("landingVisited") === "true") {
            setBodyClass("add");
        } else {
            setBodyClass("add");
            localStorage.setItem("landingVisited", "true");
        }

        const handleBeforeUnload = () => {
            setBodyClass("remove");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        intialLoad = true;
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            setBodyClass("remove");
            localStorage.removeItem("landingVisited");
            document.body.removeAttribute('style')
            intialLoad = false;
        };
    });
</script>

<div style={`display: ${intialLoad ? "block" : "none"};`}>
    <slot />
</div>
