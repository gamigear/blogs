<script>
    import { Table } from "@sveltestrap/sveltestrap";

    export let tableClass = "";
    export let headerClass = "";
    export let tBodyClass = "";
    export let headerContent = "";
    export let footerClass = "";
    export let Size = "";
    export let Striped = false;
    export let Bordered = false;
    export let Responsive = false;
    export let Hover = false;
    export let showCheckbox = false;
    export let showCheckid = "checkboxNoLabel02";
    export let showCheckClass = "";
    export let header = [];
    export let checked = false;
    export let borderless = false;
    export let onChange = () => {};
    export let paginationFooter = false;
    //   export let TodoDrag:TableProps["TodoDrag"] = false
</script>

<Table
    size={Size}
    responsive={Responsive}
    bordered={Bordered}
    {borderless}
    striped={Striped}
    hover={Hover}
    class={tableClass}
>
    {@html headerContent}
    <thead class={headerClass}>
        <tr>
            {#if showCheckbox}
                <th class={showCheckClass}>
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id={showCheckid}
                        bind:checked
                        aria-label="..."
                        on:change={onChange}
                    />
                </th>
            {/if}
            {#each header as headerItem, index}
                <th class={headerItem.headerClassname}>
                    {headerItem.title}
                </th>
            {/each}
        </tr>
    </thead>
    <tbody class={tBodyClass}>
        <slot></slot>
    </tbody>
    <tfoot class={footerClass}>
        {#if paginationFooter}
            <tr>
                <td colspan="5">
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-end mb-0">
                            <li class="page-item disabled">
                                <a class="page-link" href="#!">Previous</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">Next</a>
                            </li>
                        </ul>
                    </nav>
                </td>
            </tr>
        {/if}
        <slot name="footer"></slot>
    </tfoot>
</Table>

<style>
    /* Add any relevant styles here */
</style>
