
<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="horizontal" data-nav-style="menu-hover" data-menu-position="fixed" data-theme-mode="light">
    <head>

        <?= $this->Html->charset() ?>
        
        <!-- Meta Data -->
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="Description" content="CakePHP Bootstrap Responsive Admin Web Dashboard Template">
        <meta name="Author" content="Spruko Technologies Private Limited">
        <meta name="keywords" content="admin bootstrap dashboard, admin panel bootstrap template, admin panel template, bootstrap dashboard, bootstrap template dashboard, cake php framework, cakephp admin, cakephp admin panel, cakephp bootstrap ui, cakephp ui, dashboard admin template, dashboard bootstrap template, dashboard design template, dashboard template bootstrap, user dashboard template.">
        
        <!-- Title -->
        <title>Vyzor - CakePHP Bootstrap 5 Premium Admin & Dashboard Template</title>

        <!-- Favicon -->
        <link rel="icon" href="<?php echo $this->Url->image('brand-logos/favicon.ico'); ?>" type="image/x-icon">

        <!-- Start::Styles -->
        <?= $this->element('landingpage/styles'); ?>
        <!-- End::Styles -->
        
    </head>
    
    <body class="landing-body">

        <!-- Start::main-switcher -->
        <?= $this->element('landingpage/switcher'); ?>	
        <!-- End::main-switcher -->

        <!-- page -->
        <div class="landing-page-wrapper">

            <!-- Start::main-header -->
            <?= $this->element('landingpage/main-header'); ?>
            <!-- End::main-header -->

            <!-- Start::main-sidebar -->
            <?= $this->element('landingpage/main-sidebar'); ?>
            <!-- End::main-sidebar -->

            <!-- Start::app-content -->
            <div class="main-content landing-main">

                <?= $this->fetch('content') ?>
                    
            </div>
            <!-- End::app-content -->

            <!-- Start::main-footer -->
            <?= $this->element('landingpage/footer'); ?>
            <!-- End::main-footer -->

        </div>

        <!-- Start::main-scripts -->
        <?= $this->element('landingpage/scripts'); ?>
        <!-- End::main-scripts -->

    </body>
</html>
