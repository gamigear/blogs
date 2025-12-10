<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        chatDropdown,
        chatDropdown2,
        chatDropdown3,
        ChatUsers,
        ChatUsers1,
        Files,
        GroupChatPreviews,
        GroupChats,
        GroupedContacts,
        images,
    } from "@/shared/data/applications/chatdata";
    import { Svroller } from "svrollbar";
    import {
        Image,
        Nav,
        NavItem,
        NavLink,
        Offcanvas,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import ChatGallery from "@/view/chatGallery.svelte";

    let activeTab = 1;

    let activeUser = {
        name: "Alice Smith",
        image: "../images/faces/2.jpg",
        status: "online",
    };

    const handleChatClick = (user) => {
        activeUser = {
            name: user.name,
            image: user.image,
            status: user.status,
        };
    };

    let mainChartWrapperRef;

    function toggleChat() {
        mainChartWrapperRef?.classList.add("responsive-chat-open");
    }

    function toggleChat1() {
        mainChartWrapperRef?.classList.remove("responsive-chat-open");
    }

    //  offcanvas

    let isOpen = false;
    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>Chat | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Chat" activepage="Applications" page="Chat" />
<!-- Page Header Close -->

<div
    bind:this={mainChartWrapperRef}
    class="main-chart-wrapper gap-lg-2 gap-0 mb-3 d-lg-flex"
>
    <div class="chat-info border">
        <div
            class="d-flex align-items-center justify-content-between w-100 p-3 border-bottom"
        >
            <div>
                <h5 class="fw-semibold mb-0">Messages</h5>
            </div>
            <SpkDropdown
                CustomClass="ms-2"
                ToggleClass="btn-icon btn-light btn-wave waves-light btn-sm no-caret"
                Caret={false}
                parent={`<i class="ti ti-dots-vertical"></i>`}
                option={chatDropdown}
            />
        </div>
        <Nav
            class="nav nav-style-1 nav-pills nav-justified p-2 border-bottom d-flex"
            id="myTab1"
            role="tablist"
        >
            <NavItem class="nav-item me-0" role="presentation">
                <NavLink
                    on:click={(e) => {
                        (activeTab = 1), e.preventDefault();
                    }}
                    active={activeTab == 1}
                    id="users-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#users-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="users-tab-pane"
                    aria-selected="true"
                    >Recents<span class="badge bg-secondary ms-1 rounded-pill"
                        >04</span
                    ></NavLink
                >
            </NavItem>
            <NavLink class="nav-item me-0" role="presentation">
                <NavLink
                    on:click={(e) => {
                        (activeTab = 2), e.preventDefault();
                    }}
                    active={activeTab == 2}
                    id="groups-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#groups-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="groups-tab-pane"
                    aria-selected="false">Groups</NavLink
                >
            </NavLink>
            <NavLink class="nav-item" role="presentation">
                <NavLink
                    on:click={(e) => {
                        (activeTab = 3), e.preventDefault();
                    }}
                    active={activeTab == 3}
                    id="contacts-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contacts-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contacts-tab-pane"
                    aria-selected="false">Contacts</NavLink
                >
            </NavLink>
        </Nav>
        <div class="chat-search p-3 border-bottom border-block-end-dashed">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search Here"
                    aria-describedby="button-addon2"
                />
                <button
                    aria-label="button"
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"><i class="ri-search-line"></i></button
                >
            </div>
        </div>
        <TabContent class="tab-content" id="ChatTabContent">
            <TabPane
                class={`border-0 chat-users-tab ${activeTab == 1 ? "active" : ""}`}
                id="users-tab-pane"
                role="tabpanel"
                aria-labelledby="users-tab"
                tabindex={0}
            >
                <Svroller width="100%" height="100%" id="chat-msg-scroll">
                    <ul class="list-unstyled mb-0 mt-2 chat-users-tab">
                        <li class="pb-0">
                            <p class="text-muted fs-11 fw-medium mb-2 op-7">
                                Recent Chats
                            </p>
                        </li>
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        {#each ChatUsers as user}
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                            <li
                                class={`checkforactive ${activeUser.name === user.name ? "active chat-msg-unread" : "chat-inactive"}`}
                                on:click={() => handleChatClick(user)}
                            >
                                <a href="#!">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span
                                                class={`avatar avatar-md  ${user.status} me-2 avatar-rounded`}
                                            >
                                                <img
                                                    src={user.image}
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                                        <div
                                            class="flex-fill"
                                            on:click={toggleChat}
                                        >
                                            <p class="mb-0 fw-medium">
                                                {user.name}{" "}
                                                <span
                                                    class="float-end text-muted fw-normal fs-11"
                                                    >{user.time}</span
                                                >
                                            </p>
                                            <p
                                                class={`fs-13 mb-0 ${user.typing ? "chat-msg-typing" : ""}`}
                                            >
                                                <span
                                                    class="chat-msg !text-truncate"
                                                    >{user.message}</span
                                                >
                                                {#if user.unreadCount > 0}
                                                    <SpkBadge
                                                        Color=""
                                                        CustomClass={` ${user.typing ? "bg-warning" : "bg-primary"} rounded-pill float-end`}
                                                    >
                                                        {user.unreadCount}
                                                    </SpkBadge>
                                                {/if}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        {/each}
                        <li class="pb-0">
                            <p class="text-muted fs-11 fw-medium mb-2 op-7">
                                All Chats
                            </p>
                        </li>
                        {#each ChatUsers1 as user}
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                            <li
                                class={`checkforactive chat-inactive ${activeUser.name === user.name ? "active" : ""}`}
                                on:click={() => handleChatClick(user)}
                            >
                                <a href="#!">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span
                                                class={`avatar avatar-md ${user.status} me-2 avatar-rounded`}
                                            >
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={user.image}
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                                        <div
                                            class="flex-fill"
                                            on:click={toggleChat}
                                        >
                                            <p class="mb-0 fw-medium">
                                                {user.name}
                                                <span
                                                    class="float-end text-muted fw-normal fs-11"
                                                >
                                                    {user.time}
                                                </span>
                                            </p>
                                            <p
                                                class={`fs-13 mb-0 ${user.typing ? "chat-msg-typing" : ""}`}
                                            >
                                                <span
                                                    class="chat-msg !text-truncate"
                                                    >{user.message}</span
                                                >
                                                {#if user.unreadCount}
                                                    <SpkBadge
                                                        Color=""
                                                        CustomClass={`${user.typing ? "bg-warning" : "bg-primary"} rounded-pill float-end`}
                                                    >
                                                        {user.unreadCount}
                                                    </SpkBadge>
                                                {:else if !user.online}
                                                    <span
                                                        class="chat-read-icon float-end align-middle"
                                                    >
                                                        <i
                                                            class="ri-check-double-fill"
                                                        ></i>
                                                    </span>
                                                {/if}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </Svroller>
            </TabPane>
            <TabPane
                class={`border-0 chat-groups-tab overflow-y-scroll ${activeTab == 2 ? "active" : ""}`}
                id="groups-tab-pane"
                role="tabpanel"
                aria-labelledby="groups-tab"
                tabindex={0}
            >
                <ul class="list-unstyled mb-0 mt-2">
                    <li class="pb-0">
                        <p class="text-muted fs-11 fw-medium mb-1 op-7">
                            Groups
                        </p>
                    </li>
                    {#each GroupChats as group}
                        <li>
                            <div
                                class="d-flex align-items-center justify-content-between"
                            >
                                <div>
                                    <p class="mb-0">
                                        {group.id}
                                        {group.name}
                                    </p>
                                    <p class="mb-0">
                                        <SpkBadge
                                            Color=""
                                            CustomClass="badge bg-light text-default border"
                                        >
                                            {group.onlineCount} Online
                                        </SpkBadge>
                                    </p>
                                </div>
                                <div class="avatar-list-stacked my-auto">
                                    {#each group.avatars as avatar}
                                        <span
                                            class="avatar avatar-sm avatar-rounded text-fixed-white"
                                        >
                                            <img src={avatar} alt="img" />
                                        </span>
                                    {/each}=
                                    <a
                                        class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                        href="#!"
                                    >
                                        +{group.extraCount}
                                    </a>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
                <ul class="list-unstyled mb-0 mt-2">
                    <li class="pb-0">
                        <p class="text-muted fs-11 fw-medium mb-1 op-7">
                            Group Chats
                        </p>
                    </li>
                    {#each GroupChatPreviews as chat}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                        <li
                            class={`checkforactive ${!chat.online ? "chat-inactive" : ""} ${chat.unread ? "chat-msg-unread" : ""} ${activeUser.name === chat.name ? "active" : ""}`}
                            on:click={() => handleChatClick(chat)}
                        >
                            <a href="#!">
                                <!-- svelte-ignore a11y_click_events_have_key_events -->
                                <!-- svelte-ignore a11y_no_static_element_interactions -->
                                <div class="d-flex align-items-top">
                                    <div class="me-1 lh-1">
                                        <span
                                            class={`avatar avatar-md ${chat.online ? "online" : "offline"} me-2 avatar-rounded`}
                                        >
                                            <Image src={chat.image} alt="img" />
                                        </span>
                                    </div>
                                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                                    <div
                                        class="flex-fill"
                                        on:click={toggleChat}
                                    >
                                        <p class="mb-0 fw-medium">
                                            {chat.name}{" "}
                                            <span
                                                class="float-end text-muted fw-normal fs-11"
                                            >
                                                {chat.time}
                                            </span>
                                        </p>
                                        <p class="fs-13 mb-0">
                                            <span
                                                class="chat-msg text-truncate"
                                            >
                                                {#if chat.sender}
                                                    <span
                                                        class="group-i ndivudial"
                                                        >{chat.sender} :
                                                    </span>
                                                {/if}
                                                {chat.message}
                                            </span>
                                            {#if !chat.online && !chat.unread}
                                                <span
                                                    class="chat-read-icon float-end align-middle"
                                                >
                                                    <i
                                                        class="ri-check-double-fill"
                                                    ></i>
                                                </span>
                                            {/if}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    {/each}
                </ul>
            </TabPane>
            <TabPane
                class={`border-0 chat-contacts-tab overflow-y-scroll ${activeTab == 3 ? "active" : ""}`}
                id="contacts-tab-pane"
                role="tabpanel"
                aria-labelledby="contacts-tab"
                tabindex={0}
            >
                <ul class="list-unstyled mb-0 chat-contacts-tab">
                    {#each GroupedContacts as group}
                        <li>
                            <span class="text-default fw-semibold"
                                >{group.letter}</span
                            >
                        </li>
                        {#each group.contacts as contact}
                            <li>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-rounded avatar-sm bg-light text-default border"
                                        >
                                            {#if contact.avatar}
                                                <Image
                                                    src={contact.avatar}
                                                    alt={contact.name}
                                                />
                                            {:else}
                                                {contact.initials}
                                            {/if}
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold"
                                            >{contact.name}</span
                                        >
                                    </div>
                                    <SpkDropdown
                                        option={chatDropdown2}
                                        ToggleClass="btn btn-icon btn-sm btn-outline-light no-caret"
                                        Caret={false}
                                        parent={`<i class="ri-more-2-fill"></i>`}
                                    />
                                </div>
                            </li>
                        {/each}
                    {/each}
                </ul>
            </TabPane>
        </TabContent>
    </div>
    <div class="main-chat-area border">
        <div
            class="d-flex align-items-center border-bottom main-chat-head flex-wrap"
        >
            <div class="me-2 lh-1">
                <span
                    class={`avatar avatar-md ${activeUser.status} avatar-rounded chatstatusperson`}
                >
                    <img
                        class="chatimageperson"
                        src={activeUser.image}
                        alt="img"
                    />
                </span>
            </div>
            <div class="flex-fill">
                <p class="mb-0 fw-medium fs-14 lh-1">
                    <a
                        href="#!"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        class="chatnameperson responsive-userinfo-open"
                        on:click={toggle}>{activeUser.name}</a
                    >
                </p>
                <p class="text-muted mb-0 chatpersonstatus">
                    {activeUser.status}
                </p>
            </div>
            <div class="d-flex align-items-center flex-wrap rightIcons">
                <SpkButton
                    color="light"
                    buttontype="button"
                    customClass="btn btn-icon ms-2 btn-sm"
                >
                    <i class="ti ti-phone"></i>
                </SpkButton>
                <SpkButton
                    color="light"
                    buttontype="button"
                    customClass="btn btn-icon ms-2 btn-sm"
                >
                    <i class="ti ti-video"></i>
                </SpkButton>
                <SpkButton
                    color="light"
                    buttontype="button"
                    customClass="btn btn-icon ms-2 responsive-userinfo-open btn-sm"
                >
                    <i class="ti ti-user-circle" id="responsive-chat-close"></i>
                </SpkButton>
                <SpkDropdown
                    CustomClass="ms-2"
                    option={chatDropdown3}
                    ToggleClass="btn btn-icon btn-light btn-wave waves-light btn-sm no-caret"
                    Caret={false}
                    parent={`<i class="ti ti-dots-vertical"></i>`}
                />
                <SpkButton
                    color="light"
                    onclickfunc={toggleChat1}
                    buttontype="button"
                    customClass="btn btn-icon ms-2 responsive-chat-close btn-sm"
                >
                    <i class="ri-close-line"></i>
                </SpkButton>
            </div>
        </div>
        <div class="chat-content overflow-y-scroll" id="main-chat-content">
            <div class="chat-content-background">
                <img src="../images/media/backgrounds/12.png" alt="" />
            </div>
            <ul class="list-unstyled oveflow-scroll-y">
                    <li class="chat-day-label">
                        <span>Today</span>
                    </li>
                    <li class="chat-item-start">
                        <div class="chat-list-inner">
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md ${activeUser.status} avatar-rounded chatstatusperson`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src={activeUser.image}
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div class="ms-3">
                                <span class="chatting-user-info">
                                    <span class="chatnameperson"
                                        >{activeUser.name}</span
                                    >
                                    <span class="msg-sent-time"> 10:00 AM</span>
                                </span>
                                <div class="main-chat-msg">
                                    <div>
                                        <p class="mb-0">
                                            Hey! How are you doing today?
                                            &#128522;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="chat-item-end">
                        <div class="chat-list-inner">
                            <div class="me-3">
                                <span class="chatting-user-info">
                                    <span class="msg-sent-time"
                                        ><span
                                            class="chat-read-mark align-middle d-inline-flex"
                                            ><i class="ri-check-double-line"
                                            ></i></span
                                        >10:02 AM</span
                                    > You
                                </span>
                                <div class="main-chat-msg">
                                    <div>
                                        <p class="mb-0">
                                            Hi! I'm doing great, thanks for
                                            asking. How about you?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md online avatar-rounded`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src="../images/faces/15.jpg"
                                        alt="img"
                                    />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="chat-item-start">
                        <div class="chat-list-inner">
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md ${activeUser.status} avatar-rounded chatstatusperson`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src={activeUser.image}
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div class="ms-3">
                                <span class="chatting-user-info">
                                    <span class="chatnameperson"
                                        >{activeUser.name}</span
                                    >
                                    <span class="msg-sent-time">10:05 AM</span>
                                </span>
                                <div class="main-chat-msg">
                                    <div>
                                        <p class="mb-0">I'm good too.</p>
                                    </div>
                                    <div>
                                        <p class="mb-0">
                                            Have you completed the project
                                            report yet? &#128221;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="chat-item-end">
                        <div class="chat-list-inner">
                            <div class="me-3">
                                <span class="chatting-user-info">
                                    <span class="msg-sent-time"
                                        ><span
                                            class="chat-read-mark align-middle d-inline-flex"
                                            ><i class="ri-check-double-line"
                                            ></i></span
                                        >10:06 AM</span
                                    > You
                                </span>
                                <div class="main-chat-msg">
                                    <div>
                                        <p class="mb-0">
                                            Almost! Just need to finalize a few
                                            things. I should be done by the end
                                            of the day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md online avatar-rounded`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src="../images/faces/15.jpg"
                                        alt="img"
                                    />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="chat-item-start">
                        <div class="chat-list-inner">
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md ${activeUser.status} avatar-rounded chatstatusperson`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src={activeUser.image}
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div class="ms-3">
                                <span class="chatting-user-info">
                                    <span class="chatnameperson"
                                        >{activeUser.name}</span
                                    >
                                    <span class="msg-sent-time"> 10:10 AM</span>
                                </span>
                                <div class="main-chat-msg">
                                    <div>
                                        <p class="mb-0">
                                            Awesome! Let me know if you need any
                                            help with it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="chat-item-end">
                        <div class="chat-list-inner">
                            <div class="me-3">
                                <span class="chatting-user-info">
                                    <span class="msg-sent-time"
                                        ><span
                                            class="chat-read-mark align-middle d-inline-flex"
                                            ><i class="ri-check-double-line"
                                            ></i></span
                                        >10:11 AM</span
                                    > You
                                </span>
                                <div class="main-chat-msg">
                                    <div class="">
                                        <p class="mb-0">
                                            Thanks! Actually, I was thinking of
                                            adding a new section to the report.
                                            What do you think about including a
                                            summary of our recent team
                                            discussions? &#128528;
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md online avatar-rounded`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src="../images/faces/15.jpg"
                                        alt="img"
                                    />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="chat-item-start">
                        <div class="chat-list-inner">
                            <div class="chat-user-profile">
                                <span
                                    class={`avatar avatar-md ${activeUser.status} avatar-rounded`}
                                >
                                    <Image
                                        class="chatimageperson"
                                        src={activeUser.image}
                                        alt="img"
                                    />
                                </span>
                            </div>
                            <div class="ms-3">
                                <span class="chatting-user-info chatnameperson">
                                    {activeUser.name}
                                    <span class="msg-sent-time">10:15 AM</span>
                                </span>
                                <div class="main-chat-msg">
                                    <div>
                                        <p class="mb-0">
                                            That’s a great idea! It will
                                            definitely add more value. I can
                                            help with writing it if you’d like.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
            </ul>
        </div>
        <div class="chat-footer">
            <a
                aria-label="anchor"
                class="btn btn-icon me-2 btn-light"
                href="#!"
            >
                <i class="ri-attachment-line"></i>
            </a>
            <input
                class="form-control form-control-lg chat-message-space border-0 shadow-none"
                placeholder="Type your message here..."
                type="text"
            />
            <a
                aria-label="anchor"
                class="btn btn-icon ms-2 btn-light emoji-picker"
                href="#!"
            >
                <i class="ri-emotion-line"></i>
            </a>
            <a
                aria-label="anchor"
                class="btn btn-primary ms-2 btn-icon btn-send"
                href="#!"
            >
                <i class="ri-send-plane-2-line"></i>
            </a>
        </div>
    </div>
</div>

<!-- Start::chat user details offcanvas -->
<Offcanvas
    placement="end"
    class="offcanvas-end"
    {isOpen}
    {toggle}
    tabindex={-1}
    id="offcanvasRight"
>
    <div class="">
        <div class="chat-user-details" id="chat-user-details">
            <div class="text-center mb-5">
                <span
                    class="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson"
                >
                    <img
                        class="chatimageperson"
                        src={activeUser.image}
                        alt="img"
                    />
                </span>
                <p class="mb-1 fs-15 fw-medium text-dark lh-1 chatnameperson">
                    {activeUser.name}
                </p>
                <p class="fs-13 text-muted">
                    <span class="chatnameperson">alicesmith</span>@gmail.com
                </p>
                <p class="text-center mb-0">
                    <button
                        type="button"
                        aria-label="button"
                        class="btn btn-icon rounded-pill btn-primary-light btn-wave"
                        ><i class="ri-phone-line"></i></button
                    >
                    <button
                        type="button"
                        aria-label="button"
                        class="btn btn-icon rounded-pill btn-success-light ms-2 btn-wave"
                        ><i class="ri-chat-1-line"></i></button
                    >
                    <button
                        type="button"
                        aria-label="button"
                        class="btn btn-icon rounded-pill btn-warning-light ms-2 btn-wave"
                        ><i class="ri-video-add-line"></i></button
                    >
                </p>
            </div>
            <div class="mb-5">
                <div class="fw-medium mb-4">
                    Shared Files
                    <span class="float-end fs-11"
                        ><a href="#!" class="fs-13 text-muted">
                            View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i>
                        </a></span
                    >
                </div>
                <ul class="shared-files list-unstyled">
                    {#each Files as file}
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-lg">
                                        <Image
                                            src={file.fileIcon}
                                            alt={file.fileName}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <p class="fs-13 fw-medium mb-0">
                                        {file.fileName}
                                    </p>
                                    <p class="mb-0 text-muted fs-11">
                                        {file.fileDate}
                                    </p>
                                </div>
                                <div class="fs-13 text-muted">
                                    {file.fileSize}
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <div class="mb-0">
                <div class="fw-medium mb-4">
                    Photos & Media
                    <span class="float-end fs-11"
                        ><a href="#!" class="fs-13 text-muted">
                            View All<i class="ti ti-arrow-narrow-right ms-1"
                            ></i>
                        </a></span
                    >
                </div>
                <ChatGallery {images} galleryID="chat_galleryId" />
            </div>
        </div>
    </div>
</Offcanvas>
<!-- End::chat user details offcanvas -->
