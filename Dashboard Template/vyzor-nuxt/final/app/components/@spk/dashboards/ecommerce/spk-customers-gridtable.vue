<template>
<div class="card custom-card">
    <div class="card-header justify-content-between border-bottom-0">
        <!-- Search Bar -->
        <div class="w-sm-25">
            <input class="form-control" type="search" id="search-input" placeholder="Search Customer" v-model="searchQuery" aria-label="search-product" />
        </div>

        <!-- Filters Section -->
        <div class="d-flex gap-4 flex-wrap w-sm-50 justify-content-start justify-content-sm-end">
            <!-- Category Filter (Single Multiselect) -->
            <div class="custom-customers-select">
                <VueMultiselect :searchable="true" :show-labels="false" placeholder="All Status" v-model="selectedFilter" :options="Categories" :taggable="false" />
            </div>

            <div class="">
                <div class="dropdown d-grid">
                    <button class="btn btn-primary-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                        <i class="ri-upload-2-line me-1"></i>Export
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);" data-popper-placement="bottom-start">
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-earmark-excel me-2"></i>Excel</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-earmark-excel me-2"></i>Csv</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-filetype-pdf me-2"></i>PDF</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-zip me-2"></i>Zip</a></li>
                    </ul>
                </div>
            </div>

            <!-- Add Customer Button -->
            <div class="d-grid">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addtask">
                    <i class="ri ri-add-line me-1"></i>Add Customer
                </button>
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
    CustomerTable
} from "../../../../data/dashboards/ecommerce/customersdata";

export default defineComponent({
    name: "ProductTable",
    components: {
        TableLite,
        VueMultiselect,
    },
    setup() {
        const searchQuery = ref('');
        const selectedFilter = ref(''); // for selected filter value
        const Categories = ['All Status', 'Active', 'Blocked'];

        const table = reactive({
            isLoading: false,
            isReSearch: false,
            rows: [],
            totalRecordCount: 0,
            rowClasses: (row) => (row.id === 1 ? ["aaa", "is-id-one"] : ["bbb", "other"]),
            columns: [{
                    label: "Customer ID",
                    field: "ip",
                    width: "20%",
                    sortable: true,
                    isKey: true,
                    display: (row) => `<span><a href="javascript:void(0);">${row.ip}</a></span>`
                },
                {
                    label: "Customer Name",
                    field: "name",
                    width: "20%",
                    sortable: true,
                    display: (row) => `<span>
            <div class="d-flex align-items-center gap-3 position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="lh-1">
                            <span class="avatar avatar-md">
                                <img src="${row.avatar}" alt="Customer Image">
                            </span>
                        </div>
                        <div>
                            <span class="d-block fw-semibold">${row.name}</span>
                            <span class="text-muted fs-13">${row.email}</span>
                        </div>
                    </div>
                    </span>`
                },
                {
                    label: "Status",
                    field: "status",
                    width: "15%",
                    sortable: true,
                    display: (row) => `<span><span class="badge bg-${row.status == 'Active' ? 'success': 'danger'}-transparent">${row.status}</span></span>`
                },
                {
                    label: "Date Added",
                    field: "joinedDate",
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
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li>
                            <li><a class="dropdown-item btn-delete" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li>
                        </ul>
                    </div>
                </span>
          `
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
                let filtered = [...CustomerTable];

                // Search Filter
                if (searchQuery.value.trim()) {
                    const query = searchQuery.value.toLowerCase();
                    filtered = filtered.filter((item) => item.name.toLowerCase().includes(query));
                }

                // Category Filter (Single filter for All Status)
                if (selectedFilter.value && selectedFilter.value !== "All Status") {
                    filtered = filtered.filter((item) => item.status === selectedFilter.value);
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

        watch(
            [searchQuery, selectedFilter],
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
            searchQuery,
            selectedFilter,
            Categories,
        };
    },
});
</script>
