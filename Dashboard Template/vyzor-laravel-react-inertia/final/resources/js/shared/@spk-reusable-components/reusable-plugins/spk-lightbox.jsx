import { Fragment } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';


export const Lightboxcomponent = ({ open, index,  on = true, style = {}, mainClass = '', portals = false, Controller, plugins = [Fullscreen, Slideshow, Thumbnails, Zoom], label = { zoomIn: 'Zoom In', zoomOut: 'Zoom Out' }, toolbar = true, Carousel = true, animation = 'fade', slides, close,
}) => {
  return (
    <Fragment>
      <Lightbox open={open} index={index} on={on} styles={style} controller={Controller} portal={portals} className={mainClass} plugins={plugins} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} labels={label} toolbar={toolbar} carousel={Carousel} animation={animation} slides={slides} close={close}/>
    </Fragment>
  );
};
