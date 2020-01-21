import Vue from 'vue'
import Vuex from 'vuex'
import * as Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    country: [],
    category: [],
    loading: false,
    error: null
  },
  mutations: {
    setLoadedNews(state, payload) {
      state.news = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadNews ({ commit}) {
      commit('setLoading', true)
      Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f7906f3b40f64b829a5fb30922fc2aad')
      .then((response) => {
        const news = []
        const obj = response.data.articles
        for(let key in obj) {
          news.push({
            id: key,
            author: obj[key].author,
            title: obj[key].title,
            content: obj[key].content,
            description: obj[key].description,
            url: obj[key].url,
            imgURL: obj[key].urlToImage,
          })
        }
        commit('setLoadedNews', news)
        commit('setLoading', false)
      })
      .catch(
        (error) => {
          commit('setError', error)
          commit('setLoading', false)
        }
      )
    }
  },
  getters: {
    loadedNews(state) {
      return state.news
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  modules: {
  }
})
