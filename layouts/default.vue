<template>
  <main>
    <base-header />
    <hero />
    <NuxtPage />
    <base-footer />
  </main>
</template>

<script>
import Header from '~/components/Base/Header.vue'
import Footer from '~/components/Base/Footer.vue'
import Hero from '~/components/Base/Hero.vue'

export default {
  name: 'IndexPage',
  components: {
    'base-header': Header,
    'base-footer': Footer,
    Hero,
  }
}
</script>
