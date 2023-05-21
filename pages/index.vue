<template>
  <span>
    <cart />
    <item-list />
  </span>
</template>

<script>
import ItemList from '@/components/ItemsList.vue'
import Cart from '@/components/Cart.vue'
export default {
  name: 'IndexPage',
  components: {
    ItemList,
    Cart,
  },
}
</script>
