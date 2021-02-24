import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DisableAutocomplete from "vue-disable-autocomplete";

createApp(App)
  .use(DisableAutocomplete)
  .use(store)
  .use(router)
  .mount("#app");
