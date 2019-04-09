import Vue from "vue";
import Router from "vue-router";
import PokemonList from "./views/PokemonList.vue";
import PokemonInfo from "./views/PokemonInfo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: PokemonList
    },
    {
      path: "/detail/:id",
      name: "detail",
      props: true,
      component: PokemonInfo
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
