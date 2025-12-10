<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import { Editor } from "@tadashi/svelte-editor-quill";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import "quill/dist/quill.snow.css";
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
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Select from "svelte-select";
    import {
        AsignSelect,
        StatusSelect,
        PrioritySelect,
    } from "@/shared/data/dashboards/projects/projectcreatedata";
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

    let options1 = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
    ];

    let filterText = "";

    let value = ["Marketing", "Sales", "Development", "Design", "Research"];

    let items = [
       
    ];

    function handleFilter(e) {
        if (value?.find((i) => i.label === filterText)) return;
        if (e.detail.length === 0 && filterText.length > 0) {
            const prev = items.filter((i) => !i.created);
            items = [
                ...prev,
                { value: filterText, label: filterText, created: true },
            ];
        }
    }

    function handleChange(e) {
        items = items.map((i) => {
            delete i.created;
            return i;
        });
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>CreateProject | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Create Project"
    subTitle="Projects"
    activepage="Dashboards"
    page="Create Project"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Create Project</div>
            </CardHeader>
            <CardBody>
                <div class="row gy-3">
                    <Col xl={4}>
                        <Label for="input-label" class="">Project Name :</Label>
                        <Input
                            type="text"
                            class=""
                            id="input-label"
                            placeholder="Enter Project Name"
                        />
                    </Col>
                    <Col xl={4}>
                        <Label for="input-label11" class=""
                            >Project Manager :</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="input-label11"
                            placeholder="Project Manager Name"
                        />
                    </Col>
                    <Col xl={4}>
                        <Label for="input-label1" class=""
                            >Client / Stakeholder :</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="input-label1"
                            placeholder="Enter Client Name"
                        />
                    </Col>
                    <Col xl={12}>
                        <Label class="">Project Description :</Label>
                        <div id="project-descriptioin-editor">
                            <Editor
                                {options}
                                {data}
                                on:text-change={onTextChange}
                            />
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Label class="">Start Date :</Label>
                        <div class="form-group custom-date-picker">
                            <div class="input-group custom-input-group">
                                <div class="input-group-text text-muted">
                                    <i class="ri-calendar-line"></i>
                                </div>
                                <DateInput
                                    bind:value={date}
                                    class="form-control"
                                    format="yy-MM-dd HH:MM"
                                    closeOnSelection={true}
                                    timePrecision="minute"
                                    dynamicPositioning={true}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Label class="">End Date :</Label>
                        <div class="form-group custom-date-picker">
                            <div class="input-group custom-input-group">
                                <div class="input-group-text text-muted">
                                    <i class="ri-calendar-line"></i>
                                </div>
                                <DateInput
                                    bind:value={date1}
                                    class="form-control"
                                    format="yy-MM-dd HH:MM"
                                    closeOnSelection={true}
                                    timePrecision="minute"
                                    dynamicPositioning={true}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Label class="">Status :</Label>
                        <Select
                            items={StatusSelect}
                            class="default basic-multi-select"
                            value={StatusSelect[1]}
                            clearable={false}
                            showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Priority :</Label>
                        <Select
                            items={PrioritySelect}
                            class="default basic-multi-select"
                            value={PrioritySelect[1]}
                            clearable={false}
                            showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Assigned To</Label>
                        <Select
                            items={AsignSelect}
                            multiFullItemClearable
                            multiple
                            value={[AsignSelect[4], AsignSelect[1]]}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Tags</Label>
                        <Select
                            on:change={handleChange}
                            multiple
                            on:filter={handleFilter}
                            bind:filterText
                            bind:value
                            {items}
                            showChevron={false}
                            clearable={false}
                            placeholder="Add New Tags"
                        >
                            <div slot="item" let:item>
                                {item.created ? "Add new: " : ""}
                                {item.label}
                            </div>
                        </Select>
                    </Col>
                    <Col xl={12}>
                        <Label class="">Attachments</Label>
                        <FilePond
                            class="multiple-filepond"
                            name="filepond"
                            labelIdle={`Drag & Drop your file here or click`}
                            stylePanelLayout=" "
                            styleLoadIndicatorPosition="center bottom"
                            styleButtonRemoveItemPosition="center bottom"
                            allowMultiple={true}
                        />
                    </Col>
                </div>
            </CardBody>
            <CardFooter>
                <SpkButton
                    color=""
                    customClass="btn btn-primary-light btn-wave ms-auto float-end"
                    >Create Project</SpkButton
                >
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
