webpackJsonp([44],{"0tTj":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{List:t.list,ListLoading:t.list_loading,Pagination:t.paginations,Toolbar:t.toolbar,Searchbar:t.searchbar,FieldList:t.fields},on:{onClickBtnAdd:t.$onClickBtnAdd,onClickBtnEdit:t.handleEditQuery,onClickBtnBatchDelete:t.onClickBtnBatchDelete,onChangeCurrentPage:t.$onChangeCurrentPage,onChangePageSize:t.$onChangePageSize,onSearch:t.$onSearch,onSearchReset:t.$onSearchReset}})},staticRenderFns:[]}},PEVp:function(t,e,a){var i=a("VU/8")(a("S0Y1"),a("0tTj"),!1,null,null,null);t.exports=i.exports},S0Y1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("nNQx");e.default={name:"api-list",mixins:[i.a],data:function(){var t=this;return{fields:[{key:"url",label:"路徑",type:"editable"},{key:"asset_title",label:"隸屬資源",formatter:function(e){return t.$t(e.asset_title)}},{key:"method",label:"代碼"},{width:"60",key:"id",label:this.$t("LIST_DATA_HEADING_ID")}],toolbar:{type:"list"},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0}],default_value:{search:""}}}},methods:{onClickBtnUpdateState:function(t){var e=this,a=t.ids,i=t.state;this.$$api_api_updateState({data:{ids:a,state:i},fn:function(t){var a=t.msg;e.$message.success(a),e.$onGetList()}})},onClickBtnBatchDelete:function(t){var e=this,a=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_api_delete({data:{ids:a},fn:function(t){t.data;e.$onGetList()}})})},handleEditQuery:function(t){var e=t.data;this.$onClickBntEdit({id:e.id,pid:e.parent_id,name:e.name})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.page_data,i=e.fn;this.$$api_api_list({data:a,fn:function(e){var a=e.data;t.list_loading.flag=!1,t.list=a.items,t.paginations.total=a.pagination.total,i&&i()}})}}}},nNQx:function(t,e,a){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.a={data:function(){return{list:[],list_loading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$initList",immediate:!0}},methods:{$onClickBtnAdd:function(){this.$router.push(this.$route.path+"/edit")},$onClickBntEdit:function(t){this.$router.push({path:this.$route.path+"/edit",query:n({},t,{from:this.$route.query})})},$onSearchReset:function(){this.$router.push({path:this.$route.path})},$onSearch:function(t){var e=t.data,a={},i=this.$route.query;for(var n in i)a[n]=i[n];for(var s in e)a[s]=e[s],a[s]||delete a[s];this.$router.push({path:this.$route.path,query:a})},setRouteQuery:function(t,e){var a=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":i(t))?a=t:a[t]=e,a},getRouteQuery:function(){var t=this,e=this.$route.query,a=["id","pid","category_id","access"],i=["start_date","end_date"],n={};return Object.keys(e).forEach(function(s){t.searchbar.default_value[s]=a.includes(s)?parseInt(e[s]):i.includes(s)?t.$options.filters.storeDateFormat(e[s]):e[s],n[s]=e[s]}),n},$onChangeCurrentPage:function(t){var e=this;this.$onGetList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$onChangePageSize:function(t){var e=this;this.$onGetList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$onGetList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,a=t.pageSize,i=t.where,n=t.fn;this.list_loading.flag=!0;var s=this.$route.query;this.paginations.current_page=e||parseInt(s.page)||1,this.paginations.page_size=a||parseInt(s.page_size)||this.paginations.page_size;var r=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});i&&(r=Object.assign(r,i||{})),this.handleGetList({page_data:r,fn:n})},$initList:function(){this.$onGetList()}}}}});