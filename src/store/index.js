import Vue from 'vue'
import Vuex from 'vuex'
import baberrage from './modules/baberrage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    baberrage
  }
})