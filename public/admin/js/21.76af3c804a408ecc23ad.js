webpackJsonp([21],{"6D62":function(t,e,a){"use strict";var i=a("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],i=!0,r=!1,n=void 0;try{for(var l,s=t[Symbol.iterator]();!(i=(l=s.next()).done)&&(a.push(l.value),!e||a.length!==e);i=!0);}catch(t){r=!0,n=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw n}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,a,i){this.updateStoreFieldList(t,e[t]||e),i?this.updateSearchbarFieldList(t,a):this.updateFieldList(t,a)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var a=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(l(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),i=n(e,2),l=i[0],s=i[1],u=s?l+" "+a.$t(s):a.$t(l);return r({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(n){var s=n.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(l(s.items[t]));var n=new i.b.Entity("groups"),u=Object(i.a)(s.items[t],[n]);e.handleUpdateField(t,u.entities.groups,a[t],r)}else e.handleUpdateField(t,s.items,a[t],r)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1],i=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});i.length>0&&this.$_optionMixin_handleGetFieldList(i,e,a)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},JeHt:function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}).apply(this,arguments)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function s(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function u(t,e,a){return Object.keys(t).reduce(function(e,i){var r=""+i;return e.has(r)?e.set(r,a(e.get(r),t[r])):e},e)}a.d(e,"a",function(){return E}),a.d(e,"b",function(){return $});var o=function(t){return function(e){return s(e)?e.get(t):e[t]}},c=function(){function t(t,e,a){if(void 0===e&&(e={}),void 0===a&&(a={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var i=a,r=i.idAttribute,l=void 0===r?"id":r,s=i.mergeStrategy,u=void 0===s?function(t,e){return n({},t,e)}:s,c=i.processStrategy,d=void 0===c?function(t){return n({},t)}:c,f=i.fallbackStrategy,p=void 0===f?function(t,e){}:f;this._key=t,this._getId="function"==typeof l?l:o(l),this._idAttribute=l,this._mergeStrategy=u,this._processStrategy=d,this._fallbackStrategy=p,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var i,r=t[a];return n({},e,((i={})[a]=r,i))},this.schema||{})},e.getId=function(t,e,a){return this._getId(t,e,a)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,a,i,r,n){var l=this,s=this.getId(t,e,a),u=this.key;if(u in n||(n[u]={}),s in n[u]||(n[u][s]=[]),n[u][s].some(function(e){return e===t}))return s;n[u][s].push(t);var o=this._processStrategy(t,e,a);return Object.keys(this.schema).forEach(function(e){if(o.hasOwnProperty(e)&&"object"==typeof o[e]){var a=l.schema[e],s="function"==typeof a?a(t):a;o[e]=i(o[e],o,e,s,r,n)}}),r(this,o,t,e,a),s},e.denormalize=function(t,e){var a=this;return s(t)?u(this.schema,t,e):(Object.keys(this.schema).forEach(function(i){if(t.hasOwnProperty(i)){var r=a.schema[i];t[i]=e(t[i],r)}}),t)},r(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),d=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,a){return!this.isSingleSchema&&this._schemaAttribute(t,e,a)},e.inferSchema=function(t,e,a){if(this.isSingleSchema)return this.schema;var i=this.getSchemaAttribute(t,e,a);return this.schema[i]},e.normalizeValue=function(t,e,a,i,r,n){var l=this.inferSchema(t,e,a);if(!l)return t;var s=i(t,e,a,l,r,n);return this.isSingleSchema||void 0===s||null===s?s:{id:s,schema:this.getSchemaAttribute(t,e,a)}},e.denormalizeValue=function(t,e){var a=s(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!a)return t;var i=this.isSingleSchema?void 0:s(t)?t.get("id"):t.id,r=this.isSingleSchema?this.schema:this.schema[a];return e(i||t,r)},r(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),f=function(t){function e(e,a){if(!a)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,a)||this}l(e,t);var a=e.prototype;return a.normalize=function(t,e,a,i,r,n){return this.normalizeValue(t,e,a,i,r,n)},a.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(d),p=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var a=e.prototype;return a.normalize=function(t,e,a,i,r,l){var s=this;return Object.keys(t).reduce(function(e,a,u){var o,c=t[a];return void 0!==c&&null!==c?n({},e,((o={})[a]=s.normalizeValue(c,t,a,i,r,l),o)):e},{})},a.denormalize=function(t,e){var a=this;return Object.keys(t).reduce(function(i,r){var l,s=t[r];return n({},i,((l={})[r]=a.denormalizeValue(s,e),l))},{})},e}(d),_=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},h=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},m=function(t,e,a,i,r,n,l){return t=_(t),h(e).map(function(e,s){return r(e,a,i,t,n,l)})},v=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var a=e.prototype;return a.normalize=function(t,e,a,i,r,n){var l=this;return h(t).map(function(t,s){return l.normalizeValue(t,e,a,i,r,n)}).filter(function(t){return void 0!==t&&null!==t})},a.denormalize=function(t,e){var a=this;return t&&t.map?t.map(function(t){return a.denormalizeValue(t,e)}):t},e}(d),g=function(t,e,a,i,r,l,s){var u=n({},e);return Object.keys(t).forEach(function(a){var i=t[a],n="function"==typeof i?i(e):i,o=r(e[a],e,a,n,l,s);void 0===o||null===o?delete u[a]:u[a]=o}),u},b=function(t,e,a){if(s(e))return u(t,e,a);var i=n({},e);return Object.keys(t).forEach(function(e){null!=i[e]&&(i[e]=a(i[e],t[e]))}),i},y=function t(e,a,i,r,n,l){return"object"==typeof e&&e?"object"!=typeof r||r.normalize&&"function"==typeof r.normalize?r.normalize(e,a,i,t,n,l):(Array.isArray(r)?m:g)(r,e,a,i,t,n,l):e},$={Array:v,Entity:c,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var i,r=t[a];return n({},e,((i={})[a]=r,i))},this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return g.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return b.apply(void 0,[this.schema].concat(e))},t}(),Union:f,Values:p},E=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var a={},i=function(t){return function(e,a,i,r,n){var l=e.key,s=e.getId(i,r,n);l in t||(t[l]={});var u=t[l][s];t[l][s]=u?e.merge(u,a):a}}(a);return{entities:a,result:y(t,t,null,e,i,{})}}},JtZj:function(t,e,a){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){var a=e.type;switch(a){case"cancel":t.$_editMixin_onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({btn_type:a,submit_data:t.defaultValue});break;case"trash":t.handleTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},Mf0b:function(t,e,a){var i=a("VU/8")(a("epuo"),a("b1J3"),!1,null,null,null);t.exports=i.exports},X50X:function(t,e,a){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,a=t.btn_type,i=t.query;switch(this.$message.success(e),a){case"save":this.$router.push({path:this.$route.path,query:i});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&i.id&&this.handleCheckout(i.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(i.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,a=!1,i=void 0;try{for(var r,n=["item","category","menu","site"][Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var l=r.value;if(t.includes(l))return!0}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},b1J3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[a("el-input",{model:{value:t.defaultValue.title,callback:function(e){t.$set(t.defaultValue,"title",e)},expression:"defaultValue.title"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[a("el-input",{model:{value:t.defaultValue.alias,callback:function(e){t.$set(t.defaultValue,"alias",e)},expression:"defaultValue.alias"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"tags",label:t.$t("OPTION_TAG")}},[a("div",{staticClass:"form-item__inner"},[a("div",{staticClass:"form-item-tags__wrapper"},[t._l(t.defaultValue.tags,function(e){return a("el-tag",{key:e.id,attrs:{"disable-transitions":!1,closable:""},on:{close:function(a){return t.handleTagClose(e)}}},[t._v(t._s(e.title))])}),t._v(" "),a("el-autocomplete",{attrs:{"value-key":"title","fetch-suggestions":t.queryTagSearch,"trigger-on-focus":!1},on:{select:t.handleTagConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleTagConfirm(e)}},model:{value:t.new_tag_value,callback:function(e){t.new_tag_value=e},expression:"new_tag_value"}})],2)])]),t._v(" "),a("el-form-item",{attrs:{prop:"introtext",label:t.$t("FIELD_INTRO_TEXT_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.introtext,callback:function(e){t.$set(t.defaultValue,"introtext",e)},expression:"defaultValue.introtext"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_ITEM_DESCRIPTION_LABEL")}},[a("Editor",{staticClass:"form-item__inner",model:{value:t.defaultValue.description,callback:function(e){t.$set(t.defaultValue,"description",e)},expression:"defaultValue.description"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_METADATA_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"metadesc",label:t.$t("FIELD_META_DESCRIPTION_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metadesc,callback:function(e){t.$set(t.defaultValue,"metadesc",e)},expression:"defaultValue.metadesc"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"metakeywords",label:t.$t("FIELD_META_KEYWORDS_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.defaultValue.metakeywords,callback:function(e){t.$set(t.defaultValue,"metakeywords",e)},expression:"defaultValue.metakeywords"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_IMAGE_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"introimage",label:t.$t("CONTENT_FIELD_INTRO_IMAGE_LABEL")+" "}},[a("MediaInput",{model:{value:t.defaultValue.introimage,callback:function(e){t.$set(t.defaultValue,"introimage",e)},expression:"defaultValue.introimage"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"image"}},[a("template",{slot:"label"},[t._v("\n              "+t._s(t.$t("CONTENT_FIELD_MAIN_IMAGE_LABEL"))+"\n              "),a("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:function(e){return t.$set(t.defaultValue,"image",t.defaultValue.introimage)}}},[t._v(t._s(t.$t("FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL")))])],1),t._v(" "),a("MediaInput",{model:{value:t.defaultValue.image,callback:function(e){t.$set(t.defaultValue,"image",e)},expression:"defaultValue.image"}})],2)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_EXTRAFIELD_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"extrafield_group_id",label:t.$t("OPTION_EXTRAFIELD_GROUP")}},[a("el-select",{attrs:{clearable:""},model:{value:t.defaultValue.extrafield_group_id,callback:function(e){t.$set(t.defaultValue,"extrafield_group_id",e)},expression:"defaultValue.extrafield_group_id"}},t._l(t.fields.extrafield_group_id.list,function(e){return a("el-option",{key:e[t.fields.extrafield_group_id.custom_attrs.value],attrs:{label:e[t.fields.extrafield_group_id.custom_attrs.label],value:e[t.fields.extrafield_group_id.custom_attrs.value]}})}),1)],1)],1),t._v(" "),t.fields.extrafield_group_id.list[t.defaultValue.extrafield_group_id]&&"extrafields"in t.fields.extrafield_group_id.list[t.defaultValue.extrafield_group_id]?[a("FieldForm",{attrs:{fields:t.fields.extrafield_group_id.list[t.defaultValue.extrafield_group_id].extrafields,data:t.defaultValue.extrafields},on:{"update:data":function(e){return t.$set(t.defaultValue,"extrafields",e)}}})]:t._e()],2)],1)],1),t._v(" "),a("el-aside",{attrs:{width:"300px"}},[a("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),a("div",{staticClass:"content-aside__content"},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.defaultValue}},[a("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[a("el-select",{model:{value:t.defaultValue.state,callback:function(e){t.$set(t.defaultValue,"state",e)},expression:"defaultValue.state"}},[a("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),a("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}}),t._v(" "),a("el-option",{attrs:{label:t.$t("TRASHED"),value:-2}})],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"category_id",label:t.$t("OPTION_CATEGORY")}},[a("el-select",{model:{value:t.defaultValue.category_id,callback:function(e){t.$set(t.defaultValue,"category_id",e)},expression:"defaultValue.category_id"}},t._l(t.fields.category_id.list,function(e){return a("el-option",{key:e[t.fields.category_id.custom_attrs.value],attrs:{label:e[t.fields.category_id.custom_attrs.label],value:e[t.fields.category_id.custom_attrs.value]}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"featured",label:t.$t("OPTION_FEATURED")}},[a("el-radio-group",{model:{value:t.defaultValue.featured,callback:function(e){t.$set(t.defaultValue,"featured",e)},expression:"defaultValue.featured"}},[a("el-radio-button",{attrs:{label:"1"}},[t._v(t._s(t.$t("YES")))]),t._v(" "),a("el-radio-button",{attrs:{label:"0"}},[t._v(t._s(t.$t("NO")))])],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"access",label:t.$t("FIELD_ACCESS_LEVEL")}},[a("el-select",{model:{value:t.defaultValue.access,callback:function(e){t.$set(t.defaultValue,"access",e)},expression:"defaultValue.access"}},t._l(t.fields.access.list,function(e){return a("el-option",{key:e[t.fields.access.custom_attrs.value],attrs:{label:e[t.fields.access.custom_attrs.label],value:e[t.fields.access.custom_attrs.value]}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[a("el-select",{model:{value:t.defaultValue.language,callback:function(e){t.$set(t.defaultValue,"language",e)},expression:"defaultValue.language"}},t._l(t.fields.language.list,function(e){return a("el-option",{key:e[t.fields.language.custom_attrs.value],attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"publish_up",label:t.$t("FIELD_PUBLISH_UP_DATE")}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime"},model:{value:t.defaultValue.publish_up,callback:function(e){t.$set(t.defaultValue,"publish_up",e)},expression:"defaultValue.publish_up"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"publish_down",label:t.$t("FIELD_PUBLISH_DOWN_DATE")}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime"},model:{value:t.defaultValue.publish_down,callback:function(e){t.$set(t.defaultValue,"publish_down",e)},expression:"defaultValue.publish_down"}})],1)],1)],1)])],1)},staticRenderFns:[]}},epuo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("JeHt");var i=a("6D62"),r=a("X50X"),n=a("JtZj");e.default={name:"ItemEdit",components:{Editor:function(){return a.e(70).then(a.bind(null,"iB/f"))},MediaInput:function(){return a.e(67).then(a.bind(null,"Jvbl"))},FieldForm:function(){return a.e(69).then(a.bind(null,"U+D9"))}},mixins:[i.a,r.a,n.a],data:function(){return{fields:{category_id:{list:this.$store.getters.item_article_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},extrafield_group_id:{list:this.$store.getters.extrafield_group_list,custom_attrs:{label:"title",value:"id"}},access:{list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}},language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}},defaultValue:{title:"",alias:"",link:"",introtext:"",description:"",tags:[],category_id:"",state:1,featured:0,language:"",access:1,metadesc:"",metakeywords:"",introimage:"",image:"",ordering:"",publish_up:"",publish_down:"",extrafield_group_id:"",extrafields:{}},new_tag_value:""}},created:function(){this.$_optionMixin_updateFieldList({item_article_category:"category_id",extrafield_group:"extrafield_group_id",language:"language",viewlevel:"access"})},methods:{queryTagSearch:function(t,e){this.$$api_tag_list({data:{search:t},fn:function(t){var a=t.data;e(a.items)}}),this.queryString},handleTagClose:function(t){this.defaultValue.tags.splice(this.defaultValue.tags.indexOf(t),1)},handleTagConfirm:function(t){var e=this;"keyup"===t.type?this.$$api_tag_save({data:{title:this.new_tag_value,state:1},fn:function(t){var a=t.data;e.defaultValue.tags.push(a.items),e.new_tag_value=""}}):(this.defaultValue.tags.push(t),this.new_tag_value="")},handleTrash:function(){var t=this;this.$$api_item_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var a=e.msg;t.$message.success(a),t.$_editMixin_onCancel(t.params.id)}})},handleCheckout:function(t){this.$$api_item_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,a=t.submit_data,i=t.btn_type,r=Object.assign({},a);this.params.id&&(r.id=this.params.id),r.publish_up=this.$options.filters.storeDateFormat(r.publish_up),r.publish_down=this.$options.filters.storeDateFormat(r.publish_down),this.$$api_item_save({data:r,fn:function(t){var r=t.data,n=t.msg;e.$_editMixin_onSubmitFinish({msg:n,btn_type:i,query:{id:r?r.items.id:a.id}})}})},handleGetData:function(){var t=this;this.$$api_item_get({pathVar:this.params.id,fn:function(e){var a=e.data;Object.keys(t.defaultValue).forEach(function(e){e in a.items&&(t.defaultValue[e]=a.items[e],"publish_up"===e&&(t.defaultValue[e]=t.$options.filters.displayDateFormat(a.items[e])),"publish_down"===e&&(t.defaultValue[e]=t.$options.filters.displayDateFormat(a.items[e])))})}})}}}}});