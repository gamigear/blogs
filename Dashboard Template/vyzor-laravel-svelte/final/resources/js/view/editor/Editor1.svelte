<script>
    import Editor from "cl-editor/src/Editor.svelte";
    let html = `<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
              <p><br></p>
              <ol>
                  <li class="ql-size-normal">Write text select and edit with multiple options.</li>
                  <li class="">This is quill snow editor.</li>
                  <li class="">Easy to customize and flexible.</li>
              </ol>
              <p><br></p>
              <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>`;
</script>

<Editor {html} on:change={(evt) => (html = evt.detail)} />
