
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import SpkBlogcard from "@/shared/@spk/reusable-pages/blog/spk-blogcard.svelte";
    import SpkPopularcard from "@/shared/@spk/reusable-pages/blog/spk-popularcard.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import Spkimageoverlaycard from "@/shared/@spk/uielements/reusable-cards/spkimageoverlaycard.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        BlogCards,
        BlogCategoryCards,
        BlogPosts,
        PopularBlogs,
        TopStories,
    } from "@/shared/data/pages/blog/blogdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { Link } from '@inertiajs/svelte';
    const basePath = __BASE_PATH__;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Blog | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Blog" subTitle="Blog" activepage="Pages" page="Blog" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xxl={5}>
        <Card class="custom-card overlay-card blog-card">
            <Link href={`${basePath}/pages/blog/blog-details`} class="stretched-link"></Link>
            <img
                src="../../images/media/blog/1.jpg"
                class="card-img"
                alt="..."
            />
            <div
                class="card-img-overlay d-flex flex-column p-0 over-content-bottom"
            >
                <CardBody class="text-fixed-white">
                    <div class="text-fixed-white fs-14 mb-2">FEATURED POST</div>
                    <div class="card-text mb-2 fs-2 fw-semibold lh-sm">
                        Exploring the Future of Artificial Intelligence
                    </div>
                </CardBody>
            </div>
        </Card>
    </Col>
    <Col xxl={4}>
        <Row>
            {#each BlogPosts as idx}
                <div class="col-xl-6">
                    <SpkBlogcard blog={idx} />
                </div>
            {/each}
        </Row>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card">
            <div class="card-header justify-content-between">
                <div class="card-title">Top Stories</div>
                <a href="#!" class="fs-13 text-muted text-decoration-underline"
                    >View All <i class="ti ti-arrow-narrow-right"></i></a
                >
            </div>
            <CardBody>
                <ul class="list-unstyled blog-top-stories-list">
                    {#each TopStories as story}
                        <li>
                            <Link
                                href={`${basePath}${story.link}`}
                                class="stretched-link"
                            ></Link>
                            <div class="d-flex align-items-center gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl">
                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`${story.badgeClass}`}
                                        >{story.badgeText}</SpkBadge
                                    >
                                    <h6
                                        class="fw-semibold mb-0 lh-base top-stories-title mt-1"
                                    >
                                        {story.title}
                                    </h6>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Col xl={12}>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0 fw-semibold">Popular Topics</h5>
        <p class="mb-0 fw-semibold">
            <a href="#!" class="text-primary"><u>View All</u></a>
        </p>
    </div>
    <Row class="">
        {#each BlogCategoryCards as idx}
            <SpkPopularcard blog={idx} />
        {/each}
    </Row>
</Col>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xxl={9}>
        <Row>
            {#each BlogCards as idx}
                <Col xl={3} lg={4} md={6} class="">
                    <SpkBlogcard blog={idx} />
                </Col>
            {/each}
        </Row>
    </Col>
    <Col xxl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Popular Blogs</div>
                <a href="#!" class="fs-13 text-muted text-decoration-underline"
                    >View All <i class="ti ti-arrow-narrow-right"></i></a
                >
            </CardHeader>
            <CardBody class="p-0">
                <ul class="list-group list-group-flush">
                    {#each PopularBlogs as blog}
                        <li class="list-group-item">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <Link
                                href={`${basePath}${blog.link}`}
                                class="stretched-link"
                            ></Link>
                            <div class="d-flex align-items-center gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl">
                                        <Image
                                            width={64}
                                            height={64}
                                            src={blog.image}
                                            alt={blog.title}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div
                                        class="popular-blogs-title fw-semibold mb-1"
                                    >
                                        {blog.title}
                                    </div>
                                    <span
                                        class="d-block text-muted fs-13 fw-normal"
                                        >{blog.dateViews}</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->
