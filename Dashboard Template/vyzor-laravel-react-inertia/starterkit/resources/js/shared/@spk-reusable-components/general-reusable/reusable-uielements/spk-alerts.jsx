
import React, { Fragment } from 'react'
import { Alert } from 'react-bootstrap'

export default function SpkAlerts ({ CustomClass, children, Id, variant, Dismiss, Closebutton, show, ...rest })  {
  return (
    <Fragment>
      <Alert variant={variant} className={CustomClass} role="alert" id={Id} dismissible={Dismiss} closeLabel={Closebutton} show={show} {...rest}>
        {children}
      </Alert>
    </Fragment>
  )

}
