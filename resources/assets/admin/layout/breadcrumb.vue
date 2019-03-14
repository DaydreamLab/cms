<template>
  <div class="breadcrumb-container">
    <!-- <h2>
    {{pageHeader}}
    <template v-if="$route.query.name">: {{$route.query.name}}</template>
    </h2>-->
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          :to="{ path: $store.state.user.user_info.redirect }"
          key="index"
        >{{ $t('GLOBAL_HOMEPAGE'/*首頁*/)}}</el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="item.name && item.path !== '/'"
          v-for="(item,index)  in $route.matched"
          :key="item.meta.id"
        >
          <span v-if="index==$route.matched.length-1" class="breadcrumb--alias">{{ $t(item.name) }}</span>
          <router-link v-else :to="item.path">{{ $t(item.name) }}</router-link>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: ""
    };
  },

  methods: {
    getPageHeader(name) {
      return (name = name.replace(
        "Edit",
        this.$route.query.id ? "Edit" : "Add"
      ));
    }
  },
  created() {
    if (this.$route.matched.length) {
      var name = this.$route.matched[this.$route.matched.length - 1].name;
      this.pageHeader = this.getPageHeader(name);
    }
  },
  watch: {
    $route(to, from) {
      this.pageHeader = this.getPageHeader(to.name);
    }
  }
};
</script>
<style lang="sass">
.breadcrumb-container
  line-height: $navbar-height

.breadcrumb--alias
  color: $color-gray-3
  cursor: text

/*fade*/
.breadcrumb-enter-active,.breadcrumb-leave-active 
  transition: all 0.5s

.breadcrumb-enter,.breadcrumb-leave-active 
  opacity: 0
  transform: translateX(20px)

.breadcrumb-move
  transition: all 0.5s

.breadcrumb-leave-active
  position: absolute

</style>
