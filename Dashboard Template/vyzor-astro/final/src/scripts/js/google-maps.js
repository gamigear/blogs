(function () {
  "use strict";
  let map
  let overlayMap
  let layerMaps
  let markerMaps
  async function initMap() {
    const { Map } = (await google.maps.importLibrary(
      "maps",
    ));

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    /* basic map */
    map = new Map(document.getElementById("google-map"), {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 8,
    });
    /* overlay map */
    overlayMap = new Map(document.getElementById("google-map-overlay"), {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 8,
    });

    // /* layeres map */

    layerMaps = new Map(document.getElementById("map-layers"), {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 3
    });

    markerMaps = new Map(document.getElementById("map-markers"), {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 3
    });
    const position = { lat: -12.043333, lng: -77.03 };

    const marker = new AdvancedMarkerElement({
      map: markerMaps,
      title: 'Lima',
      position: position,
    });

  }
  initMap();

})();