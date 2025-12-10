<script>

  import { Spinner } from "@sveltestrap/sveltestrap";
  export let type = '';
  export let size = '';
  export let color = '';
  export let width = ''; // Default width
  export let height = ''; // Default height
  export let style = ''; // Additional inline styles
  export let customClass = '';
</script>


<Spinner type={type} size={size} color={color} class={customClass}  style={`width: ${width}; height: ${height}; ${style}`}  role="status"> 
    <slot />
</Spinner>