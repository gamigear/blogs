<script lang="ts">
  import { Badge } from "@sveltestrap/sveltestrap";
  type Shadow =
    | boolean
    | "shadow-none"
    | "shadow-sm"
    | "shadow"
    | "shadow-lg"
    | undefined;
  type Border =
    | boolean
    | "border"
    | "border-top"
    | "border-bottom"
    | "border-end"
    | "border-start"
    | undefined;
  export let text: string = "";
  export let Color: string = "";
  export let Shadow: Shadow = undefined;
  export let Border: Border = undefined;
  export let Pill: boolean = false;
  export let Positioned: boolean = false;
  export let Indicator: boolean = false;
  export let Href: string = ""; // Link target
  export let CustomClass: string = "";
</script>

<Badge
  color={Color}
  href={Href}
  shadow={Shadow}
  pill={Pill}
  indicator={Indicator}
  positioned={Positioned}
  border={Border}
  class={CustomClass}
>
  <slot />
  {#if text}
    {@html text}
  {/if}
</Badge>
