<template>
  <div class="search-bar">
    <ul  v-if="$store.state.searchResult.length > 0">
      <li v-for="(item,index) in $store.state.searchResult" :key="index">
        {{index+1}}. {{item.name}} is a {{ item.gender == 'M'? 'male':'female' }} student of {{ item.house }}
      </li>
    </ul>
    <ul v-else>
      Please input correct name!
    </ul>
  </div>
</template>

<script>
export default {
  name: "searchresult",
  props: {
    
  },
  data: ()=>({
    
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul, li{
  list-style-type: none;
  margin: 10px 0;
  padding: 0;
}
</style>
