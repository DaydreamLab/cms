<template>
    <div>
        <el-input
                type='input'
                v-model="submit_data[data.key]"
                v-bind="attrs"
                :placeholder="data.desc"
                :clearable='data.clearable ? true : false'
                @blur="onBlur"
                @focus="onFocus"
                @change="onChange">
            <template v-if="data.prepend && data.prepend_value" slot="prepend">{{ data.prepend_value }}</template>
            <template v-if="data.append && data.append_value" slot="append">{{ data.append_value }}</template>
        </el-input>
    </div>
</template>
<script>
import Common from "./js/Common";
import InputTextarea from "./js/InputTextarea";
var Js = Common("sls-input");
Js.mixins = [InputTextarea];
export default Js;
</script>