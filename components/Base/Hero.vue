<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to Voxel</h1>
      <p class="hero-description">Discover our wide range of products</p>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  @include flexDirectionJustify(
    $direction: column,
    $justify-content: center,
    $align-items: center
  );

  background-image: url('~/assets/images/hero.png');
  background-size: cover;
  background-position: center;
  height: 380px;
  gap: 10px;
  height: 380px;
  .hero-content {
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    .hero-title {
      @include color($color: $eerie-black-color);
      @include applyFont($size: 34px, $weight: 600, $height: 41px);
      margin-bottom: 1rem;
    }

    .hero-description {
      @include color($color: $eerie-black-color, $opacity: 0.5);
      @include applyFont($size: 16px, $weight: 500, $height: 20px);
      margin-bottom: 2rem;
    }
  }
}
</style>
