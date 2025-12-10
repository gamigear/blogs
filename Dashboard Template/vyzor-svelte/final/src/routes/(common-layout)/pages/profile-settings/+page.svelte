<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Multipleselectdata } from "$lib/data/forms/formselectdata";
    import { Languagedata, timeZoneOptions } from "$lib/data/pages/profilesettingdata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";

    let toggles:any = {};

    // Toggle function
    function toggle(toggleKey:string) {
        toggles = {
            ...toggles,
            [toggleKey]: toggles[toggleKey] === "on" ? "off" : "on",
        };
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>ProfileSettings | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Profile Settings"
    activepage="Pages"
    page="Profile Settings"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Account</div>
            </CardHeader>
            <CardBody class="p-4">
                <Row class="gy-3">
                    <Col xl={12}>
                        <div class="d-flex align-items-start flex-wrap gap-3">
                            <div>
                                <span class="avatar avatar-xxl">
                                    <Image
                                        src="../images/faces/9.jpg"
                                        alt=""
                                    />
                                </span>
                            </div>
                            <div>
                                <span class="fw-medium d-block mb-2"
                                    >Profile Picture</span
                                >
                                <div class="btn-list mb-1">
                                    <SpkButton
                                        color="primary"
                                        customClass="btn btn-sm btn-wave"
                                        ><i class="ri-upload-2-line me-1"
                                        ></i>Change Image</SpkButton
                                    >
                                    <SpkButton
                                        color="light"
                                        customClass="btn btn-sm btn-wave"
                                        ><i class="ri-delete-bin-line me-1"
                                        ></i>Remove</SpkButton
                                    >
                                </div>
                                <span class="d-block fs-12 text-muted"
                                    >Use JPEG, PNG, or GIF. Best size: 200x200
                                    pixels. Keep it under 5MB</span
                                >
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Label for="profile-user-name" class=""
                            >User Name :</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="profile-user-name"
                            defaultValue=""
                            placeholder="Enter Name"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="profile-email" class="">Email :</Label>
                        <Input
                            type="email"
                            class=""
                            id="profile-email"
                            defaultValue=""
                            placeholder="Enter Email"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="profile-phn-no" class="">Phone No :</Label>
                        <Input
                            type="text"
                            class=""
                            id="profile-phn-no"
                            defaultValue=""
                            placeholder="Enter Number"
                        />
                    </Col>
                    <Col xl={3}>
                        <Label for="profile-age" class="">Age :</Label>
                        <Input
                            type="number"
                            class=""
                            id="profile-age"
                            defaultValue=""
                            placeholder="Enter Age"
                        />
                    </Col>
                    <Col xl={3}>
                        <Label for="profile-designation" class=""
                            >Designation :</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="profile-designation"
                            defaultValue=""
                            placeholder="Enter Designation"
                        />
                    </Col>
                    <Col xl={12}>
                        <Label for="profile-address" class="">Address :</Label>
                        <Input
                            type="textarea"
                            class=""
                            id="profile-address"
                            rows={3}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="profile-language" class="">Language :</Label
                        >
                        <Select
                            items={Languagedata}
                            class="mb-2"
                            showChevron={true}
                            clearable={false}
                            name="choices-multiple-default"
                            id="choices-multiple-default"
                        />
                        <!-- <SpkSelect searchable name="colors" option={Languagedata} menuplacement='auto' classprefix="Select2" defaultvalue={[Languagedata[3]]} /> -->
                    </Col>
                    <Col xl={6}>
                        <Label for="profile-timezone" class="">Timezone :</Label
                        >
                         <Select
                            items={timeZoneOptions}
                            class="mb-2"
                            showChevron={true}
                            clearable={false}
                            value={timeZoneOptions[3].value}
                            name="choices-multiple-default"
                            id="choices-multiple-default1"
                        />
                        <!-- <SpkSelect searchable name="colors" option={timeZoneOptions} menuplacement='auto' classprefix="Select2" defaultvalue={[timeZoneOptions[3]]} /> -->
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Change Password</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3">
                    <Col xl={6}>
                        <Label for="Password" class="">New Password</Label>
                        <Input
                            type="text"
                            class=""
                            id="Password"
                            defaultValue=""
                            placeholder="Enter Password"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="confirm-password" class=""
                            >Confirm Password</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="confirm-password"
                            defaultValue=""
                            placeholder="Confirm Password"
                        />
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <SpkButton color="primary" customClass="btn float-end"
                    >Save Changes</SpkButton
                >
            </CardFooter>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Security Settings</div>
            </CardHeader>
            <CardBody>
                <div
                    class="d-sm-flex d-block align-items-top justify-content-between"
                >
                    <div class="w-50">
                        <p class="fs-14 mb-1 fw-medium">Login Verification</p>
                        <p class="fs-12 mb-0 text-muted">
                            This helps protect accounts from unauthorized
                            access, even if a password is compromised.
                        </p>
                    </div>
                    <a
                        href="#!"
                        class="link-primary text-decoration-underline"
                        >Set Up Verification</a
                    >
                </div>
                <div
                    class="d-sm-flex d-block align-items-top justify-content-between mt-3"
                >
                    <div class="w-50">
                        <p class="fs-14 mb-1 fw-medium">
                            Password Verification
                        </p>
                        <p class="fs-12 mb-0 text-muted">
                            This additional step helps ensure that the person
                            attempting to modify account details is the
                            legitimate account owner.
                        </p>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="personal-details"
                        />
                        <label class="form-check-label" for="personal-details">
                            Require Personal Details
                        </label>
                    </div>
                </div>
            </CardBody>
            <CardFooter>
                <div class="btn-list float-end">
                    <SpkButton color="danger" customClass="btn btn-wave"
                        >Deactivate Account</SpkButton
                    >
                    <SpkButton color="light" customClass="btn btn-wave"
                        >Restore Defaults</SpkButton
                    >
                </div>
            </CardFooter>
        </Card>
    </Col>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="">
                <div class="card-title">Notifications</div>
            </CardHeader>
            <CardBody class="">
                <div class="row gx-5 gy-3">
                    <Col xl={12}>
                        <p class="fs-14 mb-1 fw-medium">
                            Configure Notifications
                        </p>
                        <p class="fs-12 mb-0 text-muted">
                            By configuring notifications, users can tailor their
                            experience to receive alerts for the types of events
                            that matter to them.
                        </p>
                    </Col>
                    <Col xl={12}>
                        
                        <div
                            class="d-flex align-items-top justify-content-between mt-sm-0 mt-3"
                        >
                            <div class="mail-notification-settings">
                                <p class="fs-14 mb-1 fw-medium">
                                    In-App Notifications
                                </p>
                                <p class="fs-12 mb-0 text-muted">
                                    Alerts that appear within the application
                                    interface.
                                </p>
                            </div>
                            
                            <div
                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["app"] === "off" || !toggles["app"] ? "on" : ""}`}
                                onclick={() => toggle("app")}
                            >
                                <span></span>
                            </div>
                        </div>
                        <div
                            class="d-flex align-items-top justify-content-between mt-3"
                        >
                            <div class="mail-notification-settings">
                                <p class="fs-14 mb-1 fw-medium">
                                    Email Notifications
                                </p>
                                <p class="fs-12 mb-0 text-muted">
                                    Messages sent to the user's email address.
                                </p>
                            </div>
                            <div
                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["email"] === "off" || !toggles["email"] ? "on" : ""}`}
                                onclick={() => toggle("email")}
                            >
                                <span></span>
                            </div>
                        </div>
                        <div
                            class="d-flex align-items-top justify-content-between mt-3"
                        >
                            <div class="mail-notification-settings">
                                <p class="fs-14 mb-1 fw-medium">
                                    Push Notifications
                                </p>
                                <p class="fs-12 mb-0 text-muted">
                                    Alerts sent to the user's mobile device or
                                    desktop.
                                </p>
                            </div>
                            <div
                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["receive"] === "on" ? "on" : ""}`}
                                onclick={() => toggle("receive")}
                            >
                                <span></span>
                            </div>
                        </div>
                        <div
                            class="d-flex align-items-top justify-content-between mt-3"
                        >
                            <div class="mail-notification-settings">
                                <p class="fs-14 mb-1 fw-medium">
                                    SMS Notifications
                                </p>
                                <p class="fs-12 mb-0 text-muted">
                                    Text messages sent to the user's mobile
                                    phone.
                                </p>
                            </div>
                            <div
                                class={`toggle mb-0 float-sm-end  toggle-success ${toggles["sms"] === "off" || !toggles["sms"] ? "on" : ""}`}
                                onclick={() => toggle("sms")}
                            >
                                <span></span>
                            </div>
                        </div>
                    </Col>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
