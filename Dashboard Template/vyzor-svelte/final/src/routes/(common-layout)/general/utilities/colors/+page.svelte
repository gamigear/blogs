<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Othercolors,
        bgcolor,
        bggradient,
        bgoutline,
        bgtransparent,
        bordercolors,
    } from "$lib/data/utilities/colorsdata";
    import { Card, CardBody, CardHeader, Col, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Colors | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Colors" activepage="Utilities" page="Colors" />
<!-- Page Header Close -->

<!-- Start:: row-1 --> 

            <Row>
                <Col lg={12} sm={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Background Colors
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                {#each bgcolor as idx }
                                    <div class="p-3 col">
                                        <div class={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p class="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                {/each}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Background gradients
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                {#each bggradient as idx}
                                    <div class="p-2 col">
                                        <div class={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p class="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                {/each}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Background transparent colors
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                {#each bgtransparent as idx}
                                    <div class="p-3 col">
                                        <div class={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p class="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                {/each}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Background outline colors
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                {#each bgoutline as idx}
                                    <div class="p-3 col">
                                        <div class={`m-2 bg-${idx.color} mx-auto color-container`}><i class="bi bi-emoji-smile fs-18"></i></div>
                                        <p class="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                {/each}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Border Colors
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                {#each bordercolors as idx }
                                     <div class="p-3 col">
                                        <div class={`m-2 border ${idx.color} mx-auto color-container`}></div>
                                        <p class="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                {/each}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Background Opacity
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                <div class="p-3 col">
                                    <div class="m-2 bg-success bg-opacity-100 text-fixed-white mx-auto color-container">100%</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-75</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 bg-success text-fixed-white bg-opacity-75 mx-auto color-container">75%</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-75</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 bg-success text-fixed-dark bg-opacity-50 mx-auto color-container">50%</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-50</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 bg-success text-fixed-dark bg-opacity-25 mx-auto color-container">25%</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-25</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 bg-success text-fixed-dark bg-opacity-10 mx-auto color-container">10%</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-10</code></p>
                                </div>
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
                                Text Colors
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="row row-cols-12 d-flex align-items-center">
                                <div class="p-3 col">
                                    <div class="m-2 text-primary fw-medium fs-14 text-center">primary</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-primary</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-secondary fw-medium fs-14 text-center">secondary</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-secondary</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-warning fw-medium fs-14 text-center">warning</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-warning</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-info fw-medium fs-14 text-center">info</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-info</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-success fw-medium fs-14 text-center">success</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-success</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-danger fw-medium fs-14 text-center">danger</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-danger</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-light bg-dark fw-medium fs-14 text-center">light</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-light</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-dark fw-medium fs-14 text-center">dark</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-dark</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-muted fw-medium fs-14 text-center">muted</div>
                                    <p class="pb-0 mb-0 fw-medium text-center"><code>.text-muted</code></p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!-- End:: row-2 --> 

             <!-- Start:: row-3 --> 

            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card class="custom-card">
                                <CardHeader>
                                    <div class="card-title">
                                        Text Opacity
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div class="row row-cols-12 d-flex align-items-center">
                                        <div class="p-3 col">
                                            <div class="m-2 text-primary fw-medium fs-14 text-center">Opacity-100</div>
                                            <p class="pb-0 mb-0 fw-medium text-center"><code>100% opacity</code></p>
                                        </div>
                                        <div class="p-3 col">
                                            <div class="m-2 text-primary text-opacity-75 fw-medium fs-14 text-center">Opacity-100</div>
                                            <p class="pb-0 mb-0 fw-medium text-center"><code>.text-opacity-75</code></p>
                                        </div>
                                        <div class="p-3 col">
                                            <div class="m-2 text-primary text-opacity-50 fw-medium fs-14 text-center">Opacity-100</div>
                                            <p class="pb-0 mb-0 fw-medium text-center"><code>.text-opacity-50</code></p>
                                        </div>
                                        <div class="p-3 col">
                                            <div class="m-2 text-primary text-opacity-25 fw-medium fs-14 text-center">Opacity-100</div>
                                            <p class="pb-0 mb-0 fw-medium text-center"><code>.text-opacity-25</code></p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

             <!-- End:: row-3 --> 

             <!-- Start:: row-4 --> 

            <Row>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Callout
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div class="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. </div>
                            <div class="callout callout-info">Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. </div>
                            <div class="callout callout-warning">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. </div>
                            <div class="callout callout-danger">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit.
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!-- End:: row-4 --> 

             <!-- Start:: row-5 --> 

            <h6 class="mb-3">Other Colors:</h6>
            <Row>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                                <div class={`flex-fill p-3 bd-blue-${idx.data}`}>$blue-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-blue">$blue</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-indigo-${idx.data}`}>$indigo-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-indigo">$indigo</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-purple-${idx.data}`}>$purple-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-purple">$purple</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-pink-${idx.data}`}>$pink-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-pink">$pink</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx }
                            <div class={`flex-fill p-3 bd-red-${idx.data}`}>$red-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-red">$red</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-orange-${idx.data}`}>$orange-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-orange">$orange</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-yellow-${idx.data}`}>$yellow-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-yellow">$yellow</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-green-${idx.data}`}>$green-{idx.data}</div>  
                            {/each}
                            <div class="flex-fill p-3 bd-green">$green</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-teal-${idx.data}`}>$teal-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-teal">$teal</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-cyan-${idx.data}`}>$cyan-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-cyan">$cyan</div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card class="custom-card">
                        <CardBody class="d-xl-flex flex-wrap">
                            {#each Othercolors as idx}
                            <div class={`flex-fill p-3 bd-gray-${idx.data}`}>$gray-{idx.data}</div>
                            {/each}
                            <div class="flex-fill p-3 bd-gray">$gray</div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!-- End:: row-5 --> 
