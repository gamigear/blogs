<template>
<div class="card custom-card">
    <div class="card-header justify-content-between border-bottom-0">
        <!-- Search Bar -->
        <div class="w-sm-25 w-100 w-sm-auto">
            <input class="form-control" type="search" id="search-input" placeholder="Search Product" v-model="searchQuery" aria-label="search-product" />
        </div>

        <!-- Filters Section -->
        <div class="row gy-2 w-sm-50">
            <!-- Category Filter -->
            <div class="col-sm col-12">
                <VueMultiselect :searchable="true" :show-labels="false" placeholder="Select Category" v-model="CategoriesValue" :options="Categories" />
            </div>

            <!-- Status Filter -->
            <div class="col-sm col-12">
                <VueMultiselect :searchable="true" :show-labels="false" placeholder="Select Status" v-model="StatusValue" :options="Status" :multiple="false" />
            </div>

            <!-- Stock Filter -->
            <div class="col-sm col-12">
                <VueMultiselect :searchable="true" :show-labels="false" placeholder="Select Stock" v-model="StockValue" :options="Stock" :multiple="false" />
            </div>

            <!-- Sort By Filter -->
            <div class="col-sm col-12">
                <VueMultiselect :searchable="true" :show-labels="false" placeholder="Sort By" v-model="SortValue" :options="Sort" :multiple="false" />
            </div>
        </div>
    </div>

    <!-- Table -->
    <div class="card-body p-0">
        <div id="product-table" class="grid-card-table">
            <table-lite :has-checkbox="true" :is-loading="table.isLoading" :is-re-search="table.isReSearch" :columns="table.columns" :rows="table.rows" :row-classes="table.rowClasses" :total="table.totalRecordCount" :sortable="table.sortable" :messages="table.messages" @do-search="doSearch" @is-finished="tableLoadingFinish" @return-checked-rows="updateCheckedRows" />
        </div>
    </div>
</div>
</template>

<script>
import {
    defineComponent,
    reactive,
    ref,
    watch,
    onMounted
} from "vue";
import TableLite from "vue3-table-lite";
import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import {
    ProductTableData
} from "../../../../data/dashboards/ecommerce/productsdata";

