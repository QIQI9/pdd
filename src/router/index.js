import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },{
   path: "/login",
   name: "login",
   component: ()=>import("@/views/LoginView.vue"),
 },{
   path: "/video",
   name: "video",
   component: ()=>import("@/views/VideoView.vue"),
 },{
   path: "/type",
   name: "type",
   component:  ()=>import("@/views/TypeView.vue"),
 },{
   path: "/talk",
   name: "talk",
   component:  ()=>import("@/views/TalkView.vue"),
   // 单个路由鉴权
   beforeEnter: (to, from, next) => {
      let token = store.state.token
      if(token){
         next()
      }else{
         next({name:"login",params:{id:'talk'}})
      }
   }
 },{
   path: "/mine",
   name: "mine",
   component:  ()=>import("@/views/MineView.vue"),
   // 单个路由鉴权
   beforeEnter: (to, from, next) => {
      let token = store.state.token
      if(token){
         next()
      }else{
         next({name:"login",params:{id:'mine'}})
      }
   }
 },
];

const router = new VueRouter({
  routes,
});

export default router;
