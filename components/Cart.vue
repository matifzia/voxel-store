<template>
  <div :class="['cart', { open: cartIsOpen }]">
    <div class="content">
      <div class="title-container">
        <span class="title">Your Cart ({{ cartItemsCount }})</span>
        <img
          class="close"
          height="32px"
          width="32px"
          src="@/assets/images/add.svg"
          @click="setCartOpen(false)"
        />
      </div>

      <cart-product
        v-for="(product, i) in cart"
        :key="'prd_' + i"
        :product="product"
      />

      <div class="total-container">
        <div class="total">
          <div class="total-text">Total</div>
          <div class="total-text">${{ leadingTwo(cartItemsSum) }}</div>
        </div>
        <button class="checkout-button">Continue to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CartProduct from './CartProduct.vue'
import { useProductsStore } from '~/store/products'

// access store
const cartStore = useProductsStore()
const { cartIsOpen, cart, cartItemsCount, cartItemsSum } =
  storeToRefs(cartStore)
const { setCartOpen } = cartStore

// old Vue filter replacement
function leadingTwo(value: number) {
  return value.toFixed(2)
}
</script>

<style lang="scss" scoped>
.cart {
  @include backgroundColor($color: $white-color);
  @include flexDirectionJustify($direction: column, $align-items: flex-start);
  position: fixed;
  top: 0;
  right: -460px;
  padding: 32px 32px 24px;
  width: 460px;
  height: 100%;
  transition: right 0.3s ease-in-out;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.2);
  z-index: 999;
  overflow-y: auto;

  &.open {
    right: 0;

    @include tablet-p-width {
      width: 400px;
    }

    @include mobile-width {
      width: 100%;
      padding: 20px;
    }
  }

  .content {
    width: 100%;

    .title-container {
      @include flexDirectionJustify(
        $justify-content: space-between,
        $align-items: center
      );
      padding: 0px 0px 24px;
      gap: 24px;
      height: 56px;
      border-bottom: 1px solid rgba(26, 26, 26, 0.1);

      .title {
        @include applyFont($size: 22px, $weight: 600, $height: 27px);
      }

      .close {
        rotate: (45deg);
        cursor: pointer;
      }
    }

    .total-container {
      @include flexDirectionJustify(
        $direction: column,
        $align-items: flex-start
      );

      .total {
        @include flexDirectionJustify(
          $justify-content: space-between,
          $align-items: center
        );

        padding: 24px 0px;
        gap: 24px;
        border-top: 1px solid rgba(26, 26, 26, 0.1);
        width: 100%;

        .total-text {
          @include applyFont($size: 22px, $weight: 600, $height: 27px);
        }
      }

      .checkout-button {
        @include color($color: $white-color);
        @include flexDirectionJustify(
          $justify-content: center,
          $align-items: center
        );
        @include applyFont($size: 16px, $weight: 600, $height: 20px);
        padding: 10px;
        gap: 10px;
        background: linear-gradient(0deg, #462ddf, #462ddf), #1a1a1a;
        border: #462ddf;
        width: 100%;
        border-radius: 8px;
        height: 59px;
      }
    }
  }
}
</style>
