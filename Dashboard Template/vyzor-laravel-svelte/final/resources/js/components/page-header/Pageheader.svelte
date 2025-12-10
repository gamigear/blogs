<script>
    export let homepage = "";
    export let activepage = "";
    export let page = "";
    export let subTitle = "";
</script>

<div class="mb-3 page-header-breadcrumb">
    <div class="d-flex align-center justify-content-between flex-wrap gap-2">
        <h1 class="page-title fw-medium fs-18 mb-0">{homepage}</h1>
        <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#!">{activepage}</a></li>
            {#if subTitle}
                <li class="breadcrumb-item">
                    <a href="#!">{subTitle}</a>
                </li>
            {/if}
            <li class="breadcrumb-item active" aria-current="page">{page}</li>
        </ol>
    </div>
</div>

<style>
    /* Add any specific styles you need here */
</style>
