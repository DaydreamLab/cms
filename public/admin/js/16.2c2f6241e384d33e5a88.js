webpackJsonp([16,76],{"0tC/":function(t,e,i){var n=i("VU/8")(i("t+yo"),i("9Oyi"),!1,null,null,null);t.exports=n.exports},"6D62":function(t,e,i){"use strict";var n=i("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,n){this.updateStoreFieldList(t,e[t]||e),n?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(s(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),n=a(e,2),s=n[0],o=n[1],u=o?s+" "+i.$t(o):i.$t(s);return r({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var o=a.data;t.forEach(function(t){if("extrafield_group"===t){o.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(s(o.items[t]));var a=new n.b.Entity("groups"),u=Object(n.a)(o.items[t],[a]);e.handleUpdateField(t,u.entities.groups,i[t],r)}else e.handleUpdateField(t,o.items,i[t],r)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],n=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});n.length>0&&this.$_optionMixin_handleGetFieldList(n,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},"9Oyi":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{list:t.list,"field-list":t.fields,"list-loading":t.listLoading,sort:{show:!0},pagination:t.paginations,toolbar:t.toolbar,searchbar:t.searchbar},on:{"click-add":t.$_listMixin_goAddRoute,"click-edit":t.setEditRouteQuery,"click-batch-trash":t.handleUpdateState,"click-batch-restore":t.handleUpdateState,"click-batch-delete":t.handleBatchDelete,"click-checkout":t.handleCheckout,"change-current-page":t.$_listMixin_updateCurrentPage,"change-page-size":t.$_listMixin_updatePageSize,search:t.$_listMixin_onSearch,"search-reset":t.$_listMixin_onSearchReset,"on-order-change":t.handleUpdateOrder,"on-sort-change":t.onSortChange}})},staticRenderFns:[]}},DxkE:function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a={data:function(){return{list:[],listLoading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$_listMixin_init",immediate:!0}},methods:{$_listMixin_goAddRoute:function(){this.$router.push(this.$route.path+"/edit")},$_listMixin_goEditRoute:function(t){this.$router.push({path:this.$route.path+"/edit",query:r({},t,{from:this.$route.query})})},$_listMixin_onSearchReset:function(){this.$router.push({path:this.$route.path})},$_listMixin_onSearch:function(t){var e=this.$route.query,i=r({},e);for(var n in t)i[n]=t[n],i[n]||delete i[n];this.$router.push({path:this.$route.path,query:i})},$_listMixin_updateCurrentPage:function(t){var e=this;this.$_listMixin_getList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$_listMixin_updatePageSize:function(t){var e=this;this.$_listMixin_getList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$_listMixin_getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,n=t.where,r=t.fn;this.listLoading.flag=!0;var a=this.$route.query;this.paginations.current_page=e||Number(a.page)||1,this.paginations.page_size=i||Number(a.page_size)||this.paginations.page_size;var s=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});n&&(s=Object.assign(s,n||{})),this.handleGetList({page_data:s,fn:r})},$_listMixin_init:function(){this.$_listMixin_getList()},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":n(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],n=["start_date","end_date"],r={};return Object.keys(e).forEach(function(a){t.searchbar.defaultValue[a]=i.includes(a)?Number(e[a]):n.includes(a)?t.$options.filters.storeDateFormat(e[a]):e[a],r[a]=e[a]}),r}}}},JeHt:function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function o(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function u(t,e,i){return Object.keys(t).reduce(function(e,n){var r=""+n;return e.has(r)?e.set(r,i(e.get(r),t[r])):e},e)}i.d(e,"a",function(){return A}),i.d(e,"b",function(){return $});var c=function(t){return function(e){return o(e)?e.get(t):e[t]}},l=function(){function t(t,e,i){if(void 0===e&&(e={}),void 0===i&&(i={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var n=i,r=n.idAttribute,s=void 0===r?"id":r,o=n.mergeStrategy,u=void 0===o?function(t,e){return a({},t,e)}:o,l=n.processStrategy,h=void 0===l?function(t){return a({},t)}:l,d=n.fallbackStrategy,f=void 0===d?function(t,e){}:d;this._key=t,this._getId="function"==typeof s?s:c(s),this._idAttribute=s,this._mergeStrategy=u,this._processStrategy=h,this._fallbackStrategy=f,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return a({},e,((n={})[i]=r,n))},this.schema||{})},e.getId=function(t,e,i){return this._getId(t,e,i)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,i,n,r,a){var s=this,o=this.getId(t,e,i),u=this.key;if(u in a||(a[u]={}),o in a[u]||(a[u][o]=[]),a[u][o].some(function(e){return e===t}))return o;a[u][o].push(t);var c=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(e){if(c.hasOwnProperty(e)&&"object"==typeof c[e]){var i=s.schema[e],o="function"==typeof i?i(t):i;c[e]=n(c[e],c,e,o,r,a)}}),r(this,c,t,e,i),o},e.denormalize=function(t,e){var i=this;return o(t)?u(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var r=i.schema[n];t[n]=e(t[n],r)}}),t)},r(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),h=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},e.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,i);return this.schema[n]},e.normalizeValue=function(t,e,i,n,r,a){var s=this.inferSchema(t,e,i);if(!s)return t;var o=n(t,e,i,s,r,a);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,i)}},e.denormalizeValue=function(t,e){var i=o(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var n=this.isSingleSchema?void 0:o(t)?t.get("id"):t.id,r=this.isSingleSchema?this.schema:this.schema[i];return e(n||t,r)},r(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),d=function(t){function e(e,i){if(!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,i)||this}s(e,t);var i=e.prototype;return i.normalize=function(t,e,i,n,r,a){return this.normalizeValue(t,e,i,n,r,a)},i.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(h),f=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var i=e.prototype;return i.normalize=function(t,e,i,n,r,s){var o=this;return Object.keys(t).reduce(function(e,i,u){var c,l=t[i];return void 0!==l&&null!==l?a({},e,((c={})[i]=o.normalizeValue(l,t,i,n,r,s),c)):e},{})},i.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(n,r){var s,o=t[r];return a({},n,((s={})[r]=i.denormalizeValue(o,e),s))},{})},e}(h),_=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},p=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},g=function(t,e,i,n,r,a,s){return t=_(t),p(e).map(function(e,o){return r(e,i,n,t,a,s)})},y=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var i=e.prototype;return i.normalize=function(t,e,i,n,r,a){var s=this;return p(t).map(function(t,o){return s.normalizeValue(t,e,i,n,r,a)}).filter(function(t){return void 0!==t&&null!==t})},i.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(h),m=function(t,e,i,n,r,s,o){var u=a({},e);return Object.keys(t).forEach(function(i){var n=t[i],a="function"==typeof n?n(e):n,c=r(e[i],e,i,a,s,o);void 0===c||null===c?delete u[i]:u[i]=c}),u},v=function(t,e,i){if(o(e))return u(t,e,i);var n=a({},e);return Object.keys(t).forEach(function(e){null!=n[e]&&(n[e]=i(n[e],t[e]))}),n},b=function t(e,i,n,r,a,s){return"object"==typeof e&&e?"object"!=typeof r||r.normalize&&"function"==typeof r.normalize?r.normalize(e,i,n,t,a,s):(Array.isArray(r)?g:m)(r,e,i,n,t,a,s):e},$={Array:y,Entity:l,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return a({},e,((n={})[i]=r,n))},this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return m.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return v.apply(void 0,[this.schema].concat(e))},t}(),Union:d,Values:f},A=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var i={},n=function(t){return function(e,i,n,r,a){var s=e.key,o=e.getId(n,r,a);s in t||(t[s]={});var u=t[s][o];t[s][o]=u?e.merge(u,i):i}}(i);return{entities:i,result:b(t,t,null,e,n,{})}}},h3bP:function(t,e,i){"use strict";e.a={methods:{$_listMixin_init:function(){this.$set(this.toolbar,"type","-2"===this.$route.query.state?"trash":"list"),this.$_listMixin_getList()}}}},"t+yo":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("6D62"),r=i("DxkE"),a=i("h3bP");e.default={name:"ItemList",mixins:[n.a,r.a,a.a],data:function(){var t=this;return{sort:{show:!0},fields:[{key:"title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable",width:300},{key:"featured",label:this.$t("OPTION_FEATURED"),type:"icon",width:"80",formatter:function(t){return{style:{color:1===t?"#fdd034":"#cfd3da"},icon:["fas","star"]}}},{key:"state",label:this.$t("OPTION_STATE"),type:"publish-label",width:"120",formatter:function(e){var i=e.state,n=e.publish_up,r=e.publish_down;return i=1===i?t.formatPublishState(n,r):i,{text:t.$t({1:"PUBLISHED",0:"UNPUBLISHED","-1":"ARCHIVED","-2":"TRASHED",2:"PENDING",3:"EXPIRED"}[i]),color:"item_state_"+i+"_color"}}},{key:"category_title",label:this.$t("OPTION_CATEGORY"),width:"120"},{key:"creator",label:this.$t("LIST_DATA_AUTHOR_LABEL")},{key:"updater",label:this.$t("LIST_DATA_MODIFIED_BY_LABEL"),width:"100"},{key:"created_at",label:this.$t("LIST_DATA_CREATED_DATE_LABEL"),formatter:function(e){var i=e.created_at;return t.$options.filters.displayDateFormat(i)}},{key:"updated_at",label:this.$t("LIST_DATA_MODIFIED_DATE_LABEL"),formatter:function(e){var i=e.updated_at;return t.$options.filters.displayDateFormat(i)}},{key:"hits",label:this.$t("LIST_DATA_HITS_LABEL")},{key:"introimage",label:this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),type:"icon",sort:!1,formatter:function(t){return{icon:t?["fal","image"]:""}}},{key:"image",label:this.$t("LIST_DATA_IMAGE_LABEL"),type:"icon",sort:!1,formatter:function(t){return{icon:t?["fal","image"]:""}}},{key:"language_title",label:this.$t("OPTION_LANGUAGE"),width:"100",formatter:function(e){var i=e.language,n=e.language_title;return"*"===i?t.$t("ALL_LANGUAGE"):n}},{key:"id",label:this.$t("LIST_DATA_HEADING_ID"),width:"60"}],toolbar:{type:"list",custom:[{text:this.$t("TOOLBAR_PUBLISH"),method:"handleUpdateState",fn:function(e){var i=e.ids;t.handleUpdateState({ids:i,state:1})}},{text:this.$t("TOOLBAR_UNPUBLISH"),method:"handleUpdateState",fn:function(e){var i=e.ids;t.handleUpdateState({ids:i,state:0})}},{text:this.$t("TOOLBAR_FEATURED"),method:"updateFeatured",fn:function(e){var i=e.ids;t.handleUpdateFeatured({ids:i,featured:1})}},{text:this.$t("TOOLBAR_UNFEATURED"),method:"updateFeatured",fn:function(e){var i=e.ids;t.handleUpdateFeatured({ids:i,featured:0})}},{text:this.$t("TOOLBAR_CHECKOUT"),method:"checkout",fn:function(e){var i=e.ids;t.handleCheckout({ids:i})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"featured",type:"select",desc:this.$t("OPTION_FEATURED"),clearable:!0,list:[{value:"1",text:this.$t("FEATURED")},{value:"0",text:this.$t("NOT_FEATURED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"state",type:"select",desc:this.$t("OPTION_STATE"),clearable:!0,list:[{value:"1",text:this.$t("PUBLISHED")},{value:"0",text:this.$t("UNPUBLISHED")},{value:"-1",text:this.$t("ARCHIVED")},{value:"-2",text:this.$t("TRASHED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"category_id",type:"select",desc:this.$t("OPTION_CATEGORY"),clearable:!0,list:this.$store.getters.item_article_category_list,custom_attrs:{label:"tree_list_title",value:"id"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"language",type:"select",desc:this.$t("OPTION_LANGUAGE"),clearable:!0,list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"access",type:"select",desc:this.$t("FIELD_ACCESS_LEVEL"),clearable:!0,list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}}],defaultValue:{search:"",state:"",featured:"",category_id:"",language:"",access:""}}}},created:function(){this.$_optionMixin_updateFieldList({item_article_category:3,language:4,viewlevel:5},!0)},methods:{formatPublishState:function(t,e){var i=new Date,n=i>new Date(e),r=new Date(t)>i;return e&&n?3:r?2:1},handleCheckout:function(t){var e=this,i=t.data,n=t.ids,r=n||[i.id];this.$$api_item_checkout({data:{ids:r},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleUpdateOrder:function(t){var e=this,i=t.id,n=t.index_diff,r=t.order;this.$$api_item_ordering({data:{id:i,index_diff:n,order:r},fn:function(t){var i=t.msg;e.$message.success(i)}})},onSortChange:function(t){this.$_listMixin_getList({where:{order_by:"ordering",order:t.replace("ending","")}})},handleUpdateFeatured:function(t){var e=this,i=t.ids,n=t.featured;this.$$api_item_updateFeatured({data:{ids:i,featured:n},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleUpdateState:function(t){var e=this,i=t.ids,n=t.state;this.$$api_item_updateState({data:{ids:i,state:n},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleBatchDelete:function(t){var e=this,i=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_item_delete({data:{ids:i},fn:function(t){t.data;e.$_listMixin_getList()}})})},setEditRouteQuery:function(t){var e=t.data;this.$_listMixin_goEditRoute({id:e.id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,n=e.fn;this.$$api_item_list({data:i,fn:function(e){var i=e.data;t.listLoading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,n&&n()}})}},watch:{$route:function(t){var e=this;0===Object.keys(t.query).length&&Object.keys(this.searchbar.defaultValue).forEach(function(t){e.searchbar.defaultValue[t]=""})}}}}});