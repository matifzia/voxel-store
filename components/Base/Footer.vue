<template>
  <footer class="footer">
    <div class="title">
      <span class="project-name-first-part">Voxel</span>
      <span class="title-second-part">Store</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    handleCartClick() {
      // Handle cart click event
    },
  },
}
</script>

<style scoped lang="scss">
.footer {
  @include backgroundColor($color: $white-color);
  @include flexDirectionJustify($justify-content: center, $align-items: center);

  height: 64px;
  position: static;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(26, 26, 26, 0.1);

  .title {
    @include applyFont($size: 18px, $weight: 600, $height: 22px);
    @include color();
    .title-second-part {
      opacity: 0.5;
    }
  }
}
</style>
