webpackJsonp([14,81],{"0tC/":function(t,e,i){var n=i("VU/8")(i("t+yo"),i("r606"),!1,null,null,null);t.exports=n.exports},JeHt:function(t,e,i){"use strict";function n(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function r(t,e,i){return Object.keys(t).reduce(function(e,n){var r=""+n;return e.has(r)?e.set(r,i(e.get(r),t[r])):e},e)}i.d(e,"b",function(){return S}),i.d(e,"a",function(){return E});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},c=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},l=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t){return function(e){return n(e)?e.get(t):e[t]}},f=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=n.idAttribute,a=void 0===r?"id":r,s=n.mergeStrategy,c=void 0===s?function(t,e){return u({},t,e)}:s,l=n.processStrategy,f=void 0===l?function(t){return u({},t)}:l;this._key=e,this._getId="function"==typeof a?a:h(a),this._idAttribute=a,this._mergeStrategy=c,this._processStrategy=f,this.define(i)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return u({},e,((n={})[i]=r,n))},this.schema||{})},t.prototype.getId=function(t,e,i){return this._getId(t,e,i)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,i,n,r){var o=this,s=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===a(s[t])){var e=o.schema[t];s[t]=n(s[t],s,t,e,r)}}),r(this,s,t,e,i),this.getId(t,e,i)},t.prototype.denormalize=function(t,e){var i=this;return n(t)?r(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var r=i.schema[n];t[n]=e(t[n],r)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),d=function(){function t(e,i){o(this,t),i&&(this._schemaAttribute="string"==typeof i?function(t){return t[i]}:i),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},t.prototype.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,i);return this.schema[n]},t.prototype.normalizeValue=function(t,e,i,n,r){var a=this.inferSchema(t,e,i);if(!a)return t;var o=n(t,e,i,a,r);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,i)}},t.prototype.denormalizeValue=function(t,e){var i=n(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var r=n(t)?t.get("id"):t.id,a=this.isSingleSchema?this.schema:this.schema[i];return e(r||t,a)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(i,n){if(o(this,e),!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return l(this,t.call(this,i,n))}return c(e,t),e.prototype.normalize=function(t,e,i,n,r){return this.normalizeValue(t,e,i,n,r)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(d),y=function(t){function e(){return o(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,i,n,r){var a=this;return Object.keys(t).reduce(function(e,i,o){var s,c=t[i];return void 0!==c&&null!==c?u({},e,((s={})[i]=a.normalizeValue(c,t,i,n,r),s)):e},{})},e.prototype.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(n,r){var a,o=t[r];return u({},n,((a={})[r]=i.denormalizeValue(o,e),a))},{})},e}(d),g=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},_=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},m=function(t,e,i,n,r,a){return t=g(t),_(e).map(function(e,o){return r(e,i,n,t,a)})},v=function(t){function e(){return o(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,i,n,r){var a=this;return _(t).map(function(t,o){return a.normalizeValue(t,e,i,n,r)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(d),$=function(t,e,i,n,r,a){var o=u({},e);return Object.keys(t).forEach(function(i){var n=t[i],s=r(e[i],e,i,n,a);void 0===s||null===s?delete o[i]:o[i]=s}),o},b=function(t,e,i){if(n(e))return r(t,e,i);var a=u({},e);return Object.keys(t).forEach(function(e){a[e]&&(a[e]=i(a[e],t[e]))}),a},A=function(){function t(e){o(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return u({},e,((n={})[i]=r,n))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return $.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return b.apply(void 0,[this.schema].concat(e))},t}(),S={Array:v,Entity:f,Object:A,Union:p,Values:y},E=function(t,e){if(!t||"object"!==(void 0===t?"undefined":a(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":a(t))+'".');var i={},n=function(t){return function(e,i,n,r,a){var o=e.key,s=e.getId(n,r,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,i):i}}(i);return{entities:i,result:function t(e,i,n,r,o){return"object"===(void 0===e?"undefined":a(e))&&e?"object"!==(void 0===r?"undefined":a(r))||r.normalize&&"function"==typeof r.normalize?r.normalize(e,i,n,t,o):(Array.isArray(r)?m:$)(r,e,i,n,t,o):e}(t,t,null,e,n)}}},PKPN:function(t,e,i){"use strict";e.a={methods:{$initList:function(){this.$set(this.toolbar,"type","-2"===this.$route.query.state?"trash":"list"),this.$onGetList()}}}},"h+Z4":function(t,e,i){"use strict";var n=i("JeHt");e.a={methods:{$handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var o=a.data;t.forEach(function(t){if("extrafield_group"===t){o.items[t].unshift({id:0,value:"",title:e.$t("OPTION_NONE")});var a=new n.b.Entity("groups"),s=Object(n.a)(o.items[t],[a]);e.handleUpdateField(t,s.entities.groups,i[t],r)}else e.handleUpdateField(t,o.items,i[t],r)})}})},$getFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],n=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});n.length>0&&this.$handleGetFieldList(n,e,i)},handleUpdateField:function(t,e,i,n){this.onUpdateStoreFieldList(t,e[t]||e),n?this.onUpdateSearchbarFieldList(t,i):this.onUpdateFieldList(t,i)},onUpdateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},onUpdateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},onUpdateStoreFieldList:function(t,e){if("language"===t){var i={sef:"*",title:this.$t("ALL_LANGUAGE")};e.unshift(i)}"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},nNQx:function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a={data:function(){return{list:[],list_loading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$initList",immediate:!0}},methods:{$onClickBtnAdd:function(){this.$router.push(this.$route.path+"/edit")},$onClickBntEdit:function(t){this.$router.push({path:this.$route.path+"/edit",query:r({},t,{from:this.$route.query})})},$onSearchReset:function(){this.$router.push({path:this.$route.path})},$onSearch:function(t){var e=t.data,i={},n=this.$route.query;for(var r in n)i[r]=n[r];for(var a in e)i[a]=e[a],i[a]||delete i[a];this.$router.push({path:this.$route.path,query:i})},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":n(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],n=["start_date","end_date"],r={};return Object.keys(e).forEach(function(a){t.searchbar.default_value[a]=i.includes(a)?parseInt(e[a]):n.includes(a)?t.$options.filters.storeDateFormat(e[a]):e[a],r[a]=e[a]}),r},$onChangeCurrentPage:function(t){var e=this;this.$onGetList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$onChangePageSize:function(t){var e=this;this.$onGetList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$onGetList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,n=t.where,r=t.fn;this.list_loading.flag=!0;var a=this.$route.query;this.paginations.current_page=e||parseInt(a.page)||1,this.paginations.page_size=i||parseInt(a.page_size)||this.paginations.page_size;var o=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});n&&(o=Object.assign(o,n||{})),this.handleGetList({page_data:o,fn:r})},$initList:function(){this.$onGetList()}}}},r606:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ListData",{ref:"list-data",attrs:{List:t.list,ListLoading:t.list_loading,Sort:t.sort,Pagination:t.paginations,Toolbar:t.toolbar,Searchbar:t.searchbar,FieldList:t.fields},on:{onClickBtnAdd:t.$onClickBtnAdd,onClickBtnEdit:t.handleEditQuery,onClickBtnBatchTrash:t.onClickBtnBatchTrash,onClickBtnBatchRestore:t.onClickBtnBatchRestore,onClickBtnBatchDelete:t.onClickBtnBatchDelete,onClickBtnCheckout:t.onClickBtnCheckout,onChangeCurrentPage:t.$onChangeCurrentPage,onChangePageSize:t.$onChangePageSize,onSearch:t.$onSearch,onSearchReset:t.$onSearchReset,onOrderChange:t.onOrderChange,onSortChange:t.onSortChange}})],1)},staticRenderFns:[]}},"t+yo":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("h+Z4"),r=i("nNQx"),a=i("PKPN");e.default={name:"item-list",mixins:[n.a,r.a,a.a],data:function(){var t=this;return{sort:{show:!0},fields:[{key:"title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable",width:300},{key:"featured",label:this.$t("OPTION_FEATURED"),type:"icon",width:"80",formatter:function(t){return{style:{color:1===t?"#fdd034":"#cfd3da"},icon:["fas","star"]}}},{key:"state",label:this.$t("OPTION_STATE"),type:"label",width:"120",formatter:function(e){return{text:t.$t({1:"PUBLISHED",0:"UNPUBLISHED","-1":"ARCHIVED","-2":"TRASHED",2:"PENDING",3:"EXPIRED"}[e]),color:"item_state_"+e+"_color"}}},{key:"category_title",label:this.$t("OPTION_CATEGORY"),width:"120"},{key:"creator",label:this.$t("LIST_DATA_AUTHOR_LABEL")},{key:"updater",label:this.$t("LIST_DATA_MODIFIED_BY_LABEL"),width:"100"},{key:"created_at",label:this.$t("LIST_DATA_CREATED_DATE_LABEL"),formatter:function(e){return t.$options.filters.displayDateFormat(e.created_at)}},{key:"updated_at",label:this.$t("LIST_DATA_MODIFIED_DATE_LABEL"),formatter:function(e){return t.$options.filters.displayDateFormat(e.updated_at)}},{key:"hits",label:this.$t("LIST_DATA_HITS_LABEL")},{key:"introimage",label:this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),type:"icon",sort:!1,formatter:function(t){return{icon:t?["fal","image"]:""}}},{key:"image",label:this.$t("LIST_DATA_IMAGE_LABEL"),type:"icon",sort:!1,formatter:function(t){return{icon:t?["fal","image"]:""}}},{key:"language_title",label:this.$t("OPTION_LANGUAGE"),width:"100",formatter:function(e){return"*"===e.language?t.$t("ALL_LANGUAGE"):e.language_title}},{key:"id",label:this.$t("LIST_DATA_HEADING_ID"),width:"60"}],toolbar:{type:"list",custom:[{text:this.$t("TOOLBAR_PUBLISH"),method:"updateState",fn:function(e){var i=e.ids;t.onClickBtnUpdateState({ids:i,state:1})}},{text:this.$t("TOOLBAR_UNPUBLISH"),method:"updateState",fn:function(e){var i=e.ids;t.onClickBtnUpdateState({ids:i,state:0})}},{text:this.$t("TOOLBAR_FEATURED"),method:"updateFeatured",fn:function(e){var i=e.ids;t.onClickBtnUpdatFeatured({ids:i,featured:1})}},{text:this.$t("TOOLBAR_UNFEATURED"),method:"updateFeatured",fn:function(e){var i=e.ids;t.onClickBtnUpdatFeatured({ids:i,featured:0})}},{text:this.$t("TOOLBAR_CHECKOUT"),method:"checkout",fn:function(e){var i=e.ids;t.onClickBtnCheckout({ids:i})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"featured",type:"select",desc:this.$t("OPTION_FEATURED"),clearable:!0,list:[{value:"1",text:this.$t("FEATURED")},{value:"0",text:this.$t("NOT_FEATURED")}]},{key:"state",type:"select",desc:this.$t("OPTION_STATE"),clearable:!0,list:[{value:"1",text:this.$t("PUBLISHED")},{value:"0",text:this.$t("UNPUBLISHED")},{value:"-1",text:this.$t("ARCHIVED")},{value:"-2",text:this.$t("TRASHED")}]},{key:"category_id",type:"select",desc:this.$t("OPTION_CATEGORY"),clearable:!0,list:this.$store.getters.item_article_category_list,custom_attrs:{label:"tree_list_title",value:"id"}},{key:"language",type:"select",desc:this.$t("OPTION_LANGUAGE"),clearable:!0,list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"}},{key:"access",type:"select",desc:this.$t("FIELD_ACCESS_LEVEL"),clearable:!0,list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"}}],default_value:{search:"",state:"",featured:"",category_id:"",language:"",access:""}}}},created:function(){this.$getFieldList({item_article_category:3,language:4,viewlevel:5},"searchbar")},methods:{onClickBtnCheckout:function(t){var e=this,i=t.data,n=t.ids,r=n||[i.id];this.$$api_item_checkout({data:{ids:r},fn:function(t){var i=t.msg;e.$message.success(i),e.$onGetList()}})},onOrderChange:function(t){var e=this,i=t.id,n=t.index_diff,r=t.order;this.$$api_item_ordering({data:{id:i,index_diff:n,order:r},fn:function(t){var i=t.msg;e.$message.success(i)}})},onSortChange:function(t){this.$onGetList({where:{order_by:"ordering",order:t.replace("ending","")}})},onClickBtnUpdatFeatured:function(t){var e=this,i=t.ids,n=t.featured;this.$$api_item_updateFeatured({data:{ids:i,featured:n},fn:function(t){var i=t.msg;e.$message.success(i),e.$onGetList()}})},onClickBtnBatchTrash:function(t){var e=t.ids,i=t.state;this.onClickBtnUpdateState({ids:e,state:i})},onClickBtnBatchRestore:function(t){var e=t.ids,i=t.state;this.onClickBtnUpdateState({ids:e,state:i})},onClickBtnUpdateState:function(t){var e=this,i=t.ids,n=t.state;this.$$api_item_updateState({data:{ids:i,state:n},fn:function(t){var i=t.msg;e.$message.success(i),e.$onGetList()}})},onClickBtnBatchDelete:function(t){var e=this,i=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_item_delete({data:{ids:i},fn:function(t){t.data;e.$onGetList()}})})},handleEditQuery:function(t){var e=t.data;this.$onClickBntEdit({id:e.id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,n=e.fn;this.$$api_item_list({data:i,fn:function(e){var i=e.data;t.list_loading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,n&&n()}})}}}}});