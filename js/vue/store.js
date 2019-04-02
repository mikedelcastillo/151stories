const Vue = require('vue').default;
const Vuex = require('vuex').default;
const createPersistedState = require('vuex-persistedstate').default;

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    // createPersistedState({
    //   key: "mike-web",
    // }),
  ],
  state: {
    ...require('@/core/data'),
  },
  mutations: {
    // doSomething(state) {
    //
    // },
  },
  actions: {
    // doSomething({state,commit}) {
    //
    // },
  },
  getters: {

  },
  modules: {

  }
});

module.exports = store;
