
import React, { Fragment } from 'react'
import { Card, Image, } from 'react-bootstrap'
import { Link } from "@inertiajs/react";
import BaseImage from '@/shared/layouts-components/baseimage/baseimage';


const Spkimageoverlaycard = ({ Imgsrc, CustomClass, stretchedLink = false, CardHeader = true, Overlayclass, CardFooter = true, Footertext, Customfooterclass, Custombodyclass, CustomTitleclass, Customimgclass, Title, children }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${CustomClass}`}>
                {stretchedLink ?
                    <Link href={`${__APP_BASE_PATH__}/pages/blog/blog-details`} className="stretched-link"></Link>
                    : ""}
                <BaseImage src={Imgsrc} className={Customimgclass} alt="..." />
                <div className={`card-img-overlay d-flex flex-column p-0 ${Overlayclass}`}>

                    {CardHeader ?
                        <Card.Header className="card-header">
                            <div className={`card-title ${CustomTitleclass}`}>
                                {Title}
                            </div>
                        </Card.Header>
                        : ""}
                    <Card.Body className={Custombodyclass}>
                        {children}
                    </Card.Body>
                    {CardFooter ? <Card.Footer className={Customfooterclass}>{Footertext}</Card.Footer> : ""}

                </div>
            </Card>
        </Fragment>
    )
}

export default Spkimageoverlaycard
