<script>
  import { writable } from "svelte/store";
  export let items = [];
  export let onSelect;
  export let className = "";

  let selectedTab = writable(items[0]?.id || null);

  // Обновить выбранный таб при изменении списка элементов
  $: if (items.length > 0 && !selectedTab) {
    selectedTab.set(items[0].id);
  }

  function handleTabClick(id) {
    selectedTab.set(id);
    onSelect(id);
  }
</script>

<div class="tabs {className}">
  {#each items as item}
    <button
      class="tabs__button  {$selectedTab === item.id
        ? 'active'
        : ''}"
      on:click={() => handleTabClick(item.id)}
    >
      {item.label}
    </button>
  {/each}
</div>

<style lang="scss">
  .tabs {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    gap: 60px;
    &.row {
      flex-direction: row;
      padding: 0;
      margin-bottom: 50px;
    }
    &__button {
      font-size: 24px;
      transition: all 0.4s ease 0s;
      font-weight: 700;
      line-height: 120%;
      text-align: left;

      &.active {
        text-decoration: underline;
        color: $accent;
      }
    }
  }
</style>
