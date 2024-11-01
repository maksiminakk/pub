<script>
  import IMask from 'imask';
  import { onDestroy } from 'svelte';
  export let value = "";
  export let label = "";
  export let placeholder = "";
  export let error = "";
  export let type = "text";
  export let readonly = false;
  export let mask = null;

  let input;
  let imaskInstance;

  function handleInput(event) {
    value = event.target.value;
  }

  function applyMask() {
    if (mask && input) {
      imaskInstance = IMask(input, { mask });
      imaskInstance.on('accept', () => {
        value = imaskInstance.value;
      });
      imaskInstance.on('complete', () => {
        value = imaskInstance.value;
      });
    }
  }

  onDestroy(() => {
    if (imaskInstance) {
      imaskInstance.destroy();
    }
  });
</script>

<div class="input-field">
  {#if label}<label>{label}</label>{/if}
  <input
    type={type}
    bind:this={input}
    bind:value
    placeholder={placeholder}
    class="input {error ? 'error' : ''}"
    on:input={mask ? applyMask : handleInput}
    readonly={readonly}
  />
</div>

<style lang="scss">
  .input {
    border-radius: 8px;
    border: 1px solid $secondary;   
    padding: 10px 16px;
    transition: all 0.4s ease 0s;
    color: $secondary;
    width: 100%;
    font-size: 16px;
    line-height: 150%;
    background-color: $primary;
    &::placeholder {
      color: #B1B1B1;
    }
    &:focus {
      border: 1px solid $accent;
    }
    &.error {
      border: 1px solid #FF4D4D;
    }
    &[disabled] {
      border: 1px solid #D9D9D9;
      color: #D9D9D9;
    }
  }
</style>
