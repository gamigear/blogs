
<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="vertical" data-vertical-style="overlay" data-theme-mode="light" data-header-styles="light" data-menu-styles="light" data-toggled="close">
    <head>

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
        <?= $this->element('custom-styles'); ?>
        <!-- End::Styles -->
        
    </head>
    
    <body class="<?= isset($BodyClass) ? h($BodyClass) : '' ?>">

        <!-- Start::main-switcher -->
        <?= $this->element('custom-switcher'); ?>	
        <!-- End::main-switcher -->

        <?= $this->fetch('content') ?>

        <!-- Start::main-scripts -->
        <?= $this->element('custom-scripts'); ?>
        <!-- End::main-scripts -->

    </body>
    
</html>
