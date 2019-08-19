webpackJsonp([33],{"6D62":function(t,e,i){"use strict";var n=i("JeHt"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function a(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,n){this.updateStoreFieldList(t,e[t]||e),n?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(a(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),n=o(e,2),a=n[0],s=n[1],u=s?a+" "+i.$t(s):i.$t(a);return r({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];this.$$api_option_list({data:{types:t},fn:function(o){var s=o.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(a(s.items[t]));var o=new n.b.Entity("groups"),u=Object(n.a)(s.items[t],[o]);e.handleUpdateField(t,u.entities.groups,i[t],r)}else e.handleUpdateField(t,s.items,i[t],r)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],n=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});n.length>0&&this.$_optionMixin_handleGetFieldList(n,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},B2bh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("6D62"),r=i("DxkE");e.default={name:"UserList",mixins:[n.a,r.a],data:function(){var t=this;return{fields:[{width:"60",key:"id",label:this.$t("LIST_DATA_HEADING_ID")},{key:"first_name",label:this.$t("USER_FIELD_FIRST_NAME"),type:"editable"},{key:"last_name",label:this.$t("USER_FIELD_LAST_NAME"),type:"editable"},{key:"activation",label:this.$t("USER_OPTION_ACTIVE"),type:"icon-label",width:"120",formatter:function(t){return{color:"item_state_"+t+"_color",icon:["fal",1===t?"check":"times"]}}},{key:"block",label:this.$t("USER_OPTION_BLOCK"),width:"120",formatter:function(e){return 1===e.block?t.$t("YES"):t.$t("NO")}},{key:"groups",label:this.$t("OPTION_GROUP"),formatter:function(t){var e=t.groups;return e.length>2?"Multiple Groups":e.map(function(t){return t.title}).join(", ")}},{key:"email",label:this.$t("USER_FIELD_EMAIL")}],toolbar:{type:"list_user",custom:[{text:this.$t("TOOLBAR_BLOCK"),method:"updateState",fn:function(e){var i=e.ids;t.handleUpdateBlock({ids:i,block:1})}},{text:this.$t("TOOLBAR_UNBLOCK"),method:"updateState",fn:function(e){var i=e.ids;t.handleUpdateBlock({ids:i,block:0})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"activation",type:"select",desc:this.$t("USER_OPTION_ACTIVE"),clearable:!0,list:[{value:"1",text:this.$t("USER_ACTIVATED")},{value:"0",text:this.$t("USER_UNACTIVATED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"block",type:"select",desc:this.$t("OPTION_BLOCK"),clearable:!0,list:[{value:"0",text:this.$t("USER_ACTIVATED")},{value:"1",text:this.$t("USER_BLOCKED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"groups",type:"select",desc:this.$t("OPTION_GROUP"),clearable:!0,list:this.$store.getters.user_group_list,custom_attrs:{label:"tree_list_title",value:"id"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}}],defaultValue:{search:"",block:"",activation:"",groups:""}}}},created:function(){this.$_optionMixin_updateFieldList({user_group:3},!0)},methods:{onClickBtnBatchRestore:function(t){var e=t.ids,i=t.block;this.handleUpdateBlock({ids:e,block:i})},handleUpdateBlock:function(t){var e=this,i=t.ids,n=t.block;this.$$api_user_updateBlock({data:{ids:i,block:n},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},setEditRouteQuery:function(t){var e=t.data;this.$_listMixin_goEditRoute({id:e.id,pid:e.parent_id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,n=e.fn;this.$$api_user_list({data:i,fn:function(e){var i=e.data;t.listLoading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,n&&n()}})}}}},DxkE:function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a={data:function(){return{list:[],listLoading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$_listMixin_init",immediate:!0}},methods:{$_listMixin_goAddRoute:function(){this.$router.push(this.$route.path+"/edit")},$_listMixin_goEditRoute:function(t){this.$router.push({path:this.$route.path+"/edit",query:r({},t,{from:this.$route.query})})},$_listMixin_onSearchReset:function(){this.$router.push({path:this.$route.path})},$_listMixin_onSearch:function(t){var e=this.$route.query,i=r({},e);for(var n in t)i[n]=t[n],i[n]||delete i[n];this.$router.push({path:this.$route.path,query:i})},$_listMixin_updateCurrentPage:function(t){var e=this;this.$_listMixin_getList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$_listMixin_updatePageSize:function(t){var e=this;this.$_listMixin_getList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$_listMixin_getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,n=t.where,r=t.fn;this.listLoading.flag=!0;var o=this.$route.query;this.paginations.current_page=e||Number(o.page)||1,this.paginations.page_size=i||Number(o.page_size)||this.paginations.page_size;var a=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});n&&(a=Object.assign(a,n||{})),this.handleGetList({page_data:a,fn:r})},$_listMixin_init:function(){this.$_listMixin_getList()},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":n(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],n=["start_date","end_date"],r={};return Object.keys(e).forEach(function(o){t.searchbar.defaultValue[o]=i.includes(o)?Number(e[o]):n.includes(o)?t.$options.filters.storeDateFormat(e[o]):e[o],r[o]=e[o]}),r}}}},EaIo:function(t,e,i){var n=i("VU/8")(i("B2bh"),i("LBrh"),!1,null,null,null);t.exports=n.exports},JeHt:function(t,e,i){"use strict";function n(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function r(t,e,i){return Object.keys(t).reduce(function(e,n){var r=""+n;return e.has(r)?e.set(r,i(e.get(r),t[r])):e},e)}i.d(e,"b",function(){return S}),i.d(e,"a",function(){return k});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},c=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},l=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t){return function(e){return n(e)?e.get(t):e[t]}},f=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(a(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=n.idAttribute,o=void 0===r?"id":r,s=n.mergeStrategy,c=void 0===s?function(t,e){return u({},t,e)}:s,l=n.processStrategy,f=void 0===l?function(t){return u({},t)}:l;this._key=e,this._getId="function"==typeof o?o:h(o),this._idAttribute=o,this._mergeStrategy=c,this._processStrategy=f,this.define(i)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return u({},e,((n={})[i]=r,n))},this.schema||{})},t.prototype.getId=function(t,e,i){return this._getId(t,e,i)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,i,n,r){var a=this,s=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===o(s[t])){var e=a.schema[t];s[t]=n(s[t],s,t,e,r)}}),r(this,s,t,e,i),this.getId(t,e,i)},t.prototype.denormalize=function(t,e){var i=this;return n(t)?r(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var r=i.schema[n];t[n]=e(t[n],r)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),p=function(){function t(e,i){a(this,t),i&&(this._schemaAttribute="string"==typeof i?function(t){return t[i]}:i),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},t.prototype.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,i);return this.schema[n]},t.prototype.normalizeValue=function(t,e,i,n,r){var o=this.inferSchema(t,e,i);if(!o)return t;var a=n(t,e,i,o,r);return this.isSingleSchema||void 0===a||null===a?a:{id:a,schema:this.getSchemaAttribute(t,e,i)}},t.prototype.denormalizeValue=function(t,e){var i=n(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var r=n(t)?t.get("id"):t.id,o=this.isSingleSchema?this.schema:this.schema[i];return e(r||t,o)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),d=function(t){function e(i,n){if(a(this,e),!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return l(this,t.call(this,i,n))}return c(e,t),e.prototype.normalize=function(t,e,i,n,r){return this.normalizeValue(t,e,i,n,r)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(p),y=function(t){function e(){return a(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,i,n,r){var o=this;return Object.keys(t).reduce(function(e,i,a){var s,c=t[i];return void 0!==c&&null!==c?u({},e,((s={})[i]=o.normalizeValue(c,t,i,n,r),s)):e},{})},e.prototype.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(n,r){var o,a=t[r];return u({},n,((o={})[r]=i.denormalizeValue(a,e),o))},{})},e}(p),_=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},g=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},m=function(t,e,i,n,r,o){return t=_(t),g(e).map(function(e,a){return r(e,i,n,t,o)})},b=function(t){function e(){return a(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,i,n,r){var o=this;return g(t).map(function(t,a){return o.normalizeValue(t,e,i,n,r)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(p),v=function(t,e,i,n,r,o){var a=u({},e);return Object.keys(t).forEach(function(i){var n=t[i],s=r(e[i],e,i,n,o);void 0===s||null===s?delete a[i]:a[i]=s}),a},$=function(t,e,i){if(n(e))return r(t,e,i);var o=u({},e);return Object.keys(t).forEach(function(e){o[e]&&(o[e]=i(o[e],t[e]))}),o},O=function(){function t(e){a(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var n,r=t[i];return u({},e,((n={})[i]=r,n))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return v.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return $.apply(void 0,[this.schema].concat(e))},t}(),S={Array:b,Entity:f,Object:O,Union:d,Values:y},k=function(t,e){if(!t||"object"!==(void 0===t?"undefined":o(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":o(t))+'".');var i={},n=function(t){return function(e,i,n,r,o){var a=e.key,s=e.getId(n,r,o);a in t||(t[a]={});var u=t[a][s];t[a][s]=u?e.merge(u,i):i}}(i);return{entities:i,result:function t(e,i,n,r,a){return"object"===(void 0===e?"undefined":o(e))&&e?"object"!==(void 0===r?"undefined":o(r))||r.normalize&&"function"==typeof r.normalize?r.normalize(e,i,n,t,a):(Array.isArray(r)?m:v)(r,e,i,n,t,a):e}(t,t,null,e,n)}}},LBrh:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{list:t.list,"list-loading":t.listLoading,pagination:t.paginations,toolbar:t.toolbar,searchbar:t.searchbar,"field-list":t.fields},on:{"click-add":t.$_listMixin_goAddRoute,"click-edit":t.setEditRouteQuery,"click-batch-restore":t.onClickBtnBatchRestore,"change-current-page":t.$_listMixin_updateCurrentPage,"change-page-size":t.$_listMixin_updatePageSize,search:t.$_listMixin_onSearch,"search-reset":t.$_listMixin_onSearchReset}})},staticRenderFns:[]}}});