webpackJsonp([64],{"7hRh":function(t,e,a){"use strict";e.a=function(t){return{name:t,props:{fieldData:{type:Object,default:function(){return{}}},submitData:{type:Object,default:function(){return{}}},submitInfo:{type:Object,default:function(){return{}}},tempFieldObj:{type:Object,default:function(){return{}}}},computed:{data:function(){return this.fieldData},events:function(){return this.fieldData.events||{}},submit_data:function(){return this.submitData},submit_info:function(){return this.submitInfo},temp_field_obj:function(){return this.tempFieldObj},custom_attrs:function(){return this.fieldData.custom_attrs||{}},label_attr:function(){return this.custom_attrs.label||"text"},value_attr:function(){return this.custom_attrs.value||"value"}},created:function(){this.setDefaultFieldByNodefaultValue(),this.setArrayValue()},methods:{setArrayValue:function(){var t=this;this.temp_field_obj[this.data.key]||(this.temp_field_obj[this.data.key]={}),this.data.list&&Array.isArray(this.data.list)&&(this.data.list.forEach(function(e){t.temp_field_obj[t.data.key][void 0!==e[t.value_attr]?e[t.value_attr]:e[t.label_attr]]=void 0!==e[t.label_attr]?e[t.label_attr]:e[t.value_attr]}),void 0!==this.submit_data[this.data.key]&&(Array.isArray(this.submit_data[this.data.key])?(this.submit_info[this.data.key]=[],this.submit_data[this.data.key].forEach(function(e){t.temp_field_obj[t.data.key][e]&&t.submit_info[t.data.key].push(t.temp_field_obj[t.data.key][e])})):(this.submit_info[this.data.key]="",this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]&&(this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]))))},setDefaultFieldByNodefaultValue:function(){void 0===this.submit_data[this.data.key]&&this.$set(this.submit_data,this.data.key,"")}}}}},FwiI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7hRh"),s=Object(i.a)("sls-cascader");s.mixins=[{computed:{cascader_attrs:function(){return this.fieldData.cascader_attrs||{}}},methods:{onDeepGetCityName:function(t,e,a){for(var i=0;i<t.length;i++)if(t[i].id+""==e[a]+""){if(!(a<e.length-1))return void this.temp_field_obj[this.data.key].push(t[i].city);a+=1,this.temp_field_obj[this.data.key].push(t[i].city),this.onDeepGetCityName(t[i].children,e,a)}},onChange:function(t){this.temp_field_obj[this.data.key]=[],this.onDeepGetCityName(this.data.options,t,0),this.submit_info[this.data.key]=this.temp_field_obj[this.data.key],this.events.change&&this.events.change({value:t,info:this.submit_info[this.data.key]})},onActiveItemChange:function(t){this.temp_field_obj[this.data.key]=[],this.onDeepGetCityName(this.data.options,t,0),this.submit_info[this.data.key]=this.temp_field_obj[this.data.key],this.events["active-item-change"]&&this.events["active-item-change"]({value:t,info:this.submit_info[this.data.key]})}},created:function(){this.submit_data[this.data.key]&&Array.isArray(this.submit_data[this.data.key])||(this.submit_data[this.data.key]=[]),this.temp_field_obj[this.data.key]=[]}}],e.default=s},tAmG:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-cascader",t._b({attrs:{placeholder:t.data.desc,options:t.data.options},on:{change:t.onChange,"active-item-change":t.onActiveItemChange},model:{value:t.submit_data[t.data.key],callback:function(e){t.$set(t.submit_data,t.data.key,e)},expression:"submit_data[data.key]"}},"el-cascader",t.cascader_attrs,!1))},staticRenderFns:[]}},zhZL:function(t,e,a){var i=a("VU/8")(a("FwiI"),a("tAmG"),!1,null,null,null);t.exports=i.exports}});