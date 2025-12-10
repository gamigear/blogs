<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkListcard from "@/shared/@spk/application-reusable/spk-listcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        TransactionCard,
        TransactionsTable,
    } from "@/shared/data/dashboards/crypto/transactiondata";
    import { DropdownToday } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";

    let Transactions = TransactionsTable;

    const handleRemove = (id) => {
        Transactions = Transactions.filter((item) => item.id !== id);
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>Transactions | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Transactions"
    subTitle="Crypto"
    activepage="Dashboards"
    page="Transactions"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    {#each TransactionCard as idx, index}
        <Col xxl={3} lg={6}>
            <SpkListcard
                titleClass="mb-2 fs-12"
                listCard={true}
                cardClass={idx.cardClass}
                list={idx}
            />
        </Col>
    {/each}
</Row>

<!--End::row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Transaction History</div>
                <div class="d-flex flex-wrap gap-2 custom-crypto">
                    <div>
                        <Input
                            class=""
                            type="search"
                            placeholder="Search Here"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <SpkDropdown
                        option={DropdownToday}
                        ToggleClass="btn btn-primary btn-wave waves-effect waves-light no-caret"
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        Caret={true}
                    />
                    <div>
                        <SpkButton color="secondary" customClass="btn btn-wave"
                            >View All</SpkButton
                        >
                    </div>
                </div>
            </CardHeader>
            {#if Transactions.length === 0}
                <div class="grid-no-data text-center mt-2">
                    <p>
                        No Transaction History <strong></strong>.
                    </p>
                </div>
            {:else}
                <CardBody class="p-0">
                    <SpkTablescomponent
                        tableClass="text-nowrap"
                        Responsive={true}
                        header={[
                            { title: "" },
                            { title: "Sender" },
                            { title: "Transaction Hash" },
                            { title: "Coin" },
                            { title: "Date" },
                            { title: "Amount" },
                            { title: "Receiver" },
                            { title: "Status" },
                            { title: "Actions" },
                        ]}
                    >
                        {#each Transactions as txn}
                            <tr>
                                <td class={txn.borderClass}>
                                    <span
                                        class={`avatar avatar-sm avatar-rounded ${txn.direction === "up" ? "bg-success-transparent" : "bg-danger-transparent"}`}
                                    >
                                        <i
                                            class={`ti ti-arrow-narrow-${txn.direction} text-${txn.direction === "up" ? "success" : "danger"} fw-medium fs-16`}
                                        ></i>
                                    </span>
                                </td>
                                <td class={txn.borderClass}>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <span
                                            class="avatar avatar-xs avatar-rounded"
                                        >
                                            <Image
                                                src={txn.user.avatar}
                                                alt={txn.user.name}
                                            />
                                        </span>
                                        <div class="fw-medium">
                                            {txn.user.name}
                                        </div>
                                    </div>
                                </td>
                                <td class={txn.borderClass}
                                    ><span>{txn.id}</span></td
                                >
                                <td class={txn.borderClass}>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <span
                                            class="avatar avatar-xs avatar-rounded"
                                        >
                                            <Image
                                                src={txn.crypto.icon}
                                                alt={txn.crypto.name}
                                            />
                                        </span>
                                        <div class="fw-medium">
                                            {txn.crypto.name}
                                        </div>
                                    </div>
                                </td>
                                <td class={txn.borderClass}
                                    ><span>{txn.date}</span></td
                                >
                                <td class={txn.borderClass}
                                    ><span>{txn.amount}</span></td
                                >
                                <td class={txn.borderClass}
                                    ><span>{txn.recipient}</span></td
                                >
                                <td class={txn.borderClass}>
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`bg-${txn.statusColor}-transparent`}
                                        >{txn.status}</SpkBadge
                                    >
                                </td>
                                <td class={txn.borderClass}>
                                    <SpkButton
                                        id={`transactions_Dash-${txn.toolId}`}
                                        color=""
                                        customClass="btn btn-icon btn-sm btn-primary-light"
                                    >
                                        <i class="ri-download-2-line"></i>
                                    </SpkButton>
                                    <SpkTooltips
                                        content="Download"
                                        placement="top"
                                        targetId={`transactions_Dash-${txn.toolId}`}
                                    ></SpkTooltips>
                                    <SpkButton
                                        color=""
                                        id={`transactions1-${txn.toolId}`}
                                        onclickfunc={() => handleRemove(txn.id)}
                                        customClass="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"
                                    >
                                        <i class="ri-delete-bin-5-line"></i>
                                    </SpkButton>
                                    <SpkTooltips
                                        content="Delete"
                                        placement="top"
                                        targetId={`transactions1-${txn.toolId}`}
                                    ></SpkTooltips>
                                </td>
                            </tr>
                        {/each}
                    </SpkTablescomponent>
                </CardBody>
                <CardFooter class="">
                    <nav
                        aria-label="Page navigation"
                        class="pagination-style-2"
                    >
                        <Pagination
                            class="mb-0 flex-wrap justify-content-end d-flex customPaginationPageBottom"
                        >
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    on:click={(e) => e.preventDefault()}
                                    >Prev</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    on:click={(e) => e.preventDefault()}
                                    >1</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink
                                    href="#"
                                    on:click={(e) => e.preventDefault()}
                                    >2</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    on:click={(e) => e.preventDefault()}
                                    ><i class="bi bi-three-dots"
                                    ></i></PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    on:click={(e) => e.preventDefault()}
                                    >17</PaginationLink
                                >
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    on:click={(e) => e.preventDefault()}
                                    class="text-primary">Next</PaginationLink
                                >
                            </PaginationItem>
                        </Pagination>
                    </nav>
                </CardFooter>
            {/if}
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->
