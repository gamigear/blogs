
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script >
  import { onMount, onDestroy } from "svelte";
  import Pageheader from "@/components/page-header/Pageheader.svelte";
  let mapElement;
  let map;

  onMount(async () => {
      const leaflet = await import("leaflet");

      map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "© OpenStreetMap",
        })
        .addTo(map);
  });

  // maps with markers circles and polygons

  let shapesmap;

  //   const customIcon = leaflet.icon({
  //   iconUrl: '../images/brand-logos/marker-icon.png',  // your icon file location
  //   iconSize: [38, 38],                    // size of your icon
  //   iconAnchor: [19, 38],                  // point of the icon which corresponds to marker's location
  //   popupAnchor: [0, -38]                  // point from which the popup should open relative to the iconAnchor
  // });

  onMount(async () => {
      const leaflet = await import("leaflet");

      map = leaflet.map(shapesmap).setView([51.505, -0.09], 13);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',
        })
        .addTo(map);

      // Create the custom icon
      const customIcon = leaflet.icon({
        iconUrl: "../images/brand-logos/marker-icon.png", // adjust path accordingly
        iconSize: [25, 41],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
      });

      // Use the custom icon for the marker
      var marker = leaflet
        .marker([51.5, -0.09], { icon: customIcon })
        .addTo(map);

      var circle = leaflet
        .circle([51.508, -0.11], {
          color: "#d77cf7",
          fillColor: "#d77cf7",
          fillOpacity: 0.5,
          radius: 500,
        })
        .addTo(map);

      var polygon = leaflet
        .polygon(
          [
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
          ],
          {
            color: "#e6533c",
            fillColor: "#e6533c",
          },
        )
        .addTo(map);
  });

  // maps with popup
  let popupmap;
  onMount(async () => {
      const leaflet = await import("leaflet");

      map = leaflet.map(popupmap).setView([51.505, -0.09], 13);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "© OpenStreetMap",
        })
        .addTo(map);

      // Create the custom icon
      const customIcon = leaflet.icon({
        iconUrl: "../images/brand-logos/marker-icon.png", // adjust path accordingly
        iconSize: [25, 41],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
      });

      var marker = leaflet
        .marker([51.5, -0.09], { icon: customIcon })
        .addTo(map);
      var circle = leaflet
        .circle([51.508, -0.11], {
          color: "#ffc102",
          fillColor: "#ffc102",
          fillOpacity: 0.5,
          radius: 500,
        })
        .addTo(map);
      var polygon = leaflet
        .polygon(
          [
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
          ],
          {
            color: "#5b67c7",
            fillColor: "#5b67c7",
          },
        )
        .addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      circle.bindPopup("I am a circle.");
      polygon.bindPopup("I am a polygon.");
      var popup = L.popup()
        .setLatLng([51.513, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(map);
  });

  // maps with custom icon

  let customicon;

  onMount(async () => {
      const leaflet = await import("leaflet");

      map = leaflet.map(customicon).setView([51.505, -0.09], 13);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "© OpenStreetMap",
        })
        .addTo(map);

      var greenIcon = leaflet.icon({
        iconUrl: "../images/brand-logos/desktop-logo.png",
        iconSize: [120, 40], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });
      leaflet.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
  });

  // interactive chloropleth map

  let geomap;

  onMount(async () => {
      const leaflet = await import("leaflet");

      map = leaflet.map(geomap).setView([37.8, -96], 4);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);
  });

  onDestroy(async () => {
    if (map) {
      map.remove();
    }
  });
</script>

<!-- Page Title -->
<svelte:head>
  <title>LeafletMaps | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Leaflet Maps" activepage=" Maps" page="Leaflet Maps" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<div class="row">
  <div class="col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">Leaflet Map</div>
      </div>
      <div class="card-body">
        <div id="map" bind:this={mapElement}></div>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">Map With Markers,circles and Polygons</div>
      </div>
      <div class="card-body">
        <div id="map1" bind:this={shapesmap}></div>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">Map With Popup</div>
      </div>
      <div class="card-body">
        <div id="map-popup" bind:this={popupmap}></div>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">Map With Custom Icon</div>
      </div>
      <div class="card-body">
        <div id="map-custom-icon" bind:this={customicon}></div>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div class="card custom-card">
      <div class="card-header">
        <div class="card-title">Interactive Choropleth Map</div>
      </div>
      <div class="card-body">
        <div id="interactive-map" bind:this={geomap}></div>
      </div>
    </div>
  </div>
</div>

<!--End::row-1 -->
