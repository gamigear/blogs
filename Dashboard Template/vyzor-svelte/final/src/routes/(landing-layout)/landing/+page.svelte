<script lang="ts">
    import BackToTop from "$lib/components/layout-components/backToTop/BackToTop.svelte";
    import LandingPage from "$lib/components/layout-components/LandingPage/LandingPage.svelte";
    import LandingSwitcher from "$lib/components/layout-components/switcher/LandingSwitcher.svelte";

    // Landing offcanvas handling via props
    let isOpen: boolean = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<LandingSwitcher {isOpen} {toggle} />
<LandingPage {toggle} />
<BackToTop />
