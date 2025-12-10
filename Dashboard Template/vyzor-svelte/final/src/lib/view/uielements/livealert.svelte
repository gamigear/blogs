
<script>
  import SpkButton from "../../@spk/uielements/Button/SpkButton.svelte";
  import SpkAlert from "../../@spk/uielements/Alerts/SpkAlert.svelte";
   
       //Live example
    let alerts = []; // State for alerts
    const handleShowAlert = () => {
        const newAlert = {
            id: new Date().getTime() // Unique ID for each alert
        };
        alerts = [...alerts, newAlert]; // Add new alert to the state
    };
   
</script>

{#each alerts as alert (alert.id)}
<SpkAlert  color="success"    customClass={`alert-dismissible fade show `}
 text={`Nice, you triggered this alert message!`}  />
{/each}
<SpkButton  buttontype="button" color="primary" customClass="mt-2" text={"Show live alert"} onclickfunc={handleShowAlert} />

 <style lang="scss">
    /* Add your styles here */
  </style>