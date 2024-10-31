
<script>
  export let onClick;
  export let isActive = false;
</script>

<button class="menu-burger {isActive ? '_active' : ''}" on:click={onClick}>
  <span></span>
</button>

<style lang="scss">
  .menu-burger {
    @media (max-width: 768px) {
      display: block;
      cursor: pointer;
      width: 16px;
      height: 14px;
      flex: 0 0 20px;
      z-index: 2;
      position: relative;
      span,
      &:before,
      &:after {
        height: 2px;
        width: 100%;
        left: 0;
        display: block;
        transition: 0.3s;
        position: absolute;
        background: $accent;
        border-radius: 10px;
      }

      &:after,
      &:before {
        content: "";
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }

      span {
        top: 50%;
        transform: scale(1) translate(0px, -50%);
      }

      &._active {
        span {
          transform: scale(0) translate(0px, -50%);
        }

        &:before {
          top: 50%;
          transform: rotate(-45deg) translate(0px, -50%);
        }

        &:after {
          bottom: 50%;
          transform: rotate(45deg) translate(0px, 50%);
        }
      }
    }
  }
</style>
