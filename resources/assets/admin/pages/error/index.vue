<template>
<div class="error-bg">
  <div class="error-container">
      <div class="row">
          <div class="text-center error-content">
              <router-view></router-view>
              <el-button @click.prevent.stop="onClickBtnGoback">Go Back</el-button>
          </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  name: "error",
  methods: {
    onClickBtnGoback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  lang="sass" scoped>
.error-bg
  background-color: $color-primary

.error-container
  min-height: 100vh
  color: $color-white

.error-content
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  text-align: center

</style>
