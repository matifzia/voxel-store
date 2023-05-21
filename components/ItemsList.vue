<template>
  <div v-if="$fetchState.error" class="error">
    {{ $fetchState.error.message }}
  </div>
  <div v-else>
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
.items-container {
  @include flexDirectionJustify($justify-content: center);
  margin-top: 12px;
  overflow-x: auto;
  .items-list {
    @include flexDirectionJustify($justify-content: center);
    gap: 12px;
    flex-wrap: wrap;
  }
}
</style>
