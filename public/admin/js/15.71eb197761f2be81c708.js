webpackJsonp([15],{"6D62":function(t,e,i){"use strict";var n=i("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,n){this.updateStoreFieldList(t,e[t]||e),n?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),n=a(e,2),o=n[0],s=n[1],u=s?o+" "+i.$t(s):i.$t(o);return r({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var s=a.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var a=new n.b.Entity("groups"),u=Object(n.a)(s.items[t],[a]);e.handleUpdateField(t,u.entities.groups,i[t],r)}else e.handleUpdateField(t,s.items,i[t],r)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],n=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});n.length>0&&this.$_optionMixin_handleGetFieldList(n,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},DxkE:function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a={data:function(){return{list:[],listLoading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$_listMixin_init",immediate:!0}},methods:{$_listMixin_goAddRoute:function(){this.$router.push(this.$route.path+"/edit")},$_listMixin_goEditRoute:function(t){this.$router.push({path:this.$route.path+"/edit",query:r({},t,{from:this.$route.query})})},$_listMixin_onSearchReset:function(){this.$router.push({path:this.$route.path})},$_listMixin_onSearch:function(t){var e=this.$route.query,i=r({},e);for(var n in t)i[n]=t[n],i[n]||delete i[n];this.$router.push({path:this.$route.path,query:i})},$_listMixin_updateCurrentPage:function(t){var e=this;this.$_listMixin_getList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$_listMixin_updatePageSize:function(t){var e=this;this.$_listMixin_getList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$_listMixin_getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,n=t.where,r=t.fn;this.listLoading.flag=!0;var a=this.$route.query;this.paginations.current_page=e||Number(a.page)||1,this.paginations.page_size=i||Number(a.page_size)||this.paginations.page_size;var o=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});n&&(o=Object.assign(o,n||{})),this.handleGetList({page_data:o,fn:r})},$_listMixin_init:function(){this.$_listMixin_getList()},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":n(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],n=["start_date","end_date"],r={};return Object.keys(e).forEach(function(a){t.searchbar.defaultValue[a]=i.includes(a)?Number(e[a]):n.includes(a)?t.$options.filters.storeDateFormat(e[a]):e[a],r[a]=e[a]}),r}}}},JeHt:function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function s(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function u(t,e,i){return Object.keys(t).reduce(function(e,n){var r=""+n;return e.has(r)?e.set(r,i(e.get(r),t[r])):e},e)}i.d(e,"a",function(){return S}),i.d(e,"b",function(){return $});var c=function(t){return function(e){return s(e)?e.get(t):e[t]}},l=function(){function t(t,e,i){if(void 0===e&&(e={}),void 0===i&&(i={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var n=i,r=n.idAttribute,o=void 0===r?"id":r,s=n.mergeStrategy,u=void 0===s?function(t,e){return a({},t,e)}:s,l=n.processStrategy,h=void 0===l?function(t){return a({},t)}:l,f=n.fallbackStrategy,d=void 0===f?function(t,e){}:f;this._key=t,this._getId="function"==typeof o?o:c(o),this._idAttribute=o,this._mergeStrategy=u,this._processStrategy=h,this._fallbackStrategy=d,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return a({},e,((n={})[i]=r,n))},this.schema||{})},e.getId=function(t,e,i){return this._getId(t,e,i)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,i,n,r,a){var o=this,s=this.getId(t,e,i),u=this.key;if(u in a||(a[u]={}),s in a[u]||(a[u][s]=[]),a[u][s].some(function(e){return e===t}))return s;a[u][s].push(t);var c=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(e){if(c.hasOwnProperty(e)&&"object"==typeof c[e]){var i=o.schema[e],s="function"==typeof i?i(t):i;c[e]=n(c[e],c,e,s,r,a)}}),r(this,c,t,e,i),s},e.denormalize=function(t,e){var i=this;return s(t)?u(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var r=i.schema[n];t[n]=e(t[n],r)}}),t)},r(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),h=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},e.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,i);return this.schema[n]},e.normalizeValue=function(t,e,i,n,r,a){var o=this.inferSchema(t,e,i);if(!o)return t;var s=n(t,e,i,o,r,a);return this.isSingleSchema||void 0===s||null===s?s:{id:s,schema:this.getSchemaAttribute(t,e,i)}},e.denormalizeValue=function(t,e){var i=s(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var n=this.isSingleSchema?void 0:s(t)?t.get("id"):t.id,r=this.isSingleSchema?this.schema:this.schema[i];return e(n||t,r)},r(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),f=function(t){function e(e,i){if(!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,i)||this}o(e,t);var i=e.prototype;return i.normalize=function(t,e,i,n,r,a){return this.normalizeValue(t,e,i,n,r,a)},i.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(h),d=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var i=e.prototype;return i.normalize=function(t,e,i,n,r,o){var s=this;return Object.keys(t).reduce(function(e,i,u){var c,l=t[i];return void 0!==l&&null!==l?a({},e,((c={})[i]=s.normalizeValue(l,t,i,n,r,o),c)):e},{})},i.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(n,r){var o,s=t[r];return a({},n,((o={})[r]=i.denormalizeValue(s,e),o))},{})},e}(h),p=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},g=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},_=function(t,e,i,n,r,a,o){return t=p(t),g(e).map(function(e,s){return r(e,i,n,t,a,o)})},y=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var i=e.prototype;return i.normalize=function(t,e,i,n,r,a){var o=this;return g(t).map(function(t,s){return o.normalizeValue(t,e,i,n,r,a)}).filter(function(t){return void 0!==t&&null!==t})},i.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(h),m=function(t,e,i,n,r,o,s){var u=a({},e);return Object.keys(t).forEach(function(i){var n=t[i],a="function"==typeof n?n(e):n,c=r(e[i],e,i,a,o,s);void 0===c||null===c?delete u[i]:u[i]=c}),u},v=function(t,e,i){if(s(e))return u(t,e,i);var n=a({},e);return Object.keys(t).forEach(function(e){null!=n[e]&&(n[e]=i(n[e],t[e]))}),n},b=function t(e,i,n,r,a,o){return"object"==typeof e&&e?"object"!=typeof r||r.normalize&&"function"==typeof r.normalize?r.normalize(e,i,n,t,a,o):(Array.isArray(r)?_:m)(r,e,i,n,t,a,o):e},$={Array:y,Entity:l,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return a({},e,((n={})[i]=r,n))},this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return m.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return v.apply(void 0,[this.schema].concat(e))},t}(),Union:f,Values:d},S=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var i={},n=function(t){return function(e,i,n,r,a){var o=e.key,s=e.getId(n,r,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,i):i}}(i);return{entities:i,result:b(t,t,null,e,n,{})}}},h3bP:function(t,e,i){"use strict";e.a={methods:{$_listMixin_init:function(){this.$set(this.toolbar,"type","-2"===this.$route.query.state?"trash":"list"),this.$_listMixin_getList()}}}},qY2e:function(t,e,i){var n=i("VU/8")(i("zND5"),i("w1Mi"),!1,null,null,null);t.exports=n.exports},w1Mi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{list:t.list,"list-loading":t.listLoading,pagination:t.paginations,toolbar:t.toolbar,searchbar:t.searchbar,"field-list":t.fields},on:{"click-add":t.$_listMixin_goAddRoute,"click-edit":t.setEditRouteQuery,"click-batch-delete":t.handleBatchDelete,"click-checkout":t.handleCheckout,"change-current-page":t.$_listMixin_updateCurrentPage,"change-page-size":t.$_listMixin_updatePageSize,search:t.$_listMixin_onSearch,"search-reset":t.$_listMixin_onSearchReset}})},staticRenderFns:[]}},zND5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("6D62"),r=i("DxkE"),a=i("h3bP");e.default={name:"SiteList",mixins:[n.a,r.a,a.a],data:function(){var t=this;return{fields:[{key:"title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable"},{key:"url",label:this.$t("SITE_FIELD_URL_LABEL")},{key:"language_title",label:this.$t("OPTION_LANGUAGE")},{width:"60",key:"id",label:this.$t("LIST_DATA_HEADING_ID")}],toolbar:{type:"list"},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"state",type:"select",desc:this.$t("OPTION_STATE"),clearable:!0,list:[{value:"1",text:this.$t("PUBLISHED")},{value:"0",text:this.$t("UNPUBLISHED")},{value:"-1",text:this.$t("ARCHIVED")},{value:"-2",text:this.$t("TRASHED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"language",type:"select",desc:this.$t("OPTION_LANGUAGE"),list:this.$store.getters.language_list,clearable:!0,custom_attrs:{label:"title",value:"sef"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}}],defaultValue:{search:"",state:"",language:""}}}},created:function(){this.$_optionMixin_updateFieldList({language:2},!0)},methods:{handleBatchDelete:function(t){var e=this,i=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_site_delete({data:{ids:i},fn:function(t){t.data;e.$_listMixin_getList()}})})},handleCheckout:function(t){var e=this,i=t.data,n=t.ids,r=n||[i.id];this.$$api_site_checkout({data:{ids:r},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},setEditRouteQuery:function(t){var e=t.data;this.$_listMixin_goEditRoute({id:e.id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,n=e.fn;this.$$api_site_list({data:i,fn:function(e){var i=e.data;t.listLoading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,n&&n()}})}}}}});