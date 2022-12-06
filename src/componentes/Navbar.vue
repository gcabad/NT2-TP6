<template>

  <section class="src-componentes-navbar">
    <div id="navigator">
      <button id="reset" @click="cambiarColores(true)"> {{ mostrarMsjBotonRestart }}</button>
      <span id="message" v-bind:style="{ color:  (mostrarMensaje != '') ? '#000000' : '#ffffff' }"> {{ mostrarMensaje }} </span>

      <button id="easy" v-bind:class="{ selected: !mostrarIsHard }" @click="cambiarAEasy()">easy</button>
      <button id="hard" v-bind:class="{ selected: mostrarIsHard }" @click="cambiarAHard()">hard</button>
    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    components: {

    },
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  #navigator {

    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;

  }

  #message {
    color: #ffffff;
    display: inline-block;
    width: 20%;
  }

  #messageBox {
    
  }

  .selected {
    background-color: steelblue;
    color: white;
  }

  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
</style>
