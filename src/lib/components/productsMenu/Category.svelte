<script>
    import SubCategoryItem from "../productsMenu/SubCategoryItem.svelte";
    import Tabs from "../productsMenu/Tabs.svelte";
    import { onMount } from "svelte";
    import Heading from "../Heading.svelte";
    import ArrowIcon from "../../img/icons/arrow.svelte";
    export let categoryData;
  
    let selectedSubCategoryId = null;
    let selectedSubCategory = null;
    let isMobile = false;
    let activeSpoiler = null;
  
    // Устанавливаем первую подкатегорию как активную по умолчанию при изменении категории
    $: if (categoryData && categoryData.subCategories) {
      selectedSubCategoryId = categoryData.subCategories[0]?.id;
    }
  
    $: selectedSubCategory = categoryData?.subCategories.find(
      (subCategory) => subCategory.id === selectedSubCategoryId
    );
  
    // Определение мобильного режима
    onMount(() => {
      const updateScreenSize = () => {
        isMobile = window.innerWidth < 768;
      };
      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    });
  
    // Обработка выбора подкатегории на десктопе
    function handleSubCategorySelect(id) {
      selectedSubCategoryId = id;
    }
  
    // Функция для управления анимацией спойлеров
    function toggleSpoiler(event, subCategoryId) {
      const summaryElement = event.currentTarget;
      const content = summaryElement.nextElementSibling;
  
      if (activeSpoiler && activeSpoiler !== content) {
        activeSpoiler.style.maxHeight = null;
        activeSpoiler.previousElementSibling.classList.remove("active");
      }
  
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        activeSpoiler = null;
        summaryElement.classList.remove('active');
      } else {
        activeSpoiler = content;
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + "px";
          summaryElement.classList.add('active');
        });
      }
    }
  </script>
  
  <div class="category">
    {#if !isMobile}
      <Tabs
        className="row"
        items={categoryData.subCategories.map((sub) => ({
          id: sub.id,
          label: sub.name,
        }))}
        onSelect={handleSubCategorySelect}
      />
    {:else}
      <div class="category__top">
        <Heading color="secondary" tag="h3" size="small">
          {categoryData.name}
        </Heading>
      </div>
      <div class="spoilers">
        {#each categoryData.subCategories as subCategory}
          <div class="spoiler">
            <summary on:click={(event) => toggleSpoiler(event, subCategory.id)} class="spoiler-summary">
              {subCategory.name}
              <div
                class="spoiler-summary__arrow"
                class:active={activeSpoiler === subCategory.id}
              >
                <ArrowIcon className="secondary" />
              </div>
            </summary>
            <div class="spoiler-content">
              <ul class="subcategory__row">
                {#each subCategory.items as item}
                  <SubCategoryItem
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    imageSrc={item.image}
                  />
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  
    {#if !isMobile && selectedSubCategory}
      <div class="subcategory__body">
        <h3 class="category__title">{selectedSubCategory.name}</h3>
        <ul class="subcategory__row">
          {#each selectedSubCategory.items as item}
            <SubCategoryItem
              name={item.name}
              description={item.description}
              price={item.price}
              imageSrc={item.image}
            />
          {/each}
        </ul>
      </div>
    {/if}
  </div>  

<style lang="scss">
  .subcategory {
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px 30px;
      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
      }
    }
  }

  .category {
    flex: 1 1;
    &__title {
      display: none;

      @media (max-width: 767px) {
        display: block;
      }
    }

    &__top {
      padding: 8px 0;
      border-bottom: 1px solid #959595;
      margin-bottom: 40px;
    }

    &__link {
      font-size: 24px;
      transition: all 0.4s ease 0s;
      font-weight: 700;
      line-height: 120%;
      text-align: left;
    }

    &__menu {
      display: flex;
      gap: 60px;
      margin-bottom: 50px;
    }
  }
  .spoilers {
    display: flex;
    flex-direction: column;
  }

  .spoiler {
    padding-bottom: 40px;
  }

  .spoiler-summary {
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    &.active .spoiler-summary__arrow {
      transform: rotate(180deg);
    }
  }

  .spoiler-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease;
  }
</style>
