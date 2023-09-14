import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import en from './locales/en.json';
import ja from './locales/ja.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ja,
  },
});

import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App).use(i18n).use(BootstrapVue).use(BootstrapVueIcons).mount('#app');
