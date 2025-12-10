<template>
<div class="card custom-card">
    <div class="card-header justify-content-between border-bottom-0">
        <!-- Search Bar -->
        <div class="w-sm-25">
            <input class="form-control" type="search" id="search-input" placeholder="Search Product" v-model="searchQuery" aria-label="search-product" />
        </div>

        <!-- Filters Section -->
        <div class="d-flex gap-4 flex-wrap w-sm-50 justify-content-end flex-fill">
            <!-- Export Dropdown -->
            <div>
                <div class="dropdown d-grid">
                    <button class="btn btn-primary-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-upload-2-line me-1"></i>Export
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-earmark-excel me-2"></i>Excel</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-earmark-excel me-2"></i>Csv</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-filetype-pdf me-2"></i>PDF</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-zip me-2"></i>Zip</a></li>
                    </ul>
                </div>
            </div>

            <!-- Category Filter -->
            <div>
                <VueMultiselect :searchable="true" :show-labels="false" placeholder="Select Category" v-model="CategoriesValue" :options="Categories" />
            </div>

            <!-- Status Filter -->
            <div>
                <VueMultiselect :searchable="true" :show-labels="false" id="blockchain" placeholder="Choose Status" :multiple="false" v-model="StatusValue" :options="Status" :taggable="false">
                </VueMultiselect>
            </div>
        </div>
    </div>

    <!-- Table inside the card-body -->
    <div class="card-body p-0">
        <div id="orders-table" class="grid-card-table">
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
    initialOrders
} from "../../../../data/dashboards/ecommerce/ordersdata";

export default defineComponent({
    name: "ProductTable",
    components: {
        TableLite,
        VueMultiselect,
    },
    setup() {
        const searchQuery = ref('');
        const CategoriesValue = ref('All Status'); // Default category filter value
        const StatusValue = ref('All Status'); // Default status filter value
        const SortValue = ref('Date Added'); // Default sort value
        const orders = ref([...initialOrders]);

        const Categories = [
            'Payment Status',
            'All Status',
            'Cancelled',
            'Completed',
            'Failed',
            'Pending',
            'Refunded',
        ];

        const Status = [
            'Delivery Status',
            'All Status',
            'Pending',
            'Shipped',
            'Delivered',
            'Cancelled'
        ];
        

        const table = reactive({
            isLoading: false,
            isReSearch: false,
            rows: [],
            totalRecordCount: 0,
            rowClasses: (row) => (row.id === 1 ? ["aaa", "is-id-one"] : ["bbb", "other"]),
            columns: [{
                    label: "Order ID",
                    field: "orderId",
                    width: "20%",
                    sortable: true,
                    isKey: true,
                    display: (row) => `<span><a href="javascript:void(0);" class="text-primary text-decoration-underline">${row.orderId}</a></span>`
                },
                {
                    label: "Customer",
                    field: "customerName",
                    width: "20%",
                    sortable: true,
                    display: (row) => `<span>
            <a to="/dashboards/ecommerce/product-details">
                        <div class="d-flex align-items-center gap-3 position-relative">
                            <div class="lh-1">
                                <span class="avatar avatar-md avatar-rounded">
                                    <img src="${row.avatar}" alt="User Image">
                                </span>
                            </div>
                            <div>
                                <span class="d-block fw-semibold">${row.customerName}</span>
                                <span class="text-muted fs-13">${row.email}</span>
                            </div>
                        </div>
                    </a>
                  </span>`
                },
                {
                    label: "Price",
                    field: "amount",
                    width: "15%",
                    sortable: true,
                },
                {
                    label: "Delivery Status",
                    field: "shippingStatus",
                    width: "15%",
                    sortable: true,
                    display: (row) => `<span><span class="badge bg-${row.shippingStatusColor}-transparent">${row.shippingStatus}</span></span>`
                },
                {
                    label: "Payment Method",
                    field: "paymentMethod",
                    width: "15%",
                    sortable: true,
                },
                {
                    label: "Payment Status",
                    field: "paymentStatus",
                    width: "15%",
                    sortable: true,
                    display: (row) => `<span><span class="text-${row.paymentStatusColor}"><i class="ri-circle-fill me-1 fs-10"></i>${row.paymentStatus}</span></span>`
                },
                {
                    label: "Ordered Date",
                    field: "orderDate",
                    width: "15%",
                    sortable: true,
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
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li>
                  <li><a class="dropdown-item btn-delete" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li>
                </ul>
              </div>
            </span>`
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
                noDataAvailable: "No data",
            },
        });

        const doSearch = (offset = 0, limit = 10, order = "id", sort = "asc") => {
            table.isLoading = false;

            setTimeout(() => {
                let filtered = [...initialOrders];

                // Search Filter
                if (searchQuery.value.trim()) {
                    const query = searchQuery.value.toLowerCase();
                    filtered = filtered.filter((item) => item.customerName.toLowerCase().includes(query)); // Corrected to customerName
                }

                // Category Filter
                if (CategoriesValue.value && CategoriesValue.value !== "All Status") {
                    filtered = filtered.filter((item) => item.paymentStatus === CategoriesValue.value); // Adjust field accordingly
                }

                // Status Filter
                if (StatusValue.value && StatusValue.value !== "All Status") {
                    filtered = filtered.filter((item) => item.shippingStatus === StatusValue.value); // Adjust field accordingly
                }

                filtered.sort((a, b) => {
                    const aValue = a[order];
                    const bValue = b[order];

                    if (typeof aValue === "number" && typeof bValue === "number") {
                        return sort === "asc" ? aValue - bValue : bValue - aValue;
                    }

                    if (aValue < bValue) return sort === "asc" ? -1 : 1;
                    if (aValue > bValue) return sort === "asc" ? 1 : -1;
                    return 0;
                });

                table.rows = filtered.slice(offset, offset + limit);
                table.totalRecordCount = filtered.length;
                table.sortable.order = order;
                table.sortable.sort = sort;
                table.isLoading = false;
            }, 500);
        };

        watch([searchQuery, CategoriesValue, StatusValue], () => {
            doSearch(0, 10, table.sortable.order, table.sortable.sort);
        });

        onMounted(() => {
            doSearch(0, 10, "id", "asc");
        });

        return {
            table,
            doSearch,
            searchQuery,
            CategoriesValue,
            StatusValue,
            Categories,
            Status,
        };
    },
});
</script>
