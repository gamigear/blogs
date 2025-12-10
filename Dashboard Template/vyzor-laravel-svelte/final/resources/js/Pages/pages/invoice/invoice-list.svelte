<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkInvoicelistcard from "@/shared/@spk/reusable-pages/invoice/spk-invoicelistcard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        invoice1,
        Invoicedata,
        Invoices,
    } from "@/shared/data/pages/invoice/invoicelistdata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { Link } from "@inertiajs/svelte";
    const basePath = __BASE_PATH__;

    function handleRemove(id) {
        Invoices.update((items) => items.filter((item) => item.id !== id));
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>Invoice-List | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Invoice List"
    subTitle="Invoice"
    activepage="Pages"
    page="Invoice List"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    {#each Invoicedata as idx}
        <Col xxl={3} xl={6}>
            <SpkInvoicelistcard list={idx} />
        </Col>
    {/each}
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Manage Invoices</div>
                <div class="d-flex">
                    <Link
                        href={`${basePath}/pages/invoice/create-invoice/`}
                        class="btn btn-sm btn-primary btn-wave waves-light me-2"
                    >
                        <i class="ri-add-line fw-medium align-middle me-1"></i> Create
                        Invoice
                    </Link>
                    <SpkDropdown
                        Color=""
                        Caret={false}
                        ToggleClass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light waves-effect waves-light no-caret"
                        Size="sm"
                        parent={`<i
                            class="ti ti-dots-vertical""
                        ></i>`}
                        option={invoice1}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "Client" },
                        { title: "Invoice ID" },
                        { title: "Issued Date" },
                        { title: "Amount" },
                        { title: "Status" },
                        { title: "Due Date" },
                        { title: "Action" },
                    ]}
                >
                    {#each $Invoices as invoice}
                        <tr class="invoice-list">
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2 lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={invoice.avatar}
                                                alt={invoice.name}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <p class="mb-0 fw-medium">
                                            {invoice.name}
                                        </p>
                                        <p class="mb-0 fs-11 text-muted">
                                            {invoice.email}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="#!" class="fw-medium text-primary">
                                    {invoice.invoiceId}
                                </a>
                            </td>
                            <td>{invoice.issueDate}</td>
                            <td>{invoice.amount}</td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`bg-${invoice.statusColor}-transparent`}
                                >
                                    {invoice.status}
                                </SpkBadge>
                            </td>
                            <td>{invoice.dueDate}</td>
                            <td>
                                <SpkButton
                                    color=""
                                    customClass="btn btn-primary-light btn-icon btn-sm"
                                >
                                    <i class="ri-printer-line"></i>
                                </SpkButton>
                                <SpkButton
                                    color=""
                                    onclickfunc={() => handleRemove(invoice.id)}
                                    customClass="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn"
                                >
                                    <i class="ri-delete-bin-5-line"></i>
                                </SpkButton>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0">
                <div class="ms-auto">
                    <nav
                        aria-label="Page navigation"
                        class="pagination-style-2"
                    >
                        <Pagination
                            class="mb-0 flex-wrap d-flex justify-content-end customPaginationPageBottom"
                        >
                            <PaginationItem disabled>
                                <PaginationLink href="#!">Prev</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#!">1</PaginationLink
                                ></PaginationItem
                            >
                            <PaginationItem>
                                <PaginationLink href="#!">2</PaginationLink
                                ></PaginationItem
                            >
                            <PaginationItem>
                                <PaginationLink href="#!"
                                    ><i class="bi bi-three-dots"
                                    ></i></PaginationLink
                                ></PaginationItem
                            >
                            <PaginationItem>
                                <PaginationLink href="#!">17</PaginationLink
                                ></PaginationItem
                            >
                            <PaginationItem
                                ><PaginationLink href="#!" class="text-primary"
                                    >Next</PaginationLink
                                ></PaginationItem
                            >
                        </Pagination>
                    </nav>
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
