<template>
  <el-container>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_BASIC_OPTIONS')/*基本*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="title" :label="$t('FIELD_TITLE_LABEL'/*標題*/)">
              <el-input v-model="default_value.title"></el-input>
            </el-form-item>
            <el-form-item prop="alias" :label="$t('FIELD_ALIAS_LABEL')/*別名*/">
              <el-input v-model="default_value.alias"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_METADATA_OPTIONS')/*Metadata*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="metadesc" :label="$t('FIELD_META_DESCRIPTION_LABEL')/*Meta 說明*/">
              <el-input type="textarea" :rows="2" v-model="default_value.metadesc"></el-input>
            </el-form-item>
            <el-form-item prop="metakeywords" :label="$t('FIELD_META_KEYWORDS_LABEL')/*Meta 關鍵字*/">
              <el-input type="textarea" :rows="2" v-model="default_value.metakeywords"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-aside width="400px">
      <div class="content-aside__header">{{ $t('GLOBAL_FIELDSET_OPTIONS')/*設定*/ }}</div>
      <div class="content-aside__content">
        <el-form label-position="top" ref="form-data" :model="default_value">
          <el-form-item prop="state" :label="$t('OPTION_STATE'/*狀態*/)">
            <el-select v-model="default_value.state">
              <el-option :label="$t('PUBLISHED')/*發佈的*/" :value="1"></el-option>
              <el-option :label="$t('UNPUBLISHED')/*停止發佈的*/" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-aside>
  </el-container>
</template>
<script>
import cms_mixin from "mixins/edit_mixin.js";

export default {
  name: "tag-edit",
  mixins: [cms_mixin],
  data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
      default_value: {
        title: "",
        alias: "",
        state: 1,
        access: 1,
        language: "*",
        ordering: "",
        parent_id: 1,
        metadesc: "",
        metakeywords: ""
      }
    };
  },
  methods: {
    onSubmit({ data, info, type }) {
      if (this.params.id) {
        data.id = this.params.id;
      }

      this.$$api_tag_save({
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
      this.$$api_tag_get({
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