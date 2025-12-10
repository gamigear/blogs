<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        dropdown1,
        datadropdown2,
        dropdown2,
        dropdown3,
        datadropdown8,
        dropdown15,
        dropdown16,
        dropdown25,
        dropdown27,
        dropdown28,
        dropdown29,
        dropdown17,
        dropdown21,
        dropdown22,
        dropdown23,
        dropdown24,
        dropdown18,
        dropdown19,
        dropdown20,
        datadropdown4,
        dropdown14,
        dropdown12,
        dropdown13,
        dropdown11,
        dropdown8,
        dropdown10,
        dropdown9,
        dropdown4,
        dropdown5,
        dropdown6,
        dropdown7,
        dropdown26,
    } from "$lib/components/common/prism-code/uielementsprim";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        Col,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        Row,
        Button,
    } from "@sveltestrap/sveltestrap";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import {
        SingleButtons,
        OutlineButtons,
        menuOptions,
        Dropdownoption,
    } from "$lib/data/uielements/dropdowndata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Dropdowns | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Dropdowns" activepage="UI Elements" page="Dropdowns" />
<!-- Page Header Close -->

<!--Start:: row-1-->
<Row>
    <Col xl={12}>
        <ShowCode title="Dropdowns" svelteCode={dropdown1}>
            <div class="btn-list d-flex align-items-center flex-wrap">
                <SpkDropdown
                    Color="primary"
                    Caret={true}
                    parent={`Dropdown button`}
                    option={Dropdownoption}
                />
                <SpkDropdown
                    Color="secondary"
                    Caret={true}
                    parent={`Dropdown link`}
                    option={Dropdownoption}
                />
            </div>
        </ShowCode>
    </Col>
