<script lang="ts">
    import SpkSearchcard from "$lib/@spk/reusable-pages/blog/spk-searchcard.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Books, News, VideoData, images } from "$lib/data/pages/searchdata";
    import { searchDropdwon, searchDropdwon1 } from "$lib/data/uielements/dropdowndata";
    import SearchGallery from "$lib/view/searchGallery.svelte";
    import {
        Card,
        CardBody,
        Col,
        Image,
        Input,
        Nav,
        NavItem,
        NavLink,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    let activeTab = 1;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Search | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Search" activepage="Pages" page="Search" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<!-- svelte-ignore a11y_consider_explicit_label -->

<Row>
    <Col xl={7}>
        <div class="input-group p-3">
            <Input
                type="text"
                class="form-control-lg rounded-pill search-results-input"
                placeholder="Search Here ..."
                aria-label="Search Here ..."
                aria-describedby="button-addon1"
                defaultValue="Best Web Development Frameworks 2025"
            />
            <div class="other-search-types">
                <a href="#!"><i class="bx bx-microphone"></i></a>
                <a href="#!"><i class="bx bx-image"></i></a>
            </div>
        </div>
        <div
            class="d-flex align-items-center justify-content-between flex-wrap gap-3 px-3 pb-0 border-bottom"
        >
            <Nav class="nav-tabs tab-style-8 scaleX" role="tablist">
                <NavItem class="" role="presentation">
                    <NavLink
                        on:click={(e) => {
                            (activeTab = 1), e.preventDefault();
                        }}
                        active={activeTab == 1}
                        class="fw-medium text-muted"
                        href="#search-all"
                        aria-selected="true">All</NavLink
                    >
                </NavItem>
                <NavItem class="" role="presentation">
                    <NavLink
                        on:click={(e) => {
                            (activeTab = 2), e.preventDefault();
                        }}
                        active={activeTab == 2}
                        class="fw-medium text-muted"
                        href="#search-images"
                        aria-selected="false"
                        tabindex={-1}>Images</NavLink
                    >
                </NavItem>
                <NavItem class="" role="presentation">
                    <NavLink
                        on:click={(e) => {
                            (activeTab = 3), e.preventDefault();
                        }}
                        active={activeTab == 3}
                        class="fw-medium text-muted"
                        href="#search-books"
                        aria-selected="false"
                        tabindex={-1}>Books</NavLink
                    >
                </NavItem>
                <NavItem class="" role="presentation">
                    <NavLink
                        on:click={(e) => {
                            (activeTab = 4), e.preventDefault();
                        }}
                        active={activeTab == 4}
                        class="fw-medium text-muted"
                        href="#search-news"
                        aria-selected="false"
                        tabindex={-1}>News</NavLink
                    >
                </NavItem>
                <NavItem class="" role="presentation">
                    <NavLink
                        on:click={(e) => {
                            (activeTab = 5), e.preventDefault();
                        }}
                        active={activeTab == 5}
                        class="fw-medium text-muted"
                        href="#search-videos"
                        aria-selected="false"
                        tabindex={-1}>Videos</NavLink
                    >
                </NavItem>
            </Nav>
            <div class="text-muted p-2">
                About 12,400,000 results (0.68 seconds)
            </div>
        </div>
    </Col>
</Row>

<!--End::row-1 -->

<!-- Start:: row-2 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row class="mt-4">
    <Col xl={12}>
        <TabContent class="p-3" id="searchTabContent">
            <TabPane
                class={`p-0 border-0 ${activeTab == 1 ? "active" : ""}`}
                id="search-all"
                role="tabpanel"
            >
                <Row>
                    <Col xl={7}>
                        <ul class="list-unstyled search-results-list">
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <div class="position-relative">
                                            <a href="#!" class="stretched-link"
                                            ></a>
                                            <div
                                                class="d-flex align-items-center gap-2 mb-2 position-relative"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-md avatar-rounded bg-light border"
                                                    >
                                                        <Image
                                                            src="../images/company-logos/1.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="d-block fw-medium lh-1"
                                                        ><a href="#!"
                                                            >Developer.com</a
                                                        ></span
                                                    >
                                                    <span
                                                        class="fs-12 text-muted"
                                                    >
                                                        www.developer.com/top-10-web-frameworks</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="fw-medium mb-1">
                                                <a
                                                    href="#!"
                                                    class="searched-item-main-link"
                                                    >Top 10 Web Development
                                                    Frameworks to Use in 2025</a
                                                >
                                            </h6>
                                            <span class="d-block text-muted"
                                                >January 4, 2025 - Web
                                                development frameworks are
                                                evolving, and 2025 brings
                                                exciting new trends in the tech
                                                industry. Learn which frameworks
                                                are shaping the future of
                                                front-end and back-end
                                                development.</span
                                            >
                                        </div>
                                    </div>
                                    <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <div class="position-relative">
                                            <a href="#!" class="stretched-link"
                                            ></a>
                                            <div
                                                class="d-flex align-items-center gap-2 mb-2 position-relative"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-md avatar-rounded bg-light border"
                                                    >
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src="../images/company-logos/5.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="d-block fw-medium lh-1"
                                                        ><a href="#!"
                                                            >WebDevHub</a
                                                        ></span
                                                    >
                                                    <span
                                                        class="fs-12 text-muted"
                                                        >www.webdevhub.com/react-best-framework</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="fw-medium mb-1">
                                                <a
                                                    href="#!"
                                                    class="searched-item-main-link"
                                                    >Why React is Still the Best
                                                    Framework for Web
                                                    Development in 2025</a
                                                >
                                            </h6>
                                            <span class="d-block text-muted"
                                                >February 8, 2025 - React
                                                remains a dominant force in the
                                                world of JavaScript frameworks.
                                                Find out what makes React so
                                                powerful and how it simplifies
                                                the development process for
                                                developers in 2025.</span
                                            >
                                        </div>
                                    </div>
                                    <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <h6 class="">
                                            <a href="#!" class="fw-medium"
                                                >Search Related Images :</a
                                            >
                                        </h6>
                                        <div
                                            class="d-flex align-items-start gap-3 flex-wrap"
                                        >
                                            <div>
                                                <figure class="figure mb-0">
                                                    <a
                                                        class="avatar avatar-search"
                                                        href="#!"
                                                    >
                                                        <Image
                                                            class="img-fluid rounded card-img"
                                                            src="../images/media/media-59.jpg"
                                                            alt="..."
                                                        />
                                                    </a>
                                                    <a
                                                        href="#!"
                                                        class="d-block"
                                                    >
                                                        Natural Serenity
                                                    </a>
                                                </figure>
                                            </div>
                                            <div>
                                                <figure class="figure mb-0">
                                                    <a
                                                        class="avatar avatar-search"
                                                        href="#!"
                                                    >
                                                        <Image
                                                            class="img-fluid rounded card-img"
                                                            src="../images/media/media-60.jpg"
                                                            alt="..."
                                                        />
                                                    </a>
                                                    <a
                                                        href="#!"
                                                        class="d-block"
                                                    >
                                                        Active Living
                                                    </a>
                                                </figure>
                                            </div>
                                            <div>
                                                <figure class="figure mb-0">
                                                    <a
                                                        class="avatar avatar-search"
                                                        href="#!"
                                                    >
                                                        <Image
                                                            class="img-fluid rounded card-img"
                                                            src="../images/media/media-61.jpg"
                                                            alt="..."
                                                        />
                                                    </a>
                                                    <a
                                                        href="#!"
                                                        class="d-block"
                                                    >
                                                        Creative Elegance
                                                    </a>
                                                </figure>
                                            </div>
                                            <div>
                                                <figure class="figure mb-0">
                                                    <a
                                                        href="#!"
                                                        class="avatar px-4 avatar-search fw-medium bg-primary-transparent"
                                                    >
                                                        View All <i
                                                            class="ti ti-arrow-narrow-right ms-2"
                                                        ></i>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon1}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <div class="position-relative">
                                            <a href="#!" class="stretched-link"
                                            ></a>
                                            <div
                                                class="d-flex align-items-center gap-2 mb-2 position-relative"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-md avatar-rounded bg-light border"
                                                    >
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src="../images/company-logos/6.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="d-block fw-medium lh-1"
                                                        ><a href="#!"
                                                            >CodeAcademy</a
                                                        ></span
                                                    >
                                                    <span
                                                        class="fs-12 text-muted"
                                                        >www.codeacademy.com/vuejs-2025</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="fw-medium mb-1">
                                                <a
                                                    href="#!"
                                                    class="searched-item-main-link"
                                                    >Vue.js: The Framework You
                                                    Should Learn in 2025</a
                                                >
                                            </h6>
                                            <span class="d-block text-muted"
                                                >January 18, 2025 - Vue.js has
                                                become a favorite for developers
                                                looking for an easy-to-learn and
                                                flexible framework for building
                                                modern web applications. Get a
                                                head start by diving into Vue.js
                                                in 2025.</span
                                            >
                                        </div>
                                    </div>
                                   <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <div class="position-relative">
                                            <a href="#!" class="stretched-link"
                                            ></a>
                                            <div
                                                class="d-flex align-items-center gap-2 mb-2 position-relative"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-md avatar-rounded bg-light border"
                                                    >
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src="../images/company-logos/2.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="d-block fw-medium lh-1"
                                                        ><a href="#!"
                                                            >DeveloperFuture</a
                                                        ></span
                                                    >
                                                    <span
                                                        class="fs-12 text-muted"
                                                        >www.developerfuture.com</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="fw-medium mb-1">
                                                <a
                                                    href="#!"
                                                    class="searched-item-main-link"
                                                    >What’s Next for 2025?</a
                                                >
                                            </h6>
                                            <span class="d-block text-muted"
                                                >In the world of web
                                                development, frameworks evolve
                                                quickly. Let’s look ahead at
                                                what new frameworks will emerge
                                                and how existing ones will adapt
                                                in 2025.</span
                                            >
                                        </div>
                                    </div>
                                    <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <div class="position-relative">
                                            <a href="#!" class="stretched-link"
                                            ></a>
                                            <div
                                                class="d-flex align-items-center gap-2 mb-2 position-relative"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-md avatar-rounded bg-light border"
                                                    >
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src="../images/company-logos/4.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="d-block fw-medium lh-1"
                                                        ><a href="#!"
                                                            >DevStack</a
                                                        ></span
                                                    >
                                                    <span
                                                        class="fs-12 text-muted"
                                                        >www.devstack.com/fullstack-frameworks-2025</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="fw-medium mb-1">
                                                <a
                                                    href="#!"
                                                    class="searched-item-main-link"
                                                    >Best Full-Stack Development
                                                    Frameworks for 2025</a
                                                >
                                            </h6>
                                            <span class="d-block text-muted"
                                                >February 20, 2025 - From MERN
                                                to MEAN, full-stack frameworks
                                                enable developers to create
                                                dynamic web applications. Here
                                                are the top full-stack
                                                frameworks for 2025.</span
                                            >
                                        </div>
                                    </div>
                                    <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                                >
                                    <div>
                                        <div class="position-relative">
                                            <a href="#!" class="stretched-link"
                                            ></a>
                                            <div
                                                class="d-flex align-items-center gap-2 mb-2 position-relative"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar avatar-md avatar-rounded bg-light border"
                                                    >
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src="../images/company-logos/3.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span
                                                        class="d-block fw-medium lh-1"
                                                        ><a href="#!"
                                                            >WebDevDebate</a
                                                        ></span
                                                    >
                                                    <span
                                                        class="fs-12 text-muted"
                                                        >www.webdevdebate.com</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="fw-medium mb-1">
                                                <a
                                                    href="#!"
                                                    class="searched-item-main-link"
                                                    >Which is Better for Web
                                                    Development in 2025?</a
                                                >
                                            </h6>
                                            <span class="d-block text-muted"
                                                >In this article, we compare two
                                                of the biggest web development
                                                frameworks: Angular and React.
                                                Each has its strengths and
                                                weaknesses, but which one will
                                                come out on top in 2025?</span
                                            >
                                        </div>
                                    </div>
                                   <SpkDropdown
                                    CustomClass="ms-auto"
                                     option={searchDropdwon}
                                    ToggleClass="no-caret border-0"
                                    parent={`<i class="ri-more-2-fill fs-5 text-muted"></i>`}
                                    />
                                </div>
                            </li>
                            <li>
                                <h5 class="fw-medium mb-3">
                                    <span class="fw-normal"
                                        >Related Searches for</span
                                    > Best Web Development Frameworks 2025
                                </h5>
                                <div class="row gy-3">
                                    <Col xl={6}>
                                        <div
                                            class="rounded-pill related-search-container"
                                        >
                                            <a href="#!"
                                                >Top web development frameworks
                                                in 2025</a
                                            >
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div
                                            class="rounded-pill related-search-container"
                                        >
                                            <a href="#!"
                                                >Best JavaScript frameworks for
                                                developers</a
                                            >
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div
                                            class="rounded-pill related-search-container"
                                        >
                                            <a href="#!"
                                                >React vs Angular vs Vue
                                                comparison 2025</a
                                            >
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div
                                            class="rounded-pill related-search-container"
                                        >
                                            <a href="#!"
                                                >Future of web development
                                                frameworks</a
                                            >
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div
                                            class="rounded-pill related-search-container"
                                        >
                                            <a href="#!"
                                                >How to choose the right
                                                framework for your project</a
                                            >
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div
                                            class="rounded-pill related-search-container"
                                        >
                                            <a href="#!"
                                                >Svelte vs React performance
                                                comparison 2025</a
                                            >
                                        </div>
                                    </Col>
                                </div>
                            </li>
                        </ul>
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-2 mt-5 d-flex justify-content-center"
                        >
                            <Pagination
                                class="mb-0 flex-wrap customPaginationPageBottom"
                            >
                                <PaginationItem disabled>
                                    <PaginationLink href="#!"
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#!">1</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem>
                                    <PaginationLink href="#!">2</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem>
                                    <PaginationLink href="#!"
                                        >...</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem>
                                    <PaginationLink href="#!">17</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem
                                    ><PaginationLink
                                        href="#!"
                                        class="text-primary"
                                        >Next</PaginationLink
                                    ></PaginationItem
                                >
                            </Pagination>
                        </nav>
                    </Col>
                </Row>
            </TabPane>
            <TabPane
                class={`border-0 p-0 ${activeTab == 2 ? "active" : ""}`}
                id="search-images"
                role="tabpanel"
            >
                <SearchGallery galleryID="my-test-gallery1" {images} />
            </TabPane>
            <TabPane
                class={`border-0 p-0 ${activeTab == 3 ? "active" : ""}`}
                id="search-books"
                role="tabpanel"
            >
                <div class="row">
                    {#each Books as idx}
                        <Col xl={6}>
                            <SpkSearchcard search={idx} />
                        </Col>
                    {/each}
                    <Col xl={12}>
                        <SpkButton
                            color=""
                            customClass="btn btn-info-light btn-loader mx-auto"
                        >
                            <span class="me-2">Loading</span>
                            <span class="loading"
                                ><i class="ri-loader-4-line fs-16"></i></span
                            >
                        </SpkButton>
                    </Col>
                </div>
            </TabPane>
            <TabPane
                class={`border-0 p-0 ${activeTab == 4 ? "active" : ""}`}
                id="search-news"
                role="tabpanel"
            >
                <Row>
                    <Col xl={7}>
                        <Card class="custom-card">
                            <CardBody class="p-0">
                                <ul class="list-group list-group-flush">
                                    {#each News as post}
                                        <li class="list-group-item">
                                            <!-- svelte-ignore element_invalid_self_closing_tag -->
                                            <a
                                                href={post.href}
                                                class="stretched-link"
                                            />
                                            <div class="mb-1">
                                                <span
                                                    class="h6 fw-semibold text-primary"
                                                    >{post.title}</span
                                                >
                                            </div>
                                            <span class="text-muted"
                                                >{post.description}</span
                                            >
                                            <span class="d-block mt-2"
                                                >{post.dateTime}</span
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            </CardBody>
                        </Card>
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-2 mt-5"
                        >
                            <Pagination
                                class="mb-0 flex-wrap d-flex justify-content-center"
                            >
                                <PaginationItem disabled>
                                    <PaginationLink href="#!"
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#!">1</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem>
                                    <PaginationLink href="#!">2</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem>
                                    <PaginationLink href="#!"
                                        >...</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem>
                                    <PaginationLink href="#!">17</PaginationLink
                                    ></PaginationItem
                                >
                                <PaginationItem
                                    ><PaginationLink
                                        href="#!"
                                        class="text-primary"
                                        >Next</PaginationLink
                                    ></PaginationItem
                                >
                            </Pagination>
                        </nav>
                    </Col>
                </Row>
            </TabPane>
            <TabPane
                class={`border-0 p-0 ${activeTab == 5 ? "active" : ""}`}
                id="search-videos"
                role="tabpanel"
            >
                <Row class="gy-4">
                    {#each VideoData as video, index}
                        <Col xl={3} lg={6} md={6} sm={6} class="col-12">
                            <div class="ratio ratio-16x9">
                                <iframe
                                    src={video.videoUrl}
                                    title={`YouTube video player ${index}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div class="p-2">
                                <div class="d-flex align-items-center gap-1">
                                    <div
                                        class="figure-caption fs-13 fw-medium text-default text-truncate"
                                    >
                                        {video.title}
                                    </div>
                                </div>
                                <a
                                    href={video.linkUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    class="fs-12 link-primary text-decoration-underline"
                                >
                                    {video.linkText}
                                </a>
                            </div>
                        </Col>
                    {/each}
                    <Col xl={12} class="my-4">
                        <SpkButton
                            customClass="btn btn-info-light btn-loader mx-auto"
                        >
                            <span class="me-2">Loading</span>
                            <span class="loading"
                                ><i class="ri-loader-4-line fs-16"></i></span
                            >
                        </SpkButton>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
    </Col>
</Row>

<!-- End:: row-2 -->
