<!-- Breadcrumb.svelte -->
<script>
    import { Breadcrumb , BreadcrumbItem } from '@sveltestrap/sveltestrap';
  
    export let activeItem = '';
    export let href = '';
    export let label = '';
    export let divider = '';
    export let CustomClass = '';
    export let Single = false;
    export let style = {}; // Accept style as a prop
    // Array of breadcrumb items
    export let items = [];
  </script>
  

  <Breadcrumb divider={ divider} class={CustomClass} style={style}>

    {#if Single}
    <BreadcrumbItem >
        {#if href}
          <a href={href}>{label}</a>
        {:else}
          {label}
        {/if}
      </BreadcrumbItem>
      {:else} 
    {#each items as { href, label,itemsClass }}
      {#if label} 
        <BreadcrumbItem active={label === activeItem} class={itemsClass}  >
          {#if href}
            <a href={href} on:click={e=>e.preventDefault()}> {@html label}</a>
          {:else}
            {label}
          {/if}
          <slot />
        </BreadcrumbItem>
      
      {/if}
    {/each}
    {/if}
  </Breadcrumb>

  