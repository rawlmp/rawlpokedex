<template>
  <div>
    <v-list-tile avatar :to="'/detail/' + index">
      <v-list-tile-avatar>
        <span>#{{index}}</span>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>{{pokemon.name.toUpperCase()}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: ["pokemon", "index"]
};
</script>

<style>
</style>

