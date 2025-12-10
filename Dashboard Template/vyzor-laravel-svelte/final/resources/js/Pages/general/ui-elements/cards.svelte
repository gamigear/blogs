<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import SpkBasiccard from "@/shared/@spk/uielements/reusable-cards/spk-basiccard.svelte";
    import { CardText, Col, Image, Row } from "@sveltestrap/sveltestrap";
    import Spklistgroupcards from "@/shared/@spk/uielements/reusable-cards/spklistgroupcards.svelte";
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import Spkcollapsecard from "@/shared/@spk/uielements/reusable-cards/spkcollapsecard.svelte";
    import Spknavigationcards from "@/shared/@spk/uielements/reusable-cards/spknavigationcards.svelte";
    import Spkimageoverlaycard from "@/shared/@spk/uielements/reusable-cards/spkimageoverlaycard.svelte";
    import Spkhorizontalcards from "@/shared/@spk/uielements/reusable-cards/spkhorizontalcards.svelte";
    import Spkbgcards from "@/shared/@spk/uielements/reusable-cards/spkbgcards.svelte";
    import Spkborderedcards from "@/shared/@spk/uielements/reusable-cards/spkborderedcards.svelte";
    import { borderCards } from "@/shared/data/uielements/cardsdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Cards | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Cards" activepage="UI Elements" page="Cards" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<Row>
    <Col xxl={3} xl={6} lg={6} md={6} sm={6}>
        <SpkBasiccard
            titleClass="fw-medium"
            imgClass="card-img-top"
            imgSrc="../../images/media/media-24.jpg"
            title="Card title"
            bodyText={true}
            outBodyText={true}
        >
            <div slot="bodyText">
                <CardText class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </CardText>
            </div>
            <div slot="outBodyText">
                <ul class="list-group list-group-flush border-top">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                </ul>
                <div class="card-body border-top">
                    <a href="#!" class="card-link text-primary">Card link</a>
                    <a href="#!" class="card-link text-secondary d-inline-block"
                        >Another link</a
                    >
                </div>
            </div>
        </SpkBasiccard>
    </Col>
    <Col xxl={3} xl={6} lg={6} md={6} sm={6}>
        <SpkBasiccard
            titleClass="fw-medium"
            imgClass="card-img-top"
            footer={true}
            imgSrc="../../images/media/media-22.jpg"
            title="Card title"
            bodyText={true}
        >
            <div slot="bodyText">
                <p class="card-text text-muted">
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic.
                </p>
                <a href="#!" class="btn btn-primary">Read More</a>
            </div>
            <div slot="footer">
                <span class="card-text">Last updated 3 mins ago</span>
            </div>
        </SpkBasiccard>
    </Col>
    <Col xxl={3} xl={6} lg={6} md={6} sm={6}>
        <SpkBasiccard
            imgClass="card-img-top"
            imgSrc="../../images/media/media-23.jpg"
            bodyText={true}
        >
            <div slot="bodyText">
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
        </SpkBasiccard>
        <h6 class="mb-3">Only Card Body:</h6>
        <SpkBasiccard bodyText={true}>
            <div slot="bodyText">
                <p class="mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                </p>
            </div>
        </SpkBasiccard>
    </Col>
    <Col xxl={3} xl={6} lg={6} md={6} sm={6}>
        <SpkBasiccard
            header="Featured"
            title="Special title treatment"
            bodyText={true}
        >
            <div slot="bodyText">
                <p class="card-text">
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage
                </p>
                <a href="#!" class="btn btn-primary">Read More</a>
            </div>
        </SpkBasiccard>
        <SpkBasiccard
            title="Card title"
            subTitle="Card subtitle"
            bodyText={true}
            footer={true}
        >
            <div slot="bodyText">
                <p class="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration many
                    variations of passages of Lorem Ipsum available there are so
                    many ways to solve but the majority.
                </p>
            </div>
            <div slot="footer">
                <a href="#!" class="card-link text-danger m-1">Buy Now</a>
                <a href="#!" class="card-link text-success m-1"><u>Review</u></a
                >
            </div>
        </SpkBasiccard>
    </Col>
</Row>
<!-- End::row-1 -->

