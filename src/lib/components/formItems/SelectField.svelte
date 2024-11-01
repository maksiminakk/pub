<script>
  import ArrowIcon from "../../img/icons/arrow.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  export let selected = "";
  export let label = "";
  export let options = [];
  export let error = "";
  export let placeholder = "Select an option";

  let isOpen = false;

  function toggleDropdown(event) {
    event.stopPropagation();
    isOpen = !isOpen;
  }

  function selectOption(option) {
    selected = option.value;
    isOpen = false;
  }

  function handleClickOutside(event) {
    if (!event.target.closest(".dropdown")) {
      isOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<div class="dropdown">
  {#if label}<label>{label}</label>{/if}
  <button
    type="button"
    class="dropdown__button {error ? 'error' : ''}"
    on:click={toggleDropdown}
  >
    <span>
      {selected ? options.find((opt) => opt.value === selected)?.label : placeholder}
    </span>
    <div class="dropdown__arrow">
      <ArrowIcon />
    </div>
  </button>
  {#if isOpen}
    <ul
      class="dropdown__options"
      transition:fade={{ duration: 300 }}
      on:click|stopPropagation
    >
      {#each options as option}
        <li>
          <button
            type="button"
            class="dropdown__option {selected === option.value
              ? 'selected'
              : ''}"
            on:click={() => selectOption(option)}
          >
            {option.label}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
  {#if error}<p class="error-message">{error}</p>{/if}
</div>

<style lang="scss">
  .dropdown {
    position: relative;
    &__button {
      border-radius: 8px;
      border: 1px solid $secondary;
      padding: 10px 16px;
      transition: all 0.4s ease 0s;
      color: $secondary;
      width: 100%;
      font-size: 16px;
      line-height: 150%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: $primary;

      &::placeholder {
        color: #b1b1b1;
      }
      &:focus {
        border: 1px solid $accent;
      }
      &.error {
        border: 1px solid #ff4d4d;
      }
      &[disabled] {
        border: 1px solid #d9d9d9;
        color: #d9d9d9;
      }
    }

    &__arrow {
      transition: all 0.4s ease 0s;
      height: 24px;
    }

    &__options {
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      width: 100%;
      z-index: 3;
      background-color: $primary;
      padding: 16px 20px;
      border: 1px solid $secondary;
      border-top: none;
      border-radius: 0 0 12px 12px;
      display: flex;
      flex-direction: column;
      max-height: 250px;
      overflow: auto;

      li {
        .dropdown__option {
          padding: 12px 0;
        }
        &:first-child {
          .dropdown__option {
            padding-top: 0;
          }
        }

        &:last-child {
          .dropdown__option {
            padding-bottom: 0;
          }
        }
      }
    }

    &__option {
      font-size: 16px;
      color: $secondary;
      width: 100%;
      display: block;
      text-align: left;
    }
  }
</style>
