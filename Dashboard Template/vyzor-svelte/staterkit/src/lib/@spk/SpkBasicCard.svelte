
<script lang="ts">
  interface CardComponentProps {
    cardProps?: string;
    headerTitle?: string;
    headerTitleProps?: string;
    cardBodyProps?: string;
    cardFooterProps?: string;
    Headerprops?: string;
    cardBodyId?: any;
    CardId?: string | null;
  }

  // Assigning props with types based on the interface
  export let cardProps: CardComponentProps["cardProps"] = '';
  export let headerTitle: CardComponentProps["headerTitle"] = '';
  export let headerTitleProps: CardComponentProps["headerTitleProps"] = '';
  export let cardBodyProps: CardComponentProps["cardBodyProps"] = '';
  export let cardFooterProps: CardComponentProps["cardFooterProps"] = '';
  export let Headerprops: CardComponentProps["Headerprops"] = '';
  export let cardBodyId: CardComponentProps["cardBodyId"] = null;
  export let CardId: CardComponentProps["CardId"] = null;
</script>
  
  <div class="card custom-card {cardProps}" id={CardId}>
    {#if $$slots.customheader || headerTitle}  <!-- Ensure customheader or headerTitle exists -->
      <div class="card-header {Headerprops}">
        {#if headerTitle} 
          <div class="card-title {headerTitleProps}">
            {headerTitle}
          </div>
        {/if}
        {#if $$slots.customheader}
          <slot name="customheader" />
        {/if}
      </div>
    {/if}
    
    {#if $$slots.content}  <!-- Only render content if the slot is passed -->
      <div class="card-body {cardBodyProps}" id={cardBodyId} key={cardBodyId}>
        <slot name="content" />
      </div>
    {/if}
  
    {#if $$slots.footer}  <!-- Only render footer if the slot is passed -->
      <div class="card-footer {cardFooterProps}">
        <slot name="footer" />
      </div>
    {/if}
  </div>
  