<script lang='ts'>
     import { ListGroup } from '@sveltestrap/sveltestrap';
    // Accept the props for the ListGroup
    export let CustomClass:string ="";
    export let Id:string ="";
    export let Flush:boolean =false;
    export let Horizontal:boolean = false;
    export let Numbered:boolean = false;
  </script>
  
  <!-- The container for the list group -->
  <ListGroup class={CustomClass} id={Id} flush={Flush} horizontal={Horizontal} numbered={Numbered}>
    
    <slot/>
  </ListGroup>
