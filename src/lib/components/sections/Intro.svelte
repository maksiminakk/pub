<script>
  import Heading from "../Heading.svelte";
  import Button from "../Button.svelte";
  import imageSrc from "../../img/intro.svg";
  import "../../styles/sectionStyles.scss";
  import { handleAnchorClick } from "../../../helpers/scrollTo"
</script>

<section class="intro section">
  <div class="intro__container container">
    <div class="intro__body">
      <div class="intro__content">
        <Heading className="heading__intro" tag="h1" size="large">
          Заголовок – основная суть предложения
        </Heading>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </p>
        <div class="intro__buttons">
          <Button size="large" variant="primary" href="#reservation" onClick={handleAnchorClick}>Book Table</Button>
          <Button size="large" variant="secondary" href="#location" onClick={handleAnchorClick}>Location</Button>
        </div>
      </div>
      <div class="intro__image">
        <img src={imageSrc} alt="Intro" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .intro {
    &__container {
    }

    &__body {
        display: flex;
        gap: 70px;
        justify-content: space-between;
        @media(max-width:700px) {
            flex-direction: column;
            gap: 32px;
        }
    }

    &__content {
        flex: 0 1 550px;
        p {
            margin-bottom: 40px;
        }
        @media(max-width:768px) {
            flex: 0 1 320px;
        }
        @media(max-width:700px) {
            flex: auto;
        }
    }

    &__buttons {
        display: flex;
        gap: 20px;
        @media(max-width:768px) {
            gap: 8px;
        }
    }

    &__image {
        flex: 0 1 320px;
        img {
            width: 100%;
            object-fit: cover;
        }
        @media(max-width:700px) {
            flex: auto;
        }
    }
  }
</style>
