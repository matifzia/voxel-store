<template>
  <header class="header">
    <div class="left">
      <span class="project-name-first-part">Voxel</span>
      <span class="project-name-second-part">Store</span>
    </div>
    <div class="right">
      <button class="cart-button" @click="setCartOpen(true)">
        <img src="@/assets/images/bag.svg" alt="Cart" class="cart-image" />
      </button>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setCartOpen']),
  },
}
</script>

<style scoped lang="scss">
.header {
  @include flexDirectionJustify(
    $justify-content: space-between,
    $align-items: center
  );
  padding: 0 4rem;
  height: 64px;

  .left {
    flex: 1;
    .project-name-first-part {
      font-weight: bold;
    }
    .project-name-second-part {
      opacity: 50%;
    }
  }

  .right {
    @include flexDirectionJustify($align-items: center);
    .cart-button {
      @include backgroundColor($color: $transparent-color);
      border: none;
      padding: 0;
      cursor: pointer;
      .cart-image {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 992px) {
    padding: 0 3rem;

    .left,
    .right {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    .left,
    .right {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
}
</style>
