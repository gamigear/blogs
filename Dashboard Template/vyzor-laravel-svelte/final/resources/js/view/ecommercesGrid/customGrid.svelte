<script>
    import Grid from "gridjs-svelte";
    import { html } from "gridjs";
    import {
        CustomerSelect,
        initialCustomerData,
    } from "@/shared/data/dashboards/ecommerce/customersdata";
    import { onMount } from "svelte";
    import Swal from "sweetalert2";
    import { writable } from "svelte/store";

    let customerData = writable([...initialCustomerData]);
    export let searchText1 = "";
    export let selectedCategoryCustomers1 = CustomerSelect[0];
    onMount(() => {
        // Delete button event delegation
        const handleDelete = (e) => {
            const target = e.target;
            const btn = target.closest(".btn-delete");
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
                        customerData.update((data) => {
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

    $: filteredData = $customerData.filter((row) => {
        const matchesSearchText = row.some((cell, index) => {
            if (index === 2) return false; // skip image URL
            return cell
                .toString()
                .toLowerCase()
                .includes(searchText1.toLowerCase());
        });
        const matchesCategory =
            !selectedCategoryCustomers1 ||
            selectedCategoryCustomers1.value === "customer" ||
            selectedCategoryCustomers1.value === "all status"
                ? true
                : row[3].toLowerCase() ===
                  selectedCategoryCustomers1.value.toLowerCase();

        return matchesSearchText && matchesCategory;
    });


</script>
{#if filteredData.length === 0}
    <div class="grid-no-data text-center">
        <p>
            No customer found <strong></strong>.
        </p>
    </div>
{:else}
    <Grid
        columns={[
            {
                name: "#",
                formatter: (cell, row) =>
                    html(`
              <input class="form-check-input" type="checkbox" id="product-${row.cells[0].data}" aria-label="Select product">
            `),
            },
            {
                name: "Customer IP",
                formatter: (cell, row) =>
                    html(`<a href="#!">${row.cells[0].data}</a>`),
            },
            {
                name: "Customer Name",
                formatter: (cell, row) =>
                    html(`
              <div class="d-flex align-items-center gap-3 position-relative">
                <div class="lh-1">
                  <span class="avatar avatar-md bg-light">
                    <img src="${row.cells[2].data}" alt="Customer Image">
                  </span>
                </div>
                <div>
                  <span class="d-block fw-semibold">${row.cells[1].data}</span>
                  <span class="text-muted fs-13">${row.cells[5].data}</span>
                </div>
              </div>
            `),
            },
            {
                name: "Status",
                formatter: (cell, row) =>
                    html(`
            <span class="badge bg-${
                row.cells[3].data === "Active"
                    ? "success-transparent"
                    : row.cells[3].data === "Archived"
                      ? "success-transparent"
                      : "danger-transparent"
            }">${row.cells[3].data}</span>
          `),
            },
            "Joining Date",
            {
                name: "Actions",
                formatter: (cell, row, rowIndex) =>
                    html(`
              <span>
                    <button class="btn btn-sm btn-primary-transparent">
                      <i class="ri-edit-line"></i>
                    </button>
                    <a class="btn btn-sm btn-danger-transparent btn-delete" data-index="${rowIndex}" href="javascript:void(0);">
                <i class="ri-delete-bin-line"></i>
              </a>
            </span>
            `),
            },
        ]}
        data={filteredData}
        pagination="{false},"
        sort={true}
        language={{
            noRecordsFound: `No Customers found`,
        }}
    />
{/if}
