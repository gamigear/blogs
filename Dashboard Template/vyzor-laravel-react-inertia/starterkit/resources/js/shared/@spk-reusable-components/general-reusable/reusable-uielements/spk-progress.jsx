

import React from 'react'
import { ProgressBar } from 'react-bootstrap';


const SpkProgress = ({ variant, now = 0, mainClass, animated, striped, label }) => {
    return (
        <ProgressBar variant={variant} now={now} className={mainClass} animated={animated} striped={striped} label={label} />
    )
}

export default SpkProgress
