import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isHard: true,
        mensaje: null,
        msjBotonRestart: null,
        newColors: false
    },
    actions: {
        setHard({commit}, hard) {
            try {
                commit('setearHard', hard)
            }
            catch(error) {
                console.log(error)
            }
        },
        setMensaje({commit}, mensaje) {
            try {
                commit('setearMensaje', mensaje)
            } catch(error) {
                console.log(error)
            }
        },
        setMsjBotonRestart({commit}, mensaje) {
            try {
                commit('setearMsjBotonRestart', mensaje)
            } catch(error) {
                console.log(error)
            }
        },
        setNewColors({commit}, newColors) {
            try {
                commit('setearNewColors', newColors)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        setearHard(state, hard) {
            state.isHard = hard
        },
        setearMensaje(state, mensaje) {
            state.mensaje = mensaje;
        },
        setearMsjBotonRestart(state, mensaje){
            state.msjBotonRestart = mensaje
        },
        setearNewColors(state, colors) {
            state.newColors = colors
        }
    }

})