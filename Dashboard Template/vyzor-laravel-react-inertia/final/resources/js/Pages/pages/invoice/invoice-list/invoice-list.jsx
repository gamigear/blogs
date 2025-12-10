
import { Link } from "@inertiajs/react";
import SpkBadge from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkDropdown from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import SpkInvoiceListCard from "../../../../shared/@spk-reusable-components/reusable-pages/invoice/spk-invoicelistcard";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import { Invoicedata, Invoices } from "../../../../shared/data/pages/invoice/invoicelistdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Image, Pagination, Row } from "react-bootstrap";
import MainLayout from "@/Layouts/layout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const InvoiceList = () => {

    const [allData, SetallData] = useState(Invoices);
    const handleRemove = (id) => {
        const List = allData.filter((item) => item.id !== id);
        SetallData(List);
    }

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Invoice-List" />

            <Pageheader title="Pages" subtitle="Invoice" currentpage="Invoice List" activepage="Invoice List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                {Invoicedata.map((idx, index) => (
                    <Col xxl={3} xl={6} key={index}>
                        <SpkInvoiceListCard list={idx} />
                    </Col>
                ))}
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Manage Invoices
                            </div>
                            <div className="d-flex">
                                <Link href={`${__APP_BASE_PATH__}/pages/invoice/create-invoice/`} className="btn btn-sm btn-primary btn-wave waves-light me-2">
                                    <i className="ri-add-line fw-medium align-middle me-1"></i> Create Invoice
                                </Link>
                                <SpkDropdown toggleas="button" Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical" Toggletext="">
                                    <Dropdown.Item as="li" href="#!">All Invoices</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Invoices</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Pending Invoices</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Overdue Invoices</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive custom-invoice-list">
                                <SpkTables tableClass="text-nowrap" header={[{ title: 'Client' }, { title: 'Invoice ID' }, { title: 'Issued Date' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Action' }]}>
                                    {allData.map((invoice) => (
                                        <tr key={invoice.id} className="invoice-list">
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <BaseImage src={invoice.avatar} alt={invoice.name} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{invoice.name}</p>
                                                        <p className="mb-0 fs-11 text-muted">{invoice.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <BaseLink href="#!" className="fw-medium text-primary">
                                                    {invoice.invoiceId}
                                                </BaseLink>
                                            </td>
                                            <td>{invoice.issueDate}</td>
                                            <td>{invoice.amount}</td>
                                            <td>
                                                <SpkBadge variant="" Customclass={`bg-${invoice.statusColor}-transparent`}>
                                                    {invoice.status}
                                                </SpkBadge>
                                            </td>
                                            <td>{invoice.dueDate}</td>
                                            <td>
                                                <SpkButton Buttonvariant="" Customclass="btn btn-primary-light btn-icon btn-sm me-1">
                                                    <i className="ri-printer-line"></i>
                                                </SpkButton>
                                                <SpkButton Buttonvariant="" onClickfunc={() => handleRemove(invoice.id)} Customclass="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn">
                                                    <i className="ri-delete-bin-5-line"></i>
                                                </SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0 ">
                            <div className="ms-auto">
                                <nav aria-label="Page navigation" className="pagination-style-2 ">
                                    <Pagination className="mb-0 flex-wrap justify-content-end">
                                        <Pagination.Prev disabled>Prev</Pagination.Prev>
                                        <Pagination.Item>1</Pagination.Item>
                                        <Pagination.Item active>2</Pagination.Item>
                                        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Next className="text-primary">Next</Pagination.Next>
                                    </Pagination>
                                </nav>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};
// Assign layout
InvoiceList.layout = (page) => <MainLayout>{page}</MainLayout>;
export default InvoiceList;
