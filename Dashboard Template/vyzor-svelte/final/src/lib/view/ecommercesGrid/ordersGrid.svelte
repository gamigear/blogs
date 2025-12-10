<script lang="ts">
    import Grid from "gridjs-svelte";
    import { html } from "gridjs";
    import { initialOrders } from "$lib/data/dashboards/ecommerce/ordersdata";
    import { onMount } from "svelte";
    import Swal from "sweetalert2";
    import { writable } from "svelte/store";

    let ordersData = writable([...initialOrders]);

     onMount(() => {
        // Delete button event delegation
        const handleDelete = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const btn = target.closest(".btn-delete") as HTMLElement;
            if (btn && btn.dataset.index !== undefined) {
                const index = parseInt(btn.dataset.index);
                Swal.fire({
                    title: "Are you sure?",
                    text: "This action cannot be undone.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        ordersData.update((data) => {
                            const updated = [...data];
                            updated.splice(index, 1);
                            return updated;
                        });
                        Swal.fire(
                            "Deleted!",
                            "Customer has been deleted.",
                            "success",
                        );
                    }
                });
            }
        };
        document.addEventListener("click", handleDelete);
        return () => {
            document.removeEventListener("click", handleDelete);
        };
    });

</script>

<Grid
    columns={[
        {
            name: "#",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }) =>
                html(`
              <input class="form-check-input" type="checkbox" id="product-${row.cells[0].data}" aria-label="Select product">
            `),
        },
        {
            name: "Order ID",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }) =>
                html(`
              <a href="#!" class="text-primary text-decoration-underline">${row.cells[0].data}</a>
            `),
        },
        {
            name: "Customer",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }) =>
                html(`
              <Link href="#!">
                <div class="d-flex align-items-center gap-3 position-relative">
                  <div class="lh-1">
                    <span class="avatar avatar-md avatar-rounded">
                      <img src="${row.cells[2].data}" alt="Product Image">
                    </span>
                  </div>
                  <div>
                    <span class="d-block fw-semibold">${row.cells[1].data}</span>
                    <span class="text-muted fs-13">${row.cells[8].data}</span>
                  </div>
                </div>
              </Link>
            `),
        },
        "Price",
        {
            name: "Delivery Status",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }) =>
                html(
                    `<span class="badge bg-${row.cells[4].data === "Pending" ? "warning" : row.cells[4].data === "Shipped" ? "info" : row.cells[4].data === "Delivered" ? "success" : "danger"}-transparent">${row.cells[4].data}</span>`,
                ),
        },
        {
            name: "Payment Method",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }) => html(`${row.cells[6].data}`),
        },
        {
            name: "Payment Status",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }) =>
                html(
                    `<span class="text-${row.cells[5].data === "Pending" ? "info" : row.cells[5].data === "Completed" ? "success" : row.cells[5].data === "Failed" ? "orange" : row.cells[5].data === "Refunded" ? "warning" : "danger"}"><i class="ri-circle-fill me-1 fs-10"></i>${row.cells[5].data}</span>`,
                ),
        },
        "Ordered Date",
        {
            name: "Actions",
            formatter: (cell:any, row:{ cells: { data: number | string }[]; }, rowIndex:number) =>
                html(`
                          <span>
                                <a href="/svelte/vyzor/preview/dashboards/ecommerce/order-details" class="btn btn-sm btn-primary-transparent">
                                  <i class="ri-eye-line"></i>
                                </a>
                                <a class="btn btn-sm btn-danger-transparent btn-delete" data-index="${rowIndex}" href="javascript:void(0);">
                            <i class="ri-delete-bin-line"></i>
                          </a>
                        </span>
                        `),
        },
    ]}
    data={$ordersData}
    pagination="{true},"
    sort={true}
/>
