import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'test1',
            component: config.test1,
            meta: {
                title: 'test1'
            }
        },
        {
            path: '/test2',
            name: 'test2',
            component: config.test2,
            meta: {
                title: 'test2'
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
router.beforeEach((to, from, next) => {
    let {title, auth} = to.meta;
    next();
})

export default router;
