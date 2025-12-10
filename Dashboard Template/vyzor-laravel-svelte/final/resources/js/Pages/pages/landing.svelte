<script context="module">
    import Landinglayout from "@/layouts/Landinglayout.svelte";
    export const layout = Landinglayout;
</script>

<script>
    import BackToTop from "@/components/backToTop/BackToTop.svelte";
    import LandingPage from "@/components/LandingPage/LandingPage.svelte";
    import LandingSwitcher from "@/components/switcher/LandingSwitcher.svelte";

    // Landing offcanvas handling via props
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<!-- Page Title -->
<svelte:head>
    <title>Landing | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<LandingSwitcher {isOpen} {toggle} />
<LandingPage {toggle} />
<BackToTop />
