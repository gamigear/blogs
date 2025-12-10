
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Image, Modal, Pagination, Row } from "react-bootstrap";
import { Leadsdata, LeadsSelect, StatusSelect, Tagselect } from "../../../../shared/data/dashboards/crm/leadsdata";
import { Head } from "@inertiajs/react";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkDropdown from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import MainLayout from "@/Layouts/layout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";


const Leads = () => {

    const [leadsloopData, setLeadsloopData] = useState(Leadsdata);

    const handleDelete = (id) => {
        const updatedData = leadsloopData.filter((idx) => idx.id !== id);
        setLeadsloopData(updatedData);

    };

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //image upload
    //upload image
    const [avatar, setAvatar] = useState('');
    const fileInputRef = useRef(null);

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const onFileSelected = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setAvatar(e.target.result);
            };
        }
    };
    //
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxClick = (id) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(leadsloopData.map((contact) => contact.id));
        } else {
            setSelectedItems([]);
        }
    };
    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Dashboards-Leads" />

            <Pageheader title="Dashboards" subtitle="CRM" currentpage="Leads" activepage="Leads" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div className="card-title">
                                Leads
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Customclass="btn" onClickfunc={handleShow}><i className="ri-add-line me-1 fw-medium align-middle"></i>Create Lead</SpkButton>
                                <SpkButton Buttonvariant="success" Customclass="btn">Export As CSV</SpkButton>
                                <SpkDropdown toggleas="a"  Customtoggleclass="btn btn-light btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item href="#!">Date Added</Dropdown.Item>
                                    <Dropdown.Item href="#!">A - Z</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap leads-table" onChange={handleSelectAll} checked={selectedItems.length === leadsloopData.length} showCheckbox={true} Customcheckclass="check-all" header={[{ title: 'Contact Name' }, { title: "Email" }, { title: 'Phone' }, { title: 'Lead Status' }, { title: 'Company' }, { title: 'Lead Source' }, { title: 'Tags' }, { title: 'Actions' }]} >
                                    {leadsloopData.map(contact => (
                                        <tr key={contact.id} className="crm-contact">
                                            <td>
                                                <Form.Check type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."
                                                    onChange={() => handleCheckboxClick(contact.id)}
                                                    checked={selectedItems.includes(contact.id)}
                                                />
                                                {/*<input className="form-check-input" type="checkbox" id={`checkboxNoLabel${contact.id}`} value="" aria-label="..." />*/}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <BaseImage src={contact.avatar} alt={contact.name} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{contact.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1">
                                                        <i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>
                                                        {contact.email}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block">
                                                        <i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>
                                                        {contact.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="" Customclass="badge bg-light text-default">{contact.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <BaseImage src={contact.companyLogo} alt={contact.companyName} />
                                                        </span>
                                                    </div>
                                                    <div>{contact.companyName}</div>
                                                </div>
                                            </td>
                                            <td>{contact.source}</td>
                                            <td>
                                                <div className="d-flex align-items-center flex-wrap gap-1">
                                                    {contact.tags.map((tag, i) => (
                                                        <SpkBadge variant="" key={i} Customclass={`badge bg-${tag.color}`}>
                                                            {tag.label}
                                                        </SpkBadge>
                                                    ))}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="" Customclass="btn btn-sm btn-warning-light btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="" Customclass="btn btn-sm btn-info-light btn-icon">
                                                        <i className="ri-pencil-line"></i>
                                                    </SpkButton>
                                                    <SpkButton onClickfunc={() => handleDelete(contact.id)} Buttonvariant="" Customclass="btn btn-sm btn-danger-light btn-icon contact-delete">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center flex-wrap">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="mb-0">
                                            <Pagination.Prev disabled> Prev</Pagination.Prev>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Next className="text-primary"> Next</Pagination.Next>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Create Contact --> */}

            <Modal className="fade" centered id="create-contact" tabIndex={-1} show={show} onHide={handleClose}>
                <Modal.Header>
                    <h6 className="modal-title">Create Lead</h6>
                    <SpkButton Buttontype="button" Buttonvariant="" onClickfunc={handleClose} Customclass="btn-close" Buttondismiss="modal" Buttonlabel="Close" />
                </Modal.Header>
                <Modal.Body>
                    <Row className="gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                {avatar ? (
                                        <Image src={avatar} alt="Avatar" className="avatar" loading="lazy" />
                                    ) : (
                                        <BaseImage src="/build/assets/images/faces/9.jpg" alt="" id="profile-img" />
                                    )}
                                    <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge" Onclickfun={triggerFileInput}>
                                        <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={onFileSelected} style={{ display: 'none' }} />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-name" className="">Contact Name</Form.Label>
                            <Form.Control type="text" className="" id="contact-name" placeholder="Contact Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-mail" className="">Email</Form.Label>
                            <Form.Control type="email" className="" id="contact-mail" placeholder="Enter Email" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-phone" className="">Phone No</Form.Label>
                            <Form.Control type="tel" className="" id="contact-phone" placeholder="Enter Phone Number" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-name" className="">Company Name</Form.Label>
                            <Form.Control type="text" className="" id="company-name" placeholder="Company Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="">Lead Status</Form.Label>
                            <SpkSelect name="colors" option={StatusSelect} placeholder="Select Status" menuplacement='auto' classNameprefix="Select2" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="">Lead Source</Form.Label>
                            <SpkSelect name="colors" option={LeadsSelect} menuplacement='auto' classNameprefix="Select2" defaultvalue={[LeadsSelect[0]]} />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="">Tags</Form.Label>
                            <SpkSelect multi name="colors" option={Tagselect} menuplacement='auto' classNameprefix="Select2" placeholder="Select Tag" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <SpkButton Buttonvariant="light" Buttontype="button" Customclass="m-0 me-2" onClickfunc={handleClose}
                        Buttondismiss="modal">Cancel</SpkButton>
                    <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="m-0 ">Create Contact</SpkButton>
                </Modal.Footer>
            </Modal>

            {/* <!-- End:: Create Contact --> */}

        </Fragment>
    )
};

Leads.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Leads;
