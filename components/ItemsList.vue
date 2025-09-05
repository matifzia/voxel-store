<template>
  <div v-if="error" class="error">
    {{ error.message }}
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

<script setup>
import ItemCard from './ItemCard.vue'
import ItemFilter from './ItemFilter.vue'

const { $api } = useNuxtApp()

const filterCategory = ref(null)
const products = ref([])
const categories = ref([])
const error = ref(null)

async function loadProducts() {
  debugger
  try {
    const apiCalls = []
    if (filterCategory.value === 'all') {
      apiCalls.push($api('/products'))
    } else if (filterCategory.value) {
      apiCalls.push($api(`/products/category/${filterCategory.value}`))
    } else {
      apiCalls.push($api('/products'))
      apiCalls.push($api('/products/categories'))
    }

    const response = await Promise.all(apiCalls)
    products.value = response[0].data

    if (response[1]?.data) {
      categories.value = response[1].data
    }
  } catch (err) {
    error.value = err
  }
}

function filterProducts(category) {
  filterCategory.value = category
  loadProducts()
}

onMounted(() => {
  filterProducts('all')
})
</script>
