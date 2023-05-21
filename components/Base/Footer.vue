<template>
  <footer class="footer">
    <div>
      <span class="project-name-first-part">Voxel</span>
      <span class="project-name-second-part">Store</span>
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

  div {
    .project-name-first-part {
      font-weight: bold;
    }
    .project-name-second-part {
      opacity: 50%;
    }
  }
}
</style>
