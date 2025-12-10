<script lang="ts">
    import { Table } from "@sveltestrap/sveltestrap";

    interface TableProps {
  tableClass?: string;
  headerClass?: string;
  tBodyClass?: string;
  headerContent?: string;
  footerClass?: string;
  Size?: string;
  Striped?: boolean;
  Bordered?: boolean;
  Responsive?: boolean ;
  Hover?: boolean;
  showCheckbox?: boolean;
  showCheckid?: string;
  showCheckClass?: string;
  header?: any;              // You can specify a more detailed type if you know the structure
  checked?: boolean;
  borderless?: boolean;
  onChange?: () => void;
  paginationFooter?: boolean;
  TodoDrag?:boolean
}
    
    export let tableClass: TableProps["tableClass"] = "";
  export let headerClass: TableProps["headerClass"] = "";
  export let tBodyClass: TableProps["tBodyClass"] = "";
  export let headerContent: TableProps["headerContent"] = "";
  export let footerClass: TableProps["footerClass"] = "";
  export let Size: TableProps["Size"] = "";
  export let Striped: TableProps["Striped"] =false;
  export let Bordered: TableProps["Bordered"] = false;
  export let Responsive: TableProps["Responsive"] = false;
  export let Hover: TableProps["Hover"] = false;
  export let showCheckbox: TableProps["showCheckbox"] = false;
  export let showCheckid: TableProps["showCheckid"] = "checkboxNoLabel02";
  export let showCheckClass: TableProps["showCheckClass"] = "";
  export let header: TableProps["header"] = [];
  export let checked: TableProps["checked"] = false;
  export let borderless: TableProps["borderless"] = false;
  export let onChange: TableProps["onChange"] = () => {};
  export let paginationFooter: TableProps["paginationFooter"] = false;
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
    <tbody class={tBodyClass}  >
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
