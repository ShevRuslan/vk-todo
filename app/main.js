import Vue from 'vue'
import App from './App.vue'
import store from './store' 

Vue.config.productionTip = false

// Имя приложения
const APP_NAME = 'appVue'

// С помощью глобального миксина добавляем APP_NAME в data всех компонентов
Vue.mixin({
    data() {
        return {
            APP_NAME
        }
    }
})



// Создаем блок, в который будет монтироваться приложение
let appElem = document.createElement('div')
    // id корневого элемента приложения будет соответствовать имени приложения
appElem.id = APP_NAME;

let parentElement = document.querySelector('#side_bar_inner nav');
if (parentElement) {
    parentElement.after(appElem);
}
// Сохраняем экземпляр приложения в глобальную переменную под именем приложения
window[APP_NAME] = new Vue({
    store,
    created() {
        // Заносим имя приложения в store
        this.$store.commit('setAppName', APP_NAME)
    },
    render: h => h(App)
}).$mount(`#${APP_NAME}`)