webpackJsonp([20],{"6D62":function(t,e,i){"use strict";var a=i("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],a=!0,r=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);a=!0);}catch(t){r=!0,n=t}finally{try{!a&&o.return&&o.return()}finally{if(r)throw n}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,a){this.updateStoreFieldList(t,e[t]||e),a?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(s(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),a=n(e,2),s=a[0],o=a[1],l=o?s+" "+i.$t(o):i.$t(s);return r({},t,{tree_list_title:l})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(n){var o=n.data;t.forEach(function(t){if("extrafield_group"===t){o.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(s(o.items[t]));var n=new a.b.Entity("groups"),l=Object(a.a)(o.items[t],[n]);e.handleUpdateField(t,l.entities.groups,i[t],r)}else e.handleUpdateField(t,o.items,i[t],r)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],a=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});a.length>0&&this.$_optionMixin_handleGetFieldList(a,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},JeHt:function(t,e,i){"use strict";function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function o(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function l(t,e,i){return Object.keys(t).reduce(function(e,a){var r=""+a;return e.has(r)?e.set(r,i(e.get(r),t[r])):e},e)}i.d(e,"a",function(){return k}),i.d(e,"b",function(){return $});var u=function(t){return function(e){return o(e)?e.get(t):e[t]}},c=function(){function t(t,e,i){if(void 0===e&&(e={}),void 0===i&&(i={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var a=i,r=a.idAttribute,s=void 0===r?"id":r,o=a.mergeStrategy,l=void 0===o?function(t,e){return n({},t,e)}:o,c=a.processStrategy,d=void 0===c?function(t){return n({},t)}:c,f=a.fallbackStrategy,h=void 0===f?function(t,e){}:f;this._key=t,this._getId="function"==typeof s?s:u(s),this._idAttribute=s,this._mergeStrategy=l,this._processStrategy=d,this._fallbackStrategy=h,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var a,r=t[i];return n({},e,((a={})[i]=r,a))},this.schema||{})},e.getId=function(t,e,i){return this._getId(t,e,i)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,i,a,r,n){var s=this,o=this.getId(t,e,i),l=this.key;if(l in n||(n[l]={}),o in n[l]||(n[l][o]=[]),n[l][o].some(function(e){return e===t}))return o;n[l][o].push(t);var u=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(e){if(u.hasOwnProperty(e)&&"object"==typeof u[e]){var i=s.schema[e],o="function"==typeof i?i(t):i;u[e]=a(u[e],u,e,o,r,n)}}),r(this,u,t,e,i),o},e.denormalize=function(t,e){var i=this;return o(t)?l(this.schema,t,e):(Object.keys(this.schema).forEach(function(a){if(t.hasOwnProperty(a)){var r=i.schema[a];t[a]=e(t[a],r)}}),t)},r(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),d=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},e.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var a=this.getSchemaAttribute(t,e,i);return this.schema[a]},e.normalizeValue=function(t,e,i,a,r,n){var s=this.inferSchema(t,e,i);if(!s)return t;var o=a(t,e,i,s,r,n);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,i)}},e.denormalizeValue=function(t,e){var i=o(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var a=this.isSingleSchema?void 0:o(t)?t.get("id"):t.id,r=this.isSingleSchema?this.schema:this.schema[i];return e(a||t,r)},r(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),f=function(t){function e(e,i){if(!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,i)||this}s(e,t);var i=e.prototype;return i.normalize=function(t,e,i,a,r,n){return this.normalizeValue(t,e,i,a,r,n)},i.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(d),h=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var i=e.prototype;return i.normalize=function(t,e,i,a,r,s){var o=this;return Object.keys(t).reduce(function(e,i,l){var u,c=t[i];return void 0!==c&&null!==c?n({},e,((u={})[i]=o.normalizeValue(c,t,i,a,r,s),u)):e},{})},i.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(a,r){var s,o=t[r];return n({},a,((s={})[r]=i.denormalizeValue(o,e),s))},{})},e}(d),p=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},m=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},_=function(t,e,i,a,r,n,s){return t=p(t),m(e).map(function(e,o){return r(e,i,a,t,n,s)})},v=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var i=e.prototype;return i.normalize=function(t,e,i,a,r,n){var s=this;return m(t).map(function(t,o){return s.normalizeValue(t,e,i,a,r,n)}).filter(function(t){return void 0!==t&&null!==t})},i.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(d),y=function(t,e,i,a,r,s,o){var l=n({},e);return Object.keys(t).forEach(function(i){var a=t[i],n="function"==typeof a?a(e):a,u=r(e[i],e,i,n,s,o);void 0===u||null===u?delete l[i]:l[i]=u}),l},b=function(t,e,i){if(o(e))return l(t,e,i);var a=n({},e);return Object.keys(t).forEach(function(e){null!=a[e]&&(a[e]=i(a[e],t[e]))}),a},g=function t(e,i,a,r,n,s){return"object"==typeof e&&e?"object"!=typeof r||r.normalize&&"function"==typeof r.normalize?r.normalize(e,i,a,t,n,s):(Array.isArray(r)?_:y)(r,e,i,a,t,n,s):e},$={Array:v,Entity:c,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var a,r=t[i];return n({},e,((a={})[i]=r,a))},this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return y.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return b.apply(void 0,[this.schema].concat(e))},t}(),Union:f,Values:h},k=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var i={},a=function(t){return function(e,i,a,r,n){var s=e.key,o=e.getId(a,r,n);s in t||(t[s]={});var l=t[s][o];t[s][o]=l?e.merge(l,i):i}}(i);return{entities:i,result:g(t,t,null,e,a,{})}}},JtZj:function(t,e,i){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var i=e.type;switch(i){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:i,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},LcrN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[i("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[i("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[i("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[i("el-input",{model:{value:t.defaultValue.alias,callback:function(e){t.$set(t.defaultValue,"alias",e)},expression:"defaultValue.alias"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"site_id",label:t.$t("MENU_FIELD_SITE_NAME_LABEL")}},[i("el-select",{model:{value:t.defaultValue.site_id,callback:function(e){t.$set(t.defaultValue,"site_id",e)},expression:"defaultValue.site_id"}},t._l(t.fields.site_id.list,function(e){return i("el-option",{key:e.id,attrs:{label:e[t.fields.site_id.custom_attrs.label],value:e[t.fields.site_id.custom_attrs.value]}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_ITEM_DESCRIPTION_LABEL")}},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.description,callback:function(e){t.$set(t.defaultValue,"description",e)},expression:"defaultValue.description"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"module_ids",label:t.$t("FIELD_MENU_CHOOSE_MODULE")}},[i("el-checkbox-group",{model:{value:t.defaultValue.params.module_ids,callback:function(e){t.$set(t.defaultValue.params,"module_ids",e)},expression:"defaultValue.params.module_ids"}},t._l(t.fields.module_ids.list,function(e){var a=e.id,r=e.title;return i("el-checkbox",{key:a,attrs:{label:""+a}},[t._v(t._s(r))])}),1)],1)],1)],1)],1)],1),t._v(" "),i("el-aside",{attrs:{width:"300px"}},[i("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),i("div",{staticClass:"content-aside__content"},[i("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[i("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[i("el-select",{model:{value:t.defaultValue.state,callback:function(e){t.$set(t.defaultValue,"state",e)},expression:"defaultValue.state"}},[i("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),i("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}})],1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"parent_id",label:t.$t("OPTION_PARENT_MENU")}},[i("el-select",{model:{value:t.defaultValue.parent_id,callback:function(e){t.$set(t.defaultValue,"parent_id",e)},expression:"defaultValue.parent_id"}},t._l(t.fields.parent_id.list,function(e){return i("el-option",{key:e[t.fields.parent_id.custom_attrs.value],attrs:{label:e[t.fields.parent_id.custom_attrs.label],value:e[t.fields.parent_id.custom_attrs.value]}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"category_id",label:t.$t("OPTION_CATEGORY")}},[i("el-select",{model:{value:t.defaultValue.category_id,callback:function(e){t.$set(t.defaultValue,"category_id",e)},expression:"defaultValue.category_id"}},t._l(t.fields.category_id.list,function(e){return i("el-option",{key:e[t.fields.category_id.custom_attrs.value],attrs:{label:e[t.fields.category_id.custom_attrs.label],value:e[t.fields.category_id.custom_attrs.value]}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"access",label:t.$t("FIELD_ACCESS_LEVEL")}},[i("el-select",{model:{value:t.defaultValue.access,callback:function(e){t.$set(t.defaultValue,"access",e)},expression:"defaultValue.access"}},t._l(t.fields.access.list,function(e){return i("el-option",{key:e[t.fields.access.custom_attrs.value],attrs:{label:e[t.fields.access.custom_attrs.label],value:e[t.fields.access.custom_attrs.value]}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[i("el-select",{model:{value:t.defaultValue.language,callback:function(e){t.$set(t.defaultValue,"language",e)},expression:"defaultValue.language"}},t._l(t.fields.language.list,function(e){return i("el-option",{key:e.id,attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}),1)],1)],1)],1)])],1)},staticRenderFns:[]}},X50X:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,i=t.btn_type,a=t.query;switch(this.$message.success(e),i){case"save":this.$router.push({path:this.$route.path,query:a});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&a.id&&this.handleCheckout(a.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(a.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,i=!1,a=void 0;try{for(var r,n=["item","category","menu","site"][Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var s=r.value;if(t.includes(s))return!0}}catch(t){i=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(i)throw a}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},iqjz:function(t,e,i){var a=i("VU/8")(i("tYke"),i("LcrN"),!1,null,null,null);t.exports=a.exports},tYke:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("6D62"),r=i("X50X"),n=i("JtZj"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.default={name:"MenuEdit",mixins:[a.a,r.a,n.a],data:function(){return{fields:{parent_id:{list:this.$store.getters.menu_list,custom_attrs:{label:"tree_list_title",value:"id"}},category_id:{list:this.$store.getters.menu_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},access:{list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}},language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}},site_id:{list:this.$store.getters.site_list,custom_attrs:{label:"title",value:"id"}},module_ids:{list:this.$store.getters.module_list}},defaultValue:{parent_id:"",category_id:"",title:"",alias:"",description:"",site_id:"",state:1,access:1,language:"",params:{module_ids:[]}}}},created:function(){this.$_optionMixin_updateFieldList({menu:"parent_id",menu_category:"category_id",module:"module_ids",language:"language",viewlevel:"access",site:"site_id"})},methods:{handleCheckout:function(t){this.$$api_menu_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,i=t.submit_data,a=t.btn_type;this.params.id&&(i.id=this.params.id),this.$$api_menu_save({data:i,fn:function(t){var r=t.data,n=t.msg;e.$_editMixin_onSubmitFinish({msg:n,btn_type:a,query:{id:r?r.items.id:i.id}})}})},handleGetData:function(){var t=this;this.$$api_menu_get({pathVar:this.params.id,fn:function(e){var i=e.data;t.defaultValue=s({},t.defaultValue,i.items)}})}}}}});