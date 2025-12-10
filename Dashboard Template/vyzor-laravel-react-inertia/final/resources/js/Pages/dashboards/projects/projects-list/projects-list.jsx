
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Form, Image, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link, Head } from "@inertiajs/react";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { AvatarImages, projectData, Projectselectdata } from "../../../../shared/data/dashboards/projects/projectlistdata";
import SpkButton from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import SpkDropdown from "../../../../shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import MainLayout from "@/Layouts/layout";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const ProjectsList = () => {

    const statusBadgeClass = {
        "In Progress": "bg-info-transparent",
        "Completed": "bg-success-transparent",
        "Delayed": "bg-warning-transparent",
        "Not Started": "bg-light text-default"
    };

    const priorityColorClass = {
        High: "text-danger",
        Medium: "text-info",
        Low: "text-primary"
    };

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Projects-Projects List" />

            <Pageheader title="Dashboards" subtitle="Projects" currentpage="Projects List" activepage="Projects List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1 project-list-main">
                                    <Link href={`${__APP_BASE_PATH__}/dashboards/projects/create-project`} className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Project</Link>
                                    <SpkSelect name="colors" option={Projectselectdata} mainClass="projects-sort basic-multi-select" menuplacement='auto' classNameprefix="Select2" placeholder="Sort By" />
                                </div>
                                <div className="avatar-list-stacked">
                                    {AvatarImages.map((src, index) => (
                                        <span className="avatar avatar-sm avatar-rounded" key={index}>
                                            <BaseImage src={src} alt={`avatar-${index + 1}`} />
                                        </span>
                                    ))}
                                    <BaseLink className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                        +8
                                    </BaseLink>
                                </div>
                                <div className="d-flex custom-search-list" role="search">
                                    <Form.Control className="me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <SpkButton Buttonvariant="light" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: 'Project Name' }, { title: "Client Name" }, { title: 'Start Date' }, { title: 'End Date' }, { title: 'Status' }, { title: 'Budget (USD)' }, { title: 'Assigned Team' }, { title: 'Priority' }, { title: 'Actions' }]} >
                                    {projectData.map((project, index) => (
                                        <tr key={index}>
                                            <td>{project.name}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <BaseImage width={20} height={20} src={project.companyLogo} alt="logo" />
                                                        </span>
                                                    </div>
                                                    <div>{project.companyName}</div>
                                                </div>
                                            </td>
                                            <td>{project.startDate}</td>
                                            <td>{project.endDate}</td>
                                            <td>
                                                <SpkBadge variant="" Customclass={`${statusBadgeClass[project.status]}`}>
                                                    {project.status}
                                                </SpkBadge>
                                            </td>
                                            <td>{project.budget}</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {project.team.map((avatar, idx) => (
                                                        <span key={idx} className="avatar avatar-sm avatar-rounded">
                                                            <BaseImage src={avatar} alt="img" />
                                                        </span>
                                                    ))}
                                                    {project.extraTeam > 0 && (
                                                        <BaseLink className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +{project.extraTeam}
                                                        </BaseLink>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`${priorityColorClass[project.priority]} d-flex align-items-center`}>
                                                    <i className="ri-circle-fill me-1 fs-10 lh-1"></i>{project.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <SpkDropdown toggleas="a" Icon={true} Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" IconClass="fe fe-more-vertical">
                                                    <Dropdown.Item href="#!"><i className="ti ti-eye me-1 d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ti ti-edit me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ti ti-trash me-1 d-inline-block"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div> Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-2">
                                        <Pagination className="mb-0 flex-wrap">
                                            <Pagination.Prev disabled>Prev</Pagination.Prev>
                                            <Pagination.Item>1</Pagination.Item>
                                            <Pagination.Item active>2</Pagination.Item>
                                            <Pagination.Item><i className='bi bi-three-dots'></i></Pagination.Item>
                                            <Pagination.Item>17</Pagination.Item>
                                            <Pagination.Next className="text-primary">Next</Pagination.Next>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* <!-- End::row-2 --> */}
        </Fragment>
    )
};
// Assign layout
ProjectsList.layout = (page) => <MainLayout>{page}</MainLayout>;
export default ProjectsList;
