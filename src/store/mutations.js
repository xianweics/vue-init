// import utils from 'assets/js/utils';

const mutations = {
    // Set token
    setToken(state, token) {
        state.token = token;
    },

    //Remove token
    removeToken(state) {
        state.token = '';
    },
};
export default mutations;