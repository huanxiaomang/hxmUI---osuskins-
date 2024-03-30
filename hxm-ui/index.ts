import HxmButton from './components/button/index.vue';
import HxmPicClip from './components/picClip/index.vue';
import HxmDialog from './components/dialog/index.vue';

const components = {
    HxmButton,
    HxmPicClip,
    HxmDialog,
}


const HxmUI = {
    install(app: any) {
        Object.entries(components).forEach(([name, c]) => {
            app.component(name, c);

        })



    }
}

export default HxmUI;