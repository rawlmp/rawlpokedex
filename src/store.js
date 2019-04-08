import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: null,
    pokemon: null,
    next: null
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setPokemon(state, payload) {
      state.pokemon = payload;
    },
    addPokemons(state, payload) {
      state.pokemons = state.pokemons.concat(payload);
    },
    setLimits(state, payload) {
      state.next = payload;
    }
  },
  actions: {
    getData({ commit, state }) {
      fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => res.json())
        .then(data => {
          commit("setPokemons", data.results);
          commit("setLimits", data.next);
        });
    },
    getOnePokemon({ commit, state }, payload) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + payload)
        .then(res => res.json())
        .then(data => commit("setPokemon", data));
    },
    loadMore({ commit, state }) {
      fetch(state.next)
        .then(res => res.json())
        .then(data => {
          commit("addPokemons", data.results);
          commit("setLimits", data.next);
        });
    }
  },
  getters: {
    getPokemons(state) {
      return state.pokemons;
    },
    getPokemon(state) {
      return state.pokemon;
    },
    getLimits(state) {
      return state.limits;
    }
  }
});