<!-- Start::row-2 -->
<Row>
    <Col xxl={6} xl={6} lg={12}>
        <h6 class="mb-3">Using Grid Markups:</h6>
        <Row class=" row-cols-12">
            <Col>
                <SpkBasiccard bodyText={true}>
                    <div slot="bodyText">
                        <Image
                            src="../../images/media/media-25.jpg"
                            class="card-img mb-3"
                            alt="..."
                        />
                        <h6 class="card-title fw-medium">Product A</h6>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#!" class="btn btn-primary">Purchase</a>
                    </div>
                </SpkBasiccard>
            </Col>
            <Col>
                <SpkBasiccard bodyText={true}>
                    <div slot="bodyText">
                        <Image
                            src="../../images/media/media-26.jpg"
                            class="card-img mb-3"
                            alt="..."
                        />
                        <h6 class="card-title fw-medium">Product B</h6>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#!" class="btn btn-secondary">Purchase</a>
                    </div>
                </SpkBasiccard>
            </Col>
            <Col>
                <SpkBasiccard bodyText={true}>
                    <div slot="bodyText">
                        <Image
                            src="../../images/media/media-27.jpg"
                            class="card-img mb-3"
                            alt="..."
                        />
                        <h6 class="card-title fw-medium">Product-C</h6>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#!" class="btn btn-light">Purchase</a>
                    </div>
                </SpkBasiccard>
            </Col>
        </Row>
    </Col>
    <Col xxl={6} xl={6} lg={12}>
        <Row>
            <h6 class="mb-3">Quote:</h6>
            <Col xl={12}>
                <SpkBasiccard bodyText={true}>
                    <div slot="bodyText">
                        <blockquote class="blockquote mb-0 text-center">
                            <h6>
                                The greatest glory in living lies not in never
                                falling, but in rising every time we fall.
                            </h6>
                            <footer class="blockquote-footer mt-2 fs-14">
                                Someone famous in <cite title="Source Title"
                                    >Source Title</cite
                                >
                            </footer>
                        </blockquote>
                    </div>
                </SpkBasiccard>
            </Col>
            <Col xl={12}>
                <h6 class="mb-3">List Group:</h6>
                <Row>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                        <Spklistgroupcards Listvariant={true}>
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                        </Spklistgroupcards>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                        <Spklistgroupcards
                            Listvariant={true}
                            CardHeaderTag={true}
                            Headertext="Featured"
                        >
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </Spklistgroupcards>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                        <Spklistgroupcards
                            Listvariant={true}
                            CardFooterTag={true}
                            Footertext="Card footer"
                            Customfooterclass="border-top-0"
                        >
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </Spklistgroupcards>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Col>
</Row>
<!-- End::row-2 -->

