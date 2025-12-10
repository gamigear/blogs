<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import { Col, FormGroup, Label, Input } from "@sveltestrap/sveltestrap";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import { fileupload1 } from "@/shared/data/prism-code/formsprism";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );
</script>

<!-- Page Title -->
<svelte:head>
    <title>FileUploads | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="File Uploads"
    activepage="Forms"
    subTitle=" Form Elements"
    page="File Uploads"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<div class="row">
    <Col xl={12}>
        <ShowCode title="Bootstrap File Input" svelteCode={fileupload1}>
            <FormGroup class="mb-3 custom-file1">
                <Label>Default file input example</Label>
                <Input type="file" />
            </FormGroup>
            <FormGroup class="mb-3 custom-file1">
                <Label>Multiple files input example</Label>
                <Input type="file" multiple />
            </FormGroup>
            <FormGroup class="mb-3">
                <Label>Disabled file input example</Label>
                <Input type="file" disabled />
            </FormGroup>
            <FormGroup class="mb-3 custom-file2">
                <Label>Small file input example</Label>
                <Input type="file" bsSize="sm" />
            </FormGroup>
            <FormGroup class="mb-3">
                <Label>Large file input example</Label>
                <Input type="file" bsSize="lg" />
            </FormGroup>
        </ShowCode>
    </Col>
    <div class="col-xl-12">
        <h6 class="mb-3">Filepond:</h6>
        <div class="row">
            <div class="col-xl-12">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">Multiple Upload</div>
                    </div>
                    <div class="card-body">
                        <FilePond
                            class="multiple-filepond"
                            name="filepond"
                            labelIdle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
                            stylePanelLayout=" "
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                            allowMultiple={true}
                        />
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">Single Upload</div>
                    </div>
                    <div class="card-body">
                        <FilePond
                            class="single-fileupload"
                            labelIdle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
                            stylePanelLayout="compact circle"
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<div class="row">
    <div class="col-xl-12">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Dropzone</div>
            </div>
            <div class="card-body">
                <FilePond
                    class=""
                    labelIdle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
                    allowMultiple={true}
                />
            </div>
        </div>
    </div>
</div>
<!-- End:: row-2 -->
