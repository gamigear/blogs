
import React, { Fragment } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';


const SpkPopovers = ({ title, content, trigger, placement, popoverClass, headerClass, bodyClass, children, rootClose = false }) => {
    return (
        <Fragment>
            <OverlayTrigger
                rootClose={rootClose}
                trigger={trigger}
                placement={placement}
                overlay={
                    <Popover className={popoverClass}>
                        <Popover.Header as="h3" className={headerClass}>{title}</Popover.Header>
                        <Popover.Body className={bodyClass}>
                            {content}
                        </Popover.Body>
                    </Popover>
                }
            >
                {children}
            </OverlayTrigger>
        </Fragment>
    );
};

export default SpkPopovers;
