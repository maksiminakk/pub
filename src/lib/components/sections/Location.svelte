<script>
  import Heading from "../Heading.svelte";
  import Map from "../Map.svelte";
  import "../../styles/sectionStyles.scss";

  const apiKey = "AIzaSyBvL_ax990BMiHgkMR8Yp_qux_pEJqKAV4";
  const center = { lat: 55.7558, lng: 37.6176 };
</script>

<section class="section location" id="location">
  <div class="location__container container">
    <div class="location__body">
      <div class="location__top">
        <Heading tag="h2" size="large" color="secondary">Where to find us</Heading>
      </div>
      <div class="location__content">
        <h4 class="location__label">
          Nádražní 44/86, Smíchov, 150 00 Praha-Praha 5, Česko
        </h4>
        <div class="location__map">
          <Map {apiKey} {center} zoom={15} />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .section {
  }
  .location {
    &__container {
    }

    &__body {
        padding: 60px;
        @media(max-width:768px) {
            padding: 0;
        }
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 40px;
        @media(max-width:768px) {
            margin-bottom: 32px;
        }
        @media(max-width:492px) {
            margin-bottom: 40px;
        }
    }

    &__content {
    }

    &__label {
        font-size: 30px;
        line-height: 125%;
        margin-bottom: 32px;
        font-weight: 400;
        text-align: center;
        font-family: 'NunitoSans', "Helvetica Neue", Helvetica, sans-serif;
        @media(max-width:768px) {
            font-size: 24px;
            margin-bottom: 50px;
        }
        @media(max-width:492px) {
            font-size: 20px;
            margin-bottom: 32px;
        }
    }

    &__map {
    }
  }
</style>
