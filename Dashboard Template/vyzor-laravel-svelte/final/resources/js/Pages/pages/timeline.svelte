<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkTimelinecard from "@/shared/@spk/reusable-pages/spk-timelinecard.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Activities,
        ActivityLogs,
        ProjectTimeline,
        TimelineData,
    } from "@/shared/data/pages/timelinedata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Timeline | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Timeline" activepage="Pages" page="Timeline" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row class="mb-5">
    <Col xl={12}>
        <h6>Timeline 1</h6>
        <div class="timeline">
            <div class="container">
                <Row>
                    <Col lg={12}>
                        <div class="timeline-container">
                            <div class="timeline-end">
                                <span
                                    class="avatar avatar-lg avatar-rounded bg-primary text-center"
                                >
                                    <i class="ri ri-building-line fs-4"></i>
                                </span>
                            </div>
                            <div class="timeline-continue">
                                <Row class="timeline-right">
                                    <Col md={6}>
                                        <div
                                            class="timeline-time-container primary"
                                        >
                                            <p
                                                class="timeline-date text-primary"
                                            >
                                                Jan 15
                                            </p>
                                            <span
                                                class="timeline-time fs-12 text-muted fw-medium d-block"
                                            >
                                                2023
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div class="timeline-box primary">
                                            <h6 class="fw-semibold">
                                                Company Founded
                                            </h6>
                                            <p class="mb-0 text-muted">
                                                Our journey began with a vision
                                                to revolutionize the industry.
                                                On January 15th, 2023, we
                                                officially founded the company
                                                with a small but dedicated team
                                                and big dreams for the future.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row class="timeline-left">
                                    <Col md={6}>
                                        <div
                                            class="timeline-box ms-md-auto success"
                                        >
                                            <h6 class="fw-semibold">
                                                First Product Launch
                                            </h6>
                                            <p class="mb-0 text-muted">
                                                After months of hard work and
                                                dedication, we launched our
                                                first product. It was a pivotal
                                                moment in our company's history,
                                                setting the stage for everything
                                                that was to come.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div
                                            class="timeline-time-container success"
                                        >
                                            <p
                                                class="timeline-date text-success"
                                            >
                                                Feb 20
                                            </p>
                                            <span
                                                class="timeline-time fs-12 text-muted fw-medium d-block text-start"
                                            >
                                                02:00 PM
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div class="col-12">
                                        <div class="timeline-year">
                                            <span
                                                class="avatar avatar-lg avatar-rounded bg-success text-center"
                                            >
                                                <i
                                                    class="ri ri-money-dollar-circle-line fs-4"
                                                ></i>
                                            </span>
                                        </div>
                                    </div>
                                </Row>
                                <Row class="timeline-right">
                                    <Col md={6}>
                                        <div
                                            class="timeline-time-container warning"
                                        >
                                            <p
                                                class="timeline-date text-warning"
                                            >
                                                Apr 5
                                            </p>
                                            <span
                                                class="timeline-time fs-12 text-muted fw-medium d-block"
                                            >
                                                11:45 AM
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div class="timeline-box warning">
                                            <h6 class="fw-semibold">
                                                Secured First Round of Funding
                                            </h6>
                                            <p class="mb-0 text-muted">
                                                We secured our first round of
                                                funding from angel investors.
                                                This was a major milestone that
                                                allowed us to scale and bring
                                                our product to market faster.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row class="timeline-left">
                                    <Col md={6}>
                                        <div
                                            class="timeline-box ms-md-auto info"
                                        >
                                            <h6 class="fw-semibold">
                                                Expanded Team
                                            </h6>
                                            <p class="mb-0 text-muted">
                                                As our business grew, we
                                                expanded our team to include
                                                experts in various fields, from
                                                marketing to engineering. This
                                                allowed us to focus on
                                                innovation and improve our
                                                products.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div
                                            class="timeline-time-container info"
                                        >
                                            <p class="timeline-date text-info">
                                                May 18
                                            </p>
                                            <span
                                                class="timeline-time fs-12 text-muted fw-medium d-block text-start"
                                            >
                                                04:20 PM
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div class="col-12">
                                        <div class="timeline-year">
                                            <span
                                                class="avatar avatar-lg avatar-rounded bg-danger text-center"
                                            >
                                                <i
                                                    class="ri ri-settings-3-line fs-4"
                                                ></i>
                                            </span>
                                        </div>
                                    </div>
                                </Row>
                                <Row class="timeline-right">
                                    <Col md={6}>
                                        <div
                                            class="timeline-time-container danger"
                                        >
                                            <p
                                                class="timeline-date text-danger"
                                            >
                                                Aug 25
                                            </p>
                                            <span
                                                class="timeline-time fs-12 text-muted fw-medium d-block"
                                            >
                                                09:15 AM
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div class="timeline-box danger">
                                            <h6 class="fw-semibold">
                                                Launched New Feature
                                            </h6>
                                            <p class="mb-0 text-muted">
                                                A major milestone in our product
                                                development, we launched a new
                                                feature that was highly
                                                anticipated by our users. It
                                                garnered positive feedback and
                                                improved user engagement.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row class="timeline-left">
                                    <Col md={6}>
                                        <div
                                            class="timeline-box ms-md-auto teal"
                                        >
                                            <h6 class="fw-semibold">
                                                Reached 100k Users
                                            </h6>
                                            <p class="mb-0 text-muted">
                                                We hit a major milestone:
                                                100,000 active users. This
                                                achievement reflected the hard
                                                work of our team and the value
                                                our product brings to our users.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div
                                            class="timeline-time-container teal"
                                        >
                                            <p class="timeline-date text-teal">
                                                Oct 10
                                            </p>
                                            <span
                                                class="timeline-time fs-12 text-muted fw-medium d-block text-start"
                                            >
                                                01:30 PM
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div class="timeline-start">
                                <span
                                    class="avatar avatar-lg avatar-rounded bg-warning text-center"
                                >
                                    <i class="ri ri-user-star-line fs-4"></i>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row class="mb-5">
    <Col xl={12}>
        <h6>Timeline 2</h6>
        <div class="p-5">
            <div class="timeline-steps">
                {#each TimelineData as item}
                    <SpkTimelinecard timeline={item} />
                {/each}
            </div>
        </div>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row class="">
    <Col xl={4}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Icons Timeline</div>
            </CardHeader>
            <CardBody class="p-4">
                <ul class="list-unstyled timeline-list-1">
                    {#each ActivityLogs as log}
                        <li>
                            <span class="fw-semibold d-block fs-15 mb-1"
                                >{log.title}</span
                            >
                            <span class="d-block mb-1">{log.description}</span>
                            <span class="fs-13 text-muted d-block"
                                >{log.timestamp}</span
                            >
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xl={4}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Rounded Timeline</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled timeline-list-2">
                    {#each Activities as activity}
                        <li>
                            <div class="d-flex align-items-center mb-1 gap-2">
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-xs avatar-rounded"
                                    >
                                        <Image
                                            src={activity.avatar}
                                            alt={activity.user}
                                        />
                                    </span>
                                </div>
                                <div class="fw-semibold flex-fill">
                                    {activity.title}
                                </div>
                                <div class="fs-13 text-muted">
                                    {activity.time}
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <div class="fs-13 text-muted">
                                    {activity.user}
                                    {activity.message}
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xl={4}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Solid Timeline</div>
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled timeline-list-3">
                    {#each ProjectTimeline as event}
                        <li>
                            <div
                                class="d-flex align-items-center gap-3 mb-1 flex-wrap"
                            >
                                <div class="fw-semibold fs-15">
                                    {event.title}
                                </div>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`bg-${event.badgeColor}`}
                                    >{event.time}</SpkBadge
                                >
                            </div>
                            <div class="fs-13 text-muted">
                                {@html event.description}
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->
