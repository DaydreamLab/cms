webpackJsonp([46],{"3gnj":function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("FormData",{attrs:{FieldList:this.fields,DefaultValue:this.default_value,Toolbar:this.toolbar},on:{onSubmit:this.onSubmit,onCancel:this.onCancel}})},staticRenderFns:[]}},b6Cg:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:function(){this.$initView()}},created:function(){this.$initView()},methods:{$onSubmitFinish:function(t){var e=t.type,i=t.query;switch(e){case"save":this.$router.push({path:this.$route.path,query:i});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$onCancel()}},$onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},onUpdateViewParams:function(){this.params.id=parseInt(this.$route.query.id)||"",this.params.pid=parseInt(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},$initView:function(){this.onUpdateViewParams(),this.params.id&&this.onGetView()}}}},gzhe:function(t,e,i){var a=i("VU/8")(i("i4JA"),i("3gnj"),!1,null,null,null);t.exports=a.exports},i4JA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("b6Cg"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.default={name:"asset-group-edit",mixins:[a.a],data:function(){return{fields:[{key:"title",desc:"請輸入資源群組名稱",label:"資源群組名稱"},{key:"state",label:"是否啟用",desc:"",type:"radio",list:[{text:"禁用",value:"0"},{text:"啟用",value:"1"}]}],toolbar:{type:"edit"},default_value:{title:"",state:1}}},methods:{onSubmit:function(t){var e=this,i=t.data,a=(t.info,t.type);this.params.id&&(i.id=this.params.id),this.$$api_asset_saveGroup({data:i,fn:function(t){var i=t.data,s=t.msg;e.$message.success(s),e.$onSubmitFinish({type:a,query:{id:i.items.id,pid:i.items.parent_id}})}})},onCancel:function(){this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$router.go(-1)})},onGetView:function(){var t=this;this.$$api_asset_getGroup({pathVar:this.params.id,fn:function(e){var i=e.data;t.default_value=s({},t.default_value,i.items)}})}}}}});