<template>
  <!-- Key attribute in the main component force the update of the whole component on change it -->

  <div :key="id" v-if="pokemonInfo != null">
    <v-layout
      row
      wrap
      v-touch="{
      left: () => swipe('L'),
      right: () => swipe('R')
    }"
    >
      <v-flex xs12 sm10 offset-sm1 mt-3 mb-5>
        <v-card>
          <v-layout row wrap>
            <v-flex xs12 sm6 pa-3 justify-center align-center>
              <v-img
                contain
                class="black--text"
                height="75vh"
                :src="'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png'"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular
                      indeterminate
                      :size="100"
                      :width="3"
                      :class="mainColor"
                    >loading</v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </v-flex>

            <v-flex xs12 sm6 pa-3>
              <v-card>
                <v-card-title primary-title>
                  <div class="title font-weight-bold mr-2">{{pokemonInfo.name.toUpperCase()}}</div>
                  <div>#{{id}}</div>
                </v-card-title>
                <v-card-title>
                  <div class="text-xs-center">
                    <v-chip v-for="item in pokemonInfo.types" :key="item.name">
                      <v-avatar
                        :class="item.type.name"
                        class="type"
                      >{{item.type.name[0].toUpperCase()}}</v-avatar>
                      {{item.type.name}}
                    </v-chip>
                  </div>
                </v-card-title>
              </v-card>
              <v-card>
                <v-card-title>
                  <div>
                    <h3>Abilities:</h3>
                  </div>
                </v-card-title>
                <v-card-title>
                  <div>
                    <v-chip
                      v-for="item in pokemonInfo.abilities"
                      :key="item.ability.name"
                    >{{item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}}</v-chip>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-bottom-nav fixed :value="true" color="white">
        <v-btn v-if="id > 1" color="blue" :to="'/detail/' + (Number(id) - 1)">
          <span>Previous</span>
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-btn flat color="teal">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn v-if="id < 807" color="blue" :to="'/detail/' + (Number(id) + 1)">
          <span>Next</span>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-layout>
  </div>
  <div v-else>
    <v-layout mt-5>
      <v-flex xs8 offset-xs2>
        <v-card>
          <v-card-title>No pokemons to show</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { request } from "http";
export default {
  props: ["id"],
  data() {
    return {};
  },
  beforeRouteUpdate(to, from, next) {
    return this.$store.dispatch("getOnePokemon", to.params.id).then(next);
  },
  computed: {
    pokemonInfo() {
      return this.$store.getters.getPokemon;
    },
    mainColor() {
      return this.$store.getters.getPokemon
        ? this.$store.getters.getPokemon.types[0].type.name + "L"
        : null;
    }
  },
  methods: {
    getData() {
      this.$store.dispatch("getOnePokemon", this.id);
    },
    swipe(dir) {
      if (dir == "R") {
        this.$router.push("/detail/" + (Number(this.id) - 1));
      } else {
        this.$router.push("/detail/" + (Number(this.id) + 1));
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.type {
  color: white;
}
.water {
  background-color: rgb(86 121 236);
}
.grass {
  background: rgb(104 192 63);
}
.poison {
  background-color: rgb(140 40 142);
}
.normal {
  background-color: rgb(151 153 101);
}
.fire {
  background-color: rgb(234 107 45);
}
.flying {
  background-color: rgb(150 120 236);
}
.electric {
  background-color: rgb(245 200 57);
}
.ice {
  background-color: rgb(136 208 207);
}
.fighting {
  background-color: rgb(177 29 30);
}
.ground {
  background-color: rgb(215 181 85);
}
.psychic {
  background-color: rgb(230 60 116);
}
.bug {
  background-color: rgb(152 173 42);
}
.rock {
  background-color: rgb(169 144 43);
}
.ghost {
  background-color: rgb(93 66 134);
}
.dark {
  background-color: rgb(93 70 56);
}
.dragon {
  background-color: rgb(93 40 244);
}
.steel {
  background-color: rgb(169 168 197);
}
.fairy {
  background-color: rgb(169 168 197);
}

/* Loading */
.waterL {
  color: rgb(86 121 236);
}
.grassL {
  color: rgb(104 192 63);
}
.poisonL {
  color: rgb(140 40 142);
}
.normalL {
  color: rgb(151 153 101);
}
.fireL {
  color: rgb(234 107 45);
}
.flyingL {
  color: rgb(150 120 236);
}
.electricL {
  color: rgb(245 200 57);
}
.iceL {
  color: rgb(136 208 207);
}
.fightingL {
  color: rgb(177 29 30);
}
.groundL {
  color: rgb(215 181 85);
}
.psychicL {
  color: rgb(230 60 116);
}
.bugL {
  color: rgb(152 173 42);
}
.rockL {
  color: rgb(169 144 43);
}
.ghostL {
  color: rgb(93 66 134);
}
.darkL {
  color: rgb(93 70 56);
}
.dragonL {
  color: rgb(93 40 244);
}
.steelL {
  color: rgb(169 168 197);
}
.fairyL {
  color: rgb(169 168 197);
}
</style>
