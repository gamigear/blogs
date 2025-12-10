
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkButton from '../spk-buttons';
import BaseImage from '@/shared/layouts-components/baseimage/baseimage';
import BaseLink from "@/shared/layouts-components/baselink/baselink";
const Spktitlecards = ({ ButtonTag, Imgsrc, Anchortagbefore = false, OnclickFunc, Navigate, AnchortagNavigate, Cardheader, Imagetag = false, Icontag = false, LinkClass, CustomBodyclass, Customfooterclass, Icon, Cardfooter, Customclass, CustomHeaderclass, children, Footertext, Title, Linktag }) => {
  return (
    <Fragment>
      <Card className={Customclass}>
        {Imagetag ? <BaseImage src={Imgsrc} className="card-img-top" alt="..." /> : ''}
        {Anchortagbefore ? <BaseLink href={AnchortagNavigate} className="card-anchor"></BaseLink> : ""}
        {Cardheader ?
          <Card.Header className={CustomHeaderclass}>
            <Card.Title>
              {Title}
            </Card.Title>
            {Linktag ? <BaseLink href={Navigate} data-bs-toggle="card-remove" onClick={OnclickFunc} className={LinkClass}>
              {Icontag ? <i className={Icon}></i> : ''}
            </BaseLink> : ''}
          </Card.Header>
          : ''}
        <Card.Body className={CustomBodyclass}>
          {children}
        </Card.Body>
        {Cardfooter ? <Card.Footer className={Customfooterclass}>
          {ButtonTag ? <SpkButton Buttonvariant="primary">Read More</SpkButton> : Footertext}
        </Card.Footer>
          : ''}
      </Card>
    </Fragment>
  )
}

export default Spktitlecards
