<template>
    <transition name="el-fade-in-linear">
        <router-view class="content-container"></router-view>
    </transition>
</template>
<style lang="sass">
.content-container
    > .list-data,  > .form-data
        background: $color-white
        padding: $navbar-padding

    .el-main, .el-aside
        padding: 0
        margin-right: $navbar-padding
        background: $color-white
</style>

