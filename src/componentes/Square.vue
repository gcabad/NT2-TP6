<template>

  <section class="src-componentes-square">
    <div class="square" :style="{backgroundColor: colorIn, display: 'block'}" @click="clickeado()"> </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-square',
    props: ['colorIn', 'squareNumber'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
     clickeado(){
      this.$emit('color-out', {color: this.colorIn, numero: this.squareNumber} )
     }
    },
    computed: {

    },
}


</script>

<style scoped lang="css">

  .square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }

</style>
