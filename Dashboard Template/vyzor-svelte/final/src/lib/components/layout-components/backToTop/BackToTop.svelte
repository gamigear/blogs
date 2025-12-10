<script lang="ts">
    import { onMount } from "svelte";

    const screenUp = () => {
        window.scrollTo(0, 0);
    };

    onMount(() => {
        const handleScroll = () => {
            const color:any = document.getElementsByClassName("scrollToTop")[0];
            if (color) {
                window.scrollY > 100
                    ? (color.style.display = "flex")
                    : (color.style.display = "none");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<a href="#!" on:click={screenUp}>
<div class="scrollToTop" >
       <span class="arrow lh-1"><i class="ti ti-arrow-big-up fs-18"></i></span>
   </div>
   </a>