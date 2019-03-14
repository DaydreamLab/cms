<template>
  <div class="toolbar-container">
    <template v-for="btn in default_btns">
      <!-- List -->
      <el-button
        v-can="'add'"
        v-if="btn === 'add'"
        type="primary"
        :key="btn"
        icon="el-icon-plus"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_ADD'/*新增*/) }}</el-button>
      <el-button
        v-can="'edit'"
        v-if="btn === 'edit'"
        :key="btn"
        icon="el-icon-edit"
        :disabled="btn_disabled"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_EDIT')/*編輯*/ }}</el-button>
      <el-button
        v-can="'delete'"
        v-if="btn === 'trash'"
        :key="btn"
        icon="el-icon-delete"
        :disabled="btn_disabled"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_TRASH')/*回收*/ }}</el-button>

      <!-- Trash -->
      <el-button
        v-can="'delete'"
        v-if="btn === 'delete'"
        :key="btn"
        icon="el-icon-delete"
        :disabled="btn_disabled"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_DELETE')/*刪除*/ }}</el-button>
      <el-button
        v-if="btn === 'restore'"
        :key="btn"
        icon="el-icon-refresh"
        :disabled="btn_disabled"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_RESTORE')/*恢復*/ }}</el-button>

      <!-- Edit -->
      <el-button
        v-if="btn === 'save'"
        type="success"
        :key="btn"
        icon="el-icon-edit-outline"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_SAVE')/*儲存*/ }}</el-button>
      <el-button
        v-if="btn === 'savenclose'"
        :key="btn"
        icon="el-icon-check"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_SAVE_AND_CLOSE')/*儲存&關閉*/ }}</el-button>
      <el-button
        v-if="btn === 'savenadd'"
        :key="btn"
        icon="el-icon-plus"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_SAVE_AND_ADD')/*儲存&新增*/ }}</el-button>
      <el-button
        v-if="btn === 'cancel'"
        :key="btn"
        icon="el-icon-circle-close"
        @click="onClickBtn({ type: btn })"
      >{{ $t('TOOLBAR_CANCEL')/*取消*/ }}</el-button>
    </template>

    <el-button
      v-for="(btn, index) in custom_btns"
      :type="btn.type || ''"
      :key="index"
      @click="onClickBtn({ type: 'custom', btn: btn })"
    >
      <font-awesome-icon v-if="btn.icon" :icon="btn.icon"></font-awesome-icon>
      {{ btn.text }}
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btn_list: {
        list: ["add", "edit", "trash"],
        trash: ["delete", "restore"],
        add: ["save", "savenclose", "savenadd", "cancel"],
        edit: ["save", "savenclose", "savenadd", "cancel", "trash", "preview"]
      },
      mode: "",
      cp_name: "",
      custom_btns: "",
      btn_disabled: true
    };
  },
  computed: {
    default_btns() {
      return this.btn_list[this.mode];
    }
  },
  methods: {
    onClickBtn(opts) {
      console.log("toolbar onClickBtn");
      this.$$eventBus.$emit(`onClick${this.cp_name}Toolbar`, opts);
    }
  },
  created() {
    this.$$eventBus.$on("onInitToolbar", ({ name, data }) => {
      this.cp_name = name;
      if (data.type instanceof Array) {
        this.btn_list.custom = data.type;
        this.mode = "custom";
      } else {
        this.mode = data.type;
      }
      this.custom_btns = this.mode === "trash" ? "" : data.custom;
      this.btn_disabled = this.mode !== "edit";
    });

    this.$$eventBus.$on("onSelectListDataChange", some_selected => {
      this.btn_disabled = !some_selected;
    });
  }
};
</script>
