webpackJsonp([19],{"0K7a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("6D62"),n=i("X50X"),a=i("JtZj"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.default={name:"SiteEdit",mixins:[r.a,n.a,a.a],data:function(){return{fields:{sef:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}},defaultValue:(t={title:"",url:"",sef:"",sitename:"",metakeywords:"",metadesc:""},e="sef",i="",e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t)};var t,e,i},created:function(){this.$_optionMixin_updateFieldList({language:"sef"})},methods:{handleTrash:function(){var t=this;this.$$api_site_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var i=e.msg;t.$message.success(i),t.$_editMixin_onCancel()}})},handleCheckout:function(t){this.$$api_site_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,i=t.submit_data,r=t.btn_type;this.params.id&&(i.id=this.params.id),this.$$api_site_save({data:i,fn:function(t){var n=t.data,a=t.msg;e.$_editMixin_onSubmitFinish({msg:a,btn_type:r,query:{id:n?n.items.id:i.id}})}})},handleGetData:function(){var t=this;this.$$api_site_get({pathVar:this.params.id,fn:function(e){var i=e.data;t.defaultValue=o({},t.defaultValue,i.items)}})}}}},"6D62":function(t,e,i){"use strict";var r=i("JeHt"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],r=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(i.push(o.value),!e||i.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,r){this.updateStoreFieldList(t,e[t]||e),r?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),r=a(e,2),o=r[0],s=r[1],u=s?o+" "+i.$t(s):i.$t(o);return n({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var s=a.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var a=new r.b.Entity("groups"),u=Object(r.a)(s.items[t],[a]);e.handleUpdateField(t,u.entities.groups,i[t],n)}else e.handleUpdateField(t,s.items,i[t],n)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});r.length>0&&this.$_optionMixin_handleGetFieldList(r,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},E4yg:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[i("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[i("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[i("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"url",label:t.$t("SITE_FIELD_URL_LABEL")}},[i("el-input",{model:{value:t.defaultValue.url,callback:function(e){t.$set(t.defaultValue,"url",e)},expression:"defaultValue.url"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"sef",label:t.$t("OPTION_LANGUAGE")}},[i("el-select",{model:{value:t.defaultValue.sef,callback:function(e){t.$set(t.defaultValue,"sef",e)},expression:"defaultValue.sef"}},t._l(t.fields.sef.list,function(e){return i("el-option",{key:e.id,attrs:{label:e[t.fields.sef.custom_attrs.label],value:e[t.fields.sef.custom_attrs.value]}})}),1)],1)],1)],1),t._v(" "),i("el-tab-pane",{attrs:{label:t.$t("LANGUAGE_TAB_SITE_NAME_AND_METADATA")}},[i("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[i("el-form-item",{attrs:{prop:"sitename",label:t.$t("LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL")}},[i("el-input",{model:{value:t.defaultValue.sitename,callback:function(e){t.$set(t.defaultValue,"sitename",e)},expression:"defaultValue.sitename"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"metakeywords",label:t.$t("FIELD_META_KEYWORDS_LABEL")}},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metakeywords,callback:function(e){t.$set(t.defaultValue,"metakeywords",e)},expression:"defaultValue.metakeywords"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"metadesc",label:t.$t("FIELD_META_DESCRIPTION_LABEL")}},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metadesc,callback:function(e){t.$set(t.defaultValue,"metadesc",e)},expression:"defaultValue.metadesc"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},JeHt:function(t,e,i){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function s(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function u(t,e,i){return Object.keys(t).reduce(function(e,r){var n=""+r;return e.has(n)?e.set(n,i(e.get(n),t[n])):e},e)}i.d(e,"a",function(){return k}),i.d(e,"b",function(){return $});var l=function(t){return function(e){return s(e)?e.get(t):e[t]}},c=function(){function t(t,e,i){if(void 0===e&&(e={}),void 0===i&&(i={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var r=i,n=r.idAttribute,o=void 0===n?"id":n,s=r.mergeStrategy,u=void 0===s?function(t,e){return a({},t,e)}:s,c=r.processStrategy,f=void 0===c?function(t){return a({},t)}:c,h=r.fallbackStrategy,d=void 0===h?function(t,e){}:h;this._key=t,this._getId="function"==typeof o?o:l(o),this._idAttribute=o,this._mergeStrategy=u,this._processStrategy=f,this._fallbackStrategy=d,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,n=t[i];return a({},e,((r={})[i]=n,r))},this.schema||{})},e.getId=function(t,e,i){return this._getId(t,e,i)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,i,r,n,a){var o=this,s=this.getId(t,e,i),u=this.key;if(u in a||(a[u]={}),s in a[u]||(a[u][s]=[]),a[u][s].some(function(e){return e===t}))return s;a[u][s].push(t);var l=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(e){if(l.hasOwnProperty(e)&&"object"==typeof l[e]){var i=o.schema[e],s="function"==typeof i?i(t):i;l[e]=r(l[e],l,e,s,n,a)}}),n(this,l,t,e,i),s},e.denormalize=function(t,e){var i=this;return s(t)?u(this.schema,t,e):(Object.keys(this.schema).forEach(function(r){if(t.hasOwnProperty(r)){var n=i.schema[r];t[r]=e(t[r],n)}}),t)},n(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),f=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},e.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,i);return this.schema[r]},e.normalizeValue=function(t,e,i,r,n,a){var o=this.inferSchema(t,e,i);if(!o)return t;var s=r(t,e,i,o,n,a);return this.isSingleSchema||void 0===s||null===s?s:{id:s,schema:this.getSchemaAttribute(t,e,i)}},e.denormalizeValue=function(t,e){var i=s(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var r=this.isSingleSchema?void 0:s(t)?t.get("id"):t.id,n=this.isSingleSchema?this.schema:this.schema[i];return e(r||t,n)},n(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),h=function(t){function e(e,i){if(!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,i)||this}o(e,t);var i=e.prototype;return i.normalize=function(t,e,i,r,n,a){return this.normalizeValue(t,e,i,r,n,a)},i.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(f),d=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var i=e.prototype;return i.normalize=function(t,e,i,r,n,o){var s=this;return Object.keys(t).reduce(function(e,i,u){var l,c=t[i];return void 0!==c&&null!==c?a({},e,((l={})[i]=s.normalizeValue(c,t,i,r,n,o),l)):e},{})},i.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(r,n){var o,s=t[n];return a({},r,((o={})[n]=i.denormalizeValue(s,e),o))},{})},e}(f),p=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},m=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},y=function(t,e,i,r,n,a,o){return t=p(t),m(e).map(function(e,s){return n(e,i,r,t,a,o)})},v=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var i=e.prototype;return i.normalize=function(t,e,i,r,n,a){var o=this;return m(t).map(function(t,s){return o.normalizeValue(t,e,i,r,n,a)}).filter(function(t){return void 0!==t&&null!==t})},i.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(f),_=function(t,e,i,r,n,o,s){var u=a({},e);return Object.keys(t).forEach(function(i){var r=t[i],a="function"==typeof r?r(e):r,l=n(e[i],e,i,a,o,s);void 0===l||null===l?delete u[i]:u[i]=l}),u},b=function(t,e,i){if(s(e))return u(t,e,i);var r=a({},e);return Object.keys(t).forEach(function(e){null!=r[e]&&(r[e]=i(r[e],t[e]))}),r},g=function t(e,i,r,n,a,o){return"object"==typeof e&&e?"object"!=typeof n||n.normalize&&"function"==typeof n.normalize?n.normalize(e,i,r,t,a,o):(Array.isArray(n)?y:_)(n,e,i,r,t,a,o):e},$={Array:v,Entity:c,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,n=t[i];return a({},e,((r={})[i]=n,r))},this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return _.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return b.apply(void 0,[this.schema].concat(e))},t}(),Union:h,Values:d},k=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var i={},r=function(t){return function(e,i,r,n,a){var o=e.key,s=e.getId(r,n,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,i):i}}(i);return{entities:i,result:g(t,t,null,e,r,{})}}},JtZj:function(t,e,i){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var i=e.type;switch(i){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:i,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},X50X:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,i=t.btn_type,r=t.query;switch(this.$message.success(e),i){case"save":this.$router.push({path:this.$route.path,query:r});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&r.id&&this.handleCheckout(r.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(r.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,i=!1,r=void 0;try{for(var n,a=["item","category","menu","site"][Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var o=n.value;if(t.includes(o))return!0}}catch(t){i=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw r}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},"o+7q":function(t,e,i){var r=i("VU/8")(i("0K7a"),i("E4yg"),!1,null,null,null);t.exports=r.exports}});