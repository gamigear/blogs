

import React, { Fragment } from 'react'
import { ButtonGroup } from 'react-bootstrap'
const SpkButtongroup = ({ children, Customclass, Buttongrplabel, bsPrefix, as, Size, Vertical }) => {
  return (
    <Fragment>
      <ButtonGroup className={Customclass} role="group" aria-label={Buttongrplabel} as={as} size={Size} bsPrefix={bsPrefix} vertical={Vertical}>
        {children}
      </ButtonGroup>
    </Fragment>
  )
}

export default SpkButtongroup
