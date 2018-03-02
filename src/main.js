import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store';

import './assets/js/index.js';  //hook utils -> vue.$utils
import 'middleware';    // hook axios -> vue.$http
import 'filters';

// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
