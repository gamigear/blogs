/*------ alerts(prism-code for showcode purpose) start ------*/
export const alert1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";

<SpkAlert color="warning" customClass={"alert-dismissible fade show "} text={" <strong>Holy guacamole!</strong> You should check in on some of those fields below."}/>// End Prism Code//`;

export const alerts2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "../../@spk/uielements/Button/SpkButton.svelte";
import SpkAlert from "../../@spk/uielements/Alerts/SpkAlert.svelte";

//Functionality
let alerts = []; // State for alerts
const handleShowAlert = () => {
    const newAlert = {
        id: new Date().getTime() // Unique ID for each alert
    };
    alerts = [...alerts, newAlert]; // Add new alert to the state
};

{#each alerts as alert (alert.id)}
<SpkAlert  color="success"  customClass={"alert-dismissible fade show "}
 text={" <strong>Holy guacamole!</strong> You should check in on some of those fields below."}  />
{/each}
<SpkButton  buttontype="button" color="primary" customClass="mt-2" text={"Show live alert"} onclickfunc={handleShowAlert} /> // End Prism Code//`;


export const alerts3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { alertsdefalut } from "$lib/data/uielements/alertsdara.js";

{#each alertsdefalut as alert (alert.id)}
    <SpkAlert showCloseButton={false}
      color={alert.class}
      text={alert.text} 
    />
  {/each}`;
export const dataalert3 = `
export const alertsdefalut = [
	{ id: 1, text: " A simple primary alert—check it out!", class: "primary" },
	{ id: 2, text: " A simple secondary alert—check it out!", class: "secondary" },
	{ id: 3, text: " A simple success alert—check it out!", class: "success" },
	{ id: 4, text: " A simple danger alert—check it out!", class: "danger" },
	{ id: 5, text: " A simple warning alert—check it out!", class: "warning" },
	{ id: 6, text: " A simple info alert—check it out!", class: "info" },
	{ id: 7, text: " A simple light alert—check it out!", class: "light" },
	{ id: 8, text: " A simple dark alert—check it out!", class: "dark" },
];`

export const alerts4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { linkalerts } from "$lib/data/uielements/alertsdara.js";

{#each linkalerts as alert (alert.id)}
<SpkAlert
  color={alert.class}
  customClass=""
  text={alert.text}
  text2={alert.text2} 
  text3={alert.text3} 
  showCloseButton={false}
/>
{/each}`;
export const dataalert4 = `export const linkalerts = [
	{ id: 1, text: "A simple primary alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "primary" },
	{ id: 2, text: "A simple secondary alert with", text2: "an example link ", text3: "Give it a click if you like", class: "secondary" },
	{ id: 3, text: "A simple success alert with", text2: "an example link ", text3: "Give it a click if you like", class: "success" },
	{ id: 4, text: "A simple danger alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "danger" },
	{ id: 5, text: "A simple warning alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "warning" },
	{ id: 6, text: "A simple info alert with", text2: "an example link ", text3: "Give it a click if you like", class: "info" },
	{ id: 7, text: "A simple light alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "light" },
	{ id: 8, text: "A simple dark alert with", text2: "an example link ", text3: "Give it a click if you like", class: "dark" },
]; `

export const alerts5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { solidalerts } from "$lib/data/uielements/alertsdara.js";

{#each solidalerts as alert (alert.id)}
        <SpkAlert
          color={alert.class}
          customClass={"alert-dismissible fade show {alert.color}"}
          text={alert.text} 
        />
{/each}`;
export const dataalert5 = `export const solidalerts = [
	{ id: 1, text: "A simple solid primary alert-check it out! ", class: "solid-primary", color: "", },
	{ id: 2, text: "A simple solid secondary alert-check it out!", class: "solid-secondary", color: "", },
	{ id: 3, text: "A simple solid info alert-check it out!", class: "solid-info", color: "", },
	{ id: 4, text: "A simple solid warning alert-check it out! ", class: "solid-warning", color: "", },
	{ id: 5, text: "A simple solid success alert-check it out!", class: "solid-success", color: "", },
	{ id: 6, text: "A simple solid danger alert-check it out! ", class: "solid-danger", color: "", },
	{ id: 7, text: "A simple solid light alert-check it out! ", class: "solid-light", color: "text-default", },
	{ id: 8, text: "A simple solid dark alert-check it out!", class: "solid-dark", color: "text-white", },
]; `

export const alerts6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { outlinealerts } from "$lib/data/uielements/alertsdara.js";

{#each outlinealerts as alert (alert.id)}
<SpkAlert
  color={alert.class}
  customClass={"alert-dismissible fade show"}
  text={alert.text} 
/>
{/each}`;
export const dataalert6 = `export const outlinealerts = [
	{ id: 1, text: "A simple outline primary alert-check it out! ", class: "outline-primary", color: "", },
	{ id: 2, text: "A simple outline secondary alert-check it out!", class: "outline-secondary", color: "", },
	{ id: 3, text: "A simple outline info alert-check it out!", class: "outline-info", color: "", },
	{ id: 4, text: "A simple outline warning alert-check it out! ", class: "outline-warning", color: "", },
	{ id: 5, text: "A simple outline success alert-check it out!", class: "outline-success", color: "", },
	{ id: 6, text: "A simple outline danger alert-check it out! ", class: "outline-danger", color: "", },
	{ id: 7, text: "A simple outline light alert-check it out! ", class: "outline-light", color: "text-default", },
	{ id: 8, text: "A simple outline dark alert-check it out!", class: "outline-dark", color: "", },
];`

export const alerts7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { shadowsolidalerts } from "$lib/data/uielements/alertsdara.js";

{#each shadowsolidalerts as alert (alert.id)}
    <SpkAlert
      color={alert.class}
      customClass={"alert shadow-{alert.size} alert-dismissible fade show"}
      text={alert.text} 
    />
  {/each}`;
export const dataalert7 = `export const shadowsolidalerts = [
	{ id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "sm" },
	{ id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "" },
	{ id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "lg" },
	{ id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "sm" },
	{ id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "" },
	{ id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "lg" },
] `

export const alerts8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { defaultsolidalerts } from "$lib/data/uielements/alertsdara.js";

{#each defaultsolidalerts as alert (alert.id)}
    <SpkAlert
      color={alert.class}
      customClass={"alert shadow-{alert.size}"}
      text={alert.text}  showCloseButton={false}
    />
  {/each}`;
export const dataalert8 = `export const defaultsolidalerts = [
	{ id: 1, text: "A simple solid primary alert with small shadow—check it out!", class: "primary", size: "sm" },
	{ id: 2, text: "A simple solid primary alert with normal shadow—check it out!", class: "primary", size: "" },
	{ id: 3, text: "A simple solid primary alert with large shadow—check it out!", class: "primary", size: "lg" },
	{ id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "secondary", size: "sm" },
	{ id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "secondary", size: "" },
	{ id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "secondary", size: "lg" },
]; `
export const alerts9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { roundesolidalerts } from "$lib/data/uielements/alertsdara.js";

{#each roundesolidalerts as alert (alert.id)}
<SpkAlert
  color={alert.class}
  customClass={"alert alert-solid-{alert.class} rounded-pill alert-dismissible fade show"}
  text={alert.text}  
/>
{/each}`;
export const dataalert9 = `export const roundesolidalerts = [
	{ id: 1, text: "A simple solid rounded primary alert—check it out!", class: "primary" },
	{ id: 2, text: "A simple solid rounded secondary alert—check it out! ", class: "info" },
	{ id: 3, text: "A simple solid rounded warning alert—check it out! ", class: "warning" },
	{ id: 4, text: "A simple solid rounded danger alert—check it out!", class: "danger" }
]; `
export const alerts10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { roundeoutlinealerts } from "$lib/data/uielements/alertsdara.js";

{#each roundeoutlinealerts as alert (alert.id)}
<SpkAlert
  color={alert.class}
  customClass={"alert alert-outline-{alert.class} rounded-pill alert-dismissible fade show"}
  text={alert.text}  
/>
{/each}`;
export const dataalert10 = `export const roundeoutlinealerts = [
	{ id: 1, text: "A simple outline rounded primary alert—check it out!", class: "primary" },
	{ id: 2, text: "A simple outline rounded secondary alert—check it out! ", class: "info" },
	{ id: 3, text: "A simple outline rounded warning alert—check it out! ", class: "warning" },
	{ id: 4, text: "A simple outline rounded danger alert—check it out!", class: "danger" }
]; `

export const alerts11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { roundedefaultalerts } from "$lib/data/uielements/alertsdara.js";

{#each roundedefaultalerts as alert (alert.id)}
      <SpkAlert
        color={alert.class}
        customClass="alert rounded-pill alert-dismissible fade show"
        text={alert.text}  
      />
    {/each}`;
export const dataalert11 = `export const roundedefaultalerts = [
	{ id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
	{ id: 2, text: "A simple rounded secondary alert—check it out! ", class: "info" },
	{ id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
	{ id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
];`
export const alerts12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { roundedefaultalerts } from "$lib/data/uielements/alertsdara.js";

{#each roundedefaultalerts as alert (alert.id)}
      <SpkAlert
        color={alert.class} customBtnClass="custom-close"
        customClass="alert rounded-pill alert-dismissible fade show"
        text={alert.text}  
      />
    {/each}`;

export const alerts13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { iconalerts } from "$lib/data/uielements/alertsdara.js";

{#each iconalerts as alert (alert.id)}
<SpkAlert
  color={alert.class}
  customClass="alert d-flex align-items-center"
  text={alert.text}
  icon={alert.icon}
  showCloseButton={false}
/>
{/each}`;
export const dataalert13 = `export const iconalerts = [
	{
		id: 1,
		class: 'primary',
		text: 'An example alert with an icon',
		icon: '<svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>',
	},
	{
		id: 2,
		class: 'success',
		text: 'An example success alert with an icon',
		icon: '<svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>',
	},
	{
		id: 3,
		class: 'warning',
		text: 'An example warning alert with an icon',
		icon: '<svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>',
	},
	{
		id: 4,
		class: 'danger',
		text: 'An example danger alert with an icon',
		icon: '<svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>',
	},
]; `
export const alerts14 = `import { useState } from "react";
{#each customizedalert1 as alert (alert.id)}
<SpkAlert
  color={alert.class}
  customClass="alert alert-dismissible fade show custom-alert-icon shadow-sm"
  text={alert.text}
  icon={alert.icon}
/>
{/each}`;
export const dataalert14 = `export const customizedalert1 = [
	{
		id: 1, class: "primary", text: 'An example alert with an icon',
		icon: '<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>'
	},
	{
		id: 2, class: "secondary", text: 'An example success alert with an icon',
		icon: '<svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>'
	},
	{
		id: 3, class: "warning", text: 'An example warning alert with an icon',
		icon: '<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>'
	},
	{
		id: 4, class: "danger", text: 'An example danger alert with an icon',
		icon: '<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>'
	},
]; `

export const alerts15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { Imagealerts } from "$lib/data/uielements/alertsdara.js";

{#each Imagealerts as alert (alert.id)}
<SpkAlert
  color={alert.class} 
  customClass="alert alert-img alert-dismissible fase show rounded-pill flex-wrap"
  customImgClass="avatar avatar-sm me-3 avatar-rounded"
  text={alert.text}
  img={alert.src}
/>
{/each}`;
export const dataalert15 = `export const Imagealerts = [
	{ id: 1, src: "../images/faces/3.jpg", class: "primary", text: 'A simple primary  alert with image—check it out!', },
	{ id: 2, src: "../images/faces/5.jpg", class: "secondary", text: 'A simple secondary  alert with image—check it out!', },
	{ id: 3, src: "../images/faces/8.jpg", class: "warning", text: 'A simple warning  alert with image—check it out!', },
	{ id: 4, src: "../images/faces/11.jpg", class: "danger", text: 'A simple danger  alert with image—check it out!', },
	{ id: 5, src: "../images/faces/13.jpg", class: "info", text: 'A simple info  alert with image—check it out!', },
	{ id: 6, src: "../images/faces/10.jpg", class: "light", text: 'A simple light  alert with image—check it out!', },
	{ id: 7, src: "../images/faces/15.jpg", class: "dark", text: 'A simple dark  alert with image—check it out!', },
]; `;

export const alerts16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { Imagealerts } from "$lib/data/uielements/alertsdara.js";

{#each avatarsizealert as alert (alert.id)}
        <SpkAlert
          color={alert.class} 
          customClass="alert alert-img alert-dismissible fase show flex-wrap"
          customImgClass={"avatar avatar-{alert.size} me-3"}
          text={alert.text}
          img={alert.src}
        />
      {/each}`;
export const dataalert16 = `export const avatarsizealert = [
	{ id: 1, src: "../images/faces/3.jpg", class: "primary", text: 'A simple primary  alert with image—check it out!', size: "xs" },
	{ id: 2, src: "../images/faces/5.jpg", class: "secondary", text: 'A simple secondary  alert with image—check it out!', size: "sm" },
	{ id: 3, src: "../images/faces/8.jpg", class: "warning", text: 'A simple warning  alert with image—check it out!', size: "" },
	{ id: 4, src: "../images/faces/11.jpg", class: "danger", text: 'A simple danger  alert with image—check it out!', size: "md" },
	{ id: 5, src: "../images/faces/13.jpg", class: "info", text: 'A simple info  alert with image—check it out!', size: "lg" },
	{ id: 6, src: "../images/faces/14.jpg", class: "light", text: 'A simple light  alert with image—check it out!', size: "xl" },
];`;

export const alerts17 = `
import SpkAlert from "$lib/@spk/uielements/Alerts/SpkAlert.svelte";
import { AdditionalContent } from "$lib/data/uielements/alertsdara.js";
 <div class="row gy-3">
          {#each AdditionalContent as alert (alert.id)}
            <Col xl={6}>
              <SpkAlert
                color={alert.alert_type}
                customClass=" overflow-hidden p-0"
                role="alert"
                showCloseButton={false}
              >
                <div
                  class={"p-3 {alert.bg_color} text-fixed-white d-flex justify-content-between"}
                >
                  <h6 class="aletr-heading mb-0 text-fixed-white">
                    Thank you for reporting this.
                  </h6>
                  <button
                    type="button"
                    class="btn-close p-0 text-fixed-white"
                    data-bs-dismiss="alert"
                    aria-label="Close"><i class="bi bi-x"></i></button
                  >
                </div>
                <hr class="my-0" />
                <div class="p-3">
                  <p class="mb-0">
                    We appreciate you to let us know the bug in the template and
                    for warning us about future consequences <a
                      href="#!"
                      class="fw-semibold text-decoration-underline"
                      >Visit for support for queries ?</a
                    >
                  </p>
                </div>
              </SpkAlert>
            </Col>
          {/each}
        </div>
`

export const dataalert17 = `export let AdditionalContent = [
	{
		id: 1,
		alert_type: "primary",
		bg_color: "bg-primary",
		text_color: "text-fixed-white",
	},
	{
		id: 2,
		alert_type: "secondary",
		bg_color: "bg-secondary",
		text_color: "text-fixed-white",
	},
	{
		id: 3,
		alert_type: "success",
		bg_color: "bg-success",
		text_color: "text-fixed-white",
	},
	{
		id: 4,
		alert_type: "warning",
		bg_color: "bg-warning",
		text_color: "text-fixed-white",
	}
]`
/*------ alerts(prism-code for showcode purpose) end ------*/

/*------ Badge(prism-code for showcode purpose) start ------*/
export const badge1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { badgesdata } from "$lib/data/uielements/badgedata.js";

{#each badgesdata as badge (badge.id)}
        <SpkBadge
          Color={badge.color}
          CustomClass={" bg-{badge.color} {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;
export const databadge1 = `export const badgesdata = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 2, heading: "Secondary", color: "secondary", class: "" },
    { id: 3, heading: "Success", color: "success", class: "" },
    { id: 4, heading: "Danger", color: "danger", class: "" },
    { id: 5, heading: "Warning", color: "warning", class: "" },
    { id: 6, heading: "Info", color: "info", class: "" },
    { id: 7, heading: "Light", color: "light", class: "text-dark" },
    { id: 8, heading: "Dark", color: "dark", class: "text-white" },
]; `
export const badge2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { badgesdata } from "$lib/data/uielements/badgedata.js";

{#each badgesdata as badge (badge.id)}
        <SpkBadge
          Pill={true}
          Color={badge.color}
          CustomClass={" bg-{badge.color} {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;

export const badge3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { Outlinebadgesdata } from "$lib/data/uielements/badgedata.js";

{#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          CustomClass={"{badge.color} bg-{badge.color}-transparent {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;
export const databadge3 = `export const Outlinebadgesdata = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 2, heading: "secondary", color: "secondary", class: "" },
    { id: 3, heading: "Success", color: "success", class: "" },
    { id: 4, heading: "Danger", color: "danger", class: "" },
    { id: 5, heading: "Warning", color: "warning", class: "" },
    { id: 6, heading: "Info", color: "info", class: "" },
    { id: 7, heading: "Light", color: "light", class: "text-dark" },
    { id: 8, heading: "Dark", color: "dark", class: "" },
]; `
export const badge4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { Outlinebadgesdata } from "$lib/data/uielements/badgedata.js";

{#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          Pill={true}
          CustomClass={"{badge.color} bg-{badge.color}-transparent {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;

export const badge5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { Outlinebadgesdata } from "$lib/data/uielements/badgedata.js";

{#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          CustomClass={"bg-outline-{badge.color}  outline-{badge.color}-transparent {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;

export const badge6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { Outlinebadgesdata } from "$lib/data/uielements/badgedata.js";

{#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          Pill={true}
          CustomClass={"bg-outline-{badge.color}  outline-{badge.color}-transparent {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;

export const badge7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { badges1 } from "$lib/data/uielements/badgedata.js";

{#each badges1 as badge (badge.id)}
        <SpkBadge
          CustomClass={"{badge.color} bg-{badge.color}-gradient {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;
export const databadge7 = `export const badges1 = [
    { id: 1, heading: "Primary", color: "primary" },
    { id: 2, heading: "secondary", color: "secondary" },
    { id: 3, heading: "Success", color: "success" },
    { id: 4, heading: "Danger", color: "danger" },
    { id: 5, heading: "Warning", color: "warning" },
    { id: 6, heading: "Info", color: "info" },
    { id: 7, heading: "orange", color: "orange" },
    { id: 8, heading: "purple", color: "purple" },
];`
export const badge8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
import { badges1 } from "$lib/data/uielements/badgedata.js";

{#each badges1 as badge (badge.id)}
        <SpkBadge
          Pill={true}
          CustomClass={"{badge.color} bg-{badge.color}-gradient {badge.class} me-1"}
          text={badge.heading}
        />
      {/each}`;

export const badge9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";

<SpkButton
color="danger"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="light" CustomClass=" ms-2 text-danger" text="777" />
</SpkButton>
<SpkButton
color="primary"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="light" CustomClass=" ms-2 text-primary" text="4" />
</SpkButton>
<SpkButton
color="info"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="light" CustomClass=" ms-2 text-info" text="32" />
</SpkButton>
<SpkButton
color="warning"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="light" CustomClass=" ms-2 text-warning" text="7" />
</SpkButton>
<SpkButton
color="success"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="light" CustomClass=" ms-2 text-success" text="12" />
</SpkButton>
<SpkButton
color="secondary"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="light" CustomClass=" ms-2 text-secondary" text="7" />
</SpkButton>
`;

export const badge10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";

 <SpkButton
color="primary"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="secondary" CustomClass=" ms-2 " text="4" />
</SpkButton>
<SpkButton
color="secondary"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="primary" CustomClass=" ms-2" text="7" />
</SpkButton>
<SpkButton
color="success"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="danger" CustomClass=" ms-2 " text="12" />
</SpkButton>
<SpkButton
color="info"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="warning" CustomClass=" ms-2 " text="32" />
</SpkButton>`;

export const badge11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";

<SpkButton
outline={true}
color="primary"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="primary" CustomClass=" ms-2 " text="4" />
</SpkButton>
<SpkButton
outline={true}
color="secondary"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="secondary" CustomClass=" ms-2" text="7" />
</SpkButton>
<SpkButton
outline={true}
color="success"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="success" CustomClass=" ms-2 " text="12" />
</SpkButton>
<SpkButton
outline={true}
color="info"
buttontype="button"
customClass="my-1 me-2"
text="Notifications"
>
<SpkBadge Color="info" CustomClass=" ms-2 " text="32" />
</SpkButton>`;

export const badge12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";

<h1>Example heading <SpkBadge Color="primary" text="New" /></h1>
<h2>Example heading <SpkBadge Color="primary" text="New" /></h2>
<h3>Example heading <SpkBadge Color="primary" text="New" /></h3>
<h4>Example heading <SpkBadge Color="primary" text="New" /></h4>
<h5>Example heading <SpkBadge Color="primary" text="New" /></h5>
<h6>Example heading <SpkBadge Color="primary" text="New" /></h6>`;

export const badge13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";

<div class="d-flex flex-wrap gap-4">
<SpkButton
  buttontype="button"
  color="primary"
  customClass="position-relative"
  text="Inbox"
>
  <SpkBadge
    Color="danger"
    Positioned={true}
    Pill={true}
    ariaLabel="Unread messages"
    text="99+"
  />
</SpkButton>
<SpkButton
  buttontype="button"
  color="secondary"
  customClass="position-relative"
  text="Profile"
>
  <SpkBadge
    Color="success"
    Pill={true}
    Positioned={true}
    Border="border"
    Indicator={true}
    ariaLabel="New alerts"
  ></SpkBadge>
</SpkButton>
<span class="avatar">
  <img  loading="lazy" src={"../images/faces/2.jpg"} alt="img" />
  <span
    class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
  >
    <span class="visually-hidden">New alerts</span>
  </span>
</span>
<span class="avatar avatar-rounded">
  <img  loading="lazy" src={"../images/faces/10.jpg"} alt="img" />
  <span
    class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
  >
    <span class="visually-hidden">New alerts</span>
  </span>
</span>
<span class="avatar avatar-rounded">
  <img  loading="lazy" src={"../images/faces/15.jpg"} alt="img" />
  <span
    class="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg"
    >1000+
    <span class="visually-hidden">New alerts</span>
  </span>
</span>
</div>`;

export const badge14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";

<div class="d-flex align-items-center gap-5 flex-wrap">
<div>
  <SpkBadge
    CustomClass=" bg-outline-secondary custom-badge fs-15"
    text="Hot"><i class="ti ti-flame me-1"></i></SpkBadge
  >
</div>
<div>
  <span class="icon-badge">
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
      ><path
        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
      /></svg
    >
    <SpkBadge Color="success" Pill={true} text="14" />
  </span>
</div>
<div>
  <SpkBadge
    Color="light"
    Border="border"
    CustomClass=" custom-badge"
    text="13.2k"
    ><i class="fe fe-eye me-1 d-inline-block"></i></SpkBadge
  >
</div>
<div>
  <span class="text-badge">
    <span class="text fs-18">Inbox</span>
    <SpkBadge
      Color="success"
      Pill={true}
      CustomClass=""
      text="32"
    />
  </span>
</div>
</div>`;
/*------ Badge(prism-code for showcode purpose) end ------*/

/*------ Breadcrumb(prism-code for showcode purpose) start ------*/
export const breadcrumb1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//
const breadcrumbItems = [
    { label: 'Home', href: '#home' },
    { label: 'Library',  },
  ];
  const breadcrumbItems2 = [
    { label: 'Home', href: '#home' },
    { label: 'Library', href: '#library' },
    { label: 'Data' } // No href provided for the active item
  ];

<SpkBreadcrumbs  label="Home" Single={true}  />
<SpkBreadcrumbs  items={breadcrumbItems}  activeItem="Library"  />
<SpkBreadcrumbs  items={breadcrumbItems2}  activeItem="Data"  />`;

export const breadcrumb2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//Functionality
const breadcrumbItems = [
    { label: 'Home', href: '#home' },
    { label: 'Library',  },
  ];
  const breadcrumbItems2 = [
    { label: 'Home', href: '#home' },
    { label: 'Library', href: '#library' },
    { label: 'Data' } // No href provided for the active item
  ];
<SpkBreadcrumbs  label="Home" Single={true}  />
<SpkBreadcrumbs  items={breadcrumbItems} CustomClass="breadcrumb-example1"  activeItem="Library"  />
<SpkBreadcrumbs  items={breadcrumbItems2} CustomClass="breadcrumb-example1"  activeItem="Library"  />`;

export const breadcrumb3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//Functionality
const breadcrumbItems = [
    { label: 'Home', href: '#home' },
    { label: 'Library',  },
  ];

<SpkBreadcrumbs divider="~" items={breadcrumbItems} CustomClass=""  activeItem="Library"  />`;

export const breadcrumb4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//Functionality
const breadcrumbItems = [
    { label: 'Home', href: '#home' },
    { label: 'Library',  },
  ];

<SpkBreadcrumbs style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&quot;);"  
      items={breadcrumbItems}     CustomClass=""  />`;

export const breadcrumb5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//Functionality
const breadcrumbItems2 = [
    { label: 'Home', href: '#home' },
    { label: 'Library', href: '#library' },
    { label: 'Data' } // No href provided for the active item
  ];
  
  <SpkBreadcrumbs   items={breadcrumbItems2}    activeItem="Data"  CustomClass="breadcrumb-style1"   />`;

export const breadcrumb6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//Functionality
const breadcrumbItems2 = [
    { label: 'Home', href: '#home' },
    { label: 'Library', href: '#library' },
    { label: 'Data' } // No href provided for the active item
  ];

<SpkBreadcrumbs   items={breadcrumbItems2}    activeItem="Data"  CustomClass="breadcrumb-style2"   >`;

export const breadcrumb7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBreadcrumbs from "$lib/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";

//Functionality
const breadcrumbItems = [
    { label: 'Home', href: '#home' },
    { label: 'Library',  },
  ];
  
<SpkBreadcrumbs style={"--bs-breadcrumb-divider: '';"}  items={breadcrumbItems}    activeItem="Data"  CustomClass="bg-light p-2 "  />
`;
/*------ Breadcrumb(prism-code for showcode purpose) end ------*/

/*------ Buttons(prism-code for showcode purpose) start ------*/
export const button1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { DefaultButtons } from "$lib/data/uielements/buttonsdata.js";

  <div class="btn-list">
  {#each DefaultButtons as button (button.id)}
    <SpkButton
      text={button.text}
      buttontype="button"
      customClass="btn-wave waves-effect waves-light me-2"
      color={button.class}
    />
  {/each}
</div>`;
export const databutton1 = `export const DefaultButtons = [
	{ id: 1, class: "primary", text: " Primary" },
	{ id: 2, class: "secondary", text: "  Secondary" },
	{ id: 3, class: "success", text: " Success" },
	{ id: 4, class: "danger", text: "  Danger" },
	{ id: 5, class: "warning", text: "  Warning" },
	{ id: 6, class: "info", text: "Info" },
	{ id: 7, class: "light", text: " Light" },
	{ id: 8, class: "dark", text: "  Dark" },
	{ id: 9, class: "link", text: "Link" },
];`
export const button2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { DefaultButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each DefaultButtons as button (button.id)}
          <SpkButton
            text={button.text}
            buttontype="button"
            customClass="rounded-pill btn-wave me-2"
            color={button.class}
          />
        {/each}
      </div>`;

export const button3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { LightButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each LightButtons as button (button.id)}
          <SpkButton
            text={button.text}
            buttontype="button"
            customClass="btn btn-wave me-2"
            color={button.class}
          />
        {/each}
      </div>`;
export const databutton3 = `export const LightButtons = [
	{ id: 1, class: "primary-light", text: " Primary" },
	{ id: 2, class: "secondary-light", text: "  Secondary" },
	{ id: 3, class: "success-light", text: " Success" },
	{ id: 4, class: "danger-light", text: "  Danger" },
	{ id: 5, class: "warning-light", text: "  Warning" },
	{ id: 6, class: "info-light", text: "Info" },
	{ id: 7, class: "purple-light", text: " purple" },
	{ id: 8, class: "teal-light", text: "  Teal" },
	{ id: 9, class: "orange-light", text: "orange" }
];`
export const button4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { LightButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each LightButtons as button (button.id)}
          <SpkButton
            text={button.text}
            buttontype="button"
            customClass="rounded-pill btn-wave me-2"
            color={button.class}
          />
        {/each}
      </div>`;

export const button5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { OutlineButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each OutlineButtons as button (button.id)}
          <SpkButton
            outline={true}
            text={button.text}
            buttontype="button"
            customClass="btn  btn-wave me-2"
            color={button.class}
          />
        {/each}
      </div>`;
export const databutton5 = `export const OutlineButtons = [
	{ id: 1, class: "primary", text: " Primary" },
	{ id: 2, class: "secondary", text: "  Secondary" },
	{ id: 3, class: "success", text: " Success" },
	{ id: 4, class: "danger", text: "  Danger" },
	{ id: 5, class: "warning", text: "  Warning" },
	{ id: 6, class: "info", text: "Info" },
	{ id: 7, class: "light", text: " Light" },
	{ id: 8, class: "dark", text: "  Dark" },
];`

export const button6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { OutlineButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each OutlineButtons as button (button.id)}
          <SpkButton
            outline={true}
            text={button.text}
            buttontype="button"
            customClass="rounded-pill btn-wave me-2"
            color={button.class}
          />
        {/each}
      </div>`;

export const button7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { GradientButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
{#each GradientButtons as button (button.id)}
  <SpkButton
    text={button.text}
    buttontype="button"
    customClass=" btn-wave me-2"
    color={button.class}
  />
{/each}
</div>`;
export const databutton7 = `export const GradientButtons = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "secondary-gradient", text: "Secondary" },
	{ id: 3, class: "success-gradient", text: "Success" },
	{ id: 4, class: "danger-gradient", text: "Danger" },
	{ id: 5, class: "warning-gradient", text: "Warning" },
	{ id: 6, class: "info-gradient", text: "Info" },
	{ id: 7, class: "orange-gradient", text: " Orange" },
	{ id: 8, class: "purple-gradient", text: "Purple" },
	{ id: 9, class: "teal-gradient", text: "  Teal" },
];
`

export const button8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { GradientButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each GradientButtons as button (button.id)}
          <SpkButton
            text={button.text}
            buttontype="button"
            customClass="rounded-pill btn-wave me-2"
            color={button.class}
          />
        {/each}
      </div>`;

export const button9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
        <div class="mb-4">
          <SpkButton
            buttontype="button"
            color="primary"
            customClass=""
            disabled={true}
            text="Primary button"
          />
          <SpkButton
            buttontype="button"
            color="secondary"
            customClass=""
            disabled={true}
            text="Button"
          />
          <SpkButton
            buttontype="button"
            color="primary"
            outline={true}
            customClass=""
            disabled={true}
            text="Primary button"
          />
          <SpkButton
            buttontype="button"
            color="secondary"
            outline={true}
            customClass=""
            disabled={true}
            text="Button"
          />
        </div>
        <div>
          <SpkButton
            href="#!"
            color="primary"
            customClass="disabled"
            disabled={true}
            text="Primary Link"
          />
          <SpkButton
            href="#!"
            color="secondary"
            customClass="disabled"
            disabled={true}
            text="Link"
          />
        </div>
      </div>`;

export const button10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
        <div class="mb-4">
          <SpkButton
            buttontype="button"
            color="primary"
            customClass="btn-wave"
            text="Toggle button"
          />
          <SpkButton
            buttontype="button"
            color="secondary"
            customClass="btn-wave"
            active={true}
            text="Active toggle button"
          />
          <SpkButton
            buttontype="button"
            color="teal"
            customClass="btn-wave"
            disabled={true}
            text="Disabled toggle button"
          />
        </div>
        <div>
          <SpkButton
            buttontype="button"
            href="#!"
            color="primary"
            customClass="btn-wave"
            text="Toggle link"
          />
          <SpkButton
            buttontype="button"
            href="#!"
            color="secondary"
            customClass="btn-wave"
            active={true}
            text="Active toggle link"
          />
          <SpkButton
            buttontype="button"
            href="#!"
            color="teal"
            customClass="btn-wave disabled"
            disabled={true}
            text="Disabled toggle link"
          />
        </div>
      </div>`;

export const button11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
        <SpkButton
          href="#!"
          color="primary"
          customClass="disabled"
          disabled={true}
          text="Primary Link"
        />
        <SpkButton
          href="#!"
          color="secondary"
          customClass="disabled"
          disabled={true}
          text="Link"
        />
      </div>`;

export const button12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { LoadingbButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list d-md-flex flex-wrap">
{#each LoadingbButtons as button}
  <SpkButton
    color={button.variant}
    customClass="btn btn-loader"
    disabled={button.disabled}
  >
    <span class="me-2">{button.text}</span>
    {#if button.loading}
      <span class="loading">
        <i class={"fs-16 {button.icon}"}></i>
      </span>
    {/if}
  </SpkButton>
{/each}
</div>`;
export const databutton12 = `export const LoadingbButtons = [
    { variant: 'primary', text: 'Loading', icon: 'ri-loader-2-fill', loading: true },
    { variant: 'outline-secondary', text: 'Loading', icon: 'ri-loader-2-fill', loading: true },
    { variant: 'info-transparent', text: 'Loading', icon: 'ri-loader-4-line', loading: true },
    { variant: 'warning-transparent', text: 'Loading', icon: 'ri-loader-5-line', loading: true },
    { variant: 'success', text: 'Disabled', icon: 'ri-refresh-line', loading: true, disabled: true }
  ];`;

export const button13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { iconbuttons,roundediconbuttons ,outlineiconbuttons} from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list d-md-flex d-block">
        <div class="mb-md-0 mb-2">
          {#each iconbuttons as button}
            <SpkButton
              color={button.variant}
              customClass={"btn-icon btn-wave waves-effect waves-light {button.class || ""}"}
            >
              <i class={"fs-15 {button.icon}"}></i>
            </SpkButton>
          {/each}
        </div>

        <div class="mb-md-0 mb-2">
          {#each roundediconbuttons as button}
            <SpkButton
              color={button.variant}
              customClass={"btn-icon rounded-pill btn-wave waves-effect waves-light {button.class || ""}"}
            >
              <i class={"fs-15 {button.icon}"}></i>
            </SpkButton>
          {/each}
        </div>
        <div class="">
          {#each outlineiconbuttons as button}
            <SpkButton
              outline={true}
              color={button.variant}
              customClass={"btn-icon  rounded-pill btn-wave waves-effect waves-light "}
            >
              <i class={"fs-15 {button.icon}"}></i>
            </SpkButton>
          {/each}
        </div>
      </div>`;
export const databutton13 = `export  const iconbuttons = [
    { variant: 'primary', icon: 'ri-bank-fill' },
    { variant: 'info', icon: 'ri-medal-line' },
    { variant: 'danger', icon: 'ri-archive-line' },
    { variant: 'warning', icon: 'ri-calendar-2-line', class: 'me-5' }
  ];
  export  const roundediconbuttons = [
    { variant: 'primary-transparent', icon: 'ri-home-smile-line' },
    { variant: 'secondary-transparent', icon: 'ri-delete-bin-line' },
    { variant: 'success-transparent', icon: 'ri-notification-3-line' },
    { variant: 'danger-transparent', icon: 'ri-calendar-2-line', class: 'me-5' }
  ];
  export  const outlineiconbuttons = [
    { variant: 'primary', icon: 'ri-phone-line' },
    { variant: 'secondary', icon: 'ri-customer-service-2-line' },
    { variant: 'success', icon: 'ri-live-line' },
    { variant: 'danger', icon: 'ri-save-line', }
  ]; `;

export const button14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { GhostButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each GhostButtons as button}
          <SpkButton
            buttontype="button"
            color={button.class}
            text={button.text}
            customClass=" btn-wave me-2"
          ></SpkButton>
        {/each}
      </div>`;

export const databutton14 = `export const GhostButtons = [
        { id: 1, class: "primary-ghost", text: "Primary" },
        { id: 2, class: "secondary-ghost", text: "Secondary" },
        { id: 3, class: "success-ghost", text: "Success" },
        { id: 4, class: "danger-ghost", text: "Danger" },
        { id: 5, class: "warning-ghost", text: "Warning" },
        { id: 6, class: "info-ghost", text: "Info" },
    ];`;

export const button15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
<SpkButton
  buttontype="button"
  color="primary"
  customClass="  btn-wave"
  href="#!"
  role="button"
  text="Link"
/>
<SpkButton
  buttontype="submit"
  color="secondary"
  customClass="  btn-wave"
  role="button"
  text="Button"
/>
<SpkButton
  as="input"
  buttontype="button"
  customClass="btn btn-info"
  value="Input "
/>
<SpkButton
  as="input"
  customClass="btn btn-warning"
  buttontype="submit"
  value="Submit"
/>
<SpkButton
  as="input"
  customClass="btn btn-success "
  buttontype="reset"
  value="Reset"
/>
</div>`;

export const button16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { SocialIconButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each SocialIconButtons as button}
          <SpkButton
            color={button.class1}
            customClass=" btn-icon  btn-wave waves-effect waves-light"
          >
            <i class={"fs-16 ri-{button.class}-line"}></i>
          </SpkButton>
        {/each}
      </div>`;
export const databutton16 = `export const SocialIconButtons = [
	{ id: 1, class: "facebook", class1: "facebook" },
	{ id: 2, class: "twitter-x", class1: "twitter" },
	{ id: 3, class: "instagram", class1: "instagram" },
	{ id: 4, class: "github", class1: "github" },
	{ id: 5, class: "youtube", class1: "youtube" },
	{ id: 5, class: "google", class1: "google" },
]; `
export const button17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
<SpkButton
  buttontype="button"
  color="primary"
  size="sm"
  customClass="  btn-wave"
  text="Small button"
/>
<SpkButton
  buttontype="button"
  color="secondary"
  customClass=" btn-wave"
  text="Default button"
/>
<SpkButton
  buttontype="button"
  color="success"
  size="lg"
  customClass=" btn-wave"
  text="Large button"
/>
</div>`;

export const button18 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
<SpkButton
  buttontype="button"
  color="primary"
  size="w-xs"
  customClass="  btn-wave"
  text="XS"
/>
<SpkButton
  buttontype="button"
  color="secondary"
  size="w-sm"
  customClass="  btn-wave"
  text="SM"
/>
<SpkButton
  buttontype="button"
  color="warning"
  size="w-md"
  customClass="  btn-wave"
  text="MD"
/>
<SpkButton
  buttontype="button"
  color="info"
  size="w-lg"
  customClass="  btn-wave"
  text="LG"
/>
</div>`;

export const button19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list d-flex">
        <div class="me-5">
          <SpkButton
            color="primary"
            customClass="  shadow-sm btn-wave"
            text="Button"
          />
          <SpkButton
            color="primary"
            customClass=" shadow btn-wave"
            text="Button"
          />
          <SpkButton
            color="primary"
            customClass=" shadow-lg btn-wave"
            text="Button"
          />
        </div>
        <div>
          <SpkButton
            color="secondary"
            size="sm"
            customClass="   shadow-sm btn-wave"
            text="Button"
          />
          <SpkButton
            color="info"
            customClass="  shadow btn-wave"
            text="Button"
          />
          <SpkButton
            color="success"
            size="lg"
            customClass="   shadow-lg btn-wave"
            text="Button"
          />
        </div>
      </div>`;

export const button20 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { ColoredButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
        {#each ColoredButtons as button (button.id)}
          <SpkButton
            color={button.class}
            customClass={" shadow-{button.class} btn-wave"}
            text="Button"
          />
        {/each}
      </div>`;
export const databutton20 = `export const ColoredButtons = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" },
	{ id: 7, class: "purple" },
	{ id: 8, class: "orange" },
];`;
export const button21 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { ColoredButtons } from "$lib/data/uielements/buttonsdata.js";

<div class="btn-list">
{#each ColoredButtons as button (button.id)}
  <SpkButton
    color={button.class}
    customClass="btn-raised-shadow btn-wave"
    text="Button"
  />
{/each}
</div>`;

export const button22 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
<SpkButton color="primary" customClass="label-btn" text="Primary">
  <i class="ri-chat-smile-line label-btn-icon me-2"></i>
</SpkButton>
<SpkButton color="secondary" customClass="label-btn" text="Secondary">
  <i class="ri-settings-4-line label-btn-icon me-2"></i>
</SpkButton>
<SpkButton
  color="warning"
  customClass="label-btn rounded-pill"
  text="Warning"
>
  <i class="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
</SpkButton>
<SpkButton
  color="info"
  customClass="label-btn rounded-pill"
  text="Info"
>
  <i class="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
</SpkButton>
<SpkButton
  color="success"
  customClass="label-btn label-end"
  text="Success"
>
  <i class="ri-thumb-up-line label-btn-icon ms-2"></i>
</SpkButton>
<SpkButton
  color="danger"
  customClass="label-btn label-end rounded-pill"
  text="Cancel"
>
  <i class="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
</SpkButton>
</div>`;

export const button23 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
<SpkButton
  color="info"
  customClass=" custom-button rounded-pill"
  text=" Twitter"
>
  <span class="custom-btn-icons"
    ><i class="ri-twitter-x-line text-info"></i></span
  >
</SpkButton>
<SpkButton
  color="teal-light"
  customClass=" btn-border-down"
  text="Border"
/>
<SpkButton
  color="secondary-light"
  customClass=" btn-border-start"
  text="Border"
/>
<SpkButton
  color="purple-light"
  customClass=" btn-border-end"
  text="Border"
/>
<SpkButton
  color="warning-light"
  customClass=" btn-border-top"
  text="Border"
/>
<SpkButton
  color="secondary"
  customClass=" btn-glare"
  text="Glare Button"
/>
<SpkButton
  color="danger"
  customClass=" btn-hover btn-hover-animate"
  text="Like"
/>
<SpkButton
  color="success"
  customClass=" btn-darken-hover"
  text="Hover"
/>
<SpkButton
  color="orange"
  customClass=" btn-custom-border"
  text="Hover"
/>
</div>`;

export const button24 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
<div class="d-grid gap-2 mb-4">
  <SpkButton
    color="primary"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
  <SpkButton
    color="secondary"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
</div>
<div class="d-grid gap-2 d-md-block">
  <SpkButton
    color="info"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
  <SpkButton
    color="success"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <SpkButton
    color="danger"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
  <SpkButton
    color="warning"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
</div>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <SpkButton
    color="teal"
    customClass="me-md-2 btn-wave"
    buttontype="button"
    text="Button"
  />
  <SpkButton
    color="purple"
    customClass="btn-wave"
    buttontype="button"
    text="Button"
  />
</div>
</div>`;

export const button25 = `<div class="btn-list d-md-flex d-block gap-5">
                                    <div class="mb-md-0 mb-2">
                                        <button class="btn btn-sm btn-icon btn-primary btn-wave">
                                            <i class="ri-bank-fill"></i>
                                        </button>
                                        <button class="btn btn-icon btn-info btn-wave">
                                            <i class="ri-medal-line"></i>
                                        </button>
                                        <button class="btn btn-lg btn-icon btn-danger btn-wave">
                                            <i class="ri-archive-line"></i>
                                        </button>
                                    </div>
                                    <div class="mb-md-0 mb-2">
                                        <button class="btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave">
                                            <i class="ri-home-smile-line"></i>
                                        </button>
                                        <button class="btn btn-icon btn-secondary-light rounded-pill btn-wave">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                        <button class="btn btn-lg btn-icon btn-success-light rounded-pill btn-wave">
                                            <i class="ri-notification-3-line"></i>
                                        </button>
                                    </div>
                                    <div class="">
                                        <button class="btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave">
                                            <i class="ri-phone-line"></i>
                                        </button>
                                        <button class="btn btn-icon btn-outline-teal rounded-pill btn-wave">
                                            <i class="ri-customer-service-2-line"></i>
                                        </button>
                                        <button class="btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave">
                                            <i class="ri-live-line"></i>
                                        </button>
                                    </div>
                                </div>

`
/*------ Buttons(prism-code for showcode purpose) end ------*/

/*------ Buttongroup(prism-code for showcode purpose) start ------*/
export const btngroup1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup class="" role="group" aria-label="Basic example">
        <SpkButton color="info" buttontype="button" customClass="btn-wave"
          ><i class="bi bi-skip-backward"></i></SpkButton
        >
        <SpkButton color="info" buttontype="button" customClass="btn-wave"
          ><i class="bi bi-pause"></i></SpkButton
        >
        <SpkButton color="info" buttontype="button" customClass="btn-wave"
          ><i class="bi bi-skip-forward"></i></SpkButton
        >
      </ButtonGroup>`;

export const btngroup2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup class="">
        <SpkButton
          color="primary"
          active
          href="#"
          customClass="  active btn-wave"
          aria-current="page"
          text="Active link"
        />
        <SpkButton color="primary" href="#" customClass="" text="Link" />
        <SpkButton color="primary" href="#" customClass=" " text="Link" />
      </ButtonGroup>`;

export const btngroup3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup
        class=""
        role="group"
        aria-label="Basic mixed styles example"
      >
        <SpkButton
          color="danger"
          buttontype="button"
          customClass="btn-wave"
          text="Left"
        />
        <SpkButton
          color="warning"
          buttontype="button"
          customClass="btn-wave"
          text="Middle"
        />
        <SpkButton
          color="success"
          buttontype="button"
          customClass="btn-wave"
          text="Right"
        />
      </ButtonGroup>`;

export const btngroup4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup
        class="btn-group1"
        role="group"
        aria-label="Basic outlined example"
      >
        <SpkButton
          outline={true}
          color="primary"
          buttontype="button"
          customClass="btn-wave"
          text="Left"
        />
        <SpkButton
          outline={true}
          color="primary"
          buttontype="button"
          customClass="btn-wave"
          text="Middle"
        />
        <SpkButton
          outline={true}
          color="primary"
          buttontype="button"
          customClass="btn-wave"
          text="Right"
        />
      </ButtonGroup>`;

export const btngroup5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup
        class="btn-group2"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input type="checkbox" class="btn-check" id="btncheck1" />
        <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label
        >
        <input type="checkbox" class="btn-check" id="btncheck2" />
        <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label
        >
        <input type="checkbox" class="btn-check" id="btncheck3" />
        <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label
        >
      </ButtonGroup>`;

export const btngroup6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup
class="btn-group2"
role="group"
aria-label="Basic radio toggle button group"
>
<input
  type="radio"
  class="btn-check"
  name="btnradio"
  id="btnradio1"
  checked
/>
<label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
<input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
<label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>
<input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
<label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</ButtonGroup>`;

export const btngroup7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup
            class=" btn-group-lg my-1 me-1"
            role="group"
            aria-label="Large button group"
          >
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Left"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Middle"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Right"
            />
          </ButtonGroup>
          <ButtonGroup
            class=" my-1 me-1"
            role="group"
            aria-label="Default button group"
          >
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Left"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Middle"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Right"
            />
          </ButtonGroup>
          <ButtonGroup
            class=" btn-group-sm my-1 me-1"
            role="group"
            aria-label="Small button group"
          >
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Left"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Middle"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Right"
            />
          </ButtonGroup>`;

export const btngroup8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup ,ButtonToolbar,InputGroup, InputGroupText, Input,} from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonToolbar
class="mb-4 btn-toolbar"
role="toolbar"
aria-label="Toolbar with button groups"
>
<ButtonGroup
  class=" me-2 my-1"
  role="group"
  aria-label="First group"
>
  <SpkButton color="primary" buttontype="button" text="1" />
  <SpkButton color="primary" buttontype="button" text="2" />
  <SpkButton color="primary" buttontype="button" text="3" />
  <SpkButton color="primary" buttontype="button" text="4" />
</ButtonGroup>
<ButtonGroup
  class=" me-2 my-1"
  role="group"
  aria-label="Second group"
>
  <SpkButton color="secondary" buttontype="button" text="5" />
  <SpkButton color="secondary" buttontype="button" text="6" />
  <SpkButton color="secondary" buttontype="button" text="7" />
</ButtonGroup>
<ButtonGroup class=" my-1" role="group" aria-label="Third group">
  <SpkButton color="info" buttontype="button" class="btn btn-info"
    >8</SpkButton
  >
</ButtonGroup>
</ButtonToolbar>
<ButtonToolbar
class="mb-3 btn-toolbar"
role="toolbar"
aria-label="Toolbar with button groups"
>
<ButtonGroup
  class=" me-2 my-1"
  role="group"
  aria-label="First group"
>
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="1"
  />
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="2"
  />
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="3"
  />
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="4"
  />
</ButtonGroup>
<InputGroup>
  <InputGroupText id="btnGroupAddon">@</InputGroupText>
  <Input
    type="text"
    placeholder="Input group example"
    aria-label="Input group example"
    aria-describedby="btnGroupAddon"
  />
</InputGroup>
</ButtonToolbar>
<ButtonToolbar
class="justify-content-between btn-toolbar"
role="toolbar"
aria-label="Toolbar with button groups"
>
<ButtonGroup class=" my-1" role="group" aria-label="First group">
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="1"
  />
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="2"
  />
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="3"
  />
  <SpkButton
    outline={true}
    color="secondary"
    buttontype="button"
    text="4"
  />
</ButtonGroup>
<InputGroup>
  <InputGroupText id="btnGroupAddon2">@</InputGroupText>
  <Input
    type="text"
    placeholder="Input group example"
    aria-label="Input group example"
    aria-describedby="btnGroupAddon2"
  />
</InputGroup>
</ButtonToolbar>`;

export const btngroup9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,} from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<ButtonGroup
            class=""
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <SpkButton color="primary" buttontype="button" text="1" />
            <SpkButton color="primary" buttontype="button" text="2" />
            <Dropdown
              title="Dropdown"
              id="bg-nested-dropdown"
              direction="down"
              class="btn-group"
              role="group"
            >
              <DropdownToggle
                color="primary"
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu class="">
                <DropdownItem
                  ><a class="" href="#!">Dropdown link</a></DropdownItem
                >
                <DropdownItem
                  ><a class="" href="#!">Dropdown link</a></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>`;

export const btngroup10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,} from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

 <div class="row gap-2 justify-content-between">
<Col sm={3}>
  <ButtonGroup
    vertical
    role="group"
    aria-label="Vertical button group"
  >
    <SpkButton color="primary" butontype="button">Button</SpkButton>
    <SpkButton color="primary" butontype="button">Button</SpkButton>
    <Dropdown
      title="Dropdown"
      id="bg-nested-dropdown"
      direction="down"
      class="btn-group"
      role="group"
    >
      <DropdownToggle
        color="primary"
        class="dropdown-toggle"
        typetype="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </DropdownToggle>
      <DropdownMenu class="">
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
    <SpkButton color="primary" butontype="button">Button</SpkButton>
    <SpkButton color="primary" butontype="button">Button</SpkButton>
    <Dropdown
      title="Dropdown"
      id="bg-nested-dropdown"
      direction="down"
      class="btn-group"
      role="group"
    >
      <DropdownToggle
        color="primary"
        class="dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </DropdownToggle>
      <DropdownMenu class="">
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
    <Dropdown
      title="Dropdown"
      id="bg-nested-dropdown"
      direction="down"
      class="btn-group"
      role="group"
    >
      <DropdownToggle
        color="primary"
        class="dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </DropdownToggle>
      <DropdownMenu class="">
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
    <Dropdown
      title="Dropdown"
      id="bg-nested-dropdown"
      direction="down"
      class="btn-group"
      role="group"
    >
      <DropdownToggle
        color="primary"
        class="dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </DropdownToggle>
      <DropdownMenu class="">
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
        <DropdownItem
          ><a class="" href="#!">Dropdown link</a></DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
  </ButtonGroup>
</Col>
<Col sm={3}>
  <ButtonGroup
    vertical
    role="group"
    aria-label="Vertical button group"
  >
    <SpkButton color="info" buttontype="button" text="Button" />
    <SpkButton color="info" buttontype="button" text="Button" />
    <SpkButton color="info" buttontype="button" text="Button" />
    <SpkButton color="info" buttontype="button" text="Button" />
    <SpkButton color="info" buttontype="button" text="Button" />
    <SpkButton color="info" buttontype="button" text="Button" />
  </ButtonGroup>
</Col>
<Col sm={3}>
  <ButtonGroup
    vertical
    role="group"
    aria-label="Vertical radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="vbtn-radio"
      id="vbtn-radio1"
      checked
    />
    <label class="btn btn-outline-danger mb-0" for="vbtn-radio1"
      >Radio 1</label
    >
    <input
      type="radio"
      class="btn-check"
      name="vbtn-radio"
      id="vbtn-radio2"
    />
    <label class="btn btn-outline-danger mb-0" for="vbtn-radio2"
      >Radio 2</label
    >
    <input
      type="radio"
      class="btn-check"
      name="vbtn-radio"
      id="vbtn-radio3"
    />
    <label class="btn btn-outline-danger mb-0" for="vbtn-radio3"
      >Radio 3</label
    >
  </ButtonGroup>
</Col>
</div>
`;

export const btngroup11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonGroup } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import { SocialIconButtons } from "$lib/data/uielements/buttonsdata.js";

<ButtonGroup
            class="btn-group"
            role="group"
            aria-label="Basic example"
          >
            {#each SocialIconButtons as button}
              <SpkButton
                color={button.class1}
                customClass=" btn-icon  btn-wave waves-effect waves-light"
              >
                <i class={"fs-16 ri-{button.class}-line"}></i>
              </SpkButton>
            {/each}
          </ButtonGroup>`;
/*------ Buttongroup(prism-code for showcode purpose) end ------*/

/*------ Dropdowns(prism-code for showcode purpose) start ------*/
export const dropdown1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

<div class="btn-list d-flex align-items-center flex-wrap">
<Dropdown class="dropdown">
    <DropdownToggle color='' class="btn btn-primary dropdown-toggle" type="button"
    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
    </DropdownToggle>
    <DropdownMenu as="ul" class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <DropdownItem as="li" href="#!">Action</DropdownItem>
    <DropdownItem as="li" href="#!">Another action</DropdownItem>
    <DropdownItem as="li" href="#!">Something else here</DropdownItem>
    </DropdownMenu>
</Dropdown>
<Dropdown class="dropdown">
    <DropdownToggle class="btn btn-secondary dropdown-toggle" href="#!" role="button"
    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
    </DropdownToggle>
    <DropdownMenu as="ul" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <DropdownItem as="li" href="#!">Action</DropdownItem>
    <DropdownItem as="li" href="#!">Another action</DropdownItem>
    <DropdownItem as="li" href="#!">Something else here</DropdownItem>
    </DropdownMenu>
</Dropdown>
</div>`;

export const dropdown2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { SingleButtons } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                {#each SingleButtons as dropdown}
                                <div class="btn-group" key={Math.random()}>
                                    <Dropdown>
                                      <DropdownToggle  type="button" color={dropdown.class} class="btn dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                      </DropdownToggle>
                                      <DropdownMenu as="ul">
                                        <DropdownItem as="li" href="#!">Action</DropdownItem>
                                        <DropdownItem as="li" href="#!">Another action</DropdownItem>
                                        <DropdownItem as="li" href="#!">Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                {/each}
                            </div>`;
export const datadropdown2 = `export const SingleButtons = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; `
export const dropdown3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { SingleButtons } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                {#each SingleButtons as dropdown}
                                <div class="btn-group" key={Math.random()}>
                                    <Dropdown>
                                      <DropdownToggle  type="button" color={dropdown.class} class="btn dropdown-toggle rounded-pill"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                      </DropdownToggle>
                                      <DropdownMenu as="ul">
                                        <DropdownItem as="li" href="#!">Action</DropdownItem>
                                        <DropdownItem as="li" href="#!">Another action</DropdownItem>
                                        <DropdownItem as="li" href="#!">Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                {/each}
                            </div>`;

export const dropdown4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { OutlineButtons } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                {#each OutlineButtons as dropdown}
                                <div class="btn-group me-0" >
                                  <Dropdown>
                                    <DropdownToggle color={dropdown.class} type="button" class="btn  dropdown-toggle"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                      Action
                                    </DropdownToggle>
                                    <DropdownMenu as="ul">
                                      <DropdownItem as="li" href="#!">Action</DropdownItem>
                                      <DropdownItem as="li" href="#!">Another action</DropdownItem>
                                      <DropdownItem as="li" href="#!">Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                              {/each}
                            </div>`;
export const datadropdown4 = `export const menuOptions = [
    { lable: "Action", link: "#!" },
    { lable: "Another action", link: "#!" },
    { lable: "Something else here", link: "#!" },
    { divider: true },
    { lable: "Separated link", link: "#!" },
  ]; `
export const dropdown5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { SingleButtons } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                {#each OutlineButtons as dropdown}
                                <div class="btn-group me-0" >
                                  <Dropdown>
                                    <DropdownToggle color={dropdown.class} type="button" class="btn dropdown-toggle rounded-pill"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                      Action
                                    </DropdownToggle>
                                    <DropdownMenu as="ul">
                                      <DropdownItem as="li" href="#!">Action</DropdownItem>
                                      <DropdownItem as="li" href="#!">Another action</DropdownItem>
                                      <DropdownItem as="li" href="#!">Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                            {/each}
                            </div>`;

export const dropdown6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

<div class="btn-group my-1">
<Dropdown >
    <DropdownToggle split color="light" id="dropdown-split-basic" >Action</DropdownToggle>
    <DropdownMenu>
      <DropdownItem href="#/action-1">Action</DropdownItem>
      <DropdownItem href="#/action-2">Another action</DropdownItem>
      <DropdownItem href="#/action-3">Something else</DropdownItem>
      <DropdownItem divider />
      <DropdownItem as="li" href="#!">Separated link</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>`;

export const dropdown7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

<div class="btn-group my-1 me-2">
                              <Dropdown>
                                <DropdownToggle color='' class="btn btn-primary btn-lg dropdown-toggle" type="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                  Large button
                                </DropdownToggle>
                                <DropdownMenu as="ul">
                                  <DropdownItem as="li" href="#!">Action</DropdownItem>
                                  <DropdownItem as="li" href="#!">Another action</DropdownItem>
                                  <DropdownItem as="li" href="#!">Something else here</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                            <div class="btn-group my-1 me-2">
                              <Dropdown >
                                <DropdownToggle  split size="lg" color='light' class="btn  dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Large split button
                              </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem href="#/action-1">Action</DropdownItem>
                                  <DropdownItem href="#/action-2">Another action</DropdownItem>
                                  <DropdownItem href="#/action-3">Something else</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                            <div class="btn-group my-1 me-2">
                              <Dropdown>
                                <DropdownToggle size="sm" color='' class="btn btn-primary dropdown-toggle" type="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                  Small button
                                </DropdownToggle>
                                <DropdownMenu as="ul">
                                  <DropdownItem as="li" href="#!">Action</DropdownItem>
                                  <DropdownItem as="li" href="#!">Another action</DropdownItem>
                                  <DropdownItem as="li" href="#!">Something else here</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                            <div class="btn-group my-1 me-2">
                              <Dropdown >
                                <DropdownToggle  split size="sm" color='light' class="btn  dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Small split button
                              </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem href="#/action-1">Action</DropdownItem>
                                  <DropdownItem href="#/action-2">Another action</DropdownItem>
                                  <DropdownItem href="#/action-3">Something else</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem as="li" href="#!">Separated link</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>`;

export const dropdown8 = ` //<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-group dropup my-1">
<SpkDropdown Color="primary" Caret={true} parent={"Dropup"}  option={menuOptions}/> 
</div>
<div class="btn-group dropup my-1">
<button type="button" class="btn btn-info">
    Split dropup
</button>
<SpkDropdown Color="info" ToggleClass="dropdown-toggle-split" Caret={true}   option={menuOptions}/> 
</div>`;
export const datadropdown8 = `export const AlignmentButtons= [
	{ id: 1, class: "primary", text: "Dropdown", dir: "" },
	{ id: 2, class: "secondary", text: "Right-aligned menu", dir: "" },
	{ id: 3, class: "info", text: "Left-aligned, right-aligned lg", dir: "" },
	{ id: 4, class: "warning", text: "Right-aligned, left-aligned lg", dir: "" },
	{ id: 5, class: "danger", text: "Dropend", dir: "end" },
	{ id: 6, class: "success", text: "Dropstart", dir: "start" },
	{ id: 7, class: "teal", text: "Dropup", dir: "up" }
]; `

export const dropdown9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-group dropend my-1">
<SpkDropdown Color="primary" Caret={true} parent={"Dropright"}  option={menuOptions}/> 
</div>
<div class="btn-group dropend my-1">
<button type="button" class="btn btn-info">
    Split dropend
</button>
<SpkDropdown Color="info" ToggleClass="dropdown-toggle-split" Caret={true}   option={menuOptions}/> 
</div>`;

export const dropdown10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-group dropstart my-1">
<SpkDropdown Color="primary" Caret={true} parent={"Dropleft"}  option={menuOptions}/> 
</div>
<div class="btn-group dropstart my-1">
<SpkDropdown Color="info" ToggleClass="dropdown-toggle-split" Caret={true}   option={menuOptions}/> 
<button type="button" class="btn btn-info">
    Split dropend
</button>
</div>`;

export const dropdown11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<SpkDropdown Color="primary" Caret={true} parent={"Dropstart"}  option={menuOptions}/> 
`;

export const dropdown12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<SpkDropdown Color="primary" Caret={true} parent={"Dropstart"}  option={menuOptions}/> 
`;

export const dropdown13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                    <div class="btn-group">
                                        <SpkDropdown Color="primary" AutoClose={true} Caret={true} parent={" Default dropdown"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown Color="info" AutoClose="outside" Caret={true} parent={"Clickable outside"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown Color="info" AutoClose="inside" Caret={true} parent={"Clickable inside"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown Color="warning" AutoClose={false} Caret={true} parent={"Manual close"}  option={menuOptions}/> 
                                    </div>
                                </div>`;
export const dropdown14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle,  } from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";

<Dropdown  >
                                    <DropdownToggle color="secondary" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu class="dropdown-menu">
                                    <form class="px-4 py-3">
                                        <div class="mb-3">
                                            <label for="exampleDropdownFormEmail1" class="form-label">Email
                                                address</label>
                                            <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                                placeholder="email@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleDropdownFormPassword1"
                                                class="form-label">Password</label>
                                            <input type="password" class="form-control"
                                                id="exampleDropdownFormPassword1" placeholder="Password">
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                                <label class="form-check-label" for="dropdownCheck">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary">Sign in</button>
                                    </form>
                                    <DropdownItem divider ></DropdownItem>
                                    <DropdownItem class="dropdown-item" href="#!">New around here? Sign up</DropdownItem>
                                    <DropdownItem class="dropdown-item" href="#!">Forgot password?</DropdownItem>
                                </DropdownMenu>
                                </Dropdown>`;

export const dropdown15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<p class="card-title mb-3">Use <code>.dropdown-center</code> on the parent element. </p>
<SpkDropdown CustomClass="dropdown-center" Color="primary" Caret={true} parent={"Centered dropdown"}  option={menuOptions}/> 
`;

export const dropdown16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";


<p class="card-title mb-3">Use <code>.dropup-center</code>
on the parent element.
</p>
<SpkDropdown CustomClass="dropup-center dropup" Color="info" Caret={true} parent={"Centered dropup"}  option={menuOptions}/> 
`;

export const dropdown17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";


<p class="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
                                    dropdown items.</p>
                                <SpkDropdown CustomClass="" Color="primary" Caret={true} parent={"Dropdown"}  option={menuOptions}/> 
                            `;

export const dropdown18 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";


<p class="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
                                    the location of the dropdown.</p>
                                    <div class="d-flex align-items-center">
                                        <SpkDropdown CustomClass="me-1" Color="primary" Caret={true} parent={"Offset"}  option={menuOptions}/> 
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-info">Reference</button>
                                            <SpkDropdown CustomClass="me-1" Color="info" ToggleClass="dropdown-toggle-split" Caret={true}   option={menuOptions}/> 
                                        </div>
                                    </div>`;

export const dropdown19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                    <div class="btn-group">
                                        <SpkDropdown Color="primary" ToggleClass="mb-0" Caret={true} parent={"Dropdown"}  option={menuOptions}/>  
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown end={true} Color="secondary" ToggleClass="mb-0" Caret={true} parent={"Right-aligned menu"}  option={menuOptions}/>  
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown end={true} Color="secondary" menucalss="dropdown-menu-lg-end" ToggleClass="mb-0" Caret={true} parent={" Left-aligned, right-aligned lg"}  option={menuOptions}/>  
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown end={true} Color="info" menucalss="dropdown-menu-end dropdown-menu-lg-start" ToggleClass="mb-0" Caret={true} parent={"  Right-aligned, left-aligned lg"}  option={menuOptions}/>  
                                    </div>
                                    <div class="btn-group dropstart">
                                        <SpkDropdown end={true} Color="success" ToggleClass="mb-0" Caret={true} parent={"Dropstart"}  option={menuOptions}/>  
                                    </div>
                                    <div class="btn-group dropend">
                                        <SpkDropdown end={true} Color="danger" ToggleClass="mb-0" Caret={true} parent={"Dropend"}  option={menuOptions}/>  
                                    </div>
                                    <div class="btn-group dropup">
                                        <SpkDropdown end={true} Color="teal" ToggleClass="mb-0" Caret={true} parent={"Dropup"}  option={menuOptions}/> 
                                    </div>
                                </div>`;

export const dropdown20 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<SpkDropdown  theme="dark" menucalss="dropdown-menu-dark" Color="dark" ToggleClass="mb-0" Caret={true} parent={"Dropdown button"}  option={menuOptions}/> 
`;

export const dropdown21 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-group">
<SpkDropdown end={true}  Color="primary" Caret={true} parent={"Right-aligned menu example"}  option={menuOptions}/> 
</div>`;

export const dropdown22 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";


<div class="btn-group">
<SpkDropdown menucalss="dropdown-menu-lg-end"  ToggleClass="text-wrap" Color="secondary" Caret={true} parent={"Responsive alignment end"}  option={menuOptions}/> 
</div>`;

export const dropdown23 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";


<div class="btn-group">
                                    <SpkDropdown menucalss="dropdown-menu-lg-start"  ToggleClass="text-wrap" Color="info" Caret={true} parent={"Left-aligned but right aligned when large screen"}  option={menuOptions}/> 
                                </div>`;

export const dropdown24 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
<div class="btn-group">
    <SpkDropdown menucalss="dropdown-menu-primary" Color="primary" Caret={true} parent={"Primary"}  option={menuOptions}/> 
</div>
<div class="btn-group">
    <SpkDropdown menucalss="dropdown-menu-secondary" Color="secondary" Caret={true} parent={"Secondary"}  option={menuOptions}/> 
</div>
<div class="btn-group">
    <SpkDropdown menucalss="dropdown-item-warning" Color="warning" Caret={true} parent={"Warning"}  option={menuOptions}/> 
</div>
<div class="btn-group">
    <SpkDropdown menucalss="dropdown-item-info" Color="info" Caret={true} parent={"Info"}  option={menuOptions}/> 
</div>
<div class="btn-group">
    <SpkDropdown menucalss="dropmenu-light-success" Color="success-light" Caret={true} parent={"Success"}  option={menuOptions}/> 
</div>
<div class="btn-group">
    <SpkDropdown menucalss="dropmenu-light-danger" Color="danger-light" Caret={true} parent={"Danger"}  option={menuOptions}/> 
</div>
</div>`;
export const dropdown25 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { menuOptions } from "$lib/data/uielements/dropdowndata.js";

<div class="btn-list">
                                    <div class="btn-group">
                                        <SpkDropdown Color="primary-ghost" Caret={true} parent={"Primary"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown  Color="secondary-ghost" Caret={true} parent={"Secondary"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown  Color="warning-ghost" Caret={true} parent={"Warning"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown  Color="info-ghost" Caret={true} parent={"Info"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown  Color="success-ghost" Caret={true} parent={"Success"}  option={menuOptions}/> 
                                    </div>
                                    <div class="btn-group">
                                        <SpkDropdown Color="danger-ghost" Caret={true} parent={"Danger"}  option={menuOptions}/> 
                                    </div>
                                </div>`;
export const dropdown26 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p class="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
                                    <div class="bd-example">
                                        <ul class="dropdown-menu">
                                            <li><span class="dropdown-item-text">Dropdown item text</span>
                                            </li>
                                            <li><a class="dropdown-item" href="#!">Action</a></li>
                                            <li><a class="dropdown-item" href="#!">Another action</a></li>
                                            <li><a class="dropdown-item" href="#!">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>`;

export const dropdown27 = `//<!-- Prism Code: This code is only used for showcode purpose -->//

<p class="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
                                    <div class="bd-example">
                                        <ul class="dropdown-menu">
                                            <li>
                                                <h6 class="dropdown-header">Dropdown header</h6>
                                            </li>
                                            <li><a class="dropdown-item" href="#!">Action</a></li>
                                            <li><a class="dropdown-item" href="#!">Another action</a></li>
                                            <li><a class="dropdown-item" href="#!">Something else here</a></li>
                                        </ul>
                                    </div>`;

export const dropdown28 = `//<!-- Prism Code: This code is only used for showcode purpose -->//

<div class="bd-example">
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-header" href="#!">Heading</a></li>
                                        <li><a class="dropdown-item" href="#!">Action</a></li>
                                        <li><a class="dropdown-item" href="#!">Another action</a></li>
                                        <li><a class="dropdown-item" href="#!">Something else here</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#!">Separated link</a></li>
                                    </ul>
                                </div>`;

export const dropdown29 = `//<!-- Prism Code: This code is only used for showcode purpose -->//

<div class="bd-example">
                                    <div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
                                        <p>
                                            Some example text that's free-flowing within the dropdown menu.
                                        </p>
                                        <p class="mb-0">
                                            And this is more example text.
                                        </p>
                                    </div>
                                </div>`;
/*------ Dropdowns(prism-code for showcode purpose) end ------*/

/*------ Images &figures (prism-code for showcode purpose) start ------*/
export const image1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<p class="card-title mb-3">
Use <code> .img-fluid </code>class to the img tag to get responsive
image.
</p>
<div class="text-center">
<Image src="../images/media/media-48.jpg" class="img-fluid" alt="..." />
</div>`;

export const image2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";<div  class="text-center">

<p class="card-title mb-3">
Use <code>.rounded</code> class along with <code>.img-fluid</code> to get
border radius.
</p>
<div class="text-center">
<Image
  src="../images/media/media-49.jpg"
  class="img-fluid rounded"
  alt="..."
/>
</div>`;

export const image3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";
 
<p class="card-title mb-3">
        Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded
        image.
      </p>
      <div class="text-center">
        <Image
          src="../images/media/media-50.jpg"
          class="img-fluid rounded-pill"
          alt="..."
        />
      </div>`;

export const image4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";
 
<div class="d-inline-block">
        <Image
          class="rounded float-start"
          src="../images/media/media-53.jpg"
          alt="..."
        />
      </div>`;

export const image5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
class="rounded mx-auto d-block"
src="/images/media/media-55.jpg"
alt="..."
/>`;

export const image6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<div class="">
<Image
  class="rounded float-end"
  src="/images/media/media-54.jpg"
  alt="..."
/>
</div>`;

export const image7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<figure class="figure me-2">
        <Image
          class="bd-placeholder-img figure-img img-fluid rounded card-img"
          src="/images/media/media-56.jpg"
          alt="..."
        />
        <figcaption class="figure-caption">
          A caption for the above image.
        </figcaption>
      </figure>
      <figure class="figure float-end">
        <Image
          class="bd-placeholder-img figure-img img-fluid rounded card-img"
          src="../images/media/media-57.jpg"
          alt="..."
        />
        <figcaption class="figure-caption text-end">
          A caption for the above image.
        </figcaption>
      </figure>`;

export const image8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<p class="card-title mb-3">
Use <code> .img-thumbnail </code>to give an image a rounded 1px border.
</p>
<div class="text-center">
<Image src="/images/media/media-51.jpg" class="img-thumbnail" alt="..." />
</div>`;

export const image9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<p class="card-title mb-3">
Use <code> .rounded-pill </code>along with
<code> .img-thummbnail </code> to get radius.
</p>
<div class="text-center">
<Image
  src="/images/media/media-52.jpg"
  class="img-thumbnail rounded-pill"
  alt="..."
/>
</div>`;
/*------ Images &figures (prism-code for showcode purpose) end ------*/

// Links And Interactions Prism code 

export const Links1 = `

<p class="user-select-all">
                        This paragraph will be entirely selected when clicked by
                        the user.
                    </p>
                    <p class="user-select-auto">
                        This paragraph has default select behavior.
                    </p>
                    <p class="user-select-none mb-0">
                        This paragraph will not be selectable when clicked by
                        the user.
                    </p>`

export const Links2 = `<p class="user-select-all">
                            This paragraph will be entirely selected when
                            clicked by the user.
                        </p>
                        <p class="user-select-auto">
                            This paragraph has default select behavior.
                        </p>
                        <p class="user-select-none mb-0">
                            This paragraph will not be selectable when clicked
                            by the user.
                        </p>`

export const Links3 = `<p>
                            <a
                                href="javascript:void(0)"
                                class="pe-none text-primary fw-medium text-decoration-underline"
                                tabindex="-1">This link</a
                            > can not be clicked.
                        </p>
                        <p>
                            <a
                                href="javascript:void(0)"
                                class="pe-auto text-primary fw-medium text-decoration-underline"
                                >This link</a
                            > can be clicked (this is default behavior).
                        </p>
                        <p class="pe-none mb-0">
                            <a
                                href="javascript:void(0)"
                                tabindex="-1"
                                class="text-primary fw-medium text-decoration-underline"
                                >This link</a
                            >
                            can not be clicked because the
                            <code>pointer-events</code>
                            property is inherited from its parent. However,
                            <a href="javascript:void(0)" class="pe-auto"
                                >this link</a
                            >
                            has a <code>pe-auto</code> class and can be clicked.
                        </p>`

export const Links4 = `<p>
                            <a class="link-opacity-10" href="#!"
                                >Link opacity 10</a
                            >
                        </p>
                        <p>
                            <a class="link-opacity-25" href="#!"
                                >Link opacity 25</a
                            >
                        </p>
                        <p>
                            <a class="link-opacity-50" href="#!"
                                >Link opacity 50</a
                            >
                        </p>
                        <p>
                            <a class="link-opacity-75" href="#!"
                                >Link opacity 75</a
                            >
                        </p>
                        <p class="mb-0">
                            <a
                                class="link-opacity-100"
                                href="#!">Link opacity 100</a
                            >
                        </p>`

export const Links5 = ` <a
                            class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline"
                            href="#!"
                        >
                            Underline opacity 0
                        </a>`

export const Links6 = `<p>
                            <a
                                href="#!"
                                class="link-underline-primary text-decoration-underline"
                                >Primary underline</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-underline-secondary text-decoration-underline"
                                >Secondary underline</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-underline-success text-decoration-underline"
                                >Success underline</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-underline-danger text-decoration-underline"
                                >Danger underline</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-underline-warning text-decoration-underline"
                                >Warning underline</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-underline-info text-decoration-underline"
                                >Info underline</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-underline-light text-decoration-underline"
                                >Light underline</a
                            >
                        </p>
                        <p class="mb-0">
                            <a
                                href="#!"
                                class="link-underline-dark text-decoration-underline"
                                >Dark underline</a
                            >
                        </p>`

export let Links7 = `<p>
                            <a
                                href="#!"
                                class="text-decoration-underline"
                                >Default link</a
                            >
                        </p>
                        <p>
                            <a
                                class="link-offset-1 text-decoration-underline"
                                href="#!">Offset 1 link</a
                            >
                        </p>
                        <p>
                            <a
                                class="link-offset-2 text-decoration-underline"
                                href="#!">Offset 2 link</a
                            >
                        </p>
                        <p class="mb-0">
                            <a
                                class="link-offset-3 text-decoration-underline"
                                href="#!">Offset 3 link</a
                            >
                        </p>`
export let Links8 = `<p>
                            <a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0"
                                href="#!">Underline opacity 0</a
                            >
                        </p>
                        <p>
                            <a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10"
                                href="#!"
                                >Underline opacity 10</a
                            >
                        </p>
                        <p>
                            <a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25"
                                href="#!"
                                >Underline opacity 25</a
                            >
                        </p>
                        <p>
                            <a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50"
                                href="#!"
                                >Underline opacity 50</a
                            >
                        </p>
                        <p>
                            <a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75"
                                href="#!"
                                >Underline opacity 75</a
                            >
                        </p>
                        <p>
                            <a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100"
                                href="#!"
                                >Underline opacity 100</a
                            >
                        </p>`
export let Links9 = `<p>
                            <a
                                class="link-opacity-10-hover"
                                href="#!"
                                >Link hover opacity 10</a
                            >
                        </p>
                        <p>
                            <a
                                class="link-opacity-25-hover"
                                href="#!"
                                >Link hover opacity 25</a
                            >
                        </p>
                        <p>
                            <a
                                class="link-opacity-50-hover"
                                href="#!"
                                >Link hover opacity 50</a
                            >
                        </p>
                        <p>
                            <a
                                class="link-opacity-75-hover"
                                href="#!"
                                >Link hover opacity 75</a
                            >
                        </p>
                        <p class="mb-0">
                            <a
                                class="link-opacity-100-hover"
                                href="#!"
                                >Link hover opacity 100</a
                            >
                        </p>`
export const Links10 = `<p>
                            <a
                                href="#!"
                                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Primary link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Secondary link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Success link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Danger link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Warning link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Info link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Light link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline"
                                >Dark link</a
                            >
                        </p>
                        <p>
                            <a
                                href="#!"
                                class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline"
                                >Emphasis link</a
                            >
                        </p>`

// End Links and Interactions 

/*------ ListGroup (prism-code for showcode purpose) start ------*/
export const Listgroup1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem,Image } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  BasicButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup >
{#each BasicButtons as listgroup}
    <ListGroupItem as="li" >
        <div class="d-flex align-items-center">
            <span class="avatar avatar-sm">
                <Image src={listgroup.src} alt="img" />
            </span>
            <div class="ms-2 fw-semibold">
                {listgroup.text}
            </div>
        </div>
    </ListGroupItem>
{/each}
</SpkListGroup> `;
export const dataListgroup1 = `export const BasicButtons = [
	{ id: 1, src: "../images/faces/1.jpg", text: "Alicia Sierra" },
	{ id: 2, src: "../images/faces/3.jpg", text: "Samantha Mery" },
	{ id: 3, src: "../images/faces/6.jpg", text: "Juliana Pena" },
	{ id: 4, src: "../images/faces/15.jpg", text: "Adam Smith" },
	{ id: 5, src: "../images/faces/13.jpg", text: "Farhaan Amhed" },
];`
export const Listgroup2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  ActiveButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup  as="ul">
                                    {#each ActiveButtons as listgroup}
                                        <ListGroupItem as="li" class={"list-group-item {listgroup.class1}"} aria-current="true">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <span class="fs-15 ">
                                                        <i class={"bi bi-{listgroup.class}"}></i>
                                                    </span>
                                                </div>
                                                <div class="ms-2">
                                                    {listgroup.text}
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    {/each}
                                </SpkListGroup>`;
export const dataListgroup2 = `export const ActiveButtons = [
	{ id: 1, class: "house-door", text: "Home", class1: "active" },
	{ id: 2, class: "bell", text: "Notifications", class1: "" },
	{ id: 3, class: "gift", text: "Sent Messages", class1: "" },
	{ id: 4, class: "person", text: "New Requests", class1: "" },
	{ id: 5, class: "trash3", text: "Deleted Messages", class1: "" },
];`;
export const Listgroup3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";

<SpkListGroup  as="ul">
<ListGroupItem as="li" disabled class="" aria-disabled="true">A disabled item meant to be disabled
</ListGroupItem>
<ListGroupItem as="li">Simply dummy text of the printing</ListGroupItem>
<ListGroupItem as="li">There are many variations of passages</ListGroupItem>
<ListGroupItem as="li">All the Lorem Ipsum generators</ListGroupItem>
<ListGroupItem as="li">Written in 45 BC. This book is a treatise on the theory</ListGroupItem>
</SpkListGroup>`;

export const Listgroup4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";

<SpkListGroup  Flush={true} class="">
                                    <ListGroupItem class="fw-semibold"><i class="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroupItem>
                                    <ListGroupItem class="fw-semibold"><i class="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span class="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroupItem>
                                    <ListGroupItem class="fw-semibold"><i class="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span class="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroupItem>
                                    <ListGroupItem class="fw-semibold"><i class="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroupItem>
                                    <ListGroupItem class="fw-semibold"><i class="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span class="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroupItem>
                                </SpkListGroup>`;

export const Listgroup5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  LinksButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup  >
                                    {#each LinksButtons as listgroup}
                                        <ListGroupItem action tag="a" href="#" class={"{listgroup.class1}"} 
                                            aria-current="true">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <span class={"avatar avatar-xs bg-{listgroup.class} text-{listgroup.color} avatar-rounded"}>
                                                        {listgroup.text1}
                                                    </span>
                                                </div>
                                                <div class="ms-2">{listgroup.text}</div>
                                            </div>
                                        </ListGroupItem>
                                    {/each}
                               </SpkListGroup>`;
export const dataListgroup5 = `export const LinksButtons = [
	{ id: 1, class: "white", text: "California", class1: "active", text1: "C", color: "default" },
	{ id: 2, class: "secondary", text: "New Jersey", class1: "", text1: "N", color: "" },
	{ id: 3, class: "info", text: "Los Angeles", class1: "", text1: "L", color: "" },
	{ id: 4, class: "warning", text: "Miami Florida", class1: "", text1: "M", color: "" },
	{ id: 5, class: "success", text: "Washington D.C", class1: "disabled", text1: "W", color: "" },
]; `
export const Listgroup6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";

<SpkListGroup  >
<ListGroupItem action tag="button" active class=" " aria-current="true">Simply dummy text of the printing<span class="badge float-end bg-primary">243</span></ListGroupItem>
<ListGroupItem action tag="button" class="">There are many variations of passages<span class="badge float-end bg-secondary-transparent">35</span></ListGroupItem>
<ListGroupItem action tag="button" class="">All the Lorem Ipsum generators<span class="badge float-end bg-info-transparent">132</span></ListGroupItem>
<ListGroupItem action tag="button" class="">All the Lorem Ipsum generators<span class="badge float-end bg-success-transparent">2525</span></ListGroupItem>
<ListGroupItem action tag="button" class="" disabled>A disabled item meant to be disabled<span class="badge float-end bg-danger-transparent">21</span></ListGroupItem>
</SpkListGroup>`;

export const Listgroup7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  ContextualButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup  as="ul">
                                    {#each ContextualButtons as listgroup}
                                    <ListGroupItem as="li" color={listgroup.class} >{listgroup.text}</ListGroupItem>
                                    {/each}
                               </SpkListGroup>`;
export const dataListgroup7 = `export const ContextualButtons = [
	{ id: 1, text: "A simple default list group item", class: " ", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; `;
export const Listgroup8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  ContextualButtons } from "$lib/data/uielements/listgroupdata.js";


<SpkListGroup  as="ul">
                                    {#each ContextualButtons as listgroup}
                                    <ListGroupItem as="li" action color={listgroup.class} >{listgroup.text}</ListGroupItem>
                                    {/each}
                               </SpkListGroup>`;

export const Listgroup9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  ContextualButtons } from "$lib/data/uielements/listgroupdata.js";


<SpkListGroup  as="ul">
{#each ContextualButtons as listgroup}
   <ListGroupItem class={"list-item-solid-{listgroup.class} {listgroup.class1}"} as="li" >{listgroup.text}</ListGroupItem>
{/each}
</SpkListGroup>`;

export const Listgroup10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  CustomButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup  class="">
                                    {#each CustomButtons as listgroup}
                                        <ListGroupItem action class={listgroup.class1}
                                            aria-current="true">
                                            <div class="d-flex w-100 justify-content-between gap-1">
                                                <h6 class={"mb-1 fw-semibold text-{listgroup.color}"}>{listgroup.heading}</h6>
                                                <small class={listgroup.class2}>{listgroup.text1}</small>
                                            </div>
                                            <p class="mb-1">{listgroup.text2}</p>
                                            <small>{listgroup.text3}.</small>
                                        </ListGroupItem>
                                   {/each}
                               </SpkListGroup>`;
export const dataListgroup10 = `export const CustomButtons = [
	{ id: 1, heading: "Web page editors now use Lorem Ipsum?", text1: "3 days ago", class1: "active", text2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.", text3: "24,Nov 2022", class2: "", color: "fixed-white" },
	{ id: 2, heading: "Richard McClintock, a Latin professor?", text1: "4 hrs ago", class1: "", text2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.", text3: "30,Nov 2022.", class2: "text-muted", color: "" },
	{ id: 3, heading: "It uses a dictionary of over 200 Latin words?", text1: "15 hrs ago", class1: "", text2: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.", text3: "4,Nov 2022.", class2: "text-muted", color: "" },
	{ id: 4, heading: "The standard Lorem Ipsum used since the 1500s?", text1: "45 mins ago", class1: "", text2: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", text3: "28,Oct 2022.", class2: "text-muted", color: "" },
];`
export const Listgroup11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  SubheadingsButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup Numbered={true} as="ol" >
                                    {#each SubheadingsButtons as listgroup}
                                        <ListGroupItem as="li" class="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
                                            <div class="ms-2 me-auto text-muted">
                                                <div class="fw-semibold fs-14 text-default">{listgroup.text1}</div>
                                                {listgroup.text2}
                                            </div>
                                            <Badge color={listgroup.class}>{listgroup.text3}</Badge>
                                        </ListGroupItem>
                                    {/each}
                               </SpkListGroup>`;
export const dataListgroup11 = `export const SubheadingsButtons = [
	{ id: 1, text1: "What Happened?", text2: "Many experts have recently suggested may exist.", text3: "32 Views", class: "primary" },
	{ id: 2, text1: "It Was Amazing!", text2: " His idea involved taking red.", text3: "52 Views", class: "secondary" },
	{ id: 3, text1: "News Is A Great Weapon.", text2: "News can influence in many ways.", text3: "1,204 Views", class: "success" },
	{ id: 4, text1: "majority have suffered.", text2: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.", text3: "14 Views", class: "danger" }
];`
export const Listgroup12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";

<SpkListGroup Numbered={true} as="ol" >
                                    <ListGroupItem as="li">Simply dummy text of the printing.</ListGroupItem>
                                    <ListGroupItem as="li">There are many variations of passages.</ListGroupItem>
                                    <ListGroupItem as="li">All the Lorem Ipsum generators.</ListGroupItem>
                                    <ListGroupItem as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroupItem>
                                    <ListGroupItem as="li">Randomised words which don't look.</ListGroupItem>
                                    <ListGroupItem as="li">Always free from repetition, injected humour.</ListGroupItem>
                               </SpkListGroup>`;

export const Listgroup13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";

<SpkListGroup  as="ul">
<ListGroupItem as="li">
    <input class="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." checked />
    Accurate information at any given point.
</ListGroupItem>
<ListGroupItem as="li">
    <input class="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    Hearing the information and responding.
</ListGroupItem>
<ListGroupItem as="li">
    <input class="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." checked />
    Setting up and customizing your own sales.
</ListGroupItem>
<ListGroupItem as="li">
    <input class="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." checked />
    New Admin Launched.
</ListGroupItem>
<ListGroupItem as="li">
    <input class="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    To maximize profits and improve productivity.
</ListGroupItem>
<ListGroupItem as="li">
    <input class="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    To have a complete 360° overview of sales information, having.
</ListGroupItem>
</SpkListGroup>
`;

export const Listgroup14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";

<SpkListGroup  >
                                    <ListGroupItem class="list-group-item">
                                        <input class="form-check-input me-2" type="radio" value=""
                                            name="list-radio"  />
                                        Accurate information at any given point.
                                    </ListGroupItem>
                                    <ListGroupItem class="list-group-item">
                                        <input class="form-check-input me-2" type="radio" value=""
                                            name="list-radio"  />
                                        Hearing the information and responding.
                                    </ListGroupItem>
                                    <ListGroupItem class="list-group-item">
                                        <input class="form-check-input me-2" type="radio" value=""
                                            name="list-radio" checked />
                                        Setting up and customizing your own sales.
                                    </ListGroupItem>
                                    <ListGroupItem class="list-group-item">
                                        <input class="form-check-input me-2" type="radio" value=""
                                            name="list-radio" />
                                        New Admin Launched.
                                    </ListGroupItem>
                                    <ListGroupItem class="list-group-item">
                                        <input class="form-check-input me-2" type="radio" value=""
                                            name="list-radio" />
                                        To maximize profits and improve productivity.
                                    </ListGroupItem>
                                    <ListGroupItem class="list-group-item">
                                        <input class="form-check-input me-2" type="radio" value=""
                                            name="list-radio" />
                                        To have a complete 360° overview of sales information, having.
                                    </ListGroupItem>
                               </SpkListGroup>`;

export const Listgroup15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  ListbadgesButtons } from "$lib/data/uielements/listgroupdata.js";

<SpkListGroup  as="ul">
                                    {#each ListbadgesButtons as listgroup}
                                    <ListGroupItem 
									class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
									{listgroup.text1}
									<Badge color={listgroup.class} class={listgroup.color}>{listgroup.text2}</Badge>
								  </ListGroupItem>
                                    {/each}
                               </SpkListGroup>`;
export const dataListgroup15 = `export const ListbadgesButtons = [
	{ id: 1, text1: "Groceries", text2: "Available", class: "primary", color: "" },
	{ id: 2, text1: "Furniture", text2: "Buy", class: "secondary", color: "" },
	{ id: 3, text1: "Beauty", text2: "32", class: "danger", color: "" },
	{ id: 4, text1: "Books", text2: "New", class: "light", color: "text-default" },
	{ id: 5, text1: "Toys", text2: "Hot", class: "info", color: "" },
	{ id: 6, text1: "Mobiles", text2: "Sold Out", class: "warning", color: "" },
];`
export const Listgroup16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  ListGroupItem } from "@sveltestrap/sveltestrap";
import SpkListGroup from "$lib/@spk/uielements/ListGroup/SpkListGroup.svelte";
import {  HorizontalButtons } from "$lib/data/uielements/listgroupdata.js";

{#each HorizontalButtons as listgroup}
<SpkListGroup   as="ul" CustomClass={"mb-2 list-group-horizontal{listgroup.class}"} >
    <ListGroupItem as="li">An item</ListGroupItem>
    <ListGroupItem as="li">A second item</ListGroupItem>
    <ListGroupItem as="li">A third item</ListGroupItem>
</SpkListGroup>
{/each}`;
export const dataListgroup16 = `export const HorizontalButtons = [
	{ id: 1, class: "" },
	{ id: 2, class: "-sm" },
	{ id: 3, class: "-md" },
	{ id: 4, class: "-lg" },
	{ id: 5, class: "-xl" },
	{ id: 6, class: "-xxl" },
];`
/*------ ListGroup (prism-code for showcode purpose) end ------*/

/*------ objectfit (prism-code for showcode purpose) start ------*/
export const objectfit1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
src="../images/media/media-28.jpg"
class="object-fit-contain border rounded"
alt="..."
/>`;

export const objectfit2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
src="../images/media/media-28.jpg"
class="object-fit-cover border rounded"
alt="..."
/>`;

export const objectfit3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
src="../images/media/media-28.jpg"
class="object-fit-fill border rounded"
alt="..."
/>`;

export const objectfit4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
        src="../images/media/media-28.jpg"
        class="object-fit-scale border rounded"
        alt="..."
      />`;

export const objectfit5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
        src="../images/media/media-28.jpg"
        class="object-fit-none border rounded"
        alt="..."
      />`;

export const objectfit6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
        src="../images/media/media-28.jpg"
        class="object-fit-sm-contain border rounded"
        alt="..."
      />`;

export const objectfit7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
src="../images/media/media-28.jpg"
class="object-fit-md-contain border rounded"
alt="..."
/>`;

export const objectfit8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
src="../images/media/media-28.jpg"
class="object-fit-lg-contain border rounded"
alt="..."
/>`;

export const objectfit9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
        src="../images/media/media-28.jpg"
        class="object-fit-xl-contain border rounded"
        alt="..."
      />`;

export const objectfit10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import {  Image } from "@sveltestrap/sveltestrap";

<Image
src="../images/media/media-28.jpg"
class="object-fit-xxl-contain border rounded"
alt="..."
/>`;

export const objectfit11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//

<video
        src="/video/1.mp4"
        class="object-fit-contain rounded border"
        autoPlay
        loop
        muted
      ></video>`;

export const objectfit12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//

<video
        src="/video/1.mp4"
        class="object-fit-cover rounded border"
        autoPlay
        loop
        muted
      ></video>`;

export const objectfit13 = `<video
src="/video/1.mp4"
class="object-fit-fill rounded border"
autoPlay
loop
muted
></video>`;

export const objectfit14 = `<video src="../../../assets/video/1.mp4" 
 class="object-fit-scale rounded border" autoPlay>
</video>`;

export const objectfit15 = `<video
src="/video/1.mp4"
class="object-fit-scale rounded border"
autoPlay
loop
muted
></video>`;
/*------ objectfit (prism-code for showcode purpose) end ------*/


/*------ Pagination (prism-code for showcode purpose) start ------*/
export const pagination1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination  ariaLabel="">
                                    <PaginationItem disabled>
                                      <PaginationLink first href="#" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>`;

export const pagination2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination  ariaLabel="">
<PaginationItem >
  <PaginationLink first href="#" ><span aria-hidden="true"><i class="bi bi-caret-left"></i></span></PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem >
  <PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem >
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
<PaginationItem>
  <PaginationLink last href="#" ><span aria-hidden="true"><i class="bi bi-caret-right"></i></span></PaginationLink>
</PaginationItem>
</Pagination>`;

export const pagination3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination size="sm"  ariaLabel="">
<PaginationItem active>
  <PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem >
  <PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink last href="#" >3</PaginationLink>
</PaginationItem>
</Pagination>
<Pagination size=""  ariaLabel="">
<PaginationItem active>
  <PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem >
  <PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink last href="#" >3</PaginationLink>
</PaginationItem>
</Pagination>
<Pagination size="lg"  ariaLabel="">
<PaginationItem active>
  <PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem >
  <PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink last href="#" >3</PaginationLink>
</PaginationItem>
</Pagination>`;

export const pagination4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination  ariaLabel="" listClass="justify-content-sm-center">
<PaginationItem disabled>
  <PaginationLink first href="#" >Previous</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem >
  <PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink last href="#" >Next</PaginationLink>
</PaginationItem>
</Pagination>
<Pagination  ariaLabel="" listClass="justify-content-sm-end">
<PaginationItem disabled>
  <PaginationLink first href="#" >Previous</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem >
  <PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
  <PaginationLink last href="#" >Next</PaginationLink>
</PaginationItem>
</Pagination>`;

export const pagination5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination  ariaLabel="" >
                                    <PaginationItem disabled>
                                      <PaginationLink first href="#" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                      <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                                  <Pagination  ariaLabel=""  class="ms-3">
                                    <PaginationItem disabled>
                                      <PaginationLink first href="#" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                      <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>`;

export const pagination6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination class="pagination-style-1" listclass="flex-wrap" >
<PaginationItem disabled >
    <PaginationLink href="#">	<i class="ri-arrow-left-s-line align-middle"></i></PaginationLink>
</PaginationItem>
<PaginationItem > <PaginationLink href="#">1</PaginationLink></PaginationItem>
<PaginationItem active> <PaginationLink href="#">2</PaginationLink></PaginationItem>
<PaginationItem ><PaginationLink href="#"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
<PaginationItem > <PaginationLink href="#">21</PaginationLink></PaginationItem>
<PaginationItem ><PaginationLink href="#"> <i class="ri-arrow-right-s-line align-middle"></i></PaginationLink></PaginationItem>
</Pagination>`;

export const pagination7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination class="pagination-style-2" listclass="flex-wrap" >
                                    <PaginationItem disabled >
                                        <PaginationLink href="#">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active> <PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#">17</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#" class="text-primary">Next</PaginationLink></PaginationItem>
                                </Pagination>`;

export const pagination8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination class="pagination-style-3" listclass="flex-wrap" >
                                    <PaginationItem disabled >
                                        <PaginationLink href="#">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active> <PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#">16</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#" class="text-primary">Next</PaginationLink></PaginationItem>
                                </Pagination>`;

export const pagination9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Pagination, PaginationItem, PaginationLink } from "@sveltestrap/sveltestrap";

<Pagination class="pagination-style-4" listclass="flex-wrap" >
<PaginationItem disabled >
    <PaginationLink href="#">Prev</PaginationLink>
</PaginationItem>
<PaginationItem active> <PaginationLink href="#">1</PaginationLink></PaginationItem>
<PaginationItem > <PaginationLink href="#">2</PaginationLink></PaginationItem>
<PaginationItem ><PaginationLink href="#"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
<PaginationItem > <PaginationLink href="#">16</PaginationLink></PaginationItem>
<PaginationItem > <PaginationLink href="#">17</PaginationLink></PaginationItem>
<PaginationItem ><PaginationLink href="#" class="text-primary">Next</PaginationLink></PaginationItem>
</Pagination>`;
/*------ Pagination (prism-code for showcode purpose) end ------*/

/*------ popovers (prism-code for showcode purpose) start ------*/
export const popovers1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";
import { Defaultpopover } from "$lib/data/uielements/popoversdata.js";

<div class="btn-list">
                    {#each Defaultpopover as popover (popover.id)}
                        <SpkButton  color="primary"   customClass="btn-wave waves-effect waves-light"  outline={true}  id={"btn-{popover.id}"}  text={"Popover {popover.text}"}  />
                        <SpkPopovers trigger="click" targetId={"btn-{popover.id}"}  placement={popover.class}  title={"Popover {popover.text}"}  content={"This is a Popover on the {popover.placement} of the trigger."}  />
                    {/each}
                </div>`;
export const datapopovers1 = `export const Defaultpopover = [
	{ id: 1, text: "Top", class: "top" },
	{ id: 2, text: "Right", class: "auto" },
	{ id: 3, text: "Bottom", class: "bottom" },
	{ id: 4, text: "Left", class: "auto" },
];
];`
export const popovers2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";
import { Colorheaderpopover } from "$lib/data/uielements/popoversdata.js";

    <div class="btn-list">
    {#each Colorheaderpopover as popover (popover.id)}
    <SpkButton  color={popover.color}   customClass="btn-wave "  outline={true}  id={"bt-{popover.id}"}  text={"Header {popover.text}"}  />
    <SpkPopovers trigger="click" targetId={"bt-{popover.id}"} customClass={"header-{popover.color1}"} placement={popover.class}  title="Color Header"  content={"Popover with {popover.color} header."}  />
     {/each}
</div>
    `;
export const datapopovers2 = `export const Colorheaderpopover= [
	{ id: 1, text: "Primary", class: "top", color: "primary", color1: "primary", color2:"" },
	{ id: 2, text: "Secondary", class: "auto", color: "secondary", color1: "secondary", color2:"" },
	{ id: 3, text: "Info", class: "bottom", color: "info", color1: "info", color2:"bs-popover-auto" },
	{ id: 4, text: "Warning", class: "auto", color: "warning", color1: "warning", color2:"" },
	{ id: 5, text: "Success", class: "top", color: "success", color1: "success", color2:"" },
	{ id: 6, text: "Danger", class: "top", color: "danger", color1: "danger", color2:"" },
];`;
export const popovers3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";
import { Colredpopover } from "$lib/data/uielements/popoversdata.js";

 <div class="btn-list">
    {#each Colredpopover as popover (popover.id)}
    <SpkButton  color={popover.color1}   customClass="btn-wave waves-effect waves-light"   id={"btn1-{popover.id}"}  text={" {popover.text}"}  />
    <SpkPopovers trigger="click" targetId={"btn1-{popover.id}"} customClass={"popover-{popover.color1}"} placement={popover.class}  title="Color Background"  content={"Popover with {popover.text} background."}  />
     {/each}
     </div>`;
export const datapopovers3 = `export const Colredpopover = [
	{ id: 1, text: "Primary", class: "top", color1: "primary" },
	{ id: 2, text: "Secondary", class: "right", color1: "secondary" },
	{ id: 3, text: "Info", class: "bottom", color1: "info" },
	{ id: 4, text: "Warning", class: "left", color1: "warning" },
	{ id: 5, text: "Success", class: "top", color1: "success" },
	{ id: 6, text: "Danger", class: "right", color1: "danger" },
	{ id: 7, text: "Teal", class: "bottom", color1: "teal" },
	{ id: 8, text: "Purple", class: "left", color1: "purple" },
];`
export const popovers4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";
import { Colredpopover } from "$lib/data/uielements/popoversdata.js";

<div class="btn-list">
                    {#each Colredpopover as popover (popover.id)}
                    <SpkButton  color=""   customClass={"btn btn-{popover.color1}-light btn-wave"}  id={"btn2-{popover.id}"}  text={" {popover.text}"}  />
                    <SpkPopovers trigger="click" targetId={"btn2-{popover.id}"} customClass={"popover-{popover.color1}-light"} placement={popover.class}  title="Light Background"  content={"Popover with light {popover.text} background."}  />
                     {/each}
                </div>`;

export const popovers5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";
import { Dismissiblepopover } from "$lib/data/uielements/popoversdata.js";


{#each Dismissiblepopover as popover (popover.id)}
<SpkButton  color={popover.color}   customClass={"btn  btn-wave"}  id={"btn3-{popover.id}"}  text="Dismissible Popover"  />
<SpkPopovers dismissible={true} trigger="click" targetId={"btn3-{popover.id}"} customClass="" placement={popover.class}  title="Dismissible Popover"  content="And here's some amazing content. It's very engaging. Right?" />
 {/each}`;
export const datapopovers5 = `export const Dismissiblepopover = [
	{ id: 1, color: "primary", class: "top" },
	{ id: 2, color: "secondary", class: "right" },
	{ id: 3, color: "info", class: "top" },
	{ id: 4, color: "warning", class: "left" },
];`
export const popovers6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";

<SpkButton color="primary"  id="btn-pop" text="Disabled button" />
<SpkPopovers trigger="hover" targetId="btn-pop"  placement="right" content={"Disabled button"}  />
`;

export const popovers7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkPopovers from "$lib/@spk/uielements/popovers/SpkPopovers.svelte";

<a class="me-4" id="btn-link" href="#!">
<svg xmlns="http://www.w3.org/2000/svg" class="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
</a>
<SpkPopovers trigger="hover" targetId="btn-link"  placement="top" content={"This popover is used to provide details about this icon."}  />
<a class="me-4" id="btn-link1" href="#!">
<svg xmlns="http://www.w3.org/2000/svg" class="svg-secondary " height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
</a>
<SpkPopovers trigger="hover" targetId="btn-link1"  placement="left" content={"This popover is used to provide details about this icon."}  />
`;
/*------ popovers (prism-code for showcode purpose) end ------*/


/*------ Progress (prism-code for showcode purpose) start ------*/
export const progress1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 import { Progress } from "@sveltestrap/sveltestrap";

                                <Progress  color="primary" value={0} class=" mb-3" />
                                <Progress  color="primary" value={25} class="  mb-3" />
                                <Progress  color="primary" value={50} class=" mb-3" />
                                <Progress  color="primary" value={75} class=" mb-3" />
                                <Progress  color="primary" value={100} class=" mb-0" />`;

export const progress2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Progress } from "@sveltestrap/sveltestrap";

<Progress  color='secondary' value={20} class=" mb-3" />
<Progress  color='warning' value={40} class=" mb-3" />
<Progress  color='info' value={60} class=" mb-3" />
<Progress  color='success' value={80} class=" mb-3" />
<Progress  color='danger' value={100} class=" mb-0" />`;

export const progress3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Progress } from "@sveltestrap/sveltestrap";
    
<Progress striped color='primary' value={10} class="progress mb-3" />
<Progress striped color='secondary' value={25} class="progress mb-3" />
<Progress striped color='success' value={50} class="progress mb-3" />
<Progress striped color='info' value={75} class="progress mb-3" />
<Progress striped color='warning' value={100} class="progress mb-0" />
`;

export const progress4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Progress } from "@sveltestrap/sveltestrap";
    
<Progress color='primary' value={10} class="progress-xs mb-3" />
<Progress color='primary' value={25} class="progress-sm mb-3" />
<Progress color='primary' value={50} class=" mb-3" />
<Progress color='primary' value={75} class="progress-lg mb-3" />
<Progress color='primary' value={100} class="progress-xl mb-0" />`;

export const progress5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Progress } from "@sveltestrap/sveltestrap";

<Progress color='primary' class="progress mb-3" animated value={10} />
<Progress color='secondary' class="progress mb-3" animated value={20} />
<Progress color='success' class="progress mb-3" animated value={40} />
<Progress color='info' class="progress mb-3" animated value={60} />
<Progress color='warning' class="progress" animated value={80} />`;

export const progress6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div class="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-primary-gradient" style="width: 10%"></div>
                                    </div>
                                    <div class="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-secondary-gradient" style="width: 20%"></div>
                                    </div>
                                    <div class="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success-gradient" style="width: 40%"></div>
                                    </div>
                                    <div class="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-info-gradient" style="width: 60%"></div>
                                    </div>
                                    <div class="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning-gradient" style="width: 80%"></div>
                                    </div>`;

export const progress7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 import { Progress } from "@sveltestrap/sveltestrap";

 <Progress Bar color='primary' value={10}  class="progress mb-3" >10% </Progress>
<Progress Bar color='secondary' value={20}  class="progress mb-3" >20% </Progress>
<Progress Bar color='success' value={40}  class="progress mb-3" >40% </Progress>
<Progress Bar color='info' value={60}  class="progress mb-3" >60% </Progress>
<Progress Bar color='warning' value={80}  class="progress mb-0" >80% </Progress> `;

export const progress8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 import { Progress } from "@sveltestrap/sveltestrap";
 import {   progressData, progressDataLg, progressDataSm, progressDataXl } from "$lib/data/uielements/progressbardata.js";


<div class="progress-stacked progress-xs mb-3">
{#each progressData as { width, color }}
  <div class="progress-bar {color}" role="progressbar" style="width: {width}" aria-valuenow={parseInt(width)} aria-valuemin="0" aria-valuemax="100"></div>
{/each}
</div>

<div class="progress-stacked progress-sm mb-3">
{#each progressDataSm as { width, color }}
  <div class="progress-bar {color}" role="progressbar" style="width: {width}" aria-valuenow={parseInt(width)} aria-valuemin="0" aria-valuemax="100"></div>
{/each}
</div>

<div class="progress-stacked mb-3">
{#each progressDataLg as { width, color }}
  <div class="progress-bar {color}" role="progressbar" style="width: {width}" aria-valuenow={parseInt(width)} aria-valuemin="0" aria-valuemax="100"></div>
{/each}
</div>

<div class="progress-stacked progress-lg mb-3">
{#each progressDataXl as { width, color }}
  <div class="progress-bar {color}" role="progressbar" style="width: {width}" aria-valuenow={parseInt(width)} aria-valuemin="0" aria-valuemax="100"></div>
{/each}
</div>`;
export const dataprogress8 = `export const progressData = [
    { width: '5%', color: '' },
    { width: '10%', color: 'bg-secondary' },
    { width: '15%', color: 'bg-success' },
  ];

  export const progressDataSm = [
    { width: '10%', color: 'bg-warning' },
    { width: '15%', color: 'bg-info' },
    { width: '20%', color: 'bg-danger' },
  ];

  export  const progressDataLg = [
    { width: '20%', color: 'bg-purple' },
    { width: '25%', color: 'bg-teal' },
    { width: '30%', color: 'bg-orange' },
  ];

  export const progressDataXl = [
    { width: '25%', color: 'bg-success' },
    { width: '30%', color: 'bg-danger' },
    { width: '35%', color: 'bg-warning' },
  ];`
export const progress9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-primary-gradient" style="width: 10%"></div>
                                    </div>
                                    <div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-secondary-gradient" style="width: 20%"></div>
                                    </div>
                                    <div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success-gradient" style="width: 40%"></div>
                                    </div>
                                    <div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-info-gradient" style="width: 60%"></div>
                                    </div>
                                    <div class="progress progress-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning-gradient" style="width: 80%"></div>
                                    </div>`

export const progress10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 import { Progress } from "@sveltestrap/sveltestrap";

 <div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
 <h6 class="progress-bar-title">Mobiles</h6>
 <div class="progress-bar" style="width: 50%;">
   <div class="progress-bar-value">50%</div>
 </div>
</div>

<div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
 <h6 class="progress-bar-title bg-secondary">Watches</h6>
 <div class="progress-bar bg-secondary" style="width: 60%;">
   <div class="progress-bar-value bg-secondary">60%</div>
 </div>
</div>

<div class="progress progress-sm progress-custom mb-4 progress-animate" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
 <h6 class="progress-bar-title bg-success">Shirts</h6>
 <div class="progress-bar bg-success" style="width: 70%;">
   <div class="progress-bar-value bg-success">70%</div>
 </div>
</div>`;

export const progress11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 import { Progress } from "@sveltestrap/sveltestrap";
 import {   progressData2 } from "$lib/data/uielements/progressbardata.js";

   
    {#each progressData2 as { now, class1 }} <!-- Loop through progressData -->
    <div class="progress progress-sm mb-4" role="progressbar" aria-valuenow={now} aria-valuemin="0" aria-valuemax="100">
      <div class={"progress-item-1 {class1}"}></div>
      <div class={"progress-item-2 {class1}"}></div>
      <div class={"progress-item-3 {class1}"}></div>
      <div class={"progress-bar {class1}"} style="width: {now}%"></div>
    </div>
  {/each}`
export const dataprogress11 = `  export const progressData2 = [
    { now: 50, class1: 'bg-primary' },
    { now: 60, class1: 'bg-secondary' },
    { now: 70, class1: 'bg-success' },
    { now: 80, class1: 'bg-info' },
    { now: 90, class1: 'bg-warning' },
  ];`

export const progress12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Progress } from "@sveltestrap/sveltestrap";

<div class="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-primary" style="width: 50%;">
                                      <div class="progress-bar-value">50%</div>
                                    </div>
                                  </div>
                                  <div class="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-secondary" style="width: 60%;">
                                      <div class="progress-bar-value secondary">60%</div>
                                    </div>
                                  </div>
                                  <div class="progress progress-lg custom-progress-3 progress-animate" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-success" style="width: 70%;">
                                      <div class="progress-bar-value success">70%</div>
                                    </div>
                                  </div>`;

export const progress13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//

<div class="progress progress-xl mb-3 progress-animate custom-progress-4" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-primary-gradient" style="width: 10%;"></div>
                                    <div class="progress-bar-label">10%</div>
                                  </div>
                                  
                                  <div class="progress progress-xl mb-3 progress-animate custom-progress-4 secondary" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-secondary-gradient" style="width: 20%;"></div>
                                    <div class="progress-bar-label">20%</div>
                                  </div>
                                  
                                  <div class="progress progress-xl mb-3 progress-animate custom-progress-4 success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-success-gradient" style="width: 40%;"></div>
                                    <div class="progress-bar-label">40%</div>
                                  </div>
                                  
                                  <div class="progress progress-xl mb-3 progress-animate custom-progress-4 info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-info-gradient" style="width: 60%;"></div>
                                    <div class="progress-bar-label">60%</div>
                                  </div>
                                  
                                  <div class="progress progress-xl mb-3 progress-animate custom-progress-4 warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-warning-gradient" style="width: 80%;"></div>
                                    <div class="progress-bar-label">80%</div>
                                  </div>
                                  
                                  <div class="progress progress-xl mb-3 progress-animate custom-progress-4 danger" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                    <div class="progress-bar bg-danger-gradient" style="width: 90%;"></div>
                                    <div class="progress-bar-label ">90%</div>
                                  </div>`;

export const progress14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Progress } from "@sveltestrap/sveltestrap";
import { progressData1 } from "$lib/data/uielements/progressbardata.js";

<h6 class="fw-semibold mb-2">Project Dependencies</h6>
                                <div class="progress-stacked progress-xl mb-5">
                                    {#each progressData1 as { width, color, label }}
                                      <div class="progress-bar {color}" role="progressbar" style="width: {width}%;" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100">
                                        {label}
                                      </div>
                                    {/each}
                                  </div>
                                <Row class="justify-content-center">
                                    <Col xl={5}>
                                        <div class="border p-3">
                                            <p class="fs-12 fw-semibold mb-0 text-muted">Html<span class="float-end fs-10 fw-normal">25%</span></p>
                                            <Progress Bar class="progress progress-xs mb-4 progress-animate" color="primary" value={25} />
                                            <p class="fs-12 fw-semibold mb-0 text-muted">Css<span class="float-end fs-10 fw-normal">35%</span></p>
                                            <Progress Bar class="progress progress-xs mb-4 progress-animate" color="secondary" value={35} />
                                            <p class="fs-12 fw-semibold mb-0 text-muted">Js<span class="float-end fs-10 fw-normal">40%</span></p>
                                            <Progress Bar class="progress progress-xs progress-animate" color="danger" value={40} />
                                        </div>
                                    </Col>
                                </Row>`;
/*------ Progress (prism-code for showcode purpose) end ------*/

/*------ spinners (prism-code for showcode purpose) start ------*/
export const spinner1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<SpkSpinners type="border"  />`;

export const spinner2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";
import { Colorspinner } from "$lib/data/uielements/spinnersdata.js";

{#each Colorspinner as spinner (spinner.id)}
<SpkSpinners type="border" color={spinner.color} customClass="me-2" />
{/each}`;
export const dataspinner2 = `export const Colorspinner=[
	{id:1,color:"primary"},
	{id:2,color:"secondary"},
	{id:3,color:"success"},
	{id:4,color:"danger"},
	{id:5,color:"warning"},
	{id:6,color:"info"},
	{id:7,color:"light"},
	{id:8,color:"dark"}
];`
export const spinner3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<SpkSpinners type="grow"  />`;

export const spinner4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

{#each Colorspinner as spinner (spinner.id)}
                    <SpkSpinners type="grow" color={spinner.color} customClass="me-2" />
                    {/each}`;

export const spinner5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<div class="d-flex justify-content-center mb-4">
<SpkSpinners type="border"  />
</div>
<div class="d-flex align-items-center">
<strong>Loading...</strong>
<SpkSpinners type="border" customClass="ms-auto"  />
</div>`;

export const spinner6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<div class="clearfix mb-4">
                        <SpkSpinners type="border" customClass="float-end"  />
                    </div>
                    <div class="clearfix">
                        <SpkSpinners type="border" customClass="float-start"  />
                    </div>`;

export const spinner7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<div class="text-center">
<SpkSpinners type="border"  />
</div>`;

export const spinner8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<SpkSpinners type="border" size="sm" customClass="me-4"  />
<SpkSpinners type="grow" size="sm" customClass="me-4"  />
<SpkSpinners type="border"  customClass="me-4"  width= "3rem"  height= "3rem"  />
<SpkSpinners type="grow"  customClass="me-4"  width= "3rem" height= "3rem"  />
`;

export const spinner9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";

<SpkSpinners type="border" customClass="m-5" />`;

export const spinner10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkSpinners from "$lib/@spk/uielements/spinners/SpkSpinners.svelte";
import { Buttonspinner } from "$lib/data/uielements/spinnersdata.js";

<div class="btn-list">
<SpkButton color='primary-light'  buttontype="button" disabled={true}>
        <SpkSpinners size="sm" type="border" customClass="align-middle" />
</SpkButton>
<SpkButton color='primary-light'  buttontype="button" disabled={true} >
    <SpkSpinners size="sm" type="border" customClass="align-middle" />Loading...
</SpkButton>
<SpkButton color='primary-light'  buttontype="button" disabled={true}>
    <SpkSpinners size="sm" type="grow" customClass="align-middle" />
</SpkButton>
<SpkButton color='primary-light'  buttontype="button" disabled={true} >
    <SpkSpinners size="sm" type="grow" customClass="align-middle" />Loading...
</SpkButton>
{#each Buttonspinner as spinner (spinner.id)}
<SpkButton color={spinner.color}  buttontype="button" disabled={true} >
    <SpkSpinners size="sm" type="grow" customClass="align-middle" />Loading...
</SpkButton>
</div>`;
export const dataspinner10 = `export const Buttonspinner =[
	{id:1,color:"primary-light", class:""},
	{id:2,color:"secondary-light", class:""},
	{id:3,color:"success-light", class:""},
	{id:4,color:"info-light", class:""},
	{id:5,color:"warning-light", class:""},
	{id:6,color:"danger-light", class:""},
	{id:7,color:"light", class:""},
	{id:8,color:"dark", class:"text-dark"}
];`
/*------ spinners (prism-code for showcode purpose) end ------*/

/*------ Toasts (prism-code for showcode purpose) start ------*/
export const toast1 = `import { Button,  Toast, ToastContainer } from "react-bootstrap";
            <Button
                type="button"
                color=""
                class="btn btn-primary btn-wave"
                id="liveToastBtn"
                on:click={() => addToast("live")}>Show live toast</Button
            >
            <div class="toast-container position-fixed top-0 end-0 p-3">
                    <Toast
                        autohide
                        id="liveToast"
                        class="toast fade show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts["live"]|| false}
                        delay={3000}
                    >
                        <div
                            class=" toast-header text-default"
                            on:toggle={() => handleToasts("live")}
                        >
                            <img
                                class="bd-placeholder-img rounded"
                                src="../images/brand-logos/favicon.ico"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <small>11 mins ago</small>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts("live")}
                            ></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </Toast>
            </div>
`;
export const toast2 = `<div class="btn-list">
                <Button
                    type="button"
                    on:click={() => addToast("PrimaryColor")}
                    color="primary-light"
                    class="btn me-2 btn-wave"
                    id="primaryToastBtn">Primary</Button
                >
                <Button
                    color="secondary-light"
                    type="button"
                    class="btn me-2 btn-wave"
                    on:click={() => addToast("SecondaryColor")}
                    id="secondaryToastBtn">secondary</Button
                >
                <Button
                    color="warning-light"
                    type="button"
                    class="btn  me-2 btn-wave"
                    on:click={() => addToast("WarningColor")}
                    id="warningToastBtn">warning</Button
                >
                <Button
                    color="info-light"
                    type="button"
                    class="btn  me-2 btn-wave"
                    on:click={() => addToast("InfoColor")}
                    id="infoToastBtn">info</Button
                >
                <Button
                    color="success-light"
                    type="button"
                    class="btn  me-2 btn-wave"
                    on:click={() => addToast("SuccessColor")}
                    id="successToastBtn">success</Button
                >
                <Button
                    color="danger-light"
                    type="button"
                    class="btn me-2 btn-wave"
                    on:click={() => addToast("DangerColor")}
                    id="dangerToastBtn">danger</Button
                >
            </div>
            <div class="toast-container position-fixed top-0 end-0 p-3">
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-primary-transparent"
                    delay={3000}
                    aria-atomic="true"
                    isOpen={toasts["PrimaryColor"] || false}
                    autohide={true}
                    fade
                >
                    <div class="toast-header bg-primary text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("PrimaryColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="secondaryToast"
                    color="secondary"
                    class="colored-toast bg-secondary-transparent"
                    delay={3000}
                    aria-atomic="true"
                    isOpen={toasts["SecondaryColor"] || false}
                    autohide={true}
                    fade
                >
                    <div class=" toast-header bg-secondary text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("SecondaryColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-warning-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["WarningColor"]}
                    fade
                >
                    <div class="toast-header bg-warning text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("WarningColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-info-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["InfoColor"] || false}
                    fade
                >
                    <div class="toast-header bg-info text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("InfoColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-success-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["SuccessColor"] || false}
                    fade
                >
                    <div class="toast-header bg-success text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("SuccessColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
                <Toast
                    id="primaryToast"
                    color="primary"
                    class="colored-toast bg-danger-transparent"
                    delay={3000}
                    autohide
                    aria-atomic="true"
                    isOpen={toasts["DangerColor"] || false}
                    fade
                >
                    <div class="toast-header bg-danger text-fixed-white">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/toggle-dark.png"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            on:click={() => handleToasts("DangerColor")}
                        ></button>
                    </div>
                    <div class="toast-body">Your,toast message here.</div>
                </Toast>
            </div>`;
export const toast3 = `import { Button,  Toast, ToastContainer } from "react-bootstrap";
 <Toast
                class="toast fade show"
                role="alert"
                aria-live="assertive"
                fade
                isOpen={toasts["basic"]}
                aria-atomic="true"
            >
                <div class="toast-header text-default">
                    <img
                        class="bd-placeholder-img rounded me-2"
                        src="../images/brand-logos/favicon.ico"
                        alt="..."
                    />
                    <strong class="me-auto">Yzen</strong>
                    <small>11 mins ago</small>
                    <button
                        type="button"
                        class="btn-close"
                        on:click={() => handleToasts("basic")}
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </Toast>`;

export const toast4 = ` <div class="toast-container position-static">
                <Toast
                    class=" fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    fade
                    isOpen={toasts["stack"]}
                >
                    <div class="toast-header text-default">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/favicon.ico"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <small>just now</small>
                        <button
                            type="button"
                            class="btn-close"
                            on:click={() => handleToasts("stack")}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="toast-body">See? Just like this.</div>
                </Toast>
                <Toast
                    class="fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    fade
                    isOpen={toasts["stack1"]}
                >
                    <div class="toast-header text-default">
                        <img
                            class="bd-placeholder-img rounded me-2"
                            src="../images/brand-logos/favicon.ico"
                            alt="..."
                        />
                        <strong class="me-auto">Yzen</strong>
                        <small class="text-muted">2 seconds ago</small>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            on:click={() => handleToasts("stack1")}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="toast-body">
                        Heads up, toasts will stack automatically
                    </div>
                </Toast>
            </div>`;

export const toast5 = `import { Button, CloseButton, Toast, ToastContainer } from "react-bootstrap";
 <Toast
                class="fade show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                fade
                isOpen={toasts["transColor"]}
            >
                <div class="toast-header text-default">
                    <img
                        class="bd-placeholder-img rounded me-2"
                        src="../images/brand-logos/favicon.ico"
                        alt="..."
                    />

                    <strong class="me-auto">Yzen</strong>
                    <small class="text-muted">11 mins ago</small>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="toast"
                        on:click={() => handleToasts("transColor")}
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </Toast>`;

export const toast6 = `
<Toast
                class="align-items-center fade show mb-3"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                fade
                isOpen={toasts["customColor"]}
            >
                <div class="d-flex">
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                    <button
                        type="button"
                        class="btn-close me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                        on:click={() => handleToasts("customColor")}
                    >
                    </button>
                </div>
            </Toast>
            <div>
                <span class="my-4 text-muted">
                    Alternatively, you can also add additional controls and
                    components to toasts.
                </span>
            </div>
            <Toast
                class="show mt-2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                fade
                isOpen={toasts["customsColor"]}
            >
                <div class="toast-body">
                    Hello, world! This is a toast message.
                    <div class="mt-2 pt-2 border-top">
                        <button
                            type="button"
                            class="btn btn-primary btn-sm btn-wave"
                            >Take action</button
                        >
                        <button
                            type="button"
                            class="btn btn-secondary btn-sm btn-wave"
                            data-bs-dismiss="toast"
                            on:click={() => handleToasts("customsColor")}
                            >Close</button
                        >
                    </div>
                </div>
            </Toast>`;
export const toast7 = `<div class="btn-list">
                <button
                    type="button"
                    on:click={() => addToast('topLeft')}
                    class="btn btn-outline-primary me-2 btn-wave"
                    id="topleftToastBtn">Top Left</button
                >
                <button
                    type="button"
                    on:click={() => addToast('topCenter')}
                    class="btn btn-outline-primary me-2 btn-wave"
                    id="topcenterToastBtn">Top Center</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('topRight')}
                    id="toprightToastBtn">Top Right</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('middleLeft')}
                    id="middleleftToastBtn">Middle Left</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('middleCenter')}
                    id="middlecenterToastBtn">Middle Center</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('middleRight')}
                    id="middlerightToastBtn">Middle Right</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('bottomLeft')}
                    id="bottomleftToastBtn">Bottom Left</button
                >
                <button
                    type="button"
                    on:click={() => addToast('bottomCenter')}
                    class="btn btn-outline-primary me-2 btn-wave"
                    id="bottomcenterToastBtn">Bottom Center</button
                >
                <button
                    type="button"
                    class="btn btn-outline-primary me-2 btn-wave"
                    on:click={() => addToast('bottomRight')}
                    id="bottomrightToastBtn">Bottom Right</button
                >
            </div>
            <div class="toast-container position-fixed top-0 start-0 p-3">
                    <Toast
                        autohide
                        id="topleft-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['topLeft'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('topLeft')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
            </div>
            <div
                class="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
            >
                    <Toast
                        autohide
                        id="topcenter-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['topCenter'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('topCenter')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
            </div>
                <div class="toast-container position-fixed top-0 end-0 p-3">
                    <Toast
                        autohide
                        id="topright-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['topRight'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('topRight')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed top-50 start-0 translate-middle-y p-3"
                >
                    <Toast
                        autohide
                        id="middleleft-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['middleLeft'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('middleLeft')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed top-50 start-50 translate-middle"
                >
                    <Toast
                        autohide
                        id="middlecenter-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['middleCenter'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('middleCenter')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed top-50 end-0 translate-middle-y p-3"
                >
                    <Toast
                        autohide
                        id="middleright-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['middleRight'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('middleRight')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed bottom-0 start-0 p-3"
                >
                    <Toast
                        autohide
                        id="bottomleft-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['bottomLeft'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('bottomLeft')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div
                    class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3"
                >
                    <Toast
                        autohide
                        id="bottomcenter-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['bottomCenter'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('bottomCenter')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <Toast
                        autohide
                        id="bottomright-Toast"
                        class="toast colored-toast bg-primary-transparent text-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        isOpen={toasts['bottomRight'] || false}
                        fade
                        delay={3000}
                    >
                        <div class="toast-header bg-primary text-fixed-white">
                            <img
                                class="bd-placeholder-img rounded me-2"
                                src="../images/brand-logos/toggle-dark.png"
                                alt="..."
                            />
                            <strong class="me-auto">Yzen</strong>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                on:click={() => handleToasts('bottomRight')}
                            ></button>
                        </div>
                        <div class="toast-body">Your,toast message here.</div>
                    </Toast>
                </div>`;

/*------ Toasts (prism-code for showcode purpose) end ------*/
/*------ tooltips (prism-code for showcode purpose) start ------*/
export const tooltip1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
import {Tooltipdirtooltip} from "$lib/data/uielements/tooltipsdata.js";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
{#each Tooltipdirtooltip as tooltip (tooltip.id)}
  <SpkButton
    id={"tooltipButton-{tooltip.id}"}
    color="primary"
    text={tooltip.text}
  />
  <SpkTooltips
    targetId={"tooltipButton-{tooltip.id}"}
    content={tooltip.text}
    placement={tooltip.text.split(" ")[2]}
  />
{/each}
</div>`;
export const datatooltip1 = `export const Tooltipdirtooltip = [
	{ id: 1, text: "Tooltip on top" },
    { id: 2, text: "Tooltip on right" },
    { id: 3, text: "Tooltip on bottom" },
    { id: 4, text: "Tooltip on left" },
  ];`
export const tooltip2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
import {Coloredtooltip} from "$lib/data/uielements/tooltipsdata.js";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<div class="btn-list">
{#each Coloredtooltip as tooltip (tooltip.id)}
  <SpkButton
    id={"tooltip-{tooltip.id}"}
    color={tooltip.color}
    text={tooltip.text}
  />
  <SpkTooltips
    placement={tooltip.placement}
    customClass={"tooltip-{tooltip.color}"}
    targetId={"tooltip-{tooltip.id}"}
    content={tooltip.text}
  />
{/each}
</div>`;
export const datatooltip2 = `export const Coloredtooltip =[
	
    { id: 1, text: "Primary Tooltip", color: "primary", placement: "top" },
    { id: 2, text: "Secondary Tooltip", color: "secondary", placement: "right" },
    { id: 3, text: "Warning Tooltip", color: "warning", placement: "bottom" },
    { id: 4, text: "Info Tooltip", color: "info", placement: "bottom" },
    { id: 5, text: "Success Tooltip", color: "success", placement: "top" },
    { id: 6, text: "Danger Tooltip", color: "danger", placement: "top" },
    { id: 7, text: "Light Tooltip", color: "light", placement: "top" },
    { id: 8, text: "Dark Tooltip", color: "dark", placement: "top" },

];`
export const tooltip3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<p class="text-muted mb-0">
Hover on the link to view the
<a href="#!" id="link" class="text-primary ms-1 d-inline-flex"
  >Tooltip
</a>
<SpkTooltips
  placement="top"
  customClass={"tooltip-primary"}
  targetId="link"
  content=" Link Tooltip"
/>
</p>`;

export const tooltip4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
import {SVGtooltip} from "$lib/data/uielements/tooltipsdata.js";

{#each SVGtooltip as tooltip (tooltip.id)}
<a href="#!" id={"svgtooltip-{tooltip.id}"} class="me-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={"svg-{tooltip.color}"}
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" /><path
      d={tooltip.class}
    /></svg
  >
</a>
<SpkTooltips
  placement="top"
  customClass={"tooltip-{tooltip.color}"}
  targetId={"svgtooltip-{tooltip.id}"}
  content={tooltip.text}
/>
{/each}`;
export const datatooltip4 = `export const SVGtooltip=[
	{id:1, class:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z", color:"primary", text:"Home"},
	{id:2, class:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z", color:"secondary", text:"Message"},
	{id:3, class:"M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56  C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37, 0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z", color:"warning", text:"Add User"},
	{id:4, class:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z", color:"info", text:"Send File"},
	{id:5, class:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", color:"success", text:"Action"},
];`
export const tooltip5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<SpkButton
        id="tooltip-disabled"
        color="primary"
        disabled={true}
        text=" Disabled button "
      />
      <SpkTooltips
        placement="top"
        customClass={"tooltip-primary"}
        targetId="tooltip-disabled"
        content="Default tooltip"
      />`;

export const tooltip6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";

<a
        href="#!"
        id="Alex"
        class="avatar avatar-md me-2 online avatar-rounded"
      >
        <img  loading="lazy" src="../images/faces/12.jpg" alt="img" /></a
      >
      <SpkTooltips
        placement="top"
        customClass={"tooltip-primary"}
        targetId="Alex"
        content="Alex Carey"
      />
      <a
        href="#!"
        id="Marina"
        class="avatar avatar-lg me-2 online avatar-rounded"
      >
        <img  loading="lazy" src="../images/faces/3.jpg" alt="img" /></a
      >
      <SpkTooltips
        placement="top"
        customClass={"tooltip-primary"}
        targetId="Marina"
        content="Marina Kai"
      />
      <a href="#!" id="Tim" class="avatar avatar-xl me-2 online avatar-rounded">
        <img  loading="lazy" src="../images/faces/15.jpg" alt="img" /></a
      >
      <SpkTooltips
        placement="top"
        customClass={"tooltip-primary"}
        targetId="Tim"
        content="Tim Cook"
      />`;
/*------ tooltips (prism-code for showcode purpose) end ------*/

/*------ typography (prism-code for showcode purpose) start ------*/
export const typography1 = ` <h1 class="mb-3">h1. Bootstrap heading</h1>
<h2 class="mb-3">h2. Bootstrap heading</h2>
<h3 class="mb-3">h3. Bootstrap heading</h3>
<h4 class="mb-3">h4. Bootstrap heading</h4>
<h5 class="mb-3">h5. Bootstrap heading</h5>
<h6 class="mb-0">h6. Bootstrap heading</h6>`;

export const typography2 = `  <p class="h1 mb-3">h1. Bootstrap heading</p>
<p class="h2 mb-3">h2. Bootstrap heading</p>
<p class="h3 mb-3">h3. Bootstrap heading</p>
<p class="h4 mb-3">h4. Bootstrap heading</p>
<p class="h5 mb-3">h5. Bootstrap heading</p>
<p class="h6 mb-0">h6. Bootstrap heading</p>
`;

export const typography3 =
  ` <div class="display-1">Display 1</div>
    <div class="display-2">Display 2</div>
    <div class="display-3">Display 3</div>
    <div class="display-4">Display 4</div>
    <div class="display-5">Display 5</div>
    <div class="display-6">Display 6</div>`;

export const typography4 = ` <h3>
Fancy display heading
<small class="text-muted"> With faded secondary text</small>
</h3>`;

export const typography5 = `<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del>
</p>
<p><s>This line of text is meant to be treated as no longer
        accurate.</s>
</p>
<p><ins>This line of text is meant to be treated as an addition to the
        document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine
        print.</small>
</p>
<p><strong>This line rendered as bold text.</strong></p>
<p  class="mb-0"><em>This line rendered as italicized text.</em></p>`;

export const typography6 = `<p  class="fs-1 mb-2">.fs-1 text</p>
<p  class="fs-2 mb-2">.fs-2 text</p>
<p  class="fs-3 mb-2">.fs-3 text</p>
<p  class="fs-4 mb-2">.fs-4 text</p>
<p  class="fs-5 mb-2">.fs-5 text</p>
<p  class="fs-6 mb-0">.fs-6 text</p>`;

export const typography7 =
  `<p  class="lead mb-0">
<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
</p>`;

export const typography8 = `<dl  class="row mb-0">
<dt  class="col-sm-3">Description lists</dt>
<dd  class="col-sm-9">A description list is perfect for defining terms.</dd>

<dt  class="col-sm-3">Term</dt>
<dd  class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
</dd>

<dt  class="col-sm-3">Another term</dt>
<dd  class="col-sm-9">This definition is short, so no extra paragraphs or
    anything.</dd>

<dt  class="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd  class="col-sm-9">This can be useful when space is tight. Adds an
    ellipsis at
    the end.</dd>

<dt  class="col-sm-3">Nesting</dt>
<dd  class="col-sm-9 mb-0">
    <dl  class="row mb-0">
        <dt  class="col-sm-4">Nested definition list</dt>
        <dd  class="col-sm-8 mb-0">I heard you like definition lists. Let me put a
            definition list inside your definition list.</dd>
    </dl>
</dd></dl>`;

export const typography9 = `<ul  class="list-unstyled">
<li>This is a list.</li>
<li>It appears completely unstyled.</li>
<li>Structurally, it's still a list.</li>
<li>However, this style only applies to immediate child elements.</li>
<li  class="mb-2">Nested lists:
    <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
    </ul>
</li>
<li>This may still come in handy in some situations.</li>
</ul>`;

export const typography10 = `<figure  class="blockquote-container">
<blockquote  class="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption  class="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption> </figure>`;

export const typography11 = `<figure  class="blockquote-container text-end">
<blockquote  class="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption  class="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption></figure>`;

export const typography12 = `<blockquote  class="blockquote custom-blockquote primary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer  class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span  class="quote-icon"><i  class="ri-information-line"></i></span></blockquote>`;

export const typography13 = `<blockquote  class="blockquote custom-blockquote secondary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer  class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span  class="quote-icon"><i  class="ri-information-line"></i></span>
</blockquote>`;

export const typography14 = `<blockquote  class="blockquote custom-blockquote warning mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer  class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span  class="quote-icon"><i  class="ri-information-line"></i></span>`;

export const typography15 = `<blockquote  class="blockquote custom-blockquote success mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer  class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span  class="quote-icon"><i  class="ri-information-line"></i></span>
</blockquote>`;

export const typography16 = `<blockquote  class="blockquote custom-blockquote info mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer  class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span  class="quote-icon"><i  class="ri-information-line"></i></span>
</blockquote>`;

export const typography17 = `<blockquote  class="blockquote custom-blockquote danger mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer  class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span  class="quote-icon"><i  class="ri-information-line"></i></span>
</blockquote>`;

export const typography18 = `<p><abbr title="attribute">attr</abbr></p>
<p  class="mb-0"><abbr title="HyperText Markup Language"  class="initialism">HTML</abbr></p>`;

export const typography19 = `<ul  class="list-inline mb-0">
<li  class="list-inline-item">This is a list item.</li>
<li  class="list-inline-item">And another one.</li>
<li  class="list-inline-item">But they're displayed inline.</li>
</ul>`;

export const typography20 = `<p  class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, 
architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
<div  class="text-success">
    <hr/>
</div>
<p  class=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, 
magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>
<hr  class="text-danger border-2 opacity-50"/>
<p  class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur
 aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
<hr  class="border-primary border-3 opacity-75"/>`;

export const typography21 = "<p  class=\"font-monospace mb-0\">This is in monospace</p>";

export const typography22 = `<p  class="text-muted mb-0">
Muted text with a <a to="#"  class="text-reset text-decoration-underline text-dark">reset link</a>.
</p>`;

export const typography23 = "<p  class=\"visible mb-0\">This is visible text</p>";

export const typography24 = "<p  class=\"invisible mb-0\">This is invisible text</p>";

export const typography25 = `<p  class="text-lowercase">Lowercased text.</p>
<p  class="text-uppercase">Uppercased text.</p>
<p  class="text-capitalize mb-0">CapiTaliZed text.</p>`;

export const typography26 = `<p  class="text-decoration-underline">This text has a line underneath it.
</p>
<p  class="text-decoration-line-through">This text has a line going
    through
    it.
</p>
<Link    to="#"  class="text-decoration-none">This link has its text
    decoration
    removed
</Link>`;

export const typography27 = `<p  class="fw-bold">Bold text.</p>
<p  class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p  class="fw-semibold">Semibold weight text.</p>
<p  class="fw-normal">Normal weight text.</p>
<p  class="fw-light">Light weight text.</p>
<p  class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p  class="fst-italic">Italic text.</p>
<p  class="fst-normal mb-0">Text with normal font style</p>`;

export const typography28 = `<p  class="lh-1">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p  class="lh-sm">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p  class="lh-base">This is a long paragraph written to show how the line-height
of
an element is affected by our utilities. Classes are applied to the element
itself or sometimes the parent element. These classes can be customized as
needed with our utility API.
</p>
<p  class="lh-lg mb-0">This is a long paragraph written to show how the
line-height
of an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>`;

export const typography29 = `<p  class="text-start">Start aligned text on all viewport sizes.</p>
<p  class="text-center">Center aligned text on all viewport sizes.</p>
<p  class="text-end">End aligned text on all viewport sizes.</p>

<p  class="text-sm-start">Start aligned text on viewports sized SM (small) or
    wider.
</p>
<p  class="text-md-start">Start aligned text on viewports sized MD (medium) or
    wider.
</p>
<p  class="text-lg-start">Start aligned text on viewports sized LG (large) or
    wider.
</p>
<p  class="text-xl-start">Start aligned text on viewports sized XL (extra-large)
    or
    wider.</p>`;

export const typography30 = `<div  class="badge bg-primary text-wrap mb-3" style={{width: "6rem"}}>
This text should wrap.
</div>
<p  class="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
<div  class="text-nowrap bg-light border" style={{width: "8rem"}}>
This text should overflow the parent.
</div>`;

export const typography31 = `<p  class="text-break mb-0">
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
 </p>`;
/*------ typography (prism-code for showcode purpose) end ------*/
