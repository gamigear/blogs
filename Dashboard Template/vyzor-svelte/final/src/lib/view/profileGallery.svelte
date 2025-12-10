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

    <div class="row" id={galleryID}>
        {#each images as image}
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} class="">
                <a
                    class="glightbox"
                    data-gallery="gallery1"
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
    </div>
