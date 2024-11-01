<script>
    export let className = "";
</script>

<svg class={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10L12 16L18 10" stroke="#B1B1B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<style lang="scss">
    svg {
        height: 24px;
    }

    svg.secondary path {
        stroke: $secondary;
    }
</style>