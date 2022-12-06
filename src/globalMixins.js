import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        cambiarAHard() {
            this.$store.dispatch('setHard', true)
        },
        cambiarAEasy() {
            this.$store.dispatch('setHard', false)
        },
        cambiarMensaje(mensaje) {
            this.$store.dispatch('setMensaje', mensaje)
        },
        cambiarMsjBotonRestart(mensaje) {
            this.$store.dispatch('setMsjBotonRestart', mensaje)
        },
        cambiarColores(restart) {
            this.$store.dispatch('setNewColors', restart)
        }
    },
    computed: {
        mostrarIsHard() {
            let isHard = this.$store.state.isHard
            return isHard
        },
        mostrarMensaje() {
            return this.$store.state.mensaje
        },
        mostrarMsjBotonRestart() {
            return this.$store.state.msjBotonRestart
        },
        mostrarNewColors() {
            return this.$store.state.newColors
        }
    }    
}

Vue.mixin(miMixinGlobal)