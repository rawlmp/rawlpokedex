<template>
  <v-app>
    <v-toolbar app>
      <router-link to="/">
        <v-toolbar-title class="headline text-uppercase">
          <v-icon>home</v-icon>
          <span>Rawl</span>
          <span class="font-weight-light">Pokedex2</span>
        </v-toolbar-title>
      </router-link>
    </v-toolbar>

    <v-content>
      <transition mode="in-out" :name="transitionName">
        <router-view></router-view>
      </transition>
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
      transitionName: "fade"
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = Number(to.path.split("/")[2]);
        const fromDepth = Number(from.path.split("/")[2]);
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName;

      next();
    });
  },
  methods: {}
};
</script>
<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.4s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(40em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-40em, 0);
}
a {
  color: black !important;
  text-decoration: none;
}
</style>
