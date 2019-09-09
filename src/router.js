import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

import MainBoardView from "./views/MainBoardView.vue";
import ProductManagementView from "./views/ProductManagementView.vue";
import ReservationManagementView from "./views/ReservationManagementView.vue";
import ReservationSetView from "./views/ReservationSetView.vue";
import CustomerManagementView from "./views/CustomerManagementView.vue";
import StatisticsBoardView from "./views/StatisticsBoardView.vue";
import AuthorityView from "./views/AuthorityView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Main",
      component: MainBoardView
    },
    {
      path: "/productManagement",
      name: "ProductManagement",
      component: ProductManagementView
    },
    {
      path: "/reservationManagement",
      name: "ReservationManagement",
      component: ReservationManagementView
    },
    {
      path: "/reservationSet",
      name: "ReservationSet",
      component: ReservationSetView
    },
    {
      path: "/customerManagement",
      name: "CustomerManagement",
      component: CustomerManagementView
    },
    {
      path: "/statisticsBoard",
      name: "StatisticsBoard",
      component: StatisticsBoardView
    },
    {
      path: "/authority",
      name: "Authority",
      component: AuthorityView
    }

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
