<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        dropdown1,
        dropdown2,
        FriendsList,
        Profiles,
        images,
    } from "$lib/data/pages/profiledata";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Nav,
        NavItem,
        NavLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    import ProfileGallery from "$lib/view/profileGallery.svelte";
    import SpkProfilecard from "$lib/@spk/reusable-pages/spk-profilecard.svelte";
    import SpkFriendscard from "$lib/@spk/reusable-pages/spk-friendscard.svelte";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );

    let firstTab = 1;
    let firstSubTab = 1;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Profile | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Profile" activepage="Pages" page="Profile" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row class="justify-content-center">
    <Col xl={10}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card profile-card">
                    <div class="profile-banner-image profile-img">
                        <Image
                            src="../images/media/media-3.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                    <CardBody class="p-4 pb-0 position-relative">
                        <div
                            class="d-flex align-items-end justify-content-between flex-wrap"
                        >
                            <div>
                                <span
                                    class="avatar avatar-xxl avatar-rounded bg-info online"
                                >
                                    <Image
                                        src="../images/faces/12.jpg"
                                        alt=""
                                    />
                                </span>
                                <div
                                    class="mt-4 mb-3 d-flex align-items-center flex-wrap gap-3 justify-content-between"
                                >
                                    <div>
                                        <h5 class="fw-semibold mb-1">
                                            Tom Phillip
                                        </h5>
                                        <span
                                            class="d-block fw-medium text-muted mb-1"
                                            >Senior Product Manager</span
                                        >
                                        <p
                                            class="fs-12 mb-0 fw-medium text-muted"
                                        >
                                            <span class="me-3"
                                                ><i
                                                    class="ri-building-line me-1 align-middle"
                                                ></i>New York, USA</span
                                            >
                                            <span
                                                ><i
                                                    class="ri-phone-line me-1 align-middle"
                                                ></i>+1 (123) 456-7890</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Nav
                                    class="nav-tabs mb-0 tab-style-8 scaleX"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <NavItem class="">
                                        <NavLink
                                            class=""
                                            on:click={() => (firstTab = 1)}
                                            active={firstTab == 1}
                                            id="profile-about-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-about-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile-about-tab-pane"
                                            aria-selected="true">About</NavLink
                                        >
                                    </NavItem>
                                    <NavItem class="" role="presentation">
                                        <NavLink
                                            on:click={() => (firstTab = 2)}
                                            active={firstTab == 2}
                                            id="gallery-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#gallery-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="gallery-tab-pane"
                                            aria-selected="false"
                                            >Gallery</NavLink
                                        >
                                    </NavItem>
                                    <NavItem class="" role="presentation">
                                        <NavLink
                                            on:click={() => (firstTab = 3)}
                                            active={firstTab == 3}
                                            id="followers-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#followers-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="followers-tab-pane"
                                            aria-selected="false"
                                            >Followers</NavLink
                                        >
                                    </NavItem>
                                    <NavItem class="" role="presentation">
                                        <NavLink
                                            on:click={() => (firstTab = 4)}
                                            active={firstTab == 4}
                                            id="friends-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#friends-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="friends-tab-pane"
                                            aria-selected="false"
                                            >Friends</NavLink
                                        >
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <TabContent id="profile-tabs">
                    <TabPane
                        class={`p-0 border-0 ${firstTab == 1 ? "active" : ""}`}
                        id="profile-about-tab-pane"
                        role="tabpanel"
                        aria-labelledby="profile-about-tab"
                        tabindex={0}
                    >
                        <Row>
                            <Col xxl={4}>
                                <Row>
                                    <Col xl={12}>
                                        <Card class="custom-card">
                                            <CardBody>
                                                <div
                                                    class="d-flex align-items-center justify-content-center gap-4"
                                                >
                                                    <div class="text-center">
                                                        <h3
                                                            class="fw-semibold mb-1"
                                                        >
                                                            13,264
                                                        </h3>
                                                        <span
                                                            class="d-block text-muted"
                                                            >Followers</span
                                                        >
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div class="text-center">
                                                        <h3
                                                            class="fw-semibold mb-1"
                                                        >
                                                            7,238
                                                        </h3>
                                                        <span
                                                            class="d-block text-muted"
                                                            >Following</span
                                                        >
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl={12}>
                                        <Card class="custom-card">
                                            <CardHeader>
                                                <div class="card-title">
                                                    About
                                                </div>
                                            </CardHeader>
                                            <CardBody>
                                                <p class="text-muted">
                                                    Experienced pereson
                                                    passionate about delivering
                                                    user-centered solutions,
                                                    leading cross-functional
                                                    teams, and driving product
                                                    success.
                                                </p>
                                                <div class="text-muted">
                                                    <div
                                                        class="mb-2 d-flex align-items-center gap-1 flex-wrap"
                                                    >
                                                        <span
                                                            class="avatar avatar-sm avatar-rounded text-default"
                                                        >
                                                            <i
                                                                class="ri-mail-line align-middle fs-15"
                                                            ></i>
                                                        </span>
                                                        <span
                                                            class="fw-medium text-default"
                                                            >Email :
                                                        </span> your.email@example.com
                                                    </div>
                                                    <div
                                                        class="mb-2 d-flex align-items-center gap-1 flex-wrap"
                                                    >
                                                        <span
                                                            class="avatar avatar-sm avatar-rounded text-default"
                                                        >
                                                            <i
                                                                class="ri-phone-line align-middle fs-15"
                                                            ></i>
                                                        </span>
                                                        <span
                                                            class="fw-medium text-default"
                                                            >Phone :
                                                        </span> +1 (555) 123-4567
                                                    </div>
                                                    <div
                                                        class="mb-2 d-flex align-items-center gap-1 flex-wrap"
                                                    >
                                                        <span
                                                            class="avatar avatar-sm avatar-rounded text-default"
                                                        >
                                                            <i
                                                                class="ri-map-pin-line align-middle fs-15"
                                                            ></i>
                                                        </span>
                                                        <span
                                                            class="fw-medium text-default"
                                                            >Website :
                                                        </span> www.yourwebsite.com
                                                    </div>
                                                    <div
                                                        class="mb-0 d-flex align-items-center gap-1"
                                                    >
                                                        <span
                                                            class="avatar avatar-sm avatar-rounded text-default"
                                                        >
                                                            <i
                                                                class="ri-building-line align-middle fs-15"
                                                            ></i>
                                                        </span>
                                                        <span
                                                            class="fw-medium text-default"
                                                            >Location :
                                                        </span> City, Country
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl={12}>
                                        <Card
                                            class="custom-card overflow-hidden"
                                        >
                                            <CardHeader>
                                                <div class="card-title">
                                                    Social Media
                                                </div>
                                            </CardHeader>
                                            <CardBody class="p-0">
                                                <ul
                                                    class="list-group list-group-flush social-media-list"
                                                >
                                                    <li class="list-group-item">
                                                        <div
                                                            class="d-flex align-items-center gap-3 flex-wrap"
                                                        >
                                                            <div>
                                                                <span
                                                                    class="avatar avatar-md bg-primary-transparent"
                                                                    ><i
                                                                        class="ri-facebook-circle-fill fs-4"
                                                                    ></i></span
                                                                >
                                                            </div>
                                                            <div>
                                                                <span
                                                                    class="d-block fw-medium"
                                                                    >Facebook</span
                                                                >
                                                                <a
                                                                    href="#!"
                                                                    class="text-muted"
                                                                    >https://www.facebook.com/johndoe</a
                                                                >
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div
                                                            class="d-flex align-items-center gap-3 flex-wrap"
                                                        >
                                                            <div>
                                                                <span
                                                                    class="avatar avatar-md bg-secondary-transparent"
                                                                    ><i
                                                                        class="ri-twitter-x-fill fs-4"
                                                                    ></i></span
                                                                >
                                                            </div>
                                                            <div>
                                                                <span
                                                                    class="d-block fw-medium"
                                                                    >Twitter</span
                                                                >
                                                                <a
                                                                    href="#!"
                                                                    class="text-muted"
                                                                    >https://twitter.com/johndoe</a
                                                                >
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div
                                                            class="d-flex align-items-center gap-3 flex-wrap"
                                                        >
                                                            <div>
                                                                <span
                                                                    class="avatar avatar-md bg-success-transparent"
                                                                    ><i
                                                                        class="ri-linkedin-box-fill fs-4"
                                                                    ></i></span
                                                                >
                                                            </div>
                                                            <div>
                                                                <span
                                                                    class="d-block fw-medium"
                                                                    >Linkedin</span
                                                                >
                                                                <a
                                                                    href="#!"
                                                                    class="text-muted"
                                                                    >https://www.linkedin.com/in/johndoe</a
                                                                >
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div
                                                            class="d-flex align-items-center gap-3 flex-wrap"
                                                        >
                                                            <div>
                                                                <span
                                                                    class="avatar avatar-md bg-orange-transparent"
                                                                    ><i
                                                                        class="ri-instagram-fill fs-4"
                                                                    ></i></span
                                                                >
                                                            </div>
                                                            <div>
                                                                <span
                                                                    class="d-block fw-medium"
                                                                    >Instagram</span
                                                                >
                                                                <a
                                                                    href="#!"
                                                                    class="text-muted"
                                                                    >https://www.instagram.com/johndoe</a
                                                                >
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xxl={8}>
                                <Card class="custom-card">
                                    <CardHeader class="p-0">
                                        <Nav
                                            class="nav-tabs tab-style-8 scaleX justify-content-end d-flex"
                                            id="myTab4"
                                            role="tablist"
                                        >
                                            <NavItem role="presentation">
                                                <NavLink
                                                    on:click={() =>
                                                        (firstSubTab = 1)}
                                                    active={firstSubTab == 1}
                                                    class=""
                                                    id="status-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#status-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="status-tab-pane"
                                                    aria-selected="true"
                                                    ><i
                                                        class="ri-radio-button-line lh-1 me-1"
                                                    ></i>Status</NavLink
                                                >
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink
                                                    on:click={() =>
                                                        (firstSubTab = 2)}
                                                    active={firstSubTab == 2}
                                                    class=""
                                                    id="media-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#media-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="media-tab-pane"
                                                    aria-selected="false"
                                                    tabindex={2}
                                                    ><i
                                                        class="ri-video-line lh-1 me-1"
                                                    ></i>Image/Video</NavLink
                                                >
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink
                                                    on:click={() =>
                                                        (firstSubTab = 3)}
                                                    active={firstSubTab == 3}
                                                    class=""
                                                    id="live-stream-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#live-stream-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="live-stream-tab-pane"
                                                    aria-selected="false"
                                                    tabindex={1}
                                                    ><i
                                                        class="ri-tv-line lh-1 me-1"
                                                    ></i>Live Stream</NavLink
                                                >
                                            </NavItem>
                                        </Nav>
                                    </CardHeader>
                                    <CardBody>
                                        <TabContent id="profileSubTab">
                                            <TabPane
                                                class={`overflow-hidden p-0 border-0 ${firstSubTab == 1 ? "active" : ""}`}
                                                id="status-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="status-tab"
                                                tabindex={0}
                                            >
                                                <Input
                                                    type="textarea"
                                                    class="form-control"
                                                    id="text-area"
                                                    rows={4}
                                                    placeholder="What's on your mind?"
                                                />
                                                <div class="mt-2">
                                                    <SpkButton
                                                        color="primary"
                                                        customClass="btn float-end"
                                                        >Post <i
                                                            class="ri-send-plane-2-line ms-1"
                                                        ></i></SpkButton
                                                    >
                                                </div>
                                            </TabPane>
                                            <TabPane
                                                class={`overflow-hidden border-0 p-0 ${firstSubTab == 2 ? "active" : ""}`}
                                                id="media-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="media-tab"
                                                tabindex={0}
                                            >
                                                <Input
                                                    type="textarea"
                                                    class="form-control mb-1"
                                                    id="text-area"
                                                    rows={2}
                                                    placeholder="What's on your mind?"
                                                />
                                                <FilePond
                                                    class="multiple-filepond"
                                                    name="filepond"
                                                    labelIdle="Drag & Drop your files here or click"
                                                    stylePanelLayout=" "
                                                    styleLoadIndicatorPosition="center bottom"
                                                    styleButtonRemoveItemPosition="center bottom"
                                                    allowMultiple={true}
                                                />
                                                <div class="mt-2">
                                                    <SpkButton
                                                        color="success"
                                                        customClass="btn float-end"
                                                        >Upload <i
                                                            class="ri-upload-2-line ms-1"
                                                        ></i></SpkButton
                                                    >
                                                </div>
                                            </TabPane>
                                            <TabPane
                                                class={`overflow-hidden border-0 p-0 ${firstSubTab == 3 ? "active" : ""}`}
                                                id="live-stream-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="live-stream-tab"
                                                tabindex={0}
                                            >
                                                <Input
                                                    type="textarea"
                                                    class="form-control"
                                                    id="text-area"
                                                    rows={4}
                                                    placeholder="What's on your mind?"
                                                />
                                                <div class="mt-2">
                                                    <SpkButton
                                                        color="warning"
                                                        customClass="btn float-end"
                                                        >Start Streaming <i
                                                            class="ri-tv-2-line ms-1"
                                                        ></i></SpkButton
                                                    >
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                                <Card class="custom-card">
                                    <CardBody>
                                        <div
                                            class="d-flex align-items-center gap-2 flex-wrap mb-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-rounded avatar-md"
                                                >
                                                    <Image
                                                        width={40}
                                                        height={40}
                                                        src="../images/faces/12.jpg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span
                                                    class="d-block fw-semibold"
                                                    >Tom Phillip</span
                                                >
                                                <span class="text-muted fs-13"
                                                    >14 hrs ago</span
                                                >
                                            </div>
                                            <SpkDropdown
                                                option={dropdown1}
                                                ToggleClass="tn btn-icon rounded-circle border no-caret"
                                                Caret={false}
                                                parent={`<i class="fe fe-more-vertical"></i>`}
                                            />
                                        </div>
                                        <div class="my-3">
                                            Captured the serene beauty of the
                                            blue sky as the sun sets.
                                        </div>
                                        <div class="profile-img">
                                            <Image
                                                src="../images/media/media-23.jpg"
                                                class="card-img"
                                                alt="..."
                                            />
                                        </div>
                                    </CardBody>
                                    <div class="card-footer">
                                        <div
                                            class="d-flex align-items-center gap-2 flex-wrap"
                                        >
                                            <div class="avatar-list-stacked">
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/2.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/8.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/2.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/10.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                and 8 others <i
                                                    class="ri-heart-3-fill text-danger"
                                                ></i> this post
                                            </div>
                                            <div
                                                class="d-flex align-items-center gap-2 flex-wrap"
                                            >
                                                <a
                                                    href="#!"
                                                    class="p-1 px-2 bg-primary-transparent rounded"
                                                    ><i
                                                        class="ri-message-3-line me-1"
                                                    ></i>Comment</a
                                                >
                                                <a
                                                    href="#!"
                                                    class="p-1 px-2 bg-info-transparent rounded"
                                                    ><i
                                                        class="ri-share-forward-line me-1"
                                                    ></i>Share</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <ul
                                            class="list-unstyled post-comments-list"
                                        >
                                            <li>
                                                <div
                                                    class="d-flex align-items-start gap-3"
                                                >
                                                    <div class="lh-1">
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../images/faces/4.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="flex-fill p-3 rounded bg-light"
                                                    >
                                                        <div
                                                            class="d-flex align-items-center justify-content-between flex-wrap"
                                                        >
                                                            <div
                                                                class="fw-semibold"
                                                            >
                                                                Emily_Smith
                                                            </div>
                                                            <div
                                                                class="text-muted fs-13"
                                                            >
                                                                2 hours ago
                                                            </div>
                                                        </div>
                                                        <div class="text-muted">
                                                            Wow, what a peaceful
                                                            view! Nature at its
                                                            best &#x1F60D;.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    class="d-flex align-items-start gap-3"
                                                >
                                                    <div class="lh-1">
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../images/faces/14.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="flex-fill p-3 rounded bg-light"
                                                    >
                                                        <div
                                                            class="d-flex align-items-center justify-content-between flex-wrap"
                                                        >
                                                            <div
                                                                class="fw-semibold"
                                                            >
                                                                JohnDoe
                                                            </div>
                                                            <div
                                                                class="text-muted fs-13"
                                                            >
                                                                1 hours ago
                                                            </div>
                                                        </div>
                                                        <div class="text-muted">
                                                            Absolutely stunning!
                                                            The colors are just
                                                            perfect
                                                            &#x1F305;&#x1F499;.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    class="d-flex align-items-center lh-1 gap-3 flex-wrap"
                                                >
                                                    <div class="">
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../images/faces/12.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <div
                                                            class="input-group"
                                                        >
                                                            <Input
                                                                type="text"
                                                                class=""
                                                                placeholder="Write a comment"
                                                                aria-label="comment"
                                                            />
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-emoji-smile"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-paperclip"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-camera"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-primary"
                                                                buttontype="button"
                                                                >Post</SpkButton
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Card>
                                <Card class="custom-card">
                                    <CardBody>
                                        <div
                                            class="d-flex align-items-center gap-2 flex-wrap mb-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-rounded avatar-md"
                                                >
                                                    <Image
                                                        width={40}
                                                        height={40}
                                                        src="../images/faces/12.jpg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span
                                                    class="d-block fw-semibold"
                                                    >Tom Phillip</span
                                                >
                                                <span class="text-muted fs-13"
                                                    >2 days ago</span
                                                >
                                            </div>
                                            <SpkDropdown
                                                Color="light"
                                                option={dropdown2}
                                                ToggleClass="btn btn-icon rounded-circle border no-caret"
                                                Caret={false}
                                                parent={`<i class="fe fe-more-vertical"></i>`}
                                            />
                                        </div>
                                        <div class="my-3">
                                            Success is not final, failure is not
                                            fatal: It is the courage to continue
                                            that counts. Keep pushing forward! <a
                                                href="#!"
                                                >&#128170; #MotivationMonday</a
                                            >
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <div
                                            class="d-flex align-items-center gap-2 flex-wrap"
                                        >
                                            <div class="avatar-list-stacked">
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/12.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/3.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/15.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                and 2 others <i
                                                    class="ri-heart-3-fill text-danger"
                                                ></i> this post
                                            </div>
                                            <div
                                                class="d-flex align-items-center gap-2 flex-wrap"
                                            >
                                                <a
                                                    href="#!"
                                                    class="p-1 px-2 bg-primary-transparent rounded"
                                                    ><i
                                                        class="ri-message-3-line me-1"
                                                    ></i>Comment</a
                                                >
                                                <a
                                                    href="#!"
                                                    class="p-1 px-2 bg-info-transparent rounded"
                                                    ><i
                                                        class="ri-share-forward-line me-1"
                                                    ></i>Share</a
                                                >
                                            </div>
                                        </div>
                                    </CardFooter>
                                    <CardFooter>
                                        <ul
                                            class="list-unstyled post-comments-list"
                                        >
                                            <li>
                                                <div
                                                    class="d-flex align-items-center lh-1 gap-3 flex-wrap"
                                                >
                                                    <div class="">
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../images/faces/12.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <div
                                                            class="input-group"
                                                        >
                                                            <Input
                                                                type="text"
                                                                class=""
                                                                placeholder="Write a comment"
                                                                aria-label="comment"
                                                            />
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-emoji-smile"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-paperclip"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-camera"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-primary"
                                                                buttontype="button"
                                                                >Post</SpkButton
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardFooter>
                                </Card>
                                <Card class="custom-card">
                                    <CardBody>
                                        <div
                                            class="d-flex align-items-center gap-2 flex-wrap mb-2"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar avatar-rounded avatar-md"
                                                >
                                                    <Image
                                                        width={40}
                                                        height={40}
                                                        src="../images/faces/12.jpg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span
                                                    class="d-block fw-semibold"
                                                    >Tom Phillip</span
                                                >
                                                <span class="text-muted fs-13"
                                                    >14 hrs ago</span
                                                >
                                            </div>
                                            <SpkDropdown
                                                Color="light"
                                                option={dropdown2}
                                                ToggleClass="btn btn-icon rounded-circle border no-caret"
                                                Caret={false}
                                                parent={`<i class="fe fe-more-vertical"></i>`}
                                            />
                                        </div>
                                        <div class="my-3">
                                            The serene beauty of the evening
                                            beach with the soft waves and the
                                            sky painted in shades of orange and
                                            pink is a perfect way to unwind
                                            after a long day. &#x1F305;
                                            &#127754; <a href="#!"
                                                >#BeachVibes</a
                                            > <a href="#!">#EveningSunset</a>
                                            <a href="#!">#Relaxing</a>
                                        </div>
                                        <div class="profile-img">
                                            <Image
                                                src="../images/media/media-10.jpg"
                                                class="card-img"
                                                alt="..."
                                            />
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <div
                                            class="d-flex align-items-center gap-2 flex-wrap"
                                        >
                                            <div class="avatar-list-stacked">
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/13.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/3.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/4.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/14.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                                <span
                                                    class="avatar avatar-rounded"
                                                >
                                                    <Image
                                                        src="../images/faces/5.jpg"
                                                        alt="img"
                                                    />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                and 25 others <i
                                                    class="ri-heart-3-fill text-danger"
                                                ></i> this post
                                            </div>
                                            <div
                                                class="d-flex align-items-center gap-2 flex-wrap"
                                            >
                                                <a
                                                    href="#!"
                                                    class="p-1 px-2 bg-primary-transparent rounded"
                                                    ><i
                                                        class="ri-message-3-line me-1"
                                                    ></i>Comment</a
                                                >
                                                <a
                                                    href="#!"
                                                    class="p-1 px-2 bg-info-transparent rounded"
                                                    ><i
                                                        class="ri-share-forward-line me-1"
                                                    ></i>Share</a
                                                >
                                            </div>
                                        </div>
                                    </CardFooter>
                                    <CardFooter>
                                        <ul
                                            class="list-unstyled post-comments-list"
                                        >
                                            <li>
                                                <div
                                                    class="d-flex align-items-start gap-3"
                                                >
                                                    <div class="lh-1">
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../images/faces/6.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="flex-fill p-3 rounded bg-light"
                                                    >
                                                        <div
                                                            class="d-flex align-items-center justify-content-between flex-wrap"
                                                        >
                                                            <div
                                                                class="fw-semibold"
                                                            >
                                                                Emma Watson
                                                            </div>
                                                            <div
                                                                class="text-muted fs-13"
                                                            >
                                                                2 hours ago
                                                            </div>
                                                        </div>
                                                        <div class="text-muted">
                                                            Such a peaceful
                                                            moment at the beach!
                                                            Perfect way to end
                                                            the day.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    class="d-flex align-items-center lh-1 gap-3 flex-wrap"
                                                >
                                                    <div class="">
                                                        <span
                                                            class="avatar avatar-md avatar-rounded"
                                                        >
                                                            <Image
                                                                width={40}
                                                                height={40}
                                                                src="../images/faces/12.jpg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <div
                                                            class="input-group"
                                                        >
                                                            <Input
                                                                type="text"
                                                                class=""
                                                                placeholder="Write a comment"
                                                                aria-label="comment"
                                                            />
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-emoji-smile"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-paperclip"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-light border px-2 px-md-3"
                                                                buttontype="button"
                                                                ><i
                                                                    class="bi bi-camera"
                                                                ></i></SpkButton
                                                            >
                                                            <SpkButton
                                                                color=""
                                                                customClass="btn btn-primary"
                                                                buttontype="button"
                                                                >Post</SpkButton
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane
                        class={`p-0 border-0 ${firstTab == 2 ? "active" : ""} `}
                        id="gallery-tab-pane"
                        role="tabpanel"
                        aria-labelledby="gallery-tab"
                        tabindex={0}
                    >
                        <Row>
                            <Col xl={12}>
                                <Card class="custom-card">
                                    <CardBody>
                                        <ProfileGallery
                                            galleryID="my-test-gallery"
                                            {images}
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane
                        class={`p-0 border-0 ${firstTab == 3 ? "active" : ""}`}
                        id="followers-tab-pane"
                        role="tabpanel"
                        aria-labelledby="followers-tab"
                        tabindex={0}
                    >
                        <Row>
                            {#each Profiles as idx}
                                <Col xl={4}>
                                    <SpkProfilecard profile={idx} />
                                </Col>
                            {/each}
                        </Row>
                    </TabPane>
                    <TabPane
                        class={`p-0 border-0 ${firstTab == 4 ? "active" : ""} `}
                        id="friends-tab-pane"
                        role="tabpanel"
                        aria-labelledby="friends-tab"
                        tabindex={0}
                    >
                        <Row>
                            {#each FriendsList as idx}
                                <Col xxl={3} xl={4} lg={6}>
                                    <SpkFriendscard obj={idx} />
                                </Col>
                            {/each}
                        </Row>
                    </TabPane>
                </TabContent>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->
