import { createApp } from "vue";
import App from "./App.vue";
import PlayerList from "./components/PlayerList.vue";
import "./index.css";

import "./assets/main.css";


const app = createApp(App);

window.vm = app.mount("#app");
