<template>
  <div class="columns is-multiline is-1">
    <div class="column is-variable is-12-mobile is-6-tablet is-4-desktop is-3-widescreen" v-for="item in news" :key="item.id">
          <article class="tile is-child box">
            <figure class="image is-4by3">
              <img :src="item.imgURL" @error="imgUrlAlt" ref="img" :alt="item.title">
            </figure>
            <h2 class="title has-text-left">
              <a :title="item.title" :href="item.url" target="_blank">{{item.title}}</a>
            </h2>
            <p class="subtitle has-text-left">{{item.author}}</p>
            <div class="content has-text-left">
              <p>{{item.description}}</p>
            </div>
            <div class="level">
              <div class="level-left">
              </div>
              <div class="level-right">
                <div class="level-item">
                  <a class="button is-text" :title="item.title" :href="item.url" target="_blank">read more...</a>
                </div>  
              </div>  
            </div>
          </article>
    </div>
    <b-loading :active.sync="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data (){
    return {
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/No_image.jpg',
    }
  },
  computed: {
    news() {
      return this.$store.getters.loadedNews;
    },
    isLoading() {
      return this.$store.getters.loading;
    }
  },
  mounted() {
    this.$store.dispatch('loadNews');
  },
  methods: {
    imgUrlAlt(e) {
      e.target.src = this.img
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: #222222;
}
h2 {
  &.title {
    font-size: 1.6rem;
  }
}
.image {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
