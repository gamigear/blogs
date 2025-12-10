<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar5,
        avatar6,
        avatar7,
        avatar8,
        avatar9,
        avatardata1,
        avatardata2,
        avatardata3,
        avatardata4,
        avatardata5,
        avatardata6,
        avatardata7,
        avatardata8,
    } from "$lib/components/common/prism-code/utilitiesprism";
    import {
        Avatardata,
        Avataricon,
        Avatarinitial,
        Avatarnumber,
        Avataroffline,
        Avataronline,
        Avatarsize,
        Avatarstack,
    } from "$lib/data/utilities/avatars";
    import { Badge, Image } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Avatars | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Avatars" activepage="Utilities" page="Avatars" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="row">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title=" Avatars"
            svelteCode={avatar1}
            dataCode={avatardata1}
            customCardBodyClass="py-4"
        >
            {#each Avatardata as idx}
                <span class={`avatar me-2 ${idx.class}`}>
                    <img src={idx.src} alt="img" />
                </span>
            {/each}
        </ShowCode>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title={`  Avatar Sizes <p class="subtitle text-muted fs-12 fw-normal"> Avatars of different sizes </p>`}
            svelteCode={avatar2}
            dataCode={avatardata2}
            customCardBodyClass=""
        >
            {#each Avatarsize as idx}
                <span class={`avatar avatar-${idx.class} me-2`}>
                    <Image src={idx.src} alt="Avatar" />
                </span>
            {/each}
        </ShowCode>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title="Avatar With Icons<p class='subtitle text-muted fs-12 fw-normal'>  Avatar contains icons to perform respective action.</p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar3}
            dataCode={avatardata3}
        >
            {#each Avataricon as idx}
                <span class={`avatar avatar-${idx.class} me-2 avatar-rounded`}>
                    <Image src={idx.src} alt="img" />
                    <a
                        href="#!"
                        class={`badge bg-${idx.class1} rounded-pill avatar-badge`}
                        ><i class={`fe fe-${idx.icon}`}></i></a
                    >
                </span>
            {/each}
        </ShowCode>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title=" Avatar With Online Status Indicators<p class='subtitle text-muted fs-12 fw-normal'>  avatars having online status indicator.</p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar4}
            dataCode={avatardata4}
        >
            {#each Avataronline as idx}
                <span class={`avatar avatar-${idx.class} me-2 avatar-rounded`}>
                    <Image src={idx.src} alt="img" />
                </span>
            {/each}
        </ShowCode>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title="  Avatar With Offline Status Indicators<p class='subtitle text-muted fs-12 fw-normal'> avatars having a offline status indicator.</p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar5}
            dataCode={avatardata5}
        >
            {#each Avataroffline as idx}
                <span class={`avatar avatar-${idx.class} me-2 avatar-rounded`}>
                    <Image src={idx.src} alt="img" />
                </span>
            {/each}
        </ShowCode>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title=" Avatars With Number Badges<p class='subtitle text-muted fs-12 fw-normal'>   Avatar numbers indicates the no. of unread notififactions/messages. </p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar6}
            dataCode={avatardata6}
        >
            {#each Avatarnumber as idx}
                <span class={`avatar avatar-${idx.class} me-2 avatar-rounded`}>
                    <img src={idx.src} alt="img" />
                    <Badge
                        color=""
                        class={`badge rounded-pill bg-${idx.class1} avatar-badge`}
                        >{idx.data}</Badge
                    >
                </span>
            {/each}
        </ShowCode>
    </div>
</div>
<!-- End::row-1 -->

<!-- Start::row-3 -->
<div class="row">
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title=" Avatar With Initials <p class='subtitle text-muted fs-12 fw-normal'> Avatar contains intials when user profile doesn't exist.</p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar7}
            dataCode={avatardata7}
        >
            {#each Avatarinitial as idx}
                <span class={`avatar avatar-${idx.data} m-2 bg-${idx.color}`}>
                    {idx.data1}
                </span>
            {/each}
        </ShowCode>
    </div>
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title="Stacked Avatars<p class='subtitle text-muted fs-12 fw-normal'> Group of avatars stacked together.</p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar8}
            dataCode={avatardata8}
        >
            <div class="avatar-list-stacked">
                {#each Avatarstack as idx}
                    <span class="avatar">
                        <img src={idx.src} alt="img" />
                    </span>
                {/each}
                <a class="avatar bg-primary" href="#!"> +8 </a>
            </div>
        </ShowCode>
    </div>
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12">
        <ShowCode
            title="Rounded Stacked Avatars<p class='subtitle text-muted fs-12 fw-normal'> Group of avatars stacked together.</p>"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={avatar9}
            dataCode={avatardata8}
        >
            <div class="avatar-list-stacked">
                {#each Avatarstack as idx}
                    <span class="avatar avatar-rounded">
                        <img src={idx.src} alt="img" />
                    </span>
                {/each}
                <a
                        class="avatar bg-primary avatar-rounded"
                        href="#!"
                    >
                        +8
                    </a>
            </div>
        </ShowCode>
    </div>
</div>
<!-- End::row-3 -->
