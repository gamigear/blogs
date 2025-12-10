<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import { Editor } from "@tadashi/svelte-editor-quill";
    import { DateInput } from "date-picker-svelte";
    import Select from "svelte-select";
    import {
        Availableselect,
        Brandselect,
        Categoryselect,
        Colorselect,
        Genderselect,
        Productselect,
        Publishselect,
        Sizeselect,
    } from "$lib/data/dashboards/ecommerce/addproductsdata";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );

    let date:null = null;
    let date1:null = null;

    const options = {
        theme: "snow",
    };

    let data: string = `<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
                                    <p><br></p>
                                    <ol>
                                        <li class="ql-size-normal">Write text select and edit with multiple options.</li>
                                        <li class="">This is quill snow editor.</li>
                                        <li class="">Easy to customize and flexible.</li>
                                    </ol>
                                    <p><br></p>
                                    <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
                                `;
    let text = "";
    let html = "";

    const onTextChange: any = (event: any) => {
        ({ text, html } = event?.detail ?? {});
        data = html;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>AddProduct | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Add Product"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Add Product"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Product Images</div>
                    </CardHeader>
                    <CardBody>
                        <FilePond
                            class="multiple-filepond"
                            name="filepond"
                            labelIdle={`Drag & Drop your file here or click`}
                            stylePanelLayout=" "
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                            allowMultiple={true}
                            maxFiles={6}
                            
                        />
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label
                            class="form-label text-muted mt-1 fs-13 mb-0 fw-normal"
                            >Upload 6 images, ensuring uniform size (max 2MB).
                            Changes can be made after 24 hours.
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Product Details</div>
                    </CardHeader>
                    <CardBody>
                        <Row class="gy-2">
                            <Col xl={12} class="custom-picker custom-date-picker">
                                <Label for="publish-date" class=""
                                    >Publish Date</Label
                                >
                                <DateInput
                                    bind:value={date}
                                    class="form-control"
                                    format="yy-MM-dd" 
                                    placeholder="Choose date"
                                    closeOnSelection={true}
                                />
                            </Col>
                            <Col xl={12} class="custom-picker custom-date-picker">
                                <Label for="publish-time" class=""
                                    >Publish Time</Label
                                >
                                <DateInput
                                    bind:value={date1}
                                    class="form-control"
                                    format="HH:mm"
                                    timePrecision="minute"
                                    placeholder="Choose Time"
                                    closeOnSelection={true}
                                />
                            </Col>
                            <Col xl={12}>
                                <Label for="product-status-add" class=""
                                    >Published Status</Label
                                >
                                <Select
                                    items={Publishselect}
                                    class="basic-multi-select"
                                    clearable={false}
                                    showChevron={true}
                                />
                            </Col>
                            <Col xl={12}>
                                <Label for="product-tags" class=""
                                    >Product Tags</Label
                                >
                                <Select
                                    items={Productselect}
                                    class="basic-multi-select"
                                    multiFullItemClearable
                                    multiple
                                    value={[Productselect[3], Productselect[0]]}
                                />
                            </Col>
                            <Col xl={12}>
                                <Label for="product-status-add1" class=""
                                    >Availability</Label
                                >
                                <Select
                                    items={Availableselect}
                                    class="basic-multi-select"
                                    searchable={false}
                                    clearable={false}
                                    showChevron={true}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Warrenty Documents</div>
                    </CardHeader>
                    <CardBody>
                        <FilePond
                            class="multiple-filepond"
                            name="filepond"
                            labelIdle={`Drag & Drop your file here or click`}
                            stylePanelLayout=" "
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                            allowMultiple={true}
                        />
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="form-label text-muted mt-1 fs-13 fw-normal mb-0">Upload warranty document (PDF/DOC, max 5MB).</label>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xl={9}>
        <Card class="custom-card shadow-none mb-0 border-0">
            <CardBody class="p-0">
                <Row class="gy-3">
                    <Col xl={12}>
                        <Label for="product-name-add" class=""
                            >Product Name</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="product-name-add"
                            placeholder="Name"
                        />
                        <Label
                            for="product-name-add"
                            class=" mt-1 fs-12 fw-normal text-muted mb-0"
                            >*Product Name should not exceed 30 characters</Label
                        >
                    </Col>
                    <Col xl={6}>
                        <Label for="product-category-add" class=""
                            >Category</Label
                        >
                        <Select
                            items={Categoryselect}
                            class="basic-multi-select"
                            clearable={false}
                            showChevron={true}
                            placeholder="Category"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="product-gender-add" class="">Gender</Label>
                        <Select
                            items={Genderselect}
                            class="basic-multi-select"
                            clearable={false}
                            showChevron={true}
                            placeholder="Select"
                        />
                    </Col>
                    <Col xl={6}>
                        <label for="product-size-add" class="">Size</label>
                        <Select
                            items={Sizeselect}
                            class="basic-multi-select"
                            clearable={false}
                            showChevron={true}
                            placeholder="Select"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="product-brand-add" class="">Brand</Label>
                        <Select
                            items={Brandselect}
                            class="basic-multi-select"
                            clearable={false}
                            showChevron={true}
                            placeholder="Select"
                        />
                    </Col>
                    <Col xl={6} class="color-selection">
                        <Label for="product-color-add" class="">Colors</Label>
                        <Select
                            items={Colorselect}
                            class="basic-multi-select"
                            placeholder="Select"
                            multiFullItemClearable
                            multiple
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="product-cost-add" class="">Enter Cost</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="product-cost-add"
                            placeholder="Cost"
                        />
                        <Label
                            for="product-cost-add"
                            class=" mt-1 fs-12 fw-normal text-muted mb-0"
                            >*Mention final price of the product</Label
                        >
                    </Col>
                    <Col xl={12}>
                        <Label for="product-description-add" class=""
                            >Product Description</Label
                        >
                        <Input
                            type="textarea"
                            class=""
                            id="product-description-add"
                            rows={2}
                        />
                        <Label
                            for="product-description-add"
                            class=" mt-1 fs-12 fw-normal text-muted mb-0"
                            >*Description should not exceed 500 letters</Label
                        >
                    </Col>
                    <Col xl={12}>
                        <Label class="">Product Features</Label>
                        <div id="product-features">
                            <Editor
                                {options}
                                {data}
                                on:text-change={onTextChange}
                            />
                        </div>
                    </Col>
                    <Col xl={4}>
                        <Label for="product-actual-price" class=""
                            >Actual Price</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="product-actual-price"
                            placeholder="Actual Price"
                        />
                    </Col>
                    <Col xl={4}>
                        <Label for="product-dealer-price" class=""
                            >Dealer Price</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="product-dealer-price"
                            placeholder="Dealer Price"
                        />
                    </Col>
                    <Col xl={4}>
                        <Label for="product-discount" class="">Discount</Label>
                        <Input
                            type="text"
                            class=""
                            id="product-discount"
                            placeholder="Discount in %"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="product-type" class="">Product Type</Label>
                        <Input
                            type="text"
                            class=""
                            id="product-type"
                            placeholder="Type"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="product-discount" class=""
                            >Item Weight</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="product-discount1"
                            placeholder="Weight in gms"
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
    <div
        class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end mt-3"
    >
        <SpkButton color="primary-light" customClass="me-2 mb-2 mb-sm-0"
            >Add Product<i class="bi bi-plus-lg ms-2"></i></SpkButton
        >
        <SpkButton color="success-light" customClass="mb-2 mb-sm-0"
            >Save Product<i class="bi bi-download ms-2"></i></SpkButton
        >
    </div>
</Row>

<!-- End:: row-1 -->
