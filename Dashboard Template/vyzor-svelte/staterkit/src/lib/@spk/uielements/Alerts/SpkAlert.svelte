<script lang="ts">
  import { Alert, Button } from "@sveltestrap/sveltestrap";

export let color: string = ''; 

  // Optional CSS classes
  export let customClass: string = "";
  export let customBtnClass: string = "";
  export let customImgClass: string = "";

  // Alert text content
  export let text: string = '';
  export let text2: string = '';
  export let text3: string = '';

  // Optional icon or image (SVG string or URL)
  export let icon: string = '';
  export let img: string = '';
  export let iconClass:string ='';

  // Visibility and behavior
  export let isVisible: boolean = true;
  export let showCloseButton: boolean = true;
  export let dismissible: boolean = false;
  // Function to close an alert
  const closeAlert = () => {
    isVisible = false; // Set visibility to false when closed
  };
</script>

{#if isVisible}
  <Alert {color} class={customClass} role="alert" dismissible={dismissible} >
    {#if icon}
      <span class={iconClass}>{@html icon}</span><!-- Add the icon here -->
    {/if}

    {#if img}
      <div class={customImgClass}>
        <img  loading="lazy" src={img} alt="img" /><!-- Add the Image here -->
      </div>
    {/if}

    {#if text}
      <span>{@html text}</span>
    {/if}
    {#if text2}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#!" class="alert-link">{text2}</a>{text3}
      <!-- Add the Link here -->
       
    {/if}

    {#if showCloseButton}
      <Button
        color=""
        type="button"
        class={`btn-close ${customBtnClass} `}
        aria-label="Close"
        on:click={closeAlert}

      >
        <i class="bi bi-x"></i>
      </Button>
    {/if}

    <slot />
  </Alert>
{/if}

<style lang="scss">
  /* Add any additional styles here */
</style>
