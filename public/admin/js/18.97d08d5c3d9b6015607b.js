webpackJsonp([18],{"8chu":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_BASIC_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[a("el-form-item",{attrs:{prop:"title",label:t.$t("FIELD_TITLE_LABEL")}},[a("el-input",{model:{value:t.default_value.title,callback:function(e){t.$set(t.default_value,"title",e)},expression:"default_value.title"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"alias",label:t.$t("FIELD_ALIAS_LABEL")}},[a("el-input",{model:{value:t.default_value.alias,callback:function(e){t.$set(t.default_value,"alias",e)},expression:"default_value.alias"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"introtext",label:t.$t("FIELD_INTRO_TEXT_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.introtext,callback:function(e){t.$set(t.default_value,"introtext",e)},expression:"default_value.introtext"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"description",label:t.$t("FIELD_ITEM_DESCRIPTION_LABEL")}},[a("Editor",{staticClass:"form-item__inner",model:{value:t.default_value.description,callback:function(e){t.$set(t.default_value,"description",e)},expression:"default_value.description"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_METADATA_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[a("el-form-item",{attrs:{prop:"metadesc",label:t.$t("FIELD_META_DESCRIPTION_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.metadesc,callback:function(e){t.$set(t.default_value,"metadesc",e)},expression:"default_value.metadesc"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"metakeywords",label:t.$t("FIELD_META_KEYWORDS_LABEL")}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.default_value.metakeywords,callback:function(e){t.$set(t.default_value,"metakeywords",e)},expression:"default_value.metakeywords"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_IMAGE_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[a("el-form-item",{attrs:{prop:"introimage",label:t.$t("CONTENT_FIELD_INTRO_IMAGE_LABEL")}},[a("MediaInput",{attrs:{Data:t.default_value.introimage},on:{onClickBtnSelect:function(e){return t.default_value.introimage=e}}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"image",label:t.$t("CONTENT_FIELD_MAIN_IMAGE_LABEL")}},[a("el-switch",{attrs:{"active-text":t.$t("FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL")},model:{value:t.default_value.image_sameas_introimage,callback:function(e){t.$set(t.default_value,"image_sameas_introimage",e)},expression:"default_value.image_sameas_introimage"}}),t._v(" "),a("MediaInput",{attrs:{Data:t.default_value.image},on:{onClickBtnSelect:function(e){return t.default_value.image=e}}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("GLOBAL_FIELDSET_EXTRAFIELD_OPTIONS")}},[a("el-form",{ref:"form-data",attrs:{model:t.default_value}},[a("el-form-item",{attrs:{prop:"extrafield_group_id",label:t.$t("OPTION_EXTRAFIELD_GROUP")}},[a("el-select",{attrs:{clearable:""},model:{value:t.default_value.extrafield_group_id,callback:function(e){t.$set(t.default_value,"extrafield_group_id",e)},expression:"default_value.extrafield_group_id"}},t._l(t.fields.extrafield_group_id.list,function(e){return a("el-option",{key:e[t.fields.extrafield_group_id.custom_attrs.value],attrs:{label:e[t.fields.extrafield_group_id.custom_attrs.label],value:e[t.fields.extrafield_group_id.custom_attrs.value]}})}))],1)],1),t._v(" "),t.fields.extrafield_group_id.list[t.default_value.extrafield_group_id]&&"extrafields"in t.fields.extrafield_group_id.list[t.default_value.extrafield_group_id]?[a("FieldForm",{attrs:{fields:t.fields.extrafield_group_id.list[t.default_value.extrafield_group_id].extrafields,data:t.default_value.extrafields},on:{"update:data":function(e){t.$set(t.default_value,"extrafields",e)}}})]:t._e()],2)],1)],1),t._v(" "),a("el-aside",{attrs:{width:"400px"}},[a("div",{staticClass:"content-aside__header"},[t._v(t._s(t.$t("GLOBAL_FIELDSET_OPTIONS")))]),t._v(" "),a("div",{staticClass:"content-aside__content"},[a("el-form",{ref:"form-data",attrs:{"label-position":"top",model:t.default_value}},[a("el-form-item",{attrs:{prop:"state",label:t.$t("OPTION_STATE")}},[a("el-select",{model:{value:t.default_value.state,callback:function(e){t.$set(t.default_value,"state",e)},expression:"default_value.state"}},[a("el-option",{attrs:{label:t.$t("PUBLISHED"),value:1}}),t._v(" "),a("el-option",{attrs:{label:t.$t("UNPUBLISHED"),value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"category_id",label:t.$t("OPTION_CATEGORY")}},[a("el-select",{model:{value:t.default_value.category_id,callback:function(e){t.$set(t.default_value,"category_id",e)},expression:"default_value.category_id"}},t._l(t.fields.category_id.list,function(e){return a("el-option",{key:e[t.fields.category_id.custom_attrs.value],attrs:{label:e[t.fields.category_id.custom_attrs.label],value:e[t.fields.category_id.custom_attrs.value]}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"featured",label:t.$t("OPTION_FEATURED")}},[a("el-radio-group",{model:{value:t.default_value.featured,callback:function(e){t.$set(t.default_value,"featured",e)},expression:"default_value.featured"}},[a("el-radio-button",{attrs:{label:"1"}},[t._v(t._s(t.$t("YES")))]),t._v(" "),a("el-radio-button",{attrs:{label:"0"}},[t._v(t._s(t.$t("NO")))])],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"access",label:t.$t("FIELD_ACCESS_LEVEL")}},[a("el-select",{model:{value:t.default_value.access,callback:function(e){t.$set(t.default_value,"access",e)},expression:"default_value.access"}},t._l(t.fields.access.list,function(e){return a("el-option",{key:e[t.fields.access.custom_attrs.value],attrs:{label:e[t.fields.access.custom_attrs.label],value:e[t.fields.access.custom_attrs.value]}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"language",label:t.$t("OPTION_LANGUAGE")}},[a("el-select",{model:{value:t.default_value.language,callback:function(e){t.$set(t.default_value,"language",e)},expression:"default_value.language"}},t._l(t.fields.language.list,function(e){return a("el-option",{key:e[t.fields.language.custom_attrs.value],attrs:{label:e[t.fields.language.custom_attrs.label],value:e[t.fields.language.custom_attrs.value]}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"publish_up",label:t.$t("FIELD_PUBLISH_UP_DATE")}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime"},model:{value:t.default_value.publish_up,callback:function(e){t.$set(t.default_value,"publish_up",e)},expression:"default_value.publish_up"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"publish_down",label:t.$t("FIELD_PUBLISH_DOWN_DATE")}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime"},model:{value:t.default_value.publish_down,callback:function(e){t.$set(t.default_value,"publish_down",e)},expression:"default_value.publish_down"}})],1)],1)],1)])],1)},staticRenderFns:[]}},F54R:function(t,e,a){"use strict";e.a={created:function(){var t=this;this.$$eventBus.$on("onClickCMSFormDataToolbar",function(e){switch(e.type){case"cancel":t.$onCancel(t.$route.query.id);break;case"save":case"savenclose":case"savenadd":t.handleSubmit({ref:"form-data",type:e.type,submit_data:t.default_value});break;case"trash":t.onTrash()}})},mounted:function(){this.initToolbar(this.toolbar)},beforeDestroy:function(){this.initToolbar(),this.$$eventBus.$off("onClickCMSFormDataToolbar")},methods:{initToolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$$eventBus.$emit("onInitToolbar",{name:"CMSFormData",data:t})}}}},JeHt:function(t,e,a){"use strict";function i(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function r(t,e,a){return Object.keys(t).reduce(function(e,i){var r=""+i;return e.has(r)?e.set(r,a(e.get(r),t[r])):e},e)}a.d(e,"b",function(){return O}),a.d(e,"a",function(){return S});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},u=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function(t){return function(e){return i(e)?e.get(t):e[t]}},f=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(l(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=i.idAttribute,n=void 0===r?"id":r,o=i.mergeStrategy,u=void 0===o?function(t,e){return s({},t,e)}:o,c=i.processStrategy,f=void 0===c?function(t){return s({},t)}:c;this._key=e,this._getId="function"==typeof n?n:d(n),this._idAttribute=n,this._mergeStrategy=u,this._processStrategy=f,this.define(a)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var i,r=t[a];return s({},e,((i={})[a]=r,i))},this.schema||{})},t.prototype.getId=function(t,e,a){return this._getId(t,e,a)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,a,i,r){var l=this,o=this._processStrategy(t,e,a);return Object.keys(this.schema).forEach(function(t){if(o.hasOwnProperty(t)&&"object"===n(o[t])){var e=l.schema[t];o[t]=i(o[t],o,t,e,r)}}),r(this,o,t,e,a),this.getId(t,e,a)},t.prototype.denormalize=function(t,e){var a=this;return i(t)?r(this.schema,t,e):(Object.keys(this.schema).forEach(function(i){if(t.hasOwnProperty(i)){var r=a.schema[i];t[i]=e(t[i],r)}}),t)},o(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),_=function(){function t(e,a){l(this,t),a&&(this._schemaAttribute="string"==typeof a?function(t){return t[a]}:a),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,a){return!this.isSingleSchema&&this._schemaAttribute(t,e,a)},t.prototype.inferSchema=function(t,e,a){if(this.isSingleSchema)return this.schema;var i=this.getSchemaAttribute(t,e,a);return this.schema[i]},t.prototype.normalizeValue=function(t,e,a,i,r){var n=this.inferSchema(t,e,a);if(!n)return t;var l=i(t,e,a,n,r);return this.isSingleSchema||void 0===l||null===l?l:{id:l,schema:this.getSchemaAttribute(t,e,a)}},t.prototype.denormalizeValue=function(t,e){var a=i(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!a)return t;var r=i(t)?t.get("id"):t.id,n=this.isSingleSchema?this.schema:this.schema[a];return e(r||t,n)},o(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(a,i){if(l(this,e),!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return c(this,t.call(this,a,i))}return u(e,t),e.prototype.normalize=function(t,e,a,i,r){return this.normalizeValue(t,e,a,i,r)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(_),h=function(t){function e(){return l(this,e),c(this,t.apply(this,arguments))}return u(e,t),e.prototype.normalize=function(t,e,a,i,r){var n=this;return Object.keys(t).reduce(function(e,a,l){var o,u=t[a];return void 0!==u&&null!==u?s({},e,((o={})[a]=n.normalizeValue(u,t,a,i,r),o)):e},{})},e.prototype.denormalize=function(t,e){var a=this;return Object.keys(t).reduce(function(i,r){var n,l=t[r];return s({},i,((n={})[r]=a.denormalizeValue(l,e),n))},{})},e}(_),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},v=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},b=function(t,e,a,i,r,n){return t=m(t),v(e).map(function(e,l){return r(e,a,i,t,n)})},g=function(t){function e(){return l(this,e),c(this,t.apply(this,arguments))}return u(e,t),e.prototype.normalize=function(t,e,a,i,r){var n=this;return v(t).map(function(t,l){return n.normalizeValue(t,e,a,i,r)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var a=this;return t&&t.map?t.map(function(t){return a.denormalizeValue(t,e)}):t},e}(_),y=function(t,e,a,i,r,n){var l=s({},e);return Object.keys(t).forEach(function(a){var i=t[a],o=r(e[a],e,a,i,n);void 0===o||null===o?delete l[a]:l[a]=o}),l},$=function(t,e,a){if(i(e))return r(t,e,a);var n=s({},e);return Object.keys(t).forEach(function(e){n[e]&&(n[e]=a(n[e],t[e]))}),n},E=function(){function t(e){l(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var i,r=t[a];return s({},e,((i={})[a]=r,i))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return y.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return $.apply(void 0,[this.schema].concat(e))},t}(),O={Array:g,Entity:f,Object:E,Union:p,Values:h},S=function(t,e){if(!t||"object"!==(void 0===t?"undefined":n(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":n(t))+'".');var a={},i=function(t){return function(e,a,i,r,n){var l=e.key,o=e.getId(i,r,n);l in t||(t[l]={});var s=t[l][o];t[l][o]=s?e.merge(s,a):a}}(a);return{entities:a,result:function t(e,a,i,r,l){return"object"===(void 0===e?"undefined":n(e))&&e?"object"!==(void 0===r?"undefined":n(r))||r.normalize&&"function"==typeof r.normalize?r.normalize(e,a,i,t,l):(Array.isArray(r)?b:y)(r,e,a,i,t,l):e}(t,t,null,e,i)}}},Mf0b:function(t,e,a){var i=a("VU/8")(a("epuo"),a("8chu"),!1,null,null,null);t.exports=i.exports},b6Cg:function(t,e,a){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:function(){this.$initView()}},created:function(){this.$initView()},methods:{$onSubmitFinish:function(t){var e=t.type,a=t.query;switch(e){case"save":this.$router.push({path:this.$route.path,query:a});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$onCancel()}},$onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},onUpdateViewParams:function(){this.params.id=parseInt(this.$route.query.id)||"",this.params.pid=parseInt(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},$initView:function(){this.onUpdateViewParams(),this.params.id&&this.onGetView()}}}},epuo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("JeHt");var i=a("h+Z4"),r=a("b6Cg"),n=a("F54R");e.default={name:"item-edit",components:{Editor:function(){return a.e(71).then(a.bind(null,"iB/f"))},MediaInput:function(){return a.e(70).then(a.bind(null,"Jvbl"))},FieldForm:function(){return a.e(72).then(a.bind(null,"U+D9"))}},mixins:[i.a,r.a,n.a],data:function(){return{fields:{category_id:{list:this.$store.getters.item_article_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},extrafield_group_id:{list:this.$store.getters.extrafield_group_list,custom_attrs:{label:"title",value:"id"}},access:{list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}},language:{list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}}},default_value:{title:"",alias:"",link:"",introtext:"",description:"",tags:[],category_id:"",state:1,featured:0,language:"",access:1,metadesc:"",metakeywords:"",introimage:"",image:"",image_sameas_introimage:!1,ordering:"",publish_up:"",publish_down:"",extrafield_group_id:"",extrafields:{}},new_tag_value:""}},watch:{"default_value.image_sameas_introimage":function(t){this.default_value.image=t?this.default_value.introimage:""}},created:function(){this.$getFieldList({item_article_category:"category_id",extrafield_group:"extrafield_group_id",language:"language",viewlevel:"access"})},methods:{queryTagSearch:function(t,e){this.$$api_tag_list({data:{search:t},fn:function(t){var a=t.data;e(a.items)}}),this.queryString},handleTagClose:function(t){this.default_value.tags.splice(this.default_value.tags.indexOf(t),1)},handleTagConfirm:function(t){var e=this;"keyup"===t.type?this.$$api_tag_save({data:{title:this.new_tag_value,state:1},fn:function(t){var a=t.data;e.default_value.tags.push(a.items),e.new_tag_value=""}}):(this.default_value.tags.push(t),this.new_tag_value="")},onTrash:function(){var t=this;this.$$api_item_updateState({data:{ids:[this.params.id],state:"-2"},fn:function(e){var a=e.msg;t.$message.success(a),t.$onCancel()}})},handleCheckout:function(t){this.$$api_item_checkout({data:{ids:[t]},fn:function(){}})},handleSubmit:function(t){var e=this,a=t.submit_data,i=t.type,r=Object.assign({},a);this.params.id&&(r.id=this.params.id),r.publish_up=this.$options.filters.storeDateFormat(r.publish_up),r.publish_down=this.$options.filters.storeDateFormat(r.publish_down),this.$$api_item_save({data:r,fn:function(t){var r=t.data,n=t.msg;e.$message.success(n),r&&(a.id=r.items.id),e.$onSubmitFinish({type:i,query:{id:a.id}})}})},onGetView:function(){var t=this;this.$$api_item_get({pathVar:this.params.id,fn:function(e){var a=e.data,i=["publish_up","publish_down"];Object.keys(t.default_value).forEach(function(e){t.default_value[e]=i.includes(e)?t.$options.filters.displayDateFormat(a.items[e]):a.items[e]})}})}}}},"h+Z4":function(t,e,a){"use strict";var i=a("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],i=!0,r=!1,n=void 0;try{for(var l,o=t[Symbol.iterator]();!(i=(l=o.next()).done)&&(a.push(l.value),!e||a.length!==e);i=!0);}catch(t){r=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw n}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.a={methods:{$handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(n){var o=n.data;t.forEach(function(t){if("extrafield_group"===t){o.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(l(o.items[t]));var n=new i.b.Entity("groups"),s=Object(i.a)(o.items[t],[n]);e.handleUpdateField(t,s.entities.groups,a[t],r)}else e.handleUpdateField(t,o.items,a[t],r)})}})},$getFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1],i=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});i.length>0&&this.$handleGetFieldList(i,e,a)},handleUpdateField:function(t,e,a,i){this.onUpdateStoreFieldList(t,e[t]||e),i?this.onUpdateSearchbarFieldList(t,a):this.onUpdateFieldList(t,a)},onUpdateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},onUpdateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},onUpdateStoreFieldList:function(t,e){var a=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(l(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),i=n(e,2),l=i[0],o=i[1],s=o?l+" "+a.$t(o):a.$t(l);return r({},t,{tree_list_title:s})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}}});