webpackJsonp([66],{"0bev":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("el-cascader",t._b({attrs:{placeholder:t.data.desc,options:t.data.options},on:{change:t.onChange,"active-item-change":t.onActiveItemChange},model:{value:t.submit_data[t.data.key],callback:function(a){t.$set(t.submit_data,t.data.key,a)},expression:"submit_data[data.key]"}},"el-cascader",t.cascader_attrs,!1))},staticRenderFns:[]}},"7hRh":function(t,a,e){"use strict";a.a=function(t){return{name:t,data:function(){return{}},computed:{data:function(){return this.Data},events:function(){return this.Data.events||{}},submit_data:function(){return this.SubmitData},submit_info:function(){return this.SubmitInfo},temp_field_obj:function(){return this.TempFieldObj},custom_attrs:function(){return this.Data.custom_attrs||{}},label_attr:function(){return this.custom_attrs.label||"text"},value_attr:function(){return this.custom_attrs.value||"value"}},props:{Data:{type:Object,default:function(){return{}}},SubmitData:{type:Object,default:function(){return{}}},SubmitInfo:{type:Object,default:function(){return{}}},TempFieldObj:{type:Object,default:function(){return{}}}},watch:{$route:function(){this.init()}},created:function(){this.setDefaultFieldByNoDefaultValue(),this.setArrayValue()},mounted:function(){this.init()},methods:{setArrayValue:function(){var t=this;this.temp_field_obj[this.data.key]||(this.temp_field_obj[this.data.key]={}),this.data.list&&Array.isArray(this.data.list)&&(this.data.list.forEach(function(a){t.temp_field_obj[t.data.key][void 0!==a[t.value_attr]?a[t.value_attr]:a[t.label_attr]]=void 0!==a[t.label_attr]?a[t.label_attr]:a[t.value_attr]}),void 0!==this.submit_data[this.data.key]&&(Array.isArray(this.submit_data[this.data.key])?(this.submit_info[this.data.key]=[],this.submit_data[this.data.key].forEach(function(a){t.temp_field_obj[t.data.key][a]&&t.submit_info[t.data.key].push(t.temp_field_obj[t.data.key][a])})):(this.submit_info[this.data.key]="",this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]&&(this.submit_info[this.data.key]=this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]))))},setDefaultFieldByNoDefaultValue:function(){void 0===this.submit_data[this.data.key]&&this.$set(this.submit_data,this.data.key,"")},init:function(){}}}}},FwiI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7hRh"),s=Object(i.a)("sls-cascader");s.mixins=[{data:function(){return{}},computed:{cascader_attrs:function(){return this.Data.cascader_attrs||{}}},methods:{onDeepGetCityName:function(t,a,e){for(var i=0;i<t.length;i++)if(t[i].id+""==a[e]+""){if(!(e<a.length-1))return void this.temp_field_obj[this.data.key].push(t[i].city);e+=1,this.temp_field_obj[this.data.key].push(t[i].city),this.onDeepGetCityName(t[i].children,a,e)}},onChange:function(t){this.temp_field_obj[this.data.key]=[],this.onDeepGetCityName(this.data.options,t,0),this.submit_info[this.data.key]=this.temp_field_obj[this.data.key],this.events.change&&this.events.change({value:t,info:this.submit_info[this.data.key]})},onActiveItemChange:function(t){this.temp_field_obj[this.data.key]=[],this.onDeepGetCityName(this.data.options,t,0),this.submit_info[this.data.key]=this.temp_field_obj[this.data.key],this.events["active-item-change"]&&this.events["active-item-change"]({value:t,info:this.submit_info[this.data.key]})}},created:function(){this.submit_data[this.data.key]&&Array.isArray(this.submit_data[this.data.key])||(this.submit_data[this.data.key]=[]),this.temp_field_obj[this.data.key]=[]}}],a.default=s},zhZL:function(t,a,e){var i=e("VU/8")(e("FwiI"),e("0bev"),!1,null,null,null);t.exports=i.exports}});