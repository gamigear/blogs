<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import {
        input1,
        input2,
        input3,
        input4,
        input5,
        input6,
        input7,
        input8,
    } from "$lib/components/common/prism-code/formsprism";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import { Col, Form, Input, Label, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Inputs | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Inputs"
    activepage="Forms"
    subTitle=" Form Elements"
    page="Inputs"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Input Types" svelteCode={input1}>
            <Row class=" gy-4">
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label class="mb-2">Basic Input:</Label>
                    <Input type="text" id="input" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-label" class="form-label"
                        >Form Input With Label</Label
                    >
                    <Input type="text" id="input-label" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-placeholder" class="form-label"
                        >Form Input With Placeholder</Label
                    >
                    <Input
                        type="text"
                        class="form-control"
                        id="input-placeholder"
                        placeholder="Placeholder"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-text" class="form-label">Type Text</Label>
                    <Input
                        type="text"
                        class="form-control"
                        id="input-text"
                        placeholder="Text"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-number" class="form-label"
                        >Type Number</Label
                    >
                    <Input
                        type="number"
                        class="form-control"
                        id="input-number"
                        placeholder="Number"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-password" class="form-label"
                        >Type Password</Label
                    >
                    <Input
                        type="password"
                        class="form-control"
                        id="input-password"
                        placeholder="Password"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-email" class="form-label"
                        >Type Email</Label
                    >
                    <Input
                        type="email"
                        class="form-control"
                        id="input-email"
                        placeholder="Email@xyz.com"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-tel" class="form-label">Type Tel</Label>
                    <Input
                        type="tel"
                        class="form-control"
                        id="input-tel"
                        placeholder="+1100-2031-1233"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-date" class="form-label">Type Date</Label>
                    <Input type="date" class="form-control" id="input-date" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-week" class="form-label">Type Week</Label>
                    <Input type="week" class="form-control" id="input-week" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-month" class="form-label"
                        >Type Month</Label
                    >
                    <Input type="month" class="form-control" id="input-month" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-time" class="form-label">Type Time</Label>
                    <Input type="time" class="form-control" id="input-time" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-datetime-local" class="form-label"
                        >Type datetime-local</Label
                    >
                    <Input
                        type="datetime-local"
                        class="form-control"
                        id="input-datetime-local"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-search" class="form-label"
                        >Type Search</Label
                    >
                    <Input
                        type="search"
                        class="form-control"
                        id="input-search"
                        placeholder="Search"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-submit" class="form-label"
                        >Type Submit</Label
                    >
                    <SpkButton
                        as="input"
                        buttontype="submit"
                        customClass="form-control"
                        id="input-submit"
                        value="Submit"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-reset" class="form-label"
                        >Type Reset</Label
                    >
                    <SpkButton
                        as="input"
                        buttontype="reset"
                        customClass="form-control"
                        id="input-reset"
                        value="Reset"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-button" class="form-label"
                        >Type Button</Label
                    >
                    <SpkButton
                        as="input"
                        value="Button"
                        buttontype="button"
                        customClass="form-control btn btn-primary"
                        id="input-button"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Row>
                        <Col xl={3}>
                            <div class="mb-3">
                                <Label class="form-label">Type Color</Label>
                                <Input
                                    class="form-control form-input-color"
                                    type="color"
                                    value="#136bd0"
                                />
                            </div>
                        </Col>
                        <Col xl={5}>
                            <div class="form-check">
                                <p class="mb-3 px-0 text-muted">
                                    Type Checkbox
                                </p>
                                <Input class=" ms-2" type="checkbox" checked />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div class="form-check">
                                <p class="mb-3 px-0 text-muted">Type Radio</p>
                                <Input class=" ms-2" type="radio" checked />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-file" class="form-label">Type File</Label>
                    <Input class="form-control" type="file" id="input-file" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="" class="form-label">Type Url</Label>
                    <Input
                        class="form-control"
                        type="url"
                        name="website"
                        placeholder="http://example.com"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-disabled" class="form-label"
                        >Type Disabled</Label
                    >
                    <Input
                        type="text"
                        id="input-disabled"
                        class="form-control"
                        placeholder="Disabled input"
                        disabled
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-readonlytext" class="form-label"
                        >Input Readonly Text</Label
                    >
                    <Input
                        type="text"
                        readonly
                        class="form-control-plaintext"
                        id="input-readonlytext"
                        value="email@example.com"
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="disabled-readonlytext" class="form-label"
                        >Disabled Readonly Input</Label
                    >
                    <Input
                        class="form-control"
                        type="text"
                        value="Disabled readonly input"
                        id="disabled-readonlytext"
                        aria-label="Disabled input example"
                        disabled
                        readonly
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="" class="form-label">Type Readonly Input</Label>
                    <Input
                        class="form-control"
                        type="text"
                        value="Readonly input here..."
                        aria-label="readonly input example"
                        readonly
                    />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="text-area" class="form-label">Textarea</Label>
                    <!-- svelte-ignore attribute_invalid_property_name -->
                    <!-- svelte-ignore element_invalid_self_closing_tag -->
                    <textarea class="form-control" id="text-area" rows={1} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Label for="input-DataList" class="form-label"
                        >Datalist example</Label
                    >
                    <Input
                        class="form-control"
                        list="datalistOptions"
                        id="input-DataList"
                        placeholder="Type to search..."
                    />
                    <datalist id="datalistOptions">
                        <option value="San Francisco"> </option>
                        <option value="New York"> </option>
                        <option value="Seattle"> </option>
                        <option value="Los Angeles"> </option>
                        <option value="Chicago"> </option>
                    </datalist>
                </Col>
            </Row>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Input shapes" svelteCode={input2}>
            <Row class=" gy-3">
                <Col xl={12}>
                    <Label for="input-noradius" class="form-label"
                        >Input With No Radius</Label
                    >
                    <Input
                        type="text"
                        class="form-control rounded-0"
                        id="input-noradius"
                        placeholder="No Radius"
                    />
                </Col>
                <Col xl={12}>
                    <Label for="input-rounded" class="form-label"
                        >Input With Radius</Label
                    >
                    <Input
                        type="text"
                        class="form-control"
                        id="input-rounded"
                        placeholder="Default Radius"
                    />
                </Col>
                <Col xl={12}>
                    <Label for="input-rounded-pill" class="form-label"
                        >Rounded Input</Label
                    >
                    <Input
                        type="text"
                        class="form-control rounded-pill"
                        id="input-rounded-pill"
                        placeholder="Rounded"
                    />
                </Col>
            </Row>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Input border Styles" svelteCode={input3}>
            <Row class="gy-3">
                <Col xl={12}>
                    <Label for="input-rounded1" class="form-label"
                        >Default</Label
                    >
                    <Input
                        type="text"
                        class="form-control"
                        id="input-rounded1"
                        placeholder="Default"
                    />
                </Col>
                <Col xl={12}>
                    <Label for="input-rounded2" class="form-label"
                        >Dotted Input</Label
                    >
                    <Input
                        type="text"
                        class="form-control border-dotted"
                        id="input-rounded2"
                        placeholder="Dotted"
                    />
                </Col>
                <Col xl={12}>
                    <Label for="input-rounded3" class="form-label"
                        >Dashed Input</Label
                    >
                    <Input
                        type="text"
                        class="form-control border-dashed"
                        id="input-rounded3"
                        placeholder="Dashed"
                    />
                </Col>
            </Row>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12} class="col-xl-12">
        <ShowCode title="Input Sizing" svelteCode={input4}>
            <Input
                class="form-control form-control-sm mb-3"
                type="text"
                placeholder=".form-control-sm"
                aria-label=".form-control-sm example"
            />
            <Input
                class="form-control mb-3"
                type="text"
                placeholder="Default input"
                aria-label="default input example"
            />
            <Input
                class="form-control form-control-lg"
                type="text"
                placeholder=".form-control-lg"
                aria-label=".form-control-lg example"
            />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!--ROW-START-->
