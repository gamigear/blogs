<script lang="ts">
  import { onMount } from "svelte";
  import "../../assets/scss/app.scss";
  import Switcher from "$lib/components/layout-components/switcher/Switcher.svelte";
  import Sidebar from "$lib/components/layout-components/sidebar/Sidebar.svelte";
  import Footer from "$lib/components/layout-components/footer/Footer.svelte";
  import Header from "$lib/components/layout-components/header/Header.svelte";
  import BackToTop from "$lib/components/layout-components/backToTop/BackToTop.svelte";
  import { themeStore } from "../../lib/components/layout-components/switcher/switcher";

  let themeLoaded = false;
  let progressRef: any;
  let userData: any = themeStore.userData;
  onMount(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (progressRef) {
        progressRef.style.width = `${scrollPercent}%`;
      }
    };

    themeStore.retrieveUserLocalStorage();
    themeLoaded = true;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //  offcanvas handling via props
  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<div style={`display: ${themeLoaded ? "block" : "none"};`}>
  <div bind:this={progressRef} class="progress-top-bar"></div>
  <Switcher {isOpen} {toggle} />
  <div class="page">
    <Header {toggle} />
    <Sidebar />
    <div class="main-content app-content">
      <div
        class={`container-fluid page-container  ${$userData.pageStyles === "flat" ? "main-body-container" : ""}`}
      >
        <slot />
      </div>
    </div>
    <Footer />
  </div>
  <BackToTop />
</div>
