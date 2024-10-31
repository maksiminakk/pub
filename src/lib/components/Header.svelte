<script>
  import Logo from "../img/icons/logo.svelte";
  import { page } from "$app/stores";
  import Menu from "./Menu.svelte";
  import { onMount } from 'svelte';
  import BurgerButton from "./BurgerButton.svelte";
  const links = [
    { href: "/", label: "Главная" },
    { href: "/menu", label: "Меню" },
    { href: "/", label: "LinkItem" },
    { href: "/", label: "LinkItem" },
  ];

  let isMobileMenuOpen = false;
  let isMobile = false;

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 769;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });
</script>

<header class="header">
  <div class="header__container container">
    <div class="header__body">
      <a href="/" class="header__logo">
        <Logo />
        Logo
      </a>
      <Menu {links} isMobile={isMobile} isMobileMenuOpen={isMobileMenuOpen} />
      {#if isMobile}
        <BurgerButton onClick={toggleMenu} isActive={isMobileMenuOpen}/>
      {/if}
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    padding: 18px 0;
    @media(max-width:767px) {
      padding: 30px 0;
    }
    @media(max-width:492px) {
      padding: 18px 0;
    }
    &__container {
    }

    &__body {
      display: flex;
      align-items: center;
      gap: 50px;
      @media(max-width:768px) {
        justify-content: space-between;
      }
    }

    &__logo {
      flex: 0 0;
      display: flex;
      align-items: center;
      z-index: 2;
      font-weight: 700;
      color: $accent;
      gap: 10px;
    }
  }
</style>
