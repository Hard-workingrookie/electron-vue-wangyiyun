import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    paneName:'个性推荐'
  },
  mutations:{
    setPaneName:(state, data) => {
      console.log('setPaneName',state.paneName)
      state.paneName = data
    }
  },
  getters: {
    getPaneName: (state) => {
      return state.paneName
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
