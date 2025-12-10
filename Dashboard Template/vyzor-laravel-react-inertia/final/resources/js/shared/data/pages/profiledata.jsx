
import { Fragment, useState } from "react"
import { Col, Image } from "react-bootstrap"
import BaseLink from "@/shared/layouts-components/baselink/baselink";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Lightboxcomponent } from "../../@spk-reusable-components/reusable-plugins/spk-lightbox";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

export const ProfileGallery = () => {

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
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-26.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-32.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-30.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-31.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-46.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-59.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-61.jpg` },
        { src: `${__APP_BASE_PATH__}/build/assets/images/media/media-42.jpg` },
    ]

    return (
        <Fragment>
            <div className="row gy-4">
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-40.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-40.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-43.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-44.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-45.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-60.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-26.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-32.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-30.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-31.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-59.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-61.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <BaseLink href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded" />
                    </BaseLink>
                </Col>
            </div>
            <Lightboxcomponent close={() => setOpen(false)} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}


export const Profiles = [
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "/build/assets/images/faces/9.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "SarahSmith",
        mail: "sarah.smith@example.com",
        imgSrc: "/build/assets/images/faces/1.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "MichaelBrown",
        mail: "michael.brown@example.com",
        imgSrc: "/build/assets/images/faces/10.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "EmmaWilson",
        mail: "emma.wilson@example.com",
        imgSrc: "/build/assets/images/faces/2.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "JamesTaylor",
        mail: "james.taylor@example.com",
        imgSrc: "/build/assets/images/faces/11.jpg",
        icon: "minus",
        color: 'danger',
        followers: 'Unfollow'
    },
    {
        name: "OliviaJohnson",
        mail: "olivia.johnson@example.com",
        imgSrc: "/build/assets/images/faces/3.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "DavidMartinez",
        mail: "david.martinez@example.com",
        imgSrc: "/build/assets/images/faces/13.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "SophiaGarcia",
        mail: "sophia.garcia@example.com",
        imgSrc: "/build/assets/images/faces/4.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "DanielLee",
        mail: "daniel.lee@example.com",
        imgSrc: "/build/assets/images/faces/14.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "IsabellaHarris",
        mail: "isabella.harris@example.com",
        imgSrc: "/build/assets/images/faces/5.jpg",
        icon: "minus",
        color: 'danger',
        followers: 'Unfollow'
    },
    {
        name: "WilliamClark",
        mail: "william.clark@example.com",
        imgSrc: "/build/assets/images/faces/15.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "MiaLewis",
        mail: "mia.lewis@example.com",
        imgSrc: "/build/assets/images/faces/6.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "AlexanderWalker",
        mail: "alexander.walker@example.com",
        imgSrc: "/build/assets/images/faces/16.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "CharlotteAllen",
        mail: "charlotte.allen@example.com",
        imgSrc: "/build/assets/images/faces/7.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "BenjaminYoung",
        mail: "benjamin.youn@example.com",
        imgSrc: "/build/assets/images/faces/8.jpg",
        icon: "minus",
        color: 'danger',
        followers: 'Unfollow'
    },
];


export const FriendsList = [
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "/build/assets/images/faces/9.jpg",
    },
    {
        name: "SarahSmith",
        mail: "sarah.smith@example.com",
        imgSrc: "/build/assets/images/faces/1.jpg",
    },
    {
        name: "MichaelBrown",
        mail: "michael.brown@example.com",
        imgSrc: "/build/assets/images/faces/10.jpg",
    },
    {
        name: "EmmaWilson",
        mail: "emma.wilson@example.com",
        imgSrc: "/build/assets/images/faces/2.jpg",
    },
    {
        name: "JamesTaylor",
        mail: "james.taylor@example.com",
        imgSrc: "/build/assets/images/faces/11.jpg",
    },
    {
        name: "OliviaJohnson",
        mail: "olivia.johnson@example.com",
        imgSrc: "/build/assets/images/faces/3.jpg",
    },
    {
        name: "DavidMartinez",
        mail: "david.martinez@example.com",
        imgSrc: "/build/assets/images/faces/13.jpg"
    },
    {
        name: "SophiaGarcia",
        mail: "sophia.garcia@example.com",
        imgSrc: "/build/assets/images/faces/4.jpg"
    },
    {
        name: "DanielLee",
        mail: "daniel.lee@example.com",
        imgSrc: "/build/assets/images/faces/14.jpg"
    },
    {
        name: "IsabellaHarris",
        mail: "isabella.harris@example.com",
        imgSrc: "/build/assets/images/faces/6.jpg"
    },
    {
        name: "WilliamClark",
        mail: "william.clark@example.com",
        imgSrc: "/build/assets/images/faces/15.jpg"
    },
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "/build/assets/images/faces/9.jpg"
    },
];



