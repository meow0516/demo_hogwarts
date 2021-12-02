<template>
  <div class="container">
    <div class="house-intro">
      <div class="house-icon" :style="{backgroundImage:path}"></div>
      <div class="house-description">
        <p>
          {{ p1 }}
        </p>
        <p>
          {{ p2 }}
        </p>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "houseIntro",
  props: {
    houseInfo: String,
  },
  data: ()=>({
  
    Gryffindor: {
      p1: "Gryffindor was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, and determination, to be sorted into his house. The emblematic animal was a lion, and its colours were scarlet and gold. Sir Nicholas de Mimsy-Porpington, also known as 'Nearly Headless Nick', was the House ghost.",
      p2: "Gryffindor corresponded roughly to the element of fire, and it was for this reason that the colours scarlet and gold were chosen to represent the house. The colour of fire corresponded to that of a lion as well, with scarlet representing the mane and tail and gold representing the coat.",
      path: "url("+require('../assets/images/hogwarts-gryffindor.png')+")"
    },
    Hufflepuff: {
      p1: "Hufflepuff was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal was a badger, and yellow and black were its house colours. The Head of Hufflepuff was Pomona Sprout, and the Fat Friar was the House's patron ghost.",
      p2: "Hufflepuff corresponded roughly to the element of earth, and it was for that reason that the House colours were chosen: yellow represented wheat, while black was emblematic of soil. The Hufflepuff point hourglass contained yellow diamonds. Students sorted into Hufflepuff often demonstrated exceptional abilities in Herbology, owing to their correspondence to earth.",
      path: "url("+require('../assets/images/hogwarts-hufflepuff.png')+")"
    },
    Ravenclaw: {
      p1: "Ravenclaw was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours. The Head of Ravenclaw was Filius Flitwick, and the House ghost was the Grey Lady, real name Helena Ravenclaw, daughter of Rowena.",
      p2: "Ravenclaw corresponded roughly to the element of air, and it was for that reason that the House colours were chosen; blue and bronze represented the sky and eagle feathers respectively, both having much to do with air. The Ravenclaw points hourglass contained blue sapphires.",
      path: "url("+require('../assets/images/hogwarts-ravenclaw.png')+")"
    },
    Slytherin: {
      p1: "Slytherin was one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics included cunning, resourcefulness, leadership, and ambition. Many Slytherin students tended to clique together, often acquiring leaders, which further exemplified Slytherin's ambitious qualities. Examples of these included Draco Malfoy's gang, Merula Snyde's gang, Pansy Parkinson's gang and the Death Eaters.",
      p2: "Slytherin corresponded roughly with the element of water due to serpents being commonly associated with the sea and lochs in western European mythology, as well as serpents being physically fluid and flexible animals. Similarly, in Celtic mythology, water is seen as a portal to another world, leading some to speculate that the element was chosen to symbolise many Slytherins' hope for a pure-blood only community. The colours also corresponded with waters around lakes and lochs often being green, and silver being often associated with grey rainwater.",
      path: "url("+require('../assets/images/hogwarts-slytherin.png')+")"
    }
    
  }),

  computed:{
    p1(){
      switch(this.houseInfo){
        case 'Gryffindor':
          return this.Gryffindor.p1;
        case 'Hufflepuff':
          return this.Hufflepuff.p1;
        case 'Ravenclaw':
          return this.Ravenclaw.p1;
        case 'Slytherin':
          return this.Slytherin.p1;
        default:
          return '';
      }
    },
    p2(){
      switch(this.houseInfo){
        case 'Gryffindor':
          return this.Gryffindor.p2;
        case 'Hufflepuff':
          return this.Hufflepuff.p2;
        case 'Ravenclaw':
          return this.Ravenclaw.p2;
        case 'Slytherin':
          return this.Slytherin.p2;
        default:
          return '';
      }
    },
    path(){
      switch(this.houseInfo){
        case 'Gryffindor':
          return this.Gryffindor.path;
        case 'Hufflepuff':
          return this.Hufflepuff.path;
        case 'Ravenclaw':
          return this.Ravenclaw.path;
        case 'Slytherin':
          return this.Slytherin.path;
        default:
          return '';
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container{
  display: flex;
  justify-content: center;
}
  .house-intro{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  .house-icon{
    width: 30%;
    height: 300px;
  }
  .house-icon{
    // background-image: url("../assets/images/hogwarts-gryffindor.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .Gryffindor{
    background-image: url("../assets/images/hogwarts-gryffindor.png");
  }
  .house-description{
    width: 70%;
  }
}
</style>
