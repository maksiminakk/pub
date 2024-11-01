<script>
  import Heading from "../Heading.svelte";
  import "../../styles/sectionStyles.scss";
  import { onMount } from "svelte";
  import Category from "../productsMenu/Category.svelte";
  import Tabs from "../productsMenu/Tabs.svelte";

  const menuItems = [
    { id: "alcoholic_drinks", label: "Alcoholic Drinks" },
    { id: "non_alcoholic_drinks", label: "Non-Alcoholic Drinks" },
    { id: "food", label: "Food" },
  ];

  let selectedCategory = menuItems[0].id;
  let categoriesData = {};
  let isMobile = false;

  function checkIsMobile() {
    isMobile = window.matchMedia("(max-width: 768px)").matches;
  }

  onMount(async () => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    try {
      const response = await fetch("/categories");
      // const data = await response.json(); // бек
      const data = {
        alcoholic_drinks: {
          name: "Alcoholic Drinks",
          subCategories: [
            {
              id: "beer",
              name: "Beer",
              description: "Different types of beers",
              items: [
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
                {
                  name: "Pilsner Urquell",
                  price: "CZK 55",
                  description: "0.5l",
                  image: "pivo",
                },
              ],
            },
            {
              id: "wine",
              name: "Wine",
              description: "Fine selection of wines",
              items: [
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },

                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
              ],
            },
          ],
        },
        non_alcoholic_drinks: {
          name: "Non-Alcoholic Drinks",
          subCategories: [
            {
              id: "juice",
              name: "Juice",
              description: "Fresh juices",
              items: [
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
              ],
            },
          ],
        },
        food: {
          name: "Food",
          subCategories: [
            {
              id: "snacks",
              name: "Snacks",
              description: "Tasty snacks",
              items: [
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
                {
                  name: "Merlot",
                  price: "CZK 100",
                  image: "pivo",
                  description: "0.5l",
                },
              ],
            },
          ],
        },
      };
      categoriesData = data;
    } catch (error) {
      console.error("Ошибка загрузки данных категорий:", error);
    }
  });

  function handleCategorySelect(id) {
    selectedCategory = id;
  }
</script>

<section class="products section">
  <div class="products__container container">
    <div class="products__body">
      <div class="products__top">
        <Heading tag="h1" size="large">Menu</Heading>
      </div>
      <div class="products__content">
        <!-- Меню табов -->
        {#if !isMobile}
          <Tabs items={menuItems} onSelect={handleCategorySelect} />
        {/if}
        <div class="products__categories">
          <!-- Если мобильное устройство, отображаем все категории -->
          {#if isMobile}
            {#each Object.values(categoriesData) as categoryData}
              <Category {categoryData} />
            {/each}
          {:else}
            <!-- Если десктоп, отображаем только выбранную категорию -->
            {#if selectedCategory && categoriesData[selectedCategory]}
              <Category categoryData={categoriesData[selectedCategory]} />
            {/if}
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .products {
    &__container {
    }

    &__body {
    }

    &__top {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 80px;
    }

    &__content {
      display: flex;
      gap: 60px;
    }

    &__link {
      font-size: 24px;
      transition: all 0.4s ease 0s;
      font-weight: 700;
      line-height: 120%;
      text-align: left;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 60px;
      padding-top: 80px;
    }

    &__categories {
      flex: 1 1;
    }
  }
  .container {
  }
</style>
