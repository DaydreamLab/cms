webpackJsonp([44],{X50X:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,i=t.btn_type,a=t.query;switch(this.$message.success(e),i){case"save":this.$router.push({path:this.$route.path,query:a});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(a.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,i=!1,a=void 0;try{for(var s,r=["item","category","menu"][Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var n=s.value;if(t.includes(n))return!0}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}},gzhe:function(t,e,i){var a=i("VU/8")(i("i4JA"),i("hg3o"),!1,null,null,null);t.exports=a.exports},hg3o:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("FormData",{attrs:{"default-value":this.defaultValue,"field-list":this.fields,toolbar:this.toolbar},on:{"on-submit":this.handleSubmit,"on-cancel":this.$_editMixin_onCancel}})},staticRenderFns:[]}},i4JA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("X50X"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.default={name:"asset-group-edit",mixins:[a.a],data:function(){return{fields:[{key:"title",desc:"請輸入資源群組名稱",label:"資源群組名稱"},{key:"state",label:"是否啟用",desc:"",type:"radio",list:[{text:"禁用",value:"0"},{text:"啟用",value:"1"}]}],toolbar:{type:"edit"},defaultValue:{title:"",state:1}}},methods:{handleSubmit:function(t){var e=this,i=t.submit_data,a=t.btn_type;this.params.id&&(i.id=this.params.id),this.$$api_asset_saveGroup({data:i,fn:function(t){var s=t.data,r=t.msg;e.$_editMixin_onSubmitFinish({msg:r,btn_type:a,query:{id:s?s.items.id:i.id,pid:s?s.items.parent_id:i.parent_id}})}})},handleGetData:function(){var t=this;this.$$api_asset_getGroup({pathVar:this.params.id,fn:function(e){var i=e.data;t.defaultValue=s({},t.defaultValue,i.items)}})}}}}});