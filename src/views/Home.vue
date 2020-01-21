<template>
  <div class="container">
    <Header />
    <Selectors />
    <NewsList />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NewsList from '@/components/NewsList.vue'
import Selectors from '@/components/Selectors.vue'

export default {
  name: 'home',
  components: {
    Header,
    Selectors,
    NewsList
  }
}
</script>
