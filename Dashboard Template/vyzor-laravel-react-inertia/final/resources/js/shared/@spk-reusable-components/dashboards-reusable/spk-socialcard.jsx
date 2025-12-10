import { Fragment } from "react";
import { Card, Dropdown } from "react-bootstrap";
import SpkDropdown from "../general-reusable/reusable-uielements/spk-dropdown";


const SpkSocialCard = ({ cardClass , media }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex align-items-start gap-2 flex-wrap">
                        <div className="lh-1">
                            <span className={`avatar avatar-md avatar-rounded bg-${media.svgColor}-transparent svg-${media.svgColor}`}>
                                {media.svgIcon}
                            </span>
                        </div>
                        <div className="flex-fill">
                            <div className="d-flex align-items-end justify-content-between">
                                <span className="d-block mb-1">{media.title}</span>
                                <SpkDropdown toggleas="a"  Customtoggleclass="btn btn-icon btn-sm rounded-circle btn-light no-caret" Icon={true} IconClass="ti ti-dots text-muted fs-5">
                                    <Dropdown.Item >Today</Dropdown.Item>
                                    <Dropdown.Item >This Week</Dropdown.Item>
                                    <Dropdown.Item >This Month</Dropdown.Item>
                                    <Dropdown.Item >This Year</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                            <div className="d-flex align-items-end justify-content-between">
                                <h4 className="fw-semibold mb-0">{media.value}</h4>
                                <div className={`text-${media.percentColor} fs-13`}>
                                <i className={`ti ti-arrow-${media.percentColor === 'success' ? 'up' : 'down'} me-1`}></i>{media.percent}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkSocialCard;
