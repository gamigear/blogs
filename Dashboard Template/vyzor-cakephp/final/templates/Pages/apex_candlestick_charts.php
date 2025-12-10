
<?php $this->start('styles'); ?>



<?php $this->end(); ?>
	
                    <!-- Start::page-header -->
                    <div class="page-header-breadcrumb mb-3">
                        <div class="d-flex align-center justify-content-between flex-wrap">
                            <h1 class="page-title fw-medium fs-18 mb-0">Apex Candlestick Charts</h1>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="javascript:void(0);">
                                        Charts
                                    </a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="javascript:void(0);">
                                        Apex Charts
                                    </a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Apex Candlestick Charts</li>
                            </ol>
                        </div>
                    </div>
                    <!-- End::page-header -->

                    <!-- Start::row-1 -->
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Basic Candlestick Chart</div>
                                </div>
                                <div class="card-body">
                                    <div id="candlestick-basic"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Candlestick Synced With Brush Chart</div>
                                </div>
                                <div class="card-body">
                                    <div id="chart-candlestick"></div>
                                    <div id="chart-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Candlestick With Category X-axis</div>
                                </div>
                                <div class="card-body">
                                    <div id="candlestick-categoryx"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">Candlestick With Line Chart</div>
                                </div>
                                <div class="card-body">
                                    <div id="candlestick-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End::row-1 -->

<?php $this->start('scripts'); ?>
	
        <!-- Apex Charts JS -->
        <script src="libs/apexcharts/apexcharts.min.js"></script>

        <!-- Used For Candlestick Synced With Brush Chart -->
        <?= $this->Html->script(['apexcharts-candlestick-seriesdata']) ?>

        <!-- Used For Candlestick With Category X-axis Chart-->
        <?= $this->Html->script(['apexcharts-dayjs.min']) ?>

        <!-- Internal Apex Candlestick Charts JS -->
        <?= $this->Html->script(['apexcharts-candlestick']) ?>

<?php $this->end(); ?>
