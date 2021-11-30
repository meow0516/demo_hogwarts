<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="HogwartsLogo" src="../assets/images/Hogwarts-Logo-PNG-Image-Free-Download.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <introduction/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import introduction from '@/components/introduction.vue';

export default {
  name: "Home",
  components: {
    // HelloWorld,
    introduction,
  },
};
</script>
