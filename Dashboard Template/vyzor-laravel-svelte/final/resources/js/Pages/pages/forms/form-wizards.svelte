<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Form,
        Input,
        Label,
        Nav,
        NavItem,
        NavLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    import { Link } from "@inertiajs/svelte";
    const basePath = __BASE_PATH__;
    let activeTab1 = 1;
    let activeTab2 = 1;
$: progressWidth = `${(activeTab2 / 4) * 100}%`;
    const handleNext = () => {
        switch (activeTab1) {
            case 1:
                activeTab1 = 2;
                break;
            case 2:
                activeTab1 = 3;
                break;
            case 3:
                activeTab1 = 4;
                break;
            default:
                break;
        }
    };

    const handlePrevious = () => {
        switch (activeTab1) {
            case 2:
                activeTab1 = 1;
                break;
            case 3:
                activeTab1 = 2;
                break;
            case 4:
                activeTab1 = 3;
                break;
            default:
                break;
        }
    };

    const gotoFirst = () => {
        activeTab1 = 1;
    };
    const gotoFourth = () => {
        activeTab1 = 4;
    };

    const handleNext1 = () => {
        switch (activeTab2) {
            case 1:
                activeTab2 = 2;
                break;
            case 2:
                activeTab2 = 3;
                break;
            case 3:
                activeTab2 = 4;
                break;
            default:
                break;
        }
    };

    const handlePrevious1 = () => {
        switch (activeTab2) {
            case 2:
                activeTab2 = 1;
                break;
            case 3:
                activeTab2 = 2;
                break;
            case 4:
                activeTab2 = 3;
                break;
            default:
                break;
        }
    };

    const gotoFirst1 = () => {
        activeTab2 = 1;
    };
    const gotoFourth1 = () => {
        activeTab2 = 4;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>FormWizards | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Form Wizards" activepage="Forms" page="Form Wizards" />
<!-- Page Header Close -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">FORM WIZARD WITH VALIDATION</div>
            </CardHeader>
            <CardBody>
                <div id="basicwizard">
                    <Nav
                        class="nav nav-tabs nav-justified flex-md-row flex-column mb-4 tab-style-6 p-0"
                    >
                        <NavItem data-target-form="#contactDetailForm">
                            <NavLink
                                on:click={(e) => {
                                    (activeTab1 = 1), e.preventDefault();
                                }}
                                active={activeTab1 == 1}
                                class="icon-btn d-flex align-items-center justify-content-md-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#contactDetail"
                                ><span>Contact Detail</span></NavLink
                            >
                        </NavItem>
                        <NavItem data-target-form="#jobDetailForm">
                            <NavLink
                                on:click={(e) => {
                                    (activeTab1 = 2), e.preventDefault();
                                }}
                                active={activeTab1 == 2}
                                class="icon-btn d-flex align-items-center justify-content-md-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#jobDetail"
                                ><span>Job Detail</span></NavLink
                            >
                        </NavItem>
                        <NavItem data-target-form="#educationDetailForm">
                            <NavLink
                                on:click={(e) => {
                                    (activeTab1 = 3), e.preventDefault();
                                }}
                                active={activeTab1 == 3}
                                class="icon-btn d-flex align-items-center justify-content-md-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#educationDetail"
                                ><span>Education Detail</span></NavLink
                            >
                        </NavItem>
                        <NavItem>
                            <NavLink
                                on:click={(e) => {
                                    (activeTab1 = 4), e.preventDefault();
                                }}
                                active={activeTab1 == 4}
                                class="icon-btn d-flex align-items-center justify-content-md-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#finish"><span>Finish</span></NavLink
                            >
                        </NavItem>
                    </Nav>
                    <TabContent id="wizardWithValidation1">
                        <TabPane
                            class={`${activeTab1 == 1 ? "active" : ""}`}
                            id="contactDetail"
                        >
                            <form
                                id="contactForm"
                                class="needs-validation"
                                noValidate
                            >
                                <div class="mb-3">
                                    <Label for="fullName2">Full Name:</Label>
                                    <Input
                                        type="text"
                                        id="fullName2"
                                        name="fullName2"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="email2">Email:</Label>
                                    <Input
                                        type="email"
                                        id="email2"
                                        name="email2"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="phoneNumber2"
                                        >Phone Number:</Label
                                    >
                                    <Input
                                        type="tel"
                                        id="phoneNumber2"
                                        name="phoneNumber2"
                                        class="form-control"
                                        pattern="[0-9]{10}"
                                        placeholder="Enter 10-digit phone number"
                                    />
                                </div>
                            </form>
                        </TabPane>
                        <TabPane
                            class={` ${activeTab1 == 2 ? "active" : ""}`}
                            id="jobDetail"
                        >
                            <form
                                id="jobForm"
                                class="needs-validation"
                                noValidate
                            >
                                <div class="mb-3">
                                    <Label for="jobTitle">Job Title:</Label>
                                    <Input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="company">Company:</Label>
                                    <Input
                                        type="text"
                                        id="company"
                                        name="company"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="location">Location:</Label>
                                    <Input
                                        type="text"
                                        id="location"
                                        name="location"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="jobDescription"
                                        >Job Description:</Label
                                    >
                                    <textarea
                                        id="jobDescription"
                                        name="jobDescription"
                                        class="form-control"
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>
                            </form>
                        </TabPane>
                        <TabPane
                            class={`${activeTab1 == 3 ? "active" : ""}`}
                            id="educationDetail"
                        >
                            <form
                                id="educationForm"
                                class="needs-validation"
                                noValidate
                            >
                                <div class="mb-3">
                                    <Label for="degree">Degree:</Label>
                                    <Input
                                        type="text"
                                        id="degree"
                                        name="degree"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="institution">Institution:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="institution"
                                        name="institution"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="graduationYear"
                                        >Graduation Year:</Label
                                    >
                                    <Input
                                        type="number"
                                        id="graduationYear"
                                        name="graduationYear"
                                        class="form-control"
                                        min="1900"
                                        max="2100"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="fieldOfStudy"
                                        >Field of Study:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="fieldOfStudy"
                                        name="fieldOfStudy"
                                        class="form-control"
                                        required
                                    />
                                </div>
                            </form>
                        </TabPane>
                        <TabPane
                            class={`${activeTab1 == 4 ? "active" : ""}`}
                            id="finish"
                        >
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-10">
                                    <div class="text-center p-4">
                                        <span
                                            class="avatar avatar-xl avatar-rounded bg-success-transparent svg-success"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256"
                                                ><rect
                                                    width="256"
                                                    height="256"
                                                    fill="none"
                                                /><circle
                                                    cx="128"
                                                    cy="128"
                                                    r="96"
                                                    opacity="0.2"
                                                /><polyline
                                                    points="88 136 112 160 168 104"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="16"
                                                /><circle
                                                    cx="128"
                                                    cy="128"
                                                    r="96"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="16"
                                                /></svg
                                            >
                                        </span>
                                        <h3 class="mt-2">
                                            Successful <span
                                                class="fs-14 align-middle"
                                                >&#127881;</span
                                            >
                                        </h3>
                                        <p>
                                            Nulla facilisi. Praesent euismod, ex
                                            in viverra ullamcorper, augue justo
                                            convallis urna, a sollicitudin quam
                                            libero et magna. Sed ac metus.
                                        </p>
                                        <div class="mb-0">
                                            <div
                                                class="form-check d-inline-block"
                                            >
                                                <input
                                                    class="form-check-input"
                                                    id="customCheck1"
                                                    required
                                                    type="checkbox"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="customCheck1"
                                                    >I agree with the <a
                                                        class="fw-medium text-decoration-underline"
                                                        href={`${basePath}/pages/terms-conditions/`}
                                                        >Terms and Conditions.</a
                                                    ></label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <div
                            class="d-flex wizard justify-content-between mt-3 flex-wrap gap-2"
                        >
                            <div class="first">
                                <a
                                    href="#!"
                                    class="btn btn-light"
                                    onclick={gotoFirst}
                                >
                                    First
                                </a>
                            </div>
                            <div class="d-flex flex-wrap gap-2">
                                <div class="previous me-2">
                                    <a
                                        href="#!"
                                        class={`btn icon-btn btn-primary ${activeTab1 === 1 ? "disabled" : ""}`}
                                        onclick={handlePrevious}
                                    >
                                        <i class="bx bx-left-arrow-alt me-2"
                                        ></i>Back To Previous
                                    </a>
                                </div>
                                <div class="next">
                                    <a
                                        href="#!"
                                        class="btn icon-btn btn-secondary"
                                        onclick={handleNext}
                                    >
                                        Next Step<i
                                            class="bx bx-right-arrow-alt ms-2"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                            <div class="last">
                                <a
                                    href="#!"
                                    class="btn btn-success"
                                    onclick={gotoFourth}
                                >
                                    Finish
                                </a>
                            </div>
                        </div>
                    </TabContent>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">WIZARD WITH PROGRESS</div>
            </CardHeader>
            <CardBody>
                <div id="progresswizard">
                    <Nav
                        class="nav nav-tabs nav-justified flex-sm-row flex-column mb-4 tab-style-8 scaleX p-0"
                    >
                        <NavItem data-target-form="#progress-contactDetailForm">
                            <NavLink
                                on:click={(e) => {
                                    (activeTab2 = 1), e.preventDefault();
                                }}
                                active={activeTab2 == 1}
                                class="icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#progress-contactDetail"
                                ><span>Contact Detail</span></NavLink
                            >
                        </NavItem>
                        <NavItem data-target-form="#progress-jobDetailForm">
                            <NavLink
                                on:click={(e) => {
                                    (activeTab2 = 2), e.preventDefault();
                                }}
                                active={activeTab2 == 2}
                                class="icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#progress-jobDetail"
                                ><span>Job Detail</span></NavLink
                            >
                        </NavItem>
                        <NavItem
                            data-target-form="#progress-educationDetailForm"
                        >
                            <NavLink
                                on:click={(e) => {
                                    (activeTab2 = 3), e.preventDefault();
                                }}
                                active={activeTab2 == 3}
                                class="icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#progress-educationDetail"
                                ><span>Education Detail</span></NavLink
                            >
                        </NavItem>
                        <NavItem>
                            <NavLink
                                on:click={(e) => {
                                    (activeTab2 = 4), e.preventDefault();
                                }}
                                active={activeTab2 == 4}
                                class="icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                                data-bs-toggle="tab"
                                data-toggle="tab"
                                href="#progress-finish"
                                ><span>Finish</span></NavLink
                            >
                        </NavItem>
                    </Nav>
                    <div id="bar" class="progress mb-3" style="height: 7px;">
                        <div
                            class="bar progress-bar progress-bar-striped progress-bar-animated bg-success"
                           style="width: {progressWidth};"
                        ></div>
                    </div>
                    <TabContent class="" id="wizardWithValidation">
                        <TabPane
                            class={`${activeTab2 == 1 ? "active" : ""}`}
                            id="progress-contactDetail"
                        >
                            <Form
                                id="contactForm2"
                                class="needs-validation"
                                novalidate
                            >
                                <div class="mb-3">
                                    <Label for="fullName" class="form-label"
                                        >Full Name:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="email" class="form-label"
                                        >Email:</Label
                                    >
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="phoneNumber" class="form-label"
                                        >Phone Number:</Label
                                    >
                                    <Input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        class="form-control"
                                        pattern="[0-9]{10}"
                                        placeholder="Enter 10-digit phone number"
                                    />
                                </div>
                            </Form>
                        </TabPane>
                        <TabPane
                            class={`${activeTab2 === 2 ? "active" : ""}`}
                            id="progress-jobDetail"
                        >
                            <Form
                                id="jobForm2"
                                class="needs-validation"
                                novalidate
                            >
                                <div class="mb-3">
                                    <Label for="jobTitle2" class="form-label"
                                        >Job Title:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="jobTitle2"
                                        name="jobTitle2"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="company2" class="form-label"
                                        >Company:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="company2"
                                        name="company2"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="location2" class="form-label"
                                        >Location:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="location2"
                                        name="location2"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label
                                        for="jobDescription2"
                                        class="form-label"
                                        >Job Description:</Label
                                    >
                                    <Input
                                        type="textarea"
                                        id="jobDescription2"
                                        name="jobDescription2"
                                        class="form-control"
                                        rows={4}
                                        required
                                    ></Input>
                                </div>
                            </Form>
                        </TabPane>
                        <TabPane
                            class={`${activeTab2 === 3 ? "active" : ""}`}
                            id="progress-educationDetail"
                        >
                            <form
                                id="educationForm2"
                                class="needs-validation"
                                noValidate
                            >
                                <div class="mb-3">
                                    <Label for="degree2" class="form-label"
                                        >Degree:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="degree2"
                                        name="degree2"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label for="institution2" class="form-label"
                                        >Institution:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="institution2"
                                        name="institution2"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label
                                        for="graduationYear2"
                                        class="form-label"
                                        >Graduation Year:</Label
                                    >
                                    <Input
                                        type="number"
                                        id="graduationYear2"
                                        name="graduationYear2"
                                        class="form-control"
                                        min="1900"
                                        max="2100"
                                        required
                                    />
                                </div>

                                <div class="mb-3">
                                    <Label
                                        for="fieldOfStudy2"
                                        class="form-label"
                                        >Field of Study:</Label
                                    >
                                    <Input
                                        type="text"
                                        id="fieldOfStudy2"
                                        name="fieldOfStudy2"
                                        class="form-control"
                                        required
                                    />
                                </div>
                            </form>
                        </TabPane>
                        <TabPane
                            class={`${activeTab2 === 4 ? "active" : ""}`}
                            id="progress-finish"
                        >
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-10">
                                    <div class="text-center p-4">
                                        <span
                                            class="avatar avatar-xl avatar-rounded bg-success-transparent svg-success"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256"
                                                ><rect
                                                    width="256"
                                                    height="256"
                                                    fill="none"
                                                /><circle
                                                    cx="128"
                                                    cy="128"
                                                    r="96"
                                                    opacity="0.2"
                                                /><polyline
                                                    points="88 136 112 160 168 104"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="16"
                                                /><circle
                                                    cx="128"
                                                    cy="128"
                                                    r="96"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="16"
                                                /></svg
                                            >
                                        </span>
                                        <h3 class="mt-2">
                                            Successful <span
                                                class="fs-14 align-middle"
                                                >&#127881;</span
                                            >
                                        </h3>
                                        <p>
                                            Nulla facilisi. Praesent euismod, ex
                                            in viverra ullamcorper, augue justo
                                            convallis urna, a sollicitudin quam
                                            libero et magna. Sed ac metus.
                                        </p>
                                        <div class="mb-0">
                                            <div
                                                class="form-check d-inline-block"
                                            >
                                                <input
                                                    class="form-check-input"
                                                    id="customCheck2"
                                                    required
                                                    type="checkbox"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="customCheck2"
                                                    >I agree with the <Link
                                                        class="fw-medium text-decoration-underline"
                                                        href={`${basePath}/pages/terms-conditions/`}
                                                        >Terms and Conditions.</Link
                                                    ></label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <div
                            class="d-flex wizard justify-content-between mt-3 flex-wrap gap-2"
                        >
                            <div class="first">
                                <a
                                    href="#!"
                                    class="btn btn-light"
                                    onclick={gotoFirst1}
                                >
                                    First
                                </a>
                            </div>
                            <div class="d-flex flex-wrap gap-2">
                                <div class="previous me-2">
                                    <a
                                        href="#!"
                                        class={`btn icon-btn btn-primary ${activeTab2 === 1 ? "disabled" : ""}`}
                                        onclick={handlePrevious1}
                                    >
                                        <i class="bx bx-left-arrow-alt me-2"
                                        ></i>Back To Previous
                                    </a>
                                </div>
                                <div class="next">
                                    <a
                                        href="#!"
                                        class="btn icon-btn btn-secondary"
                                        onclick={handleNext1}
                                    >
                                        Next Step<i
                                            class="bx bx-right-arrow-alt ms-2"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                            <div class="last">
                                <a
                                    href="#!"
                                    class="btn btn-success"
                                    onclick={gotoFourth1}
                                >
                                    Finish
                                </a>
                            </div>
                        </div>
                    </TabContent>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->
