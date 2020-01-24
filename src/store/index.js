import Vue from 'vue'
import Vuex from 'vuex'
import * as Axios from 'axios';
import {countries} from './common/countries';
import {categories} from './common/categories';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    selectsData: {
      countries,
      categories
    },
    baseURL: 'https://newsapi.org/v2/top-headlines',
    country: 'us',
    category: 'general',
    apiKey: 'f7906f3b40f64b829a5fb30922fc2aad',
    loading: false,
    error: null
  },
  mutations: {
    setLoadedNews(state, payload) {
      state.news = payload
    },
    setCategory(state, payload) {
      state.category = payload
    },
    setCountry(state, payload) {
      state.country = payload
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
    loadNews ({ state, commit }) {
      commit('setLoading', true)
      Axios({
        method: 'get',
        baseURL: state.baseURL,
        params: {
          country: state.country,
          category: state.category,
          apiKey: state.apiKey
        },
      })
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
    },
    setNewCountry({ commit }, payload){
      const newCountry = payload
      commit('setCountry', newCountry)
    },
    setNewCategory({ commit }, payload){
      const newCategory = payload
      commit('setCategory', newCategory)
    }
  },
  getters: {
    loadedNews(state) {
      return state.news
    },
    getCountries(state) {
      return state.selectsData.countries
    },
    getCategories(state) {
      return state.selectsData.categories
    },
    curentCountry(state) {
      return state.country
    },
    curentCategory(state) {
      return state.category
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
