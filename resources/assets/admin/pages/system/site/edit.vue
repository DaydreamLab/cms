<template>
  <el-container>
    <el-main>
      <el-tabs type="border-card">
          <el-tab-pane :label="$t('GLOBAL_FIELDSET_BASIC_OPTIONS')/*基本*/">
            <el-form
              label-position="top"
              ref="form-data"
              :model="default_value">
                <el-form-item prop="title" :label="$t('FIELD_TITLE_LABEL'/*標題*/)">
                  <el-input v-model="default_value.title"></el-input>
                </el-form-item>
                <el-form-item prop="url" :label="$t('SITE_FIELD_URL_LABEL')/*網址*/">
                  <el-input v-model="default_value.url"></el-input>
                </el-form-item>
                <el-form-item prop="sef" :label="$t('OPTION_LANGUAGE')/*語言*/">
                  <el-select v-model="default_value.sef" >
                    <el-option v-for="item in fields.sef.list"
                      :label="item[fields.sef.custom_attrs.label]"
                      :value="item[fields.sef.custom_attrs.value]"
                      :key="item.id"></el-option>
                  </el-select>
                </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane :label="$t('LANGUAGE_TAB_SITE_NAME_AND_METADATA')/*網站名稱&Metadata*/">
            <el-form
              label-position="top"
              ref="form-data"
              :model="default_value">
              <el-form-item prop="sitename" :label="$t('LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL')/*自訂網站名稱*/">
                <el-input v-model="default_value.sitename"></el-input>
              </el-form-item>
              <el-form-item prop="metakeywords" :label="$t('FIELD_META_KEYWORDS_LABEL')/*Meta 關鍵字*/">
                <el-input
                  type="textarea"
                  :rows="2"
                  v-model="default_value.metakeywords">
                </el-input>
              </el-form-item>
              <el-form-item prop="metadesc" :label="$t('FIELD_META_DESCRIPTION_LABEL')/*Meta 說明*/">
                <el-input
                  type="textarea"
                  :rows="2"
                  v-model="default_value.metadesc">
                </el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
import cms_mixin from "mixins/edit_mixin.js";

export default {
  name: "site-edit",
  mixins: [cms_mixin],
  data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
      fields: {
        sef: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      default_value: {
        title: "",
        url: "",
        sef: "",
        sitename: "",
        metakeywords: "",
        metadesc: "",
        sef: ""
      }
    };
  },
  methods: {
    onTrash() {
      this.$$api_site_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: ({ msg }) => {
          this.$message.success(msg);
          this.onCancel();
        }
      });
    },
    onSubmit({ data, info, type }) {
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_site_save({
        data,
        fn: ({ data, msg }) => {
          this.$message.success(msg);
          switch (type) {
            case "save":
              this.$router.push({
                path: this.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              this.onCancel();
              break;
            case "savenadd":
              this.$router.push({
                path: this.$route.path
              });
              this.$router.go(0);
              break;
          }
        }
      });
    },
    onGetView() {
      this.$$api_site_get({
        pathVar: this.params.id,
        fn: ({ data }) => {
          Object.keys(this.default_value).forEach(
            field => (this.default_value[field] = data.items[field])
          );
        }
      });
    },

    onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
    },

    init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
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