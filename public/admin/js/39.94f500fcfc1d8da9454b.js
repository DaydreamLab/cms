webpackJsonp([39],{JtZj:function(t,e,a){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var a=e.type;switch(a){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:a,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},PQsn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("X50X"),i=a("JtZj"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t};e.default={name:"TagEdit",mixins:[l.a,i.a],data:function(){return{fields:{language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}},defaultValue:{title:"",alias:"",state:1,access:1,language:"*",ordering:"",parent_id:1,metadesc:"",metakeywords:""}}},methods:{handleSubmit:function(t){var e=this,a=t.submit_data,l=t.btn_type;this.params.id&&(a.id=this.params.id),this.$$api_tag_save({data:a,fn:function(t){var i=t.data,s=t.msg;e.$_editMixin_onSubmitFinish({msg:s,btn_type:l,query:{id:i?i.items.id:a.id}})}})},handleGetData:function(){var t=this;this.$$api_tag_get({pathVar:this.params.id,fn:function(e){var a=e.data;t.defaultValue=s({},t.defaultValue,a.items)}})}}}},SwNa:function(t,e,a){var l=a("VU/8")(a("PQsn"),a("U2tF"),!1,null,null,null);t.exports=l.exports},U2tF:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[a("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[a("el-input",{model:{value:t.defaultValue.alias,callback:function(e){t.$set(t.defaultValue,"alias",e)},expression:"defaultValue.alias"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_METADATA_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"metadesc",label:t.$t("FIELD_META_DESCRIPTION_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metadesc,callback:function(e){t.$set(t.defaultValue,"metadesc",e)},expression:"defaultValue.metadesc"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"metakeywords",label:t.$t("FIELD_META_KEYWORDS_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metakeywords,callback:function(e){t.$set(t.defaultValue,"metakeywords",e)},expression:"defaultValue.metakeywords"}})],1)],1)],1)],1)],1),t._v(" "),a("el-aside",{attrs:{width:"300px"}},[a("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),a("div",{staticClass:"content-aside__content"},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[a("el-select",{model:{value:t.defaultValue.state,callback:function(e){t.$set(t.defaultValue,"state",e)},expression:"defaultValue.state"}},[a("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),a("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[a("el-select",{model:{value:t.defaultValue.language,callback:function(e){t.$set(t.defaultValue,"language",e)},expression:"defaultValue.language"}},t._l(t.fields.language.list,function(e){return a("el-option",{key:e[t.fields.language.custom_attrs.value],attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}),1)],1)],1)],1)])],1)},staticRenderFns:[]}},X50X:function(t,e,a){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,a=t.btn_type,l=t.query;switch(this.$message.success(e),a){case"save":this.$router.push({path:this.$route.path,query:l});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&l.id&&this.handleCheckout(l.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(l.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,a=!1,l=void 0;try{for(var i,s=["item","category","menu","site"][Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var r=i.value;if(t.includes(r))return!0}}catch(t){a=!0,l=t}finally{try{!e&&s.return&&s.return()}finally{if(a)throw l}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}}});