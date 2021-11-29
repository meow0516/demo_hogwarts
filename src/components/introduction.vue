<template>
  <div class="introduction">
    <input type="radio" id="text" value="text" v-model="dataType">
    <label for="text">text</label>

    <input type="text">
    <input type="radio">
    <select name="" id=""></select>
  </div>
</template>

<script>
export default {
  name: "introduction",
  props: {
    msg: String,
  },
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
