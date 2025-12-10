<script lang="ts">
	import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
	} from "@sveltestrap/sveltestrap";
	import { onMount } from "svelte";
	const mapAPI: any = "AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c";

	let mapBasic: any;
	let mapLight: any;
	let mapDark: any;
	let mapCustomTheme: any;

	let myLatLng: any = { lat: 50.797897, lng: -1.077641 };
	var mapProp: any = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		styles: [],
		zoomControl:true
	};
	let mapTwo: any = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		zoomControl:true,
		styles: [
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						color: "#e9e9e9",
					},
					{
						lightness: 17,
					},
				],
			},
			{
				featureType: "landscape",
				elementType: "geometry",
				stylers: [
					{
						color: "#f5f5f5",
					},
					{
						lightness: 20,
					},
				],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [
					{
						color: "#ffffff",
					},
					{
						lightness: 17,
					},
				],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#ffffff",
					},
					{
						lightness: 29,
					},
					{
						weight: 0.2,
					},
				],
			},
			{
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff",
					},
					{
						lightness: 18,
					},
				],
			},
			{
				featureType: "road.local",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff",
					},
					{
						lightness: 16,
					},
				],
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#f5f5f5",
					},
					{
						lightness: 21,
					},
				],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "#dedede",
					},
					{
						lightness: 21,
					},
				],
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{
						visibility: "on",
					},
					{
						color: "#ffffff",
					},
					{
						lightness: 16,
					},
				],
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{
						saturation: 36,
					},
					{
						color: "#333333",
					},
					{
						lightness: 40,
					},
				],
			},
			{
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off",
					},
				],
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [
					{
						color: "#f2f2f2",
					},
					{
						lightness: 19,
					},
				],
			},
			{
				featureType: "administrative",
				elementType: "geometry.fill",
				stylers: [
					{
						color: "#fefefe",
					},
					{
						lightness: 20,
					},
				],
			},
			{
				featureType: "administrative",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#fefefe",
					},
					{
						lightness: 17,
					},
					{
						weight: 1.2,
					},
				],
			},
		],
	};
	let mapThree: any = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		zoomControl:true,
		styles: [
			{
				featureType: "all",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#ffffff",
					},
				],
			},
			{
				featureType: "all",
				elementType: "labels.text.stroke",
				stylers: [
					{
						visibility: "on",
					},
					{
						color: "#424b5b",
					},
					{
						weight: 2,
					},
					{
						gamma: "1",
					},
				],
			},
			{
				featureType: "all",
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off",
					},
				],
			},
			{
				featureType: "administrative",
				elementType: "geometry",
				stylers: [
					{
						weight: 0.6,
					},
					{
						color: "#545b6b",
					},
					{
						gamma: "0",
					},
				],
			},
			{
				featureType: "landscape",
				elementType: "geometry",
				stylers: [
					{
						color: "#545b6b",
					},
					{
						gamma: "1",
					},
					{
						weight: "10",
					},
				],
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#666c7b",
					},
				],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "#545b6b",
					},
				],
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{
						color: "#424a5b",
					},
					{
						lightness: "0",
					},
				],
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [
					{
						color: "#666c7b",
					},
				],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						color: "#2e3546",
					},
				],
			},
		],
	};
	let mapFour: any = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		zoomControl:true,
		styles: [
			{
				featureType: "all",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#ffffff",
					},
				],
			},
			{
				featureType: "all",
				elementType: "labels.text.stroke",
				stylers: [
					{
						visibility: "on",
					},
					{
						color: "#424b5b",
					},
					{
						weight: 2,
					},
					{
						gamma: "1",
					},
				],
			},
			{
				featureType: "all",
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off",
					},
				],
			},
			{
				featureType: "administrative",
				elementType: "geometry",
				stylers: [
					{
						weight: 0.6,
					},
					{
						color: "#fff",
					},
					{
						gamma: "0",
					},
				],
			},
			{
				featureType: "landscape",
				elementType: "geometry",
				stylers: [
					{
						color: "#5F63F2",
					},
					{
						gamma: "1",
					},
					{
						weight: "10",
					},
				],
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#5F63F290",
					},
				],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "green",
					},
				],
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{
						color: "green",
					},
					{
						lightness: "0",
					},
				],
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [
					{
						color: "#666c7b",
					},
				],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff",
					},
				],
			},
		],
	};

	onMount(async () => {
		setTimeout(() => {
			let map1 = new google.maps.Map(mapBasic, mapProp);
			let map2 = new google.maps.Map(mapLight, mapTwo);
			let map3 = new google.maps.Map(mapDark, mapThree);
			let map4 = new google.maps.Map(mapCustomTheme, mapFour);
			let markerOption = {
				position: myLatLng,
				icon: "../images/maps/marker-icon.png",
			};
			var marker = new google.maps.Marker(markerOption);
			var marker2 = new google.maps.Marker(markerOption);
			var marker3 = new google.maps.Marker(markerOption);
			var marker4 = new google.maps.Marker(markerOption);
			marker.setMap(map1);
			marker2.setMap(map2);
			marker3.setMap(map3);
			marker4.setMap(map4);
			
		}, 500);
	});
</script>

<svelte:head>
	<title>Vyzor-Google Maps</title>
	<script
		defer
		async
		src="https://maps.googleapis.com/maps/api/js?key={mapAPI}&callback=initMap"
	>
	</script>
</svelte:head>

<!-- Page Header -->
<Pageheader homepage="Google Maps" activepage="Maps" page="Google Maps" />
<!-- Page Header Close -->
<!-- svelte-ignore element_invalid_self_closing_tag -->
<!-- Start::row-1 -->
<Row class="row">
	<Col xl={6}>
		<Card class="card custom-card">
			<CardHeader class="card-header">
				<div class="card-title">Basic Map</div>
			</CardHeader>
			<CardBody class="card-body">
				<div id="google-map">
					<div class="google-map" bind:this={mapBasic} />
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col xl={6}>
		<Card class="card custom-card">
			<CardHeader class="card-header">
				<div class="card-title">Overlay Map</div>
			</CardHeader>
			<CardBody class="card-body">
				<div id="google-map-overlay">
					<div class="google-map" bind:this={mapLight} />
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col xl={6}>
		<Card class="card custom-card">
			<CardHeader class="card-header">
				<div class="card-title">Layers Map</div>
			</CardHeader>
			<CardBody class="card-body">
				<div id="map-layers">
					<div class="google-map" bind:this={mapDark} />
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col xl={6}>
		<Card class="card custom-card">
			<CardHeader class="card-header">
				<div class="card-title">Map With Markers</div>
			</CardHeader>
			<CardBody class="card-body">
				<div id="map-markers">
					<div class="google-map" bind:this={mapCustomTheme} />
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<!--End::row-1 -->

<style lang="scss">
	.google-map {
		height: 100%;
	}
</style>
