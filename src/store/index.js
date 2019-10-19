import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:5
  },
  mutations:{
    add(state, num) {
      state.count += num
    },
    desc(state) {
      state.count--
    }
  },
  actions: {
    add(context) {
      setTimeout(() => {
        context.commit('add',2)
      }, 1000);
    }
  }
})
export default store