<!-- Start::row-3-->
<h6 class="mb-3">Card Header & Footer:</h6>
<Row>
    <div class="col-xl-3">
        <SpkBasiccard
            cardClass="text-center"
            cardHeader="border-bottom-0 pb-0"
            useDivHeader={true}
            bodyClass="pt-1"
            header={true}
            bodyText={true}
        >
            <span class="ms-auto shadow-lg fs-17" slot="header"
                ><i class="ri-heart-fill text-danger"></i></span
            >
            <div slot="bodyText">
                <span class="avatar avatar-xl avatar-rounded me-2 mb-2">
                    <Image src="../../images/faces/5.jpg" alt="img" />
                </span>
                <div class="fw-medium fs-16">Sasha Max</div>
                <p class="mb-4 text-muted fs-11">Web Developer</p>
                <div class="btn-list">
                    <SpkButton customClass="btn-icon btn-facebook btn-wave">
                        <i class="ri-facebook-line"></i>
                    </SpkButton>
                    <SpkButton customClass=" btn-icon btn-twitter btn-wave">
                        <i class="ri-twitter-x-line"></i>
                    </SpkButton>
                    <SpkButton customClass=" btn-icon btn-instagram btn-wave">
                        <i class="ri-instagram-line"></i>
                    </SpkButton>
                </div>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-3">
        <SpkBasiccard
            cardClass="border border-primary"
            footer={true}
            bodyText={true}
        >
            <div slot="bodyText">
                <svg
                    class="footer-card-icon my-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    ><path
                        fill="#C6CDD1"
                        d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"
                    /><path
                        fill="#C6CDD1"
                        d="M11 1H3a2 2 0 0 0-2 2v8h10V1z"
                    /><path
                        fill="#A1ABB2"
                        d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z"
                    /><path
                        fill="#878A8F"
                        d="M1 11v8a2 2 0 0 0 2 2h8V11H1z"
                    /><path
                        fill="#797D82"
                        d="M11 11v10h8a2 2 0 0 0 2-2v-8H11z"
                    /><path fill="#FFF" d="M14 6h5v1h-5z" /><path
                        d="M19 20.75H3a2 2 0 0 1-2-2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-.25a2 2 0 0 1-2 2z"
                        opacity=".1"
                    /><circle cx="16" cy="16" r="7" fill="#136ad0" /><path
                        d="M16 22.75c-3.08 0-5.704-1.97-6.696-4.713C10.18 20.907 12.85 23 16 23s5.82-2.094 6.696-4.963C21.704 20.781 19.08 22.75 16 22.75z"
                        opacity=".1"
                    /><path
                        fill="#FFF"
                        d="M16 9.25c3.08 0 5.704 1.97 6.696 4.713C21.82 11.093 19.15 9 16 9s-5.82 2.094-6.696 4.963C10.296 11.219 12.92 9.25 16 9.25z"
                        opacity=".2"
                    /><path fill="#FFF" d="M4 6h5v1H4z" /><path
                        fill="#FFF"
                        d="M6 4h1v5H6zM13 14h6v1h-6zM13 17h6v1h-6zM4.379 15.086l.707-.707 3.535 3.535-.707.707z"
                    /><path
                        fill="#FFF"
                        d="m4.379 17.914 3.535-3.535.707.707-3.535 3.535z"
                    /><path
                        fill="#FFF"
                        d="M19 1H3a2 2 0 0 0-2 2v.25a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V3a2 2 0 0 0-2-2z"
                        opacity=".2"
                    /><linearGradient
                        id="a"
                        x1="14.367"
                        x2="19.862"
                        y1="14.367"
                        y2="19.862"
                        gradientUnits="userSpaceOnUse"
                        ><stop
                            offset="0"
                            stop-color="#3E2723"
                            stop-opacity=".2"
                        /><stop
                            offset="1"
                            stop-color="#3E2723"
                            stop-opacity=".02"
                        /></linearGradient
                    ><path
                        fill="url(#a)"
                        d="M19 14v1h-6l2 2h4v1h-6l4.766 4.766a7.014 7.014 0 0 0 5-5L19 14z"
                    /><linearGradient
                        id="b"
                        x1="-.448"
                        x2="23.366"
                        y1="5.662"
                        y2="16.766"
                        gradientUnits="userSpaceOnUse"
                        ><stop
                            offset="0"
                            stop-color="#FFF"
                            stop-opacity=".2"
                        /><stop
                            offset="1"
                            stop-color="#FFF"
                            stop-opacity="0"
                        /></linearGradient
                    ><path
                        fill="url(#b)"
                        d="M21 11.11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.11A6.974 6.974 0 0 0 16 23c3.86 0 7-3.14 7-7a6.974 6.974 0 0 0-2-4.89z"
                    /></svg
                >
                <p class="mb-0 mt-3 fs-20 fw-medium lh-1">Calculations</p>
            </div>
            <div slot="footer">
                Lorem Ipsum is therefore always free from repetition, injected
                humour.
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-3">
        <SpkBasiccard
            useDivHeader={true}
            header={true}
            bodyText={true}
            footer={true}
        >
            <div slot="header" class="d-flex align-items-center w-100">
                <div class="me-2">
                    <span class="avatar avatar-rounded">
                        <img src="../../images/faces/11.jpg" alt="img" />
                    </span>
                </div>
                <div class="">
                    <div class="fs-15 fw-medium">Adam Smith</div>
                    <p class="mb-0 text-muted fs-11">28 Years, Male</p>
                </div>
                <Dropdown class=" ms-auto">
                    <DropdownToggle
                        color=""
                        href="#!"
                        class="btn btn-icon btn-sm btn-light"
                        data-bs-toggle="dropdown"
                    >
                        <i class="fe fe-more-vertical"></i>
                    </DropdownToggle>
                    <DropdownMenu class="dropdown-menu">
                        <DropdownItem class="dropdown-item" href="#!"
                            >Week</DropdownItem
                        >
                        <DropdownItem class="dropdown-item" href="#!"
                            >Month</DropdownItem
                        >
                        <DropdownItem class="dropdown-item" href="#!"
                            >Year</DropdownItem
                        >
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div slot="bodyText">
                If you are going to use, you need to be sure there isn't
                anything embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators.
            </div>
            <div slot="footer">
                <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div class="fs-semibold fs-14">28,Nov 2024</div>
                    <div class="fw-medium text-success">
                        Assistant Professor
                    </div>
                </div>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-3">
        <SpkBasiccard
            useDivHeader={true}
            bodyClass="pt-3"
            cardHeader="border-bottom-0 pb-0"
            header={true}
            bodyText={true}
            footer={true}
        >
            <div slot="header">
                <div>
                    <span class="text-warning me-1"
                        ><i class="bi bi-star-fill"></i></span
                    >
                    <span class="text-warning me-1"
                        ><i class="bi bi-star-fill"></i></span
                    >
                    <span class="text-warning me-1"
                        ><i class="bi bi-star-fill"></i></span
                    >
                    <span class="text-warning me-1"
                        ><i class="bi bi-star-fill"></i></span
                    >
                    <span class="text-black op-1"
                        ><i class="bi bi-star-fill"></i></span
                    >
                    <p class="d-block text-muted mb-0 fs-12 fw-medium">
                        1 year ago
                    </p>
                </div>
            </div>
            <div slot="bodyText">
                <div class="fw-medium fs-15 mb-2">Very Great!</div>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected humour
            </div>
            <div slot="footer">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-sm avatar-rounded me-2">
                        <Image src="../../images/faces/12.jpg" alt="img" />
                    </span>
                    <div class="fw-medium fs-14">Corey Anderson</div>
                </div>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-3">
        <SpkBasiccard
            header="Featured"
            titleClass="fw-medium mb-2"
            cardClass="text-center"
            bodyText={true}
            footer={true}
        >
            <div slot="bodyText">
                <h6 class="card-title fw-medium mb-2">Breaking News !</h6>
                <p class="card-text mb-4">
                    With supporting text below as a natural lead-in to
                    additional content.
                </p>
                <a href="#!" class="btn btn-primary mt-2 me-1">Read More</a>
                <a href="#!" class="btn btn-outline-secondary mt-2 me-1"
                    >Close</a
                >
            </div>
            <div slot="footer">
                <div class="text-muted">11.32pm</div>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-3">
        <SpkBasiccard useDivHeader={true} header={true} bodyText={true}>
            <div class="d-flex w-100" slot="header">
                <div class="me-4">
                    <span class="avatar avatar-lg avatar-rounded">
                        <Image src="../../images/faces/12.jpg" alt="img" />
                    </span>
                </div>
                <div
                    class="d-flex align-items-center justify-content-between w-100 flex-wrap"
                >
                    <div class="me-3">
                        <p class="text-muted mb-0">Posts</p>
                        <p class="fw-medium fs-16 mb-0">25</p>
                    </div>
                    <div class="me-3">
                        <p class="text-muted mb-0">Followers</p>
                        <p class="fw-medium fs-16 mb-0">1253</p>
                    </div>
                    <div class="me-3">
                        <p class="text-muted mb-0">Following</p>
                        <p class="fw-medium fs-16 mb-0">367</p>
                    </div>
                </div>
            </div>
            <div slot="bodyText">
                <div class="fw-medium fs-16">Angelina Caprio</div>
                <div class="text-muted fs-11 mb-4">Angular Developer</div>
                <p class="fs-14 fw-medium mb-1">About:</p>
                <p class="mb-0 card-text">
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-2">
        <SpkBasiccard bodyText={true}>
            <div slot="bodyText">
                <Image
                    src="../../images/media/media-4.jpg"
                    class="card-img mb-3"
                    alt="..."
                />
                <h6 class="card-title fw-medium mb-3">
                    Mountains<SpkBadge
                        Color="primary"
                        CustomClass="float-end fs-10">New</SpkBadge
                    >
                </h6>
                <p class="card-text">
                    With supporting text below as a natural lead-in.
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-2">
        <SpkBasiccard bodyText={true}>
            <div slot="bodyText">
                <img
                    src="../../images/media/media-9.jpg"
                    class="card-img mb-3"
                    alt="..."
                />
                <h6 class="card-title fw-medium mb-3">
                    Hills<span class="badge bg-secondary float-end fs-10"
                        >Hot</span
                    >
                </h6>
                <p class="card-text">
                    With supporting text below as a natural lead-in.
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-2">
        <SpkBasiccard bodyText={true}>
            <div slot="bodyText">
                <img
                    src="../../images/media/media-15.jpg"
                    class="card-img mb-3"
                    alt="..."
                />
                <h6 class="card-title fw-medium mb-3">
                    Nature<span class="badge bg-light text-dark float-end fs-10"
                        >Offer</span
                    >
                </h6>
                <p class="card-text">
                    With supporting text below as a natural lead-in.
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-4">
        <Spkcollapsecard
            expandButton={true}
            collapseToggle={true}
            Navigate="#!"
            Title="Card With Collapse Button"
            footertext="Read More"
        >
            <h6 class="card-text fw-medium">Collapsible Card</h6>
            <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
            </p>
        </Spkcollapsecard>
    </div>
    <div class="col-xl-4">
        <Spkcollapsecard
            hideToggle={true}
            Navigate="#!"
            Title="Card With Close Button"
            footertext="Read More"
        >
            <h6 class="card-text fw-medium">Closed Card</h6>
            <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
            </p>
        </Spkcollapsecard>
    </div>
    <div class="col-xl-4">
        <Spkcollapsecard
            normalToggle={true}
            Navigate="#!"
            Title="Card With Fullscreen Button"
            footertext="Read More"
        >
            <h6 class="card-text fw-medium">FullScreen Card</h6>
            <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
            </p>
        </Spkcollapsecard>
    </div>
