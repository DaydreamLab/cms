webpackJsonp([27],{R2jR:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},WRjr:function(t,e,a){var s=a("VU/8")(a("h3Or"),a("t/pw"),!1,function(t){a("yDHJ")},null,null);t.exports=s.exports},h3Or:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};e.default={name:"setting-edit",data:function(){return{fields:[{key:"sitename",label:this.$t("SETTING_FIELD_SITE_NAME_LABEL")},{key:"metadesc",label:this.$t("FIELD_META_DESCRIPTION_LABEL")},{key:"metakeywords",label:this.$t("FIELD_META_KEYWORDS_LABEL")},{key:"locale",type:"select",label:this.$t("SETTING_FIELD_SITE_LANG_LABEL"),desc:this.$t("OPTION_LANGUAGE"),list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}},{key:"locale_admin",type:"select",label:this.$t("SETTING_FIELD_ADMIN_LANG_LABEL"),desc:this.$t("OPTION_LANGUAGE"),list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}],toolbar:{type:["save"]},default_value:{sitename:"",metadesc:"",metakeywords:"",locale:"",locale_admin:""}}},watch:{$route:function(){this.init()}},created:function(){this.init()},methods:{onSubmit:function(t){var e=this,a=t.data,s=(t.info,t.type);this.$$api_setting_save({data:a,fn:function(t){t.data;var a=t.msg;switch(e.$message.success(a),s){case"save":e.$router.push({path:e.$route.path})}}})},onGetView:function(){var t=this;this.$$api_setting_get({fn:function(e){var a=e.data;t.default_value=s({},t.default_value,a.items)}})},init:function(){this.onGetView()}}}},"t/pw":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("FormData",{attrs:{FieldList:this.fields,DefaultValue:this.default_value,Toolbar:this.toolbar},on:{onSubmit:this.onSubmit}})],1)},staticRenderFns:[]}},yDHJ:function(t,e,a){var s=a("R2jR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("4e136954",s,!0,{})}});