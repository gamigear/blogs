<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import { Editor } from "@tadashi/svelte-editor-quill";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import "quill/dist/quill.snow.css";
    import {
        BlogCategory,
        Publish,
        Published,
    } from "@/shared/data/pages/blog/createblogdata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { DateInput } from "date-picker-svelte";
    import Select from "svelte-select";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );

    //  date

    let date = new Date();
    let date1 = new Date();
    const options = {
        theme: "snow",
    };

    let data = `<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
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

    const onTextChange = (event) => {
        ({ text, html } = event?.detail ?? {});
        data = html;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>CreateBlog | Vyzor - Svelte Admin & Dashboard Template</title>
    <!-- <link rel="stylesheet" href="https://unpkg.com/quill@2.0.2/dist/quill.snow.css" crossorigin="anonymous" /> -->
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Blog Create"
    subTitle="Blog"
    activepage="Pages"
    page="Blog Create"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xxl={12} xl={12} lg={12} md={12} sm={12} class="">
        <Card class="custom-card">
            <CardHeader class="">
                <div class="card-title">New Blog</div>
            </CardHeader>
            <CardBody>
                <div class="row gy-3">
                    <Col xl={12}>
                        <Label for="blog-title" class="">Blog Title</Label>
                        <Input
                            type="text"
                            class=""
                            id="blog-title"
                            placeholder="Blog Title"
                        />
                    </Col>
                    <Col xl={12}>
                        <Label for="blog-category" class="">Blog Category</Label
                        >
                        <Select
                            items={BlogCategory}
                            clearable={false}
                            showChevron={true}
                            placeholder="Select Category"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="blog-author" class="">Blog Author</Label>
                        <Input
                            type="text"
                            class=""
                            id="blog-author"
                            placeholder="Enter Name"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="blog-author-email" class="">Email</Label>
                        <Input
                            type="text"
                            class=""
                            id="blog-author-email"
                            placeholder="Enter Email"
                        />
                    </Col>
                    <Col xl={6} class="custom-picker">
                        <Label for="publish-date" class="">Publish Date</Label>
                        <DateInput
                            bind:value={date}
                            class="form-control custom-date-picker"
                            format="yy-MM-dd"
                            closeOnSelection={true}
                        />
                    </Col>
                    <Col xl={6} class="custom-picker">
                        <Label for="publish-time" class="">Publish Time</Label>
                        <DateInput
                            bind:value={date1}
                            class="form-control custom-date-picker"
                            format="HH:mm"
                            timePrecision="minute"
                            closeOnSelection={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="product-status-add" class=""
                            >Published Status</Label
                        >
                        <Select
                            items={Published}
                            clearable={false}
                            showChevron={true}
                            placeholder="Select"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="blog-tags" class="">Blog Tags</Label>
                        <Select
                            multiple
                            items={Publish}
                            multiFullItemClearable
                            clearable={false}
                            showChevron={true}
                            placeholder="Select"
                            value={[Publish[0].value, Publish[3].value]}
                        />
                    </Col>
                    <Col xl={12}>
                        <Label class="">Blog Content</Label>
                        <div id="blog-content">
                            <Editor
                                {options}
                                {data}
                                on:text-change={onTextChange}
                            />
                        </div>
                    </Col>
                    <Col xl={12} class="blog-images-container">
                        <Label for="blog-author-email" class=""
                            >Blog Images</Label
                        >
                        <FilePond
                            class="multiple-filepond"
                            name="filepond"
                            labelIdle={`Drag & Drop your files or <span class="filepond--label-action">Browse</span>`}
                            stylePanelLayout=" "
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                            allowMultiple={true}
                        />
                    </Col>
                    <Col xl={12}>
                        <Label class="">Blog Type</Label>
                        <div class="d-flex align-items-center">
                            <div class="form-check me-3">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="blog-type"
                                    id="blog-free1"
                                    defaultChecked
                                />
                                <label
                                    class="form-check-label"
                                    for="blog-free1"
                                >
                                    Free
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="blog-type"
                                    id="blog-paid1"
                                />
                                <label
                                    class="form-check-label"
                                    for="blog-paid1"
                                >
                                    Paid
                                </label>
                            </div>
                        </div>
                    </Col>
                </div>
            </CardBody>
            <CardFooter>
                <div class="btn-list text-end">
                    <SpkButton
                        buttontype="button"
                        color="light"
                        customClass="btn btn-sm">Save As Draft</SpkButton
                    >
                    <SpkButton
                        buttontype="button"
                        color="primary"
                        customClass="btn btn-sm">Post Blog</SpkButton
                    >
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
