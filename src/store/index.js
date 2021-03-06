import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import counter from './modules/counter'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    counter
  }
})
