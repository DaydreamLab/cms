<template>
  <el-container class="app-container" :class="{'left-hidden': !$store.state.global.left_open }">
    <el-aside class="sidebar" width="200px">
      <Sidebar/>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Navbar/>
        <StickyNav>
          <Subnavbar/>
        </StickyNav>
      </el-header>
      <el-main class="main-container">
        <AppContent/>
      </el-main>
      <el-footer class="footer">
        <AppFooter/>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import StickyNav from "cps/sticky-nav";

import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Subnavbar from "./subnavbar";

import AppContent from "./content";
import AppFooter from "./footer";

export default {
  name: "layout",
  components: {
    StickyNav,
    Sidebar,
    Navbar,
    Subnavbar,
    AppContent,
    AppFooter
  }
};
</script>
<style lang="sass">
.header
  position: fixed
  top: 0
  right: 0
  left: $sidebar-open-width
  background: $color-white
  padding: 0 
  height: auto !important
  z-index: 3

.navbar, .subnavbar
  display: flex
  flex-direction: row
  align-items: center
  align-content: center
  padding: 0 $navbar-padding

.sidebar
  transition: width .28s
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.1)
  z-index: 4
  background: $color-white

.app-container.left-hidden
  & > .sidebar
    width: $sidebar-hide-width!important
  .header
    left: $sidebar-hide-width

.main-container
  margin-top: $navbar-height + $subnavbar-height
  transition: margin .28s
  min-height: calc( 100vh - #{$navbar-height} - #{$subnavbar-height} - #{$navbar-height})

.footer
  border-top: 1px solid $border-color-light
  color: $color-gray-1
  line-height: $navbar-height
  background: $color-white
  
</style>

