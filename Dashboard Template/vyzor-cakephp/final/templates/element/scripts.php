
         <!-- Scroll To Top -->
         <div class="scrollToTop">
            <span class="arrow lh-1"><i class="ti ti-arrow-big-up fs-18"></i></span>
         </div>
         <div id="responsive-overlay"></div>
         <!-- Scroll To Top -->

         <!-- Popper JS -->
         <script src="libs/@popperjs/core/umd/popper.min.js"></script>

         <!-- Bootstrap JS -->
         <script src="libs/bootstrap/js/bootstrap.bundle.min.js"></script>

         <!-- Node Waves JS-->
         <script src="libs/node-waves/waves.min.js"></script>

         <!-- Simplebar JS -->
         <script src="libs/simplebar/simplebar.min.js"></script>
         <?= $this->Html->script(['simplebar']) ?>

         <!-- Auto Complete JS -->
         <script src="libs/@tarekraafat/autocomplete.js/autoComplete.min.js"></script>

         <!-- Color Picker JS -->
         <script src="libs/@simonwep/pickr/pickr.es5.min.js"></script>

         <!-- Date & Time Picker JS -->
         <script src="libs/flatpickr/flatpickr.min.js"></script>

        <!-- Sticky JS -->
        <?= $this->Html->script(['sticky']) ?>

        <!-- Defaultmenu JS -->
        <?= $this->Html->script(['defaultmenu.min']) ?>

        <?= $this->fetch('scripts') ?>

        <!-- Custom JS -->
        <?= $this->Html->script(['custom']) ?>

        <!-- Custom-Switcher JS -->
        <?= $this->Html->script(['custom-switcher.min']) ?>