webpackJsonp([6],{Ag9o:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Lokx"),a=i.n(n),r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,a=!1,r=void 0;try{for(var d,o=t[Symbol.iterator]();!(n=(d=o.next()).done)&&(i.push(d.value),!e||i.length!==e);n=!0);}catch(t){a=!0,r=t}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default={components:{Item:function(){return i.e(5).then(i.bind(null,"t2Pn"))}},data:function(){return{list:[],listId:"list-"+ +new Date+(1e3*Math.random()).toFixed(0),listLoading:!1,activeId:"",isAdding:!1}},props:{type:{type:String,required:!0},category:{type:Object,default:function(){return{}}}},mounted:function(){this.handleGetList()},methods:{onClickBtnAdd:function(){this.isAdding=!0,this.onChangeActive()},onChangeActive:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.activeId=t},handleOrderChange:function(t){var e=this,i=t.id,n=t.index_diff,a=t.order;this.$$api_item_ordering({data:{id:i,index_diff:n,order:a},fn:function(t){var i=t.msg;e.$message.success(i)}})},handleGetList:function(){var t=this;this.listLoading=!0,this.$$api_item_list({data:{category_id:this.Category.id,extension:"item",content_type:this.Type,order_by:"ordering",order:"desc"},fn:function(e){var i=e.data;t.list=i.items,t.$nextTick(function(){t.initSortableList()})},finalFn:function(){t.listLoading=!1}})},initSortableList:function(){var t=this,e=document.getElementById(this.listId);e&&a.a.create(e,{handle:".sortable-handler",onEnd:function(e){var i=e.newIndex,n=e.oldIndex,a=t.list.splice(n,1),d=r(a,1)[0];t.list.splice(i,0,d),t.handleOrderChange({id:t.list[i].id,index_diff:i-n,order:"desc"})}})}}}},G4vn:function(t,e,i){var n=i("VU/8")(i("Ag9o"),i("sqsl"),!1,function(t){i("WU88")},"data-v-4f60cad2",null);t.exports=n.exports},MtBM:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".el-collapse[data-v-4f60cad2]{margin-top:15px}",""])},WU88:function(t,e,i){var n=i("MtBM");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("17a23f23",n,!0,{})},sqsl:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}]},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.onClickBtnAdd}},[i("font-awesome-icon",{attrs:{icon:["fal","plus"]}}),t._v("\n    "+t._s(t.$t("TOOLBAR_ADD"))+"\n  ")],1),t._v(" "),t.list.length>0||t.isAdding?i("div",{staticClass:"el-collapse",attrs:{id:t.listId}},[t.isAdding?i("Item",{attrs:{type:t.Type,data:{extrafield_group_id:t.Category.item_extrafield},category:t.Category,"is-disabled":!1,"is-active":""},on:{"update-active":function(e){t.isAdding=!1},update:t.handleGetList}}):t._e(),t._v(" "),t._l(t.list,function(e){return i("Item",{key:e.id,attrs:{type:t.Type,category:t.Category,data:e,"is-active":t.activeId===e.id,"is-disabled":Boolean(t.activeId&&t.activeId!==e.id)},on:{"update-active":t.onChangeActive,update:t.handleGetList}},[t._v(t._s(e))])})],2):t._e()],1)},staticRenderFns:[]}}});