</Row>
<!-- End::row-3-->

<!-- Start::row-4 -->
<Row>
    <div class="col-xl-3">
        <Row>
            <h6 class="mb-3">Mixins utilities:</h6>
            <Col xl={12}>
                <SpkBasiccard
                    useDivHeader={true}
                    cardHeader="bg-transparent border-bottom border-success"
                    header={true}
                    bodyClass="text-success"
                    cardFooter="bg-transparent border-top border-success"
                    footer={true}
                    cardClass="border border-success mb-3"
                    bodyText={true}
                >
                    <div slot="header">Header</div>
                    <div slot="bodyText">
                        <h6 class="card-title fw-medium">
                            Looking For Success?
                        </h6>
                        <p class="card-text">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text. All the
                            Lorem Ipsum generators on the Internet tend to
                            repeat predefined chunks as necessary.
                        </p>
                    </div>
                    <div slot="footer">Footer</div>
                </SpkBasiccard>
            </Col>
        </Row>
    </div>
    <div class="col-xl-9">
        <h6 class="mb-3">Text Alignment:</h6>
        <Row>
            <div class="col-xl-4">
                <SpkBasiccard bodyText={true}>
                    <div slot="bodyText">
                        <div class="mb-2">
                            <span class="avatar avatar-md">
                                <Image
                                    src="../../images/faces/15.jpg"
                                    alt="img"
                                />
                            </span>
                        </div>
                        <h6 class="card-title fw-medium">Where it come from</h6>
                        <p class="card-text">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature.
                        </p>
                        <a href="#!" class="btn btn-primary">Go somewhere</a>
                    </div>
                </SpkBasiccard>
            </div>
            <div class="col-xl-4">
                <SpkBasiccard cardClass="text-end" bodyText={true}>
                    <div slot="bodyText">
                        <div class="mb-2">
                            <span class="avatar avatar-md">
                                <Image
                                    src="../../images/faces/11.jpg"
                                    alt="img"
                                />
                            </span>
                        </div>
                        <h6 class="card-title fw-medium">What is special?</h6>
                        <p class="card-text">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature.
                        </p>
                        <a href="#!" class="btn btn-primary">Go somewhere</a>
                    </div>
                </SpkBasiccard>
            </div>
            <div class="col-xl-4">
                <SpkBasiccard cardClass="text-center" bodyText={true}>
                    <div slot="bodyText">
                        <div class="mb-2">
                            <span class="avatar avatar-md">
                                <Image
                                    src="../../images/faces/3.jpg"
                                    alt="img"
                                />
                            </span>
                        </div>
                        <h6 class="card-title fw-medium">Why do we use it?</h6>
                        <p class="card-text">
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text.
                        </p>
                        <a href="#!" class="btn btn-primary">Go somewhere</a>
                    </div>
                </SpkBasiccard>
            </div>
        </Row>
    </div>
