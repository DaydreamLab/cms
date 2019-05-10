webpackJsonp([13],{F54R:function(t,e,r){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){switch(e.type){case"cancel":t.$onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({ref:"form-data",type:e.type,submit_data:t.default_value});break;case"trash":t.onTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},JeHt:function(t,e,r){"use strict";function i(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function n(t,e,r){return Object.keys(t).reduce(function(e,i){var n=""+i;return e.has(n)?e.set(n,r(e.get(n),t[n])):e},e)}r.d(e,"b",function(){return O}),r.d(e,"a",function(){return E});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function(t){return function(e){return i(e)?e.get(t):e[t]}},d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var n=i.idAttribute,a=void 0===n?"id":n,s=i.mergeStrategy,l=void 0===s?function(t,e){return u({},t,e)}:s,c=i.processStrategy,d=void 0===c?function(t){return u({},t)}:c;this._key=e,this._getId="function"==typeof a?a:f(a),this._idAttribute=a,this._mergeStrategy=l,this._processStrategy=d,this.define(r)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,r){var i,n=t[r];return u({},e,((i={})[r]=n,i))},this.schema||{})},t.prototype.getId=function(t,e,r){return this._getId(t,e,r)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,r,i,n){var o=this,s=this._processStrategy(t,e,r);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===a(s[t])){var e=o.schema[t];s[t]=i(s[t],s,t,e,n)}}),n(this,s,t,e,r),this.getId(t,e,r)},t.prototype.denormalize=function(t,e){var r=this;return i(t)?n(this.schema,t,e):(Object.keys(this.schema).forEach(function(i){if(t.hasOwnProperty(i)){var n=r.schema[i];t[i]=e(t[i],n)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),h=function(){function t(e,r){o(this,t),r&&(this._schemaAttribute="string"==typeof r?function(t){return t[r]}:r),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,r){return!this.isSingleSchema&&this._schemaAttribute(t,e,r)},t.prototype.inferSchema=function(t,e,r){if(this.isSingleSchema)return this.schema;var i=this.getSchemaAttribute(t,e,r);return this.schema[i]},t.prototype.normalizeValue=function(t,e,r,i,n){var a=this.inferSchema(t,e,r);if(!a)return t;var o=i(t,e,r,a,n);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,r)}},t.prototype.denormalizeValue=function(t,e){var r=i(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!r)return t;var n=i(t)?t.get("id"):t.id,a=this.isSingleSchema?this.schema:this.schema[r];return e(n||t,a)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(r,i){if(o(this,e),!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return c(this,t.call(this,r,i))}return l(e,t),e.prototype.normalize=function(t,e,r,i,n){return this.normalizeValue(t,e,r,i,n)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(h),m=function(t){function e(){return o(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.prototype.normalize=function(t,e,r,i,n){var a=this;return Object.keys(t).reduce(function(e,r,o){var s,l=t[r];return void 0!==l&&null!==l?u({},e,((s={})[r]=a.normalizeValue(l,t,r,i,n),s)):e},{})},e.prototype.denormalize=function(t,e){var r=this;return Object.keys(t).reduce(function(i,n){var a,o=t[n];return u({},i,((a={})[n]=r.denormalizeValue(o,e),a))},{})},e}(h),v=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},y=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},_=function(t,e,r,i,n,a){return t=v(t),y(e).map(function(e,o){return n(e,r,i,t,a)})},b=function(t){function e(){return o(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.prototype.normalize=function(t,e,r,i,n){var a=this;return y(t).map(function(t,o){return a.normalizeValue(t,e,r,i,n)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var r=this;return t&&t.map?t.map(function(t){return r.denormalizeValue(t,e)}):t},e}(h),g=function(t,e,r,i,n,a){var o=u({},e);return Object.keys(t).forEach(function(r){var i=t[r],s=n(e[r],e,r,i,a);void 0===s||null===s?delete o[r]:o[r]=s}),o},$=function(t,e,r){if(i(e))return n(t,e,r);var a=u({},e);return Object.keys(t).forEach(function(e){a[e]&&(a[e]=r(a[e],t[e]))}),a},S=function(){function t(e){o(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,r){var i,n=t[r];return u({},e,((i={})[r]=n,i))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return $.apply(void 0,[this.schema].concat(e))},t}(),O={Array:b,Entity:d,Object:S,Union:p,Values:m},E=function(t,e){if(!t||"object"!==(void 0===t?"undefined":a(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":a(t))+'".');var r={},i=function(t){return function(e,r,i,n,a){var o=e.key,s=e.getId(i,n,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,r):r}}(r);return{entities:r,result:function t(e,r,i,n,o){return"object"===(void 0===e?"undefined":a(e))&&e?"object"!==(void 0===n?"undefined":a(n))||n.normalize&&"function"==typeof n.normalize?n.normalize(e,r,i,t,o):(Array.isArray(n)?_:g)(n,e,r,i,t,o):e}(t,t,null,e,i)}}},SAcT:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-main",[r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[r("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[r("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[r("el-input",{model:{value:t.default_value.title,callback:function(e){t.$set(t.default_value,"title",e)},expression:"default_value.title"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[r("el-input",{model:{value:t.default_value.alias,callback:function(e){t.$set(t.default_value,"alias",e)},expression:"default_value.alias"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_ITEM_DESCRIPTION_LABEL")}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.description,callback:function(e){t.$set(t.default_value,"description",e)},expression:"default_value.description"}})],1)],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_PARAMS_OPTIONS")}},[r("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[r("el-form-item",{attrs:{prop:"category_id",label:t.$t("OPTION_TYPE")}},[r("el-select",{model:{value:t.default_value.category_id,callback:function(e){t.$set(t.default_value,"category_id",e)},expression:"default_value.category_id"}},t._l(t.fields.category_id.list,function(e){return r("el-option",{key:e[t.fields.category_id.custom_attrs.value],attrs:{label:e[t.fields.category_id.custom_attrs.label],value:e[t.fields.category_id.custom_attrs.value]}})}))],1)],1),t._v(" "),t.default_value.params?r("ParamsForm",{attrs:{moduleType:t.normalize_category[t.default_value.category_id].alias,data:t.default_value.params},on:{"update:data":function(e){t.$set(t.default_value,"params",e)}}}):t._e()],1)],1)],1),t._v(" "),r("el-aside",{attrs:{width:"400px"}},[r("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),r("div",{staticClass:"content-aside__content"},[r("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[r("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[r("el-select",{model:{value:t.default_value.state,callback:function(e){t.$set(t.default_value,"state",e)},expression:"default_value.state"}},[r("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),r("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}})],1)],1),t._v(" "),r("el-form-item",{attrs:{prop:"access",label:t.$t("FIELD_ACCESS_LEVEL")}},[r("el-select",{model:{value:t.default_value.access,callback:function(e){t.$set(t.default_value,"access",e)},expression:"default_value.access"}},t._l(t.fields.access.list,function(e){return r("el-option",{key:e[t.fields.access.custom_attrs.value],attrs:{label:e[t.fields.access.custom_attrs.label],value:e[t.fields.access.custom_attrs.value]}})}))],1),t._v(" "),r("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[r("el-select",{model:{value:t.default_value.language,callback:function(e){t.$set(t.default_value,"language",e)},expression:"default_value.language"}},t._l(t.fields.language.list,function(e){return r("el-option",{key:e.id,attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}))],1)],1)],1)])],1)},staticRenderFns:[]}},b6Cg:function(t,e,r){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:function(){this.$initView()}},created:function(){this.$initView()},methods:{$onSubmitFinish:function(t){var e=t.type,r=t.query;switch(e){case"save":this.$router.push({path:this.$route.path,query:r});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$onCancel()}},$onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},onUpdateViewParams:function(){this.params.id=parseInt(this.$route.query.id)||"",this.params.pid=parseInt(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},$initView:function(){this.onUpdateViewParams(),this.params.id&&this.onGetView()}}}},"h+Z4":function(t,e,r){"use strict";var i=r("JeHt"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],i=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);i=!0);}catch(t){n=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.a={methods:{$handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var s=a.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var a=new i.b.Entity("groups"),u=Object(i.a)(s.items[t],[a]);e.handleUpdateField(t,u.entities.groups,r[t],n)}else e.handleUpdateField(t,s.items,r[t],n)})}})},$getFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],i=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});i.length>0&&this.$handleGetFieldList(i,e,r)},handleUpdateField:function(t,e,r,i){this.onUpdateStoreFieldList(t,e[t]||e),i?this.onUpdateSearchbarFieldList(t,r):this.onUpdateFieldList(t,r)},onUpdateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},onUpdateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},onUpdateStoreFieldList:function(t,e){var r=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),i=a(e,2),o=i[0],s=i[1],u=s?o+" "+r.$t(s):r.$t(o);return n({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},iazL:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("JeHt"),n=r("h+Z4"),a=r("b6Cg"),o=r("F54R"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};e.default={name:"module-edit",components:{ParamsForm:function(){return r.e(73).then(r.bind(null,"gWYc"))}},mixins:[n.a,a.a,o.a],data:function(){return{fields:{category_id:{list:this.$store.getters.module_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},access:{list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}},language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}},default_value:{category_id:4,title:"",alias:"",description:"",state:1,access:1,language:"",params:""}}},computed:{normalize_category:function(){var t=new i.b.Entity("types");return Object(i.a)(this.$store.getters.module_category_list,[t]).entities.types}},created:function(){this.$getFieldList({module_category:"category_id",language:"language",viewlevel:"access"})},methods:{handleCheckout:function(t){this.$$api_module_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,r=t.submit_data,i=t.type;this.params.id&&(r.id=this.params.id),this.$$api_module_save({data:r,fn:function(t){var n=t.data,a=t.msg;e.$message.success(a),n&&(r.id=n.items.id),e.$onSubmitFinish({type:i,query:{id:r.id}})}})},onGetView:function(){var t=this;this.$$api_module_get({pathVar:this.params.id,fn:function(e){var r=e.data;t.default_value=s({},t.default_value,r.items)}})}}}},mDKF:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},wgjB:function(t,e,r){var i=r("VU/8")(r("iazL"),r("SAcT"),!1,function(t){r("yPVo")},"data-v-43c4e2fe",null);t.exports=i.exports},yPVo:function(t,e,r){var i=r("mDKF");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("fc09d0fc",i,!0,{})}});