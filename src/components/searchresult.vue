<template>
  <div class="search-bar">
    <ul>
      <li v-for="(item,index) in $store.state.searchResult" :key="index">
        {{index+1}}. {{item.name}} is a {{ item.gender == 'M'? 'male':'female' }} student of {{ item.house }}
      </li>
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
}
</style>
