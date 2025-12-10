<script lang="ts">
    import {
        Links1,
        Links10,
        Links2,
        Links3,
        Links4,
        Links5,
        Links6,
        Links7,
        Links8,
        Links9,
    } from "$lib/components/common/prism-code/uielementsprim";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>LinksInteractions | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Pageheader
  homepage="Links & Interactions"
  activepage="UI Elements"
  page="Links & Interactions"
/>

<!-- Start::row-1 -->
<Row>
    <Col xl={6}>
        <Row>
            <Col xl={12}>
                <ShowCode title="TEXT SELECTION" svelteCode={Links1}>
                    <p class="user-select-all">
                        This paragraph will be entirely selected when clicked by
                        the user.
                    </p>
                    <p class="user-select-auto">
                        This paragraph has default select behavior.
                    </p>
                    <p class="user-select-none mb-0">
                        This paragraph will not be selectable when clicked by
                        the user.
                    </p>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="POINTER EVENTS" svelteCode={Links3}>
                    <p>
                        <a
                            href="#!"
                            class="pe-none text-primary fw-medium text-decoration-underline"
                            tabindex="-1">This link</a
                        > can not be clicked.
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="pe-auto text-primary fw-medium text-decoration-underline"
                            >This link</a
                        > can be clicked (this is default behavior).
                    </p>
                    <p class="pe-none mb-0">
                        <a
                            href="#!"
                            tabindex="-1"
                            class="text-primary fw-medium text-decoration-underline"
                            >This link</a
                        >
                        can not be clicked because the
                        <code>pointer-events</code>
                        property is inherited from its parent. However,
                        <a href="#!" class="pe-auto">this link</a>
                        has a <code>pe-auto</code> class and can be clicked.
                    </p>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="LINK OPACITY" svelteCode={Links4}>
                    <p>
                        <a class="link-opacity-10" href="#!">Link opacity 10</a>
                    </p>
                    <p>
                        <a class="link-opacity-25" href="#!">Link opacity 25</a>
                    </p>
                    <p>
                        <a class="link-opacity-50" href="#!">Link opacity 50</a>
                    </p>
                    <p>
                        <a class="link-opacity-75" href="#!">Link opacity 75</a>
                    </p>
                    <p class="mb-0">
                        <a class="link-opacity-100" href="#!"
                            >Link opacity 100</a
                        >
                    </p>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="LINK HOVER VARIANT" svelteCode={Links5}>
                    <a
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline"
                        href="#!"
                    >
                        Underline opacity 0
                    </a>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="LINK UNDERLINE COLORS" svelteCode={Links6}>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-primary text-decoration-underline"
                            >Primary underline</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-secondary text-decoration-underline"
                            >Secondary underline</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-success text-decoration-underline"
                            >Success underline</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-danger text-decoration-underline"
                            >Danger underline</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-warning text-decoration-underline"
                            >Warning underline</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-info text-decoration-underline"
                            >Info underline</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-underline-light text-decoration-underline"
                            >Light underline</a
                        >
                    </p>
                    <p class="mb-0">
                        <a
                            href="#!"
                            class="link-underline-dark text-decoration-underline"
                            >Dark underline</a
                        >
                    </p>
                </ShowCode>
            </Col>
        </Row>
    </Col>
    <Col xl={6}>
        <Row>
            <Col xl={12}>
                <ShowCode title="LINK UNDERLINE OFFSET" svelteCode={Links7}>
                    <p>
                        <a href="#!" class="text-decoration-underline"
                            >Default link</a
                        >
                    </p>
                    <p>
                        <a
                            class="link-offset-1 text-decoration-underline"
                            href="#!">Offset 1 link</a
                        >
                    </p>
                    <p>
                        <a
                            class="link-offset-2 text-decoration-underline"
                            href="#!">Offset 2 link</a
                        >
                    </p>
                    <p class="mb-0">
                        <a
                            class="link-offset-3 text-decoration-underline"
                            href="#!">Offset 3 link</a
                        >
                    </p>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="LINK UNDERLINE OPACITY" svelteCode={Links8}>
                    <p>
                        <a
                            class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0"
                            href="#!">Underline opacity 0</a
                        >
                    </p>
                    <p>
                        <a
                            class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10"
                            href="#!">Underline opacity 10</a
                        >
                    </p>
                    <p>
                        <a
                            class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25"
                            href="#!">Underline opacity 25</a
                        >
                    </p>
                    <p>
                        <a
                            class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50"
                            href="#!">Underline opacity 50</a
                        >
                    </p>
                    <p>
                        <a
                            class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75"
                            href="#!">Underline opacity 75</a
                        >
                    </p>
                    <p>
                        <a
                            class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100"
                            href="#!">Underline opacity 100</a
                        >
                    </p>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="LINK HOVER OPACITY" svelteCode={Links9}>
                    <p>
                        <a class="link-opacity-10-hover" href="#!"
                            >Link hover opacity 10</a
                        >
                    </p>
                    <p>
                        <a class="link-opacity-25-hover" href="#!"
                            >Link hover opacity 25</a
                        >
                    </p>
                    <p>
                        <a class="link-opacity-50-hover" href="#!"
                            >Link hover opacity 50</a
                        >
                    </p>
                    <p>
                        <a class="link-opacity-75-hover" href="#!"
                            >Link hover opacity 75</a
                        >
                    </p>
                    <p class="mb-0">
                        <a class="link-opacity-100-hover" href="#!"
                            >Link hover opacity 100</a
                        >
                    </p>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title="COLORED LINKS" svelteCode={Links10}>
                    <p>
                        <a
                            href="#!"
                            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Primary link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Secondary link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Success link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Danger link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Warning link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Info link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Light link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                            >Dark link</a
                        >
                    </p>
                    <p>
                        <a
                            href="#!"
                            class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline"
                            >Emphasis link</a
                        >
                    </p>
                </ShowCode>
            </Col>
        </Row>
    </Col>
</Row>
<!--End::row-1 -->
