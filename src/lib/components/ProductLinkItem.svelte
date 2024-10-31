<script>
    export let className = "";
    export let style = "";
    export let href = null;
    export let onClick;
  
    const classes = `button ${className}`;
  </script>
  
  {#if href}
    <a class={classes} href={href} style={style} on:click={onClick}>
      <slot />
    </a>
  {:else}
    <!-- Иначе рендерим как <button> -->
    <button class={classes} style={style} on:click={onClick}>
      <slot />
    </button>
  {/if}
  
  <style lang="scss">
    
  </style>
  