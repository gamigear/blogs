<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import { Col, Row, Card, Image } from "@sveltestrap/sveltestrap";
    import "photoswipe/style.css";
    export let galleryID;
    export let images;

    onMount(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: "#" + galleryID,
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();
    });
</script>

<Row id={galleryID}>
    {#each images as image}
        <Col lg={3} md={3} sm={6} class="col-12">
            <a
                class="glightbox card search-images-card"
                href={image.src}
                data-pswp-width={image.w}
                data-pswp-height={image.h}
                data-gallery="gallery1"
            >
                <Image
                    src={image.thumbnail}
                    alt="image"
                />
                <div class="p-2">
                    <div class="d-flex align-items-center gap-1">
                        <div class="avatar avatar-xs">
                            <Image
                                src={image.logo}
                                alt=""
                            />
                        </div>
                        <div
                            class="figure-caption fs-13 fw-medium text-default"
                        >
                            {image.title}
                        </div>
                    </div>
                    <div class="fs-12 text-default">{image.subtitle}</div>
                </div>
            </a>
        </Col>
    {/each}
</Row>
