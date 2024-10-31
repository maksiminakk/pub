<script>
  export let tag = "h1";
  export let style = ""
  export let size = "large";
  export let color = "secondary";
  export let className = "";
</script>

<svelte:element this={tag} style={style} class={`heading heading__${size} heading__${color} ${className}`}>
  <slot />
</svelte:element>

<style lang="scss">
  .heading {
    font-size: 64px;
    font-weight: 700;
    color: $secondary;
    line-height: 100%;
    font-family: InterTight;
    @media(max-width:992px) {
        font-size: 48px;
    }
    @media(max-width:492px) {
        font-size: 40px;
    }

    &__medium {
        font-size: 48px;

        @media(max-width:768px) {
            font-size: 40px;
        }

        @media(max-width:492px) {
            font-size: 36px;
        }
    }

    &__small {
      font-size: 30px;
    }

    &__primary {
        color: $primary;
    }

    &__intro {
        margin-bottom: 40px;
        @media(max-width:768px) {
            margin-bottom: 16px;
        }
    }
  }
</style>
