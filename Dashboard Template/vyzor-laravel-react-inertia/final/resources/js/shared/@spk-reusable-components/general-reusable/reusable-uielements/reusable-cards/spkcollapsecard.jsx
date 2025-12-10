
import React, { Fragment, useState } from 'react'
import { Card, Collapse } from 'react-bootstrap'
import SpkButton from '../spk-buttons';
import BaseLink from "@/shared/layouts-components/baselink/baselink";

const SpkCollapsecard = ({ Customheaderclass, OnClickFunc, expandButton = false, collapseToggle = false, normalToggle = false, hideToggle = false, children, Title, footertext, Navigate, }) => {

    const [BasicExpanded, setBasicExpanded] = useState(true);

    const BasicHandleExpandClick = () => {
        setBasicExpanded(!BasicExpanded);
    };

    //Card With Close Button
    const [Basicshow, setBasicshow] = useState(true);

    return (
        <Fragment>
            {Basicshow ?
                <Card className="custom-card">
                    <Card.Header className={`card-header justify-content-between border-bottom-0 ${Customheaderclass}`}>
                        {collapseToggle && <Card.Title>
                            {Title}
                        </Card.Title>
                        }
                        {hideToggle &&
                            Basicshow ?
                            <Card.Title>
                                {Title}
                            </Card.Title> : null
                        }

                        {
                            normalToggle &&
                            <Card.Title>
                                {Title}
                            </Card.Title>
                        }
                        {expandButton &&
                            <BaseLink href={Navigate} onClick={BasicHandleExpandClick} >
                                <i className={`ri-${BasicExpanded ? 'arrow-down-s-line' : 'arrow-up-s-line'} fs-18`}></i>
                            </BaseLink>
                        }
                        {
                            hideToggle &&
                                Basicshow ?
                                <BaseLink href={Navigate} onClick={() => setBasicshow(false)} >
                                    <i className='ri-close-line fs-18'></i>
                                </BaseLink> : null
                        }
                        {
                            normalToggle &&
                            <BaseLink href={Navigate} onClick={OnClickFunc} >
                                <i className="ri-fullscreen-line"></i>
                            </BaseLink>

                        }
                    </Card.Header>
                    {
                        collapseToggle &&
                        <>
                            <Collapse className="border-top" in={BasicExpanded} timeout={3000}>
                                <div>
                                    <Card.Body>
                                        {children}
                                    </Card.Body>
                                    <Card.Footer>
                                        <SpkButton Buttonvariant="primary">{footertext}</SpkButton>
                                    </Card.Footer>
                                </div>
                            </Collapse>
                        </>
                    }

                    {
                        hideToggle &&
                            Basicshow ? <>
                            <Card.Body className="border-top">
                                {children}
                            </Card.Body>
                            <Card.Footer>
                                <SpkButton Buttonvariant="primary">{footertext}</SpkButton>
                            </Card.Footer>
                        </> : null
                    }


                    {
                        normalToggle &&
                        <>
                            <Card.Body className="border-top">
                                {children}
                            </Card.Body>
                            <Card.Footer>
                                <SpkButton Buttonvariant="primary">{footertext}</SpkButton>
                            </Card.Footer>
                        </>
                    }

                </Card> : null
            }

        </Fragment >
    )
}

export default SpkCollapsecard