</Row>
<!-- End::row-4 -->

<!-- Start::row-5 -->
<Row>
    <div class="col-xxl-6 col-xl-12">
        <h6 class="mb-3">Using Utilities:</h6>
        <Row>
            <div class="col-xl-6">
                <SpkBasiccard
                    header="Using Width 75%"
                    footer={true}
                    cardClass="w-75"
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <div class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id nostrum omnis excepturi consequatur
                            molestiae
                        </div>
                    </div>
                    <div slot="footer">
                        <a href="#!" class="btn btn-primary d-grid">Button</a>
                    </div>
                </SpkBasiccard>
            </div>
            <div class="col-xl-6">
                <SpkBasiccard
                    header="Using Width 50%"
                    footer={true}
                    cardClass="w-50"
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <div class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit
                        </div>
                    </div>
                    <div slot="footer">
                        <a href="#!" class="btn btn-primary d-grid">Button</a>
                    </div>
                </SpkBasiccard>
            </div>
        </Row>
    </div>
    <div class="col-xxl-6 col-xl-12">
        <h6 class="mb-3">Navigation:</h6>
        <Row>
            <div class="col-xl-6">
                <Spknavigationcards
                    LinkNavigate="#!"
                    Navigationclass="tabs"
                    Customheaderclass=" p-4 pt-3 ps-2"
                />
            </div>
            <div class="col-xl-6">
                <Spknavigationcards LinkNavigate="#!" Navigationclass="pills" />
            </div>
        </Row>
    </div>
</Row>
<!-- End::row-5 -->

