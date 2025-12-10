<script>
    import Editor from 'cl-editor/src/Editor.svelte';
    let html = '<h3>hello</h3>';
</script>

<Editor>
    {@html html}
</Editor>