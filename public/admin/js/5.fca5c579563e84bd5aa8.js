webpackJsonp([5],{"27qM":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-collapse-item"},[a("div",{staticClass:"el-collapse-item__header",class:{"is-disabled":t.isDisabled}},[a("el-button",{staticClass:"sortable-handler",attrs:{disabled:t.isDisabled,type:"text"}},[a("font-awesome-icon",{attrs:{icon:["fal","arrows"]}})],1),t._v("\n    "+t._s(t.data.title)+"\n    "),a("div",{staticClass:"el-collapse-item__arrow"},[t.isActive?[a("el-tooltip",{attrs:{effect:"dark",content:t.$t("TOOLBAR_CANCEL"),placement:"top-start"}},[a("el-button",{attrs:{size:"small",plain:""},on:{click:function(e){t.updateActiveItem()}}},[a("font-awesome-icon",{attrs:{icon:["fal","times"]}})],1)],1),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",content:t.$t("TOOLBAR_SAVE"),placement:"top-start"}},[a("el-button",{attrs:{loading:t.saveLoading,type:"primary",size:"small"},on:{click:t.onClickBtnSave}},[a("font-awesome-icon",{attrs:{icon:["fal","save"]}})],1)],1)]:[a("el-tooltip",{attrs:{effect:"dark",content:t.$t("TOOLBAR_EDIT"),placement:"top-start"}},[a("el-button",{attrs:{disabled:t.isDisabled,type:"primary",size:"small",plain:""},on:{click:function(e){t.updateActiveItem(t.data.id)}}},[a("font-awesome-icon",{attrs:{icon:["fal","edit"]}})],1)],1),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",content:t.$t("TOOLBAR_DELETE"),placement:"top-start"}},[a("el-button",{attrs:{disabled:t.isDisabled,type:"danger",size:"small",plain:""},on:{click:function(e){t.onClickBtnDelete(t.data.id)}}},[a("font-awesome-icon",{attrs:{icon:["fal","trash-alt"]}})],1)],1)]],2)],1),t._v(" "),t.isActive?a("div",{staticClass:"el-collapse-item__wrap"},[a("el-form",{ref:"form-data",attrs:{model:t.defaultValue}},[t._l(t.formLabelRefs[t.type],function(e,i){return[a("el-form-item",{attrs:{prop:i,label:t.formLabelRefs[t.type][i]}},"image"===i?[a("MediaInput",{model:{value:t.defaultValue[i],callback:function(e){t.$set(t.defaultValue,i,e)},expression:"defaultValue[key]"}})]:[a("el-input",{model:{value:t.defaultValue[i],callback:function(e){t.$set(t.defaultValue,i,e)},expression:"defaultValue[key]"}})],1)]}),t._v(" "),t.group_fields&&"extrafields"in t.group_fields?a("FieldForm",{attrs:{data:t.defaultValue.extrafields,fields:t.group_fields.extrafields}}):t._e()],2)],1):t._e()])},staticRenderFns:[]}},"3Et3":function(t,e,a){var i=a("TChr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("d6da15ba",i,!0,{})},TChr:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".el-collapse-item__header[data-v-0b8d169b]{cursor:auto;padding-left:8px}.el-collapse-item__header.is-disabled[data-v-0b8d169b]{cursor:not-allowed;background:#e6e6e6}",""])},aXTa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.default={components:{MediaInput:function(){return a.e(68).then(a.bind(null,"Jvbl"))},FieldForm:function(){return a.e(72).then(a.bind(null,"U+D9"))}},props:{category:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},type:{type:String,required:!0},isActive:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1}},data:function(){return{fields:{extrafield_group_id:{list:this.$store.getters.extrafield_group_list,custom_attrs:{label:"title",value:"id"}}},defaultValue:{id:"",title:"",link:"",introtext:"",description:"",category_id:"",language:"",image:"",state:1,featured:0,extrafield_group_id:"",extrafields:{}},saveLoading:!1,formLabelRefs:{slideshow:{title:"Slide 標題",image:"背景圖片"},link:{image:"Logo",title:"連結標題",link:"連結網址",description:"連結描述"},menu:{title:"菜名",introtext:"描述",description:"價錢"},timeline:{title:"標題",description:"描述"}}}},computed:{group_fields:function(){return this.fields.extrafield_group_id.list[this.defaultValue.extrafield_group_id]}},mounted:function(){this.initData()},methods:{onClickBtnDelete:function(t){var e=this;this.$$api_item_delete({data:{ids:[t]},fn:function(t){var a=t.msg;e.$message.success(a),e.$emit("update")}})},onClickBtnSave:function(){var t=this;this.saveLoading=!0,this.category&&(this.defaultValue.category_id=this.category.id,this.defaultValue.language=this.category.language),this.$$api_item_save({data:this.defaultValue,fn:function(e){e.data;var a=e.msg;t.$message.success(a),t.$emit("update"),t.updateActiveItem()},finalFn:function(){t.saveLoading=!1}})},updateActiveItem:function(t){this.$emit("update-active",t)},initData:function(){this.defaultValue=i({},this.defaultValue,this.data)}}}},t2Pn:function(t,e,a){var i=a("VU/8")(a("aXTa"),a("27qM"),!1,function(t){a("3Et3")},"data-v-0b8d169b",null);t.exports=i.exports}});