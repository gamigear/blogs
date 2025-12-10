<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="horizontal" data-nav-style="menu-hover" data-menu-position="fixed" data-theme-mode="light">

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
       
        <!-- styles code -->
        <?= $this->include('layouts/components/landingpage/styles'); ?>
        <!-- End styles -->

    </head>    
    
    <body class="landing-body">

        <!-- Start::main-switcher -->
        <?= $this->include('layouts/components/landingpage/switcher'); ?>
        <!-- End::main-switcher -->

		<!-- page -->
        <div class="landing-page-wrapper">

			<!-- Start::main-header -->
            <?= $this->include('layouts/components/landingpage/main-header'); ?>
			<!-- End::main-header -->

			<!-- Start::main-sidebar -->
            <?= $this->include('layouts/components/landingpage/main-sidebar'); ?>
			<!-- End::main-sidebar -->

            <!-- Start::app-content -->
            <div class="main-content landing-main">

                <?= $this->renderSection('content'); ?>

            </div>
            <!-- End::app-content -->

			<!-- Start::main-footer -->
            <?= $this->include('layouts/components/landingpage/footer'); ?>
			<!-- End::main-footer -->

        </div> 
        <!-- End Page -->          

        <!-- Start::main-scripts -->
        <?= $this->include('layouts/components/landingpage/scripts'); ?>
        <!-- End::main-scripts -->

    </body>

</html>