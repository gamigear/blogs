
import React, { Fragment } from 'react'
import { Card, Image } from 'react-bootstrap'
import BaseImage from '@/shared/layouts-components/baseimage/baseimage';
import BaseLink from '../../../../layouts-components/baselink/baselink';

const Spkbgcards = ({ Title, Customclass, color, Value, Imgsrc, Class, Textclass, Navigate, icon }) => {
    return (
        <Fragment>
            <Card className={`custom-card card-bg-${color} ${Customclass}`}>
                <Card.Body>
                    <div className="d-flex align-items-center w-100">
                        <div className="me-2">
                            <span className="avatar avatar-rounded">
                                <BaseImage src={Imgsrc} alt="img" />
                            </span>
                        </div>
                        <div className="">
                            <div className="fs-15 fw-medium">{Title}</div>
                            <p className={`mb-0 text-${Textclass} op-7 fs-12`}>{Value}</p>
                        </div>
                        <div className="ms-auto">
                            <BaseLink href={Navigate} className={`text-${Class}`}><i className={icon}></i></BaseLink>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spkbgcards
