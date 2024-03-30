import { createApp } from "vue";
import HxmMessage from './index.vue';

let dirty = false;

export default function showMsg(msg: string) {
    if (dirty) return;

    dirty = true;
    const delay = 1500;
    const app = createApp(HxmMessage, {
        msg, delay
    });
    const div = document.createElement("div");
    document.body.appendChild(div);
    app.mount(div);
    setTimeout(() => {
        dirty = false;
        app.unmount();
        div.remove();
    }, delay + 300);
}
