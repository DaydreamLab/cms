webpackJsonp([54],{"0Orj":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",t._b({attrs:{multiple:!!t.data.multiple,placeholder:t.$t("OPTION_SELECT",{name:t.data.desc}),clearable:!!t.data.clearable},on:{change:t.onChange,"visible-change":t.onVisibleChange,"remove-tag":t.onRemoveTag,clear:t.onClear},model:{value:t.submit_data[t.data.key],callback:function(e){t.$set(t.submit_data,t.data.key,e)},expression:"submit_data[data.key]"}},"el-select",t.select_attrs,!1),t._l(t.data.list,function(e,i){return a("el-option",t._b({key:i,attrs:{value:e[t.value_attr],label:e[t.label_attr]}},"el-option",t.option_attrs,!1))}),1)},staticRenderFns:[]}},"7hRh":function(t,e,a){"use strict";e.a=function(t){return{name:t,props:{fieldData:{type:Object,default:function(){return{}}},submitData:{type:Object,default:function(){return{}}},submitInfo:{type:Object,default:function(){return{}}},tempFieldObj:{type:Object,default:function(){return{}}}},computed:{data:function(){return this.fieldData},events:function(){return this.fieldData.events||{}},submit_data:function(){return this.submitData},submit_info:function(){return this.submitInfo},temp_field_obj:function(){return this.tempFieldObj},custom_attrs:function(){return this.fieldData.custom_attrs||{}},label_attr:function(){return this.custom_attrs.label||"text"},value_attr:function(){return this.custom_attrs.value||"value"}},created:function(){this.setDefaultFieldByNodefaultValue(),this.setArrayValue()},methods:{setArrayValue:function(){var t=this;this.temp_field_obj[this.data.key]||(this.temp_field_obj[this.data.key]={}),this.data.list&&Array.isArray(this.data.list)&&(this.data.list.forEach(function(e){t.temp_field_obj[t.data.key][void 0!==e[t.value_attr]?e[t.value_attr]:e[t.label_attr]]=void 0!==e[t.label_attr]?e[t.label_attr]:e[t.value_attr]}),void 0!==this.submit_data[this.data.key]&&(Array.isArray(this.submit_data[this.data.key])?(this.submit_info[this.data.key]=[],this.submit_data[this.data.key].forEach(function(e){t.temp_field_obj[t.data.key][e]&&t.submit_info[t.data.key].push(t.temp_field_obj[t.data.key][e])})):(this.submit_info[this.data.key]="",this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]&&(this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]))))},setDefaultFieldByNodefaultValue:function(){void 0===this.submit_data[this.data.key]&&this.$set(this.submit_data,this.data.key,"")}}}}},TlSY:function(t,e,a){var i=a("VU/8")(a("ppU9"),a("0Orj"),!1,null,null,null);t.exports=i.exports},ppU9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7hRh"),s=Object(i.a)("sls-select");s.mixins=[{computed:{select_attrs:function(){return this.fieldData.select_attrs||{}},option_attrs:function(){return this.fieldData.option_attrs||{}}},methods:{onChange:function(t){var e=this;t&&(Array.isArray(t)?(this.submit_info[this.data.key]=[],t.forEach(function(t){e.submit_info[e.data.key].push(e.temp_field_obj[e.data.key][t])})):(this.submit_info[this.data.key]="",this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][t])),this.events.change&&this.events.change({value:t,info:this.submit_info[this.data.key]})},onVisibleChange:function(){this.events["visible-change"]&&this.events["visible-change"]()},onRemoveTag:function(){this.events["remove-tag"]&&this.events["remove-tag"]()},onClear:function(){this.events.clear&&this.events.clear()}}}],e.default=s}});