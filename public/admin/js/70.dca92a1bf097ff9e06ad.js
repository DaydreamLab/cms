webpackJsonp([70],{"8VQK":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container"},[i("textarea",{attrs:{id:t.tinymceId}}),t._v(" "),i("el-button",{staticClass:"custom-toolbar-button",attrs:{size:"mini",type:"primary"},on:{click:function(e){t.mediaDialogVisible=!0}}},[i("font-awesome-icon",{attrs:{icon:["fal","images"]}}),t._v("\n    "+t._s(t.$t("EDITOR_CHOOSE_IMAGE_FROM_MEDIA"))+"\n  ")],1),t._v(" "),i("el-dialog",{attrs:{width:"80%",visible:t.mediaDialogVisible},on:{"update:visible":function(e){t.mediaDialogVisible=e}}},[t.mediaDialogVisible?i("Media",{on:{change:t.onChangeMedia}}):t._e(),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.onClickBtnSelectMedia}},[t._v(t._s(t.$t("SELECT")))])],1)],1)],1)},staticRenderFns:[]}},HXSe:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".custom-toolbar-button[data-v-0c879e3a]{position:absolute;top:4px;right:4px}",""])},"b/NH":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],a=["formatselect fontsizeselect searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indentblockquote removeformat subscript superscript code ","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen undo redo "];e.default={components:{Media:function(){return i.e(68).then(i.bind(null,"gPVg"))}},data:function(){return{mediaPaths:[],mediaDialogVisible:!1,hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1}},props:{id:{type:String,default:"editor-"+ +new Date+(1e3*Math.random()).toFixed(0)},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:400}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{handleInsertMedia:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img src="/storage/media'+t.path+'" >')})},onClickBtnSelectMedia:function(){this.mediaDialogVisible=!1,this.handleInsertMedia(this.mediaPaths)},onChangeMedia:function(t){this.mediaPaths=t},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},initTinymce:function(){var t=this,e=this;window.tinymce.init({language:"zh_TW",selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:a,menubar:this.menubar,plugins:n,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!0,convert_urls:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",i.getContent())})},setup:function(t){}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()}}}},"iB/f":function(t,e,i){var n=i("VU/8")(i("b/NH"),i("8VQK"),!1,function(t){i("ynpC")},"data-v-0c879e3a",null);t.exports=n.exports},ynpC:function(t,e,i){var n=i("HXSe");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("b90bed42",n,!0,{})}});