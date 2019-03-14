<template>
    <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="12">
            © {{ (new Date()).getFullYear() }} {{ $store.state.global.site_name }}. All Rights Reserved.   
        </el-col>
        <el-col :span="12" class="text-right">
            Powered by
                <a :href="this.$store.state.global.author_link" target="_blank">
                    {{ $store.state.global.author_name }}</a>
        </el-col>
    </el-row>
</template>
