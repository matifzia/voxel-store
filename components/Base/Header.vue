<template>
  <header class="header">
    <div class="title">
      <span class="project-name-first-part">Voxel</span>
      <span class="title-second-part">Store</span>
    </div>
    <div class="shopping-bag">
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

  .title {
    @include applyFont($size: 18px, $weight: 600, $height: 22px);
    @include color();
    flex: 1;
    .title-second-part {
      opacity: 0.5;
    }
  }

  .shopping-bag {
    @include flexDirectionJustify($align-items: center);
    .cart-button {
      @include backgroundColor($color: $transparent-color);
      border: none;
      cursor: pointer;
      .cart-image {
        width: 24px;
        height: 24px;
      }
    }
  }

  @include tablet-l-width {
    padding: 0 3rem;
  }

  @include tablet-p-width {
    padding: 0 2rem;
  }

  @include mobile-width {
    padding: 0 1rem;
  }
}
</style>
