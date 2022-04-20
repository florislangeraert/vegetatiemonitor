import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)

export const state = {
  layers: [],
  imagePeriod: ['01-01-2019', '01-02-2019'],
  overallTimePeriod: ['01-01-1984', moment().format('DD-MM-YYYY')],
  SERVER_URL: config.SERVER_URL || process.env.SERVER_URL
}

export const mutations = {
  setMapLayers(state, layers) {
    state.layers = layers
  },
  setImagePeriod(state, imagePeriod) {
    state.imagePeriod = imagePeriod
  },
  setOverallTimePeriod(state, overallTimePeriod) {
    state.overallTimePeriod = overallTimePeriod
  },
  addMapLayers(state, layer) {
    state.layers.push(layer)
  }
}

export const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
