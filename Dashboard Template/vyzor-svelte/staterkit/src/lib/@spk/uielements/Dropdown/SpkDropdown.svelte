<script lang="ts">
    import {
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
    } from "@sveltestrap/sveltestrap";

    type Direction = 'up' | 'down' | 'left' | 'right';
    export let option:any = [];
    export let parent:string ="";
    export let CustomClass:string ='';
    export let Direction:Direction ="down";
    export let Color:string ="";
    export let ToggleClass:string ="";
    export let Size:string ='';
    export let end:boolean =false;
    export let menucalss:string ="";
    export let itemclass:string ="";
    export let AutoClose:boolean |string =true;
    export let theme:string ="";
    export let Caret:boolean=false
    export let Split:boolean=false
  </script>
  
  <Dropdown theme={theme} autoClose={AutoClose} direction={Direction} class={CustomClass}>
    <slot/>
    <DropdownToggle size={Size} class={ToggleClass} color={Color} caret={Caret} split={Split}>{@html parent} </DropdownToggle>
    
    <!-- Dropdown Menu -->
  <DropdownMenu end={end} class={menucalss}> <!-- Pass the direction prop here -->
    {#each option as Item}
      {#if Item.divider}
        <DropdownItem divider class="dropdown-divider" />
      {:else}
        <DropdownItem active={Item.active}
          href={Item.link} 
          class={`${itemclass} ${Item.class ? Item.class : ''}`}
          >
          {@html Item.lable} <!-- Display raw HTML content for the dropdown item label -->
        </DropdownItem>
      {/if}
    {/each}
  </DropdownMenu>
  </Dropdown>
  