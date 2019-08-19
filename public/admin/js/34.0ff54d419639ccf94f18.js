webpackJsonp([34],{"6D62":function(t,e,r){"use strict";var n=r("JeHt"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,r,n){this.updateStoreFieldList(t,e[t]||e),n?this.updateSearchbarFieldList(t,r):this.updateFieldList(t,r)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var r=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),n=a(e,2),o=n[0],s=n[1],u=s?o+" "+r.$t(s):r.$t(o);return i({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var s=a.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var a=new n.b.Entity("groups"),u=Object(n.a)(s.items[t],[a]);e.handleUpdateField(t,u.entities.groups,r[t],i)}else e.handleUpdateField(t,s.items,r[t],i)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],n=Object.keys(e).filter(function(e){return!t.checkStoreField(e)});n.length>0&&this.$_optionMixin_handleGetFieldList(n,e,r)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},"71Dd":function(t,e,r){var n=r("VU/8")(r("7xx+"),r("Krf8"),!1,null,null,null);t.exports=n.exports},"7xx+":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("6D62"),i=r("X50X"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default={name:"AssetEdit",mixins:[n.a,i.a],data:function(){var t=this;return{fields:[{key:"parent_id",type:"select",desc:"請選擇",label:"父級資源",list:this.$store.getters.asset_list,custom_attrs:{label:"tree_list_title",value:"id"},events:{change:function(e){var r=e.value,n=t.$store.getters.asset_list.filter(function(t){return t.id===r});t.fields[2].prepend_value=n[0].path,t.fields[3].prepend_value=1===r?"src/layout":"views/"}}},{key:"title",desc:"請輸入資源名稱，名稱不可重複",label:"資源名稱"},{key:"path",desc:"開頭須為 /；若為上層預設頁面，請留空",label:"資源訪問路徑",prepend:!0,prepend_value:""},{key:"component",desc:"若上層為根，請勿填寫",label:"資源文件路徑",prepend:!0,prepend_value:"",append:!0,append_value:".vue"},{key:"type",desc:"請輸入資源類型",label:"資源類型",type:"radio",list:[{text:"別名",value:"alias"},{text:"選單",value:"menu"},{text:"選單標頭",value:"separator"},{text:"功能",value:"function"},{text:"外部連結",value:"url"}],events:{change:function(e){var r=e.value;t.defaultValue.redirect="alias"===r?"noredirect":""}}},{key:"redirect",desc:"請輸入重新導向路徑。若類型為 url 請輸入要連結的網址",label:"重新導向路徑"},{key:"icon",label:"icon",desc:"請輸入icon class"},{key:"state",label:"是否啟用",desc:"",type:"radio",list:[{text:"禁用",value:"0"},{text:"啟用",value:"1"}]},{key:"showNav",label:"顯示在選單",desc:"",type:"radio",list:[{text:"隱藏",value:"0"},{text:"顯示",value:"1"}]}],toolbar:{type:"edit"},defaultValue:{parent_id:1,title:"",path:"",type:"menu",icon:"",component:"",redirect:"",state:1,showNav:1}}},created:function(){this.$_optionMixin_updateFieldList({asset:0}),this.setPathPrefix()},methods:{handleSubmit:function(t){var e=this,r=t.submit_data,n=t.btn_type;this.params.id&&(r.id=this.params.id),this.$$api_asset_save({data:r,fn:function(t){var i=t.data,a=t.msg;e.$_editMixin_onSubmitFinish({msg:a,btn_type:n,query:{id:i?i.items.id:r.id,pid:i?i.items.parent_id:r.parent_id}})}})},handleGetData:function(){var t=this;this.$$api_asset_get({pathVar:this.params.id,fn:function(e){var r=e.data;t.defaultValue=a({},t.defaultValue,r.items)}})},setPathPrefix:function(){this.fields[3].prepend_value=1===this.params.pid?"src/layout":"views/"}}}},JeHt:function(t,e,r){"use strict";function n(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function i(t,e,r){return Object.keys(t).reduce(function(e,n){var i=""+n;return e.has(i)?e.set(i,r(e.get(i),t[i])):e},e)}r.d(e,"b",function(){return $}),r.d(e,"a",function(){return k});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},l=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t){return function(e){return n(e)?e.get(t):e[t]}},f=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var i=n.idAttribute,a=void 0===i?"id":i,s=n.mergeStrategy,c=void 0===s?function(t,e){return u({},t,e)}:s,l=n.processStrategy,f=void 0===l?function(t){return u({},t)}:l;this._key=e,this._getId="function"==typeof a?a:h(a),this._idAttribute=a,this._mergeStrategy=c,this._processStrategy=f,this.define(r)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,r){var n,i=t[r];return u({},e,((n={})[r]=i,n))},this.schema||{})},t.prototype.getId=function(t,e,r){return this._getId(t,e,r)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,r,n,i){var o=this,s=this._processStrategy(t,e,r);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===a(s[t])){var e=o.schema[t];s[t]=n(s[t],s,t,e,i)}}),i(this,s,t,e,r),this.getId(t,e,r)},t.prototype.denormalize=function(t,e){var r=this;return n(t)?i(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var i=r.schema[n];t[n]=e(t[n],i)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),d=function(){function t(e,r){o(this,t),r&&(this._schemaAttribute="string"==typeof r?function(t){return t[r]}:r),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,r){return!this.isSingleSchema&&this._schemaAttribute(t,e,r)},t.prototype.inferSchema=function(t,e,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,r);return this.schema[n]},t.prototype.normalizeValue=function(t,e,r,n,i){var a=this.inferSchema(t,e,r);if(!a)return t;var o=n(t,e,r,a,i);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,r)}},t.prototype.denormalizeValue=function(t,e){var r=n(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!r)return t;var i=n(t)?t.get("id"):t.id,a=this.isSingleSchema?this.schema:this.schema[r];return e(i||t,a)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(r,n){if(o(this,e),!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return l(this,t.call(this,r,n))}return c(e,t),e.prototype.normalize=function(t,e,r,n,i){return this.normalizeValue(t,e,r,n,i)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(d),y=function(t){function e(){return o(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,r,n,i){var a=this;return Object.keys(t).reduce(function(e,r,o){var s,c=t[r];return void 0!==c&&null!==c?u({},e,((s={})[r]=a.normalizeValue(c,t,r,n,i),s)):e},{})},e.prototype.denormalize=function(t,e){var r=this;return Object.keys(t).reduce(function(n,i){var a,o=t[i];return u({},n,((a={})[i]=r.denormalizeValue(o,e),a))},{})},e}(d),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},v=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},b=function(t,e,r,n,i,a){return t=m(t),v(e).map(function(e,o){return i(e,r,n,t,a)})},_=function(t){function e(){return o(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,r,n,i){var a=this;return v(t).map(function(t,o){return a.normalizeValue(t,e,r,n,i)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var r=this;return t&&t.map?t.map(function(t){return r.denormalizeValue(t,e)}):t},e}(d),g=function(t,e,r,n,i,a){var o=u({},e);return Object.keys(t).forEach(function(r){var n=t[r],s=i(e[r],e,r,n,a);void 0===s||null===s?delete o[r]:o[r]=s}),o},O=function(t,e,r){if(n(e))return i(t,e,r);var a=u({},e);return Object.keys(t).forEach(function(e){a[e]&&(a[e]=r(a[e],t[e]))}),a},S=function(){function t(e){o(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,r){var n,i=t[r];return u({},e,((n={})[r]=i,n))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return O.apply(void 0,[this.schema].concat(e))},t}(),$={Array:_,Entity:f,Object:S,Union:p,Values:y},k=function(t,e){if(!t||"object"!==(void 0===t?"undefined":a(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":a(t))+'".');var r={},n=function(t){return function(e,r,n,i,a){var o=e.key,s=e.getId(n,i,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,r):r}}(r);return{entities:r,result:function t(e,r,n,i,o){return"object"===(void 0===e?"undefined":a(e))&&e?"object"!==(void 0===i?"undefined":a(i))||i.normalize&&"function"==typeof i.normalize?i.normalize(e,r,n,t,o):(Array.isArray(i)?b:g)(i,e,r,n,t,o):e}(t,t,null,e,n)}}},Krf8:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("FormData",{attrs:{"default-value":this.defaultValue,"field-list":this.fields,toolbar:this.toolbar},on:{"on-submit":this.handleSubmit,"on-cancel":this.$_editMixin_onCancel}})},staticRenderFns:[]}},X50X:function(t,e,r){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,r=t.btn_type,n=t.query;switch(this.$message.success(e),r){case"save":this.$router.push({path:this.$route.path,query:n});break;case"savenadd":this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel()}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,r=!1,n=void 0;try{for(var i,a=["item","category","menu"][Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;if(t.includes(o))return!0}}catch(t){r=!0,n=t}finally{try{!e&&a.return&&a.return()}finally{if(r)throw n}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}}});