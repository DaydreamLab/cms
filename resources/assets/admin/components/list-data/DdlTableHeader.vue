<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="4">
      <div class="list-header">
        <slot name="ddl-header-before"></slot>
      </div>
    </el-col>
    <el-col :span="20" class="list-searchbar">
      <div v-if="fields && fields.length">
        <FormData
          :Setting="setting"
          :FieldList="fields"
          :DefaultValue="default_value"
          @onSubmit="onSearch"
          @onReset="onSearchReset"
        />
      </div>

      <div class="list-header">
        <slot name="ddl-header-after"></slot>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      disabled: true
    };
  },
  computed: {
    fields() {
      return this.Search.fields || [];
    },
    default_value() {
      return this.Search.default_value || {};
    },
    setting() {
      return this.Search.setting || { inline: true, type: "search" };
    }
  },
  props: {
    Search: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    onSearch(opts) {
      this.$emit("onSearch", opts);
    },
    onSearchReset() {
      this.$emit("onSearchReset");
    }
  }
};
</script>
<style lang='sass' scoped>
.list-searchbar
  text-align: right

</style>
