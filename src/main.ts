import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from  "pinia";
import BaseButton from './components/BaseButton.vue';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.use(createPinia());
app.mount("#app");
