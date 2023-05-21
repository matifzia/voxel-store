<template>
  <div class="filter-container">
    <button
      class="category"
      :class="{ active: selectedCategory == 'all' }"
      @click="onSelectCategory('all')"
    >
      All
    </button>
    <button
      v-for="(category, i) in categories"
      :key="'ctg_' + i"
      class="category"
      :class="{ active: selectedCategory == category }"
      @click="onSelectCategory(category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ItemFilter',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: 'all',
    }
  },
  methods: {
    onSelectCategory(category) {
      this.selectedCategory = category
      this.$emit('onFilter', category)
    },
  },
}
</script>
<style lang="scss" scoped>
.filter-container {
  @include flexDirectionJustify($align-items: center);
  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  padding: 0.5rem 7rem;
  .category {
    @include color($color: $eerie-black-color, $opacity: 0.5);
    @include backgroundColor($color: $white-color);
    @include flexDirectionJustify(
      $direction: column,
      $justify-content: space-between,
      $align-items: flex-start
    );
    @include applyFont($size: 14px, $weight: 600);

    gap: 12px;
    border-radius: 4px 4px 0px 0px;
    padding: 0.25rem 1rem;
    border: none;
    cursor: pointer;
    &.active {
      @include color($color: $eerie-black-color);
      border-bottom: $eerie-black-color solid;
    }
  }
}
</style>
