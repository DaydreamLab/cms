<template>
  <el-container class="media-container">
    <el-header class="media-toolbar">
      <!-- <el-button-group>
        <el-button icon="el-icon-arrow-left"></el-button>
        <el-button><i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>-->
      <el-radio-group v-model="view" class="media-toolbar__item">
        <el-radio-button label="icon">
          <font-awesome-icon :icon="['fal', 'grip-horizontal']"></font-awesome-icon>
        </el-radio-button>
        <el-radio-button label="list">
          <font-awesome-icon :icon="['fal', 'bars']"></font-awesome-icon>
        </el-radio-button>
      </el-radio-group>

      <el-button-group class="media-toolbar__item">
        <el-button type="success" @click="file_upload.show = !file_upload.show">
          <font-awesome-icon :icon="['fal', 'upload']"></font-awesome-icon>
          {{ $t('MEDIA_UPLOAD')/*上傳檔案*/ }}
        </el-button>
        <el-button @click="folder_create.show = !folder_create.show">
          <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
          {{ $t('MEDIA_CREATE_DIR')/*新增資料夾*/ }}
        </el-button>
      </el-button-group>

      <el-button-group class="media-toolbar__item">
        <el-button @click="onDeleteItem" :disabled="selected_filepath.length <= 0">
          <font-awesome-icon :icon="['fal', 'trash-alt']"></font-awesome-icon>
          {{ $t('TOOLBAR_DELETE')/*刪除*/ }}
        </el-button>
      </el-button-group>
    </el-header>

    <el-container>
      <el-aside width="200px" class="media-aside">
        <el-tree
          ref="folderTree"
          node-key="path"
          :data="folders"
          :props="folder_prop"
          @node-click="onClickFolder"
          :expand-on-click-node="false"
          default-expand-all
          highlight-current
        ></el-tree>
      </el-aside>

      <el-main class="media-main" v-loading="loading">
        <div class="media-create">
          <el-input
            class="media-create__item"
            v-if="folder_create.show"
            v-model="folder_create.value"
          >
            <template slot="prepend">{{ params.dir }}</template>
            <el-button slot="append" @click="onCreateFolder">{{ $t('MEDIA_CREATE')/*建立*/ }}</el-button>
          </el-input>
          <el-upload
            class="media-create__item"
            v-if="file_upload.show"
            ref="fileUpload"
            action="string"
            :http-request="onUploadFiles"
            :auto-upload="false"
            multiple
          >
            <el-button slot="trigger">{{ $t('MEDIA_SELECT_FILE')/*選擇檔案*/ }}</el-button>
            <el-button type="primary" @click="handleUploadFile">{{ $t('MEDIA_UPLOAD')/*上傳*/ }}</el-button>
            <div slot="tip" class="el-upload__tip">{{ $t('MEDIA_UPLOAD_FILE_LIMIT')/*最大大小: 10MB*/ }}</div>
          </el-upload>
        </div>

        <el-table
          v-if="view === 'list'"
          class="file-list__table"
          :data="files"
          current-row-key="path"
          @selection-change="onSelectionChange"
        >
          <el-table-column v-if="list_checkbox" type="selection" width="55"></el-table-column>
          <el-table-column prop="name" :label="$t('MEDIA_NAME')/*名稱*/" width="350">
            <template slot-scope="scope">
              <div class="file-item__inner" @dblclick="onItemDoubleClick(scope.row)">
                <span class="file-item__type">
                  <font-awesome-icon
                    class="file-item__icon"
                    v-if="scope.row.type === 'Folder'"
                    :icon="['fal', 'folder']"
                  ></font-awesome-icon>
                  <span
                    v-else
                    class="file-item__thumb"
                    :style="{ background: `url('${scope.row.thumb}') center center`}"
                  ></span>
                </span>
                <span class="file-item__name">{{scope.row.name}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="type" :label="$t('MEDIA_TYPE')/*種類*/"></el-table-column>
          <el-table-column prop="size" :label="$t('MEDIA_SIZE')/*大小*/"></el-table-column>
          <el-table-column prop="modified" :label="$t('MEDIA_MODIFIED')/*修改日期*/"></el-table-column>
        </el-table>
        <div v-else class="file-list__icon">
          <label
            v-for="item in files"
            class="file-item"
            :key="item.path"
            :class="{'is-selected_filepath': selected_filepath.indexOf(item.path) >= 0 }"
          >
            <input
              type="checkbox"
              :value="item.path"
              class="file-item__checkbox"
              v-model="selected_filepath"
            >
            <div class="file-item__inner" @dblclick="onItemDoubleClick(item)">
              <div class="file-item__type">
                <font-awesome-icon
                  class="file-item__icon"
                  v-if="item.type === 'Folder'"
                  :icon="['fal', 'folder']"
                ></font-awesome-icon>
                <div
                  v-else
                  class="file-item__thumb"
                  :style="{ background: `url('${item.thumb}') center center`}"
                ></div>
              </div>
              <div class="file-item__name">{{ item.name }}</div>
            </div>
          </label>
        </div>
      </el-main>
    </el-container>
    <el-footer height="40px">
      <el-row type="flex" justify="space-between" class="media-footer">
        <el-col :span="6">{{ params.dir }}</el-col>
        <el-col :span="12">{{ selected_filepath[selected_filepath.length - 1] }}</el-col>
        <el-col
          :span="6"
          v-if="params.total"
          class="text-right"
        >{{ $t('MEDIA_ITEMS'/*項目*/) }}{{ params.total }}</el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
const path = require("path");

export default {
  data() {
    return {
      params: {
        dir: "/",
        path: this.FilePath,
        total: ""
      },
      view: "list",
      list_checkbox: true,
      selected_filepath: [],
      loading: false,
      folder_prop: {
        label: "name",
        children: "children"
      },
      folder_create: {
        show: false,
        value: ""
      },
      file_upload: {
        show: false
      },
      folders: [],
      files: []
    };
  },
  props: {
    FilePath: String
  },
  methods: {
    onSelectionChange(value) {
      this.selected_filepath = value.map(el => el.path);
    },
    onDeleteItem() {
      this.$$api_media_delete({
        data: {
          paths: this.selected_filepath
        },
        fn: () => {
          this.selected_filepath = [];
          this.onGetFiles();
        }
      });
    },
    onItemDoubleClick(item) {
      if (item.type === "Folder") {
        this.onClickFolder(item);
      } else {
        this.onClickFile(item);
      }
    },
    onClickFile(file) {
      this.params.path = file.path;
      this.$emit("onDbClickFile", this.params.path);
    },
    onClickFolder(folder) {
      this.params.dir = folder.path;
      this.selected_filepath = [];
      this.onGetFiles();
    },
    handleUploadFile() {
      this.$refs.fileUpload.submit();
    },
    onUploadFiles(params) {
      const formData = new FormData();
      formData.append("files[]", params.file, params.file.name);
      formData.append("dir", this.params.dir);

      this.$$api_media_uploadFile({
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData,
        fn: ({ msg }) => {
          this.$message.success(msg);
          params.onSuccess();
          this.$refs.fileUpload.clearFiles();
          this.file_upload.show = false;
          this.onGetFiles();
        },
        errFn: err => {
          this.$message.error(err.message);
          params.onError();
        }
      });
    },
    onCreateFolder() {
      this.$$api_media_createFolder({
        data: {
          dir: this.params.dir,
          name: this.folder_create.value
        },
        fn: ({ data }) => {
          this.folder_create.value = "";
          this.folder_create.show = false;
          this.onGetFiles();
          this.onGetFolders();
        }
      });
    },
    onGetFolders() {
      this.$$api_media_listFolder({
        fn: ({ data }) => {
          data.items[0].name = this.$t("GLOBAL_ROOT" /*根*/);
          this.folders = data.items;
        }
      });
    },
    onGetFiles({ fn } = {}) {
      this.loading = true;
      this.$$api_media_listFile({
        data: {
          dir: this.params.dir
        },
        fn: ({ data }) => {
          this.files = data.items;
          this.params.total = data.records;
          this.loading = false;

          fn && fn();
        }
      });
    },
    onGetView() {
      this.params.dir =
        path.dirname(this.params.path) !== "."
          ? path.dirname(this.params.path)
          : "/";
      this.onGetFiles();
      this.selected_filepath.push(this.params.path);
    },
    init() {
      this.onGetFolders();
      this.onGetFiles({
        fn: () => {
          if (this.params.path) {
            this.onGetView();
          }
        }
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    selected_filepath(value) {
      this.$emit("onSelectionChange", value);
    },
    "params.dir"(value) {
      this.$refs.folderTree.setCurrentKey(this.params.dir);
    },
    FilePath(v) {
      this.params.path = v;
    }
  }
};
</script>

<style lang="sass">
.content-container
  .el-main.media-main
    min-height: 500px
    padding: $navbar-padding/2
  .el-aside.media-aside
    padding: $navbar-padding/2

.media-container
  background: $color-white
  .el-header, .el-footer
    display: flex
    align-items: center
  .el-header
    border-bottom: 1px solid $color-gray-9
  .el-footer
    border-top: 1px solid $color-gray-9
    color: $color-gray-6
  .el-aside
    border-right: 1px solid $color-gray-9

.media-toolbar__item
  margin-right: 10px

.media-create__item
  margin-bottom: 10px

.media-footer
  width: 100%

.file-list
  &__table .el-table__row
    cursor: default
    .file-item__thumb
      width: 1em
      height: 1em
      display: inline-block
      vertical-align: middle
  &__icon
    color: $color-text-regular
    padding: $navbar-padding/2
    &:before, &:after
      content: ""
      display: table
    .file-item
      &__inner
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
      &__type
        width: 3em
        height: 3em
      &__icon
        font-size: 3em
      &__thumb
        width: 100%
        height: 100%
      &__name
        margin-top: 10px
        padding: 2px 4px
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
        overflow: hidden
        line-height: initial
        max-height: 2.4em
        line-height: 1.2em
        white-space: pre-line
        overflow: hidden
        overflow-wrap: break-word
        word-break: break-word

.file-item
  width: 120px
  height: 80px
  float: left
  padding-right: 1.5rem
  box-sizing: border-box
  
  &__checkbox
    opacity: 0
    position: absolute

  &.is-selected_filepath
    .file-item__name
      background: $color-primary
      color: $color-white
      border-radius: $border-radius-base
      



</style>

