<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import { Editor } from "@tadashi/svelte-editor-quill";
    import Editor1 from "./Editor1.svelte";
    import SpkBasicCard from "$lib/@spk/SpkBasicCard.svelte";

        const options = {
            theme: "snow",
        };

    let data:string = `<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
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

    const onTextChange:any = (event:any) => {
        ({ text, html } = event?.detail ?? {});
        data = html;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>SunEditor | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

  <!-- Page Header -->
  <Pageheader homepage='Quill Editor' activepage='Form Editors' page='Quill Editor' />
  <!-- Page Header Close -->

  <!-- Start:: row-1 -->
<Row >
    <Col xl={12}>
        <SpkBasicCard cardProps="custom-card" headerTitle="  Svelte Editor Quill">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="editor"> <Editor {options} {data} on:text-change={onTextChange} /></div>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <SpkBasicCard cardProps="custom-card" headerTitle="Cl-editor">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="editor1"> <Editor1 /> </div>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-2 -->
