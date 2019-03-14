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
            <el-form-item prop="tags" :label="$t('OPTION_TAG')/*標籤*/">
              <div class="form-item__inner">
                <div class="form-item-tags__wrapper">
                  <el-tag
                    v-for="tag in default_value.tags"
                    :key="tag.id"
                    closable
                    :disable-transitions="false"
                    @close="handleTagClose(tag)"
                  >{{tag.title}}</el-tag>
                  <el-autocomplete
                    v-model="new_tag_value"
                    value-key="title"
                    :fetch-suggestions="queryTagSearch"
                    :trigger-on-focus="false"
                    @keyup.enter.native="handleTagConfirm"
                    @select="handleTagConfirm"
                  ></el-autocomplete>
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="introtext" :label="$t('FIELD_INTRO_TEXT_LABEL')/*摘要文字*/">
              <el-input type="textarea" :rows="2" v-model="default_value.introtext"></el-input>
            </el-form-item>
            <el-form-item prop="description" :label="$t('FIELD_ITEM_DESCRIPTION_LABEL')/*內容文字*/">
              <Editor class="form-item__inner" :SubmitData="default_value" Field="description"/>
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
        <el-tab-pane :label="$t('GLOBAL_FIELDSET_IMAGE_OPTIONS')/*圖片*/">
          <el-form label-position="top" ref="form-data" :model="default_value">
            <el-form-item prop="introimage" :label="$t('CONTENT_FIELD_INTRO_IMAGE_LABEL')/*摘要圖片*/">
              <MediaInput
                :Data="default_value.introimage"
                @onSelect="value => default_value.introimage = value"
              />
            </el-form-item>
            <el-form-item prop="image" :label="$t('CONTENT_FIELD_MAIN_IMAGE_LABEL')/*主要圖片*/">
              <el-switch
                :active-text="$t('FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL')/*與摘要圖片相同*/"
                v-model="default_value.image_sameas_introimage"
              ></el-switch>
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
          <el-form-item prop="category_id" :label="$t('OPTION_CATEGORY')/*分類*/">
            <el-select v-model="default_value.category_id">
              <el-option
                v-for="item in fields.category_id.list"
                :label="item[fields.category_id.custom_attrs.label]"
                :value="item[fields.category_id.custom_attrs.value]"
                :key="item[fields.category_id.custom_attrs.value]"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="featured" :label="$t('OPTION_FEATURED')/*精選*/">
            <el-radio-group v-model="default_value.featured">
              <el-radio-button label="1" name="type">{{ $t('YES')/*是*/ }}</el-radio-button>
              <el-radio-button label="0" name="type">{{ $t('NO')/*否*/ }}</el-radio-button>
            </el-radio-group>
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
          <!-- <el-form-item prop="publish_up"  label="Start Publishing">
            <el-date-picker
              v-model="default_value.publish_up"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="publish_down"  label="Finish Publishing">
            <el-date-picker
              v-model="default_value.publish_down"
              type="datetime">
            </el-date-picker>
          </el-form-item>-->
        </el-form>
      </div>
    </el-aside>
  </el-container>
</template>
<script>
import Editor from "cps/editor";
import MediaInput from "cps/media-input";
import cms_mixin from "mixins/edit_mixin.js";

export default {
  name: "item-edit",
  components: { Editor, MediaInput },
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
        category_id: {
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
        parent_id: 1,
        title: "",
        alias: "",
        introtext: "",
        description: "",
        tags: [],
        state: 1,
        category_id: "",
        featured: 0,
        language: "",
        access: 2,
        metadesc: "",
        metakeywords: "",
        introimage: "",
        image: "",
        image_sameas_introimage: false,
        ordering: ""
      },
      new_tag_value: ""
    };
  },
  methods: {
    queryTagSearch(queryString, callback) {
      this.$$api_tag_list({
        data: {
          search: queryString
        },
        fn: ({ data }) => {
          callback(data.items);
        }
      });
      this.queryString;
    },
    handleTagClose(tag) {
      this.default_value.tags.splice(this.default_value.tags.indexOf(tag), 1);
    },
    handleTagConfirm(item) {
      if (item.type === "keyup") {
        this.$$api_tag_save({
          data: {
            title: this.new_tag_value,
            state: 1
          },
          fn: ({ data }) => {
            this.default_value.tags.push(data.items);
            this.new_tag_value = "";
          }
        });
      } else {
        this.default_value.tags.push(item);
        this.new_tag_value = "";
      }
    },
    onTrash() {
      this.$$api_item_updateState({
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
      this.$$api_item_save({
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
      this.$$api_item_get({
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
    },
    "default_value.image_sameas_introimage"(v) {
      if (v) {
        this.default_value.image = this.default_value.introimage;
      } else {
        this.default_value.image = "";
      }
    }
  }
};
</script>