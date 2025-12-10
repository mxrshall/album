import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHamburgerMenu, MdOpeninnew } from "oh-vue-icons/icons";

import router from "./router";

addIcons(CoHamburgerMenu, MdOpeninnew);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
