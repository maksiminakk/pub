<script>
  import Button from "./Button.svelte";
  import { goto } from "$app/navigation";
  export let links = [];
  export let isMobile = false;
  export let isMobileMenuOpen = false;
  export let closeMenu;
  import { handleAnchorClick } from "../../helpers/scrollTo";

  function handleLinkClick(event, href) {
    event.preventDefault();
    closeMenu();
    goto(href);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    closeMenu();
    handleAnchorClick(event);
  }
</script>

<nav
  class="header__menu menu {isMobile ? 'mobile-menu' : ''} {isMobile &&
  isMobileMenuOpen
    ? 'open'
    : ''}"
  on:closeMenu={closeMenu}
>
  <ul class="menu__list">
    {#each links as { href, label }}
      <li>
        <a
          {href}
          on:click={(event) => handleLinkClick(event, href)}
          class="menu__link">{label}</a
        >
      </li>
    {/each}
  </ul>
  {#if isMobile}
    <div class="menu__buttons">
      <Button
        style="width: 100%"
        size="large"
        variant="primary"
        href="#reservation"
        onClick={(event) => handleButtonClick(event)}>Book Table</Button
      >
      <Button
        style="width: 100%"
        size="large"
        variant="secondary"
        href="#location"
        onClick={(event) => handleButtonClick(event)}>Location</Button
      >
    </div>
  {/if}
</nav>

<style lang="scss">
  .menu {
    display: flex;
    flex: 1 1;
    justify-content: center;

    &__list {
      display: flex;
      gap: 100px;
    }

    &__link {
      font-size: 14px;
      font-weight: 700;
      line-height: 140%;
    }
  }

  @media (max-width: 768px) {
    .menu {
      position: fixed;
      left: -100%;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      background-color: $primary;
      flex-direction: column;
      transition: all 0.4s ease;
      z-index: 1;
      overflow: auto;
      padding: 150px 30px 70px 30px;

      &__link {
        padding: 10px;
        font-size: 20px;
      }

      &__list {
        flex-direction: column;
        align-items: stretch;
        gap: 50px;
        flex: 1 1 100%;
        margin-bottom: 30px;
      }

      &__buttons {
        display: flex;
        gap: 8px;
      }
    }

    .menu.open {
      left: 0;
    }
  }

  @media (max-width: 492px) {
    .menu {
      padding: 100px 16px 40px 16px;
      &__list {
        gap: 20px;
      }

      &__link {
        font-size: 16px;
      }

      &__buttons {
        flex-direction: column;
      }
    }
  }
</style>