<!-- Start::row-6 -->
<h6 class="mb-3">Image Caps:</h6>
<Row>
    <div class="col-xl-4">
        <SpkBasiccard
            imgSrc="../../images/media/media-29.jpg"
            imgClass="card-img-top"
            bodyText={true}
        >
            <div slot="bodyText">
                <h6 class="card-title fw-medium">
                    Image caps are widely used in Blog's
                </h6>
                <p class="card-text mb-3 text-muted">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings.
                </p>
                <p class="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-4">
        <SpkBasiccard
            imgSrcB="../../images/media/media-28.jpg"
            imgClassB="card-img-bottom"
            bodyText={true}
        >
            <div slot="bodyText">
                <h6 class="card-title fw-medium">
                    Image caps are widely used in Blog's
                </h6>
                <p class="card-text mb-3 text-muted">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings.
                </p>
                <p class="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-4">
        <SpkBasiccard
            imgSrcB="../../images/media/media-31.jpg"
            imgClassB="card-img rounded-0"
            header="Image caps are widely used in Blog's"
            footer={true}
            bodyText={true}
        >
            <div slot="bodyText">
                <p class="card-text mb-1 text-muted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
            <div slot="footer">
                <p class="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-4">
        <SpkBasiccard
            imgSrcA="../../images/media/media-32.jpg"
            imgClassA="card-img-top"
            header="Image caps are widely used in Blog's"
            footer={true}
            bodyText={true}
        >
            <div slot="bodyText">
                <p class="card-text mb-1 text-muted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
            <div slot="footer">
                <p class="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-4">
        <SpkBasiccard
            imgSrcB="../../images/media/media-30.jpg"
            imgClassB="card-img rounded-0"
            footer={true}
            bodyText={true}
        >
            <div slot="bodyText">
                <h6 class="card-title fw-medium mb-1">
                    Image caps are widely used in Blog's
                </h6>
                <p class="card-text mb-1 text-muted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
            <div slot="footer">
                <p class="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </SpkBasiccard>
    </div>
    <div class="col-xl-4">
        <SpkBasiccard
            imgSrcC="../../images/media/media-33.jpg"
            imgClassC="card-img-bottom"
            footer={true}
            bodyText={true}
            header="Image caps are widely used in Blog's"
        >
            <div slot="bodyText">
                <p class="card-text mb-1 text-muted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
            <div slot="footer">
                <p class="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </SpkBasiccard>
    </div>
</Row>
<!-- End::row-6 -->

<!-- Start::row-7 -->
<h6 class="mb-3">Image Overlays:</h6>
<Row>
    <div class="col-xl-4">
        <Spkimageoverlaycard
            CustomClass="overlay-card"
            Imgsrc="../../images/media/media-35.jpg"
            Title="Image Overlays Are Awesome!"
            CustomTitleclass="text-fixed-white"
            CardHeaderTag={true}
            CardFooterTag={false}
            Custombodyclass="text-fixed-white overflow-y-auto"
        >
            <div class="card-text mb-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
            </div>
            <div class="card-text">Last updated 3 mins ago</div>
        </Spkimageoverlaycard>
    </div>
    <div class="col-xl-4">
        <Spkimageoverlaycard
            CustomClass="overlay-card"
            Custombodyclass="text-fixed-white"
            Footertext="Last updated 3 mins ago"
            Imgsrc="../../images/media/media-36.jpg"
            Customfooterclass="text-fixed-white"
            Overlayclass="over-content-bottom"
            CardHeaderTag={false}
            CardFooterTag={true}
        >
            <div class="card-text text-fixed-white">
                Image Overlays Are Awesome!
            </div>
            <div class="card-text mb-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
            </div>
            <div class="card-text">Last updated 3 mins ago</div>
        </Spkimageoverlaycard>
    </div>
    <div class="col-xl-4">
        <Spkimageoverlaycard
            CustomClass="overlay-card"
            Title=" Image Overlays Are Awesome!"
            CustomTitleclass="text-fixed-white"
            Imgsrc="../../images/media/media-34.jpg"
            Custombodyclass="text-fixed-white overflow-y-auto"
            Customfooterclass="text-fixed-white"
            CardHeaderTag={true}
            CardFooterTag={true}
            Footertext="Last updated 3 mins ago"
        >
            <div class="card-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
            </div>
        </Spkimageoverlaycard>
    </div>
</Row>
<!-- End::row-7 -->

<!-- Start::row-8 -->
<h6 class="mb-3">Horizontal Cards:</h6>
<Row>
    <div class="col-xl-4">
        <Spkhorizontalcards
            CardHeaderTag={true}
            Navigate=""
            Imgposition="before"
            Imagesrc="../../images/media/media-37.jpg"
            Imgclass="img-fluid rounded-start h-100 w-100"
            Title="Horizontal Cards"
            CardFooterTag={true}
            Footertext={"Last updated 3 mins ago"}
        >
            <h6 class="card-title fw-medium">Horizontal cards are awesome!</h6>
            <p class="card-text">
                This is a wider card with supporting text below as a natural .
            </p>
        </Spkhorizontalcards>
    </div>
    <div class="col-xl-4">
        <Spkhorizontalcards
            CardHeaderTag={true}
            Navigate=""
            Imgposition="after"
            Imagesrc="../../images/media/media-38.jpg"
            Title="Horizontal Cards"
        >
            <h6 class="card-title fw-medium">Horizontal cards are awesome!</h6>
            <p class="card-text mb-3">
                This is a wider card with suppo rting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
            </p>
        </Spkhorizontalcards>
    </div>
    <div class="col-xl-4">
        <Spkhorizontalcards
            CardFooterTag={true}
            Navigate=""
            Footertext="Last updated 3 mins ago"
            Imgposition="after"
            Imagesrc="../../images/media/media-39.jpg"
        >
            <h6 class="card-title fw-medium mb-2">Horizontal Cards</h6>
            <div class="card-title mb-3">Horizontal cards are awesome!</div>
            <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </p>
        </Spkhorizontalcards>
    </div>
