<script>

  import { Popover } from "@sveltestrap/sveltestrap";
  export let targetId = '';
  export let content = '';
  export let title = '';
  export let customClass = '';
  export let trigger = '';
  export let dismissible = false;
  export let placement = 'top';
</script>



<Popover
animation={true}
  target={targetId}
  placement={placement}
  class={customClass}
  dismissible={dismissible}
  trigger={trigger}
  hideOnOutsideClick={false}
  title={title}>
  {content}
  <slot />
</Popover>