webpackJsonp([6],{"+ktf":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},computed:{checkTeachingFile:function(){var t=void 0;if(window.XMLHttpRequest)t=new XMLHttpRequest;else if(window.ActiveXObject){try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}t||window.alert("不能创建XMLHttpRequest对象")}if(t.open("GET","/admin/pdf/teaching.pdf",!1),t.send(),4===t.readyState)return 200===t.status&&-1===t.response.indexOf("html")?"exists":"not exists"}}}},"+sXU":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return"exists"===this.checkTeachingFile?e("iframe",{staticClass:"iframe",staticStyle:{border:"0","box-shadow":"0 1px 10px 0 rgba(0, 0, 0, 0.1)"},attrs:{width:"100%",height:"600px",src:"/admin/pdf/teaching.pdf"}}):this._e()},staticRenderFns:[]}},uTj8:function(t,e,i){var n=i("VU/8")(i("+ktf"),i("+sXU"),!1,null,null,null);t.exports=n.exports}});