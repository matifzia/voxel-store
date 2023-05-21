<template>
  <div class="product-description-container">
    <span class="product-img-container">
      <img class="product-img" :src="product.image" />
    </span>

    <div>
      <div class="product-details">
        <div class="product-title">
          {{ product.title }}
        </div>
      </div>
      <div class="price-details">
        <div class="price">${{ product.price }}</div>
        <button
          type="button"
          class="remove-button"
          @click="removeFromCart(product.id)"
        >
          remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CartProducts',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['removeFromCart']),
  },
}
</script>

<style lang="scss" scoped>
.product-description-container {
  @include flexDirectionJustify($align-items: center);
  padding: 0px;
  gap: 16px;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .product-img-container {
    @include flexDirectionJustify(
      $justify-content: center,
      $align-items: center
    );
    border: 1px solid rgba(26, 26, 26, 0.1);
    height: 102px;
    width: 102px;
    min-width: 102px;
    min-height: 102px;
  }

  .product-img {
    object-fit: fill;
    height: 72px;
    width: 72px;
  }

  .product-details {
    @include flexDirectionJustify(
      $direction: column,
      $justify-content: center,
      $align-items: flex-start
    );
    padding: 0px;
    gap: 12px;
    .product-title {
      @include color($color: $eerie-black-color);
      @include applyFont($size: 16px, $weight: 600, $height: 20px);
    }
  }

  .price-details {
    @include flexDirectionJustify(
      $justify-content: space-between,
      $align-items: flex-start
    );
    padding: 0px;
    gap: 12px;
    margin-top: 1rem;
    .price,
    .remove-button {
      @include color($color: $eerie-black-color, $opacity: 0.5);
      @include applyFont($size: 16px, $height: 20px);
      text-align: right;
      cursor: pointer;
    }
    .remove-button {
      @include backgroundColor($color: $transparent-color);
      border: none;
      outline: none;
    }
  }
}
</style>
