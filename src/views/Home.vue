<template>
  <div class="home">
    <div class="logo">
      <img alt="HogwartsLogo" src="../assets/images/Hogwarts-Logo-PNG-Image-Free-Download.png" />
    </div>
    <introduction/>
  </div>
</template>

<script>
// @ is an alias to /src
import introduction from '@/components/introduction.vue';

export default {
  name: "Home",
  components: {
    introduction,
  },
};
</script>

<style lang="scss" scoped>
.logo img{
  width: 30%;
}
</style>