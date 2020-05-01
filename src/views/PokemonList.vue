<template>
  <div>
    <v-layout row mt-2>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list one-line>
            <template>
              <PokemonDetail
                v-for="(pokemon, index) in getPokemons"
                :pokemon="pokemon"
                :index="index + 1"
                :key="pokemon.name"
              />
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 text-xs-center>
        <v-btn @click="loadMore()">Show More</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PokemonDetail from "./PokemonDetail";

export default {
  components: {
    PokemonDetail
  },
  data(){
    return {
    }
  },
  computed: {
    getPokemons() {
      return this.$store.getters.getPokemons;
    }
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMore");
    }
  },
  mounted() {}
};
</script>

<style>
</style>
