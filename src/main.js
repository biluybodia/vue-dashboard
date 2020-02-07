import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import massagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(massagePlugin);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyD9Hjcgoc7-S7VH0xfZS1MzPt-mXHlM280",
  authDomain: "my-vue-app-a193a.firebaseapp.com",
  databaseURL: "https://my-vue-app-a193a.firebaseio.com",
  projectId: "my-vue-app-a193a",
  storageBucket: "my-vue-app-a193a.appspot.com",
  messagingSenderId: "853506556720",
  appId: "1:853506556720:web:8e426b4850a8f519c17ef5"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});


