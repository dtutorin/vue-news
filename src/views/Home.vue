<template>
  <div class="container">
    <Header />
    <Selectors />
    <NewsList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NewsList from '@/components/NewsList.vue'
import Selectors from '@/components/Selectors.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Selectors,
    NewsList
  }
}
</script>
