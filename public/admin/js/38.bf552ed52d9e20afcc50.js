webpackJsonp([38],{"8+yn":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListData",{ref:"list-data",attrs:{List:t.list,ListLoading:t.list_loading,Sort:t.sort,Pagination:t.paginations,Toolbar:t.toolbar,Searchbar:t.searchbar,ListActions:t.list_actions,FieldList:t.fields},on:{onClickBtnAdd:t.$onClickBtnAdd,onClickBtnEdit:t.handleEditQuery,onClickBtnBatchDelete:t.onClickBtnBatchDelete,onChangeCurrentPage:t.$onChangeCurrentPage,onChangePageSize:t.$onChangePageSize,onSearch:t.$onSearch,onSearchReset:t.$onSearchReset,onOrderChange:t.onOrderChange}})],1)},staticRenderFns:[]}},d42U:function(t,e,n){var a=n("VU/8")(n("zgV1"),n("8+yn"),!1,null,null,null);t.exports=a.exports},nNQx:function(t,e,n){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={data:function(){return{list:[],list_loading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$initList",immediate:!0}},methods:{$onClickBtnAdd:function(){this.$router.push(this.$route.path+"/edit")},$onClickBntEdit:function(t){this.$router.push({path:this.$route.path+"/edit",query:i({},t,{from:this.$route.query})})},$onSearchReset:function(){this.$router.push({path:this.$route.path})},$onSearch:function(t){var e=t.data,n={},a=this.$route.query;for(var i in a)n[i]=a[i];for(var r in e)n[r]=e[r],n[r]||delete n[r];this.$router.push({path:this.$route.path,query:n})},setRouteQuery:function(t,e){var n=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":a(t))?n=t:n[t]=e,n},getRouteQuery:function(){var t=this,e=this.$route.query,n=["id","pid","category_id","access"],a=["start_date","end_date"],i={};return Object.keys(e).forEach(function(r){t.searchbar.default_value[r]=n.includes(r)?parseInt(e[r]):a.includes(r)?t.$options.filters.storeDateFormat(e[r]):e[r],i[r]=e[r]}),i},$onChangeCurrentPage:function(t){var e=this;this.$onGetList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$onChangePageSize:function(t){var e=this;this.$onGetList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$onGetList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,n=t.pageSize,a=t.where,i=t.fn;this.list_loading.flag=!0;var r=this.$route.query;this.paginations.current_page=e||parseInt(r.page)||1,this.paginations.page_size=n||parseInt(r.page_size)||this.paginations.page_size;var o=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});a&&(o=Object.assign(o,a||{})),this.handleGetList({page_data:o,fn:i})},$initList:function(){this.$onGetList()}}}},zgV1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("nNQx");e.default={name:"asset-list",mixins:[a.a],data:function(){var t=this;return{sort:{show:!0},fields:[{width:"60",key:"id",label:this.$t("LIST_DATA_HEADING_ID")},{key:"tree_title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable",formatter:function(e){return t.$t(e.replace(/;&nbsp/g,"").replace("<sup>|_</sup>","").replace(".&nbsp;",""))}},{key:"path",label:"訪問路徑"},{key:"component",label:"元件路徑"},{key:"type",label:"類型"},{key:"state",label:this.$t("OPTION_STATE"),type:"icon-label",width:"90",formatter:function(t){return{color:"item_state_"+t+"_color",icon:["fal",1===t?"check":"times"]}}}],toolbar:{type:"list",custom:[{text:this.$t("TOOLBAR_PUBLISH"),method:"updateState",condition:function(t){var e=t.data;return 0===e.state&&null!==e.parent_id},fn:function(e){var n=e.ids;t.onClickBtnUpdateState({ids:n,state:1})}},{text:this.$t("TOOLBAR_UNPUBLISH"),method:"updateState",condition:function(t){var e=t.data;return 1===e.state&&null!==e.parent_id},fn:function(e){var n=e.ids;t.onClickBtnUpdateState({ids:n,state:0})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0}],default_value:{search:""}},list_actions:{btns:[{text:"Assign Group",type:"primary",method:"grant_group",fn:function(e){var n=e.data;t.$router.push({path:t.$route.path+"/grant/group",query:{id:n.id,name:n.full_name}})}}]}}},methods:{onOrderChange:function(t){var e=t.id,n=t.index_diff,a=t.order;this.$$api_asset_ordering({data:{id:e,index_diff:n,order:a},fn:function(t){t.msg}})},onClickBtnUpdateState:function(t){var e=this,n=t.ids,a=t.state;this.$$api_asset_updateState({data:{ids:n,state:a},fn:function(t){var n=t.msg;e.$message.success(n),e.$onGetList()}})},onClickBtnBatchDelete:function(t){var e=this,n=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_asset_delete({data:{ids:n},fn:function(t){t.data;e.$onGetList()}})})},handleEditQuery:function(t){var e=t.data;this.$onClickBntEdit({id:e.id,pid:e.parent_id,name:e.name})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.page_data,a=e.fn;this.$$api_asset_list({data:n,fn:function(e){var n=e.data;t.list_loading.flag=!1,t.list=n.items,t.paginations.total=n.pagination.total,a&&a()}})}}}}});