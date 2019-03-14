 <template>
  <el-menu router :collapse="!this.$store.state.global.left_open" :default-active="$route.path">
    <router-link
      :to="($store.state.user.user_info.redirect) ? $store.state.user.user_info.redirect : '/'"
      class="sidebar-logo"
    >
      <SvgIcon icon-class="logo" class="sidebar-logo__inner" style="height: 45px;"/>
    </router-link>
    <template v-for="item in menuList" v-if="item.children">
      <template v-if="countChildMenu(item.children) === 1">
        <template v-for="child in item.children" v-if="child.meta.showNav === 1">
          <a v-if="child.meta.type === 'url'" :href="child.redirect" target="_blank">
            <el-menu-item :index="$route.path">
              <font-awesome-icon
                v-if="item.meta.icon"
                class="sidebar-menu-icon"
                :icon="['fal', item.meta.icon]"
              />
              <span slot="title">{{ $t(item.name) }}</span>
            </el-menu-item>
          </a>
          <el-menu-item v-else :index="child.path">
            <font-awesome-icon
              v-if="item.meta.icon"
              class="sidebar-menu-icon"
              :icon="['fal', item.meta.icon]"
            />
            <span slot="title">{{ ($t(item.name) ) ? $t(item.name) : $t(child.name) }}</span>
          </el-menu-item>
        </template>
      </template>
      <template v-else-if="countChildMenu(item.children) > 1 ">
        <el-submenu :index="item.path" :key="item.meta.id" v-if="item.meta.type !== 'separator'">
          <template slot="title">
            <!-- 顯示的標題（不能點只能展開） -->
            <font-awesome-icon
              v-if="item.meta.icon"
              class="sidebar-menu-icon"
              :icon="['fal', item.meta.icon]"
            />
            <span slot="title">{{ $t(item.name) }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            v-if="child.meta.showNav === 1"
            :key="child.meta.id"
            :index="child.path"
          >{{ $t(child.name) }}</el-menu-item>
        </el-submenu>
        <template v-else>
          <li class="sidebar-menu__separator">{{ $t(item.name) }}</li>
          <el-menu-item
            v-for="child in item.children"
            v-if="child.meta.showNav === 1"
            :key="child.meta.id"
            :index="child.path"
          >
            <font-awesome-icon
              v-if="child.meta.icon"
              class="sidebar-menu-icon"
              :icon="['fal', child.meta.icon]"
            />
            <span slot="title">{{ $t(child.name) }}</span>
          </el-menu-item>
        </template>
      </template>
      <template v-else-if="countChildMenu(item.children) === 0 ">
        <!-- FIXME: 沒有 children 有可能不是 separator -->
        <li class="sidebar-menu__separator">{{ $t(item.name) }}</li>
      </template>
    </template>
  </el-menu>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      menuList: this.$router.options.routes
    };
  },
  methods: {
    countChildMenu(child) {
      const menuMap = child.filter(
        item => item.meta.type === "menu" || item.meta.type === "url"
      );
      return menuMap.length;
    }
  }
};
</script>
<style lang="sass" scoped>
.sidebar-logo
  padding: 0 $navbar-padding
  display: flex
  align-items: center
  color: $color-white
  background-color: $color-black
  height: $navbar-height
  &__inner
    width: 100%

.sidebar-menu-icon
  margin-right: 16px

.sidebar-menu__separator
  color: $color-secondary-light-2
  padding-left: $navbar-padding
  margin-top: $navbar-padding
  margin-bottom: $navbar-padding/2
  display: flex
  justify-content: center
  align-items: center
  text-transform: uppercase
  font-size: 90%
  word-break: keep-all
  &:after
    content: ""
    width: 100%
    height: 1px
    background-color: $color-secondary-light-2
    margin-left: $navbar-padding

</style>
