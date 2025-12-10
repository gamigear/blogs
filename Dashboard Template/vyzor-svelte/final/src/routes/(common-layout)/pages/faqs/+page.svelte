<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Accordion,
        AccordionHeader,
        AccordionItem,
        Col,
        Nav,
        NavItem,
        NavLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    let activeTab = 2;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Faqs | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Faq's" activepage="Pages" page="Faq's" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card faq-banner-card">
            <div class="card-body text-center">
                <div class="faq-banner-background">
                    <img src="../images/media/media-65.png" alt="" />
                </div>
                <h3 class="fw-semibold text-primary">
                    Frequently Asked Questions
                </h3>
                <span class="d-block text-muted mb-4"
                    >Find quick answers to common queries about using the admin
                    panel.</span
                >
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <input
                            type="text"
                            class="form-control form-control-lg border-0 shadow-none"
                            id="input-text"
                            placeholder="Search Faq's"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <div class="col-xl-3">
        <div class="card custom-card">
            <div class="card-body">
                <Nav
                    class="nav nav-tabs flex-column nav-tabs-header faq-nav mb-0 d-sm-flex d-inline-block"
                    role="tablist"
                >
                    <NavItem class="nav-item m-1" role="presentation">
                        <NavLink
                            class="nav-link"
                            on:click={(e) => {
                                (activeTab = 1), e.preventDefault();
                            }}
                            active={activeTab == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#faq1"
                            aria-selected="false"
                            tabindex={-1}
                            ><i class="ri-question-line me-2 fs-16"
                            ></i>General</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1" role="presentation">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 2), e.preventDefault();
                            }}
                            active={activeTab == 2}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#faq2"
                            aria-selected="true"
                            ><i class="ri-user-line me-2 fs-16"></i>Account &
                            Login</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1" role="presentation">
                        <NavLink
                            class="nav-link"
                            on:click={(e) => {
                                (activeTab = 3), e.preventDefault();
                            }}
                            active={activeTab == 3}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#faq3"
                            aria-selected="false"
                            tabindex={-1}
                            ><i class="ri-wallet-line me-2 fs-16"></i>Payments &
                            Billing</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1" role="presentation">
                        <NavLink
                            class="nav-link"
                            on:click={(e) => {
                                (activeTab = 4), e.preventDefault();
                            }}
                            active={activeTab == 4}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#faq4"
                            aria-selected="false"
                            tabindex={-1}
                            ><i class="ri-global-line me-2 fs-16"></i>Website
                            Usage & Features</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1" role="presentation">
                        <NavLink
                            class="nav-link"
                            on:click={(e) => {
                                (activeTab = 5), e.preventDefault();
                            }}
                            active={activeTab == 5}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#faq5"
                            aria-selected="false"
                            tabindex={-1}
                            ><i class="ri-customer-service-2-line me-2 fs-16"
                            ></i>Technical Support</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item m-1" role="presentation">
                        <NavLink
                            class="nav-link"
                            on:click={(e) => {
                                (activeTab = 6), e.preventDefault();
                            }}
                            active={activeTab == 6}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#faq6"
                            aria-selected="false"
                            tabindex={-1}
                            ><i class="ri-lock-line me-2 fs-16"></i>Privacy &
                            Security</NavLink
                        >
                    </NavItem>
                </Nav>
            </div>
        </div>
    </div>
    <div class="col-xl-9 my-auto">
        <div class="row mb-4">
            <Col xl={12}>
                <TabContent id="faqsTab">
                    <TabPane
                        class={`border-0 p-0 ${activeTab == 1 ? "active" : ""}`}
                        id="faq1"
                        role="tabpanel"
                    >
                        <Accordion
                            class="faq-accordion accordions-items-seperate"
                            id="accordionFAQ1"
                        >
                            <AccordionItem active>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2One"
                                >
                                    <i
                                        class="ri-information-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>What is this website about?
                                </h6>
                                This website provides information, services, and
                                tools related to [your niche].
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Two"
                                >
                                    <i
                                        class="ri-user-add-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I create an account?
                                </h6>
                                Click on the "Sign Up" button, fill in your details,
                                and verify your email.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Three"
                                >
                                    <i
                                        class="ri-money-dollar-circle-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Is this website free to use?
                                </h6>
                                Some features are free, while premium features may
                                require a subscription.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Four"
                                >
                                    <i
                                        class="ri-headphone-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How can I contact support?
                                </h6>
                                You can reach our support team via the "Contact Us"
                                page or email us at [support email].
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Five"
                                >
                                    <i
                                        class="ri-shield-check-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Is my personal data safe on this
                                    website?
                                </h6>
                                Yes, we use encryption and follow strict security
                                measures to protect your data.
                            </AccordionItem>
                        </Accordion>
                    </TabPane>
                    <TabPane
                        class={`${activeTab == 2 ? "active" : ""} border-0 p-0`}
                        id="faq2"
                        role="tabpanel"
                    >
                        <Accordion
                            class="faq-accordion accordions-items-seperate"
                            id="accordionFAQ2"
                        >
                            <AccordionItem active>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Six"
                                >
                                    <i
                                        class="ri-lock-password-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I reset my password?
                                </h6>
                                Click on "Forgot Password" on the login page and
                                follow the instructions.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Seven"
                                >
                                    <i
                                        class="ri-mail-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Can I change my registered email?
                                </h6>
                                Yes, go to account settings and update your email
                                address.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Eight"
                                >
                                    <i
                                        class="ri-mail-send-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Why am I not receiving the verification
                                    email?
                                </h6>
                                Check your spam folder or try resending the email
                                from the login page.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Nine"
                                >
                                    <i
                                        class="ri-delete-bin-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Can I delete my account permanently?
                                </h6>
                                Yes, you can request account deletion from your account
                                settings.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Ten"
                                >
                                    <i
                                        class="ri-user-settings-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I update my profile information?
                                </h6>
                                Go to your profile page and edit your details as
                                needed.
                            </AccordionItem>
                        </Accordion>
                    </TabPane>
                    <TabPane
                        class={`border-0 p-0 ${activeTab == 3 ? "active" : ""}`}
                        id="faq3"
                        role="tabpanel"
                    >
                        <Accordion
                            class="accordion faq-accordion accordions-items-seperate"
                            id="accordionFAQ3"
                        >
                            <AccordionItem active>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Eleven"
                                >
                                    <i
                                        class="ri-bank-card-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>What payment methods do you accept?
                                </h6>
                                We accept credit/debit cards, PayPal, and other online
                                payment gateways.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Twelve"
                                >
                                    <i
                                        class="ri-file-text-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How can I get an invoice for my
                                    purchase?
                                </h6>
                                You can download invoices from the "Billing" section
                                in your account.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Thirteen"
                                >
                                    <i
                                        class="ri-refund-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Do you offer refunds?
                                </h6>
                                Refunds are subject to our refund policy. Please
                                check our terms and conditions.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Fourteen"
                                >
                                    <i
                                        class="ri-shield-check-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Is my payment information secure?
                                </h6>
                                Yes, all transactions are processed securely using
                                encrypted payment gateways.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Fifteen"
                                >
                                    <i
                                        class="ri-close-circle-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Can I cancel my subscription anytime?
                                </h6>
                                Yes, you can cancel your subscription from your account
                                settings.
                            </AccordionItem>
                        </Accordion>
                    </TabPane>
                    <TabPane
                        class={`border-0 p-0 ${activeTab == 4 ? "active" : ""}`}
                        id="faq4"
                        role="tabpanel"
                    >
                        <Accordion
                            class="accordion faq-accordion accordions-items-seperate"
                            id="accordionFAQ4"
                        >
                            <AccordionItem active>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Sixteen"
                                >
                                    <i
                                        class="ri-search-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I search for specific content on
                                    the website?
                                </h6>
                                Use the search bar at the top of the page to find
                                what you need.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Seventeen"
                                >
                                    <i
                                        class="ri-bookmark-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Can I save my favorite content for
                                    later?
                                </h6>
                                Yes, you can bookmark or save items to your profile
                                for easy access.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Eighteen"
                                >
                                    <i
                                        class="ri-bug-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I report a bug or issue?
                                </h6>
                                You can report bugs via the "Report Issue" form in
                                the help section.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Nineteen"
                                >
                                    <i
                                        class="ri-smartphone-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Does the website support mobile
                                    devices?
                                </h6>
                                Yes, the website is fully responsive and works on
                                all devices.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Twenty"
                                >
                                    <i
                                        class="ri-share-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Can I share website content on social
                                    media?
                                </h6>
                                Yes, use the share buttons to post content on your
                                preferred platform.
                            </AccordionItem>
                        </Accordion>
                    </TabPane>
                    <TabPane
                        class={`border-0 p-0 ${activeTab == 5 ? "active" : ""}`}
                        id="faq5"
                        role="tabpanel"
                    >
                        <Accordion
                            class="accordion faq-accordion accordions-items-seperate"
                            id="accordionFAQ5"
                        >
                            <AccordionItem active>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyOne"
                                >
                                    <i
                                        class="ri-time-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Why is the website not loading
                                    properly?
                                </h6>
                                Try clearing your browser cache or switching to a
                                different browser.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyTwo"
                                >
                                    <i
                                        class="ri-wifi-off-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>What should I do if I experience slow
                                    loading times?
                                </h6>
                                Check your internet connection and try reloading
                                the page.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyThree"
                                >
                                    <i
                                        class="ri-notification-2-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I enable notifications on this
                                    website?
                                </h6>
                                Allow notifications when prompted by your browser
                                or enable them in settings.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyFour"
                                >
                                    <i
                                        class="ri-apps-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Is there a mobile app for this website?
                                </h6>
                                If available, you can download it from the App Store
                                or Google Play.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyFive"
                                >
                                    <i
                                        class="ri-flag-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How can I report inappropriate content?
                                </h6>
                                Click the "Report" button next to the content or
                                contact support.
                            </AccordionItem>
                        </Accordion>
                    </TabPane>
                    <TabPane
                        class={`border-0 p-0 ${activeTab == 6 ? "active" : ""}`}
                        id="faq6"
                        role="tabpanel"
                    >
                        <Accordion
                            class="accordion faq-accordion accordions-items-seperate"
                            id="accordionFAQ6"
                        >
                            <AccordionItem active>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentySix"
                                >
                                    <i
                                        class="ri-shield-keyhole-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do you protect my personal data?
                                </h6>
                                We use encryption, secure servers, and strict access
                                controls to protect your data.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentySeven"
                                >
                                    <i
                                        class="ri-eye-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Can I control who sees my information?
                                </h6>
                                Yes, you can adjust privacy settings in your account
                                preferences.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyEight"
                                >
                                    <i
                                        class="ri-forbid-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>Do you sell my data to third parties?
                                </h6>
                                No, we do not sell or share your personal information
                                without your consent.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2TwentyNine"
                                >
                                    <i
                                        class="ri-alarm-warning-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>How do I report a security concern?
                                </h6>
                                Contact our security team via the "Report Security
                                Issue" option in the Help section.
                            </AccordionItem>
                            <AccordionItem>
                                <h6
                                    slot="header"
                                    class="accordion-header"
                                    id="headingcustomicon2Thirty"
                                >
                                    <i
                                        class="ri-lock-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"
                                    ></i>What should I do if I suspect
                                    unauthorized access to my account?
                                </h6>
                                Change your password immediately and enable two-factor
                                authentication (2FA).
                            </AccordionItem>
                        </Accordion>
                    </TabPane>
                </TabContent>
            </Col>
        </div>
    </div>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <div class="col-xl-3">
        <div class="card custom-card bg-primary-transparent border-0">
            <div class="card-body p-0">
                <img
                    src="../images/media/media-74.png"
                    alt=""
                    class="img-fluid"
                />
            </div>
        </div>
    </div>
    <div class="col-xl-9">
        <h5 class="fw-semibold">Still Have Questions? Post them here!</h5>
        <div class="card custom-card">
            <div class="card-body">
                <div class="row gy-2 mb-3">
                    <div class="col-xl-6">
                        <label for="user-name" class="form-label"
                            >Your Name</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="user-name"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div class="col-xl-6">
                        <label for="user-email" class="form-label"
                            >Email Id</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="user-email"
                            placeholder="Enter Email"
                        />
                    </div>
                    <Col xl={12}>
                        <label for="text-area" class="form-label"
                            >Post Your Question</label
                        >
                        <textarea
                            class="form-control"
                            placeholder="Enter your question here"
                            id="text-area"
                            rows="2"
                        ></textarea>
                    </Col>
                </div>
                <button type="button" class="btn btn-success float-end"
                    >Send<i class="ri-send-plane-2-line ms-2"></i></button
                >
            </div>
        </div>
    </div>
</Row>
<!-- End:: row-3 -->
