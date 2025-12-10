

import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Col, Row } from 'react-bootstrap';
import BaseLink from "@/shared/layouts-components/baselink/baselink";
import SpkButton from '../../@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons';
import { Lightboxcomponent } from '../../@spk-reusable-components/reusable-plugins/spk-lightbox';
import BaseImage from '@/shared/layouts-components/baseimage/baseimage';

export const SearchGallerylist = () => {

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
        <>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/6.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Tech Gadgets</div>
                            </div>
                            <div className="fs-12 text-default">Innovative Marvels</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/2.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Healthy Recipes</div>
                            </div>
                            <div className="fs-12 text-default">Nutrient Nourish</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/4.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Travel Explorer</div>
                            </div>
                            <div className="fs-12 text-default">Global Wander</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/5.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Fashion Finds</div>
                            </div>
                            <div className="fs-12 text-default">Chic Styles</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/6.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Nature Photography</div>
                            </div>
                            <div className="fs-12 text-default">Wild Beauty</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1" >
                        <BaseImage src="/build/assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/7.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Future Tales</div>
                            </div>
                            <div className="fs-12 text-default">Innovative Marvels</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/8.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Science Fiction Books</div>
                            </div>
                            <div className="fs-12 text-default">Future Tales</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <BaseImage src="/build/assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <BaseImage src={"/build/assets/images/company-logos/9.png"} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Fitness Fanatics</div>
                            </div>
                            <div className="fs-12 text-default">Active Vibes</div>
                        </div>
                    </BaseLink>
                </Col>
                <Col xl={12} className="mb-4">
                    <SpkButton Customclass="btn btn-info-light btn-loader mx-auto">
                        <span className="me-2">Loading</span>
                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                    </SpkButton>
                </Col>

            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={Slides} index={0} />
        </>
    );
};
