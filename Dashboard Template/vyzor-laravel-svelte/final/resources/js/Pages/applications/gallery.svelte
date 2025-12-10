<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import SimpleGallery from "@/view/SimpleGallery.svelte";
    const images = [
        {
            src: "../images/media/media-40.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-40.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-41.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-41.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-42.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-42.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-43.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-43.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-44.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-44.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-45.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-45.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-46.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-46.jpg",
            alt: "alt",
        },
        {
            src: "../images/media/media-60.jpg",
            w: 600,
            h: 400,
            thumbnail: "../images/media/media-60.jpg",
            alt: "alt",
        },
    ];
</script>

<!-- Page Title -->
<svelte:head>
    <title>Gallery | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Gallery" activepage="Applications" page="Gallery" />

<!-- Start::row-1 -->
<SimpleGallery galleryID="my-test-gallery" {images} />
<!--End::row-1 -->
