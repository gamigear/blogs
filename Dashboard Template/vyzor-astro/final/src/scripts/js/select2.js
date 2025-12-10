import p1 from "../../assets/images/faces/select2/p-1.jpg";
import p2 from "../../assets/images/faces/select2/p-2.jpg";
import p3 from "../../assets/images/faces/select2/p-3.jpg";
import p4 from "../../assets/images/faces/select2/p-4.jpg";
import p5 from "../../assets/images/faces/select2/p-5.jpg";

// Build a lookup table that JS can read later
const imageMap = {
  "p-1": p1.src,
  "p-2": p2.src,
  "p-3": p3.src,
  "p-4": p4.src,
  "p-5": p5.src,
};

(function () {
  "use strict"

  /* basic select2 */
  $(document).ready(function() {
    $('.js-example-basic-single').select2({
    closeOnSelect: false
});
});
//   $('.js-example-basic-single').select2();

  /* multiple select */
  $('.js-example-basic-multiple').select2();

  /* single select with placeholder */
  $(".js-example-placeholder-single").select2({
      placeholder: "Select a state",
      allowClear: true,
      // dir: "ltr"
  });

  /* multiple select with placeholder */
  $(".js-example-placeholder-multiple").select2({
      placeholder: "Select a state"
  });

  /* templating */
function formatState(state) {
  if (!state.id) return state.text;

  const imgSrc = imageMap[state.element.value];
  if (!imgSrc) return state.text;

  return $(`
    <span>
      <img src="${imgSrc}" class="img-flag" />
      ${state.text}
    </span>
  `);
}

document.addEventListener("DOMContentLoaded", () => {
  $(".js-example-templating").select2({
    templateResult: formatState,
    templateSelection: formatState,
    placeholder: "Choose Customer",
  });
});

  /* with images */
 function selectClient(client) {
  if (!client.id) return client.text;

  const imgSrc = imageMap[client.element.value];
  if (!imgSrc) return client.text;

  return $(`
      <span>
          <img src="${imgSrc}" class="img-flag" />
          ${client.text}
      </span>
  `);
}

document.addEventListener("DOMContentLoaded", () => {
  $(".select2-client-search").select2({
    templateResult: selectClient,
    templateSelection: selectClient,
    placeholder: "Choose Client",
    escapeMarkup: m => m,
  });
});

  /* max selections limiting */
  $(".js-example-basic-multiple-limit-max").select2({
      maximumSelectionLength: 3,
      placeholder: "Choose Person",
  });

  /* Disablind select 2 controls */
  $(".js-example-disabled").select2();
  $(".js-example-disabled-multi").select2();

  $(".js-programmatic-enable").on("click", function () {
      $(".js-example-disabled").prop("disabled", false);
      $(".js-example-disabled-multi").prop("disabled", false);
  });
  $(".js-programmatic-disable").on("click", function () {
      $(".js-example-disabled").prop("disabled", true);
      $(".js-example-disabled-multi").prop("disabled", true);
  });

  /*  for rtl */
  document.querySelector("#switcher-rtl").addEventListener("click",()=>{
      $('.js-example-basic-single').select2();
      $(".js-example-placeholder-single").select2({
          placeholder: "Select a state",
          allowClear: true,
          dir: "rtl"
      });


      /* basic select2 */
  $('.js-example-basic-single').select2({
      dir: "rtl"
  });

  /* multiple select */
  $('.js-example-basic-multiple').select2({
      dir: "rtl"
  });

  /* single select with placeholder */
  $(".js-example-placeholder-single").select2({
      placeholder: "Select a state",
      allowClear: true,
      dir: "rtl"
  });

  /* multiple select with placeholder */
  $(".js-example-placeholder-multiple").select2({
      placeholder: "Select a state",
      dir: "rtl"
  });

  /* templating */
  function formatState(state) {
      if (!state.id) {
          return state.text;
      }
      var baseUrl = "../assets/images/faces/select2";
      var $state = $(
          '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
      );
      return $state;
  };
  $(".js-example-templating").select2({
      templateResult: formatState,
      placeholder: "Choose Customer",
      dir: "rtl"
  });

  /* with images */
  function selectClient(client) {
      if (!client.id) { return client.text; }
      var $client = $(
          '<span><img src="../assets/images/faces/select2/' + client.element.value.toLowerCase() + '.jpg" /> '
          + client.text + '</span>'
      );
      return $client;
  };
  $(".select2-client-search").select2({
      templateResult: selectClient,
      templateSelection: selectClient,
      placeholder: "Choose Client",
      dir: "rtl",
      escapeMarkup: function (m) { return m; }
  });

  /* max selections limiting */
  $(".js-example-basic-multiple-limit-max").select2({
      maximumSelectionLength: 3,
      placeholder: "Choose Person",
      dir: "rtl"
  });

  /* Disablind select 2 controls */
  $(".js-example-disabled").select2({
      dir: "rtl"
  });
  $(".js-example-disabled-multi").select2({
      dir: "rtl"
  });

  $(".js-programmatic-enable").on("click", function () {
      $(".js-example-disabled").prop("disabled", false);
      $(".js-example-disabled-multi").prop("disabled", false);
  });
  $(".js-programmatic-disable").on("click", function () {
      $(".js-example-disabled").prop("disabled", true);
      $(".js-example-disabled-multi").prop("disabled", true);
  });
      
  })
  
  /*for ltr */
  document.querySelector("#switcher-ltr").addEventListener("click",()=>{
      /* single select with placeholder */
      $(".js-example-placeholder-single").select2({
          placeholder: "Select a state",
          allowClear: true,
          dir: "ltr"
      });

      /* multiple select */
      $('.js-example-basic-multiple').select2({
          dir: "ltr"
      });

       /* basic select2 */
      $('.js-example-basic-single').select2({
          dir: "ltr"
      });

      /* multiple select with placeholder */
      $(".js-example-placeholder-multiple").select2({
          placeholder: "Select a state",
          dir: "ltr"
      });
      /* templating */
      $(".js-example-templating").select2({
          dir: "ltr"
      });
      $(".select2-client-search").select2({
          dir: "ltr",
      });
      /* max selections limiting */
      $(".js-example-basic-multiple-limit-max").select2({
          maximumSelectionLength: 3,
          placeholder: "Choose Person",
          dir: "ltr"
      });
      /* Disablind select 2 controls */
      $(".js-example-disabled").select2({
          dir: "ltr"
      });
      $(".js-example-disabled-multi").select2({
          dir: "ltr"
      });
  })

   /*for Reset */
   document.querySelector("#reset-all").addEventListener("click",()=>{
    /* single select with placeholder */
    $(".js-example-placeholder-single").select2({
        placeholder: "Select a state",
        allowClear: true,
        dir: "ltr"
    });

    /* multiple select */
    $('.js-example-basic-multiple').select2({
        dir: "ltr"
    });

     /* basic select2 */
    $('.js-example-basic-single').select2({
        dir: "ltr"
    });

    /* multiple select with placeholder */
    $(".js-example-placeholder-multiple").select2({
        placeholder: "Select a state",
        dir: "ltr"
    });
    /* templating */
    $(".js-example-templating").select2({
        dir: "ltr"
    });
    $(".select2-client-search").select2({
        dir: "ltr",
    });
    /* max selections limiting */
    $(".js-example-basic-multiple-limit-max").select2({
        maximumSelectionLength: 3,
        placeholder: "Choose Person",
        dir: "ltr"
    });
    /* Disablind select 2 controls */
    $(".js-example-disabled").select2({
        dir: "ltr"
    });
    $(".js-example-disabled-multi").select2({
        dir: "ltr"
    });
})

})();