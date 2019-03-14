<template>
  <el-container>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_BASIC_OPTIONS')/*基本*/">
          <el-form label-width="100px" label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="title" :label="$t('FIELD_TITLE_LABEL'/*標題*/)">
              <el-input v-model="default_value.title"></el-input>
            </el-form-item>
            <el-form-item prop="alias" :label="$t('FIELD_ALIAS_LABEL')/*別名*/">
              <el-input v-model="default_value.alias"></el-input>
            </el-form-item>
            <el-form-item prop="path" :label="$t('FIELD_CATEGORY_URL_LABEL')/*網站分類網址*/">
              <el-input v-model="default_value.path"></el-input>
            </el-form-item>
            <el-form-item
              prop="description"
              :label="$t('FIELD_CATEGORY_DESCRIPTION_LABEL')/*分類描述*/"
            >
              <Editor Field="description" :SubmitData="default_value"/>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_METADATA_OPTIONS')/*Metadata*/">
          <el-form>
            <el-form-item prop="metadesc" :label="$t('FIELD_META_DESCRIPTION_LABEL')/*Meta 說明*/">
              <el-input type="textarea" :rows="2" v-model="default_value.metadesc"></el-input>
            </el-form-item>
            <el-form-item prop="metakeywords" :label="$t('FIELD_META_KEYWORDS_LABEL')/*Meta 關鍵字*/">
              <el-input type="textarea" :rows="2" v-model="default_value.metakeywords"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_IMAGE_OPTIONS')/*圖片*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="introimage" :label="$t('CONTENT_FIELD_INTRO_IMAGE_LABEL')/*摘要圖片*/">
              <MediaInput
                :Data="default_value.introimage"
                @onSelect="value => default_value.introimage = value"
              />
            </el-form-item>
            <el-form-item prop="image" :label="$t('CONTENT_FIELD_MAIN_IMAGE_LABEL')/*主要圖片*/">
              <MediaInput
                :Data="default_value.image"
                @onSelect="value => default_value.image = value"
              />
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
          <el-form-item prop="parent_id" :label="$t('OPTION_PARENT_CATEGORY')/*上層分類*/">
            <el-select v-model="default_value.parent_id">
              <el-option
                v-for="item in fields.parent_id.list"
                :label="item[fields.parent_id.custom_attrs.label]"
                :value="item[fields.parent_id.custom_attrs.value]"
                :key="item[fields.parent_id.value]"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="content_type" :label="$t('OPTION_CONTENT_TYPE')/*內容類型*/">
            <el-select v-model="default_value.content_type">
              <el-option :label="$t('OPTION_CONTENT_TYPE_ARTICLE')/*文章*/" value="article"></el-option>
              <el-option :label="$t('OPTION_CONTENT_TYPE_MENU')/*選單*/" value="menu"></el-option>
              <el-option :label="$t('OPTION_CONTENT_TYPE_TIMELINE')/*時間軸*/" value="timeline"></el-option>
              <el-option
                :label="$t('OPTION_CONTENT_TYPE_SLIDESHOW')/*Slideshow*/"
                value="slideshow"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="access" :label="$t('FIELD_ACCESS_LEVEL')/*存取層級*/">
            <el-select v-model="default_value.access">
              <el-option
                v-for="item in fields.access.list"
                :label="item[fields.access.custom_attrs.label]"
                :value="item[fields.access.custom_attrs.value]"
                :key="item[fields.access.custom_attrs.value]"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="language" :label="$t('OPTION_LANGUAGE')/*語言*/">
            <el-select v-model="default_value.language">
              <el-option
                v-for="item in fields.language.list"
                :label="item[fields.language.custom_attrs.label]"
                :value="item[fields.language.custom_attrs.value]"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-aside>
  </el-container>
</template>
<script>
import Editor from "cps/editor";
import cms_mixin from "mixins/edit_mixin.js";

export default {
  name: "category-edit",
  components: { Editor },
  mixins: [cms_mixin],
  data() {
    return {
      params: {
        id: "",
        pid: ""
      },
      toolbar: {
        type: "edit"
      },
      fields: {
        parent_id: {
          list: this.$store.getters.category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        access: {
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      default_value: {
        title: "",
        alias: "",
        path: "",
        description: "",
        parent_id: 1,
        state: 1,
        access: 2,
        language: "",
        content_type: "article",
        updater: "",
        ordering: "",
        metadesc: "",
        metakeywords: ""
      }
    };
  },
  methods: {
    onTrash() {
      this.$$api_category_updateState({
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
      this.$$api_category_save({
        data,
        fn: ({ data, msg }) => {
          this.$message.success(msg);
          switch (type) {
            case "save":
              this.$router.push({
                path: this.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenadd":
              this.$router.push({
                path: this.$route.path
              });
              this.$router.go(0);
              break;
            case "savenclose":
              this.onCancel();
              break;
          }
        }
      });
    },
    onGetView() {
      this.$$api_category_get({
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
      this.params.pid = parseInt(this.$route.query.pid) || "";

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