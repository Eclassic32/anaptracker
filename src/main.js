import { createApp } from "vue";
import App from "./App.vue";
import PageViewer from "./components/PageViewer.vue";
import PlayerList from "./components/PlayerList.vue";
import "./index.css";
import "./css/app.css";
import "./css/tomagueri.css";

import "./assets/main.css";


const app = createApp(App);

window.vm = app.mount("#app");
