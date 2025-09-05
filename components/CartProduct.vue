<template>
  <div class="product-description-container">
    <span class="product-img-container">
      <div
        alt="Product Image"
        class="product-img"
        :style="'background-image:url(' + product.image + ')'"
      />
    </span>

    <div style="width: 100%">
      <div class="product-details">
        <div class="product-title">
          {{ product.title }}
        </div>
      </div>
      <div class="price-details">
        <div class="price">${{ product.price | leadingTwo }}</div>
        <button
          type="button"
          class="remove-button"
          @click="cart.removeFromCart(product.id)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/store/products';


const cart = useProductsStore()

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.product-description-container {
  @include flexDirectionJustify($align-items: center);
  gap: 16px;
  width: 100%;
  margin: 1.5rem 0;

  .product-img-container {
    @include flexDirectionJustify(
      $justify-content: center,
      $align-items: center
    );
    border: 1px solid rgba(26, 26, 26, 0.1);
    border-radius: 8px;
    height: 102px;
    width: 102px;
    min-width: 102px;
    min-height: 102px;
    @include mobile-width {
      height: 82px;
      width: 82px;
      min-width: 82px;
      min-height: 82px;
    }
    .product-img {
      object-fit: fill;
      height: 72px;
      width: 72px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      @include mobile-width {
        height: 50px;
        width: 50px;
      }
    }
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