<template>
  <div class="product">
    <img
      :src="product.image"
      width="293px"
      height="280px"
      alt="Product Image"
      class="product-img"
    />
    <div class="details">
      <div class="price-description-container">
        <div style="height: 4rem">
          <div class="description">{{ product.title }}</div>
          <div class="price">${{ product.price | leadingTwo }}</div>
        </div>
        <button type="button" class="cart-button" @click="addToCart(product)">
          <img
            height="24px"
            width="24px"
            :src="
              itemAddedInCart(product.id)
                ? require('@/assets/images/done.svg')
                : require('@/assets/images/add.svg')
            "
          />
          <div class="caption">Add to Cart</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'ItemCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['itemAddedInCart']),
  },
  methods: {
    ...mapMutations(['addToCart']),
  },
}
</script>

<style lang="scss">
.product {
  @include flexDirectionJustify($direction: column, $align-items: flex-start);
  padding: 32px 24px;
  max-height: 503px;
  gap: 32px;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 12px;
  max-width: 341px;
  .product-img {
    @include flexDirectionJustify(
      $direction: column,
      $justify-content: center,
      $align-items: center
    );
    padding: 0 3rem;
  }

  .details {
    @include backgroundColor($color: $white-color);
    @include flexDirectionJustify(
      $direction: column,
      $justify-content: space-between,
      $align-items: flex-start
    );
    gap: 18px;
    width: 100%;

    .price-description-container {
      @include flexDirectionJustify(
        $direction: column,
        $align-items: flex-start
      );
      gap: 6px;
      width: 100%;
      .description,
      .price {
        @include color($color: $eerie-black-color);
        @include applyFont($size: 16px, $height: 20px);
      }
      .description {
        font-weight: 600;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .price {
        opacity: 0.5;
        font-weight: 500;
      }
    }

    .cart-button {
      @include backgroundColor($color: #f4f4f4);
      @include color($color: $eerie-black-color);
      @include flexDirectionJustify(
        $justify-content: center,
        $align-items: flex-start
      );

      padding: 16px 20px 16px 16px;
      gap: 6px;
      border-radius: 12px;
      width: 100%;
      outline: none;
      border: none;
      cursor: pointer;

      .caption {
        @include applyFont($size: 16px, $weight: 600, $height: 20px);
      }
    }
  }
}
</style>
