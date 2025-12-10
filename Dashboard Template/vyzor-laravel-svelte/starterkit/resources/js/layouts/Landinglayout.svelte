<script>
    import { themeStore } from "@/components/switcher/switcher";
    import { onMount } from "svelte";

    const setBodyClass = (action) => {
        if (action === "add") {
            document.body.classList.add("landing-body");
            document.body.style.display = "block";
        } else {
            document.body.classList.remove("landing-body");
            document.body.style.display = "none";
        }
    };


    onMount(() => {
        themeStore.custompageLocalStorage();

        let html = document.querySelector("html");
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
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            setBodyClass("remove");
            localStorage.removeItem("landingVisited");
            document.body.removeAttribute("style");
        };
    });
</script>

<div>
    <slot />
</div>
