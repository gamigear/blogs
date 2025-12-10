<script lang="ts">
    export let ribbonColor: string = "";
    export let ribbonPosition: string = "";
    export let ribbonClass: string = "";
</script>

<div class={`${ribbonClass} ribbon-${ribbonColor} ${ribbonPosition}`}>
    <slot />
</div>
