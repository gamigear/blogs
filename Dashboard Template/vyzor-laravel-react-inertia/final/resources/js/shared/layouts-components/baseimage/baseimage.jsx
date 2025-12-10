

import React from 'react'
import { Image } from 'react-bootstrap';

const BaseImage = ({ src, alt, height, width,  className,style, ...props }) => {

 // Check if the src is an absolute URL (starts with 'http' or 'https')
 const isExternalUrl = /^https?:\/\//.test(src);

 var base=import.meta.env.BASE_URL
 // Only prepend basePath if it's not an external URL
 const basePathValue = !isExternalUrl && process.env.NODE_ENV === 'production' ? base : '';
 const imageUrl = `${basePathValue}${src}`;

 return <Image src={imageUrl} alt={alt} className={className} height={height} width={width} {...props} />;
}

export default BaseImage


