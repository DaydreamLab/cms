webpackJsonp([31],{"/DfP":function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("FormData",{attrs:{"default-value":this.defaultValue,"field-list":this.fields,toolbar:this.toolbar},on:{"on-submit":this.handleSubmit}})},staticRenderFns:[]}},WRjr:function(t,e,a){var s=a("VU/8")(a("h3Or"),a("/DfP"),!1,function(t){a("ksV5")},null,null);t.exports=s.exports},h3Or:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};e.default={name:"SettingEdit",data:function(){return{fields:[{key:"locale",type:"select",label:this.$t("SETTING_FIELD_SITE_LANG_LABEL"),desc:this.$t("OPTION_LANGUAGE"),list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}},{key:"locale_admin",type:"select",label:this.$t("SETTING_FIELD_ADMIN_LANG_LABEL"),desc:this.$t("OPTION_LANGUAGE"),list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}],toolbar:{type:["save"]},defaultValue:{locale:"",locale_admin:""}}},watch:{$route:{immediate:!0,handler:"handleGetData"}},methods:{handleSubmit:function(t){var e=this,a=t.submit_data,s=t.btn_type;this.$$api_setting_save({data:a,fn:function(t){t.data;var a=t.msg;e.$message.success(a),"save"===s&&e.$router.push({path:e.$route.path})}})},handleGetData:function(){var t=this;this.$$api_setting_get({fn:function(e){var a=e.data;t.defaultValue=s({},t.defaultValue,a.items)}})}}}},ksV5:function(t,e,a){var s=a("lV+v");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("2cf2500c",s,!0,{})},"lV+v":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])}});