<template>
  <div>
    <FormData
      :FieldList="fields"
      :DefaultValue="default_value"
      :Toolbar="toolbar"
      @onSubmit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  name: "setting-edit",
  data() {
    return {
      fields: [
        {
          key: "sitename",
          label: this.$t("SETTING_FIELD_SITE_NAME_LABEL") /*網站名稱*/
        },
        {
          key: "metadesc",
          label: this.$t("FIELD_META_DESCRIPTION_LABEL") /*Meta 說明*/
        },
        {
          key: "metakeywords",
          label: this.$t("FIELD_META_KEYWORDS_LABEL") /*Meta 關鍵字*/
        },
        {
          key: "locale",
          type: "select",
          label: this.$t("SETTING_FIELD_SITE_LANG_LABEL") /*網站語言*/,
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        },
        {
          key: "locale_admin",
          type: "select",
          label: this.$t("SETTING_FIELD_ADMIN_LANG_LABEL") /*管理區語言*/,
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      ],
      toolbar: {
        type: ["save"]
      },
      default_value: {
        sitename: "",
        metadesc: "",
        metakeywords: "",
        locale: "",
        locale_admin: ""
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      this.$$api_setting_save({
        data,
        fn: ({ data, msg }) => {
          this.$message.success(msg);
          switch (type) {
            case "save":
              this.$router.push({
                path: this.$route.path
              });
              break;
          }
        }
      });
    },
    onGetView() {
      this.$$api_setting_get({
        fn: ({ data }) => {
          Object.keys(this.default_value).forEach(
            field => (this.default_value[field] = data.items[field])
          );
        }
      });
    },

    init() {
      this.onGetView();
    }
  },
  created() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    }
  }
};
</script>

<style>
</style>
