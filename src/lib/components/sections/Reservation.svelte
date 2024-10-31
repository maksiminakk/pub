<script>
  import Heading from "../Heading.svelte";
  import "../../styles/sectionStyles.scss";
  import image from "../../img/form.svg";
  import Form from "../Form.svelte";
</script>

<section class="reservation section">
  <div class="reservation__container container">
    <div class="reservation__body">
      <div class="reservation__top">
        <Heading color="secondary" tag="h2" size="large">Reservation</Heading>
      </div>
      <div class="reservation__content">
        <div class="reservation__image">
          <img src={image} alt="Reservation" />
        </div>
        <Form />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .reservation {
    background-color: $accent;

    &__container {
    }

    &__body {
        padding: 60px;
        background-color: $primary;
        border-radius: 24px;
        @media(max-width:767px) {
          padding: 32px;
        }
        @media(max-width:492px) {
          padding: 16px;
        }
    }

    &__top {
        margin-bottom: 52px;
        @media(max-width:768px) {
          margin-bottom: 32px;
          text-align: center;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 32px;
        @media(max-width:768px) {
          grid-template-columns: repeat(1,1fr);
          margin: 0;
        }
    }

    &__image {
        img {
            width: 100%;
            object-fit: cover;
        }
    }
  }
</style>
