import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      username: "",
      token: ""
   },
   getters: {},
   mutations: {
      setToken(state, payload) {
         state.token = payload // 存 token
      }
   },
   actions: {},
   modules: {},
});