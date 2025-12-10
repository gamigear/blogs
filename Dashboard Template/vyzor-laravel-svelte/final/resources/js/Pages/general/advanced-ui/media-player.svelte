
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import Player from "svelte-react-player";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>MediaPlayer | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Pageheader
    homepage="Media Player"
    activepage="Advanced UI
"
    page="Media Player"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<div class="row">
    <div class="col-xl-12">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">VIDEO PLAYER</div>
            </div>
            <div class="card-body">
                <Player
                    url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                    light="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                    fluid
                />
            </div>
        </div>
    </div>
    <div class="col-xl-12">
        <div class="card custom-card overflow-hidden">
            <div class="card-header">
                <div class="card-title">YOUTUBE VIDEO</div>
            </div>
            <div class="card-body">
                <div class="plyr__video-embed" id="player1">
                    <Player
                        url="https://www.youtube.com/embed/-lDlbQ7DiCI?si=EerYCepJFDTb5xOl"
                        fluid
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-12">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">AUDIO PLAYER</div>
            </div>
            <div class="card-body">
                <Player
                    url="../../audio/perfect-beauty.mp3"
                    controls={true}
                    playing={false}
                    width="100%"
                    height="50px"
                />
            </div>
        </div>
    </div>
</div>
<!--End::row-1 -->
