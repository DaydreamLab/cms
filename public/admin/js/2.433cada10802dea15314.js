webpackJsonp([2],{139:function(e,t,a){var r=a(140);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(134)("3603b53a",r,!0,{})},140:function(e,t,a){(e.exports=a(133)(!1)).push([e.i,".login-wrapper[data-v-244e54f2]{background:-webkit-gradient(linear,left top,right top,from(#3f6c95),to(#2f3855));background:linear-gradient(90deg,#3f6c95 0,#2f3855);height:100vh}.login-form[data-v-244e54f2]{position:absolute;max-width:600px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;border-radius:4px;padding:30px}.btn--help[data-v-244e54f2]{margin-top:10px}",""])},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(5);t.default={name:"login",data:function(){var e=this;return{remember:this.$store.state.user.remember,password_visible:!1,login_visibel:!1,login_loading:!1,data:{email:"",password:""},rule_data:{email:[{validator:function(t,a,r){""===a?r(new Error(e.$t("ERROR_PLEASE_ENTER_USER_NAME"))):r()},trigger:"blur"},{type:"email",message:this.$t("ERROR_PLEASE_ENTER_VALID_EMAIL"),trigger:"blur"}],password:[{validator:function(t,a,r){""===a?r(new Error(e.$t("ERROR_PLEASE_ENTER_PASSWORD"))):r()},trigger:"blur"}]}}},methods:{togglePassword:function(){this.password_visible=!this.password_visible},onLogin:function(e){var t=this;this.$refs[e].validate(function(a){a&&(t.login_loading=!0,t.$$api_user_login({data:t[e],fn:function(a){var o=a.data,i=a.msg;t.$message.success(i),!0===t.remember.remember_flag?t.$store.dispatch("update_remember",{remember_flag:t.remember.remember_flag,remember_login_info:{email:t[e].email,token:o.items.token}}):t.$store.dispatch("remove_remember");o.items.id;var s=o.items.redirect;t.$store.dispatch("update_userinfo",o.items).then(function(){t.$$api_setting_get({fn:function(e){var a=e.data;t.$store.commit("set_language",a.items.locale_admin)}}),t.$$api_site_list({fn:function(e){var a=e.data;t.$store.commit("update_site_list",a.items)}}),t.$$api_user_getAPIs({fn:function(e){var a=e.data;t.$store.dispatch("update_user_apis",a.items)}}),t.$$api_user_getRoutes({fn:function(e){var a=e.data;t.login_loading=!1;var o=a.items;t.$router.options.routes=Object(r.c)(o),t.$router.addRoutes(t.$router.options.routes),t.$store.dispatch("update_user_routes",{routes:o,redirect:s}).then(function(){t.$router.push(s)})}})})},errFn:function(e){t.$message.error(e.message),t.login_loading=!1},tokenFlag:!0}))})}},mounted:function(){this.$store.state.global.is_login_refresh&&(this.$router.go(0),this.$store.commit("update_login_refresh",{type:!1})),!0===this.remember.remember_flag&&(this.data.email=this.remember.remember_login_info.email)}}},155:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"content login-wrapper"},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.login_loading,expression:"login_loading"}],ref:"data",staticClass:"login-form",attrs:{"label-position":"left","element-loading-text":e.$t("LOGIN_LOADING_TEXT"),model:e.data,rules:e.rule_data}},[a("el-form-item",{staticClass:"text-center login-header"},[a("svg-icon",{staticStyle:{width:"100%",height:"45px"},attrs:{"icon-class":"logo"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"email"}},[a("el-input",{attrs:{type:"email","auto-complete":"off",placeholder:e.$t("GLOBAL_USERNAME")},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:e.password_visible?"text":"password","auto-complete":"off",placeholder:e.$t("GLOBAL_PASSWORD")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.onLogin("data",!0)}},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}},[a("el-button",{attrs:{slot:"append"},on:{click:e.togglePassword},slot:"append"},[a("font-awesome-icon",{attrs:{icon:["fal",e.password_visible?"eye":"eye-slash"]}})],1)],1)],1),e._v(" "),a("el-form-item",[a("el-checkbox",{attrs:{checked:e.remember.remember_flag},model:{value:e.remember.remember_flag,callback:function(t){e.$set(e.remember,"remember_flag",t)},expression:"remember.remember_flag"}},[e._v(e._s(e.$t("GLOBAL_REMEMBER_ME")))])],1),e._v(" "),a("el-button",{staticClass:"is-block",attrs:{type:"primary"},on:{click:function(t){e.onLogin("data")}}},[e._v(e._s(e.$t("LOGIN")))])],1)],1)])],1)],1)},staticRenderFns:[]}},7:function(e,t,a){var r=a(0)(a(141),a(155),!1,function(e){a(139)},"data-v-244e54f2",null);e.exports=r.exports}});