import { createApp } from "vue";
import App from "./App.vue";

import Tres from "@tresjs/core";

//import LoadModelsPageVue from "./components/LoadModelsPage.vue";

export const app = createApp(App);

app.use(Tres);
//app.component('MyGlobalComponent', LoadModelsPageVue); 
app.mount("#app");
