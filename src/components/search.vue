<template>
  <div class="search-bar">
    <div v-if="dataType=='text'">
      <input type="text">
    </div>
    <div v-if="dataType=='radio'">
      <input type="radio">
    </div>
    <div v-if="dataType=='selector'">
      <select name="" id="">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
  <button class="search-btn">Search</button>
  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    dataType: String,
  },
  data: ()=>({
    dataType: '',
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