</Row>
<!-- End::row-8 -->
<!-- Start::row-9 -->
<h6 class="mb-3">Background Colored Cards:</h6>
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="primary"
            Imgsrc="../../images/faces/11.jpg"
            Title="Adam Smith"
            Value="Finished by today"
            Textclass="fixed-white"
            Class="fixed-white"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="secondary"
            Imgsrc="../../images/faces/12.jpg"
            Title="Elisha Corner"
            Value="Completed 24 days back"
            Textclass="fixed-white"
            Class="fixed-white"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="warning"
            Imgsrc="../../images/faces/1.jpg"
            Title="Sarah Alina"
            Value="Completed today"
            Textclass="fixed-white"
            Class="fixed-white"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="info"
            Imgsrc="../../images/faces/8.jpg"
            Title="Monica Karen"
            Value="Pending from 4 days"
            Textclass="fixed-white"
            Class="fixed-white"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="success"
            Imgsrc="../../images/faces/5.jpg"
            Title="Samantha sid"
            Value="In leave for 1 month"
            Textclass="fixed-white"
            Class="fixed-white"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="danger"
            Imgsrc="../../images/faces/14.jpg"
            Title="Sebastien steyn"
            Value="Completed by Tomorrow"
            Textclass="fixed-white"
            Class="fixed-white"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="light"
            Imgsrc="../../images/faces/13.jpg"
            Title="Jacob Smith"
            Value="Finished by 24,Nov"
            Textclass="muted"
            Class="text-default"
        />
    </div>
    <div class="col-xl-3">
        <Spkbgcards
            Navigate="#!"
            color="dark"
            Imgsrc="../../images/faces/16.jpg"
            Title="Pope Adam"
            Value="Completed on 24,may"
            Textclass="text-white"
            Class="fixed-white"
        />
    </div>
</Row>
<!-- End::row-9 -->

