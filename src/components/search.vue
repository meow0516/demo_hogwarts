<template>
  <div class="search-bar">
    <div v-if="dataType=='text'">
      <input type="text">
    </div>
    <div v-if="dataType=='radio'">
      <input type="radio" id="Male" value="M" v-model="gender">
      <label for="Male">Male</label>

      <input type="radio" id="Female" value="F" v-model="gender">
      <label for="Female">Female</label>
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
    gender: '',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
