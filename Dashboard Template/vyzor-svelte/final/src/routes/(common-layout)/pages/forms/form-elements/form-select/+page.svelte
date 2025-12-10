<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Col, Input, Row } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    import SpkBasicCard from "$lib/@spk/SpkBasicCard.svelte";
    import {
        formselect2,
        formselect1,
        formselect3,
        formselect5,
        formselect6,
        formselect4,
    } from "$lib/components/common/prism-code/formsprism";
    import {
        Multipleselectdata,
        Multipleselectdata1,
        groupeddata,
        Optionwithnosearch,
    } from "$lib/data/forms/formselectdata";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";

    interface Item {
        value: string;
        label: string;
        created?: boolean;
    }

    let items: Item[] = [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
        { value: "three", label: "Three" },
    ];

    let valuesPassing: Item[] = [items[0], items[1], items[2]];
    let filterText: string = "";

    function handleFilter(e: CustomEvent<Item[]>) {
        const exists = items.some(
            (i) => i.label.toLowerCase() === filterText.toLowerCase()
        );

        if (exists) return;

        if (e.detail.length === 0 && filterText.length > 0) {
            const newItem: Item = {
                value: filterText,
                label: filterText,
                created: true,
            };
            items = [...items, newItem];
        }
    }

    function handleChange(e: CustomEvent<Item[]>) {
        items = items.map(({ created, ...rest }) => rest);
    }
    interface Item1 {
        value: string;
        label: string;
        created?: boolean;
    }

    let items1: Item1[] = [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
        { value: "three", label: "Three" },
    ];

    let selectedValues: Item1[] = [];
    let filterText1: string = "";

    function handleFilter1(e: CustomEvent<Item1[]>) {
        const exists = items1.some(
            (i) => i.label.toLowerCase() === filterText1.toLowerCase(),
        );
        if (exists) return;

        if (e.detail.length === 0 && filterText1.length > 0) {
            const newItem: Item1 = {
                value: filterText1,
                label: filterText1,
                created: true,
            };
            items1 = [...items1, newItem];
        }
    }

    function handleChange1(e: CustomEvent<Item1[]>) {
        items1 = items1.map(({ created, ...rest }) => rest);
    }

    //  unique Email

    type EmailOption = {
        value: string;
        label: string;
        created?: boolean;
    };

    let filterTextEmail: string = "";
    let valueEmail: EmailOption[] = [
        { value: "abc@hotmail.com", label: "abc@hotmail.com" },
    ];

    let itemsEmail: EmailOption[] = [
        { value: "abc@hotmail.com", label: "abc@hotmail.com" },
    ];

    function isValidEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleFilterEmail(e: CustomEvent<EmailOption[]>) {
        const alreadyExists = itemsEmail.some(
            (i) => i.label === filterTextEmail,
        );
        const alreadySelected = valueEmail?.some(
            (i) => i.label === filterTextEmail,
        );

        if (
            !alreadyExists &&
            !alreadySelected &&
            isValidEmail(filterTextEmail)
        ) {
            itemsEmail = [
                ...itemsEmail.filter((i) => !i.created),
                {
                    value: filterTextEmail,
                    label: filterTextEmail,
                    created: true,
                },
            ];
        }
    }

    function handleChangeEmail(e: CustomEvent<EmailOption[]>) {
        valueEmail = e.detail;

        for (const v of valueEmail) {
            const exists = itemsEmail.find((i) => i.label === v.label);
            if (!exists) {
                itemsEmail = [...itemsEmail, { ...v, created: true }];
            }
        }

        itemsEmail = itemsEmail.map((i) => {
            delete i.created;
            return i;
        });
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>FormSelect | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Form- Select"
    activepage="Forms"
    subTitle=" Form Elements"
    page="Form- Select"
/>
<!-- Page Header Close -->

<!-- Start:: row-4 -->
<h6 class="fw-medium mb-2">Choices:</h6>
<Row>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <SpkBasicCard
                    cardProps="custom-card"
                    headerTitle="Multiple Select"
                    Headerprops="d-flex align-items-center justify-content-between"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <p class="fw-semibold mb-2">Default</p>
                        <Select
                            multiple
                            items={Multipleselectdata}
                            class="mb-2"
                            clearable={false}
                            multiFullItemClearable
                            value={[
                                Multipleselectdata[0].value,
                                Multipleselectdata[1].value,
                            ]}
                            name="choices-multiple-default"
                            id="choices-multiple-default"
                        />
                        <p class="fw-semibold mb-2">With Remove Button</p>
                        <Select
                            multiple
                            items={Multipleselectdata1}
                            class="mb-2"
                            showChevron={false}
                            clearable={false}
                            value={Multipleselectdata1[0].value}
                            name="choices-multiple-remove-button"
                            id="choices-multiple-remove-button"
                        />
                        <p class="fw-semibold mb-2">Option groups</p>
                        <Select
                            multiple
                            items={groupeddata}
                            class="mb-2"
                            multiFullItemClearable
                            value={groupeddata[0].value}
                            
                            name="choices-multiple-groups"
                            id="choices-multiple-groups"
                        />
                    </div>
                </SpkBasicCard>
            </Col>
            <Col xl={12}>
                <SpkBasicCard
                    cardProps="custom-card"
                    headerTitle="Passing Through Options"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <Select
    on:change={handleChange}
    on:filter={handleFilter}
    bind:filterText
    bind:value={valuesPassing}
    {items}
    id="choices-text-preset-values"
    multiFullItemClearable
    multiple
>
    <div slot="item" let:item>
        {item.created ? "Add new: " : ""}
        {item.label}
    </div>
</Select>
                    </div>
                </SpkBasicCard>
            </Col>
            <Col xl={12}>
                <SpkBasicCard
                    cardProps="custom-card"
                    headerTitle="Options added via config with no search"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <Select
                            items={Optionwithnosearch}
                            class="mb-2"
                            clearable={false}
                            value={Optionwithnosearch[0].value}
                            name="choices-single-no-search"
                            id="choices-single-no-search"
                            showChevron={true}
                        />
                    </div>
                </SpkBasicCard>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <SpkBasicCard
                    cardProps="custom-card"
                    headerTitle="Single Select"
                    Headerprops="d-flex align-items-center justify-content-between"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <p class="fw-semibold mb-2">Default</p>
                        <Select
                            items={Multipleselectdata}
                            class="mb-2"
                            clearable={false}
                            showChevron={true}
                            value={Multipleselectdata[0].value}
                            name="choices-single-default"
                            id="choices-single-default"
                        />
                        <p class="fw-semibold mb-2">Option groups</p>
                        <Select
                            items={groupeddata}
                            class="mb-2 form-control"
                            
                            showChevron={true}
                            clearable={false}
                            value={groupeddata[0].value}
                            name="choices-single-groups"
                            id="choices-single-groups"
                        />
                    </div>
                </SpkBasicCard>
            </Col>
            <Col xl={12}>
                <SpkBasicCard
                    cardProps="custom-card"
                    headerTitle="Email Address Only"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <Select
                            on:change={handleChangeEmail}
                            multiple
                            on:filter={handleFilterEmail}
                            bind:filterText={filterTextEmail}
                            bind:value={valueEmail}
                            items={itemsEmail}
                        >
                            <div slot="item" let:item>
                                {item.created ? "Add new email: " : ""}
                                {item.label}
                            </div>
                        </Select>
                    </div>
                </SpkBasicCard>
            </Col>
            <Col xl={12}>
                <SpkBasicCard
                    cardProps="custom-card"
                    headerTitle="  Passing Unique Values"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <Select
                            on:change={handleChange1}
                            multiFullItemClearable
                            multiple
                            on:filter={handleFilter1}
                            bind:filterText={filterText1}
                            bind:value={selectedValues}
                            items={items1}
                            id="choices-text-preset-values"
                        >
                            <div slot="item" let:item>
                                {item.created ? "Add new: " : ""}
                                {item.label}
                            </div>
                        </Select>
                    </div>
                </SpkBasicCard>
            </Col>
        </Row>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start::row-1 -->
<Row>
    <Col xl={4}>
        <ShowCode title="Default Select" svelteCode={formselect1}>
            <Input type="select" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode title="Disabled Select" svelteCode={formselect2}>
            <Input
                type="select"
                aria-label="Default select example"
                disabled={true}
            >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode title="Rounded Select" svelteCode={formselect3}>
            <Input
                type="select"
                class="form-select rounded-pill"
                aria-label="Default select example"
            >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
        </ShowCode>
    </Col>
</Row>
<!--End::row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={6}>
        <ShowCode title="Multiple Attribute Select" svelteCode={formselect4}>
            <select
                class="form-select"
                multiple
                aria-label="multiple select example"
            >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Using Size Attribute" svelteCode={formselect5}>
            <select
                class="form-select"
                size="4"
                aria-label="size 3 select example"
            >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Select Sizes" svelteCode={formselect6}>
            <Input
                type="select"
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-sm example"
            >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
            <Input
                type="select"
                class="form-select mb-3"
                aria-label="Default select"
            >
                <option selected>Open this select menu </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
            <Input
                type="select"
                class="form-select form-select-lg"
                aria-label=".form-select-lg example"
            >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->
