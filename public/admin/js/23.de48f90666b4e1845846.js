webpackJsonp([23],{"6D62":function(t,e,a){"use strict";var i=a("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],i=!0,r=!1,n=void 0;try{for(var l,o=t[Symbol.iterator]();!(i=(l=o.next()).done)&&(a.push(l.value),!e||a.length!==e);i=!0);}catch(t){r=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw n}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,a,i){this.updateStoreFieldList(t,e[t]||e),i?this.updateSearchbarFieldList(t,a):this.updateFieldList(t,a)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var a=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(l(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),i=n(e,2),l=i[0],o=i[1],u=o?l+" "+a.$t(o):a.$t(l);return r({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(n){var o=n.data;t.forEach(function(t){if("extrafield_group"===t){o.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(l(o.items[t]));var n=new i.b.Entity("groups"),u=Object(i.a)(o.items[t],[n]);e.handleUpdateField(t,u.entities.groups,a[t],r)}else e.handleUpdateField(t,o.items,a[t],r)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1],i=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e});i.length>0&&this.$_optionMixin_handleGetFieldList(i,e,a)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},"6Uug":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-width":"100px","label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[a("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[a("el-input",{model:{value:t.defaultValue.alias,callback:function(e){t.$set(t.defaultValue,"alias",e)},expression:"defaultValue.alias"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_CATEGORY_DESCRIPTION_LABEL")}},[a("Editor",{staticClass:"form-item__inner",model:{value:t.defaultValue.description,callback:function(e){t.$set(t.defaultValue,"description",e)},expression:"defaultValue.description"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_METADATA_OPTIONS")}},[a("el-form",[a("el-form-item",{attrs:{prop:"metadesc",label:t.$t("FIELD_META_DESCRIPTION_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metadesc,callback:function(e){t.$set(t.defaultValue,"metadesc",e)},expression:"defaultValue.metadesc"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"metakeywords",label:t.$t("FIELD_META_KEYWORDS_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metakeywords,callback:function(e){t.$set(t.defaultValue,"metakeywords",e)},expression:"defaultValue.metakeywords"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_IMAGE_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"introimage",label:t.$t("CONTENT_FIELD_INTRO_IMAGE_LABEL")}},[a("MediaInput",{model:{value:t.defaultValue.introimage,callback:function(e){t.$set(t.defaultValue,"introimage",e)},expression:"defaultValue.introimage"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"image",label:t.$t("CONTENT_FIELD_MAIN_IMAGE_LABEL")}},[a("MediaInput",{model:{value:t.defaultValue.image,callback:function(e){t.$set(t.defaultValue,"image",e)},expression:"defaultValue.image"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_EXTRAFIELD_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{model:t.defaultValue}},["item"===t.defaultValue.extension&&"article"!==t.defaultValue.content_type?a("el-form-item",{attrs:{prop:"extrafield_group_id",label:t.$t("OPTION_ITEM_EXTRAFIELD_GROUP")}},[a("el-select",{attrs:{clearable:""},model:{value:t.defaultValue.item_extrafield_group_id,callback:function(e){t.$set(t.defaultValue,"item_extrafield_group_id",e)},expression:"defaultValue.item_extrafield_group_id"}},t._l(t.fields.extrafield_group_id.list,function(e){return a("el-option",{key:e[t.fields.extrafield_group_id.custom_attrs.value],attrs:{label:e[t.fields.extrafield_group_id.custom_attrs.label],value:e[t.fields.extrafield_group_id.custom_attrs.value]}})}))],1):t._e(),t._v(" "),a("el-form-item",{attrs:{prop:"extrafield_group_id",label:t.$t("OPTION_EXTRAFIELD_GROUP")}},[a("el-select",{attrs:{clearable:""},model:{value:t.defaultValue.extrafield_group_id,callback:function(e){t.$set(t.defaultValue,"extrafield_group_id",e)},expression:"defaultValue.extrafield_group_id"}},t._l(t.fields.extrafield_group_id.list,function(e){return a("el-option",{key:e[t.fields.extrafield_group_id.custom_attrs.value],attrs:{label:e[t.fields.extrafield_group_id.custom_attrs.label],value:e[t.fields.extrafield_group_id.custom_attrs.value]}})}))],1)],1),t._v(" "),t.fields.extrafield_group_id.list[t.defaultValue.extrafield_group_id]&&"extrafields"in t.fields.extrafield_group_id.list[t.defaultValue.extrafield_group_id]?[a("FieldForm",{attrs:{fields:t.fields.extrafield_group_id.list[t.defaultValue.extrafield_group_id].extrafields,data:t.defaultValue.extrafields},on:{"update:data":function(e){t.$set(t.defaultValue,"extrafields",e)}}})]:t._e()],2),t._v(" "),"item"===t.defaultValue.extension&&"article"!==t.defaultValue.content_type?a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_CONTENT_MANAGE_PREFIX",{name:t.$t("OPTION_CONTENT_TYPE_"+t.defaultValue.content_type.toUpperCase())})}},[t.params.id?a("ItemList",{attrs:{type:t.defaultValue.content_type,category:{id:t.params.id,language:t.defaultValue.language,item_extrafield:t.defaultValue.item_extrafield_group_id}}}):a("div",[t._v("請先儲存分類")])],1):t._e()],1)],1),t._v(" "),a("el-aside",{attrs:{width:"300px"}},[a("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),a("div",{staticClass:"content-aside__content"},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[a("el-select",{model:{value:t.defaultValue.state,callback:function(e){t.$set(t.defaultValue,"state",e)},expression:"defaultValue.state"}},[a("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),a("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"parent_id",label:t.$t("OPTION_PARENT_CATEGORY")}},[a("el-select",{model:{value:t.defaultValue.parent_id,callback:function(e){t.$set(t.defaultValue,"parent_id",e)},expression:"defaultValue.parent_id"}},t._l(t.fields.parent_id.list,function(e){return a("el-option",{key:e[t.fields.parent_id.custom_attrs.value],attrs:{label:e[t.fields.parent_id.custom_attrs.label],value:e[t.fields.parent_id.custom_attrs.value]}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"extension",label:t.$t("OPTION_EXTENSION")}},[a("el-select",{model:{value:t.defaultValue.extension,callback:function(e){t.$set(t.defaultValue,"extension",e)},expression:"defaultValue.extension"}},[a("el-option",{attrs:{label:t.$t("OPTION_EXTENSION_MENU"),value:"menu"}}),t._v(" "),a("el-option",{attrs:{label:t.$t("OPTION_EXTENSION_MODULE"),value:"module"}}),t._v(" "),a("el-option",{attrs:{label:t.$t("OPTION_EXTENSION_ITEM"),value:"item"}})],1)],1),t._v(" "),"item"===t.defaultValue.extension?a("el-form-item",{attrs:{prop:"content_type",label:t.$t("OPTION_CONTENT_TYPE")}},[a("el-select",{model:{value:t.defaultValue.content_type,callback:function(e){t.$set(t.defaultValue,"content_type",e)},expression:"defaultValue.content_type"}},t._l(t.fields.content_type.list,function(e){return a("el-option",{key:e[t.fields.content_type.custom_attrs.value],attrs:{label:e[t.fields.content_type.custom_attrs.label],value:e[t.fields.content_type.custom_attrs.value]}})}))],1):t._e(),t._v(" "),a("el-form-item",{attrs:{prop:"access",label:t.$t("FIELD_ACCESS_LEVEL")}},[a("el-select",{model:{value:t.defaultValue.access,callback:function(e){t.$set(t.defaultValue,"access",e)},expression:"defaultValue.access"}},t._l(t.fields.access.list,function(e){return a("el-option",{key:e[t.fields.access.custom_attrs.value],attrs:{label:e[t.fields.access.custom_attrs.label],value:e[t.fields.access.custom_attrs.value]}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[a("el-select",{model:{value:t.defaultValue.language,callback:function(e){t.$set(t.defaultValue,"language",e)},expression:"defaultValue.language"}},t._l(t.fields.language.list,function(e){return a("el-option",{key:e.id,attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}))],1)],1)],1)])],1)},staticRenderFns:[]}},Hxkr:function(t,e,a){var i=a("VU/8")(a("nZYF"),a("6Uug"),!1,null,null,null);t.exports=i.exports},JeHt:function(t,e,a){"use strict";function i(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function r(t,e,a){return Object.keys(t).reduce(function(e,i){var r=""+i;return e.has(r)?e.set(r,a(e.get(r),t[r])):e},e)}a.d(e,"b",function(){return $}),a.d(e,"a",function(){return x});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},s=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function(t){return function(e){return i(e)?e.get(t):e[t]}},f=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(l(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=i.idAttribute,n=void 0===r?"id":r,o=i.mergeStrategy,s=void 0===o?function(t,e){return u({},t,e)}:o,c=i.processStrategy,f=void 0===c?function(t){return u({},t)}:c;this._key=e,this._getId="function"==typeof n?n:d(n),this._idAttribute=n,this._mergeStrategy=s,this._processStrategy=f,this.define(a)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var i,r=t[a];return u({},e,((i={})[a]=r,i))},this.schema||{})},t.prototype.getId=function(t,e,a){return this._getId(t,e,a)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,a,i,r){var l=this,o=this._processStrategy(t,e,a);return Object.keys(this.schema).forEach(function(t){if(o.hasOwnProperty(t)&&"object"===n(o[t])){var e=l.schema[t];o[t]=i(o[t],o,t,e,r)}}),r(this,o,t,e,a),this.getId(t,e,a)},t.prototype.denormalize=function(t,e){var a=this;return i(t)?r(this.schema,t,e):(Object.keys(this.schema).forEach(function(i){if(t.hasOwnProperty(i)){var r=a.schema[i];t[i]=e(t[i],r)}}),t)},o(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),p=function(){function t(e,a){l(this,t),a&&(this._schemaAttribute="string"==typeof a?function(t){return t[a]}:a),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,a){return!this.isSingleSchema&&this._schemaAttribute(t,e,a)},t.prototype.inferSchema=function(t,e,a){if(this.isSingleSchema)return this.schema;var i=this.getSchemaAttribute(t,e,a);return this.schema[i]},t.prototype.normalizeValue=function(t,e,a,i,r){var n=this.inferSchema(t,e,a);if(!n)return t;var l=i(t,e,a,n,r);return this.isSingleSchema||void 0===l||null===l?l:{id:l,schema:this.getSchemaAttribute(t,e,a)}},t.prototype.denormalizeValue=function(t,e){var a=i(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!a)return t;var r=i(t)?t.get("id"):t.id,n=this.isSingleSchema?this.schema:this.schema[a];return e(r||t,n)},o(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),_=function(t){function e(a,i){if(l(this,e),!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return c(this,t.call(this,a,i))}return s(e,t),e.prototype.normalize=function(t,e,a,i,r){return this.normalizeValue(t,e,a,i,r)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(p),h=function(t){function e(){return l(this,e),c(this,t.apply(this,arguments))}return s(e,t),e.prototype.normalize=function(t,e,a,i,r){var n=this;return Object.keys(t).reduce(function(e,a,l){var o,s=t[a];return void 0!==s&&null!==s?u({},e,((o={})[a]=n.normalizeValue(s,t,a,i,r),o)):e},{})},e.prototype.denormalize=function(t,e){var a=this;return Object.keys(t).reduce(function(i,r){var n,l=t[r];return u({},i,((n={})[r]=a.denormalizeValue(l,e),n))},{})},e}(p),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},v=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},y=function(t,e,a,i,r,n){return t=m(t),v(e).map(function(e,l){return r(e,a,i,t,n)})},b=function(t){function e(){return l(this,e),c(this,t.apply(this,arguments))}return s(e,t),e.prototype.normalize=function(t,e,a,i,r){var n=this;return v(t).map(function(t,l){return n.normalizeValue(t,e,a,i,r)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var a=this;return t&&t.map?t.map(function(t){return a.denormalizeValue(t,e)}):t},e}(p),g=function(t,e,a,i,r,n){var l=u({},e);return Object.keys(t).forEach(function(a){var i=t[a],o=r(e[a],e,a,i,n);void 0===o||null===o?delete l[a]:l[a]=o}),l},E=function(t,e,a){if(i(e))return r(t,e,a);var n=u({},e);return Object.keys(t).forEach(function(e){n[e]&&(n[e]=a(n[e],t[e]))}),n},O=function(){function t(e){l(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var i,r=t[a];return u({},e,((i={})[a]=r,i))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return E.apply(void 0,[this.schema].concat(e))},t}(),$={Array:b,Entity:f,Object:O,Union:_,Values:h},x=function(t,e){if(!t||"object"!==(void 0===t?"undefined":n(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":n(t))+'".');var a={},i=function(t){return function(e,a,i,r,n){var l=e.key,o=e.getId(i,r,n);l in t||(t[l]={});var u=t[l][o];t[l][o]=u?e.merge(u,a):a}}(a);return{entities:a,result:function t(e,a,i,r,l){return"object"===(void 0===e?"undefined":n(e))&&e?"object"!==(void 0===r?"undefined":n(r))||r.normalize&&"function"==typeof r.normalize?r.normalize(e,a,i,t,l):(Array.isArray(r)?y:g)(r,e,a,i,t,l):e}(t,t,null,e,i)}}},JtZj:function(t,e,a){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var a=e.type;switch(a){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:a,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},X50X:function(t,e,a){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,a=t.btn_type,i=t.query;switch(this.$message.success(e),a){case"save":this.$router.push({path:this.$route.path,query:i});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(i.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,a=!1,i=void 0;try{for(var r,n=["item","category","menu"][Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var l=r.value;if(t.includes(l))return!0}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},nZYF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("6D62"),r=a("X50X"),n=a("JtZj"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.default={name:"CategoryEdit",components:{Editor:function(){return a.e(70).then(a.bind(null,"iB/f"))},MediaInput:function(){return a.e(68).then(a.bind(null,"Jvbl"))},FieldForm:function(){return a.e(69).then(a.bind(null,"U+D9"))},ItemList:function(){return a.e(6).then(a.bind(null,"G4vn"))}},mixins:[i.a,r.a,n.a],data:function(){return{fields:{parent_id:{list:this.$store.getters.item_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},extrafield_group_id:{list:this.$store.getters.extrafield_group_list,custom_attrs:{label:"title",value:"id"}},access:{list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}},language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}},content_type:{list:[{text:this.$t("OPTION_CONTENT_TYPE_ARTICLE"),value:"article"},{text:this.$t("OPTION_CONTENT_TYPE_MENU"),value:"menu"},{text:this.$t("OPTION_CONTENT_TYPE_TIMELINE"),value:"timeline"},{text:this.$t("OPTION_CONTENT_TYPE_SLIDESHOW"),value:"slideshow"},{text:this.$t("OPTION_CONTENT_TYPE_LINK"),value:"link"}],custom_attrs:{label:"text",value:"value"}}},defaultValue:{title:"",alias:"",description:"",introimage:"",image:"",parent_id:1,state:1,access:1,language:"",updater:"",ordering:"",metadesc:"",metakeywords:"",extension:"item",content_type:"article",extrafield_group_id:"",extrafields:{},item_extrafield_group_id:""}}},created:function(){this.$_optionMixin_updateFieldList({item_category:"parent_id",extrafield_group:"extrafield_group_id",language:"language",viewlevel:"access"})},methods:{handleTrash:function(){var t=this;this.$$api_category_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var a=e.msg;t.$message.success(a),t.$_editMixin_onCancel()}})},handleCheckout:function(t){this.$$api_category_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,a=t.submit_data,i=t.btn_type;this.params.id&&(a.id=this.params.id),this.$$api_category_save({data:a,fn:function(t){var r=t.data,n=t.msg;e.$_editMixin_onSubmitFinish({msg:n,btn_type:i,query:{id:r?r.items.id:a.id,pid:r?r.items.parent_id:a.parent_id}}),e.$_optionMixin_handleGetFieldList(["item_category"],{item_category:"parent_id"})}})},handleGetData:function(){var t=this;this.$$api_category_get({pathVar:this.params.id,fn:function(e){var a=e.data;t.defaultValue=l({},t.defaultValue,a.items)}})}}}}});