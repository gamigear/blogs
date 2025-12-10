<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="vertical" data-theme-mode="light" data-header-styles="transparent" data-width="fullwidth" data-menu-styles="transparent" data-page-style="flat" data-toggled="close" data-vertical-style="doublemenu" data-toggled="double-menu-open">

    <head>

        <!-- Meta Data -->
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="Description" content="Codeigniter Bootstrap Responsive Admin Web Dashboard Template">
        <meta name="Author" content="Spruko Technologies Private Limited">
        <meta name="keywords" content="admin dashboard ui, admin panel bootstrap template, admin panel template, bootstrap codeigniter, bootstrap dashboard template, bootstrap framework, bootstrap template, ci codeigniter, codeigniter, codeigniter admin panel, codeigniter dashboard, codeigniter ui, framework codeigniter, php codeigniter, template codeigniter.">
    
        <!-- Title -->
        <title> Vyzor - Codeigniter Bootstrap 5 Premium Admin & Dashboard Template </title>

        <!-- Favicon -->
        <link rel="icon" href="<?php echo base_url('assets/images/brand-logos/favicon.ico'); ?>" type="image/x-icon">
       
        <!-- Start::Styles -->
        <?= $this->include('layouts/components/styles'); ?>
        <!-- End::Styles -->

    </head>    
    
    <body class="">

        <div class="progress-top-bar"></div>

        <!-- Start::main-switcher -->
        <?= $this->include('layouts/components/switcher'); ?>
        <!-- End::main-switcher -->

        <!-- Loader -->
        <div id="loader" >
            <img src="<?php echo base_url('assets/images/media/loader.svg'); ?>" alt="">
        </div>
        <!-- Loader -->

		<!-- page -->
        <div class="page">

			<!-- Start::main-header -->
            <?= $this->include('layouts/components/main-header'); ?>
			<!-- End::main-header -->

			<!-- Start::main-sidebar -->
            <?= $this->include('layouts/components/main-sidebar'); ?>
			<!-- End::main-sidebar -->

            <!-- Start::app-content -->
            <div class="main-content app-content">
                <div class="container-fluid page-container main-body-container">

                    <?= $this->renderSection('content'); ?>

                </div>
            </div>
            <!-- End::app-content -->

            <!-- Start::main-modal -->
            <?= $this->include('layouts/components/modal'); ?>
            <!-- End::main-modal -->

            <!-- Start::main-footer -->
            <?= $this->include('layouts/components/footer'); ?>
            <!-- End::main-footer -->

        </div> 
        <!-- End Page -->          

        <!-- Start::main-scripts -->
        <?= $this->include('layouts/components/scripts'); ?>
        <!-- End::main-scripts -->

    </body>

</html>