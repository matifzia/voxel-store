<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="isOpen = !isOpen">
      {{ selectedOption }}
      <img
        src="@/assets/images/chevron.svg"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    <ul v-show="isOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    selectOption(option) {
      this.isOpen = false
      this.$emit('onSelect', option)
    },
  },
}
</script>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
  text-transform: capitalize;
  width: 320px;
  text-transform: capitalize;
  width: 320px;
  height: 64px;
  margin-top: 20px;

  .dropdown-toggle {
    @include flexDirectionJustify(
      $align-items: center,
      $justify-content: space-between
    );
    @include backgroundColor($color: $white-color);
    @include applyFont($size: 14px, $weight: 600, $height: 17px);
    padding: 10px;
    cursor: pointer;
    width: 100%;
    border: 1px solid rgba(26, 26, 26, 0.1);
    border-radius: 8px;
    text-transform: capitalize;

    .rotate-180 {
      rotate: 180deg;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0px;
    list-style-type: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    width: 100%;
    z-index: 100;
    li {
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
}
</style>
