<script>
  export let links = [];
</script>

<nav class="footer__menu footer-menu">
  <ul class="footer-menu__list">
    {#each links as { href, label }}
      <li>
        <a {href} class="footer-menu__link">{label}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .footer-menu {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__link {
      font-size: 16px;
      color: $primary;
      line-height: 150%;
    }
  }
</style>
