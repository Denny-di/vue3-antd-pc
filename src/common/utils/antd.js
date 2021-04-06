import { Button } from "ant-design-vue";

// import "ant-design-vue/dist/antd.css";

const components = [Button];

export function setupAntd(app) {
    components.forEach((plugin) => {
        app.use(plugin);
    });
}
