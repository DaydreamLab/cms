<template>
    <el-form
            class="form-data"
            label-width="100px"
            ref='form-data'
            :inline="setting.inline"
            :rules='rules'
            :model='submit_data'>
        <el-form-item
                class='edit-form'
                v-for='(field,index) in fields'
                v-bind="field.attrs || {}"
                :key='index'
                :label="field.label"
                :prop='field.key'
                v-if="((!field.condition || typeof field.condition!=='function') || (typeof field.condition==='function' && field.condition({data: submit_data })===true))">
            <component
                    :Data="field"
                    :SubmitData="submit_data"
                    :SubmitInfo="submit_info"
                    :TempFieldObj="temp_field_obj"
                    :is="components[field.type] || 'DdlInput'"></component>
        </el-form-item>
        <el-form-item v-if="setting.type === 'search'">
            <el-button type="primary" icon="fal fa-search"
                @click='onSubmit({ ref: "form-data" })'>
                {{ $t('SEARCHBAR_SEARCH')/*搜尋*/ }}
            </el-button>
            <el-button @click='onReset("form-data")'>{{ $t('SEARCHBAR_RESET')/*重置*/ }}</el-button> 
        </el-form-item>
    </el-form>
</template>

<script>
import FormDataJs from "./FormData.js";

export default FormDataJs;
</script>
