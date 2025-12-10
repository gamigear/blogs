<script>
    export let ribbonColor = "";
    export let ribbonPosition = "";
    export let ribbonClass = "";
</script>

<div class={`${ribbonClass} ribbon-${ribbonColor} ${ribbonPosition}`}>
    <slot />
</div>
