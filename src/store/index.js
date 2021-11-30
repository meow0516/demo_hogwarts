import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterList: [],
    searchResult:[],
  },
  mutations: {
    saveList(state, characterItems){
      characterItems.forEach(characterItem => {
        state.characterList.push(characterItem)
      });
    },
    searchText(state, searchInput){ 
      state.searchResult = state.characterList.filter(function(characterItem){
        return characterItem.name == searchInput
      }) 
    },
    searchRadio(state,searchInput){
      state.searchResult = state.characterList.filter(function(characterItem){
        return characterItem.gender == searchInput
      }) 
    },
    searchSelector(state, searchInput){
      state.searchResult = state.characterList.filter(function(characterItem){
        return characterItem.house == searchInput
      })      
    },

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
