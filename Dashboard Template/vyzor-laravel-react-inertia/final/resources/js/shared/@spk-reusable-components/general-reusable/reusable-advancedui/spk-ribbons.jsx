import React, { Fragment } from 'react';

const SpkRibbons = ({ children, ribbonColor, ribbonPosition, ribbonClass }) => {
    return (
        <Fragment>
            <div className={`${ribbonClass} ribbon-${ribbonColor} ${ribbonPosition}`}>
                {children}
            </div>
        </Fragment>
    );
};

export default SpkRibbons;
