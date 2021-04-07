webpackJsonp([38],{J2ZC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("X50X"),s=a("JtZj"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.default={name:"LanguageEdit",mixins:[i.a,s.a],data:function(){return{fields:{type:{list:[{value:"content",text:this.$t("LANGUAGE_FIELD_TYPE_CONTENT")},{value:"system",text:this.$t("LANGUAGE_FIELD_TYPE_SYSTEM")}],custom_attrs:{label:"text",value:"value"}}},defaultValue:{title:"",code:"",sef:"",description:"",type:"content",state:1,ordering:""}}},methods:{handleTrash:function(){var t=this;this.$$api_language_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var a=e.msg;t.$message.success(a),t.$_editMixin_onCancel()}})},handleSubmit:function(t){var e=this,a=t.submit_data,i=t.btn_type;this.params.id&&(a.id=this.params.id),this.$$api_language_save({data:a,fn:function(t){var s=t.data,n=t.msg;e.$message.success(n),a.id=s.items.id||a.id,e.$_editMixin_onSubmitFinish({btn_type:i,query:{id:a.id}})}})},handleGetData:function(){var t=this;this.$$api_language_get({pathVar:this.params.id,fn:function(e){var a=e.data;t.defaultValue=n({},t.defaultValue,a.items)}})}}}},JtZj:function(t,e,a){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var a=e.type;switch(a){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:a,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},X50X:function(t,e,a){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,a=t.btn_type,i=t.query;switch(this.$message.success(e),a){case"save":this.$router.push({path:this.$route.path,query:i});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&i.id&&this.handleCheckout(i.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(i.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,a=!1,i=void 0;try{for(var s,n=["item","category","menu","site"][Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var l=s.value;if(t.includes(l))return!0}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},XFpV:function(t,e,a){var i=a("VU/8")(a("J2ZC"),a("kPQm"),!1,null,null,null);t.exports=i.exports},kPQm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"type",label:t.$t("OPTION_TYPE")}},[a("el-select",{model:{value:t.defaultValue.type,callback:function(e){t.$set(t.defaultValue,"type",e)},expression:"defaultValue.type"}},t._l(t.fields.type.list,function(e){return a("el-option",{key:e[t.fields.type.custom_attrs.value],attrs:{label:e[t.fields.type.custom_attrs.label],value:e[t.fields.type.custom_attrs.value]}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[a("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"code",label:t.$t("LANGUAGE_FIELD_LANG_TAG_LABEL")}},[a("el-input",{model:{value:t.defaultValue.code,callback:function(e){t.$set(t.defaultValue,"code",e)},expression:"defaultValue.code"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"sef",label:t.$t("LANGUAGE_FIELD_LANG_CODE_LABEL")}},[a("el-input",{model:{value:t.defaultValue.sef,callback:function(e){t.$set(t.defaultValue,"sef",e)},expression:"defaultValue.sef"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_DESCRIPTION_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.description,callback:function(e){t.$set(t.defaultValue,"description",e)},expression:"defaultValue.description"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}});