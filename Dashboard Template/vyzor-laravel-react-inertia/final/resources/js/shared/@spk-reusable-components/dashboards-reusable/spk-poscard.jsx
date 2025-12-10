
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import SpkBadge from "../general-reusable/reusable-uielements/spk-badge";
import BaseLink from "@/shared/layouts-components/baselink/baselink";


const SpkPosCard = ({ pos, cardClass, bodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card border-0 shadow-none ${cardClass} bg-${pos.color}-transparent`}>
                <Card.Body className={bodyClass}>
                    <BaseLink href="#!" className="stretched-link" />
                    <div className="d-flex align-items-start justify-content-between mb-1">
                        <div>
                            <span className="fs-13">Order-{pos.id}</span>
                            <span className="d-block fw-semibold">{pos.title}</span>
                        </div>
                        <div className="fs-13 text-muted">{pos.items}</div>
                    </div>
                    <div className="d-flex align-items-end justify-content-between flex-wrap">
                        <span className="fs-13 text-muted">{pos.time}</span>
                        <SpkBadge variant="" Customclass={`bg-${pos.color}`}>{pos.badge}</SpkBadge>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkPosCard;
