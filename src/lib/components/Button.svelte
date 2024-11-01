<script>
  export let className = "";
  export let style = "";
  export let variant = "default";
  export let size = "medium";
  export let href = null;
  export let onClick = () => {};

  const classes = `button ${className} button__${variant} button__${size}`;
</script>

{#if href}
  <!-- Если передан href, рендерим как <a> -->
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
  $buttonPrimaryHover: #00EECE;
  $buttonBaseColor: #000;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: $accent;
    transition: all 0.4s ease 0s;
    /* Размеры кнопки */
    font-weight: 700;
    @media(max-width:492px) {
      width: 100%;
    }
    &__small {
      font-size: 12px;
      font-weight: 400;
      padding: 6px 10px;
    }

    &__medium {
      padding: 12px 16px;
      font-size: 14px;
    }

    &__large {
      font-size: 16px;
      padding: 16px 24px;
    }
    
    /* Типы кнопки */

    &__primary {
      background-color: $accent;
      color: $primary;
      border: 1px solid $accent;
      &:hover {
        color: $buttonBaseColor;
        background-color: $buttonPrimaryHover;
        border: 1px solid $buttonPrimaryHover;
      }
    }

    &__secondary {
      background-color: $primary;
      color: $accent;
      border: 1px solid $accent;
    }

    &__clear {
      background-color: $primary;
      color: $accent;
      border: 1px solid $primary;
    }
  }
</style>
