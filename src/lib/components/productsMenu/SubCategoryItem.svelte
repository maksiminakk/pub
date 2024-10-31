<script>
  export let name;
  export let description;
  export let price;
  export let imageSrc = "";
  import pivoImage from "../../img/pivo.png";
</script>

<div class="subcategory-item">
  <div class="subcategory-item__image">
    {#if imageSrc}
      <!-- <img src={imageSrc} alt={name}/> -->
      <img src={pivoImage} alt="" />
    {/if}
  </div>
  <div class="subcategory-item__label">{name}</div>
  <p>{description}</p>
  <div class="subcategory-item__price">
    {price}
  </div>
</div>

<style lang="scss">
  .subcategory-item {
    padding: 16px 32px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid $secondary;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 25%;
    width: 100%;
    &__image {
      margin-bottom: 24px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    &__label {
      font-size: 24px;
      font-weight: 700;
      line-height: 120%;
      margin-bottom: 16px;
    }

    p {
      line-height: 150%;
      display: block;
      margin-bottom: 16px;
      flex: 1 1 100%;
    }

    &__price {
      color: $accent;
      font-size: 24px;
      font-weight: 700;
    }
  }
</style>
