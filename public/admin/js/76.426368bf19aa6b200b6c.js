webpackJsonp([76],{"0tC/":function(t,e,i){var a=i("VU/8")(i("t+yo"),i("9Oyi"),!1,null,null,null);t.exports=a.exports},"9Oyi":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ListData",{ref:"list-data",attrs:{list:t.list,"field-list":t.fields,"list-loading":t.listLoading,sort:{show:!0},pagination:t.paginations,toolbar:t.toolbar,searchbar:t.searchbar},on:{"click-add":t.$_listMixin_goAddRoute,"click-edit":t.setEditRouteQuery,"click-batch-trash":t.handleUpdateState,"click-batch-restore":t.handleUpdateState,"click-batch-delete":t.handleBatchDelete,"click-checkout":t.handleCheckout,"change-current-page":t.$_listMixin_updateCurrentPage,"change-page-size":t.$_listMixin_updatePageSize,search:t.$_listMixin_onSearch,"search-reset":t.$_listMixin_onSearchReset,"on-order-change":t.handleUpdateOrder,"on-sort-change":t.onSortChange}})},staticRenderFns:[]}},DxkE:function(t,e,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={data:function(){return{list:[],listLoading:{flag:!1},paginations:{current_page:1,total:0,page_size:10,page_sizes:[10,15,20,25,50,100],layout:"total, sizes, prev, pager, next, jumper"}}},watch:{$route:{handler:"$_listMixin_init",immediate:!0}},methods:{$_listMixin_goAddRoute:function(){this.$router.push(this.$route.path+"/edit")},$_listMixin_goEditRoute:function(t){this.$router.push({path:this.$route.path+"/edit",query:s({},t,{from:this.$route.query})})},$_listMixin_onSearchReset:function(){this.$router.push({path:this.$route.path})},$_listMixin_onSearch:function(t){var e=this.$route.query,i=s({},e);for(var a in t)i[a]=t[a],i[a]||delete i[a];this.$router.push({path:this.$route.path,query:i})},$_listMixin_updateCurrentPage:function(t){var e=this;this.$_listMixin_getList({page:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page",t)})}})},$_listMixin_updatePageSize:function(t){var e=this;this.$_listMixin_getList({pageSize:t,fn:function(){e.$router.push({path:e.$route.path,query:e.setRouteQuery("page_size",t)})}})},$_listMixin_getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,i=t.pageSize,a=t.where,s=t.fn;this.listLoading.flag=!0;var n=this.$route.query;this.paginations.current_page=e||Number(n.page)||1,this.paginations.page_size=i||Number(n.page_size)||this.paginations.page_size;var r=Object.assign(this.getRouteQuery(),{page:this.paginations.current_page,limit:this.paginations.page_size});a&&(r=Object.assign(r,a||{})),this.handleGetList({page_data:r,fn:s})},$_listMixin_init:function(){this.$_listMixin_getList()},setRouteQuery:function(t,e){var i=Object.assign({},this.$route.query);return"object"===(void 0===t?"undefined":a(t))?i=t:i[t]=e,i},getRouteQuery:function(){var t=this,e=this.$route.query,i=["id","pid","category_id","access"],a=["start_date","end_date"],s={};return Object.keys(e).forEach(function(n){t.searchbar.defaultValue[n]=i.includes(n)?Number(e[n]):a.includes(n)?t.$options.filters.storeDateFormat(e[n]):e[n],s[n]=e[n]}),s}}}},h3bP:function(t,e,i){"use strict";e.a={methods:{$_listMixin_init:function(){this.$set(this.toolbar,"type","-2"===this.$route.query.state?"trash":"list"),this.$_listMixin_getList()}}}},"t+yo":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("6D62"),s=i("DxkE"),n=i("h3bP");e.default={name:"ItemList",mixins:[a.a,s.a,n.a],data:function(){var t=this;return{sort:{show:!0},fields:[{key:"title",label:this.$t("FIELD_TITLE_LABEL"),type:"editable",width:300},{key:"featured",label:this.$t("OPTION_FEATURED"),type:"icon",width:"80",formatter:function(t){return{style:{color:1===t?"#fdd034":"#cfd3da"},icon:["fas","star"]}}},{key:"state",label:this.$t("OPTION_STATE"),type:"publish-label",width:"120",formatter:function(e){var i=e.state,a=e.publish_up,s=e.publish_down;return i=1===i?t.formatPublishState(a,s):i,{text:t.$t({1:"PUBLISHED",0:"UNPUBLISHED","-1":"ARCHIVED","-2":"TRASHED",2:"PENDING",3:"EXPIRED"}[i]),color:"item_state_"+i+"_color"}}},{key:"category_title",label:this.$t("OPTION_CATEGORY"),width:"120"},{key:"creator",label:this.$t("LIST_DATA_AUTHOR_LABEL")},{key:"updater",label:this.$t("LIST_DATA_MODIFIED_BY_LABEL"),width:"100"},{key:"created_at",label:this.$t("LIST_DATA_CREATED_DATE_LABEL"),formatter:function(e){var i=e.created_at;return t.$options.filters.displayDateFormat(i)}},{key:"updated_at",label:this.$t("LIST_DATA_MODIFIED_DATE_LABEL"),formatter:function(e){var i=e.updated_at;return t.$options.filters.displayDateFormat(i)}},{key:"hits",label:this.$t("LIST_DATA_HITS_LABEL")},{key:"introimage",label:this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),type:"icon",sort:!1,formatter:function(t){return{icon:t?["fal","image"]:""}}},{key:"image",label:this.$t("LIST_DATA_IMAGE_LABEL"),type:"icon",sort:!1,formatter:function(t){return{icon:t?["fal","image"]:""}}},{key:"language_title",label:this.$t("OPTION_LANGUAGE"),width:"100",formatter:function(e){var i=e.language,a=e.language_title;return"*"===i?t.$t("ALL_LANGUAGE"):a}},{key:"id",label:this.$t("LIST_DATA_HEADING_ID"),width:"60"}],toolbar:{type:"list",custom:[{text:this.$t("TOOLBAR_PUBLISH"),method:"handleUpdateState",fn:function(e){var i=e.ids;t.handleUpdateState({ids:i,state:1})}},{text:this.$t("TOOLBAR_UNPUBLISH"),method:"handleUpdateState",fn:function(e){var i=e.ids;t.handleUpdateState({ids:i,state:0})}},{text:this.$t("TOOLBAR_FEATURED"),method:"updateFeatured",fn:function(e){var i=e.ids;t.handleUpdateFeatured({ids:i,featured:1})}},{text:this.$t("TOOLBAR_UNFEATURED"),method:"updateFeatured",fn:function(e){var i=e.ids;t.handleUpdateFeatured({ids:i,featured:0})}},{text:this.$t("TOOLBAR_CHECKOUT"),method:"checkout",fn:function(e){var i=e.ids;t.handleCheckout({ids:i})}}]},searchbar:{fields:[{key:"search",desc:this.$t("TOOLBAR_KEYWORDS"),clearable:!0},{key:"featured",type:"select",desc:this.$t("OPTION_FEATURED"),clearable:!0,list:[{value:"1",text:this.$t("FEATURED")},{value:"0",text:this.$t("NOT_FEATURED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"state",type:"select",desc:this.$t("OPTION_STATE"),clearable:!0,list:[{value:"1",text:this.$t("PUBLISHED")},{value:"0",text:this.$t("UNPUBLISHED")},{value:"-1",text:this.$t("ARCHIVED")},{value:"-2",text:this.$t("TRASHED")}],events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"category_id",type:"select",desc:this.$t("OPTION_CATEGORY"),clearable:!0,list:this.$store.getters.item_article_category_list,custom_attrs:{label:"tree_list_title",value:"id"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"language",type:"select",desc:this.$t("OPTION_LANGUAGE"),clearable:!0,list:this.$store.getters.language_list,custom_attrs:{label:"title",value:"sef"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}},{key:"access",type:"select",desc:this.$t("FIELD_ACCESS_LEVEL"),clearable:!0,list:this.$store.getters.viewlevel_list,custom_attrs:{label:"title",value:"id"},events:{change:function(){t.$_listMixin_onSearch(t.searchbar.defaultValue)}}}],defaultValue:{search:"",state:"",featured:"",category_id:"",language:"",access:""}}}},created:function(){this.$_optionMixin_updateFieldList({item_article_category:3,language:4,viewlevel:5},!0)},methods:{formatPublishState:function(t,e){var i=new Date,a=i>new Date(e),s=new Date(t)>i;return e&&a?3:s?2:1},handleCheckout:function(t){var e=this,i=t.data,a=t.ids,s=a||[i.id];this.$$api_item_checkout({data:{ids:s},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleUpdateOrder:function(t){var e=this,i=t.id,a=t.index_diff,s=t.order;this.$$api_item_ordering({data:{id:i,index_diff:a,order:s},fn:function(t){var i=t.msg;e.$message.success(i)}})},onSortChange:function(t){this.$_listMixin_getList({where:{order_by:"ordering",order:t.replace("ending","")}})},handleUpdateFeatured:function(t){var e=this,i=t.ids,a=t.featured;this.$$api_item_updateFeatured({data:{ids:i,featured:a},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleUpdateState:function(t){var e=this,i=t.ids,a=t.state;this.$$api_item_updateState({data:{ids:i,state:a},fn:function(t){var i=t.msg;e.$message.success(i),e.$_listMixin_getList()}})},handleBatchDelete:function(t){var e=this,i=t.ids;t.datas;this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function(){e.$$api_item_delete({data:{ids:i},fn:function(t){t.data;e.$_listMixin_getList()}})})},setEditRouteQuery:function(t){var e=t.data;this.$_listMixin_goEditRoute({id:e.id})},handleGetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page_data,a=e.fn;this.$$api_item_list({data:i,fn:function(e){var i=e.data;t.listLoading.flag=!1,t.list=i.items,t.paginations.total=i.pagination.total,a&&a()}})}},watch:{$route:function(t){var e=this;0===Object.keys(t.query).length&&Object.keys(this.searchbar.defaultValue).forEach(function(t){e.searchbar.defaultValue[t]=""})}}}}});