<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        progress1,
        progress2,
        progress3,
        progress4,
        progress5,
        progress6,
        progress7,
        dataprogress8,
        progress8,
        progress10,
        progress9,
        progress11,
        progress12,
        progress13,
        progress14,
        dataprogress11,
    } from "@/shared/data/prism-code/uielementsprim";
    import { Col, Progress, Row } from "@sveltestrap/sveltestrap";
    import {
        progressData,
        progressData1,
        progressData2,
        progressDataMd,
        progressDataLg,
        progressDataSm,
        progressDataXl,
    } from "@/shared/data/uielements/progressbardata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Progress | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Progress" activepage="UI Elements" page="Progress" />

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Basic Progress"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress1}
        >
            <Progress color="primary" value={0} class=" mb-3" />
            <Progress color="primary" value={25} class="  mb-3" />
            <Progress color="primary" value={50} class=" mb-3" />
            <Progress color="primary" value={75} class=" mb-3" />
            <Progress color="primary" value={100} class=" mb-0" />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Different Colored Progress"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress2}
        >
            <Progress color="secondary" value={20} class=" mb-3" />
            <Progress color="warning" value={40} class=" mb-3" />
            <Progress color="info" value={60} class=" mb-3" />
            <Progress color="success" value={80} class=" mb-3" />
            <Progress color="danger" value={100} class=" mb-0" />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Striped Progress"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress3}
        >
            <Progress
                striped
                color="primary"
                value={10}
                class="progress mb-3"
            />
            <Progress
                striped
                color="secondary"
                value={25}
                class="progress mb-3"
            />
            <Progress
                striped
                color="success"
                value={50}
                class="progress mb-3"
            />
            <Progress striped color="info" value={75} class="progress mb-3" />
            <Progress
                striped
                color="warning"
                value={100}
                class="progress mb-0"
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Progress Height"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress4}
        >
            <Progress color="primary" value={10} class="progress-xs mb-3" />
            <Progress color="primary" value={25} class="progress-sm mb-3" />
            <Progress color="primary" value={50} class=" mb-3" />
            <Progress color="primary" value={75} class="progress-lg mb-3" />
            <Progress color="primary" value={100} class="progress-xl mb-0" />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Progress With Labels"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress7}
        >
            <Progress color="primary" value={10} class="progress mb-3"
                >10%</Progress
            >
            <Progress color="secondary" value={20} class="progress mb-3"
                >20%
            </Progress>
            <Progress color="success" value={40} class="progress mb-3"
                >40%</Progress
            >
            <Progress color="info" value={60} class="progress mb-3"
                >60%</Progress
            >
            <Progress color="warning" value={80} class="progress mb-0"
                >80%</Progress
            >
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Multiple bars With Sizes"
            customCardClass=""
            customCardBodyClass="progress-body"
            svelteCode={progress8}
            dataCode={dataprogress8}
        >
            <div class="progress-stacked progress-xs mb-3">
                {#each progressData as { width, color }}
                    <div
                        class="progress-bar {color}"
                        role="progressbar"
                        style="width: {width}"
                        aria-valuenow={parseInt(width)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                {/each}
            </div>

            <div class="progress-stacked progress-sm mb-3">
                {#each progressDataSm as { width, color }}
                    <div
                        class="progress-bar {color}"
                        role="progressbar"
                        style="width: {width}"
                        aria-valuenow={parseInt(width)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                {/each}
            </div>

            <div class="progress-stacked mb-3">
                {#each progressDataMd as { width, color }}
                    <div
                        class="progress-bar {color}"
                        role="progressbar"
                        style="width: {width}"
                        aria-valuenow={parseInt(width)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                {/each}
            </div>

            <div class="progress-stacked progress-lg mb-3">
                {#each progressDataLg as { width, color }}
                    <div
                        class="progress-bar {color}"
                        role="progressbar"
                        style="width: {width}"
                        aria-valuenow={parseInt(width)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                {/each}
            </div>

            <div class="progress-stacked progress-xl mb-0">
                {#each progressDataXl as { width, color }}
                    <div
                        class="progress-bar {color}"
                        role="progressbar"
                        style="width: {width}"
                        aria-valuenow={parseInt(width)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
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
            title="Animated Stripped Progress"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress5}
        >
            <Progress
                color="primary"
                class="progress mb-3"
                animated
                value={10}
            />
            <Progress
                color="secondary"
                class="progress mb-3"
                animated
                value={20}
            />
            <Progress
                color="success"
                class="progress mb-3"
                animated
                value={40}
            />
            <Progress color="info" class="progress mb-3" animated value={60} />
            <Progress color="warning" class="progress" animated value={80} />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Gradient Progress"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress6}
        >
            <div
                class="progress mb-3"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-primary-gradient"
                    style="width: 10%"
                ></div>
            </div>
            <div
                class="progress mb-3"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-secondary-gradient"
                    style="width: 20%"
                ></div>
            </div>
            <div
                class="progress mb-3"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-success-gradient"
                    style="width: 40%"
                ></div>
            </div>
            <div
                class="progress mb-3"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-info-gradient"
                    style="width: 60%"
                ></div>
            </div>
            <div
                class="progress"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-warning-gradient"
                    style="width: 80%"
                ></div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Custom Animated Progress"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress9}
        >
            <div
                class="progress mb-3 progress-animate"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-primary-gradient"
                    style="width: 10%"
                ></div>
            </div>
            <div
                class="progress mb-3 progress-animate"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-secondary-gradient"
                    style="width: 20%"
                ></div>
            </div>
            <div
                class="progress mb-3 progress-animate"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-success-gradient"
                    style="width: 40%"
                ></div>
            </div>
            <div
                class="progress mb-3 progress-animate"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-info-gradient"
                    style="width: 60%"
                ></div>
            </div>
            <div
                class="progress progress-animate"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    class="progress-bar bg-warning-gradient"
                    style="width: 80%"
                ></div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Custom Progress-1"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress10}
        >
            <div
                class="progress progress-sm progress-custom mb-5 progress-animate"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <h6 class="progress-bar-title">Mobiles</h6>
                <div class="progress-bar" style="width: 50%;">
                    <div class="progress-bar-value">50%</div>
                </div>
            </div>

            <div
                class="progress progress-sm progress-custom mb-5 progress-animate"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <h6 class="progress-bar-title bg-secondary">Watches</h6>
                <div class="progress-bar bg-secondary" style="width: 60%;">
                    <div class="progress-bar-value bg-secondary">60%</div>
                </div>
            </div>

            <div
                class="progress progress-sm progress-custom progress-animate"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <h6 class="progress-bar-title bg-success">Shirts</h6>
                <div class="progress-bar bg-success" style="width: 70%;">
                    <div class="progress-bar-value bg-success">70%</div>
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Custom Progress-2"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress11}
            dataCode={dataprogress11}
        >
            {#each progressData2 as { now, class1,className }}
                <!-- Loop through progressData -->
                <div
                    class={`progress progress-sm ${className}`}
                    role="progressbar"
                    aria-valuenow={now}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        class={`progress-item-1 ${now >= 50 ? class1 : ""}`}
                    ></div>
                    <div
                        class={`progress-item-2 ${now >= 60 ? class1 : ""}`}
                    ></div>
                    <div
                        class={`progress-item-3 ${now >= 76 ? class1 : ""}`}
                    ></div>
                    <div
                        class={`progress-bar ${class1}`}
                        style="width: {now}%"
                    ></div>
                </div>
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Custom Progress-3"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress12}
        >
            <div
                class="progress progress-lg mb-5 custom-progress-3 progress-animate"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div class="progress-bar bg-primary" style="width: 50%;">
                    <div class="progress-bar-value">50%</div>
                </div>
            </div>
            <div
                class="progress progress-lg mb-5 custom-progress-3 progress-animate"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div class="progress-bar bg-secondary" style="width: 60%;">
                    <div class="progress-bar-value secondary">60%</div>
                </div>
            </div>
            <div
                class="progress progress-lg custom-progress-3 progress-animate"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div class="progress-bar bg-success" style="width: 70%;">
                    <div class="progress-bar-value success">70%</div>
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Custom Progress-4"
            customCardClass=""
            customCardBodyClass="progress-body"
            svelteCode={progress13}
        >
            <div
                class="progress progress-xl mb-3 progress-animate custom-progress-4"
                role="progressbar"
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class="progress-bar bg-primary-gradient"
                    style="width: 10%;"
                ></div>
                <div class="progress-bar-label">10%</div>
            </div>

            <div
                class="progress progress-xl mb-3 progress-animate custom-progress-4 secondary"
                role="progressbar"
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class="progress-bar bg-secondary-gradient"
                    style="width: 20%;"
                ></div>
                <div class="progress-bar-label">20%</div>
            </div>

            <div
                class="progress progress-xl mb-3 progress-animate custom-progress-4 success"
                role="progressbar"
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class="progress-bar bg-success-gradient"
                    style="width: 40%;"
                ></div>
                <div class="progress-bar-label">40%</div>
            </div>

            <div
                class="progress progress-xl mb-3 progress-animate custom-progress-4 info"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class="progress-bar bg-info-gradient"
                    style="width: 60%;"
                ></div>
                <div class="progress-bar-label">60%</div>
            </div>

            <div
                class="progress progress-xl mb-3 progress-animate custom-progress-4 warning"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class="progress-bar bg-warning-gradient"
                    style="width: 80%;"
                ></div>
                <div class="progress-bar-label">80%</div>
            </div>

            <div
                class="progress progress-xl progress-animate custom-progress-4 danger"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    class="progress-bar bg-danger-gradient"
                    style="width: 90%;"
                ></div>
                <div class="progress-bar-label">90%</div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Custom Progress-5"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={progress14}
        >
            <h6 class="fw-semibold mb-2">Project Dependencies</h6>
            <div class="progress-stacked progress-xl mb-5">
                {#each progressData1 as { width, color, label }}
                    <div
                        class="progress-bar {color}"
                        role="progressbar"
                        style="width: {width}%;"
                        aria-valuenow={width}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {label}
                    </div>
                {/each}
            </div>
            <Row class="justify-content-center">
                <Col xl={5}>
                    <div class="border p-3">
                        <p class="fs-12 fw-semibold mb-0 text-muted">
                            Html<span class="float-end fs-10 fw-normal"
                                >25%</span
                            >
                        </p>
                        <Progress
                            class="progress progress-xs mb-4 progress-animate"
                            color="primary"
                            value={25}
                        />
                        <p class="fs-12 fw-semibold mb-0 text-muted">
                            Css<span class="float-end fs-10 fw-normal">35%</span
                            >
                        </p>
                        <Progress
                            class="progress progress-xs mb-4 progress-animate"
                            color="secondary"
                            value={35}
                        />
                        <p class="fs-12 fw-semibold mb-0 text-muted">
                            Js<span class="float-end fs-10 fw-normal">40%</span>
                        </p>
                        <Progress
                            class="progress progress-xs progress-animate"
                            color="danger"
                            value={40}
                        />
                    </div>
                </Col>
            </Row>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-7 -->
