webpackJsonp([38],{PKPN:function(t,e,i){"use strict";e.a={methods:{$initList:function(){this.$set(this.toolbar,"type","-2"===this.$route.query.state?"trash":"list"),this.$onGetList()}}}},kffH:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{List:t.list,ListLoading:t.list_loading,Pagination:t.paginations,Toolbar:t.toolbar,Searchbar:t.searchbar,FieldList:t.fields},on:{onClickBtnAdd:t.$onClickBtnAdd,onClickBtnEdit:t.handleEditQuery,onClickBtnBatchDelete:t.onClickBtnBatchDelete,onClickBtnBatchTrash:t.onClickBtnBatchTrash,onClickBtnBatchRestore:t.onClickBtnBatchRestore,onClickBtnCheckout:t.onClickBtnCheckout,onChangeCurrentPage:t.$onChangeCurrentPage,onChangePageSize:t.$onChangePageSize,onSearch:t.$onSearch,onSearchReset:t.$onSearchReset}})},staticRenderFns:[]}},nNQx:function(t,e,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={data:function(){return{list:[],list_loading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$initList",immediate:!0}},methods:{$onClickBtnAdd:function(){this.$router.push(this.$route.path+"/edit")},$onClickBntEdit:function(t){this.$router.push({path:this.$route.path+"/edit",query:n({},t,{from:this.$route.query})})},$onSearchReset:function(){this.$router.push({path:this.$route.path})},$onSearch:function(t){var e=t.data,i={},a=this.$route.query;for(var n in a)i[n]=a[n];for(var s in e)i[s]=e[s],i[s]||delete i[s];this.$router.push({path:this.$route.path,query:i})},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":a(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],a=["start_date","end_date"],n={};return Object.keys(e).forEach(function(s){t.searchbar.default_value[s]=i.includes(s)?parseInt(e[s]):a.includes(s)?t.$options.filters.storeDateFormat(e[s]):e[s],n[s]=e[s]}),n},$onChangeCurrentPage:function(t){var e=this;this.$onGetList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$onChangePageSize:function(t){var e=this;this.$onGetList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$onGetList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,a=t.where,n=t.fn;this.list_loading.flag=!0;var s=this.$route.query;this.paginations.current_page=e||parseInt(s.page)||1,this.paginations.page_size=i||parseInt(s.page_size)||this.paginations.page_size;var o=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});a&&(o=Object.assign(o,a||{})),this.handleGetList({page_data:o,fn:n})},$initList:function(){this.$onGetList()}}}},zVQQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("nNQx"),n=i("PKPN");e.default={name:"tag-list",mixins:[a.a,n.a],data:function(){var t=this;return{fields:[{key:"title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable"},{key:"state",label:this.$t("OPTION_STATE"),type:"icon-label",width:"90",formatter:function(t){return{color:"item_state_"+t+"_color",icon:["fal",1===t?"check":"times"]}}},{key:"language_title",label:this.$t("OPTION_LANGUAGE"),formatter:function(e){return"*"===e.language?t.$t("ALL_LANGUAGE"):e.language_title}},{width:"60",key:"id",label:this.$t("LIST_DATA_HEADING_ID")}],toolbar:{type:"list",custom:[{text:this.$t("TOOLBAR_PUBLISH"),method:"updateState",condition:function(t){var e=t.data;return 0===e.state&&null!==e.parent_id},fn:function(e){var i=e.ids;t.onClickBtnUpdateState({ids:i,state:1})}},{text:this.$t("TOOLBAR_UNPUBLISH"),method:"updateState",condition:function(t){var e=t.data;return 1===e.state&&null!==e.parent_id},fn:function(e){var i=e.ids;t.onClickBtnUpdateState({ids:i,state:0})}},{text:this.$t("TOOLBAR_CHECKOUT"),method:"checkout",fn:function(e){var i=e.ids;t.onClickBtnCheckout({ids:i})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"state",type:"select",desc:this.$t("OPTION_STATE"),list:[{value:"1",text:this.$t("PUBLISHED")},{value:"0",text:this.$t("UNPUBLISHED")},{value:"-1",text:this.$t("ARCHIVED")},{value:"-2",text:this.$t("TRASHED")}]}],default_value:{search:"",state:""}}}},methods:{onClickBtnCheckout:function(t){var e=this,i=t.data,a=t.ids,n=a||[i.id];this.$$api_tag_checkout({data:{ids:n},fn:function(t){var i=t.msg;e.$message.success(i),e.$onGetList()}})},onClickBtnBatchTrash:function(t){var e=t.ids,i=t.state;this.onClickBtnUpdateState({ids:e,state:i})},onClickBtnBatchRestore:function(t){var e=t.ids,i=t.state;this.onClickBtnUpdateState({ids:e,state:i})},onClickBtnUpdateState:function(t){var e=this,i=t.ids,a=t.state;this.$$api_tag_updateState({data:{ids:i,state:a},fn:function(t){var i=t.msg;e.$message.success(i),e.$onGetList()}})},onClickBtnBatchDelete:function(t){var e=this,i=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_tag_delete({data:{ids:i},fn:function(t){t.data;e.$onGetList()}})})},handleEditQuery:function(t){var e=t.data;this.$onClickBntEdit({id:e.id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,a=e.fn;this.$$api_tag_list({data:i,fn:function(e){var i=e.data;t.list_loading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,a&&a()}})}}}},znxx:function(t,e,i){var a=i("VU/8")(i("zVQQ"),i("kffH"),!1,null,null,null);t.exports=a.exports}});