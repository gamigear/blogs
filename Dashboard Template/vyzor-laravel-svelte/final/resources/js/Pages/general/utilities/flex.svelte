<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Contentdata,
        Contentdata1,
        Contentdata3,
        Contentdata4,
    } from "@/shared/data/utilities/flexdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Flex | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Flex" activepage="Utilities" page="Flex" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Enable flex behaviors</div>
            </CardHeader>
            <CardBody>
                <div class="bd-example flex-container mb-3">
                    <div class="d-flex p-2">I'm a flexbox container!</div>
                </div>
                <div class="bd-example flex-container">
                    <div class="d-inline-flex p-2">
                        I'm an inline flexbox container!
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Direction</div>
            </CardHeader>
            <CardBody>
                <div class="bd-example flex-container">
                    <div class="d-flex flex-row mb-3">
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
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
                    Direction flex-column and flex-column-reverse
                </div>
            </CardHeader>
            <CardBody>
                <div class="bd-example flex-container mb-3">
                    <p>Direction Column</p>
                    <div class="d-flex flex-column mb-3">
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
                    </div>
                    <p>Column Reverse</p>
                    <div class="d-flex flex-column-reverse">
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Justify content</div>
            </CardHeader>
            <CardBody>
                <div class="bd-example flex-container mb-3">
                    {#each Contentdata as idx}
                        <div class={`d-flex justify-content-${idx.class} mb-3`}>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                    {/each}
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
                <div class="card-title">Align items</div>
            </CardHeader>
            <CardBody>
                <div class="bd-example flex-container mb-3">
                    {#each Contentdata1 as idx}
                        <div
                            class={`d-flex align-items-${idx.class} mb-3`}
                            style="height: 100px;"
                        >
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                    {/each}
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Align self</div>
            </CardHeader>
            <CardBody>
                <div class="bd-example flex-container mb-3">
                    {#each Contentdata3 as idx}
                        <div class="d-flex mb-3" style="height: 100px;">
                            <div class="p-2">Flex item</div>
                            <div class={`align-self-${idx.class} p-2`}>
                                Aligned flex item
                            </div>
                            <div class="p-2">Flex item</div>
                        </div>
                    {/each}
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xl={12}>
        <Row>
            <Col xl={12} class="gx-sm-4 gx-0">
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">
                            Align content ( Heads up! This property has no
                            effect on single rows of flex items.)
                        </div>
                    </CardHeader>
                    <CardBody class="p-sm-3 p-2">
                        <div class="bd-example flex-container mb-3">
                            {#each Contentdata4 as idx}
                                <div
                                    class={`d-flex align-content-${idx.class} flex-wrap mb-3`}
                                    style="height: 200px;"
                                >
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                            {/each}
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Order</div>
                    </CardHeader>
                    <CardBody>
                        <div class="bd-example flex-container mb-3">
                            <div class="d-flex flex-nowrap">
                                <div class="order-3 p-2">First flex item</div>
                                <div class="order-2 p-2">Second flex item</div>
                                <div class="order-1 p-2">Third flex item</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Fill</div>
                    </CardHeader>
                    <CardBody>
                        <div class="bd-example flex-container mb-3">
                            <div class="d-flex">
                                <div class="p-2 flex-fill">
                                    Flex item with a lot of content
                                </div>
                                <div class="p-2 flex-fill">Flex item</div>
                                <div class="p-2 flex-fill">Flex item</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Grow and shrink</div>
                    </CardHeader>
                    <CardBody>
                        <div class="bd-example flex-container mb-3">
                            <div class="d-flex mb-3">
                                <div class="p-2 flex-grow-1">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Third flex item</div>
                            </div>
                            <div class="d-flex">
                                <div class="p-2 w-100">Flex item</div>
                                <div class="p-2 flex-shrink-1">Flex item</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Auto margins</div>
                    </CardHeader>
                    <CardBody>
                        <div class="bd-example flex-container mb-3">
                            <div class="d-flex mb-3">
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                            </div>

                            <div class="d-flex mb-3">
                                <div class="me-auto p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                            </div>

                            <div class="d-flex mb-3">
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="ms-auto p-2">Flex item</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Wrap</div>
                    </CardHeader>
                    <CardBody>
                        <div class="bd-example flex-container mb-3">
                            <div
                                class="d-flex flex-nowrap"
                                style="width: 8rem;"
                            >
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2 d-none d-sm-block">
                                    Flex item
                                </div>
                            </div>

                            <div class="d-flex flex-wrap">
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                            </div>
                            <div class="d-flex flex-wrap-reverse">
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">With align-items</div>
                    </CardHeader>
                    <CardBody>
                        <div class="bd-example flex-container mb-3">
                            <div
                                class="d-flex align-items-start flex-column mb-3"
                                style="height: 200px;"
                            >
                                <div class="mb-auto p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                            </div>
                            <div
                                class="d-flex align-items-end flex-column mb-3"
                                style="height: 200px;"
                            >
                                <div class="p-2">Flex item</div>
                                <div class="p-2">Flex item</div>
                                <div class="mt-auto p-2">Flex item</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-4 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Media object</div>
            </CardHeader>
            <CardBody>
                <div class="d-sm-flex mb-3">
                    <div class="flex-shrink-0 mb-3 mb-sm-0">
                        <Image
                            class="bd-placeholder-img card-img w-10 h-10"
                            src="../../images/faces/6.jpg"
                            alt="img"
                        />
                    </div>
                    <div class="flex-grow-1 ms-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus recusandae blanditiis voluptas nobis
                        consectetur. Voluptate pariatur, odit repudiandae sint,
                        libero laborum aut vel, ut enim laboriosam explicabo
                        dolor corporis hic.
                    </div>
                </div>
                <p>
                    And say you want to vertically center the content next to
                    the image:
                </p>
                <div class="d-sm-flex align-items-center">
                    <div class="flex-shrink-0 mb-3 mb-sm-0">
                        <Image
                            class="bd-placeholder-img card-img avatar-xl"
                            src="../../images/faces/15.jpg"
                            alt="img"
                        />
                    </div>
                    <div class="flex-grow-1 ms-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloribus, accusamus fuga quis deserunt provident
                        rem illum exercitationem laborum pariatur modi
                        blanditiis a dolor excepturi qui, aut laudantium harum
                        in id..
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>
