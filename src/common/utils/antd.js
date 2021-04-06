import { Button, Form, Input } from "ant-design-vue";
import { LeftOutlined } from "@ant-design/icons-vue";
// import * as Icons from "@ant-design/icons-vue"; // 全部引入

const components = [Button, Form, Input];

const icons = [LeftOutlined];

export function setupAntd(app) {
    components.forEach((plugin) => {
        app.use(plugin);
    });

    icons.forEach((icon) => {
        app.component(icon.name, icon);
    });
}
