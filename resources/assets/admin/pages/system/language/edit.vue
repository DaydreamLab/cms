<template>
  <el-container>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_BASIC_OPTIONS')/*基本*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="title" :label="$t('FIELD_TITLE_LABEL'/*標題*/)">
              <el-input v-model="default_value.title"></el-input>
            </el-form-item>
            <el-form-item prop="code" :label="$t('LANGUAGE_FIELD_LANG_TAG_LABEL')/*語言標籤*/">
              <el-input v-model="default_value.code"></el-input>
            </el-form-item>
            <el-form-item prop="sef" :label="$t('LANGUAGE_FIELD_LANG_CODE_LABEL')/*網址語言代碼*/">
              <el-input v-model="default_value.sef"></el-input>
            </el-form-item>
            <el-form-item prop="description" :label="$t('FIELD_DESCRIPTION_LABEL')/*描述*/">
              <el-input type="textarea" :rows="2" v-model="default_value.description"></el-input>
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
  name: "language-edit",
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
        code: "",
        sef: "",
        description: "",
        state: 1,
        ordering: ""
      }
    };
  },
  methods: {
    onTrash() {
      this.$$api_language_updateState({
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
      this.$$api_language_save({
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
      this.$$api_language_get({
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