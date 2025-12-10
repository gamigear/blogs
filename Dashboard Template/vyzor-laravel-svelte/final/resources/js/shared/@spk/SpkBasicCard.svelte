<script>
    // Assigning props with types based on the interface
    export let cardProps = "";
    export let headerTitle = "";
    export let headerTitleProps = "";
    export let cardBodyProps = "";
    export let cardFooterProps = "";
    export let Headerprops = "";
    export let cardBodyId = null;
    export let CardId = null;
</script>

<div class="card custom-card {cardProps}" id={CardId}>
    {#if $$slots.customheader || headerTitle}
        <!-- Ensure customheader or headerTitle exists -->
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

    {#if $$slots.content}
        <!-- Only render content if the slot is passed -->
        <div class="card-body {cardBodyProps}" id={cardBodyId} key={cardBodyId}>
            <slot name="content" />
        </div>
    {/if}

    {#if $$slots.footer}
        <!-- Only render footer if the slot is passed -->
        <div class="card-footer {cardFooterProps}">
            <slot name="footer" />
        </div>
    {/if}
</div>
