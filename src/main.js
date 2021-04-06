import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

const app = createApp(App);
app.config.productionTip = false;

app.use(store).use(router).use(Antd);

app.mount("#app");
