<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        floating1,
        floating2,
        floating3,
        floating4,
        floating5,
        floating6,
        floating7,
    } from "@/shared/data/prism-code/formsprism";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import { Col, Form, FormGroup, Input, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>FloatingLabels | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Floating labels"
    activepage="Forms"
    page="Floating labels"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Basic Examples" svelteCode={floating1}>
            <Form>
                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autocomplete="username"
                    />
                    <label for="floatingInput" class="custom-label"
                        >Email address</label
                    >
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        autocomplete="current-password"
                    />
                    <label for="floatingPassword" class="custom-label"
                        >Password</label
                    >
                </div>
            </Form>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Readonly plain text" svelteCode={floating2}>
            <div class="form-floating mb-3">
                <input
                    type="email"
                    readonly
                    class="form-control-plaintext"
                    id="floatingEmptyPlaintextInput"
                    placeholder="name@example.com"
                />
                <label for="floatingEmptyPlaintextInput">Empty input</label>
            </div>
            <div class="form-floating">
                <input
                    type="email"
                    readonly
                    class="form-control-plaintext"
                    id="floatingPlaintextInput"
                    placeholder="name@example.com"
                    value="name@example.com"
                />
                <label for="floatingPlaintextInput">Input with value</label>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Floating Labels With Pre Defined Values"
            svelteCode={floating3}
        >
            <form class="custom-form-label form-floating my-3">
                <input
                    type="email"
                    class="form-control"
                    id="floatingInputValue"
                    placeholder="name@example.com"
                    value="test@example.com"
                    autocomplete="username"
                />
                <label for="floatingInputValue">Input with value</label>
            </form>
            <form class="form-floatin">
                <input
                    type="email"
                    class="form-control is-invalid"
                    id="floatingInputInvalid"
                    placeholder="name@example.com"
                    value="test@example.com"
                />
                <label for="floatingInputInvalid">Invalid input</label>
            </form>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Textareas" svelteCode={floating4}>
            <div class=" custom-form-label form-floating mb-4">
                <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Description</label>
            </div>
            <div class="form-floating">
                <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    rows="1"
                    disabled
                ></textarea>
                <label for="floatingTextarea2">Disabled</label>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Floating Labels In Select" svelteCode={floating5}>
            <div class="form-floating">
                <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Floating Labels With Layouts" svelteCode={floating6}>
            <div class="row g-2">
                <div class="col-md">
                    <div class="custom-form-label form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputGrid"
                            placeholder="name@example.com"
                            value="mdo@example.com"
                        />
                        <label for="floatingInputGrid">Email address</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid"
                            >Works with selects</label
                        >
                    </div>
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Floating Label Colors" svelteCode={floating7}>
            <Row class=" gy-4">
                <Col xl={4}>
                    <div class="form-floating mb-4 floating-primary">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputprimary"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputprimary">primary</label>
                    </div>
                </Col>
                <Col xl={4}>
                    <div class="form-floating mb-4 floating-secondary">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputsecondary"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputsecondary">secondary</label>
                    </div>
                </Col>
                <Col xl={4}>
                    <div class="form-floating mb-4 floating-warning">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputwarning"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputwarning">warning</label>
                    </div>
                </Col>
                <Col xl={4}>
                    <div class="form-floating mb-4 floating-info">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputinfo"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputinfo">info</label>
                    </div>
                </Col>
                <Col xl={4}>
                    <div class="form-floating mb-4 floating-success">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputsuccess"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputsuccess">success</label>
                    </div>
                </Col>
                <Col xl={4}>
                    <div class="form-floating mb-4 floating-danger">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputdanger"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputdanger">danger</label>
                    </div>
                </Col>
            </Row>
        </ShowCode>
    </Col>
</Row>
<!-- Start:: row-4 -->
