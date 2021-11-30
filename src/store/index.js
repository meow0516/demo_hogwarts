import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterList: [],
  },
  mutations: {
    saveList(state, characterItems){
      characterItems.forEach(characterItem => {
        state.characterList.push(characterItem)
      });
    }
  },
  actions: {
    getList({commit}){
      this._vm.axios
      .get('https://mocki.io/v1/e95fc11c-63ea-4f85-8d8a-e1bba5bb2746')
      .then((response)=>{
        let characterItems = response.data
        commit('saveList',characterItems)
      })
    },
  },
  modules: {},
});
