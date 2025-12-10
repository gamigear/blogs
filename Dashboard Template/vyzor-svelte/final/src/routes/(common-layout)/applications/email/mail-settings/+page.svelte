<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Accountoptions,
        Categories,
        CountrySelect,
        Devices,
        LanguageSelect,
        MailCategories,
        Maximumoptions,
        MaxLimitoptions,
    } from "$lib/data/applications/email/mailsettingsdata";
    import { Dropdownoption } from "$lib/data/uielements/dropdowndata";

    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Input,
        ListGroup,
        ListGroupItem,
        Nav,
        NavItem,
        NavLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    let activeTab = 1;

    type ToggleState = { [key: string]: "on" | "off" };
    let toggles: ToggleState = {};

    function toggle(toggleKey: string) {
        toggles = {
            ...toggles,
            [toggleKey]: toggles[toggleKey] === "on" ? "off" : "on",
        };
    }

    let avatar:any; // To store the avatar image data
  let fileinput:any; // To reference the file input element

  const onFileSelected = (e:any) => {
    let image = e.target.files[0]; // Get the selected file
    if (image) {
      let reader = new FileReader();
      reader.readAsDataURL(image); // Read the file as a data URL

      reader.onload = (e:any) => {
        avatar = e.target.result; // Update avatar with the result
      };
    }
  };

</script>

