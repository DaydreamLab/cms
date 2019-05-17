webpackJsonp([41],{"6z6p":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{list:t.list,"list-loading":t.listLoading,listBtns:t.list_btns,"field-list":t.fields,sort:{show:!0},pagination:t.paginations,toolbar:t.toolbar,searchbar:t.searchbar},on:{"click-add":t.$_listMixin_goAddRoute,"click-edit":t.setEditRouteQuery,"click-batch-delete":t.handleBatchDelete,"change-current-page":t.$_listMixin_updateCurrentPage,"change-page-size":t.$_listMixin_updatePageSize,"on-order-change":t.handleUpdateOrder,search:t.$_listMixin_onSearch,"search-reset":t.$_listMixin_onSearchReset}})},staticRenderFns:[]}},DxkE:function(t,e,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={data:function(){return{list:[],listLoading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$_listMixin_init",immediate:!0}},methods:{$_listMixin_goAddRoute:function(){this.$router.push(this.$route.path+"/edit")},$_listMixin_goEditRoute:function(t){this.$router.push({path:this.$route.path+"/edit",query:n({},t,{from:this.$route.query})})},$_listMixin_onSearchReset:function(){this.$router.push({path:this.$route.path})},$_listMixin_onSearch:function(t){var e=this.$route.query,i=n({},e);for(var a in t)i[a]=t[a],i[a]||delete i[a];this.$router.push({path:this.$route.path,query:i})},$_listMixin_updateCurrentPage:function(t){var e=this;this.$_listMixin_getList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$_listMixin_updatePageSize:function(t){var e=this;this.$_listMixin_getList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$_listMixin_getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,a=t.where,n=t.fn;this.listLoading.flag=!0;var r=this.$route.query;this.paginations.current_page=e||Number(r.page)||1,this.paginations.page_size=i||Number(r.page_size)||this.paginations.page_size;var s=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});a&&(s=Object.assign(s,a||{})),this.handleGetList({page_data:s,fn:n})},$_listMixin_init:function(){this.$_listMixin_getList()},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":a(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],a=["start_date","end_date"],n={};return Object.keys(e).forEach(function(r){t.searchbar.defaultValue[r]=i.includes(r)?Number(e[r]):a.includes(r)?t.$options.filters.storeDateFormat(e[r]):e[r],n[r]=e[r]}),n}}}},d42U:function(t,e,i){var a=i("VU/8")(i("zgV1"),i("6z6p"),!1,null,null,null);t.exports=a.exports},zgV1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("DxkE"),n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],a=!0,n=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);a=!0);}catch(t){n=!0,r=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw r}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default={name:"AssetList",mixins:[a.a],data:function(){var t=this;return{fields:[{width:"60",key:"id",label:this.$t("LIST_DATA_HEADING_ID")},{key:"tree_title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable",formatter:function(e){var i=e.split("  "),a=n(i,2),r=a[0],s=a[1];return s?r+" "+t.$t(s):t.$t(r)}},{key:"path",label:"訪問路徑"},{key:"component",label:"元件路徑"},{key:"type",label:"類型"},{key:"state",label:this.$t("OPTION_STATE"),type:"icon-label",width:"90",formatter:function(t){return{color:"item_state_"+t+"_color",icon:["fal",1===t?"check":"times"]}}}],list_btns:{btns:[{text:"指定資源群組",type:"primary",method:"assignGroup",fn:function(e){var i=e.data;t.$router.push({path:t.$route.path+"/assign/group",query:{id:i.id,name:i.full_name}})}}]},toolbar:{type:"list",custom:[{text:this.$t("TOOLBAR_PUBLISH"),method:"updateState",condition:function(t){var e=t.data;return 0===e.state&&null!==e.parent_id},fn:function(e){var i=e.ids;t.handleUpdateState({ids:i,state:1})}},{text:this.$t("TOOLBAR_UNPUBLISH"),method:"updateState",condition:function(t){var e=t.data;return 1===e.state&&null!==e.parent_id},fn:function(e){var i=e.ids;t.handleUpdateState({ids:i,state:0})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0}],defaultValue:{search:""}}}},methods:{handleUpdateOrder:function(t){var e=t.id,i=t.index_diff,a=t.order;this.$$api_asset_ordering({data:{id:e,index_diff:i,order:a},fn:function(t){t.msg}})},handleUpdateState:function(t){var e=this,i=t.ids,a=t.state;this.$$api_asset_updateState({data:{ids:i,state:a},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleBatchDelete:function(t){var e=this,i=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_asset_delete({data:{ids:i},fn:function(t){t.data;e.$_listMixin_getList()}})})},setEditRouteQuery:function(t){var e=t.data;this.$_listMixin_goEditRoute({id:e.id,pid:e.parent_id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,a=e.fn;this.$$api_asset_list({data:i,fn:function(e){var i=e.data;t.listLoading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,a&&a()}})}}}}});