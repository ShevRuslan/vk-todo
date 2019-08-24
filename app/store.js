import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appName: '',
        SStorage: null,
    },
    getters: {
        appName(state) {
            return state.appName
        },
        SStorage(state) {
            return state.SStorage
        },

    },
    // commit
    mutations: {
        setAppName(state, appName) {
            state.appName = appName
        },
        setSStorage(state, SStorage) {
            state.SStorage = SStorage
        },

    },
    // dispatch
    actions: {

    }
})