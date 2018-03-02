//lazy load
const config = {
    test1: () => import('pages/test1/index.vue'),
    test2: () => import('pages/test2/index.vue')
};

export default config;