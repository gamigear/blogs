
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import BaseLink from "@/shared/layouts-components/baselink/baselink";


const SpkJobDetails = ({ job }) => {
    return (
        <Fragment>
            <Card className="custom-card featured-jobs">
                <Card.Body>
                    <div className="btn-list float-end">
                        <BaseLink href="#!" className="avatar avatar-sm avatar-rounded bg-light text-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist">
                            <span>
                                <i className="bi bi-heart"></i>
                            </span>
                        </BaseLink>
                        <BaseLink href="#!" className="avatar avatar-sm avatar-rounded bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs">
                            <span>
                                <i className="bi bi-star-fill"></i>
                            </span>
                        </BaseLink>
                    </div>
                    <div className="d-flex mb-3 flex-wrap gap-2">
                        <div>
                            <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                {job.svgIcon}
                            </span>
                        </div>
                        <div className="ms-2">
                            <h5 className="fw-medium mb-0 d-flex align-items-center">
                                <BaseLink href="#!">
                                    {job.title}
                                </BaseLink>
                            </h5>
                            <BaseLink href="#!">
                                <i className="bi bi-building"></i> {job.company}
                            </BaseLink>
                        </div>
                    </div>
                    <div className="popular-tags mb-3">
                        <BaseLink href="#!" className="badge rounded-pill bg-light text-default">
                            <i className="bi bi-geo-alt text-muted me-1"></i> {job.location}
                        </BaseLink>
                        <BaseLink href="#!" className="badge rounded-pill bg-light text-default">
                            <i className="bi bi-mortarboard text-muted me-1"></i> {job.qualification}
                        </BaseLink>
                        <BaseLink href="#!" className="badge rounded-pill bg-light text-default">
                            <i className="bi bi-clock text-muted me-1"></i> {job.experience}
                        </BaseLink>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        <h6 className="fw-medium mb-0">{job.price}</h6>
                        <BaseLink href="#!" className="text-primary fw-medium fs-14">
                            Apply Now <i className="fe fe-arrow-right"></i>
                        </BaseLink>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkJobDetails;
