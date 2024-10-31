<script>
  import Button from "../Button.svelte";
  import Heading from "../Heading.svelte";
  import icon from "../../img/icons/time.svg";
  const items = [
    {
      icon: icon,
      title: "Title",
      buttonText: "Button",
    },
    {
      icon: icon,
      title: "Title",
      buttonText: "Button",
    },
    {
      icon: icon,
      title: "Title",
      buttonText: "Button",
    },
  ];
</script>

<section class="items section">
  <div class="items__container container">
    <div class="items__body">
      {#each items as item}
        <div class="items__item">
          <div class="items__icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <Heading color="secondary" tag="h3" size="small">{item.title}</Heading
          >
          <Button size="large" variant="primary">
            {item.buttonText}
          </Button>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .items {
    &__container {
    }

    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;

      @media (max-width: 768px) {
        gap: 50px;
        justify-content: space-around; 
      }
      @media(max-width:492px) {
        flex-direction: column;
        justify-content: stretch;
        gap: 40px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;
      text-align: center;
      flex: 0 1 calc(33% - 25px);
      @media(max-width:768px) {
        flex: 0 1 calc(50% - 25px);
      }
      @media(max-width:492px) {
        flex: auto;
      }
    }

    &__icon {
      background-color: #f7f8fa;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 12px;
    }
  }
</style>
