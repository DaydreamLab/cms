webpackJsonp([16],{"0K7a":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("h+Z4"),i=r("b6Cg"),a=r("F54R"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default={name:"site-edit",mixins:[n.a,i.a,a.a],data:function(){return{fields:{sef:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}},default_value:(t={title:"",url:"",sef:"",sitename:"",metakeywords:"",metadesc:""},e="sef",r="",e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t)};var t,e,r},created:function(){this.$getFieldList({language:"sef"})},methods:{onTrash:function(){var t=this;this.$$api_site_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var r=e.msg;t.$message.success(r),t.onCancel()}})},handleCheckout:function(t){this.$$api_site_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,r=t.submit_data,n=t.type;this.params.id&&(r.id=this.params.id),this.$$api_site_save({data:r,fn:function(t){var i=t.data,a=t.msg;e.$message.success(a),i&&(r.id=i.items.id),e.$onSubmitFinish({type:n,query:{id:r.id}})}})},onGetView:function(){var t=this;this.$$api_site_get({pathVar:this.params.id,fn:function(e){var r=e.data;t.default_value=o({},t.default_value,r.items)}})}}}},F54R:function(t,e,r){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){switch(e.type){case"cancel":t.$onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({ref:"form-data",type:e.type,submit_data:t.default_value});break;case"trash":t.onTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},JeHt:function(t,e,r){"use strict";function n(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function i(t,e,r){return Object.keys(t).reduce(function(e,n){var i=""+n;return e.has(i)?e.set(i,r(e.get(i),t[i])):e},e)}r.d(e,"b",function(){return A}),r.d(e,"a",function(){return O});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function(t){return function(e){return n(e)?e.get(t):e[t]}},h=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var i=n.idAttribute,a=void 0===i?"id":i,s=n.mergeStrategy,l=void 0===s?function(t,e){return u({},t,e)}:s,c=n.processStrategy,h=void 0===c?function(t){return u({},t)}:c;this._key=e,this._getId="function"==typeof a?a:f(a),this._idAttribute=a,this._mergeStrategy=l,this._processStrategy=h,this.define(r)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,r){var n,i=t[r];return u({},e,((n={})[r]=i,n))},this.schema||{})},t.prototype.getId=function(t,e,r){return this._getId(t,e,r)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,r,n,i){var o=this,s=this._processStrategy(t,e,r);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===a(s[t])){var e=o.schema[t];s[t]=n(s[t],s,t,e,i)}}),i(this,s,t,e,r),this.getId(t,e,r)},t.prototype.denormalize=function(t,e){var r=this;return n(t)?i(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var i=r.schema[n];t[n]=e(t[n],i)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),d=function(){function t(e,r){o(this,t),r&&(this._schemaAttribute="string"==typeof r?function(t){return t[r]}:r),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,r){return!this.isSingleSchema&&this._schemaAttribute(t,e,r)},t.prototype.inferSchema=function(t,e,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,r);return this.schema[n]},t.prototype.normalizeValue=function(t,e,r,n,i){var a=this.inferSchema(t,e,r);if(!a)return t;var o=n(t,e,r,a,i);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,r)}},t.prototype.denormalizeValue=function(t,e){var r=n(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!r)return t;var i=n(t)?t.get("id"):t.id,a=this.isSingleSchema?this.schema:this.schema[r];return e(i||t,a)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(r,n){if(o(this,e),!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return c(this,t.call(this,r,n))}return l(e,t),e.prototype.normalize=function(t,e,r,n,i){return this.normalizeValue(t,e,r,n,i)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(d),m=function(t){function e(){return o(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.prototype.normalize=function(t,e,r,n,i){var a=this;return Object.keys(t).reduce(function(e,r,o){var s,l=t[r];return void 0!==l&&null!==l?u({},e,((s={})[r]=a.normalizeValue(l,t,r,n,i),s)):e},{})},e.prototype.denormalize=function(t,e){var r=this;return Object.keys(t).reduce(function(n,i){var a,o=t[i];return u({},n,((a={})[i]=r.denormalizeValue(o,e),a))},{})},e}(d),y=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},v=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},b=function(t,e,r,n,i,a){return t=y(t),v(e).map(function(e,o){return i(e,r,n,t,a)})},_=function(t){function e(){return o(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.prototype.normalize=function(t,e,r,n,i){var a=this;return v(t).map(function(t,o){return a.normalizeValue(t,e,r,n,i)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var r=this;return t&&t.map?t.map(function(t){return r.denormalizeValue(t,e)}):t},e}(d),g=function(t,e,r,n,i,a){var o=u({},e);return Object.keys(t).forEach(function(r){var n=t[r],s=i(e[r],e,r,n,a);void 0===s||null===s?delete o[r]:o[r]=s}),o},$=function(t,e,r){if(n(e))return i(t,e,r);var a=u({},e);return Object.keys(t).forEach(function(e){a[e]&&(a[e]=r(a[e],t[e]))}),a},S=function(){function t(e){o(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,r){var n,i=t[r];return u({},e,((n={})[r]=i,n))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return $.apply(void 0,[this.schema].concat(e))},t}(),A={Array:_,Entity:h,Object:S,Union:p,Values:m},O=function(t,e){if(!t||"object"!==(void 0===t?"undefined":a(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":a(t))+'".');var r={},n=function(t){return function(e,r,n,i,a){var o=e.key,s=e.getId(n,i,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,r):r}}(r);return{entities:r,result:function t(e,r,n,i,o){return"object"===(void 0===e?"undefined":a(e))&&e?"object"!==(void 0===i?"undefined":a(i))||i.normalize&&"function"==typeof i.normalize?i.normalize(e,r,n,t,o):(Array.isArray(i)?b:g)(i,e,r,n,t,o):e}(t,t,null,e,n)}}},b6Cg:function(t,e,r){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:function(){this.$initView()}},created:function(){this.$initView()},methods:{$onSubmitFinish:function(t){var e=t.type,r=t.query;switch(e){case"save":this.$router.push({path:this.$route.path,query:r});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$onCancel()}},$onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},onUpdateViewParams:function(){this.params.id=parseInt(this.$route.query.id)||"",this.params.pid=parseInt(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},$initView:function(){this.onUpdateViewParams(),this.params.id&&this.onGetView()}}}},"h+Z4":function(t,e,r){"use strict";var n=r("JeHt"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.a={methods:{$handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var s=a.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var a=new n.b.Entity("groups"),u=Object(n.a)(s.items[t],[a]);e.handleUpdateField(t,u.entities.groups,r[t],i)}else e.handleUpdateField(t,s.items,r[t],i)})}})},$getFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],n=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});n.length>0&&this.$handleGetFieldList(n,e,r)},handleUpdateField:function(t,e,r,n){this.onUpdateStoreFieldList(t,e[t]||e),n?this.onUpdateSearchbarFieldList(t,r):this.onUpdateFieldList(t,r)},onUpdateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},onUpdateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},onUpdateStoreFieldList:function(t,e){var r=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),n=a(e,2),o=n[0],s=n[1],u=s?o+" "+r.$t(s):r.$t(o);return i({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},"o+7q":function(t,e,r){var n=r("VU/8")(r("0K7a"),r("wKS+"),!1,null,null,null);t.exports=n.exports},"wKS+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-main",[r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[r("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[r("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[r("el-input",{model:{value:t.default_value.title,callback:function(e){t.$set(t.default_value,"title",e)},expression:"default_value.title"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"url",label:t.$t("SITE_FIELD_URL_LABEL")}},[r("el-input",{model:{value:t.default_value.url,callback:function(e){t.$set(t.default_value,"url",e)},expression:"default_value.url"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"sef",label:t.$t("OPTION_LANGUAGE")}},[r("el-select",{model:{value:t.default_value.sef,callback:function(e){t.$set(t.default_value,"sef",e)},expression:"default_value.sef"}},t._l(t.fields.sef.list,function(e){return r("el-option",{key:e.id,attrs:{label:e[t.fields.sef.custom_attrs.label],value:e[t.fields.sef.custom_attrs.value]}})}))],1)],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$t("LANGUAGE_TAB_SITE_NAME_AND_METADATA")}},[r("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[r("el-form-item",{attrs:{prop:"sitename",label:t.$t("LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL")}},[r("el-input",{model:{value:t.default_value.sitename,callback:function(e){t.$set(t.default_value,"sitename",e)},expression:"default_value.sitename"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"metakeywords",label:t.$t("FIELD_META_KEYWORDS_LABEL")}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.metakeywords,callback:function(e){t.$set(t.default_value,"metakeywords",e)},expression:"default_value.metakeywords"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"metadesc",label:t.$t("FIELD_META_DESCRIPTION_LABEL")}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.metadesc,callback:function(e){t.$set(t.default_value,"metadesc",e)},expression:"default_value.metadesc"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}});