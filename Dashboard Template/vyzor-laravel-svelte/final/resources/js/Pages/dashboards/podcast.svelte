<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        ListItems,
        MediaCards,
        PodcastCategeries,
        Podcasters,
        PodcastTable,
        RecentlyMedia,
    } from "@/shared/data/dashboards/podcastdata";
    import { SortByDropdown } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        ListGroup,
        ListGroupItem,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Podcast | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Podcast" activepage="Dashboards" page="Podcast" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={9}>
        <Row>
            <Col xxl={8}>
                <Row>
                    <Col xl={12}>
                        <Card
                            class="custom-card podcast-banner-card border-0 shadow-none"
                        >
                            <CardBody>
                                <div
                                    class="podcast-banner-card-background grid-cards"
                                >
                                    <Image
                                        src="../images/media/backgrounds/6.png"
                                        alt=""
                                    />
                                </div>
                                <Row>
                                    <Col xl={8}>
                                        <span
                                            class="badge bg-primary rounded-pill"
                                            >Featured Track</span
                                        >
                                        <h2 class="fw-semibold mt-2">
                                            Echoes of Tomorrow
                                        </h2>
                                        <p class="fs-16 mb-3">
                                            Tune in to 'Echoes of
                                            Tomorrow'—exclusive insights and an <br
                                            /> artist interview, only on our podcast.
                                        </p>
                                        <div
                                            class="fw-medium text-primary mb-4"
                                        >
                                            <i class="ti ti-music mx-1"></i>30 +
                                            Eps
                                            <span
                                                class="ms-2 text-default fs-12 op-8"
                                                ><i
                                                    class="ri-play-circle-line fs-13 mx-1"
                                                ></i>260.517/ Monthly Listenders</span
                                            >
                                        </div>
                                        <div class="btn-list">
                                            <SpkButton
                                                color=""
                                                customClass="btn btn-lg btn-primary btn-w-lg"
                                            >
                                                Listen Now
                                            </SpkButton>
                                            <SpkButton
                                                color=""
                                                customClass="btn btn-lg btn-primary-ghost btn-w-lg"
                                            >
                                                Try Premium
                                            </SpkButton>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <Image
                                            src="../images/media/media-70.png"
                                            alt=""
                                            class="podcast-banner-img img-fluid d-md-block d-none"
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <div
                            class="mb-4 d-flex align-items-center justify-content-between"
                        >
                            <h6 class="fw-medium mb-0">Categories :</h6>
                            <span class="text-muted fs-13 custom-arrow"
                                >View All<i
                                    class="ti ti-arrow-narrow-right ms-1"
                                ></i></span
                            >
                        </div>
                        <div
                            class="d-flex align-items-center gap-2 mb-4 flex-wrap"
                        >
                            {#each PodcastCategeries as tag}
                                <div class={`nft-tag ${tag.className}`}>
                                    <!-- svelte-ignore a11y_consider_explicit_label -->
                                    <a href="#!" class="stretched-link"></a>
                                    <span class="nft-tag-icon">
                                        <i class={`${tag.icon} fs-16`}></i>
                                    </span>
                                    <span
                                        class="nft-tag-text podcast-category-text"
                                        >{tag.text}</span
                                    >
                                </div>
                            {/each}
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xxl={4}>
                <Card class="custom-card">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Top Podcasters</div>
                        <a href="#!" class="text-muted fs-13"
                            >View All<i
                                class="ti ti-arrow-narrow-right ms-1 align-middle"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled top-podcasters-list">
                            {#each Podcasters as user}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap"
                                    >
                                        <div class="lh-1">
                                            <span class="avatar avatar-rounded">
                                                <Image
                                                    src={user.avatar}
                                                    alt={user.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold"
                                                >{user.name}</span
                                            >
                                            <span
                                                class="fs-13 d-block text-muted"
                                                >{user.title}</span
                                            >
                                        </div>
                                        <div class="text-end">
                                            <SpkBadge
                                                Color=""
                                                CustomClass={`${user.badgeClass}`}
                                                >{user.category}</SpkBadge
                                            >
                                            <span class="fs-13 d-block mt-1"
                                                >{user.followers}</span
                                            >
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Row>
                    <div
                        class="mb-4 d-flex align-items-center justify-content-between"
                    >
                        <h6 class="fw-medium mb-0">Recommendations :</h6>
                        <a href="#!" class="fs-12 text-muted">
                            View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i>
                        </a>
                    </div>
                    {#each MediaCards as card}
                        <Col
                            xxl={4}
                            xl={4}
                            lg={4}
                            md={6}
                            sm={12}
                            class="col-12"
                        >
                            <Card class="custom-card">
                                <Row class="g-0">
                                    <div class="col-3">
                                        <Image
                                            src={card.image}
                                            class="img-fluid rounded-start h-100 w-100"
                                            alt={card.title}
                                        />
                                    </div>
                                    <div class="col-9">
                                        <CardBody class="p-4">
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <div>
                                                    <a href="#!">
                                                        <h6
                                                            class="fw-medium mb-0"
                                                        >
                                                            {card.title}
                                                        </h6>
                                                    </a>
                                                    <span
                                                        class="text-muted fs-12"
                                                        >By {card.author}</span
                                                    >
                                                </div>
                                                <div>
                                                    <SpkButton
                                                        color=""
                                                        customClass="btn btn-primary-light btn-icon btn-wave"
                                                    >
                                                        <i class="ri-play-fill"
                                                        ></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </div>
                                </Row>
                            </Card>
                        </Col>
                    {/each}
                    <div
                        class="mb-4 d-flex align-items-center justify-content-between"
                    >
                        <h6 class="fw-medium mb-0">Recently Played :</h6>
                        <a href="#!" class="fs-12 text-muted">
                            View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i>
                        </a>
                    </div>
                    <Col xl={12}>
                        <Row class="row-cols-xxl-5">
                            {#each RecentlyMedia as card}
                                <div class="col">
                                    <Card class="custom-card">
                                        <!-- svelte-ignore a11y_consider_explicit_label -->
                                        <a href="#!" class="card-anchor"></a>
                                        <Image
                                            src={card.image}
                                            class="card-img-top"
                                            alt={card.title}
                                        />
                                        <CardBody>
                                            <h6
                                                class="card-title fw-medium mb-0"
                                            >
                                                {card.title}
                                            </h6>
                                            <span class="fs-13 text-muted"
                                                >By {card.author}</span
                                            >
                                        </CardBody>
                                    </Card>
                                </div>
                            {/each}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <h6 class="fw-semibold mb-3">Now Playing</h6>
                <Card class="custom-card">
                    <CardBody class="p-4">
                        <div class="text-center mb-4">
                            <span
                                class="avatar mb-3 podcast-playing-now-avatar shadow"
                            >
                                <Image
                                    src="../images/media/media-78.jpg"
                                    alt=""
                                />
                            </span>
                            <a href="#!"
                                ><h6 class="fw-medium mb-1">
                                    Echoes of Tomorrow
                                </h6></a
                            >
                            <span class="fs-12">By Alice Mumbleton</span>
                        </div>
                        <Row class="justify-content-center">
                            <Col xl={9}>
                                <div
                                    class="d-flex gap-3 align-items-center mb-4"
                                >
                                    <div class="fs-12">12.25</div>
                                    <div
                                        class="progress progress-xs progress-custom progress-animate podcast-playing-progress bg-light"
                                        role="progressbar"
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            class="progress-bar bg-success"
                                            style="width: 50%;"
                                        ></div>
                                    </div>
                                    <div class="fs-12">23.45</div>
                                </div>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap gap-3 lh-1 p-3 bg-light rounded"
                                >
                                    <a href="#!">
                                        <i
                                            class="ri-repeat-2-fill fs-5 text-muted"
                                        ></i>
                                    </a>
                                    <a href="#!">
                                        <i
                                            class="ri-skip-back-fill fs-5 text-muted"
                                        ></i>
                                    </a>
                                    <a
                                        href="#!"
                                        class="btn btn-primary btn-icon rounded-circle"
                                    >
                                        <i class="ri-play-fill"></i>
                                    </a>
                                    <a href="#!">
                                        <i
                                            class="ri-skip-forward-fill fs-5 text-muted"
                                        ></i>
                                    </a>
                                    <a href="#!">
                                        <i
                                            class="ri-shuffle-fill fs-5 text-muted"
                                        ></i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Top Charts Today</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <ListGroup class="list-group-flush">
                            {#each ListItems as item}
                                <ListGroupItem class="">
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap"
                                    >
                                        <div class="me-3">{item.id}</div>
                                        <div class="lh-1">
                                            <span
                                                class="avatar avatar-md avatar-rounded"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold"
                                                >{item.title}</span
                                            >
                                            <span
                                                class="d-block text-muted fs-13"
                                                >By {item.author}</span
                                            >
                                        </div>
                                        <div
                                            class="d-block fw-medium d-flex align-items-center gap-2 justify-content-end"
                                        >
                                            {item.likes}
                                            <i
                                                class="ti ti-heart-filled text-danger"
                                            ></i>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            {/each}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Podcast Analytics</div>
                <div class="d-flex flex-wrap gap-2">
                    <div>
                        <input
                            class="form-control form-control-sm"
                            type="text"
                            placeholder="Search Here"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <SpkDropdown
                        option={SortByDropdown}
                        ToggleClass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
                        parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "S.No" },
                        { title: "Podcast Name" },
                        { title: "Genre" },
                        { title: "Episodes" },
                        { title: "Total Listeners" },
                        { title: "Avg. Play Time" },
                        { title: "Likes" },
                        { title: "Comments" },
                        { title: "Shares" },
                        { title: "Rating" },
                        { title: "Status" },
                    ]}
                >
                    {#each PodcastTable as item}
                        <tr>
                            <td>{item.id}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-md avatar-rounded"
                                        >
                                            <Image
                                                width={40}
                                                height={40}
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-semibold d-block"
                                            >{item.title}</span
                                        >
                                        <span class="text-muted fs-13"
                                            >By {item.author}</span
                                        >
                                    </div>
                                </div>
                            </td>
                            <td>{item.category}</td>
                            <td>{item.episodes}</td>
                            <td>{item.views}</td>
                            <td>{item.duration}</td>
                            <td>{item.comments}</td>
                            <td>{item.likes}</td>
                            <td>{item.shares}</td>
                            <td>
                                <div class="d-inline-flex align-items-center">
                                    {item.rating}
                                    <i
                                        class="ti ti-star-filled ms-1 text-warning"
                                    ></i>
                                </div>
                            </td>
                            <td>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`badge ${item.status === "Active" ? "bg-success-transparent" : "bg-danger-transparent"}`}
                                >
                                    {item.status}
                                </SpkBadge>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <CardFooter class="border-top-0">
                <div class="d-flex align-items-center">
                    <div>
                        Showing 6 Entries <i
                            class="bi bi-arrow-right ms-2 fw-semibold"
                        ></i>
                    </div>
                    <div class="ms-auto">
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-2"
                        >
                            <Pagination
                                class="mb-0 flex-wrap customPaginationPageBottom"
                            >
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >2</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        ><i class="bi bi-three-dots"></i></PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >17</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        class="text-primary"
                                        >Next</PaginationLink
                                    >
                                </PaginationItem>
                            </Pagination>
                        </nav>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->
