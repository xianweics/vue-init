import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import state from './state';
import mutations from './mutations';
import getters from './getters';
const vuex = new Vuex.Store({
    state,
    mutations,
    getters
});
export default vuex;