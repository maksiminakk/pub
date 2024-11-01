<script>
  import Heading from "../Heading.svelte";
  import Button from "../Button.svelte";
  import "../../styles/sectionStyles.scss";
  import image from "../../img/intro.svg";
  const howItWorksItems = [
    {
      image: image,
      title: "Подзаголовок. Кегль шрифта может быть больше",
      description: "Описание в 3-5 строчек",
      buttonText: "Button",
    },
    {
      image: image,
      title: "Подзаголовок. Кегль шрифта может быть больше",
      description: "Описание в 3-5 строчек",
      buttonText: "Button",
    },
    {
      image: image,
      title: "Подзаголовок. Кегль шрифта может быть больше",
      description: "Описание в 3-5 строчек",
      buttonText: "Button",
    },
  ];
</script>

<section class="how-it-works section">
  <div class="how-it-works__container container">
    <div class="how-it-works__body">
      <div class="how-it-works__top">
        <Heading color="secondary" tag="h2" size="large">How it works</Heading>
      </div>
      <div class="how-it-works__content">
        {#each howItWorksItems as item}
          <div class="how-it-works__item how-it-works-item">
            <div class="how-it-works-item__image">
              <img src={item.image} alt={item.title} />
            </div>
            <div class="how-it-works-item__content">
              <Heading
                style="line-height: 125%; max-width: 490px;"
                color="secondary"
                tag="h3"
                size="small">{item.title}</Heading
              >
              <p class="text">{item.description}</p>
              <Button size="large" variant="primary">
                {item.buttonText}
              </Button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .how-it-works {
    &__container {
    }

    &__body {
    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 64px;
      @media (max-width: 768px) {
        margin-bottom: 70px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      @media (max-width: 768px) {
        gap: 50px;
      }
    }

    &__item {
    }
  }

  .how-it-works-item {
    display: flex;
    gap: 40px;
    align-items: center;
    @media (max-width: 768px) {
      gap: 50px;
    }
    @media (min-width: 700px) {
      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    @media(max-width:700px) {
        flex-direction: column;
        gap: 32px;
        align-items: stretch;
    }

    &__image {
      flex: 0 1 50%;
      img {
        width: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 28px;
      align-items: start;
      flex: 0 1 50%;
      p {
        margin-bottom: 8px;
      }
      @media (max-width: 768px) {
        gap: 16px;
        align-items: stretch;
        p {
          margin-bottom: 16px;
        }
      }
    }
  }
</style>
