webpackJsonp([35],{STgz:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"AssetAssignGroup",data:function(){return{params:{asset_id:""},fields:[{key:"group_ids",label:"選擇群組",type:"tree",list:[],custom_attrs:{label:"title"},tree_attrs:{"check-strictly":!0}}],defaultValue:{group_ids:[]},toolbar:{default:["save","savenclose","savenadd","cancel","delete","preview"],custom:[]}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{handleSubmit:function(t){var a=this,e=t.submit_data,s=t.btn_type;this.params.asset_id&&(e.asset_id=this.params.asset_id),this.$$api_asset_assignGroup({data:e,fn:function(t){t.data;var i=t.msg;a.$_editMixin_onSubmitFinish({msg:i,btn_type:s,query:{id:e.id}})}})},onCancel:function(){this.$router.push(this.$route.path.replace("/assign",""))},handleGetData:function(){var t=this;this.$$api_asset_group({pathVar:this.params.asset_id,fn:function(a){var e=a.data;t.defaultValue.group_ids=e.items.map(function(t){return t.id}),t.$$api_asset_listGroup({fn:function(a){var e=a.data;t.fields[0].list=e.items}})}})},updateParams:function(){this.params.asset_id=Number(this.$route.query.id)||""},initData:function(){this.updateParams(),this.params.asset_id&&this.handleGetData()}}}},Uu2y:function(t,a){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("FormData",{attrs:{"default-value":this.defaultValue,"field-list":this.fields,toolbar:this.toolbar},on:{"on-submit":this.handleSubmit,"on-cancel":this.onCancel}})},staticRenderFns:[]}},lHhS:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},qlrW:function(t,a,e){var s=e("lHhS");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("5698e7b8",s,!0,{})},"tp+D":function(t,a,e){var s=e("VU/8")(e("STgz"),e("Uu2y"),!1,function(t){e("qlrW")},null,null);t.exports=s.exports}});