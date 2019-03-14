<template>
    <div>
        <el-tree
                show-checkbox
                auto-expand-parent
                ref="tree"
                node-key="id"
                :data="data.list"
                :default-checked-keys="submit_data[data.key]"
                :default-expanded-keys="submit_data[data.key]"
                :props="custom_attrs"
                v-bind="tree_attrs"
                @check-change="onCheckChange">
        </el-tree>
    </div>
</template>
<script>
import Common from "./js/Common";
var Js = Common("sls-tree");
Js.mixins = [
  {
    data() {
      return {};
    },
    computed: {
      tree_attrs() {
        return this.Data.tree_attrs || {};
      }
    },
    methods: {
      onCheckChange() {
        this.submit_data[this.data.key] = this.$refs.tree.getCheckedKeys();
      }
    }
  }
];
export default Js;
</script>