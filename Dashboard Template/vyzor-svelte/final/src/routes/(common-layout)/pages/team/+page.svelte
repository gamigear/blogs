<script lang="ts">
    import SpkTeamcard from "$lib/@spk/reusable-pages/spk-teamcard.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { TeamMembers } from "$lib/data/pages/teamdata";
    import { Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Team | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Team" activepage="Pages" page="Team" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row
    class="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1"
>
    {#each TeamMembers as idx}
        <div class="col">
            <SpkTeamcard member={idx} />
        </div>
    {/each}
</Row>

<!-- End:: row-1 -->