export default defineComponent({
    name: "ProductTable",
    components: {
        TableLite,
        VueMultiselect,
    },
    setup() {
        const searchQuery = ref("");
        const CategoriesValue = ref("All Categories");
        const Categories = ["All Categories", "Fashion", "Home", "Electronics"];

        const StatusValue = ref("All Status");
        const Status = ["All Status", "Published", "Draft", "Archived"];

        const StockValue = ref("All Stock");
        const Stock = ["All Stock", "In Stock", "Out of Stock"];

        const SortValue = ref("Date Added");
        const Sort = ["Date Added", "Price", "Product Name"];

        const table = reactive({
            isLoading: false,
            isReSearch: false,
            rows: [],
            totalRecordCount: 0,
            rowClasses: (row) => (row.id === 1 ? ["aaa", "is-id-one"] : ["bbb", "other"]),
            columns: [{
                    label: "Product ID",
                    field: "id",
                    width: "20%",
                    sortable: true,
                    isKey: true,
                    display: (row) => `<span><a href="javascript:void(0);">${row.id}</a></span>`
                },
                {
                    label: "Product Name",
                    field: "name",
                    width: "20%",
                    sortable: true,
                    display: (row) => `
            <span>
                <a to="/dashboards/ecommerce/product-details">
                    <div class="d-flex align-items-center gap-3 position-relative">
                        <div class="lh-1">
                            <span class="avatar avatar-lg bg-light">
                                <img src="${row.image}" alt="Product Image">
                            </span>
                        </div>
                        <div>
                            <span class="d-block fw-semibold">${row.name}</span>
                            <span class="text-muted fs-13">${row.category}</span>
                        </div>
                    </div>
                </a>
            </span>
          `,
                },
                {
                    label: "Price",
                    field: "price",
                    width: "10%",
                    sortable: true,

                },
                {
                    label: "Stock Status",
                    field: "stockStatus",
                    width: "15%",
                    sortable: true,
                    display: (row) => `<span><span class="badge bg-${row.stockStatusColor ? 'success' : 'danger'}-transparent">${row.stockStatus}</span></span>`
                },
                {
                    label: "Quantity",
                    field: "sales",
                    width: "15%",
                    sortable: true,
                    display: (row) => `<span>${row.sales}</span>`
                },
                {
                    label: "Status",
                    field: "status",
                    width: "15%",
                    sortable: true,
                    display: (row) => `<span><span class="text-${row.statusColor}">${row.status}</span></span>`
                },
                {
                    label: "Date Added",
                    field: "date",
                    width: "15%",
                    sortable: true
                },
                {
                    label: "Actions",
                    field: "#",
                    width: "10%",
                    sortable: false,
                    display: () => `
            <span>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light border" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu" style="">
                        <li><a class="dropdown-item" href="/dashboards/ecommerce/product-details"><i class="ri-eye-line me-2"></i>View</a></li>
                        <li><a class="dropdown-item btn-delete" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li>
                    </ul>
                </div>
            </span>
          `,
                },
            ],
            sortable: {
                order: "id",
                sort: "asc",
            },
            messages: {
                pagingInfo: "Showing {0}-{1} of {2}",
                pageSizeChangeLabel: "Row count:",
                gotoPageLabel: "Go to page:",
                noDataAvailable: "Data is not Found",
            },
        });

        const doSearch = (offset = 0, limit = 10, order = "id", sort = "asc") => {
            table.isLoading = false;

            setTimeout(() => {
                let filtered = [...ProductTableData];

                // Search Filter
                if (searchQuery.value.trim()) {
                    const query = searchQuery.value.toLowerCase();
                    filtered = filtered.filter((item) => item.name.toLowerCase().includes(query));
                }

                // Category Filter
                if (CategoriesValue.value !== "All Categories") {
                    filtered = filtered.filter((item) => item.category === CategoriesValue.value);
                }

                // Status Filter
                if (StatusValue.value !== "All Status") {
                    filtered = filtered.filter((item) => item.status === StatusValue.value);
                }

                // Stock Filter
                if (StockValue.value !== "All Stock") {
                    filtered = filtered.filter((item) => item.stock === StockValue.value);
                }

                // Sorting based on selected "Sort By" option
                let sortField = order;
                if (SortValue.value === "Price") sortField = "price";
                else if (SortValue.value === "Product Name") sortField = "name";
                else if (SortValue.value === "Date Added") sortField = "date";

                filtered.sort((a, b) => {
                    const aValue = a[sortField];
                    const bValue = b[sortField];

                    // Ensure proper sorting for numerical fields like "price" or "quantity"
                    if (typeof aValue === "number" && typeof bValue === "number") {
                        return sort === "asc" ? aValue - bValue : bValue - aValue;
                    }

                    // For string fields, compare lexicographically
                    if (aValue < bValue) return sort === "asc" ? -1 : 1;
                    if (aValue > bValue) return sort === "asc" ? 1 : -1;
                    return 0;
                });

                table.rows = filtered.slice(offset, offset + limit);
                table.totalRecordCount = filtered.length;
                table.sortable.order = sortField;
                table.sortable.sort = sort;
                table.isReSearch = false;
                table.isLoading = false;
            }, 500);
        };

        const tableLoadingFinish = () => {
            // Handle table load completion
        };

        const updateCheckedRows = (rowsKey) => {
            console.log("Checked Rows:", rowsKey);
        };

        // Watch filters
        watch(
            [searchQuery, CategoriesValue, StatusValue, StockValue, SortValue],
            () => {
                doSearch(0, 10, table.sortable.order, table.sortable.sort);
            }
        );

        onMounted(() => {
            doSearch(0, 10, "id", "asc");
        });

        return {
            table,
            doSearch,
            tableLoadingFinish,
            updateCheckedRows,
            searchQuery,
            CategoriesValue,
            Categories,
            StatusValue,
            Status,
            StockValue,
            Stock,
            SortValue,
            Sort,
        };
    },
});
</script>

<style scoped>
/* .card {
    margin: 20px;
} */
</style>
