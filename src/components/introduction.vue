<template>
  <div class="introduction">
    <div>
      <input type="radio" id="text" value="text" v-model="dataType">
      <label for="text">以姓名搜尋</label>

      <input type="radio" id="radio" value="radio" v-model="dataType">
      <label for="radio">以性別搜尋</label>

      <input type="radio" id="selector" value="selector" v-model="dataType">
      <label for="selector">以學院搜尋</label>
    </div>

    <search :data-type="dataType"/>
    <searchresult/>
  </div>
</template>

<script>
import search from '@/components/search.vue';
import searchresult from '@/components/searchresult.vue'
export default {
  name: "introduction",
  components:{
    search,
    searchresult
  },
  data: ()=>({
    dataType: 'text',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
