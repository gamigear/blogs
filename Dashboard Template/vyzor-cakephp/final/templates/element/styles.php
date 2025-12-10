
        <!-- Choices JS -->
        <script src="libs/choices.js/public/assets/scripts/choices.min.js"></script>

        <!-- Main Theme Js -->
        <?= $this->Html->script(['main']) ?>
        
        <!-- Bootstrap Css -->
        <link id="style" href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet" >

        <!-- Style Css -->
        <?= $this->Html->css(['styles']) ?>

        <!-- Icons Css -->
        <?= $this->Html->css(['icons']) ?>

        <!-- Node Waves Css -->
        <link href="libs/node-waves/waves.min.css" rel="stylesheet" > 

        <!-- Simplebar Css -->
        <link href="libs/simplebar/simplebar.min.css" rel="stylesheet" >
        
        <!-- Color Picker Css -->
        <link rel="stylesheet" href="libs/flatpickr/flatpickr.min.css">
        <link rel="stylesheet" href="libs/@simonwep/pickr/themes/nano.min.css">

        <!-- Choices Css -->
        <link rel="stylesheet" href="libs/choices.js/public/assets/styles/choices.min.css">

        <!-- FlatPickr CSS -->
        <link rel="stylesheet" href="libs/flatpickr/flatpickr.min.css">

        <!-- Auto Complete CSS -->
        <link rel="stylesheet" href="libs/@tarekraafat/autocomplete.js/css/autoComplete.css">
        
        <?= $this->fetch('styles') ?>