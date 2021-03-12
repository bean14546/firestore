import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import firebase from "firebase/app";
import "firebase/firestore";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

var firebaseConfig = {
  apiKey: "AIzaSyBuuRCOUmgZQ8Ckn3NmmVTX815_iCSyX5I",
  authDomain: "firestore-74964.firebaseapp.com",
  projectId: "firestore-74964",
  storageBucket: "firestore-74964.appspot.com",
  messagingSenderId: "265582050988",
  appId: "1:265582050988:web:f068d1cb242d689186e909",
  measurementId: "G-LPQR00FJ5K",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
