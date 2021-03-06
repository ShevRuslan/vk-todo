import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appName: '',
        SStorage: null,
        open: false,
        todos: [
            {
                id: 1,
                content: 'First content',
                important: false
            },
            {
                id: 2,
                content: 'Second content',
                important: true
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
        },
        isOpen(state) {
            return state.open;
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
        open(state) {
            state.open = !state.open;
        }
    },
    // dispatch
    actions: {

    }
})