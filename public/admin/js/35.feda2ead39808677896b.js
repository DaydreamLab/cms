webpackJsonp([35],{F54R:function(t,e,a){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){switch(e.type){case"cancel":t.$onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({ref:"form-data",type:e.type,submit_data:t.default_value});break;case"trash":t.onTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},IePN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[a("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[a("el-input",{model:{value:t.default_value.title,callback:function(e){t.$set(t.default_value,"title",e)},expression:"default_value.title"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"code",label:t.$t("LANGUAGE_FIELD_LANG_TAG_LABEL")}},[a("el-input",{model:{value:t.default_value.code,callback:function(e){t.$set(t.default_value,"code",e)},expression:"default_value.code"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"sef",label:t.$t("LANGUAGE_FIELD_LANG_CODE_LABEL")}},[a("el-input",{model:{value:t.default_value.sef,callback:function(e){t.$set(t.default_value,"sef",e)},expression:"default_value.sef"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_DESCRIPTION_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.description,callback:function(e){t.$set(t.default_value,"description",e)},expression:"default_value.description"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},J2ZC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("b6Cg"),s=a("F54R"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.default={name:"language-edit",mixins:[i.a,s.a],data:function(){return{default_value:{title:"",code:"",sef:"",description:"",state:1,ordering:""}}},methods:{onTrash:function(){var t=this;this.$$api_language_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var a=e.msg;t.$message.success(a),t.onCancel()}})},handleSubmit:function(t){var e=this,a=t.submit_data,i=t.type;this.params.id&&(a.id=this.params.id),this.$$api_language_save({data:a,fn:function(t){var s=t.data,n=t.msg;e.$message.success(n),s&&(a.id=s.items.id),e.$onSubmitFinish({type:i,query:{id:a.id}})}})},onGetView:function(){var t=this;this.$$api_language_get({pathVar:this.params.id,fn:function(e){var a=e.data;t.default_value=n({},t.default_value,a.items)}})}}}},XFpV:function(t,e,a){var i=a("VU/8")(a("J2ZC"),a("IePN"),!1,null,null,null);t.exports=i.exports},b6Cg:function(t,e,a){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:function(){this.$initView()}},created:function(){this.$initView()},methods:{$onSubmitFinish:function(t){var e=t.type,a=t.query;switch(e){case"save":this.$router.push({path:this.$route.path,query:a});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$onCancel()}},$onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},onUpdateViewParams:function(){this.params.id=parseInt(this.$route.query.id)||"",this.params.pid=parseInt(this.$route.query.pid)||"",this.$set(this.toolbar,"type",this.params.id?"edit":"add")},$initView:function(){this.onUpdateViewParams(),this.params.id&&this.onGetView()}}}}});