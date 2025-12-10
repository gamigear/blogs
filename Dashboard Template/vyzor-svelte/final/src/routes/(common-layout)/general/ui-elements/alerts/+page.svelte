<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        alert1,
        alerts2,
        alerts3,
        dataalert3,
        alerts4,
        dataalert4,
        alerts5,
        dataalert5,
        alerts6,
        alerts11,
        dataalert11,
        dataalert6,
        alerts7,
        dataalert7,
        alerts8,
        dataalert8,
        alerts9,
        dataalert9,
        alerts10,
        dataalert16,
        dataalert10,
        alerts12,
        alerts13,
        dataalert13,
        alerts14,
        dataalert14,
        alerts15,
        dataalert15,
        alerts16,
        alerts17,
        dataalert17,
    } from "$lib/components/common/prism-code/uielementsprim";
    import { Button, Col, Row, Card } from "@sveltestrap/sveltestrap";
    import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
    import {
        alertsdefalut,
        avatarsizealert,
        customizedalert1,
        defaultsolidalerts,
        iconalerts,
        Imagealerts,
        linkalerts,
        outlinealerts,
        roundedefaultalerts,
        roundeoutlinealerts,
        roundesolidalerts,
        shadowsolidalerts,
        solidalerts,
        Svgalert,
        AdditionalContent,
    } from "$lib/data/uielements/alertsdata";
    import Livealert from "$lib/view/uielements/livealert.svelte";

    type AlertKey =
        | "isVisible"
        | "isVisible1"
        | "isVisible2"
        | "isVisible3"
        | "isVisible4"
        | "isVisible5"
        | "isVisible6"
        | "isVisible7"
        | "additional1"
        | "additional2"
        | "additional3"
        | "additional4";

    let alerts: Record<AlertKey, boolean> = {
        isVisible: true,
        isVisible1: true,
        isVisible2: true,
        isVisible3: true,
        isVisible4: true,
        isVisible5: true,
        isVisible6: true,
        isVisible7: true,
        additional1: true,
        additional2: true,
        additional3: true,
        additional4: true,
    };

    const closeAlert = (key: AlertKey) => {
        alerts[key] = false;
    };

     let Additional = [...AdditionalContent];

    const closeAlert8 = (id: number | string) => {
        Additional = Additional.map(alert =>
            alert.id === id ? { ...alert, isVisible: false } : alert
        );
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>Alerts | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Alerts" activepage="Ui Elements" page="Alerts" />
<!--ROW-START-->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Basic Alert"
            svelteCode={alert1}
            customCardHeaderClass="justify-content-between"
        >
            <SpkAlert
                dismissible
                color="warning"
                customClass={`alert-dismissible fade show `}
                text={`<strong>Holy guacamole!</strong> You should check in on some of those fields below.`}
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Live example"
            svelteCode={alerts2}
            customCardHeaderClass="justify-content-between"
        >
            <Livealert />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Outline Alerts"
            svelteCode={alerts6}
            dataCode={dataalert6}
        >
            {#each outlinealerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass={`alert-dismissible fade show`}
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Solid Alerts With Different Shadows"
            svelteCode={alerts7}
            dataCode={dataalert7}
        >
            {#each shadowsolidalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass={`alert shadow-${alert.size} alert-dismissible `}
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Default Alerts With Different Shadows"
            svelteCode={alerts8}
            dataCode={dataalert8}
        >
            {#each defaultsolidalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass={`alert shadow-${alert.size}`}
                    text={alert.text}
                    showCloseButton={false}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Default alerts"
            customCardHeaderClass="justify-content-between"
            svelteCode={alerts3}
            dataCode={dataalert3}
        >
            {#each alertsdefalut as alert (alert.id)}
                <SpkAlert
                    showCloseButton={false}
                    color={alert.class}
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Links in alerts"
            svelteCode={alerts4}
            dataCode={dataalert4}
        >
            {#each linkalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass=""
                    text={alert.text}
                    text2={alert.text2}
                    text3={alert.text3}
                    showCloseButton={false}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Solid Colored Alerts"
            svelteCode={alerts5}
            dataCode={dataalert5}
        >
            {#each solidalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    dismissible
                    customClass={`alert-dismissible fade show ${alert.color}`}
                    text={alert.text}
                    customBtnClass={alert.customBtnClass}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Rounded Solid Alerts "
            svelteCode={alerts9}
            dataCode={dataalert9}
        >
            {#each roundesolidalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass={`alert alert-solid-${alert.class} rounded-pill alert-dismissible fade show`}
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Rounded outline Alerts "
            svelteCode={alerts10}
            dataCode={dataalert10}
        >
            {#each roundeoutlinealerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass={`alert alert-outline-${alert.class} rounded-pill alert-dismissible fade show`}
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Rounded Default Alerts"
            svelteCode={alerts11}
            dataCode={dataalert11}
        >
            {#each roundedefaultalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass="alert rounded-pill alert-dismissible fade show"
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Rounded Alerts With Custom Close Button "
            svelteCode={alerts12}
            dataCode={dataalert11}
        >
            {#each roundedefaultalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customBtnClass="custom-close"
                    customClass="alert rounded-pill alert-dismissible fade show"
                    text={alert.text}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Customized Alerts With SVG's"
            svelteCode={alerts14}
            dataCode={dataalert14}
        >
            {#each customizedalert1 as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass="alert alert-dismissible fade show custom-alert-icon shadow-sm"
                    text={alert.text}
                    icon={alert.icon}
                    iconClass={`svg-${alert.class}`}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Alerts with icons"
            svelteCode={alerts13}
            dataCode={dataalert13}
        >
            {#each iconalerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass="alert d-flex align-items-center"
                    text={alert.text}
                    icon={alert.icon}
                    showCloseButton={false}
                    iconClass={`svg-${alert.class}`}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Alerts With Images"
            svelteCode={alerts15}
            dataCode={dataalert15}
        >
            {#each Imagealerts as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass="alert alert-img alert-dismissible fase show rounded-pill flex-wrap"
                    customImgClass="avatar avatar-sm me-3 avatar-rounded"
                    text={alert.text}
                    img={alert.src}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Alerts With Different size Images"
            svelteCode={alerts16}
            dataCode={dataalert16}
        >
            {#each avatarsizealert as alert (alert.id)}
                <SpkAlert
                    color={alert.class}
                    customClass="alert alert-img alert-dismissible fase show flex-wrap"
                    customImgClass={`avatar avatar-${alert.size} me-3`}
                    text={alert.text}
                    img={alert.src}
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Additional content"
            svelteCode={alerts17}
            dataCode={dataalert17}
        >
            <div class="row gy-3">
                {#each Additional as alert (alert.id)}
                    {#if alert.isVisible}
                        <Col xl={6}>
                            <SpkAlert
                                color={alert.alert_type}
                                customClass=" overflow-hidden p-0"
                                showCloseButton={false}
                                text={``}
                            >
                                <div
                                    class={`p-3 ${alert.bg_color} text-fixed-white d-flex justify-content-between`}
                                >
                                    <h6
                                        class="aletr-heading mb-0 text-fixed-white"
                                    >
                                        Thank you for reporting this.
                                    </h6>
                                    <Button
                                        color=""
                                        type="button"
                                        class="btn-close p-0 text-fixed-white"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        on:click={() => closeAlert8(alert.id)}
                                        ><i class="bi bi-x"></i></Button
                                    >
                                </div>
                                <hr class="my-0" />
                                <div class="p-3">
                                    <p class="mb-0">
                                        We appreciate you to let us know the bug
                                        in the template and for warning us about
                                        future consequences <a
                                            href="#!"
                                            class="fw-semibold text-decoration-underline"
                                            >Visit for support for queries ?</a
                                        >
                                    </p>
                                </div>
                            </SpkAlert>
                        </Col>
                    {/if}
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible4}
                        <SpkAlert
                            color="primary"
                            customClass="alert alert-solid-primary   border border-primary mb-0 p-2"
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-white">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><path
                                            d="M0 0h24v24H0V0z"
                                            fill="none"
                                        /><path
                                            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                        /></svg
                                    >
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Information Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible4")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Information alert to show to information
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium me-2 op-7"
                                            >cancel</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium"
                                            >open</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible5}
                        <SpkAlert
                            color="secondary"
                            customClass="alert alert-solid-secondary border border-secondary mb-0 p-2"
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-white">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><path
                                            d="M0 0h24v24H0V0zm0 0h24v24H0V0z"
                                            fill="none"
                                        /><path
                                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                                        /></svg
                                    >
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Success Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible5")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Success alert to show to success message
                                    </div>
                                    <div class="fs-12">
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium me-2"
                                            >close</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible6}
                        <SpkAlert
                            color="warning"
                            customClass="alert alert-solid-warning border border-warning mb-0 p-2"
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-white">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><g
                                            ><rect
                                                fill="none"
                                                height="24"
                                                width="24"
                                            /></g
                                        ><g
                                            ><g
                                                ><g
                                                    ><path
                                                        d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
                                                    /><polygon
                                                        points="13,16 11,16 11,18 13,18"
                                                    /><polygon
                                                        points="13,10 11,10 11,15 13,15"
                                                    /></g
                                                ></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Warning Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible6")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Warning alert to show to warning message
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium me-2 op-7"
                                            >skip</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium"
                                            >open</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible7}
                        <SpkAlert
                            color="danger"
                            customClass="alert alert-solid-danger border border-danger mb-0 p-2"
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-white">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><g
                                            ><rect
                                                fill="none"
                                                height="24"
                                                width="24"
                                            /></g
                                        ><g
                                            ><g
                                                ><g
                                                    ><path
                                                        d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
                                                    /><rect
                                                        height="6"
                                                        width="2"
                                                        x="11"
                                                        y="7"
                                                    /><rect
                                                        height="2"
                                                        width="2"
                                                        x="11"
                                                        y="15"
                                                    /></g
                                                ></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Danger Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible7")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Danger alert to show to danger message
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium me-2 op-7"
                                            >close</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-fixed-white fw-medium"
                                            >continue</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible}
                        <SpkAlert
                            color="primary"
                            customClass={`alert border border-primary mb-0 p-2"`}
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-primary">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><path
                                            d="M0 0h24v24H0V0z"
                                            fill="none"
                                        /><path
                                            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                        /></svg
                                    >
                                </div>
                                <div class="text-primary w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Information Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Information alert to show to information
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-secondary fw-medium me-2 d-inline-block"
                                            >cancel</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-primary fw-medium"
                                            >open</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible1}
                        <SpkAlert
                            color="secondary"
                            customClass={`alert  border border-secondary mb-0 p-2"`}
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-secondary">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><path
                                            d="M0 0h24v24H0V0zm0 0h24v24H0V0z"
                                            fill="none"
                                        /><path
                                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                                        /></svg
                                    >
                                </div>
                                <div class="text-secondary w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Success Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible1")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Success alert to show to success message
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-danger fw-medium me-2 d-inline-block"
                                            >cancel</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-secondary fw-medium"
                                            >open</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible2}
                        <SpkAlert
                            color="warning"
                            customClass={`alert  border border-warning mb-0 p-2"`}
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-warning">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><g
                                            ><rect
                                                fill="none"
                                                height="24"
                                                width="24"
                                            /></g
                                        ><g
                                            ><g
                                                ><g
                                                    ><path
                                                        d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
                                                    /><polygon
                                                        points="13,16 11,16 11,18 13,18"
                                                    /><polygon
                                                        points="13,10 11,10 11,15 13,15"
                                                    /></g
                                                ></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                                <div class="text-warning w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Warning Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible2")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Warning alert to show warning message
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-dark fw-medium me-2 d-inline-block"
                                            >cancel</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-warning fw-medium"
                                            >open</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
            <Col xl={3}>
                <div class="card border-0">
                    {#if alerts.isVisible3}
                        <SpkAlert
                            color="danger"
                            customClass={`alert  border border-danger mb-0 p-2"`}
                            showCloseButton={false}
                        >
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-danger">
                                    <svg
                                        class="flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                        ><g
                                            ><rect
                                                fill="none"
                                                height="24"
                                                width="24"
                                            /></g
                                        ><g
                                            ><g
                                                ><g
                                                    ><path
                                                        d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
                                                    /><rect
                                                        height="6"
                                                        width="2"
                                                        x="11"
                                                        y="7"
                                                    /><rect
                                                        height="2"
                                                        width="2"
                                                        x="11"
                                                        y="15"
                                                    /></g
                                                ></g
                                            ></g
                                        ></svg
                                    >
                                </div>
                                <div class="text-danger w-100">
                                    <div
                                        class="fw-medium d-flex justify-content-between"
                                    >
                                        Danger Alert<button
                                            type="button"
                                            class="btn-close p-0"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            on:click={() =>
                                                closeAlert("isVisible3")}
                                            ><i class="bi bi-x"></i></button
                                        >
                                    </div>
                                    <div class="fs-12 op-8 mb-1">
                                        Danger alert to show the danger message
                                    </div>
                                    <div class="fs-12 d-inline-flex">
                                        <a
                                            href="#!"
                                            class="text-info fw-medium me-2 d-inline-block"
                                            >cancel</a
                                        >
                                        <a
                                            href="#!"
                                            class="text-danger fw-medium"
                                            >open</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </SpkAlert>
                    {/if}
                </div>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <Row>
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                {#if alerts.additional1}
                    <div class="card bg-white">
                        <div class="alert custom-alert1 alert-primary">
                            <button
                                type="button"
                                class="btn-close ms-auto"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                on:click={() => closeAlert("additional1")}
                                ><i class="bi bi-x"></i></button
                            >
                            <div class="text-center px-5 pb-0 svg-primary">
                                <svg
                                    class="custom-alert-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                    ><path d="M0 0h24v24H0z" fill="none" /><path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                                    /></svg
                                >
                                <h5>Information?</h5>
                                <p class="">
                                    This alert is created to just show the
                                    related information.
                                </p>
                                <div class="">
                                    <button
                                        class="btn btn-sm btn-outline-danger m-1"
                                        >Decline</button
                                    >
                                    <button class="btn btn-sm btn-primary m-1"
                                        >Accept</button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                {#if alerts.additional2}
                    <div class="card bg-white">
                        <div class="alert custom-alert1 alert-secondary">
                            <button
                                type="button"
                                class="btn-close ms-auto"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                on:click={() => closeAlert("additional2")}
                                ><i class="bi bi-x"></i></button
                            >
                            <div class="text-center px-5 pb-0 svg-secondary">
                                <svg
                                    class="custom-alert-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                    ><path d="M0 0h24v24H0z" fill="none" /><path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                    /></svg
                                >
                                <h5>Confirmed</h5>
                                <p class="">
                                    This alert is created to just show the
                                    confirmation message.
                                </p>
                                <div class="">
                                    <button class="btn btn-sm btn-secondary m-1"
                                        >Close</button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                {#if alerts.additional3}
                    <div class="card bg-white">
                        <div class="alert custom-alert1 alert-warning">
                            <button
                                type="button"
                                class="btn-close ms-auto"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                on:click={() => closeAlert("additional3")}
                                ><i class="bi bi-x"></i></button
                            >
                            <div class="text-center px-5 pb-0 svg-warning">
                                <svg
                                    class="custom-alert-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                    ><path d="M0 0h24v24H0z" fill="none" /><path
                                        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                                    /></svg
                                >
                                <h5>Warning</h5>
                                <p class="">
                                    This alert is created to just show the
                                    warning message.
                                </p>
                                <div class="">
                                    <button
                                        class="btn btn-sm btn-outline-secondary m-1"
                                        >Back</button
                                    >
                                    <button class="btn btn-sm btn-warning m-1"
                                        >Continue</button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                {#if alerts.additional4}
                    <div class="card bg-white">
                        <div class="alert custom-alert1 alert-danger">
                            <button
                                type="button"
                                class="btn-close ms-auto"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                on:click={() => closeAlert("additional4")}
                                ><i class="bi bi-x"></i></button
                            >
                            <div class="text-center px-5 pb-0 svg-danger">
                                <svg
                                    class="custom-alert-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                    ><path d="M0 0h24v24H0z" fill="none" /><path
                                        d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"
                                    /></svg
                                >
                                <h5>danger</h5>
                                <p class="">
                                    This alert is created to just show the
                                    danger message.
                                </p>
                                <div class="">
                                    <button class="btn btn-sm btn-danger m-1"
                                        >Delete</button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </Row>
    </Col>
</Row>
<!--ROW-END-->