</Row>
<!--End:: row-1-->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Single dropdown buttons"
            svelteCode={dropdown2}
            dataCode={datadropdown2}
        >
            <div class="btn-list">
                {#each SingleButtons as dropdown}
                    <div class="btn-group">
                        <SpkDropdown
                            Color={dropdown.class}
                            Caret={true}
                            parent={`Action`}
                            option={menuOptions}
                        />
                    </div>
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Rounded Button Dropdowns"
            svelteCode={dropdown3}
            dataCode={datadropdown2}
        >
            <div class="btn-list">
                {#each SingleButtons as dropdown}
                    <div class="btn-group">
                        <SpkDropdown
                            Color={dropdown.class}
                            Caret={true}
                            ToggleClass="rounded-pill"
                            parent={`Action`}
                            option={menuOptions}
                        />
                    </div>
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
            title="Outline Button Dropdowns"
            svelteCode={dropdown4}
            dataCode={datadropdown4}
        >
            <div class="btn-list">
                {#each OutlineButtons as dropdown}
                    <div class="btn-group me-0">
                        <SpkDropdown
                            Color={dropdown.class}
                            Caret={true}
                            parent={`Action`}
                            option={menuOptions}
                        />
                    </div>
                {/each}
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Rounded Outline Dropdowns"
            svelteCode={dropdown5}
            dataCode={datadropdown4}
        >
            <div class="btn-list">
                {#each OutlineButtons as dropdown}
                    <div class="btn-group me-0">
                        <SpkDropdown
                            Color={dropdown.class}
                            Caret={true}
                            ToggleClass="rounded-pill"
                            parent={`Action`}
                            option={menuOptions}
                        />
                    </div>
                {/each}
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Split buttons" svelteCode={dropdown6}>
            {#each SingleButtons as dropdown}
                <div class="btn-group my-1 split-btn-grp">
                    <button type="button" class={`btn btn-${dropdown.class}`}
                        >Action</button
                    >
                    <SpkDropdown
                        Color={dropdown.class}
                        Caret={true}
                        Split={true}
                        ToggleClass="dropdown-toggle me-2"
                        option={menuOptions}
                    />
                </div>
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Dropdown Sizing" svelteCode={dropdown7}>
            <div class="btn-group my-1 me-2">
                <Dropdown>
                    <DropdownToggle
                        color=""
                        class="btn btn-primary btn-lg dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Large button
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another action</DropdownItem>
                        <DropdownItem href="#!"
                            >Something else here</DropdownItem
                        >
                        <DropdownItem divider />
                        <DropdownItem href="#!">Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="btn-group my-1 me-2">
                <Dropdown>
                    <DropdownToggle
                        split
                        size="lg"
                        color="light"
                        class="btn  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Large split button
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#/action-1">Action</DropdownItem>
                        <DropdownItem href="#/action-2"
                            >Another action</DropdownItem
                        >
                        <DropdownItem href="#/action-3"
                            >Something else</DropdownItem
                        >
                        <DropdownItem divider />
                        <DropdownItem href="#!">Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="btn-group my-1 me-2">
                <Dropdown>
                    <DropdownToggle
                        size="sm"
                        color=""
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Small button
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another action</DropdownItem>
                        <DropdownItem href="#!"
                            >Something else here</DropdownItem
                        >
                        <DropdownItem divider />
                        <DropdownItem href="#!">Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="btn-group my-1 me-2">
                <Dropdown>
                    <DropdownToggle
                        split
                        size="sm"
                        color="light"
                        class="btn  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Small split button
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#/action-1">Action</DropdownItem>
                        <DropdownItem href="#/action-2"
                            >Another action</DropdownItem
                        >
                        <DropdownItem href="#/action-3"
                            >Something else</DropdownItem
                        >
                        <DropdownItem divider />
                        <DropdownItem href="#!">Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Dropup"
            svelteCode={dropdown8}
            dataCode={datadropdown8}
        >
            <div class="btn-group dropup my-1">
                <SpkDropdown
                    Color="primary"
                    Caret={true}
                    parent={`Dropup`}
                    option={menuOptions}
                    Direction={"up"}
                />
            </div>
            <div class="btn-group dropup split-btn-grp my-1">
                <button type="button" class="btn btn-info">
                    Split dropup
                </button>
                <SpkDropdown
                    Color="info"
                    Split={true}
                    Caret={true}
                    parent={``}
                    option={menuOptions}
                    Direction={"up"}
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title=" Dropup right"
            svelteCode={dropdown9}
            dataCode={datadropdown8}
        >
            <div class="btn-group dropend my-1">
                <SpkDropdown
                    Color="primary"
                    Caret={true}
                    parent={`Dropright`}
                    option={menuOptions}
                    Direction={"right"}
                />
            </div>
            <div class="btn-group split-btn-grp dropend my-1">
                <button type="button" class="btn btn-info">
                    Split dropend
                </button>
                <SpkDropdown
                    Color="info"
                    Split={true}
                    Caret={true}
                    parent={``}
                    option={menuOptions}
                    Direction={"right"}
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Active"
            svelteCode={dropdown11}
            dataCode={datadropdown8}
        >
            <SpkDropdown
                Color="primary"
                Caret={true}
                parent={`Dropstart`}
                option={menuOptions}
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Dropup left"
            svelteCode={dropdown10}
            dataCode={datadropdown8}
        >
            <div class="btn-group dropstart my-1">
                <SpkDropdown
                    Color="primary"
                    Caret={true}
                    parent={`Dropleft`}
                    option={menuOptions}
                    Direction={"left"}
                />
            </div>
            <div class="btn-group dropstart split-btn-grp-left my-1">
                <SpkDropdown
                    Color="info"
                    CustomClass="btn-group"
                    Split={true}
                    Caret={true}
                    parent={``}
                    option={menuOptions}
                    Direction={"left"}
                />
                <button type="button" class="btn btn-info">
                    Split dropend
                </button>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
    <Col xl={3}>
        <ShowCode
            title="Disabled"
            svelteCode={dropdown12}
            dataCode={datadropdown8}
        >
            <SpkDropdown
                Color="primary"
                Caret={true}
                parent={`Dropstart`}
                option={menuOptions}
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Auto close behavior"
            svelteCode={dropdown13}
            dataCode={datadropdown8}
        >
            <div class="btn-list">
                <div class="btn-group">
                    <SpkDropdown
                        Color="primary"
                        AutoClose={true}
                        Caret={true}
                        parent={` Default dropdown`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="secondary"
                        AutoClose="outside"
                        Caret={true}
                        parent={`Clickable outside`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="info"
                        AutoClose="inside"
                        Caret={true}
                        parent={`Clickable inside`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="warning"
                        AutoClose={false}
                        Caret={true}
                        parent={`Manual close`}
                        option={menuOptions}
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={3}>
        <ShowCode title=" dropdowns with Forms" svelteCode={dropdown14}>
            <Dropdown>
                <DropdownToggle
                    color="secondary"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    caret
                >
                    Dropdown
                </DropdownToggle>
                <DropdownMenu class="dropdown-menu">
                    <form
                        class="px-4 py-3"
                        on:submit={(e) => e.preventDefault()}
                    >
                        <div class="mb-3">
                            <label
                                for="exampleDropdownFormEmail1"
                                class="form-label">Email address</label
                            >
                            <input
                                type="email"
                                class="form-control"
                                id="exampleDropdownFormEmail1"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleDropdownFormPassword1"
                                class="form-label">Password</label
                            >
                            <input
                                type="password"
                                class="form-control"
                                id="exampleDropdownFormPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="dropdownCheck"
                                />
                                <label
                                    class="form-check-label"
                                    for="dropdownCheck"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button class="btn btn-primary">Sign in</button>
                    </form>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem class="dropdown-item" href="#!"
                        >New around here? Sign up</DropdownItem
                    >
                    <DropdownItem class="dropdown-item" href="#!"
                        >Forgot password?</DropdownItem
                    >
                </DropdownMenu>
            </Dropdown>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Dropdown menu centered"
            svelteCode={dropdown15}
            dataCode={datadropdown8}
        >
            <p class="card-title mb-3">
                Use <code>.dropdown-center</code> on the parent element.
            </p>
            <SpkDropdown
                CustomClass="dropdown-center"
                Color="primary"
                Caret={true}
                parent={`Centered dropdown`}
                option={menuOptions}
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title=" Dropup centered"
            svelteCode={dropdown16}
            dataCode={datadropdown8}
        >
            <p class="card-title mb-3">
                Use <code>.dropup-center</code>
                on the parent element.
            </p>
            <SpkDropdown
                CustomClass="dropup-center dropup"
                Color="secondary"
                Caret={true}
                parent={`Centered dropup`}
                option={menuOptions}
                Direction={"up"}
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Menu items"
            svelteCode={dropdown17}
            dataCode={datadropdown8}
        >
            <p class="card-title mb-3">
                You can use <code>&lt;a&gt;</code> or
                <code>&lt;button&gt;</code> as dropdown items.
            </p>
            <SpkDropdown
                CustomClass=""
                Color="info"
                Caret={true}
                parent={`Dropdown`}
                option={menuOptions}
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title=" Dropdowns options"
            svelteCode={dropdown18}
            dataCode={datadropdown8}
        >
            <p class="card-title mb-3">
                Use <code>data-bs-offset</code> or
                <code>data-bs-reference</code> to change the location of the dropdown.
            </p>
            <div class="d-flex align-items-center flex-wrap gap-2">
                <SpkDropdown
                    CustomClass="me-1"
                    Color="primary"
                    Caret={true}
                    parent={`Offset`}
                    option={menuOptions}
                />
                <div class="btn-group split-btn-grp">
                    <button type="button" class="btn btn-info">Reference</button
                    >
                    <SpkDropdown
                        CustomClass=""
                        Color="info"
                        Split={true}
                        Caret={true}
                        parent={``}
                        option={menuOptions}
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-7 -->

<!-- Start:: row-8 -->
<Row>
    <Col xl={9}>
        <ShowCode
            title=" Alignment options"
            svelteCode={dropdown19}
            dataCode={datadropdown8}
        >
            <div class="btn-list">
                <div class="btn-group">
                    <SpkDropdown
                        Color="primary"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={`Dropdown`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        end={true}
                        Color="secondary"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={`Right-aligned menu`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        end={true}
                        Color="info"
                        menucalss="dropdown-menu-lg-end"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={` Left,right-aligned lg`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        end={true}
                        Color="warning"
                        menucalss="dropdown-menu-end dropdown-menu-lg-start"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={`  Right-aligned, left-aligned lg`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group dropstart">
                    <SpkDropdown
                        end={true}
                        Color="success"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={`Dropstart`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group dropend">
                    <SpkDropdown
                        end={true}
                        Color="danger"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={`Dropend`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group dropup">
                    <SpkDropdown
                        end={true}
                        Color="teal"
                        ToggleClass="mb-0"
                        Caret={true}
                        parent={`Dropup`}
                        option={menuOptions}
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={3}>
        <ShowCode
            title="Dark Dropdowns"
            svelteCode={dropdown20}
            dataCode={datadropdown8}
        >
            <SpkDropdown
                theme="dark"
                menucalss="dropdown-menu-dark"
                Color="dark"
                ToggleClass="mb-0"
                Caret={true}
                parent={`Dropdown button`}
                option={Dropdownoption}
            />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-8 -->

<!-- Start:: row-9 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title=" Menu alignment"
            svelteCode={dropdown21}
            dataCode={datadropdown8}
        >
            <div class="btn-group">
                <SpkDropdown
                    end={true}
                    Color="primary"
                    Caret={true}
                    parent={`Right-aligned menu example`}
                    option={menuOptions}
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Responsive alignment end"
            svelteCode={dropdown22}
            dataCode={datadropdown8}
        >
            <div class="btn-group">
                <SpkDropdown
                    menucalss="dropdown-menu-lg-end"
                    ToggleClass="text-wrap"
                    Color="secondary"
                    Caret={true}
                    end={true}
                    parent={`Left-aligned but right aligned when large screen`}
                    option={menuOptions}
                />
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title=" Responsive alignment left"
            svelteCode={dropdown23}
            dataCode={datadropdown8}
        >
            <div class="btn-group">
                <SpkDropdown
                    menucalss="dropdown-menu-lg-start"
                    ToggleClass="text-wrap"
                    Color="info"
                    Caret={true}
                    parent={`Left-aligned but right aligned when large screen`}
                    option={menuOptions}
                />
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-9 -->

<!-- Start:: row-10 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title=" Custom Dropdown Menu's"
            svelteCode={dropdown24}
            dataCode={datadropdown8}
        >
            <div class="btn-list">
                <div class="btn-group">
                    <SpkDropdown
                        menucalss="dropdown-menu-primary"
                        Color="primary"
                        Caret={true}
                        parent={`Primary`}
                        option={Dropdownoption}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        menucalss="dropdown-menu-secondary"
                        Color="secondary"
                        Caret={true}
                        parent={`Secondary`}
                        option={Dropdownoption}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        menucalss="dropdown-item-warning"
                        Color="warning"
                        Caret={true}
                        parent={`Warning`}
                        option={Dropdownoption}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        menucalss="dropdown-item-info"
                        Color="info"
                        Caret={true}
                        parent={`Info`}
                        option={Dropdownoption}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        menucalss="dropmenu-light-success"
                        Color="success-light"
                        Caret={true}
                        parent={`Success`}
                        option={Dropdownoption}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        menucalss="dropmenu-light-danger"
                        Color="danger-light"
                        Caret={true}
                        parent={`Danger`}
                        option={Dropdownoption}
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Ghost Button Dropdowns"
            svelteCode={dropdown25}
            dataCode={datadropdown8}
        >
            <div class="btn-list">
                <div class="btn-group">
                    <SpkDropdown
                        Color="primary-ghost"
                        Caret={true}
                        parent={`Primary`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="secondary-ghost"
                        Caret={true}
                        parent={`Secondary`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="warning-ghost"
                        Caret={true}
                        parent={`Warning`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="info-ghost"
                        Caret={true}
                        parent={`Info`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="success-ghost"
                        Caret={true}
                        parent={`Success`}
                        option={menuOptions}
                    />
                </div>
                <div class="btn-group">
                    <SpkDropdown
                        Color="danger-ghost"
                        Caret={true}
                        parent={`Danger`}
                        option={menuOptions}
                    />
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-10 -->

<!-- Start:: row-11 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="  non-interactive dropdown items"
            svelteCode={dropdown26}
        >
            <p class="card-title mb-3">
                Use <code>.dropdown-item-text.</code> to create non-interactive dropdown
                items.
            </p>
            <div class="bd-example">
                <ul class="dropdown-menu">
                    <li>
                        <span class="dropdown-item-text"
                            >Dropdown item text</span
                        >
                    </li>
                    <li><a class="dropdown-item" href="#!">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#!">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#!"
                            >Something else here</a
                        >
                    </li>
                </ul>
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="  Dropdown Headers" svelteCode={dropdown27}>
            <p class="card-titlte mb-3">
                Add a <code>.dropdown-header</code> to label sections of actions
                in any dropdown menu.
            </p>
            <div class="bd-example">
                <ul class="dropdown-menu">
                    <li>
                        <h6 class="dropdown-header">Dropdown header</h6>
                    </li>
                    <li><a class="dropdown-item" href="#!">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#!">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#!"
                            >Something else here</a
                        >
                    </li>
                </ul>
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="  Dropdown Dividers" svelteCode={dropdown28}>
            <div class="bd-example">
                <ul class="dropdown-menu">
                    <li><a class="dropdown-header" href="#!">Heading</a></li>
                    <li><a class="dropdown-item" href="#!">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#!">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#!"
                            >Something else here</a
                        >
                    </li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a class="dropdown-item" href="#!">Separated link</a>
                    </li>
                </ul>
            </div>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Dropdown Menu Text" svelteCode={dropdown29}>
            <div class="bd-example">
                <div
                    class="dropdown-menu p-4 text-muted"
                    style="max-width: 200px;"
                >
                    <p>
                        Some example text that's free-flowing within the
                        dropdown menu.
                    </p>
                    <p class="mb-0">And this is more example text.</p>
                </div>
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-11 -->
