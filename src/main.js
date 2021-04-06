import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { setupAntd } from "./common/utils/antd";

const app = createApp(App);
app.config.productionTip = false;

app.use(store).use(router);

setupAntd(app); // 注册使用的ant-design-vue组件

app.mount("#app");
