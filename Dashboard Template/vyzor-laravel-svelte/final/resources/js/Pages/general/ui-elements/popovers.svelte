<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        datapopovers1,
        datapopovers2,
        popovers1,
        popovers2,
        datapopovers3,
        popovers3,
        popovers4,
        popovers5,
        datapopovers5,
        popovers6,
        popovers7,
    } from "@/shared/data/prism-code/uielementsprim";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import SpkPopovers from "@/shared/@spk/uielements/popovers/SpkPopovers.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import {
        Colorheaderpopover,
        Colredpopover,
        Defaultpopover,
        Dismissiblepopover,
    } from "@/shared/data/uielements/popoversdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Popovers | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Popovers" activepage="UI Elements" page="Popovers" />
<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Default Popovers"
            customCardClass=""
            svelteCode={popovers1}
            dataCode={datapopovers1}
        >
            <div class="btn-list">
                {#each Defaultpopover as popover (popover.id)}
                    <SpkButton
                        color="primary"
                        customClass="btn-wave waves-effect waves-light"
                        outline={true}
                        id={`btn-${popover.id}`}
                        text={`Popover ${popover.text}`}
                    />
                    <SpkPopovers
                        trigger="click"
                        targetId={`btn-${popover.id}`}
                        placement={popover.class}
                        title={`Popover ${popover.text}`}
                        content={`And here's some amazing content. It's very engaging. Right?`}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Colored Headers"
            customCardClass=""
            svelteCode={popovers2}
            dataCode={datapopovers2}
        >
            <div class="btn-list">
                {#each Colorheaderpopover as popover (popover.id)}
                    <SpkButton
                        color={popover.color}
                        customClass="btn-wave "
                        outline={true}
                        id={`bt-${popover.id}`}
                        text={`Header ${popover.text}`}
                    />
                    <SpkPopovers
                        trigger="click"
                        targetId={`bt-${popover.id}`}
                        customClass={`header-${popover.color1}`}
                        placement={popover.class}
                        title="Color Header"
                        content={`Popover with ${popover.color} header.`}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Colored Popovers"
            svelteCode={popovers3}
            dataCode={datapopovers3}
        >
            <div class="btn-list">
                {#each Colredpopover as popover (popover.id)}
                    <SpkButton
                        color={popover.color1}
                        customClass="btn-wave waves-effect waves-light"
                        id={`btn1-${popover.id}`}
                        text={` ${popover.text}`}
                    />
                    <SpkPopovers
                        trigger="click"
                        targetId={`btn1-${popover.id}`}
                        customClass={`popover-${popover.color1}`}
                        placement={popover.class}
                        title="Color Background"
                        content={`Popover with ${popover.text} background.`}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Light Popovers"
            svelteCode={popovers4}
            dataCode={datapopovers3}
        >
            <div class="btn-list">
                {#each Colredpopover as popover (popover.id)}
                    <SpkButton
                        color=""
                        customClass={`btn btn-${popover.color1}-light btn-wave`}
                        id={`btn2-${popover.id}`}
                        text={` ${popover.text}`}
                    />
                    <SpkPopovers
                        trigger="click"
                        targetId={`btn2-${popover.id}`}
                        customClass={`popover-${popover.color1}-light`}
                        placement={popover.class}
                        title="Light Background"
                        content={`Popover with light ${popover.text} background.`}
                    />
                {/each}
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Dismissible Popovers"
            customCardBodyClass="d-flex flex-wrap justify-content-between"
            svelteCode={popovers5}
            dataCode={datapopovers5}
        >
            {#each Dismissiblepopover as popover (popover.id)}
                <SpkButton
                    color={popover.color}
                    customClass={`btn  btn-wave m-1`}
                    id={`btn3-${popover.id}`}
                    text={` ${popover.text}`}
                />
                <SpkPopovers
                    dismissible={true}
                    trigger="click"
                    targetId={`btn3-${popover.id}`}
                    customClass=""
                    placement={popover.class}
                    title="Dismissible Popover"
                    content="And here's some amazing content. It's very engaging. Right?"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Disabled Popover" svelteCode={popovers6}>
            <div style="display: inline-block;" id="btn-pop">
                <SpkButton color="primary" text="Disabled button" disabled />
                <SpkPopovers
                    dismissible
                    trigger="hover"
                    targetId="btn-pop"
                    placement="right"
                    content={`Disabled button`}
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <ShowCode title="Icon Popovers" svelteCode={popovers7}>
            <a class="me-4 svg-primary" id="btn-link" href="#!" on:click|preventDefault>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" /><path
                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                    /></svg
                >
            </a>
            <SpkPopovers
                trigger="click"
                targetId="btn-link"
                customClass="popover-primary"
                placement="top"
                content={`This popover is used to provide details about this icon.`}
            />
            <a class="me-4 svg-secondary" id="btn-link1" href="#!" on:click|preventDefault>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" /><path
                        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    /></svg
                >
            </a>
            <SpkPopovers
                trigger="click"
                targetId="btn-link1"
                customClass="popover-secondary custom-secondary"
                placement="left"
                content={`This popover is used to provide details about this icon.`}
            />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->
