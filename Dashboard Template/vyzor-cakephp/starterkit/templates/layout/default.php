
<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="vertical" data-theme-mode="light" data-header-styles="transparent" data-width="fullwidth" data-menu-styles="transparent" data-page-style="flat" data-toggled="close" data-vertical-style="doublemenu" data-toggled="double-menu-open">
    
    <head>

        <!-- Meta Data -->
        <meta charset="UTF-888">
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
        <?= $this->element('styles'); ?>
        <!-- End::Styles -->
        
    </head>
    
    <body>

        <div class="progress-top-bar"></div>

        <!-- Start::main-switcher -->
        <?= $this->element('switcher'); ?>	
        <!-- End::main-switcher -->

        <!-- Loader -->
        <div id="loader" >
            <img src="<?php echo $this->Url->image('media/loader.svg'); ?>" alt="">
        </div>
        <!-- Loader -->

        <div class="page">

            <!-- Start::main-header -->
            <?= $this->element('main-header'); ?>
            <!-- End::main-header -->

            <!-- Start::main-sidebar -->
            <?= $this->element('main-sidebar'); ?>
            <!-- End::main-sidebar -->

            <!-- Start::app-content -->
            <div class="main-content app-content">
                <div class="container-fluid page-container main-body-container">

                    <?= $this->fetch('content') ?>
                    
                </div>
            </div>
            <!-- End::app-content -->

            <!-- Start::main-modal -->
            <?= $this->element('modal'); ?>
            <!-- End::main-modal -->

            <!-- Start::main-footer -->
            <?= $this->element('footer'); ?>
            <!-- End::main-footer -->

        </div>

        <!-- Start::main-scripts -->
        <?= $this->element('scripts'); ?>
        <!-- End::main-scripts -->

    </body>
    
</html>
