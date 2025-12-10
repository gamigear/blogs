<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Benefits,
        InfoList,
        JobListings,
        jobs,
        Qualifications,
        Responsibilities,
    } from "$lib/data/dashboards/jobs/jobdetailsdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Input,
        InputGroup,
        ListGroup,
        ListGroupItem,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    import type { SwiperContainer } from "swiper/element";
    let swiperEl: SwiperContainer | undefined;
    onMount(() => {
        if (swiperEl != undefined) {
            const swiperParams = {
                spaceBetween: 20,
                loop: true,
                autoplay: true,
                navigation: true,
                breakpoints: {
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            };

             swiperEl.swiper?.destroy(true, true);

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl, swiperParams);

            // and now initialize it
            swiperEl.initialize();
        }
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>JobDetails | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Job Details"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Job Details"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={9}>
        <Card class="custom-card">
            <CardBody>
                <div
                    class="d-flex flex-wrap align-items-top justify-content-between gap-2"
                >
                    <div>
                        <div class="d-flex flex-wrap gap-3">
                            <div>
                                <span class="avatar avatar-lg bg-light">
                                    <Image
                                        src="../../images/company-logos/8.png"
                                        alt=""
                                    />
                                </span>
                            </div>
                            <div>
                                <h4
                                    class="fw-medium mb-2 d-flex align-items-center"
                                >
                                    <a href="#!">Software Developer</a>
                                </h4>
                                <a href="#!"
                                    ><i class="bi bi-building"></i>Tech
                                    Solutions Inc.</a
                                >
                                <div class="d-flex fs-14 mt-4">
                                    <div>
                                        <p class="mb-2">
                                            <i class="bi bi-geo-alt me-2"
                                            ></i>New York, NY (Hybrid: 3 days in
                                            office, 2 days remote)
                                        </p>
                                        <p>
                                            <i class="bi bi-briefcase me-2"
                                            ></i>2+ years in software
                                            development
                                        </p>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">
                                            <i class="bi bi-coin me-2"></i>
                                            <span class="fw-medium"
                                                >$80,000 - $110,000 per year
                                                (depending on experience)</span
                                            >
                                        </p>
                                        <p>
                                            <i class="bi bi-mortarboard me-2"
                                            ></i>Development Team
                                        </p>
                                    </div>
                                </div>
                                <div class="popular-tags">
                                    <a
                                        href="#!"
                                        class="badge rounded-pill bg-info-transparent me-1"
                                        ><i class="bi bi-clock me-1"></i>Full
                                        Time</a
                                    >
                                    <a
                                        href="#!"
                                        class="badge rounded-pill bg-danger-transparent"
                                        ><i class="bi bi-briefcase me-1"></i>13
                                        Openings</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <div class="btn-list mb-2">
                            <a href="#!" class="btn btn-primary"> Apply Now</a>
                            <a
                                href="#!"
                                class="btn btn-icon btn-primary-light btn-wave"
                            >
                                <i class="ri-heart-line"></i>
                            </a>
                            <a
                                href="#!"
                                class="btn btn-icon btn-primary-light btn-wave"
                            >
                                <i class="ri-share-line"></i>
                            </a>
                        </div>
                        <p class="mb-0">
                            <i
                                class="bi bi-info-circle text-danger"
                                id="job-details-circle"
                            ></i>
                            <SpkTooltips
                                placement="top"
                                content="45 days left"
                                targetId="job-details-circle"
                            ></SpkTooltips>
                            <span class="fw-medium"> 45 days left </span> to apply
                            this job
                        </p>
                    </div>
                </div>
            </CardBody>
        </Card>
        <Card class="custom-card">
            <CardBody>
                <h5 class="fw-medium">Job Description</h5>
                <p class="op-9">
                    We are looking for a skilled and passionate Software
                    Developer to join our dynamic development team. As a
                    Software Developer, you will play a crucial role in
                    designing, developing, and maintaining our core software
                    applications and systems. You will collaborate with
                    cross-functional teams to create innovative solutions that
                    meet the needs of our clients.
                </p>
                <Row class="gy-3">
                    <Col xl={6}>
                        <h5 class="fw-medium mb-3">Key Responsibilities :</h5>
                        <ol class="list-unstyled list-group-numbered mb-0">
                            {#each Responsibilities as item}
                                <li class="list-group-item">
                                    {item}
                                </li>
                            {/each}
                        </ol>
                    </Col>
                    <Col xl={6}>
                        <h5 class="fw-medium mb-3">
                            Skills & Qualifications :
                        </h5>
                        <ol class="list-unstyled list-group-numbered mb-0">
                            {#each Qualifications as item}
                                <li class="list-group-item">
                                    {item}
                                </li>
                            {/each}
                        </ol>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <div>
            <h4 class="fw-medium mb-0">Related Jobs</h4>
            <p class="">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
            </p>
            <swiper-container
                init="false"
                bind:this={swiperEl}
                class="swiper swiper-related-jobs"
            >
                {#each jobs as job}
                    <swiper-slide class="swiper-slide">
                        <div class="row">
                            {#each job.badges as badge}
                                <div class="col-md-6">
                                    <div class="card custom-card featured-jobs">
                                        <div class="card-body">
                                            <div class="btn-list float-end ">
                                                <a
                                                    id={`job-heart-${badge.innerId}`}
                                                    href="#!"
                                                    class="avatar avatar-sm avatar-rounded bg-light text-default"
                                                    ><span
                                                        ><i class="bi bi-heart"
                                                        ></i></span
                                                    ></a
                                                >
                                                <SpkTooltips
                                                    placement="top"
                                                    content="Add to wishlist"
                                                    targetId={`job-heart-${badge.innerId}`}
                                                ></SpkTooltips>
                                                <a
                                                    id={`job-fill-${badge.innerId}`}
                                                    href="#!"
                                                    class="avatar avatar-sm avatar-rounded bg-warning-transparent"
                                                    ><span
                                                        ><i
                                                            class="bi bi-star-fill"
                                                        ></i></span
                                                    ></a
                                                >
                                                <SpkTooltips
                                                    placement="top"
                                                    content="Featured Jobs"
                                                    targetId={`job-fill-${badge.innerId}`}
                                                ></SpkTooltips>
                                            </div>
                                            <div
                                                class="d-flex flex-wrap gap-2 mb-3"
                                            >
                                                <div>
                                                    <span
                                                        class="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="var(--primary-color)"
                                                                d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="ms-2">
                                                    <h5
                                                        class="fw-medium mb-0 d-flex align-items-center"
                                                    >
                                                        <a href="#!"
                                                            >{badge.title}</a
                                                        >
                                                    </h5>
                                                    <a href="#!">
                                                        <i
                                                            class="bi bi-building"
                                                        ></i>
                                                        {badge.company}
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3">
                                                <a
                                                    href="#!"
                                                    class="badge rounded-pill bg-light text-default me-1"
                                                >
                                                    <i
                                                        class="bi bi-geo-alt text-muted me-1"
                                                    ></i>
                                                    {badge.location}
                                                </a>
                                                <a
                                                    href="#!"
                                                    class="badge rounded-pill bg-light text-default me-1"
                                                >
                                                    <i
                                                        class="bi bi-mortarboard text-muted me-1"
                                                    ></i> Graduate
                                                </a>
                                                <a
                                                    href="#!"
                                                    class="badge rounded-pill bg-light text-default me-1"
                                                >
                                                    <i
                                                        class="bi bi-clock text-muted me-1"
                                                    ></i> Min - 2Years
                                                </a>
                                            </div>
                                            <div
                                                class="d-flex justify-content-between flex-wrap"
                                            >
                                                <h6 class="fw-medium mb-0">
                                                    {badge.salary}
                                                </h6>
                                                <a
                                                    href="#!"
                                                    class="text-primary fw-medium fs-14"
                                                >
                                                    Apply Now <i
                                                        class="fe fe-arrow-right"
                                                    ></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </swiper-slide>
                {/each}
            </swiper-container>
            <!-- <SpkSwiperJs class="swiper-related-jobs" slides={JobsSwiper} autoplay={true} pagination={true} loop={true} navigation={true} breakpoint={breakpoints} /> -->
        </div>
        <Row>
            <Col xl={6}>
                <Card
                    class="custom-card border bg-primary-transparent shadow-none"
                >
                    <CardBody>
                        <div
                            class="d-flex align-items-center justify-content-between"
                        >
                            <h5 class="fw-medium mb-0">
                                &#128400; Was this job fit for someone?
                            </h5>
                            <a
                                href="#!"
                                class="btn btn-success btn-lg"
                                role="button"
                            >
                                <i
                                    class="ri-share-line me-2 align-middle d-inline-block"
                                ></i>Share Now
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={6}>
                <Card class="custom-card">
                    <CardBody>
                        <div class="d-flex align-items-center gap-4 flex-wrap">
                            <div class="w-sm-50">
                                <h5 class="fw-medium mb-0">
                                    Latest Job Alerts
                                </h5>
                            </div>
                            <InputGroup>
                                <Input
                                    type="text"
                                    class=""
                                    placeholder="Email Here"
                                    aria-label="blog-email"
                                    aria-describedby="blog-subscribe"
                                />
                                <SpkButton
                                    color="primary"
                                    customClass="btn"
                                    buttontype="button">Subscribe</SpkButton
                                >
                            </InputGroup>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Job Highlights</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled job-highlights-list">
                    {#each InfoList as item}
                        <li>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-light text-default"
                                    >
                                        <i class={item.iconClass}></i>
                                    </span>
                                </div>
                                <div>{item.label}</div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Benefits</div>
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush list-group-numbered">
                    {#each Benefits as benefit}
                        <ListGroupItem class="">
                            {benefit}
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
        <Card class="custom-card overflow-hidden">
            <CardHeader class="justify-content-between">
                <div class="card-title">Similar Jobs</div>
                <a href="#!" class="text-primary fw-medium fs-13">
                    View All <i class="fe fe-arrow-right"></i>
                </a>
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush">
                    {#each JobListings as job}
                        <ListGroupItem class="mb-2">
                            <div class="d-sm-flex flex-wrap gap-2">
                                <span
                                    class="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border"
                                >
                                    {@html job.icon}
                                </span>
                                <div class="flex-grow-1">
                                    <p class="fw-medium fs-13 mb-1">
                                        <a href="#!">{job.title}</a>
                                    </p>
                                    <p class="mb-0 me-3">
                                        <i class="bi bi-building text-muted"
                                        ></i>
                                        {job.company}
                                    </p>
                                </div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End::row-1 -->
