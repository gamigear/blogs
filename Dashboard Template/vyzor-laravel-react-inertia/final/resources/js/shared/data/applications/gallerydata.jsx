

import { Fragment, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import BaseLink from "@/shared/layouts-components/baselink/baselink";
import { Lightboxcomponent } from "../../@spk-reusable-components/reusable-plugins/spk-lightbox";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

export const GalleryList = () => {

    const [open, setOpen] = useState(false);

    const Slides = [
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-40.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-41.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-42.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-43.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-44.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-45.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-46.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-60.jpg` },
    ]

    return (
        <Fragment>
            <Row className="gy-4">
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-40.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-41.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-43.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-44.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-45.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-60.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}
//*** Images with Description ***//
export const Descriptiondata = [
    {
        src: "/build/assets/images/media/media-25.jpg",
        subHtml: `
        <p className="text-fixed-white" id="">Description Bottom</p>
         <div className="" id="">You can set the position of the description <a href="http://google.com">with a link to Google</a></div>
      `,
    },
    {
        src: "/build/assets/images/media/media-26.jpg",
        subHtml: `<p>
                  You can set the position of the description in different ways for example
                  <strong
                  style={{textDecoration: "underline"}}
                  >top, bottom, left or right</strong>
              </p>
              <p>
                  <a href="http://google.com" target="_blank"
                  style={{textDecoration: "underline", fontWeight: "bold"}}
                  >Example Google link</a>
                  ipsum vehicula eros ultrices lacinia Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Duis quis ipsum vehicula eros ultrices lacinia.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
              </p>
              <p>
                  Primis pharetra facilisis lorem quis penatibus ad nulla inceptos, dui per tempor taciti aliquet consequat sodales, curae tristique gravida auctor interdum malesuada sagittis.
                  Felis pretium eros ligula natoque ad ante rutrum himenaeos, adipiscing urna mauris porta quam efficitur odio, sagittis morbi tellus nisi molestie mus faucibus.
              </p>
              <p>
                  Primis pharetra facilisis lorem quis penatibus ad nulla inceptos, dui per tempor taciti aliquet consequat sodales, curae tristique gravida auctor interdum malesuada sagittis.
                  Felis pretium eros ligula natoque ad ante rutrum himenaeos, adipiscing urna mauris porta quam efficitur odio, sagittis morbi tellus nisi molestie mus faucibus.
              </p>`,
    },
    {
        src: "/build/assets/images/media/media-27.jpg",
        subHtml: `<p>You can set the position of the description in different ways for example top, bottom, left or right</p>
                 <p>Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>`,
    },
    {
        src: "/build/assets/images/media/media-28.jpg",
        subHtml: `<p className="mb-0">You can set the position of the description in different ways for example top, bottom, left or right</p>`,
    },
];
