<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        button1,
        databutton1,
        button2,
        button3,
        databutton3,
        button4,
        button5,
        databutton5,
        button6,
        button7,
        databutton7,
        button8,
        button9,
        button10,
        button11,
        button12,
        databutton12,
        button13,
        databutton13,
        button14,
        databutton14,
        button15,
        button16,
        databutton16,
        button17,
        button18,
        button19,
        button20,
        databutton20,
        button21,
        button22,
        button23,
        button24,
        button25,
    } from "@/shared/data/prism-code/uielementsprim";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import {
        ColoredButtons,
        DefaultButtons,
        GhostButtons,
        GradientButtons,
        iconbuttons,
        LightButtons,
        LoadingbButtons,
        OutlineButtons,
        outlineiconbuttons,
        roundediconbuttons,
        SocialIconButtons,
    } from "@/shared/data/uielements/buttonsdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Buttons | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Buttons" activepage="UI Elements" page="Buttons" />
<!--ROW-START-->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Default Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button1}
            dataCode={databutton1}
        >
            <div class="btn-list">
                {#each DefaultButtons as button (button.id)}
                    <SpkButton
                        text={button.text}
                        buttontype="button"
                        customClass="btn-wave waves-effect waves-light me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Rounded Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button2}
            dataCode={databutton1}
        >
            <div class="btn-list">
                {#each DefaultButtons as button (button.id)}
                    <SpkButton
                        text={button.text}
                        buttontype="button"
                        customClass="rounded-pill btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Light Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button3}
            dataCode={databutton3}
        >
            <div class="btn-list">
                {#each LightButtons as button (button.id)}
                    <SpkButton
                        text={button.text}
                        buttontype="button"
                        customClass="btn btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Light Rounded Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button4}
            dataCode={databutton3}
        >
            <div class="btn-list">
                {#each LightButtons as button (button.id)}
                    <SpkButton
                        text={button.text}
                        buttontype="button"
                        customClass="rounded-pill btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Outline Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button5}
            dataCode={databutton5}
        >
            <div class="btn-list">
                {#each OutlineButtons as button (button.id)}
                    <SpkButton
                        outline={true}
                        text={button.text}
                        buttontype="button"
                        customClass="btn  btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Rounded Outline Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button6}
            dataCode={databutton5}
        >
            <div class="btn-list">
                {#each OutlineButtons as button (button.id)}
                    <SpkButton
                        outline={true}
                        text={button.text}
                        buttontype="button"
                        customClass="rounded-pill btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Gradient Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button7}
            dataCode={databutton7}
        >
            <div class="btn-list">
                {#each GradientButtons as button (button.id)}
                    <SpkButton
                        text={button.text}
                        buttontype="button"
                        customClass=" btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Rounded Gradient Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button8}
            dataCode={databutton7}
        >
            <div class="btn-list">
                {#each GradientButtons as button (button.id)}
                    <SpkButton
                        text={button.text}
                        buttontype="button"
                        customClass="rounded-pill btn-wave me-2"
                        color={button.class}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Ghost Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button14}
            dataCode={databutton14}
        >
            <div class="btn-list">
                {#each GhostButtons as button}
                    <SpkButton
                        buttontype="button"
                        color={button.class}
                        text={button.text}
                        customClass=" btn-wave me-2"
                    ></SpkButton>
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Button tags"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button15}
        >
            <div class="btn-list">
                <SpkButton
                    buttontype="button"
                    color="primary"
                    customClass="  btn-wave"
                    href="#!"
                    text="Link"
                />
                <SpkButton
                    buttontype="submit"
                    color="secondary"
                    customClass="  btn-wave"
                    text="Button"
                />
                <SpkButton
                    as="input"
                    buttontype="button"
                    customClass="btn btn-info"
                    value="Input "
                />
                <SpkButton
                    as="input"
                    customClass="btn btn-warning"
                    buttontype="submit"
                    value="Submit"
                />
                <SpkButton
                    as="input"
                    customClass="btn btn-success "
                    buttontype="reset"
                    value="Reset"
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="disabled state with anchor tags"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button9}
        >
            <div class="btn-list">
                <div class="mb-4">
                    <SpkButton
                        buttontype="button"
                        color="primary"
                        customClass=""
                        disabled={true}
                        text="Primary button"
                    />
                    <SpkButton
                        buttontype="button"
                        color="secondary"
                        customClass=""
                        disabled={true}
                        text="Button"
                    />
                    <SpkButton
                        buttontype="button"
                        color="primary"
                        outline={true}
                        customClass=""
                        disabled={true}
                        text="Primary button"
                    />
                    <SpkButton
                        buttontype="button"
                        color="secondary"
                        outline={true}
                        customClass=""
                        disabled={true}
                        text="Button"
                    />
                </div>
                <div>
                    <SpkButton
                        href="#!"
                        color="primary"
                        customClass="disabled"
                        disabled={true}
                        text="Primary Link"
                    />
                    <SpkButton
                        href="#!"
                        color="secondary"
                        customClass="disabled"
                        disabled={true}
                        text="Link"
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="button plugin toggle states"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button10}
        >
            <div class="btn-list">
                <div class="mb-4">
                    <SpkButton
                        buttontype="button"
                        color="primary"
                        customClass="btn-wave"
                        text="Toggle button"
                    />
                    <SpkButton
                        buttontype="button"
                        color="secondary"
                        customClass="btn-wave"
                        active={true}
                        text="Active toggle button"
                    />
                    <SpkButton
                        buttontype="button"
                        color="teal"
                        customClass="btn-wave"
                        disabled={true}
                        text="Disabled toggle button"
                    />
                </div>
                <div>
                    <SpkButton
                        buttontype="button"
                        href="#!"
                        color="primary"
                        customClass="btn-wave"
                        text="Toggle link"
                    />
                    <SpkButton
                        buttontype="button"
                        href="#!"
                        color="secondary"
                        customClass="btn-wave"
                        active={true}
                        text="Active toggle link"
                    />
                    <SpkButton
                        buttontype="button"
                        href="#!"
                        color="teal"
                        customClass="btn-wave disabled"
                        disabled={true}
                        text="Disabled toggle link"
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Link functionally caveat "
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button11}
        >
            <div class="btn-list">
                <SpkButton
                    href="#!"
                    color="primary"
                    customClass="disabled"
                    disabled={true}
                    text="Primary Link"
                />
                <SpkButton
                    href="#!"
                    color="secondary"
                    customClass="disabled"
                    disabled={true}
                    text="Link"
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Loading Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button12}
            dataCode={databutton12}
        >
            <div class="btn-list d-md-flex flex-wrap">
                {#each LoadingbButtons as button}
                    <SpkButton
                        color={button.variant}
                        customClass="btn btn-loader"
                        disabled={button.disabled}
                    >
                        <span class="me-2">{button.text}</span>
                        {#if button.loading}
                            <span class="loading">
                                <i class={`fs-16 ${button.icon}`}></i>
                            </span>
                        {/if}
                    </SpkButton>
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Icon Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button13}
            dataCode={databutton13}
        >
            <div class="btn-list d-md-flex d-block">
                <div class="mb-md-0 mb-2">
                    {#each iconbuttons as button}
                        <SpkButton
                            color={button.variant}
                            customClass={`btn-icon btn-wave waves-effect waves-light ${button.class || ""}`}
                        >
                            <i class={`fs-15 ${button.icon}`}></i>
                        </SpkButton>
                    {/each}
                </div>

                <div class="mb-md-0 mb-2">
                    {#each roundediconbuttons as button}
                        <SpkButton
                            color={button.variant}
                            customClass={`btn-icon rounded-pill btn-wave waves-effect waves-light ${button.class || ""}`}
                        >
                            <i class={`fs-15 ${button.icon}`}></i>
                        </SpkButton>
                    {/each}
                </div>
                <div class="">
                    {#each outlineiconbuttons as button}
                        <SpkButton
                            outline={true}
                            color={button.variant}
                            customClass={`btn-icon  rounded-pill btn-wave waves-effect waves-light `}
                        >
                            <i class={`fs-15 ${button.icon}`}></i>
                        </SpkButton>
                    {/each}
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Icon Button Sizes"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button25}
        >
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <div class="btn-list d-md-flex d-block gap-5">
                <div class="mb-md-0 mb-2">
                    <button class="btn btn-sm btn-icon btn-primary btn-wave">
                        <i class="ri-bank-fill"></i>
                    </button>
                    <button class="btn btn-icon btn-info btn-wave">
                        <i class="ri-medal-line"></i>
                    </button>
                    <button class="btn btn-lg btn-icon btn-danger btn-wave">
                        <i class="ri-archive-line"></i>
                    </button>
                </div>
                <div class="mb-md-0 mb-2">
                    <button
                        class="btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave"
                    >
                        <i class="ri-home-smile-line"></i>
                    </button>
                    <button
                        class="btn btn-icon btn-secondary-light rounded-pill btn-wave"
                    >
                        <i class="ri-delete-bin-line"></i>
                    </button>
                    <button
                        class="btn btn-lg btn-icon btn-success-light rounded-pill btn-wave"
                    >
                        <i class="ri-notification-3-line"></i>
                    </button>
                </div>
                <div class="">
                    <button
                        class="btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave"
                    >
                        <i class="ri-phone-line"></i>
                    </button>
                    <button
                        class="btn btn-icon btn-outline-teal rounded-pill btn-wave"
                    >
                        <i class="ri-customer-service-2-line"></i>
                    </button>
                    <button
                        class="btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave"
                    >
                        <i class="ri-live-line"></i>
                    </button>
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Social Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button16}
            dataCode={databutton16}
        >
            <div class="btn-list">
                {#each SocialIconButtons as button}
                    <SpkButton
                        color={button.class1}
                        customClass=" btn-icon  btn-wave waves-effect waves-light"
                    >
                        <i class={`fs-16 ri-${button.class}-line`}></i>
                    </SpkButton>
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <ShowCode
                    title="Sizes"
                    customCardClass=""
                    customCardBodyClass=""
                    svelteCode={button17}
                >
                    <div class="btn-list">
                        <SpkButton
                            buttontype="button"
                            color="primary"
                            size="sm"
                            customClass="  btn-wave"
                            text="Small button"
                        />
                        <SpkButton
                            buttontype="button"
                            color="secondary"
                            customClass=" btn-wave"
                            text="Default button"
                        />
                        <SpkButton
                            buttontype="button"
                            color="success"
                            size="lg"
                            customClass=" btn-wave"
                            text="Large button"
                        />
                    </div>
                </ShowCode>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <ShowCode
                    title="Button Widths"
                    customCardClass=""
                    customCardBodyClass=""
                    svelteCode={button18}
                >
                    <div class="btn-list">
                        <SpkButton
                            buttontype="button"
                            color="primary"
                            size="w-xs"
                            customClass="  btn-wave"
                            text="XS"
                        />
                        <SpkButton
                            buttontype="button"
                            color="secondary"
                            size="w-sm"
                            customClass="  btn-wave"
                            text="SM"
                        />
                        <SpkButton
                            buttontype="button"
                            color="warning"
                            size="w-md"
                            customClass="  btn-wave"
                            text="MD"
                        />
                        <SpkButton
                            buttontype="button"
                            color="info"
                            size="w-lg"
                            customClass="  btn-wave"
                            text="LG"
                        />
                    </div>
                </ShowCode>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Buttons With Different Shadows"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button19}
        >
            <div class="btn-list d-flex">
                <div class="me-5">
                    <SpkButton
                        color="primary"
                        customClass="  shadow-sm btn-wave"
                        text="Button"
                    />
                    <SpkButton
                        color="primary"
                        customClass=" shadow btn-wave"
                        text="Button"
                    />
                    <SpkButton
                        color="primary"
                        customClass=" shadow-lg btn-wave"
                        text="Button"
                    />
                </div>
                <div>
                    <SpkButton
                        color="secondary"
                        size="sm"
                        customClass="   shadow-sm btn-wave"
                        text="Button"
                    />
                    <SpkButton
                        color="info"
                        customClass="  shadow btn-wave"
                        text="Button"
                    />
                    <SpkButton
                        color="success"
                        size="lg"
                        customClass="   shadow-lg btn-wave"
                        text="Button"
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Different Colored Buttons With Shadows"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button20}
            dataCode={databutton20}
        >
            <div class="btn-list">
                {#each ColoredButtons as button (button.id)}
                    <SpkButton
                        color={button.class}
                        customClass={` shadow-${button.class} btn-wave`}
                        text="Button"
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Raised Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button21}
            dataCode={databutton20}
        >
            <div class="btn-list">
                {#each ColoredButtons as button (button.id)}
                    <SpkButton
                        color={button.class}
                        customClass="btn-raised-shadow btn-wave"
                        text="Button"
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Label Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button22}
        >
            <div class="btn-list">
                <SpkButton
                    color="primary"
                    customClass="label-btn"
                    text="Primary"
                >
                    <i class="ri-chat-smile-line label-btn-icon me-2"></i>
                </SpkButton>
                <SpkButton
                    color="secondary"
                    customClass="label-btn"
                    text="Secondary"
                >
                    <i class="ri-settings-4-line label-btn-icon me-2"></i>
                </SpkButton>
                <SpkButton
                    color="warning"
                    customClass="label-btn rounded-pill"
                    text="Warning"
                >
                    <i class="ri-spam-2-line label-btn-icon me-2 rounded-pill"
                    ></i>
                </SpkButton>
                <SpkButton
                    color="info"
                    customClass="label-btn rounded-pill"
                    text="Info"
                >
                    <i class="ri-phone-line label-btn-icon me-2 rounded-pill"
                    ></i>
                </SpkButton>
                <SpkButton
                    color="success"
                    customClass="label-btn label-end"
                    text="Success"
                >
                    <i class="ri-thumb-up-line label-btn-icon ms-2"></i>
                </SpkButton>
                <SpkButton
                    color="danger"
                    customClass="label-btn label-end rounded-pill"
                    text="Cancel"
                >
                    <i class="ri-close-line label-btn-icon ms-2 rounded-pill"
                    ></i>
                </SpkButton>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Custom Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button23}
        >
            <div class="btn-list">
                <SpkButton
                    color="info"
                    customClass=" custom-button rounded-pill"
                    text=" Twitter"
                >
                    <span class="custom-btn-icons"
                        ><i class="ri-twitter-x-line text-info"></i></span
                    >
                </SpkButton>
                <SpkButton
                    color="teal-light"
                    customClass=" btn-border-down"
                    text="Border"
                />
                <SpkButton
                    color="secondary-light"
                    customClass=" btn-border-start"
                    text="Border"
                />
                <SpkButton
                    color="purple-light"
                    customClass=" btn-border-end"
                    text="Border"
                />
                <SpkButton
                    color="warning-light"
                    customClass=" btn-border-top"
                    text="Border"
                />
                <SpkButton
                    color="secondary"
                    customClass=" btn-glare"
                    text="Glare Button"
                />
                <SpkButton
                    color="danger"
                    customClass=" btn-hover btn-hover-animate"
                    text="Like"
                />
                <SpkButton
                    color="success"
                    customClass=" btn-darken-hover"
                    text="Hover"
                />
                <SpkButton
                    color="orange"
                    customClass=" btn-custom-border"
                    text="Hover"
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Block buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={button24}
        >
            <div class="btn-list">
                <div class="d-grid gap-2 mb-4">
                    <SpkButton
                        color="primary"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                    <SpkButton
                        color="secondary"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                </div>
                <div class="d-grid gap-2 d-md-block">
                    <SpkButton
                        color="info"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                    <SpkButton
                        color="success"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <SpkButton
                        color="danger"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                    <SpkButton
                        color="warning"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <SpkButton
                        color="teal"
                        customClass="me-md-2 btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                    <SpkButton
                        color="purple"
                        customClass="btn-wave"
                        buttontype="button"
                        text="Button"
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!--ROW-END-->