<Row>
    <Col xl={12}>
        <ShowCode title="Overview" svelteCode={input5}>
            <Form>
                <div class="mb-3">
                    <Label for="exampleInputEmail1" class="form-label"
                        >Email address</Label
                    >
                    <Input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div class="mb-3">
                    <Label for="exampleInputPassword1" class="form-label"
                        >Password</Label
                    >
                    <Input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <Input type="checkbox" label="Check me out" class="mb-3 " />
                <SpkButton
                    buttontype="submit"
                    color="primary"
                    id="Password"
                    text="Submit"
                />
            </Form>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <ShowCode title="Form text" svelteCode={input6}>
                    <Label for="inputPassword5" class="form-label"
                        >Password</Label
                    >
                    <Input
                        type="password"
                        id="inputPassword5"
                        class="form-control"
                        aria-describedby="passwordHelpBlock"
                    />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                    </div>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode
                    title=" Inline text can use any typical inline HTML element with nothing more than the <span class='text-danger'>.form-text</span> class."
                    svelteCode={input7}
                >
                    <Row class=" g-3 align-items-center">
                        <div class="col-auto">
                            <Label for="inputPassword6" class="col-form-label"
                                >Password</Label
                            >
                        </div>
                        <div class="col-auto">
                            <Input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                            />
                        </div>
                        <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </Row>
                </ShowCode>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <ShowCode title="Disabled forms" svelteCode={input8}>
            <Form>
                <fieldset disabled>
                    <legend>Disabled fieldset example</legend>
                    <div class="mb-3">
                        <Label for="disabledTextInput" class="form-label"
                            >Disabled input</Label
                        >
                        <Input
                            type="text"
                            id="disabledTextInput"
                            class="form-control"
                            placeholder="Disabled input"
                        />
                    </div>
                    <div class="mb-3">
                        <Label for="disabledSelect" class="form-label"
                            >Disabled select menu</Label
                        >
                        <select id="disabledSelect" class="form-select">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                disabled
                            />
                            <Label
                                class="form-check-label"
                                for="disabledFieldsetCheck"
                            >
                                Can't check this
                            </Label>
                        </div>
                    </div>
                    <SpkButton
                        buttontype="submit"
                        color="primary"
                        text="Submit"
                    />
                </fieldset>
            </Form>
        </ShowCode>
    </Col>
</Row>
<!--ROW-END-->
