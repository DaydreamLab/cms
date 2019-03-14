<template>
  <div class="navbar">
    <div class="navbar-left">
      <font-awesome-icon
        v-if="$route.matched[0].path.indexOf('/check') === -1"
        :icon="['fal', 'list-ul']"
        @click="toggle_menu"
        class="sidebar-toggle"
      />
    </div>
    <div class="navbar-right">
      <el-dropdown trigger="click" @command="handleCommand" class="navbar-right__item">
        <div class="navbar-right__dropdown">
          <div class="navbar-right__dropdown_item">
            <span class="navbar-right__icontitle">{{ $t('GLOBAL_VIEW_SITE'/*預覽網站*/) }}</span>
            <font-awesome-icon :icon="['fal', 'external-link']"/>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'caret-down']"/>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <a
            v-for="site in $store.state.sys.site_list"
            :key="site.id"
            :href="site.url"
            target="_blank"
          >
            <el-dropdown-item>{{ site.title }}</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click" @command="handleCommand" class="navbar-right__item">
        <div class="navbar-right__dropdown">
          <div class="navbar-right__dropdown_item">
            {{ $store.state.user.user_info.last_name }}
            <div class="navbar-right__dropdown_subtitle">{{ $store.state.user.user_info.first_name}}</div>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'caret-down']"/>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">
            <span class="navbar-right__icontitle">{{ $t('LOGOUT')/*登出*/ }}</span>
            <font-awesome-icon :icon="['fal', 'sign-out']"/>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  methods: {
    toggle_menu() {
      this.$store.commit("left_menu", "toggle");
    },
    /**
     * 登出
     */
    logout() {
      this.$confirm(this.$t("GLOBAL_CONFIRM_LOGOUT"), {
        type: "warning"
      }).then(() => {
        this.$$api_user_logout({
          fn: () => {
            this.$message.success("Logout success");
            this.$store.dispatch("remove_option_related_list");
            this.$store.commit("update_login_refresh", {
              type: true
            });
            this.$store.dispatch("remove_userinfo").then(() => {
              this.$router.push("/login");
            });
          }
        });
      });
    },
    handleCommand(cmd) {
      switch (cmd) {
        case "logout":
          this.logout();
          break;
      }
    }
  }
};
</script>
<style lang="sass">
.navbar
  height: $navbar-height
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15)
  &-left
    flex: 1
  &-right__item
    vertical-align: middle
    + .navbar-right__item
      padding-left: $navbar-padding*2
      &:before
        content: ""
        height: $navbar-height/2
        width: 1px
        background: $color-gray-9
        position: absolute
        top: calc(50% - #{$navbar-height/2/2})
        left: $navbar-padding
  &-right__icontitle
    margin-right: $icon-margin-right
  &-right__dropdown
    display: flex
    align-items: center
    &_item
      flex: 1
      padding-right: $navbar-padding/2
    &_subtitle
      color: $color-text-secondary
</style>



