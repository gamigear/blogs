<script lang="ts">
  import { Button } from "@sveltestrap/sveltestrap";

  interface Props {
    text?: string;
    color?: string;
    size?: string;
    id?: string;
    href?: string;
    disabled?: boolean;
    active?: boolean;
    outline?: boolean;
    customClass?: string;
    buttontype?: string;
    as?: 'button' | 'input' | 'a';
    value?: string;
  }

  export let text: Props['text'] = '';
  export let color: Props['color'] = '';
  export let size: Props['size'] = '';
  export let id: Props['id'] = '';
  export let href: Props['href'] = '';
  export let disabled: Props['disabled'] = false;
  export let active: Props['active'] = false;
  export let outline: Props['outline'] = false;
  export let customClass: Props['customClass'] = '';
  export let buttontype: Props['buttontype'] = 'button';
  export let onclickfunc: (event: MouseEvent) => void = () => {};
  export let as: Props['as'] = 'button';
  export let value: Props['value'] = '';
</script>

{#if as === 'input'}
  <input 
    type={buttontype} 
    class= {customClass} 
    role="button" 
    value={value} 
    on:click={onclickfunc}
  />
{:else if href}
  <a 
    class={`btn btn-${color} ${size}  ${customClass}`} 
    href={href} id={id}
    on:click={onclickfunc} 
    aria-disabled={disabled} 
  >
    {#if text}
      {@html text}
    {/if}
    <slot />
  </a>
{:else}
  <Button id={id}
    outline={outline}
    active={active} 
    color={color} 
    size={size} 
    type={buttontype} 
    class={customClass} 
    on:click={onclickfunc} 
    disabled={disabled}
  > 
  
    {#if text}
      {@html text}
    {/if}
    <slot />
  </Button>
{/if}