<!-- Page Title -->
<svelte:head>
    <title>MailSettings | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Mail Settings"
    activepage="Applications"
    subTitle="Email"
    page="Mail Settings"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<div class="row mb-5">
    <div class="col-xl-3">
        <div class="card custom-card">
            <div class="card-body text-center p-4">
                <span class="avatar avatar-xxl avatar-rounded">
                    {#if avatar}
                        <!-- Display the selected avatar image -->
                        <img  loading="lazy" class="avatar" src={avatar} alt="Avatar" />
                      {:else}
                        <!-- Display a default image if no avatar is selected -->
                        <img
                          src="../../images/faces/9.jpg"
                          alt="Profile"
                          id="profile-img"
                        />
                      {/if}

                      <!-- Button to trigger file input -->
                      <!-- svelte-ignore a11y_consider_explicit_label -->
                      <a
                        href="#!"
                        class="badge rounded-pill bg-primary avatar-badge"
                        onclick={() => fileinput.click()}
                      >
                        <i class="fe fe-camera"></i>
                      </a>

                      <!-- Hidden file input element -->
                      <input
                        style="display:none"
                        type="file"
                        class="position-absolute w-100 h-100 op-0"
                        id="profile-change"
                        accept=".jpg, .jpeg, .png"
                        onchange={onFileSelected}
                        bind:this={fileinput}
                      />
                </span>
                <h6 class="fw-semibold mt-3 mb-1">Jhon Doe</h6>
                <span class="d-block fs-13 tex-muted"
                    >jhondoe3125@gmail.com</span
                >
                <div class="btn-list mt-3">
                    <button class="btn btn-sm btn-w-sm btn-primary">Edit</button
                    >
                    <button class="btn btn-sm btn-w-sm btn-danger"
                        >Delete</button
                    >
                </div>
            </div>
        </div>
        <div class="card custom-card">
            <div class="card-body">
                <Nav
                    class="nav nav-tabs flex-column nav-tabs-header mb-0 mail-sesttings-tab"
                    role="tablist"
                >
                    <NavItem class="nav-item m-1">
                        <NavLink
                            class="nav-link"
                            on:click={(e) => {
                                (activeTab = 1), e.preventDefault();
                            }}
                            active={activeTab == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#personal-info"
                            aria-selected="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><path
                                    d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM96,144a24,24,0,1,1,24-24A24,24,0,0,1,96,144Z"
                                    opacity="0.2"
                                /><line
                                    x1="152"
                                    y1="112"
                                    x2="192"
                                    y2="112"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="152"
                                    y1="144"
                                    x2="192"
                                    y2="144"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><rect
                                    x="32"
                                    y="48"
                                    width="192"
                                    height="160"
                                    rx="8"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><circle
                                    cx="96"
                                    cy="120"
                                    r="24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><path
                                    d="M64,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            Personal Information</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 2), e.preventDefault();
                            }}
                            active={activeTab == 2}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#account-settings"
                            aria-selected="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><path
                                    d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                                    opacity="0.2"
                                /><circle
                                    cx="128"
                                    cy="128"
                                    r="40"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><path
                                    d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            Account Settings</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 3), e.preventDefault();
                            }}
                            active={activeTab == 3}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#email-settings"
                            aria-selected="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><polygon
                                    points="224 56 128 144 32 56 224 56"
                                    opacity="0.2"
                                /><path
                                    d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><polyline
                                    points="224 56 128 144 32 56"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            Email</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 4), e.preventDefault();
                            }}
                            active={activeTab == 4}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#labels"
                            aria-selected="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><path
                                    d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
                                    opacity="0.2"
                                /><path
                                    d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><circle cx="84" cy="84" r="12" /></svg
                            >
                            Labels</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 5), e.preventDefault();
                            }}
                            active={activeTab == 5}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#notification-settings"
                            aria-selected="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><path
                                    d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
                                    opacity="0.2"
                                /><path
                                    d="M96,192a32,32,0,0,0,64,0"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><path
                                    d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            Notifications</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 6), e.preventDefault();
                            }}
                            active={activeTab == 6}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#security"
                            aria-selected="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><rect
                                    x="40"
                                    y="88"
                                    width="176"
                                    height="128"
                                    rx="8"
                                    opacity="0.2"
                                /><rect
                                    x="40"
                                    y="88"
                                    width="176"
                                    height="128"
                                    rx="8"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><circle cx="128" cy="152" r="12" /><path
                                    d="M88,88V56a40,40,0,0,1,80,0V88"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            Security</NavLink
                        >
                    </NavItem>
                </Nav>
            </div>
        </div>
    </div>
    <div class="col-xl-9">
        <div class="card custom-card">
            <div class="card-body">
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <TabContent class="tab-content" id="custom_mailSettingTab">
                    <TabPane
                        class={`p-0 border-0 ${activeTab == 1 ? "active" : ""}`}
                        id="personal-info"
                        role="tabpanel"
                    >
                        <div>
                            <h6 class="fw-medium mb-3">Profile :</h6>
                            <div class="row gy-4 mb-4">
                                <Col xl={6}>
                                    <label for="first-name" class="form-label"
                                        >First Name</label
                                    >
                                    <Input
                                        type="text"
                                        class=""
                                        id="first-name"
                                        placeholder="First Name"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label for="last-name" class="form-label"
                                        >Last Name</label
                                    >
                                    <Input
                                        type="text"
                                        class=""
                                        id="last-name"
                                        placeholder="Last Name"
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label class="form-label">User Name</label>
                                    <div class="input-group mb-3">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon3"
                                            >user2413@gmail.com</span
                                        >
                                        <Input
                                            type="text"
                                            class=""
                                            id="basic-url"
                                            aria-describedby="basic-addon3"
                                        />
                                    </div>
                                </Col>
                            </div>
                            <h6 class="fw-medium mb-3">
                                Personal information :
                            </h6>
                            <div class="row gy-4">
                                <Col xl={6}>
                                    <label
                                        for="email-address"
                                        class="form-label"
                                        >Email Address :</label
                                    >
                                    <Input
                                        type="text"
                                        class=""
                                        id="email-address"
                                        placeholder="xyz@gmail.com"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label for="phone-no" class="form-label"
                                        >Phone No :</label
                                    >
                                    <Input
                                        type="text"
                                        class=""
                                        id="phone-no"
                                        placeholder="Enter Phone No"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label for="language" class="form-label"
                                        >Language :</label
                                    >
                                    <Select
                                        items={LanguageSelect}
                                        multiFullItemClearable
                                        multiple
                                        showChevron={false}
                                        value={LanguageSelect[0].value}
                                        clearable={false}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label class="form-label">Country :</label>
                                    <Select
                                        items={CountrySelect}
                                        searchable={true}
                                        showChevron={true}
                                        clearable={false}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label for="bio" class="form-label"
                                        >Bio :</label
                                    >
                                    <Input
                                        type="textarea"
                                        class=""
                                        id="bio"
                                        rows={5}
                                        defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"}
                                    />
                                </Col>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane
                        class={`border-0 p-0 ${activeTab == 2 ? "active" : ""}`}
                        id="account-settings"
                        role="tabpanel"
                    >
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div class="row gy-3" id="account-settings">
                            <div class="col-xxl-7">
                                <div
                                    class="card custom-card shadow-none mb-0 border"
                                >
                                    <div class="card-body">
                                        <div
                                            class="d-sm-flex d-block align-items-top mb-4 justify-content-between"
                                        >
                                            <div class="w-75">
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Two Step Verification
                                                </p>
                                                <p
                                                    class="fs-13 text-muted mb-0"
                                                >
                                                    Two step verificatoin is
                                                    very secured and restricts
                                                    in happening faulty
                                                    practices.
                                                </p>
                                            </div>

                                            <div
                                                class={`toggle mb-0 toggle-primary ${toggles["notification3"] === "off" || !toggles["notification3"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("notification3")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top mb-4 justify-content-between"
                                        >
                                            <div class="mb-sm-0 mb-2 w-75">
                                                <p class="fs-14 mb-2 fw-medium">
                                                    Authentication
                                                </p>
                                                <div
                                                    class="mb-0 authentication-btn-group"
                                                >
                                                    <div
                                                        class="btn-group"
                                                        role="group"
                                                        aria-label="Basic radio toggle button group"
                                                    >
                                                        <input
                                                            type="radio"
                                                            class="btn-check"
                                                            name="btnradio"
                                                            id="btnradio1"
                                                            defaultChecked
                                                        />
                                                        <label
                                                            class="btn btn-outline-light"
                                                            for="btnradio1"
                                                            ><i
                                                                class="ri-lock-unlock-line me-2 d-inline-block"
                                                            ></i>Pin</label
                                                        >
                                                        <input
                                                            type="radio"
                                                            class="btn-check"
                                                            name="btnradio"
                                                            id="btnradio2"
                                                        />
                                                        <label
                                                            class="btn btn-outline-light"
                                                            for="btnradio2"
                                                            ><i
                                                                class="ri-lock-password-line me-2 d-inline-block"
                                                            ></i>Password</label
                                                        >
                                                        <input
                                                            type="radio"
                                                            class="btn-check"
                                                            name="btnradio"
                                                            id="btnradio3"
                                                        />
                                                        <label
                                                            class="btn btn-outline-light"
                                                            for="btnradio3"
                                                            ><i
                                                                class="ri-fingerprint-line me-2 d-inline-block"
                                                            ></i>Finger Print</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-primary ${toggles["notification2"] === "off" || !toggles["notification2"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("notification2")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top mb-4 justify-content-between"
                                        >
                                            <div class="w-75">
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Recovery Mail
                                                </p>
                                                <p
                                                    class="fs-13 text-muted mb-0"
                                                >
                                                    Incase of forgetting
                                                    password mails are sent to
                                                    heifo@gmail.com
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-primary ${toggles["notification"] === "off" || !toggles["notification"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("notification")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top mb-4 justify-content-between"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    SMS Recovery
                                                </p>
                                                <p
                                                    class="fs-13 text-muted mb-0"
                                                >
                                                    SMS are sent to 9102312xx in
                                                    case of recovery
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-primary ${toggles["notification4"] === "off" || !toggles["notification4"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("notification4")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Reset Password
                                                </p>
                                                <p class="fs-13 text-muted">
                                                    Password should be min of <b
                                                        class="text-success"
                                                        >8 digits<sup>*</sup></b
                                                    >,atleast
                                                    <b class="text-success"
                                                        >One Capital letter<sup
                                                            >*</sup
                                                        ></b
                                                    >
                                                    and
                                                    <b class="text-success"
                                                        >One Special Character<sup
                                                            >*</sup
                                                        ></b
                                                    > included.
                                                </p>
                                                <div class="mb-2">
                                                    <label
                                                        for="current-password"
                                                        class="form-label"
                                                        >Current Password</label
                                                    >
                                                    <Input
                                                        type="text"
                                                        class="   "
                                                        id="current-password"
                                                        placeholder="Current Password"
                                                    />
                                                </div>
                                                <div class="mb-2">
                                                    <label
                                                        for="new-password"
                                                        class="form-label"
                                                        >New Password</label
                                                    >
                                                    <Input
                                                        type="text"
                                                        class="   "
                                                        id="new-password"
                                                        placeholder="New Password"
                                                    />
                                                </div>
                                                <div class="mb-0">
                                                    <label
                                                        for="confirm-password"
                                                        class="form-label"
                                                        >Confirm Password</label
                                                    >
                                                    <Input
                                                        type="text"
                                                        class="   "
                                                        id="confirm-password"
                                                        placeholder="Confirm Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Col xxl={5}>
                                <Card
                                    class="custom-card shadow-none mb-0 border"
                                >
                                    <CardHeader
                                        class="justify-content-between d-sm-flex d-block"
                                    >
                                        <div class="card-title">
                                            Registered Devices
                                        </div>
                                        <div class="mt-sm-0 mt-2">
                                            <SpkButton
                                                color="primary"
                                                customClass="btn btn-sm"
                                                >Signout from all devices</SpkButton
                                            >
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <ul class="list-group">
                                            {#each Devices as device}
                                                <li class="list-group-item">
                                                    <div
                                                        class="d-sm-flex d-block align-items-top"
                                                    >
                                                        <div
                                                            class="lh-1 mb-sm-0 mb-2"
                                                        >
                                                            <i
                                                                class={`bi ${device.icon} me-3 fs-16 align-middle text-muted`}
                                                            ></i>
                                                        </div>
                                                        <div
                                                            class="lh-1 flex-fill"
                                                        >
                                                            <p class="mb-1">
                                                                <span
                                                                    class="fw-medium"
                                                                    >{device.name}</span
                                                                >
                                                            </p>
                                                            <p class="mb-0">
                                                                <span
                                                                    class="text-muted fs-13"
                                                                    >{device.locationDate}</span
                                                                >
                                                            </p>
                                                        </div>
                                                        <SpkDropdown
                                                            option={Dropdownoption}
                                                            ToggleClass="btn-icon btn-sm btn-light no-caret"
                                                            Caret={false}
                                                            parent={`<i class="fe fe-more-vertical"></i>`}
                                                        />
                                                    </div>
                                                </li>
                                            {/each}
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    </TabPane>
                    <TabPane
                        class={`p-0 ${activeTab == 3 ? "active" : ""}`}
                        id="email-settings"
                        role="tabpanel"
                    >
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <ListGroup class="list-group list-group-flush rounded">
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3} lg={3} md={3} sm={12} class="">
                                        <span class="fs-14 fw-medium mb-0"
                                            >Menu View :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexRadioDefault1"
                                            >
                                                Default View
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexRadioDefault2"
                                            >
                                                Advanced View
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end toggle-danger ${toggles["email"] === "off" || !toggles["email"] ? "on" : ""}`}
                                            onclick={() => toggle("email")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-3 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Language :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <label
                                            for="mail-language"
                                            class="form-label"
                                            >Languages :</label
                                        >
                                        <Select
                                            multiFullItemClearable
                                            multiple
                                            items={LanguageSelect}
                                            value={[
                                                LanguageSelect[0],
                                                LanguageSelect[2],
                                            ]}
                                            clearable={false}
                                    showChevron={false}
                                        />
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end  toggle-success ${toggles["language"] === "on" ? "on" : "off"}`}
                                            onclick={() => toggle("language")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Images :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="images-open"
                                                id="images-open1"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="images-open1"
                                            >
                                                Always Open Images
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="images-open"
                                                id="images-hide2"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="images-hide2"
                                            >
                                                Ask For Permission
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end  toggle-success ${toggles["email1"] === "on" ? "on" : "off"}`}
                                            onclick={() => toggle("email1")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Keyboard Shortcuts :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="keyboard-enable"
                                                id="keyboard-enable1"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="keyboard-enable1"
                                            >
                                                Keyboard Shortcuts Enable
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="keyboard-enable"
                                                id="keyboard-disable2"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="keyboard-disable2"
                                            >
                                                Keyboard Shortcuts Disable
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end  toggle-success ${toggles["key"] === "on" ? "on" : "off"}`}
                                            onclick={() => toggle("key")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Notifications :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="desktop-notifications"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="desktop-notifications"
                                            >
                                                Desktop Notifications
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="mobile-notifications"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="mobile-notifications"
                                            >
                                                Mobile Notifications
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div class="float-sm-end">
                                            <a
                                                href="#!"
                                                class="btn btn-success-ghost btn-sm"
                                                >Learn-more</a
                                            >
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-3 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Maximum Mails Per Page :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <Select
                                            items={Maximumoptions}
                                            clearable={false}
                                            showChevron={true}
                                            searchable={true}
                                            value={Maximumoptions[0]}
                                        />
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end  toggle-success ${toggles["max"] === "on" ? "on" : "off"}`}
                                            onclick={() => toggle("max")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Mail Composer :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="mail-composer"
                                                id="mail-composeron1"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="mail-composeron1"
                                            >
                                                Mail Composer On
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="mail-composer"
                                                id="mail-composeroff2"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="mail-composeroff2"
                                            >
                                                Mail Composer Off
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end  toggle-success ${toggles["compose"] === "on" ? "on" : "off"}`}
                                            onclick={() => toggle("compose")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Auto Correct :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="auto-correct"
                                                id="auto-correcton1"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="auto-correcton1"
                                            >
                                                Auto Correct On
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="auto-correct"
                                                id="auto-correctoff2"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="auto-correctoff2"
                                            >
                                                Auto Correct Off
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div
                                            class={`toggle mb-0 float-sm-end  toggle-success ${toggles["auto"] === "on" ? "on" : "off"}`}
                                            onclick={() => toggle("auto")}
                                        >
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row
                                    class="gy-2 d-sm-flex align-items-center justify-content-between"
                                >
                                    <Col xl={3}>
                                        <span class="fs-14 fw-medium mb-0"
                                            >Mail Send Action :</span
                                        >
                                    </Col>
                                    <Col xl={4}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="on-keyboard"
                                                defaultChecked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="on-keyboard"
                                            >
                                                On Keyboard Action
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="on-buttonclick"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="on-buttonclick"
                                            >
                                                On Button Click
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div class="float-sm-end">
                                            <a
                                                href="#!"
                                                class="btn btn-success-ghost btn-sm"
                                                >Learn-more</a
                                            >
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </TabPane>
                    <TabPane
                        class={`${activeTab == 4 ? "active" : ""}`}
                        id="labels"
                        role="tabpanel"
                    >
                        <p class="fs-14 fw-medium mb-3">Mail Labels :</p>
                        <Row class="gy-2">
                            {#each MailCategories as category}
                                <Col
                                    xxl={3}
                                    xl={6}
                                    lg={4}
                                    md={4}
                                    sm={6}
                                    class="col-12"
                                >
                                    <Card class="custom-card shadow-none">
                                        <CardBody
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2"
                                        >
                                            <label
                                                class="form-check-label"
                                                for={category.id}
                                                >{category.label}</label
                                            >
                                            <div
                                                class="form-check form-check-md form-switch mb-0"
                                            >
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id={category.id}
                                                    defaultChecked={category.defaultChecked}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            {/each}
                        </Row>
                        <p class="fs-14 fw-medium mb-3">Settings :</p>
                        <Row class="gy-2">
                            <Col
                                xxl={3}
                                xl={6}
                                lg={4}
                                md={4}
                                sm={6}
                                class="col-12"
                            >
                                <Card class="custom-card shadow-none">
                                    <CardBody
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                                    >
                                        <label
                                            class="form-check-label"
                                            for="label-settings">Settings</label
                                        >
                                        <div
                                            class="form-check form-check-md form-switch mb-0"
                                        >
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="label-settings"
                                                defaultChecked
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <p class="fs-14 fw-medium mb-3">Custom Labels :</p>
                        <Row class="gy-2">
                            {#each Categories as category}
                                <Col
                                    xxl={3}
                                    xl={6}
                                    lg={4}
                                    md={4}
                                    sm={6}
                                    class="col-12"
                                >
                                    <Card class="custom-card shadow-none">
                                        <CardBody
                                            class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                                        >
                                            <label
                                                class="form-check-label"
                                                for={category.id}
                                            >
                                                {category.label}
                                            </label>
                                            <div
                                                class="form-check form-check-md form-switch mb-0"
                                            >
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id={category.id}
                                                    defaultChecked={category.defaultChecked}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            {/each}
                        </Row>
                    </TabPane>
                    <TabPane
                        class={`p-0 ${activeTab == 5 ? "active" : ""}`}
                        id="notification-settings"
                        role="tabpanel"
                    >
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <ListGroup
                            class="list-group-flush list-unstyled rounded"
                        >
                            <ListGroupItem>
                                <Row class="gx-5 gy-3">
                                    <Col xl={5}>
                                        <p class="fs-16 mb-1 fw-medium">
                                            Email Notifications
                                        </p>
                                        <p class="fs-13 mb-0 text-muted">
                                            Email notifications are the
                                            notifications you will receeive when
                                            you are offline, you can customize
                                            them by enabling or disabling them.
                                        </p>
                                    </Col>
                                    <Col xl={7}>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-sm-0 mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Updates & Features
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Notifications about new
                                                    updates and their features.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["noti"] === "off" || !toggles["noti"] ? "on" : ""}`}
                                                onclick={() => toggle("noti")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Early Access
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Users are selected for beta
                                                    testing of new
                                                    update,notifications
                                                    relating or participate in
                                                    any of paid product
                                                    promotion.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["early"] === "on" ? "on" : "off"}`}
                                                onclick={() => toggle("early")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Email Shortcuts
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Shortcut notifications for
                                                    email.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["notification4"] === "off" || !toggles["notification4"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("notification4")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    New Mails
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Notifications related to new
                                                    mails received.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["received"] === "off" || !toggles["received"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("received")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Mail Chat Messages
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Any of new messages are
                                                    received will be updated
                                                    through notifications.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["message"] === "off" || !toggles["message"] ? "on" : ""}`}
                                                onclick={() =>
                                                    toggle("message")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div class="row gx-5 gy-3">
                                    <div class="col-xl-5">
                                        <p class="fs-16 mb-1 fw-medium">
                                            Push Notifications
                                        </p>
                                        <p class="fs-13 mb-0 text-muted">
                                            Push notifications are recieved when
                                            you are online, you can customize
                                            them by enabling or disabling them.
                                        </p>
                                    </div>
                                    <div class="col-xl-7">
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-sm-0 mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    New Mails
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Notifications related to new
                                                    mails received.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["new"] === "off" || !toggles["new"] ? "on" : ""}`}
                                                onclick={() => toggle("new")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Mail Chat Messages
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Any of new messages are
                                                    received will be updated
                                                    through notifications.
                                                </p>
                                            </div>

                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["mailon"] === "off" || !toggles["mailon"] ? "on" : ""}`}
                                                onclick={() => toggle("mailon")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-top justify-content-between mt-3"
                                        >
                                            <div
                                                class="mail-notification-settings"
                                            >
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Mail Extensions
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Notifications related to the
                                                    extensions received by new
                                                    emails and thier propertied
                                                    also been displayed.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["extensions"] === "on" ? "on" : "off"}`}
                                                onclick={() =>
                                                    toggle("extensions")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                    </TabPane>
                    <TabPane
                        class={`p-0 ${activeTab == 6 ? "active" : ""}`}
                        id="security"
                        role="tabpanel"
                    >
                        <ListGroup
                            class="list-group-flush list-unstyled rounded"
                        >
                            <ListGroupItem>
                                <Row class="gx-5 gy-3">
                                    <Col xl={4}>
                                        <p class="fs-16 mb-1 fw-medium">
                                            Logging In
                                        </p>
                                        <p class="fs-13 mb-0 text-muted">
                                            Security settings related to logging
                                            into our email account and taking
                                            down account if any mischevious
                                            action happended.
                                        </p>
                                    </Col>
                                    <Col xl={8}>
                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3"
                                        >
                                            <div class="mail-security-settings">
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Max Limit for login attempts
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted mb-sm-0 mb-2"
                                                >
                                                    Account will freeze for
                                                    24hrs while attempt to login
                                                    with wrong credentials for
                                                    selected number of times
                                                </p>
                                            </div>
                                            <div class="project-list-main">
                                                <Select
                                                    items={MaxLimitoptions}
                                                    clearable={false}
                                                    showChevron={true}
                                                    searchable={true}
                                                    value={MaxLimitoptions[0]}
                                                />
                                                <!-- <SpkSelect name="colors" option={MaxLimitoptions} mainClass="basic-multi-select security-select"
                                                                    menuplacement='auto' classprefix="Select2" defaultvalue={[MaxLimitoptions[0]]}
                                                                /> -->
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-3"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Account Freeze time
                                                    management
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted mb-sm-0 mb-2"
                                                >
                                                    You can change the time for
                                                    the account freeze when
                                                    attempts for
                                                </p>
                                            </div>
                                            <div class="custom-mail-security">
                                                <Select
                                                    items={Accountoptions}
                                                    clearable={false}
                                                    showChevron={true}
                                                    searchable={true}
                                                    value={Accountoptions[0]}
                                                />
                                                <!-- <SpkSelect name="colors" option={Accountoptions} mainClass="basic-multi-select security-select-date"
                                                                    menuplacement='auto' classprefix="Select2" defaultvalue={[Accountoptions[0]]}
                                                                /> -->
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <ListGroupItem>
                                <Row class="gx-5 gy-3">
                                    <Col xl={4}>
                                        <p class="fs-16 mb-1 fw-medium">
                                            Password Requirements
                                        </p>
                                        <p class="fs-13 mb-0 text-muted">
                                            Security settings related to
                                            password strength.
                                        </p>
                                    </Col>
                                    <Col xl={8}>
                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3 gap-3"
                                        >
                                            <div class="mail-security-settings">
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Minimum number of characters
                                                    in the password
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    There should be a minimum
                                                    number of characters for a
                                                    password to be validated
                                                    that shouls be set here.
                                                </p>
                                            </div>
                                            <div>
                                                <Input
                                                    type="text"
                                                    class=""
                                                    defaultValue="8"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-3"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Contain A Number
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Password should contain a
                                                    number.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["number"] === "off" || !toggles["number"] ? "on" : ""}`}
                                                onclick={() => toggle("number")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-3"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Contain A Special Character
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Password should contain a
                                                    special Character.
                                                </p>
                                            </div>
                                            <div
                                                class={`toggle mb-0 ms-0 mt-sm-0 mt-2 toggle-success ${toggles["pass"] === "off" || !toggles["pass"] ? "on" : ""}`}
                                                onclick={() => toggle("pass")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>

                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-3"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Atleast One Capital Letter
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Password should contain
                                                    atleast one capital letter.
                                                </p>
                                            </div>
                                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                                            <div
                                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["capital"] === "on" ? "on" : "off"}`}
                                                onclick={() =>
                                                    toggle("capital")}
                                            >
                                                <span></span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-sm-flex d-block align-items-top justify-content-between mt-3"
                                        >
                                            <div>
                                                <p class="fs-14 mb-1 fw-medium">
                                                    Maximum Password Length
                                                </p>
                                                <p
                                                    class="fs-13 mb-0 text-muted"
                                                >
                                                    Maximum password lenth
                                                    should be selected here.
                                                </p>
                                            </div>
                                            <div>
                                                <Input
                                                    type="text"
                                                    class=""
                                                    defaultValue="16"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row class="gx-5 gy-3">
                                    <Col xl={4}>
                                        <p class="fs-16 mb-1 fw-medium">
                                            Unknown Chats
                                        </p>
                                        <p class="fs-13 mb-0 text-muted">
                                            Security settings related to unknown
                                            chats.
                                        </p>
                                    </Col>
                                    <Col xl={8}>
                                        <div
                                            class="btn-group float-sm-end"
                                            role="group"
                                            aria-label="Basic radio toggle button group"
                                        >
                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnunknownchats"
                                                id="unknown-chats-show"
                                                defaultChecked
                                            />
                                            <label
                                                class="btn btn-outline-light"
                                                for="unknown-chats-show"
                                                >Show</label
                                            >
                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnunknownchats"
                                                id="unknown-chats-hide"
                                            />
                                            <label
                                                class="btn btn-outline-light"
                                                for="unknown-chats-hide"
                                                >Hide</label
                                            >
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </TabPane>
                </TabContent>
            </div>
            <div class="card-footer">
                <div class="float-end">
                    <button class="btn btn-light m-1">
                        Restore Defaults
                    </button>
                    <button class="btn btn-primary m-1"> Save Changes </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--End::row-1 -->
