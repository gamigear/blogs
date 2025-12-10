
<?php $this->start('styles'); ?>

        <!-- Leaflet Maps CSS -->
        <link rel="stylesheet" href="libs/leaflet/leaflet.css">

<?php $this->end(); ?>
	
                    <!-- Start::page-header -->
                    <div class="page-header-breadcrumb mb-3">
                        <div class="d-flex align-center justify-content-between flex-wrap">
                            <h1 class="page-title fw-medium fs-18 mb-0">Leaflet Maps</h1>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="javascript:void(0);">Maps</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Leaflet Maps</li>
                            </ol>
                        </div>
                    </div>
                    <!-- End::page-header -->

                    <!-- Start::row-1 -->
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Leaflet Map</div>
                                </div>
                                <div class="card-body">
                                    <div id="map"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Map With Markers,circles and Polygons</div>
                                </div>
                                <div class="card-body">
                                    <div id="map1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Map With Popup</div>
                                </div>
                                <div class="card-body">
                                    <div id="map-popup"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Map With Custom Icon</div>
                                </div>
                                <div class="card-body">
                                    <div id="map-custom-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Interactive Choropleth Map</div>
                                </div>
                                <div class="card-body">
                                    <div id="interactive-map"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End::row-1 -->

<?php $this->start('scripts'); ?>
	
        <!-- Leaflet Maps JS -->
        <script src="libs/leaflet/leaflet.js"></script>
        <?= $this->Html->script(['leaflet']) ?>

<?php $this->end(); ?>
