import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

// 引入 language 預設數值
import {
    DEFAULT_LANGUAGE,
    FALLBACK_LANGUAGE,
    SUPPORTED_LANGUAGES
} from "configs/translation";

const messages = {};
SUPPORTED_LANGUAGES.forEach(lang => {
    messages[lang.code] = Object.assign(
        require(`./${lang.code}`).default,
        require(`element-ui/lib/locale/lang/${lang.code}`).default
    );
});
const i18n = new VueI18n({
    locale: DEFAULT_LANGUAGE, // set locale
    fallbackLocale: FALLBACK_LANGUAGE,
    messages // set locale messages
});

export default i18n;
