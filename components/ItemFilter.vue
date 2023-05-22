<template>
  <dropdown
    v-if="isMobileView"
    :options="categoriesWithAll"
    :selected-option="selectedCategory"
    @onSelect="onSelectCategory"
  />
  <div v-else class="filter-container">
    <button
      v-for="(category, i) in categoriesWithAll"
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
import Dropdown from './Base/Dropdown.vue'
export default {
  name: 'ItemFilter',
  components: {
    Dropdown,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: 'all',
      viewportWidth: 1600,
    }
  },
  computed: {
    categoriesWithAll() {
      return ['all', ...this.categories]
    },
    isMobileView() {
      return this.viewportWidth <= 600
    },
  },
  mounted() {
    this.updateViewportWidth()
    window.addEventListener('resize', this.updateViewportWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.updateViewportWidth)
  },
  methods: {
    onSelectCategory(category) {
      this.selectedCategory = category
      this.$emit('onFilter', category)
    },
    updateViewportWidth() {
      this.viewportWidth =
        window.innerWidth || document.documentElement.clientWidth
    },
  },
}
</script>
<style lang="scss" scoped>
.filter-container {
  @include flexDirectionJustify($align-items: center);
  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  padding: 0 7rem;
  height: 64px;
  .category {
    @include color($color: $eerie-black-color, $opacity: 0.5);
    @include backgroundColor($color: $white-color);
    @include flexDirectionJustify(
      $direction: column,
      $justify-content: space-between,
      $align-items: flex-start
    );
    @include applyFont($size: 14px, $weight: 600, $height: 17px);
    text-transform: capitalize;

    gap: 12px;
    border-radius: 4px 4px 0px 0px;
    margin: 0.2rem;
    border: none;
    cursor: pointer;
    padding-bottom: 3px;
    &.active {
      opacity: 1;
      border-bottom: $eerie-black-color solid 3px;
    }
  }
}
</style>
