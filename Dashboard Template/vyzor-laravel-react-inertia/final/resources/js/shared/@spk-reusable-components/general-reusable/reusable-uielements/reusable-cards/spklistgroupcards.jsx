import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkListgroup from '../spk-listgroup'

const SpkListgroupcards = ({ Headertext, children, CardHeader = false, Footertext, Listvariant, CardFooter = false, ListClass, Customfooterclass }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                {CardHeader ?
                    <Card.Header>
                        {Headertext}
                    </Card.Header>
                    : ""}
                <SpkListgroup Variant={Listvariant} CustomClass={ListClass}>
                    {children}
                </SpkListgroup>
                {CardFooter ?
                    <Card.Footer className={Customfooterclass}>
                        {Footertext}
                    </Card.Footer> : ""}
            </Card>
        </Fragment>
    )
}

export default SpkListgroupcards
