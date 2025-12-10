import { Toast } from "bootstrap"
import * as Toastify from "toastify-js";
const toast = Toastify.default || Toastify;
(function () {
	'use strict';
	/* Live example toast js */
	const toastTrigger = document.getElementById('liveToastBtn')
	const toastLiveExample = document.getElementById('liveToast')
	if (toastTrigger) {
		toastTrigger.addEventListener('click', () => {
			const toast = new Toast(toastLiveExample)
			toast.show()
		})
	}
	/* Primary toast js */
	const primaryToast = document.getElementById('primaryToastBtn')
	const primarytoastExample = document.getElementById('primaryToast')
	if (primaryToast) {
		primaryToast.addEventListener('click', () => {
			const toast = new Toast(primarytoastExample)
			toast.show()
		})
	}
	/* Secondary toast js */
	const secondaryToast = document.getElementById('secondaryToastBtn')
	const secondarytoastExample = document.getElementById('secondaryToast')
	if (secondaryToast) {
		secondaryToast.addEventListener('click', () => {
			const toast = new Toast(secondarytoastExample)
			toast.show()
		})
	}
	/* Info toast js */
	const infoToast = document.getElementById('infoToastBtn')
	const infotoastExample = document.getElementById('infoToast')
	if (infoToast) {
		infoToast.addEventListener('click', () => {
			const toast = new Toast(infotoastExample)
			toast.show()
		})
	}
	/* Warning toast js */
	const warningToast = document.getElementById('warningToastBtn')
	const warningtoastExample = document.getElementById('warningToast')
	if (warningToast) {
		warningToast.addEventListener('click', () => {
			const toast = new Toast(warningtoastExample)
			toast.show()
		})
	}
	/* Success toast js */
	const successToast = document.getElementById('successToastBtn')
	const successtoastExample = document.getElementById('successToast')
	if (successToast) {
		successToast.addEventListener('click', () => {
			const toast = new Toast(successtoastExample)
			toast.show()
		})
	}
	/* Danger toast js */
	const dangerToast = document.getElementById('dangerToastBtn')
	const dangertoastExample = document.getElementById('dangerToast')
	if (dangerToast) {
		dangerToast.addEventListener('click', () => {
			const toast = new Toast(dangertoastExample)
			toast.show()
		})
	}
	/* Solid Primary toast js */
	const solidprimaryToast = document.getElementById('solidprimaryToastBtn')
	const solidprimarytoastExample = document.getElementById('solid-primaryToast')
	if (solidprimaryToast) {
		solidprimaryToast.addEventListener('click', () => {
			const toast = new Toast(solidprimarytoastExample)
			toast.show()
		})
	}
	/* Secondary toast js */
	const solidsecondaryToast = document.getElementById('solidsecondaryToastBtn')
	const solidsecondarytoastExample = document.getElementById('solid-secondaryToast')
	if (solidsecondaryToast) {
		solidsecondaryToast.addEventListener('click', () => {
			const toast = new Toast(solidsecondarytoastExample)
			toast.show()
		})
	}
	/* Info toast js */
	const solidinfoToast = document.getElementById('solidinfoToastBtn')
	const solidinfotoastExample = document.getElementById('solid-infoToast')
	if (solidinfoToast) {
		solidinfoToast.addEventListener('click', () => {
			const toast = new Toast(solidinfotoastExample)
			toast.show()
		})
	}
	/* Warning toast js */
	const solidwarningToast = document.getElementById('solidwarningToastBtn')
	const solidwarningtoastExample = document.getElementById('solid-warningToast')
	if (solidwarningToast) {
		solidwarningToast.addEventListener('click', () => {
			const toast = new Toast(solidwarningtoastExample)
			toast.show()
		})
	}
	/* Success toast js */
	const solidsuccessToast = document.getElementById('solidsuccessToastBtn')
	const solidsuccesstoastExample = document.getElementById('solid-successToast')
	if (solidsuccessToast) {
		solidsuccessToast.addEventListener('click', () => {
			const toast = new Toast(solidsuccesstoastExample)
			toast.show()
		})
	}
	/* Danger toast js */
	const soliddangerToast = document.getElementById('soliddangerToastBtn')
	const soliddangertoastExample = document.getElementById('solid-dangerToast')
	if (soliddangerToast) {
		soliddangerToast.addEventListener('click', () => {
			const toast = new Toast(soliddangertoastExample)
			toast.show()
		})
	}
	/*Top left toast js */
	const topleftToast = document.getElementById('topleftToastBtn')
	const toplefttoastExample = document.getElementById('topleft-Toast')
	if (topleftToast) {
		topleftToast.addEventListener('click', () => {
			const toast = new Toast(toplefttoastExample)
			toast.show()
		})
	}
	/*Top center toast js */
	const topcenterToast = document.getElementById('topcenterToastBtn')
	const topcentertoastExample = document.getElementById('topcenter-Toast')
	if (topcenterToast) {
		topcenterToast.addEventListener('click', () => {
			const toast = new Toast(topcentertoastExample)
			toast.show()
		})
	}
	/*Top right toast js */
	const toprightToast = document.getElementById('toprightToastBtn')
	const toprighttoastExample = document.getElementById('topright-Toast')
	if (toprightToast) {
		toprightToast.addEventListener('click', () => {
			const toast = new Toast(toprighttoastExample)
			toast.show()
		})
	}
	/*Middle left toast js */
	const middleleftToast = document.getElementById('middleleftToastBtn')
	const middlelefttoastExample = document.getElementById('middleleft-Toast')
	if (middleleftToast) {
		middleleftToast.addEventListener('click', () => {
			const toast = new Toast(middlelefttoastExample)
			toast.show()
		})
	}
	/*Middle center toast js */
	const middlecenterToast = document.getElementById('middlecenterToastBtn')
	const middlecentertoastExample = document.getElementById('middlecenter-Toast')
	if (middlecenterToast) {
		middlecenterToast.addEventListener('click', () => {
			const toast = new Toast(middlecentertoastExample)
			toast.show()
		})
	}
	/*Middle right toast js */
	const middlerightToast = document.getElementById('middlerightToastBtn')
	const middlerighttoastExample = document.getElementById('middleright-Toast')
	if (middlerightToast) {
		middlerightToast.addEventListener('click', () => {
			const toast = new Toast(middlerighttoastExample)
			toast.show()
		})
	}
	/*Bottom left toast js */
	const bottomleftToast = document.getElementById('bottomleftToastBtn')
	const bottomlefttoastExample = document.getElementById('bottomleft-Toast')
	if (bottomleftToast) {
		bottomleftToast.addEventListener('click', () => {
			const toast = new Toast(bottomlefttoastExample)
			toast.show()
		})
	}
	/*Bottom center toast js */
	const bottomcenterToast = document.getElementById('bottomcenterToastBtn')
	const bottomcentertoastExample = document.getElementById('bottomcenter-Toast')
	if (bottomcenterToast) {
		bottomcenterToast.addEventListener('click', () => {
			const toast = new Toast(bottomcentertoastExample)
			toast.show()
		})
	}
	/*Bottom right toast js */
	const bottomrightToast = document.getElementById('bottomrightToastBtn')
	const bottomrighttoastExample = document.getElementById('bottomright-Toast')
	if (bottomrightToast) {
		bottomrightToast.addEventListener('click', () => {
			const toast = new Toast(bottomrighttoastExample)
			toast.show()
		})
	}

	/* Toastify js */
	document.getElementById("toast-button").addEventListener("click", () => {
		toast({
			text: "I'm a toast Message",
			duration: 3000,
			newWindow: true,
			close: true,
			gravity: "top", // `top` or `bottom`
			positionRight: true, // `true` or `false`
			backgroundColor: "linear-gradient(to right, var(--primary-color), rgb(215, 124, 247))"
		}).showToast();
	});

})();    