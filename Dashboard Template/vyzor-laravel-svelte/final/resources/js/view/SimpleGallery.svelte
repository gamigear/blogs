<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import { Col, Image, Row } from "@sveltestrap/sveltestrap";
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

<Row  id={galleryID}>
    {#each images as image}
        <Col lg={3} md={4} sm={6} class="col-12">
            <a
                href={image.src}
                data-pswp-width={image.w}
                data-pswp-height={image.h}
                rel="noreferrer"
            >
                <Image
                    loading="lazy"
                    src={image.thumbnail}
                    alt="image"
                    class="img-fluid rounded glightbox card"
                    style="width:100%; border-radius:0.25rem; overflow:hidden"
                />
            </a>
        </Col>
    {/each}
</Row>

