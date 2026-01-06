import Vue from "vue";
import VueRouter from "vue-router";
import MultiPage from "../components/MultiPage.vue";
// C:\Users\meet nadpara\Desktop\vue\multipageform\src\components\MultiPage.vue
Vue.use(VueRouter);

const routes = [{ path: "/", component: MultiPage }];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
