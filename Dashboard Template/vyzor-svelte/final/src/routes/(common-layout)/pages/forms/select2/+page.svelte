<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        options,
        Selectoption2,
        Selectoption3,
        Selectmaxoption,
        Selectoption5,
    } from "$lib/data/forms/select2data";
    import Select from "svelte-select";
    let value: any;

    $: maxItems = value?.length === 3;
    $: items = maxItems ? [] : [...Selectmaxoption];

    let selectDisabled = false; // Default value to enable the select
    // Function to disable the select
    const disableSelect = () => {
        selectDisabled = true;
    };

    // Function to enable the select
    const enableSelect = () => {
        selectDisabled = false;
    };
    let selected: null = null;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Select2 | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Select2"
    activepage="Forms"
    page="Select2"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<div class="row">
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Basic Select2</div>
            </div>
            <div class="card-body">
                <Select
                    items={options}
                    showChevron={true}
                    clearable={false}
                    value={options[0].value}
                    class="js-example-basic-single"
                    name="state"
                />
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Multiple Select</div>
            </div>
            <div class="card-body">
                <Select
                    items={Selectoption2}
                    multiple
                    showChevron={true}
                    clearable={false}
                    value={Selectoption2[0].value}
                    class="js-example-basic-multiple"
                    name="states[]"
                />
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Single Select With Placeholder</div>
            </div>
            <div class="card-body custom-f-select">
                <Select
                    items={Selectoption3}
                    showChevron={true}
                    clearable={true}
                    value={Selectoption3[0].value}
                    class="js-example-placeholder-single js-states form-control"
                />
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Multiple Select With Placeholder</div>
            </div>
            <div class="card-body">
                <Select
                    items={Selectmaxoption}
                    multiple
                    showChevron={true}
                    clearable={false}
                    value=""
                    class="js-example-placeholder-multiple js-states"
                />
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Templating</div>
            </div>
            <div class="card-body">
                <!-- svelte-ignore attribute_illegal_colon -->
                <Select
                    items={Selectoption5}
                    bind:value={selected}
                    clearable={true}
                    class="js-example-templating js-persons form-control"
                    let:item
                >
                    <!-- Render the HTML inside the label using {@html} -->
                    <span>{@html item.label}</span>
                </Select>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Templating Selection</div>
            </div>
            <div class="card-body">
                <Select
                    items={Selectoption5}
                    clearable={true}
                    class="select2-client-search form-control"
                />
            </div>
        </div>
    </div>
</div>
<!--End::row-1 -->

<!-- Start:: row-2 -->
<div class="row">
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Max Selections Limiting</div>
            </div>
            <div class="card-body">
                <Select {items} multiple bind:value>
                    <div class="empty" slot="empty">
                        {maxItems ? "Max 3 items" : "No options"}
                    </div>
                </Select>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Disabling a Select2 control</div>
            </div>
            <div class="card-body vstack gap-3">
                <Select
                    items={options}
                    disabled={selectDisabled}
                    showChevron={true}
                    clearable={false}
                    value={options[0].value}
                    class="js-example-disabled mb-3"
                    name="state"
                />
                <Select
                    multiple
                    items={options}
                    disabled={selectDisabled}
                    showChevron={true}
                    clearable={false}
                    value={options[0].value}
                    class="js-example-disabled-multi"
                    name="state"
                />
                <div>
                    <SpkButton
                        buttontype="button"
                        color="primary-light"
                        customClass="js-programmatic-enable"
                        text={`Enable`}
                        onclickfunc={enableSelect}
                    />
                    <SpkButton
                        buttontype="button"
                        color="primary"
                        customClass="js-programmatic-disable"
                        text={`Disable`}
                        onclickfunc={disableSelect}
                    />
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End:: row-2 -->
