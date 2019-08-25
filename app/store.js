import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appName: '',
        SStorage: null,
        todos: [
            {
                id: 1,
                content: 'First content'
            },
            {
                id: 2,
                content: 'Second content',
            }
        ]
    },
    getters: {
        appName(state) {
            return state.appName
        },
        SStorage(state) {
            return state.SStorage
        },
        todos(state) {
            return state.todos;
        }
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