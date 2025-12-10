<script lang="ts">
    import Grid from "gridjs-svelte";
    import { html } from "gridjs";
    import {
        CategoriesProduct,
        FilterProduct,
        productsData,
        StatusProduct,
        StockProduct,
    } from "$lib/data/dashboards/ecommerce/productsdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import Swal from "sweetalert2";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";

    let ProductsData = writable([...productsData]);

    // Reactive filtered data
    let searchText = "";
    let selectedCategory = CategoriesProduct[1]; // Default to 'all categories'
    let statusCategory = StatusProduct[1];
    let stockCategory = StockProduct[1];
    let selectedSort = FilterProduct[0];

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
                        ProductsData.update((data) => {
                            const updated = [...data];
                            updated.splice(index, 1);
                            return updated;
                        });
                        Swal.fire(
                            "Deleted!",
                            "Product has been deleted.",
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

    $: filteredData = $ProductsData
        .filter((row) => {
            const matchesSearchText = row.some((cell, index) => {
                if (index === 2) return false; // skip image URL
                return cell
                    .toString()
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
            });

            // If 'All Categories' selected or default 'Categories' placeholder, show all
            const matchesCategory =
                !selectedCategory ||
                selectedCategory.value === "all categories" ||
                selectedCategory.value === "categories"
                    ? true
                    : row[8].toLowerCase() ===
                      selectedCategory.value.toLowerCase();

            const matchesStatus =
                !statusCategory ||
                statusCategory.value === "all status" ||
                statusCategory.value === "status"
                    ? true
                    : row[5].toLowerCase() ===
                      statusCategory.value.toLowerCase();

            const matchesStock =
                !stockCategory ||
                stockCategory.value === "all status" ||
                stockCategory.value === "stock"
                    ? true
                    : row[4].toLowerCase() ===
                      stockCategory.value.toLowerCase();

            return (
                matchesSearchText &&
                matchesCategory &&
                matchesStatus &&
                matchesStock
            );
        })
        .sort((a, b): number => {
            if (!selectedSort) return 0;

            switch (selectedSort.value) {
                case "Price": {
                    const priceA = parseFloat(a[3].replace(/[^0-9.]/g, ""));
                    const priceB = parseFloat(b[3].replace(/[^0-9.]/g, ""));
                    return priceA - priceB;
                }
                case "Date Added": {
                    const dateA = new Date(a[7]).getTime();
                    const dateB = new Date(b[7]).getTime();
                    return dateB - dateA;
                }
                case "Product Name":
                    return a[1].localeCompare(b[1]);

                default:
                    return 0;
            }
        });
</script>

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between border-bottom-0">
                <!-- Search Bar -->

                <div class="w-sm-25">
                    <Input
                        class=""
                        type="search"
                        bind:value={searchText}
                        id="search-input"
                        placeholder="Search Product"
                        aria-label="search-product"
                    />
                </div>

                <!-- Filters Section -->

                <Row class="gy-2 w-sm-50">
                    <!-- Category Filter -->

                    <div class="col custom-products-select">
                        <Select
                            items={CategoriesProduct}
                            bind:value={selectedCategory}
                            placeholder="Select Category"
                            clearable={false}
                            class="select-small"
                            showChevron={true}
                        />
                    </div>

                    <!-- Status Filter -->

                    <div class="col custom-products-select">
                        <Select
                            items={StatusProduct}
                            bind:value={statusCategory}
                            placeholder="Select Status"
                            clearable={false}
                            showChevron={true}
                        />
                    </div>

                    <!-- Stock Filter -->

                    <div class="col custom-products-select">
                        <Select
                            items={StockProduct}
                            bind:value={stockCategory}
                            placeholder="Stock"
                            clearable={false}
                            showChevron={true}
                        />
                    </div>

                    <!-- Sort By Filter -->

                    <div class="col custom-products-select">
                        <Select
                            items={FilterProduct}
                            bind:value={selectedSort}
                            clearable={false}
                            showChevron={true}
                        />
                    </div>
                </Row>
            </CardHeader>

            <!-- Table inside the card-body -->

            <CardBody class="p-0">
                <div id="product-table" class="grid-card-table">
                    {#if filteredData.length === 0}
                        <div class="grid-no-data">
                            <p>
                                No products found for "<strong
                                    >{searchText}</strong
                                >".
                            </p>
                        </div>
                    {:else}
                        <Grid
                            columns={[
                                {
                                    name: "#",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                    ) =>
                                        html(`
              <input class="form-check-input" type="checkbox" id="product-${row.cells[0].data}" aria-label="Select product">
            `),
                                },
                                {
                                    name: "Product ID",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                    ) =>
                                        html(`
              <a href="javascript:void(0);">${row.cells[0].data}</a>
            `),
                                },
                                {
                                    name: "Product Name",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                    ) =>
                                        html(`
              <a href="/svelte/vyzor/preview/dashboards/ecommerce/product-details">
                <div class="d-flex align-items-center gap-3 position-relative">
                  <div class="lh-1">
                    <span class="avatar avatar-lg bg-light">
                      <img src="${row.cells[2].data}" alt="Product Image">
                    </span>
                  </div>
                  <div>
                    <span class="d-block fw-semibold">${row.cells[1].data}</span>
                    <span class="text-muted fs-13">${row.cells[8].data}</span>
                  </div>
                </div>
              </a>
            `),
                                },
                                "Price",
                                {
                                    name: "Stock Status",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                    ) =>
                                        html(`
             <span class="badge bg-${row.cells[4].data === "In Stock" ? "success" : "danger"}-transparent">
                ${row.cells[4].data}
              </span>
            `),
                                },
                                {
                                    name: "Quantity",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                    ) => html(`${row.cells[6].data}`),
                                },
                                {
                                    name: "Status",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                    ) =>
                                        html(`
             <span class="text-${
                 row.cells[5].data === "Published"
                     ? "primary"
                     : row.cells[5].data === "Archived"
                       ? "success"
                       : "danger"
             }">${row.cells[5].data}</span>
            `),
                                },
                                "Date Added",
                                {
                                    name: "Actions",
                                    formatter: (
                                        cell: any,
                                        row: {
                                            cells: { data: number | string }[];
                                        },
                                         rowIndex: number,
                                    ) =>
                                        html(`
                                    <a aria-label="anchor" href="/svelte/vyzor/preview/dashboards/ecommerce/product-details" class="btn btn-icon waves-effect waves-light btn-sm btn-success-light rounded-circle">
                                                   <i class="ri-eye-line"></i>
                                                </a>
                                                 
                                   <a aria-label="anchor" href="#!" data-id="${row.cells[0].data}" data-index="${rowIndex}" class="btn btn-delete btn-icon btn-wave waves-effect waves-light btn-sm btn-danger-light rounded-circle">
  <i class="ri-delete-bin-line"></i>
</a>
                                `),
                                },
                            ]}
                            data={filteredData}
                            pagination="{true},"
                            sort={true}
                            language={{
                                noRecordsFound: `No products found for "${searchText}".`,
                            }}
                        />
                    {/if}
                </div>
            </CardBody>
        </Card>
    </Col>
   
</Row>

<style>
    .grid-no-data {
        padding: 2rem;
        text-align: center;
        font-size: 1.1rem;
        color: #777;
    }

    .grid-no-data strong {
        color: #444;
    }
</style>
