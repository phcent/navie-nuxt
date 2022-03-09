import {defineNuxtPlugin} from "#app";
import {setup} from "@css-render/vue3-ssr";
import naive from "naive-ui";
export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) {
        const {collect} = setup(nuxtApp.vueApp);
        nuxtApp.ssrContext!.renderMeta = () => {
            return {
                headTags: collect(),
            };
        };
    }
    nuxtApp.vueApp.use(naive);
});