<!-- Start::row-10 -->
<h6 class="mb-3">Colored Border Cards:</h6>
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    {#each borderCards as idx}
        <Col xl={3}>
            <Spkborderedcards
                Navigate="#!"
                Title={idx.title}
                badges={idx.badges}
                images={idx.images}
                Class={idx.Class}
                Color={idx.Color}
            />
        </Col>
    {/each}
</Row>
<!-- End::row-10 -->

<!-- Start::row-11 -->
<h6 class="mb-3">Card Groups With Footer:</h6>
<Row>
    <Col xl={12}>
        <div class="card-group">
            <SpkBasiccard
                imgSrcA="../../images/media/media-40.jpg"
                imgClassA="card-img-top"
                footer={true}
                bodyText={true}
            >
                <div slot="bodyText">
                    <h6 class="card-title fw-medium">
                        Delecious food is a blessing!
                    </h6>
                    <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                </div>
                <div slot="footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </SpkBasiccard>
            <SpkBasiccard
                imgSrcA="../../images/media/media-42.jpg"
                imgClassA="card-img-top"
                footer={true}
                bodyText={true}
            >
                <div slot="bodyText">
                    <h6 class="card-title fw-medium">Writing is an art.</h6>
                    <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </p>
                </div>
                <div slot="footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </SpkBasiccard>
            <SpkBasiccard
                imgSrcA="../../images/media/media-41.jpg"
                imgClassA="card-img-top"
                footer={true}
                bodyText={true}
            >
                <div slot="bodyText">
                    <h6 class="card-title fw-medium">
                        Is office the best place to earn knowledge?
                    </h6>
                    <p class="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                    </p>
                </div>
                <div slot="footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </SpkBasiccard>
        </div>
    </Col>
</Row>
<!-- End::row-11 -->

<!-- Start::row-12 -->
<h6 class="mb-3">Grid Cards:</h6>
<Row>
    <Col xl={12}>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <Col>
                <SpkBasiccard
                    imgSrcA="../../images/media/media-44.jpg"
                    imgClassA="card-img-top"
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <h6 class="card-title fw-medium">
                            Morphology of a typical fruit.
                        </h6>
                        <p class="card-text">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.
                        </p>
                    </div>
                </SpkBasiccard>
            </Col>
            <Col>
                <SpkBasiccard
                    imgSrcA="../../images/media/media-43.jpg"
                    imgClassA="card-img-top"
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <h6 class="card-title fw-medium">
                            Research improves ability & agility !
                        </h6>
                        <p class="card-text">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.
                        </p>
                    </div>
                </SpkBasiccard>
            </Col>
            <Col>
                <SpkBasiccard
                    imgSrcA="../../images/media/media-45.jpg"
                    imgClassA="card-img-top"
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <h6 class="card-title fw-medium">
                            Most tropical areas are suitable
                        </h6>
                        <p class="card-text">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.
                        </p>
                    </div>
                </SpkBasiccard>
            </Col>
            <Col>
                <SpkBasiccard
                    imgSrcA="../../images/media/media-46.jpg"
                    imgClassA="card-img-top"
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <h6 class="card-title fw-medium">
                            Are They seasonal fruits ?
                        </h6>
                        <p class="card-text">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.
                        </p>
                    </div>
                </SpkBasiccard>
            </Col>
        </div>
    </Col>
</Row>
<!-- End::row-12 -->

<!-- Start::row-13 -->
<h6 class="mb-3">Cards With Link:</h6>
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <div class="col-xxl-3 col-xl-12">
        <SpkBasiccard
            imgSrcA="../../images/media/media-23.jpg"
            imgClassA="card-img-top"
            linkTag={true}
            titleClass="fw-medium mb-0"
            title="Forests are Awesome."
        />
    </div>
    <div class="col-xxl-6 col-xl-6">
        <Row>
            <div class="col-xxl-12 col-xl-12">
                <SpkBasiccard
                    cardClass="card-bg-primary"
                    linkTag={true}
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <blockquote class="blockquote mb-0 text-center">
                            <h6 class="text-fixed-white">
                                The best and most beautiful things in the world
                                cannot be seen or even touched — they must be
                                felt with the heart..
                            </h6>
                            <footer
                                class="blockquote-footer mt-3 fs-14 text-fixed-white op-7"
                            >
                                Someone famous as <cite title="Source Title"
                                    >-Helen Keller</cite
                                >
                            </footer>
                        </blockquote>
                    </div>
                </SpkBasiccard>
            </div>
            <div class="col-xxl-5 col-xl-12">
                <SpkBasiccard linkTag={true} bodyText={true}>
                    <div slot="bodyText">
                        <div class="d-flex align-items-center">
                            <div class="me-3">
                                <span class="avatar avatar-md">
                                    <img
                                        src="../../images/faces/15.jpg"
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div>
                                <p class="card-text mb-0 fs-14 fw-medium">
                                    Atharva Simon.
                                </p>
                                <div class="card-title text-muted fs-12 mb-0">
                                    Correspondent Professor
                                </div>
                            </div>
                        </div>
                    </div>
                </SpkBasiccard>
                <SpkBasiccard
                    cardClass="border border-info"
                    linkTag={true}
                    bodyText={true}
                >
                    <div slot="bodyText">
                        <div class="d-flex align-items-center">
                            <div class="me-3">
                                <span class="avatar avatar-xl">
                                    <img
                                        src="../../images/faces/8.jpg"
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div>
                                <p
                                    class="card-text text-info mb-1 fs-14 fw-medium"
                                >
                                    Alicia Keys.
                                </p>
                                <div class="card-title fs-12 mb-1">
                                    Department Of Commerce
                                </div>
                                <div class="card-title text-muted fs-11 mb-0">
                                    24 Years, Female
                                </div>
                            </div>
                        </div>
                    </div>
                </SpkBasiccard>
            </div>
            <div class="col-xxl-7 col-xl-12">
                <Spkhorizontalcards
                    Linktag={true}
                    Navigate="#!"
                    Imgposition="after"
                    CardFooterTag={true}
                    Imagesrc="../../images/media/media-39.jpg"
                    Footertext="Last updated 3 mins ago"
                >
                    <h6 class="card-title mb-2 fw-medium">
                        Fox is Beautiful ?
                    </h6>
                    <p class="card-text mb-0">
                        This is a wild animal with supporting tactics and are
                        very efficient at kill,they are very Dangerous.
                    </p>
                    <p class="mb-0 card-text">
                        Fox lives mainly in forests and are well known for their
                        hunting skills.
                    </p>
                </Spkhorizontalcards>
            </div>
        </Row>
    </div>
    <div class="col-xxl-3 col-xl-6">
        <SpkBasiccard
            linkTag={true}
            imgSrcA="../../images/media/media-47.jpg"
            imgClassA="card-img-top"
            bodyText={true}
        >
            <div slot="bodyText">
                <h6 class="card-title fw-medium">
                    Most tropical areas are suitable
                </h6>
                <p class="card-text">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                </p>
            </div>
        </SpkBasiccard>
    </div>
</Row>
<!-- End::row-13 -->
