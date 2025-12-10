<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import TagsInput from "svelte-tags-input";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { TelInput, normalizedCountries } from "svelte-tel-input";
    import type { CountryCode, E164Number } from "svelte-tel-input/types";
    import Select from "svelte-select";
    let country: CountryCode | null = "US";
 let value: E164Number | null = '+36301234567';
    //   tag Inputs
    let tag1=['tag2']
    let tags = ["CSS", "HTML","JAVASCRIPT"];
    let tags2=["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"]

     const Tagifyselectdata = [
    { value: "First option", label: "First option" },
    { value: "second option", label: "second option" },
    { value: "third option", label: "third option" },

];
</script>

<!-- Page Title -->
<svelte:head>
    <title>FormAdvanced | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>

<!-- Page Header -->
<Pageheader homepage="Form Advanced" activepage="Forms" page="Form Advanced" />
<!-- Page Header Close -->



<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">TAGIFY JS</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3">
                    <Col xl={6}>
                        <Label class="form-label d-block">Basic Tagify</Label>
                        <TagsInput bind:tags={tag1} />
                    </Col>
                    <Col xl={6}>
                        <Label class="form-label d-block"
                            >Tagify With Custom Suggestions</Label
                        >
                        <TagsInput bind:tags  />
                    </Col>
                    <Col xl={6}>
                        <Label class="form-label d-block"
                            >Disabled User Input</Label
                        >
                        <Input
                            name="tags-disabled-user-input"
                            placeholder="Select tags from the list"
                            class="form-control"
                            disabled
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="form-label d-block">Only Unique</Label>
                        <TagsInput bind:tags={tags2} onlyUnique={true} />
                    </Col>
                    <Col xl={12}>
                        <Label class="form-label d-block"
                            >Tagify Single-Value Select</Label
                        >
                        <Select
                        items={Tagifyselectdata}
                        showChevron={true}
                        clearable={false}
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">TELEPHONE INPUT</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-4">
                    <Col xl={3} class="">
                        <Label for="phone" class="form-label d-block"
                            >Basic Telephone Input</Label
                        >
                        <label for="country" class="mb-2">Select Country:</label>
                        <div class="dropdown-wrapper d-inline-flex gap-2 flex-wrap flex-xl-nowrap">
                            <select
                                id="country"
                                bind:value={country}
                                class="country-select form-select"
                            >
                                <option value={null} hidden>Choose</option>
                                {#each normalizedCountries as c (c.id)}
                                    <option value={c.iso2}>
                                        {c.name} (+{c.dialCode})
                                    </option>
                                {/each}
                            </select>
                            <TelInput bind:value bind:country class="tel-input form-control" />
                        </div>

                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- Page Title Close -->

