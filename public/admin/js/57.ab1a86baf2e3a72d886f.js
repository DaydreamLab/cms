webpackJsonp([57],{"+V+m":function(t,a,i){var e=i("VU/8")(i("e1Nz"),i("SiB/"),!1,null,null,null);t.exports=e.exports},"7hRh":function(t,a,i){"use strict";a.a=function(t){return{name:t,data:function(){return{}},computed:{data:function(){return this.Data},events:function(){return this.Data.events||{}},submit_data:function(){return this.SubmitData},submit_info:function(){return this.SubmitInfo},temp_field_obj:function(){return this.TempFieldObj},custom_attrs:function(){return this.Data.custom_attrs||{}},label_attr:function(){return this.custom_attrs.label||"text"},value_attr:function(){return this.custom_attrs.value||"value"}},props:{Data:{type:Object,default:function(){return{}}},SubmitData:{type:Object,default:function(){return{}}},SubmitInfo:{type:Object,default:function(){return{}}},TempFieldObj:{type:Object,default:function(){return{}}}},watch:{$route:function(){this.init()}},created:function(){this.setDefaultFieldByNoDefaultValue(),this.setArrayValue()},mounted:function(){this.init()},methods:{setArrayValue:function(){var t=this;this.temp_field_obj[this.data.key]||(this.temp_field_obj[this.data.key]={}),this.data.list&&Array.isArray(this.data.list)&&(this.data.list.forEach(function(a){t.temp_field_obj[t.data.key][void 0!==a[t.value_attr]?a[t.value_attr]:a[t.label_attr]]=void 0!==a[t.label_attr]?a[t.label_attr]:a[t.value_attr]}),void 0!==this.submit_data[this.data.key]&&(Array.isArray(this.submit_data[this.data.key])?(this.submit_info[this.data.key]=[],this.submit_data[this.data.key].forEach(function(a){t.temp_field_obj[t.data.key][a]&&t.submit_info[t.data.key].push(t.temp_field_obj[t.data.key][a])})):(this.submit_info[this.data.key]="",this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]&&(this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]))))},setDefaultFieldByNoDefaultValue:function(){void 0===this.submit_data[this.data.key]&&this.$set(this.submit_data,this.data.key,"")},init:function(){}}}}},"SiB/":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("el-switch",t._b({attrs:{"active-text":t.data.value.on,"inactive-text":t.data.value.off},on:{change:t.onChange},model:{value:t.submit_data[t.data.key],callback:function(a){t.$set(t.submit_data,t.data.key,a)},expression:"submit_data[data.key]"}},"el-switch",t.switch_attrs,!1))},staticRenderFns:[]}},e1Nz:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("7hRh"),s=Object(e.a)("sls-switch");s.mixins=[{computed:{switch_attrs:function(){return this.Data.switch_attrs||{}}},methods:{onChange:function(t){this.submit_info[this.data.key]="",this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][t?"on":"off"],this.events.change&&this.events.change({value:t,info:this.submit_info[this.data.key]})}},created:function(){this.temp_field_obj[this.data.key]={},this.temp_field_obj[this.data.key].on=this.data.value.on,this.temp_field_obj[this.data.key].off=this.data.value.off,this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][this.submit_data[this.data.key]?"on":"off"]}}],a.default=s}});