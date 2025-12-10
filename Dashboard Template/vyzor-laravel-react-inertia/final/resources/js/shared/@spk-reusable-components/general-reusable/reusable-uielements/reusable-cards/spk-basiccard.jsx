
import React from 'react';
import { Card } from "react-bootstrap";
import BaseLink from "@/shared/layouts-components/baselink/baselink";
import BaseImage from '@/shared/layouts-components/baseimage/baseimage';


const SpkCard = ({ header, footer, title, bodyText, imgSrc, titleClass, subTitle, imgClass, cardClass, bodyClass, cardHeader, cardFooter, useDivHeader = false, imgSrcA, imgClassA, imgSrcB, imgSingleSrc, imgClassB, imgSrcC, imgClassC, linkTag = false, singleImg }) => {
  return (
    <Card className={`custom-card ${cardClass}`}>

      {imgSrcA && <BaseImage src={imgSrcA} alt="..." className={imgClassA} />}
      {linkTag && <BaseLink href="#!" className="card-anchor"></BaseLink>}
      {singleImg == 'top' && <BaseLink href="#!" className='p-3 pb-0 rounded-5' ><BaseImage src={imgSingleSrc} className="rounded-2 card-img-top" alt="..." /></BaseLink>}
      {header && (
        useDivHeader ? (
          <Card.Header className={cardHeader}> {header} </Card.Header>
        ) : (
          <Card.Header className={cardHeader}>
            <h5 className={`card-title ${!imgSrcC ? 'fw-medium' : ''} `}>{header}</h5>
          </Card.Header>
        )
      )}

      {imgSrc && <BaseImage src={imgSrc} alt="..." className={imgClass} />}

      <Card.Body className={bodyClass}>
        {title && <h6 className={`card-title ${titleClass}`}>{title}</h6>}
        {subTitle && <div className="card-subtitle mb-3 text-muted ">{subTitle}</div>}
        {bodyText}
      </Card.Body>

      {imgSrcB && <BaseImage src={imgSrcB} alt="..." className={imgClassB} />}
      {footer && (
        <Card.Footer className={cardFooter}>
          {typeof footer === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: footer }} />
          ) : (
            footer
          )}
        </Card.Footer>
      )}
      {imgSrcC && <BaseImage src={imgSrcC} alt="..." className={imgClassC} />}
      {singleImg == 'bottom' && <BaseLink href="#!" className="p-3 pt-0 rounded-5">
        <BaseImage src={imgSingleSrc} className="rounded-2 card-img-bottom" alt="..." />
      </BaseLink>}

    </Card>
  );
};

export default SpkCard;
