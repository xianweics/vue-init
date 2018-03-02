import Vue from 'vue'
import utils from './utils';

Object.keys(utils).forEach(key => {
    Vue.filter(key, utils[key])
});
