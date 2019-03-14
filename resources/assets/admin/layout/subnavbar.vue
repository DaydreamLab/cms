<template>
  <div class="subnavbar">
      <div class="subnavbar-left">
        <breadcrumb />
      </div>
      <div class="subnavbar-right">
        <toolbar />
      </div>
  </div>
</template>
<script>
import breadcrumb from "./breadcrumb";
import toolbar from "./toolbar";

export default {
  name: "subnavbar",
  components: {
    breadcrumb,
    toolbar
  },
  computed: {},
  methods: {}
};
</script>
<style lang="sass">
.subnavbar
  height: $subnavbar-height
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.10)
  &-left
    flex: 1
</style>



