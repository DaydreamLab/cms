webpackJsonp([13],{"615y":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".page-item[data-v-38c3e212]{padding:12px 0;border-top:1px solid #e4e7ed}.subpage-item[data-v-38c3e212]{padding-bottom:12px}.subpage-item[data-v-38c3e212]:not(:last-child){border-bottom:1px solid #e4e7ed;margin-bottom:12px}",""])},"6D62":function(t,e,i){"use strict";var r=i("JeHt"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],r=!0,n=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,r){this.updateStoreFieldList(t,e[t]||e),r?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(s(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),r=a(e,2),s=r[0],o=r[1],u=o?s+" "+i.$t(o):i.$t(s);return n({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var o=a.data;t.forEach(function(t){if("extrafield_group"===t){o.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(s(o.items[t]));var a=new r.b.Entity("groups"),u=Object(r.a)(o.items[t],[a]);e.handleUpdateField(t,u.entities.groups,i[t],n)}else e.handleUpdateField(t,o.items,i[t],n)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});r.length>0&&this.$_optionMixin_handleGetFieldList(r,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},"8HCM":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{ref:"form-data",staticClass:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[i("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[i("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"parent_id",label:t.$t("OPTION_PARENT_GROUP")}},[i("el-select",{model:{value:t.defaultValue.parent_id,callback:function(e){t.$set(t.defaultValue,"parent_id",e)},expression:"defaultValue.parent_id"}},t._l(t.fields.parent_id.list,function(e){return i("el-option",{key:e[t.fields.parent_id.custom_attrs.value],attrs:{label:e[t.fields.parent_id.custom_attrs.label],value:e[t.fields.parent_id.custom_attrs.value]}})}))],1),t._v(" "),i("el-form-item",{attrs:{prop:"redirect",label:t.$t("OPTION_USER_REDIRECT")}},[i("el-select",{model:{value:t.defaultValue.redirect,callback:function(e){t.$set(t.defaultValue,"redirect",e)},expression:"defaultValue.redirect"}},t._l(t.fields.redirect.list,function(e){return i("el-option",{key:e[t.fields.redirect.custom_attrs.value],attrs:{label:e[t.fields.redirect.custom_attrs.label],value:e[t.fields.redirect.custom_attrs.value]}})}))],1),t._v(" "),t._l(t.fields.asset_ids.list,function(e){return[i("el-row",{key:e.id,staticClass:"page-item"},[i("el-col",{attrs:{span:3}},[i("el-checkbox",{attrs:{label:e.id},model:{value:t.defaultValue.asset_ids,callback:function(e){t.$set(t.defaultValue,"asset_ids",e)},expression:"defaultValue.asset_ids"}},[t._v(t._s(t.$t(e.title)))])],1),t._v(" "),i("el-col",{attrs:{span:21}},t._l(e.children,function(e){return i("el-row",{key:e.id,staticClass:"subpage-item"},[i("el-col",{attrs:{span:6}},[i("el-checkbox",{attrs:{label:e.id},model:{value:t.defaultValue.asset_ids,callback:function(e){t.$set(t.defaultValue,"asset_ids",e)},expression:"defaultValue.asset_ids"}},[t._v(t._s(t.$t(e.title)))])],1),t._v(" "),t.fields.api_ids.list[e.id]?i("el-col",{attrs:{span:18}},t._l(t.fields.api_ids.list[e.id],function(r){return i("el-checkbox",{key:e.id+"-"+r.id,attrs:{label:r.id},model:{value:t.defaultValue.api_ids,callback:function(e){t.$set(t.defaultValue,"api_ids",e)},expression:"defaultValue.api_ids"}},[t._v(t._s(r.method))])})):t._e()],1)}))],1)]})],2)},staticRenderFns:[]}},Cm6Z:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("hgup"),n=i("gcp9");var a=i("6D62"),s=i("X50X"),o=i("JtZj"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.default={name:"UserGroupEdit",mixins:[a.a,s.a,o.a],data:function(){return{fields:{parent_id:{list:this.$store.getters.user_group_list,custom_attrs:{label:"tree_list_title",value:"id"}},redirect:{list:this.$store.getters.asset_list,custom_attrs:{label:"tree_list_title",value:"path"}},asset_ids:{list:[],custom_attrs:{label:"tree_list_title",value:"id"}},api_ids:{list:[],custom_attrs:{label:"method",value:"id"}}},defaultValue:{parent_id:1,title:"",redirect:"",state:1,asset_ids:[],api_ids:[]}}},created:function(){this.$_optionMixin_updateFieldList({user_group:"parent_id",asset:"redirect"})},methods:{updateUserPage:function(){var t=this;this.$$api_user_getPages({fn:function(e){var i=e.data.items.assets;t.$store.dispatch("update_user_routes",{routes:i}).then(function(){t.$router.push({path:t.$route.path.replace("/edit","")})})}})},isUsersGroup:function(){return this.$store.state.user.user_info.groups.map(function(t){return t.id}).includes(this.params.id)},handleSubmit:function(t){var e=this,i=t.submit_data,r=t.btn_type;this.params.id&&(i.id=this.params.id),this.$$api_user_saveGroup({data:i,fn:function(t){var n=t.data,a=t.msg;isUsersGroup?e.updateUserPage():e.$_editMixin_onSubmitFinish({msg:a,btn_type:r,query:{id:n?n.items.id:i.id}})}})},handleGetFieldList:function(){var t=this;this.$$api_user_groupPages({pathVar:this.params.pid,fn:function(e){var i=e.data.items,r=i.assets,n=i.apis;t.fields.asset_ids.list=r,t.fields.api_ids.list=n}})},handleGetData:function(){var t=this;this.$$api_user_getGroup({pathVar:this.params.id,fn:function(e){var i,a,s=e.data;t.defaultValue=u({},t.defaultValue,s.items,{api_ids:s.items.apis,asset_ids:s.items.assets}),i="assignAccess",(!(a=r.a.state.user.user_access[n.a.currentRoute.meta.id])||a.includes(i))&&t.handleGetFieldList()}})}}}},JeHt:function(t,e,i){"use strict";function r(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function n(t,e,i){return Object.keys(t).reduce(function(e,r){var n=""+r;return e.has(n)?e.set(n,i(e.get(n),t[n])):e},e)}i.d(e,"b",function(){return O}),i.d(e,"a",function(){return S});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function(t){return function(e){return r(e)?e.get(t):e[t]}},f=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var n=r.idAttribute,a=void 0===n?"id":n,o=r.mergeStrategy,l=void 0===o?function(t,e){return u({},t,e)}:o,c=r.processStrategy,f=void 0===c?function(t){return u({},t)}:c;this._key=e,this._getId="function"==typeof a?a:d(a),this._idAttribute=a,this._mergeStrategy=l,this._processStrategy=f,this.define(i)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,n=t[i];return u({},e,((r={})[i]=n,r))},this.schema||{})},t.prototype.getId=function(t,e,i){return this._getId(t,e,i)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,i,r,n){var s=this,o=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(t){if(o.hasOwnProperty(t)&&"object"===a(o[t])){var e=s.schema[t];o[t]=r(o[t],o,t,e,n)}}),n(this,o,t,e,i),this.getId(t,e,i)},t.prototype.denormalize=function(t,e){var i=this;return r(t)?n(this.schema,t,e):(Object.keys(this.schema).forEach(function(r){if(t.hasOwnProperty(r)){var n=i.schema[r];t[r]=e(t[r],n)}}),t)},o(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),h=function(){function t(e,i){s(this,t),i&&(this._schemaAttribute="string"==typeof i?function(t){return t[i]}:i),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},t.prototype.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,i);return this.schema[r]},t.prototype.normalizeValue=function(t,e,i,r,n){var a=this.inferSchema(t,e,i);if(!a)return t;var s=r(t,e,i,a,n);return this.isSingleSchema||void 0===s||null===s?s:{id:s,schema:this.getSchemaAttribute(t,e,i)}},t.prototype.denormalizeValue=function(t,e){var i=r(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var n=r(t)?t.get("id"):t.id,a=this.isSingleSchema?this.schema:this.schema[i];return e(n||t,a)},o(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(i,r){if(s(this,e),!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return c(this,t.call(this,i,r))}return l(e,t),e.prototype.normalize=function(t,e,i,r,n){return this.normalizeValue(t,e,i,r,n)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(h),m=function(t){function e(){return s(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.prototype.normalize=function(t,e,i,r,n){var a=this;return Object.keys(t).reduce(function(e,i,s){var o,l=t[i];return void 0!==l&&null!==l?u({},e,((o={})[i]=a.normalizeValue(l,t,i,r,n),o)):e},{})},e.prototype.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(r,n){var a,s=t[n];return u({},r,((a={})[n]=i.denormalizeValue(s,e),a))},{})},e}(h),_=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},y=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},v=function(t,e,i,r,n,a){return t=_(t),y(e).map(function(e,s){return n(e,i,r,t,a)})},b=function(t){function e(){return s(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.prototype.normalize=function(t,e,i,r,n){var a=this;return y(t).map(function(t,s){return a.normalizeValue(t,e,i,r,n)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(h),g=function(t,e,i,r,n,a){var s=u({},e);return Object.keys(t).forEach(function(i){var r=t[i],o=n(e[i],e,i,r,a);void 0===o||null===o?delete s[i]:s[i]=o}),s},$=function(t,e,i){if(r(e))return n(t,e,i);var a=u({},e);return Object.keys(t).forEach(function(e){a[e]&&(a[e]=i(a[e],t[e]))}),a},k=function(){function t(e){s(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,n=t[i];return u({},e,((r={})[i]=n,r))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return $.apply(void 0,[this.schema].concat(e))},t}(),O={Array:b,Entity:f,Object:k,Union:p,Values:m},S=function(t,e){if(!t||"object"!==(void 0===t?"undefined":a(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":a(t))+'".');var i={},r=function(t){return function(e,i,r,n,a){var s=e.key,o=e.getId(r,n,a);s in t||(t[s]={});var u=t[s][o];t[s][o]=u?e.merge(u,i):i}}(i);return{entities:i,result:function t(e,i,r,n,s){return"object"===(void 0===e?"undefined":a(e))&&e?"object"!==(void 0===n?"undefined":a(n))||n.normalize&&"function"==typeof n.normalize?n.normalize(e,i,r,t,s):(Array.isArray(n)?v:g)(n,e,i,r,t,s):e}(t,t,null,e,r)}}},JtZj:function(t,e,i){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var i=e.type;switch(i){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:i,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},NREM:function(t,e,i){var r=i("VU/8")(i("Cm6Z"),i("8HCM"),!1,function(t){i("rDF0")},"data-v-38c3e212",null);t.exports=r.exports},X50X:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,i=t.btn_type,r=t.query;switch(this.$message.success(e),i){case"save":this.$router.push({path:this.$route.path,query:r});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&r.id&&this.handleCheckout(r.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(r.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,i=!1,r=void 0;try{for(var n,a=["item","category","menu"][Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var s=n.value;if(t.includes(s))return!0}}catch(t){i=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw r}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},rDF0:function(t,e,i){var r=i("615y");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("474ad15a",r,!0,{})}});