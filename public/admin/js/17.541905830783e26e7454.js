webpackJsonp([17],{F54R:function(t,e,i){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){switch(e.type){case"cancel":t.$onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({ref:"form-data",type:e.type,submit_data:t.default_value});break;case"trash":t.onTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},JeHt:function(t,e,i){"use strict";function r(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function a(t,e,i){return Object.keys(t).reduce(function(e,r){var a=""+r;return e.has(a)?e.set(a,i(e.get(a),t[a])):e},e)}i.d(e,"b",function(){return S}),i.d(e,"a",function(){return E});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},u=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function(t){return function(e){return r(e)?e.get(t):e[t]}},f=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var a=r.idAttribute,n=void 0===a?"id":a,s=r.mergeStrategy,u=void 0===s?function(t,e){return l({},t,e)}:s,c=r.processStrategy,f=void 0===c?function(t){return l({},t)}:c;this._key=e,this._getId="function"==typeof n?n:d(n),this._idAttribute=n,this._mergeStrategy=u,this._processStrategy=f,this.define(i)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,a=t[i];return l({},e,((r={})[i]=a,r))},this.schema||{})},t.prototype.getId=function(t,e,i){return this._getId(t,e,i)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,i,r,a){var o=this,s=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===n(s[t])){var e=o.schema[t];s[t]=r(s[t],s,t,e,a)}}),a(this,s,t,e,i),this.getId(t,e,i)},t.prototype.denormalize=function(t,e){var i=this;return r(t)?a(this.schema,t,e):(Object.keys(this.schema).forEach(function(r){if(t.hasOwnProperty(r)){var a=i.schema[r];t[r]=e(t[r],a)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),h=function(){function t(e,i){o(this,t),i&&(this._schemaAttribute="string"==typeof i?function(t){return t[i]}:i),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},t.prototype.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,i);return this.schema[r]},t.prototype.normalizeValue=function(t,e,i,r,a){var n=this.inferSchema(t,e,i);if(!n)return t;var o=r(t,e,i,n,a);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,i)}},t.prototype.denormalizeValue=function(t,e){var i=r(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var a=r(t)?t.get("id"):t.id,n=this.isSingleSchema?this.schema:this.schema[i];return e(a||t,n)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(i,r){if(o(this,e),!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return c(this,t.call(this,i,r))}return u(e,t),e.prototype.normalize=function(t,e,i,r,a){return this.normalizeValue(t,e,i,r,a)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(h),_=function(t){function e(){return o(this,e),c(this,t.apply(this,arguments))}return u(e,t),e.prototype.normalize=function(t,e,i,r,a){var n=this;return Object.keys(t).reduce(function(e,i,o){var s,u=t[i];return void 0!==u&&null!==u?l({},e,((s={})[i]=n.normalizeValue(u,t,i,r,a),s)):e},{})},e.prototype.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(r,a){var n,o=t[a];return l({},r,((n={})[a]=i.denormalizeValue(o,e),n))},{})},e}(h),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},v=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},y=function(t,e,i,r,a,n){return t=m(t),v(e).map(function(e,o){return a(e,i,r,t,n)})},b=function(t){function e(){return o(this,e),c(this,t.apply(this,arguments))}return u(e,t),e.prototype.normalize=function(t,e,i,r,a){var n=this;return v(t).map(function(t,o){return n.normalizeValue(t,e,i,r,a)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(h),g=function(t,e,i,r,a,n){var o=l({},e);return Object.keys(t).forEach(function(i){var r=t[i],s=a(e[i],e,i,r,n);void 0===s||null===s?delete o[i]:o[i]=s}),o},$=function(t,e,i){if(r(e))return a(t,e,i);var n=l({},e);return Object.keys(t).forEach(function(e){n[e]&&(n[e]=i(n[e],t[e]))}),n},O=function(){function t(e){o(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,a=t[i];return l({},e,((r={})[i]=a,r))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return $.apply(void 0,[this.schema].concat(e))},t}(),S={Array:b,Entity:f,Object:O,Union:p,Values:_},E=function(t,e){if(!t||"object"!==(void 0===t?"undefined":n(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":n(t))+'".');var i={},r=function(t){return function(e,i,r,a,n){var o=e.key,s=e.getId(r,a,n);o in t||(t[o]={});var l=t[o][s];t[o][s]=l?e.merge(l,i):i}}(i);return{entities:i,result:function t(e,i,r,a,o){return"object"===(void 0===e?"undefined":n(e))&&e?"object"!==(void 0===a?"undefined":n(a))||a.normalize&&"function"==typeof a.normalize?a.normalize(e,i,r,t,o):(Array.isArray(a)?y:g)(a,e,i,r,t,o):e}(t,t,null,e,r)}}},Rx2K:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[i("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[i("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[i("el-input",{model:{value:t.default_value.title,callback:function(e){t.$set(t.default_value,"title",e)},expression:"default_value.title"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[i("el-input",{model:{value:t.default_value.alias,callback:function(e){t.$set(t.default_value,"alias",e)},expression:"default_value.alias"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"site_id",label:t.$t("MENU_FIELD_SITE_NAME_LABEL")}},[i("el-select",{model:{value:t.default_value.site_id,callback:function(e){t.$set(t.default_value,"site_id",e)},expression:"default_value.site_id"}},t._l(t.fields.site_id.list,function(e){return i("el-option",{key:e.id,attrs:{label:e[t.fields.site_id.custom_attrs.label],value:e[t.fields.site_id.custom_attrs.value]}})}))],1),t._v(" "),i("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_ITEM_DESCRIPTION_LABEL")}},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.description,callback:function(e){t.$set(t.default_value,"description",e)},expression:"default_value.description"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"module_ids",label:t.$t("FIELD_MENU_CHOOSE_MODULE")}},[i("el-checkbox-group",{model:{value:t.default_value.params.module_ids,callback:function(e){t.$set(t.default_value.params,"module_ids",e)},expression:"default_value.params.module_ids"}},t._l(t.fields.module_ids.list,function(e){var r=e.id,a=e.title;return i("el-checkbox",{key:r,attrs:{label:""+r}},[t._v(t._s(a))])}))],1)],1)],1)],1)],1),t._v(" "),i("el-aside",{attrs:{width:"400px"}},[i("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),i("div",{staticClass:"content-aside__content"},[i("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[i("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[i("el-select",{model:{value:t.default_value.state,callback:function(e){t.$set(t.default_value,"state",e)},expression:"default_value.state"}},[i("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),i("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}})],1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"parent_id",label:t.$t("OPTION_PARENT_MENU")}},[i("el-select",{model:{value:t.default_value.parent_id,callback:function(e){t.$set(t.default_value,"parent_id",e)},expression:"default_value.parent_id"}},t._l(t.fields.parent_id.list,function(e){return i("el-option",{key:e[t.fields.parent_id.custom_attrs.value],attrs:{label:e[t.fields.parent_id.custom_attrs.label],value:e[t.fields.parent_id.custom_attrs.value]}})}))],1),t._v(" "),i("el-form-item",{attrs:{prop:"category_id",label:t.$t("OPTION_CATEGORY")}},[i("el-select",{model:{value:t.default_value.category_id,callback:function(e){t.$set(t.default_value,"category_id",e)},expression:"default_value.category_id"}},t._l(t.fields.category_id.list,function(e){return i("el-option",{key:e[t.fields.category_id.custom_attrs.value],attrs:{label:e[t.fields.category_id.custom_attrs.label],value:e[t.fields.category_id.custom_attrs.value]}})}))],1),t._v(" "),i("el-form-item",{attrs:{prop:"access",label:t.$t("FIELD_ACCESS_LEVEL")}},[i("el-select",{model:{value:t.default_value.access,callback:function(e){t.$set(t.default_value,"access",e)},expression:"default_value.access"}},t._l(t.fields.access.list,function(e){return i("el-option",{key:e[t.fields.access.custom_attrs.value],attrs:{label:e[t.fields.access.custom_attrs.label],value:e[t.fields.access.custom_attrs.value]}})}))],1),t._v(" "),i("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[i("el-select",{model:{value:t.default_value.language,callback:function(e){t.$set(t.default_value,"language",e)},expression:"default_value.language"}},t._l(t.fields.language.list,function(e){return i("el-option",{key:e.id,attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}))],1)],1)],1)])],1)},staticRenderFns:[]}},b6Cg:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:function(){this.$initView()}},created:function(){this.$initView()},methods:{$onSubmitFinish:function(t){var e=t.type,i=t.query;switch(e){case"save":this.$router.push({path:this.$route.path,query:i});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$onCancel()}},$onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},onUpdateViewParams:function(){this.params.id=parseInt(this.$route.query.id)||"",this.params.pid=parseInt(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},$initView:function(){this.onUpdateViewParams(),this.params.id&&this.onGetView()}}}},"h+Z4":function(t,e,i){"use strict";var r=i("JeHt"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],r=!0,a=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(i.push(o.value),!e||i.length!==e);r=!0);}catch(t){a=!0,n=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw n}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{$handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments[2];this.$$api_option_list({data:{types:t},fn:function(n){var s=n.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var n=new r.b.Entity("groups"),l=Object(r.a)(s.items[t],[n]);e.handleUpdateField(t,l.entities.groups,i[t],a)}else e.handleUpdateField(t,s.items,i[t],a)})}})},$getFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});r.length>0&&this.$handleGetFieldList(r,e,i)},handleUpdateField:function(t,e,i,r){this.onUpdateStoreFieldList(t,e[t]||e),r?this.onUpdateSearchbarFieldList(t,i):this.onUpdateFieldList(t,i)},onUpdateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},onUpdateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},onUpdateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),r=n(e,2),o=r[0],s=r[1],l=s?o+" "+i.$t(s):i.$t(o);return a({},t,{tree_list_title:l})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},iqjz:function(t,e,i){var r=i("VU/8")(i("tYke"),i("Rx2K"),!1,null,null,null);t.exports=r.exports},tYke:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("h+Z4"),a=i("b6Cg"),n=i("F54R"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.default={name:"menu-edit",mixins:[r.a,a.a,n.a],data:function(){return{fields:{parent_id:{list:this.$store.getters.menu_list,custom_attrs:{label:"tree_list_title",value:"id"}},category_id:{list:this.$store.getters.menu_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},access:{list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}},language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}},site_id:{list:this.$store.getters.site_list,custom_attrs:{label:"title",value:"id"}},module_ids:{list:this.$store.getters.module_list}},default_value:{parent_id:"",category_id:"",title:"",alias:"",description:"",site_id:"",state:1,access:1,language:"",params:{module_ids:[]}}}},created:function(){this.$getFieldList({menu:"parent_id",menu_category:"category_id",module:"module_ids",language:"language",viewlevel:"access",site:"site_id"})},methods:{handleCheckout:function(t){this.$$api_menu_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,i=t.submit_data,r=t.type;this.params.id&&(i.id=this.params.id),this.$$api_menu_save({data:i,fn:function(t){var a=t.data,n=t.msg;e.$message.success(n),a&&(i.id=a.items.id),e.$onSubmitFinish({type:r,query:{id:i.id}})}})},onGetView:function(){var t=this;this.$$api_menu_get({pathVar:this.params.id,fn:function(e){var i=e.data;t.default_value=o({},t.default_value,i.items)}})}}}}});