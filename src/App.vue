<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Rawl</span>
        <span class="font-weight-light">Pokedex</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">
        <span class="mr-2">Home Page</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import PokemonList from "./views/PokemonList";

export default {
  name: "App",
  components: {
    PokemonList
  },
  data() {
    return {
      //
    };
  }
};
</script>
