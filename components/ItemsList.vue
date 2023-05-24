<template>
  <div v-if="$fetchState.error" class="error">
    {{ $fetchState.error.message }}
  </div>
  <div v-else class="items-and-category-container">
    <item-filter :categories="categories" @onFilter="filterProducts" />
    <span class="items-container">
      <div class="items-list">
        <item-card
          v-for="(product, i) in products"
          :key="'prod_' + i"
          :product="product"
        />
      </div>
    </span>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue'
import ItemFilter from './ItemFilter.vue'

export default {
  name: 'ItemList',
  components: {
    ItemCard,
    ItemFilter,
  },
  data() {
    return {
      products: [],
      categories: [],
      filterCategory: null,
    }
  },
  async fetch() {
    const apiCalls = []
    if (this.filterCategory === 'all') {
      apiCalls.push(this.$axios.get('/products'))
    } else if (this.filterCategory) {
      apiCalls.push(this.$axios.get(`products/category/${this.filterCategory}`))
    } else {
      apiCalls.push(this.$axios.get('/products'))
      apiCalls.push(this.$axios.get('/products/categories'))
    }
    try {
      const response = await Promise.all(apiCalls)
      const productsResponse = response[0]
      const categoriessResponse = response[1]

      this.products = productsResponse.data
      if (categoriessResponse?.data) {
        this.categories = categoriessResponse.data
      }
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  },
  methods: {
    filterProducts(category) {
      this.filterCategory = category
      this.$fetch()
    },
  },
}
</script>

<style lang="scss">
.items-and-category-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .items-container {
    @include flexDirectionJustify($justify-content: center);
    overflow-x: auto;
    padding: 24px 0px 42px;
    .items-list {
      @include flexDirectionJustify($justify-content: center);
      gap: 12px;
      flex-wrap: wrap;
    }
    @include mobile-width {
      padding: 10px 0;
    }
  }
}
</style>
