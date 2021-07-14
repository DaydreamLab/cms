webpackJsonp([24],{"/1qG":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("DxkE");e.default={name:"UserLogList",mixins:[a.a],data:function(){var t=this;return{list:[],fields:[{key:"creator",label:this.$t("GLOBAL_USERNAME")},{key:"created_at",label:this.$t("LIST_DATA_CREATED_DATE_LABEL"),formatter:function(e){var i=e.created_at;return t.$options.filters.displayDateFormat(i)}},{key:"type",label:this.$t("OPTION_TYPE")},{key:"action",label:this.$t("LIST_DATA_ACTIONS_LABEL")}],searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"start_date",type:"date",desc:this.$t("FIELD_SEARCH_START_DATE"),clearable:!0,date_attrs:{"value-format":"yyyy-MM-dd HH:mm:ss"}},{key:"end_date",type:"date",desc:this.$t("FIELD_SEARCH_END_DATE"),clearable:!0,date_attrs:{"value-format":"yyyy-MM-dd HH:mm:ss"}}],defaultValue:{search:"",start_date:"",end_date:""}}}},methods:{handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,a=e.fn;this.$$api_observer_log({data:i,fn:function(e){var i=e.data;t.listLoading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,a&&a()}})}}}},"0Aam":function(t,e,i){var a=i("VU/8")(i("/1qG"),i("GC3p"),!1,function(t){i("B0QF")},"data-v-79b05a4c",null);t.exports=a.exports},B0QF:function(t,e,i){var a=i("DQIo");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("3e756cd0",a,!0,{})},DQIo:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},DxkE:function(t,e,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={data:function(){return{list:[],listLoading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$_listMixin_init",immediate:!0}},methods:{$_listMixin_goAddRoute:function(){this.$router.push(this.$route.path+"/edit")},$_listMixin_goEditRoute:function(t){this.$router.push({path:this.$route.path+"/edit",query:s({},t,{from:this.$route.query})})},$_listMixin_onSearchReset:function(){this.$router.push({path:this.$route.path})},$_listMixin_onSearch:function(t){var e=this.$route.query,i=s({},e);for(var a in t)i[a]=t[a],i[a]||delete i[a];this.$router.push({path:this.$route.path,query:i})},$_listMixin_updateCurrentPage:function(t){var e=this;this.$_listMixin_getList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$_listMixin_updatePageSize:function(t){var e=this;this.$_listMixin_getList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$_listMixin_getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,a=t.where,s=t.fn;this.listLoading.flag=!0;var r=this.$route.query;this.paginations.current_page=e||Number(r.page)||1,this.paginations.page_size=i||Number(r.page_size)||this.paginations.page_size;var n=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});a&&(n=Object.assign(n,a||{})),this.handleGetList({page_data:n,fn:s})},$_listMixin_init:function(){this.$_listMixin_getList()},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":a(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],a=["start_date","end_date"],s={};return Object.keys(e).forEach(function(r){t.searchbar.defaultValue[r]=i.includes(r)?Number(e[r]):a.includes(r)?t.$options.filters.storeDateFormat(e[r]):e[r],s[r]=e[r]}),s}}}},GC3p:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{"list-loading":t.listLoading,pagination:t.paginations,list:t.list,"field-list":t.fields,searchbar:t.searchbar},on:{"change-current-page":t.$_listMixin_updateCurrentPage,"change-page-size":t.$_listMixin_updatePageSize,search:t.$_listMixin_onSearch,"search-reset":t.$_listMixin_onSearchReset}})},staticRenderFns:[]}}});