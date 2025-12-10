<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Position | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Position" activepage="Utilities" page="Position" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Positions</div>
            </CardHeader>
            <CardBody class="bd-example-position-utils">
                <div class="position-relative">
                    <div class="position-absolute top-0 start-0"></div>
                    <div class="position-absolute top-0 end-0"></div>
                    <div class="position-absolute top-50 start-50"></div>
                    <div class="position-absolute bottom-50 end-50"></div>
                    <div class="position-absolute bottom-0 start-0"></div>
                    <div class="position-absolute bottom-0 end-0"></div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Centering Elements With Positions</div>
            </CardHeader>
            <CardBody class="bd-example-position-utils">
                <div class="position-relative">
                    <div
                        class="position-absolute top-0 start-0 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-0 start-50 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-0 start-100 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-50 start-0 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-50 start-50 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-50 start-100 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-100 start-0 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-100 start-50 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-100 start-100 translate-middle"
                    ></div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">
                    By adding .translate-middle-x or .translate-middle-y classes
                </div>
            </CardHeader>
            <CardBody class="bd-example-position-utils">
                <div class="position-relative">
                    <div class="position-absolute top-0 start-0"></div>
                    <div
                        class="position-absolute top-0 start-50 translate-middle-x"
                    ></div>
                    <div class="position-absolute top-0 end-0"></div>
                    <div
                        class="position-absolute top-50 start-0 translate-middle-y"
                    ></div>
                    <div
                        class="position-absolute top-50 start-50 translate-middle"
                    ></div>
                    <div
                        class="position-absolute top-50 end-0 translate-middle-y"
                    ></div>
                    <div class="position-absolute bottom-0 start-0"></div>
                    <div
                        class="position-absolute bottom-0 start-50 translate-middle-x"
                    ></div>
                    <div class="position-absolute bottom-0 end-0"></div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Examples:</div>
            </CardHeader>
            <div
                class="card-body bd-example-position-examples d-flex justify-content-around flex-wrap gap-4"
            >
                <SpkButton
                    color="primary"
                    customClass="btn btn-primary position-relative"
                >
                    Mails <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                        >+99
                        <span class="visually-hidden">unread messages</span
                        ></span
                    >
                </SpkButton>

                <SpkButton
                    color="dark"
                    customClass="btn btn-dark position-relative about text-white"
                >
                    Marker <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="position-absolute top-100 start-50 translate-middle mt-1 svg-white"
                        fill="#212529"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        >
                        </path>
                    </svg>
                </SpkButton>

                <SpkButton
                    color="primary"
                    customClass="btn btn-primary position-relative"
                >
                    Alerts <span
                        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"
                        ><span class="visually-hidden">unread messages</span
                        ></span
                    >
                </SpkButton>
            </div>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Example With Buttons</div>
            </CardHeader>
            <CardBody class="bd-example-position-examples">
                <div class="position-relative m-4">
                    <div class="progress" style="height: 1px;">
                        <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 50%;"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <button
                        type="button"
                        class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                        style="width: 2rem; height:2rem;">1</button
                    >
                    <button
                        type="button"
                        class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                        style="width: 2rem; height:2rem;">2</button
                    >
                    <button
                        type="button"
                        class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
                        style="width: 2rem; height:2rem;">3</button
                    >
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->
