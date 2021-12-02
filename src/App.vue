<template>
  <div id="app" :class="themeColor">
    <div class="theme-select">Choose theme color
      <input type="radio" id="theme_default" value="defaultTheme" v-model="themeColor">
      <label for="theme_default">Default</label>

      <input type="radio" id="theme_red" value="redTheme" v-model="themeColor">
      <label for="theme_red">Red</label>

      <input type="radio" id="theme_yellow" value="yellowTheme" v-model="themeColor">
      <label for="theme_yellow">Yellow</label>

      <input type="radio" id="theme_blue" value="blueTheme" v-model="themeColor">
      <label for="theme_blue">Blue</label>

      <input type="radio" id="theme_green" value="greenTheme" v-model="themeColor">
      <label for="theme_green">Green</label>
    </div>
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link> 
      <router-link to='/Gryffindor'>Gryffindor</router-link>
      <router-link to='/Hufflepuff'>Hufflepuff</router-link>
      <router-link to='/Ravenclaw'>Ravenclaw</router-link>
      <router-link to='/Slytherin'>Slytherin</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('getList')
    this.themeColor = this.$cookies.get('themeColor') || 'defaultTheme'
  },
  data: ()=>({
    themeColor:'defaultTheme',
  }),
  watch:{
    themeColor: function(){
      this.$cookies.set('themeColor',this.themeColor)
    }
  }
}
</script>

<style lang="scss">
body{
  padding: 0;
  margin: 0;  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  padding: 30px;
}

.defaultTheme{
  background-color: #FCF5E5;
}
.redTheme{
  background-color: #F0C8C8;
}
.yellowTheme{
  background-color: #FAF0BE;
}
.blueTheme{
  background-color: #C8C8F0;
}
.greenTheme{
  background-color: #D2F0C8;
}
#nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

label{
  padding: 5px 10px;
}

</style>
