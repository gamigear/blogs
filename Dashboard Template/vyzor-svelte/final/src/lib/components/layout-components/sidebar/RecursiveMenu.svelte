<script lang="ts">
  export let menuData; // menu data (object)
  export let toggleSubmenu; // function to toggle submenu
  export let HoverToggleInnerMenuFn; // function to hover toggle submenu
  export let level; // level of menu (for recursion)
  import RecursiveMenu from "./RecursiveMenu.svelte";
    import { base } from "$app/paths";
  
  const basePath = base;

  const handleClick = (event:any) => {
    event.preventDefault(); // Prevents the default anchor behavior (navigation)
  };

</script>

<a
on:click={(event) => { event.preventDefault(); toggleSubmenu(event, menuData, undefined, level > 1); }}
  href="#!"
  class="side-menu__item {menuData?.selected ? 'active' : ''}"
  tabindex="0"
>
  {#if menuData?.icon}
    {@html menuData.icon}
  {/if}

  {#if level == 1}
    <span class="side-menu__label">
      {menuData.title}
      {#if menuData.badgetxt}
        <span >{@html menuData.badge}</span>
      {/if}
    </span>
  {/if}

  {#if level > 1}
    <span>
      {menuData.title}
      {#if menuData.badgetxt}
        <span >{@html menuData.badgetxt}</span>
      {/if}
    </span>
  {/if}

  <i class="fe fe-chevron-right side-menu__angle"></i>
</a>

<ul
  class="slide-menu {menuData?.active
    ? 'double-menu-active'
    : ''} child{level} {menuData?.dirchange ? 'force-left' : ''}"
  style:display={menuData?.active ? "block" : "none"}
>

  {#if level <= 1}
    <li class="slide side-menu__label1">
      <a href="#!">{menuData.title}</a>
    </li>
  {/if}

  {#each menuData.children as firstlevel, subIndex}
    <li
      class={`
      ${firstlevel.menutitle ? "slide__category" : ""} 
      ${firstlevel?.type == "empty" ? "slide" : ""} 
      ${firstlevel?.type == "link" ? "slide" : ""} 
      ${firstlevel?.type == "sub" ? "slide has-sub" : ""} 
      ${firstlevel?.active ? "open" : ""} 
      ${firstlevel?.selected ? "active" : ""}
      `}
    >
      {#if firstlevel?.type === "link"}
      <a
      href={`${basePath}${firstlevel.path}`}
      class="side-menu__item {firstlevel.selected ? 'active' : ''}"
      >
       {#if firstlevel?.icon}
    {@html firstlevel.icon}
  {/if}
      {firstlevel.title}
      {#if firstlevel.badgetxt}
        <span>{@html firstlevel.badgetxt}</span>
          {/if}
        </a>
      {/if}

      {#if firstlevel?.type === "empty"}
        <a href="#!" class="side-menu__item" on:click={handleClick}>
          {#if firstlevel.icon}
                                        {@html firstlevel.icon}
                                    {/if}
          {firstlevel.title}
          {#if firstlevel.badge}
            <span class="badge {firstlevel.badgeColor} ms-1">
              {firstlevel.badge}
            </span>
          {/if}
        </a>
      {/if}

      {#if firstlevel?.type === "sub"}
        <RecursiveMenu
          menuData={firstlevel}
          {toggleSubmenu}
          {HoverToggleInnerMenuFn}
          level={level + 1}
        />
      {/if}
    </li>
  {/each}
</ul>
