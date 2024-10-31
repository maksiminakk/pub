<script>
  import LogoIcon from "../img/icons/logo.svelte";
  import Heading from "./Heading.svelte";
  import FooterMenu from "./FooterMenu.svelte";

  const contactLinks = [
    { href: "/", label: "Address" },
    { href: "mailto:example@123.com", label: "email" },
    { href: "tel:420 000 000-000", label: "telephone" },
    { href: "/", label: "Open Hours" },
  ];

  const menu = [
    { href: "/", label: "LinkItem" },
    { href: "/", label: "LinkItem" },
    { href: "/", label: "LinkItem" },
    { href: "/", label: "LinkItem" },
  ];
</script>

<footer class="footer section">
  <div class="footer__container container">
    <div class="footer__body">
      <div class="footer__left">
        <a href="/" class="footer__logo" type="secondary">
          <LogoIcon className="primary"/>
          Logo
        </a>
        <div class="footer__copy">© 2023 Company</div>
      </div>
      <div class="footer__column">
        <Heading tag="h3" size="small" color="primary">Contacts</Heading>
        <div class="footer__row">
          <FooterMenu links={contactLinks} />
        </div>
      </div>
      <div class="footer__column">
        <Heading tag="h3" size="small" color="primary">Menu</Heading>
        <div class="footer__row">
          <FooterMenu links={menu} />
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    background-color: $secondary;
    color: $primary;

    &__container {
    }

    &__body {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 20px;
      @media(max-width:492px) {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }

    &__left {
      @media(max-width:492px) {
        order: 3;
      }
    }

    &__logo {
      display: flex;
      gap: 10px;
      color: $primary;
      font-weight: 700;
      font-size: 16px;
      align-items: center;
    }

    &__copy {
      margin-top: 12px;
      font-size: 14px;
      line-height: 140%;
    }

    &__content {
    }

    &__column {
      @media(max-width:492px) {
        order: 1;
        &:last-child {
          order: 2;
        }
      }
    }

    &__row {
      margin-top: 28px;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
</style>
