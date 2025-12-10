
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import BaseLink from '../../../../layouts-components/baselink/baselink';

const Spknavigationcards = ({ Navigationclass, Customheaderclass, LinkNavigate, ActiveNavigate, Navigate }) => {
    return (
        <Fragment>
            <Card className="custom-card text-center">
                <Card.Header className={Customheaderclass}>
                    <ul className={`nav nav-${Navigationclass} card-header-${Navigationclass} ms-1`}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="true" href={ActiveNavigate}>Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={Navigate}>Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </Card.Header>
                <Card.Body>
                    <h6 className="card-title fw-medium">Special title treatment</h6>
                    <p className="card-text">With supporting text below as a natural lead-in to
                        additional content.</p>
                    <BaseLink href={LinkNavigate} className="btn btn-primary">Go somewhere</BaseLink>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spknavigationcards
