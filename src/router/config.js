//lazy load
const config = {
    test1: () => require('pages/test1/index.vue'),
    test2: () => require('pages/test2/index.vue')
};

console.info(config.test1)
export default config;