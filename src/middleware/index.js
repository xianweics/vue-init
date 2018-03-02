import Vue from 'vue'
import store from 'store';
import axios from 'axios';

Vue.prototype.$http = axios;

axios.defaults.baseURL = 'https://www.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
const middleware = function () {
    axios.interceptors.request.use(config => {
        config.headers['Authorization'] = store.getters.getToken;
        console.info(config)
        return config;
    }, e => {
        return Promise.reject(e);
    });

    axios.interceptors.response.use(res => {
        let {code, message: msg} = res.data;
        console.info(code, msg);
        return res;
    }, (e) => {
        return Promise.reject(e);
    });
}
export default middleware;

