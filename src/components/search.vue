<template>
  <div class="search-bar">
    <div v-if="dataType=='text'">
      <input type="text" v-model="searchInput">
    </div>
    <div v-if="dataType=='radio'">
      <input type="radio" id="Male" value="M"  v-model="searchInput">
      <label for="Male">Male</label>

      <input type="radio" id="Female" value="F"  v-model="searchInput">
      <label for="Female">Female</label>
    </div>
    <div v-if="dataType=='selector'">
      <select name="" id="" v-model="searchInput">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
    <button class="search-btn" @click="searchItem">Search</button>
  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    dataType: String,
  },
  data: ()=>({
    searchInput: '',
  }),
  methods: {
    searchItem(){
      if( this.dataType === 'text'){
        this.$store.commit('searchText',this.searchInput)
      }
      else if( this.dataType === 'radio'){
        this.$store.commit('searchRadio',this.searchInput)
      }
      else{
        this.$store.commit('searchSelector',this.searchInput)
      }
    }
  },
  watch:{
    dataType: function(){
      this.searchInput = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
