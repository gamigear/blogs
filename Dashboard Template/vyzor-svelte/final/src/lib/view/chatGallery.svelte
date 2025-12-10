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

<div class="row g-2" id={galleryID}>
    {#each images as image}
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
            <a  href={image.src}
                data-pswp-width={image.w}
                data-pswp-height={image.h} class="glightbox card mb-0" data-gallery="gallery1">
                <Image
                    loading="lazy"
                    src={image.thumbnail}
                    alt="image"
                    class="glightbox card"
                    style="width:100%; border-radius:0.25rem; overflow:hidden"
                />
            </a>
        </div>
    {/each}
</div>
