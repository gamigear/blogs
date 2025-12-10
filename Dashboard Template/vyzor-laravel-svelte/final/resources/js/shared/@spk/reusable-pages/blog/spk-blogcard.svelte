<script>
    import { Link } from "@inertiajs/svelte";
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";

    const basePath = __BASE_PATH__;
    export let blog = {};
</script>

<Card class="custom-card border-0 blog-card shadow-none">
    <CardBody class="p-0">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <Link href={`${basePath}/pages/blog/blog-details`} class="stretched-link"
        ></Link>
        <div class="blog-image mb-3">
            <Image src={blog.image} class="card-img" alt="..." />
        </div>
        <span class="d-block mb-1 text-primary blog-category">{blog.title}</span
        >
        <h6 class="mb-0 blog-title lh-base">{blog.desc}</h6>
    </CardBody>
</Card>
