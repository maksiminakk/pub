<script>
  import Heading from "../Heading.svelte";
  import "../../styles/sectionStyles.scss";

  export let title = "Promotion"; // Заголовок по умолчанию
  export let description = "Description"; // Описание по умолчанию
  export let hideDescription = false; // Управление видимостью описания
</script>

<section class="promotion section">
  <div class="promotion__container container">
    <div class="promotion__body">
      <Heading color="primary" tag="h2" size="medium">
        {title}
      </Heading>
      {#if !hideDescription}
        <p class="text__label">{description}</p>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  .promotion {
    background-color: $accent;

    @media (max-width: 768px) {
      padding: 100px 0;
    }

    &__body {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;

      p {
        margin-top: 24px;
        color: $primary;
        
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }
</style>
