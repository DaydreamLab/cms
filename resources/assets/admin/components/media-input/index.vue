<template>
  <div>
    <el-input v-model="value" @change="onChange" clearable>
      <template slot="prepend">
        <el-popover
          placement="top-start"
          :title="$t('FIELD_MEDIA_PREVIEW_SELECTED_IMAGE'/*預覽*/)"
          width="200"
          trigger="hover"
        >
          <img v-if="value" :src="value" alt>
          <div v-else>{{ $t('FIELD_MEDIA_PREVIEW_EMPTY'/*沒有選擇圖片*/) }}</div>
          <el-button slot="reference">
            <font-awesome-icon :icon="['fal', 'eye']"/>
          </el-button>
        </el-popover>
      </template>
      <template slot="append">
        <el-button @click="dialogVisible = true">{{ $t('SELECT')/*選擇*/ }}</el-button>
      </template>
    </el-input>
    <el-dialog width="80%" :visible.sync="dialogVisible">
      <Media v-if="dialogVisible" :FilePath="value" @onSelectionChange="onMediaChange"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSelect">{{ $t('SELECT')/*選擇*/ }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Media from "cps/media";
export default {
  components: { Media },
  data() {
    return {
      value: this.Data,
      dialogVisible: false
    };
  },
  props: {
    Data: String
  },
  methods: {
    onSelect() {
      this.$emit("onSelect", this.value);
      this.dialogVisible = false;
    },
    onChange() {
      this.$emit("onSelect", this.value);
    },
    onMediaChange(files) {
      this.value = files[files.length - 1];
    }
  },
  watch: {
    Data(v) {
      this.value = v;
    }
  }
};
</script>

<style>
</style>
