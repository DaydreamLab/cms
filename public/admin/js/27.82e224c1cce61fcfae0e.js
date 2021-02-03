webpackJsonp([27],{"6D62":function(t,e,i){"use strict";var r=i("JeHt"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],r=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(i.push(o.value),!e||i.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a={methods:{handleUpdateField:function(t,e,i,r){this.updateStoreFieldList(t,e[t]||e),r?this.updateSearchbarFieldList(t,i):this.updateFieldList(t,i)},updateFieldList:function(t,e){this.fields[e].list=this.$store.getters[t+"_list"]},updateSearchbarFieldList:function(t,e){this.searchbar.fields[e].list=this.$store.getters[t+"_list"]},updateStoreFieldList:function(t,e){var i=this;"language"===t&&(e=[{sef:"*",title:this.$t("ALL_LANGUAGE")}].concat(o(e))),"asset"===t&&(e=e.map(function(t){var e=t.tree_list_title.split(" "),r=a(e,2),o=r[0],s=r[1],u=s?o+" "+i.$t(s):i.$t(o);return n({},t,{tree_list_title:u})})),"asset"!==t&&"item_category"!==t&&"menu_category"!==t||(e[0].tree_list_title=e[0].tree_list_title.replace("ROOT",this.$t("GLOBAL_ROOT"))),this.$store.dispatch("update_option_related_list",{type:t,data:e})},$_optionMixin_handleGetFieldList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];this.$$api_option_list({data:{types:t},fn:function(a){var s=a.data;t.forEach(function(t){if("extrafield_group"===t){s.items[t]=[{id:0,value:"",title:e.$t("OPTION_NONE")}].concat(o(s.items[t]));var a=new r.b.Entity("groups"),u=Object(r.a)(s.items[t],[a]);e.handleUpdateField(t,u.entities.groups,i[t],n)}else e.handleUpdateField(t,s.items,i[t],n)})}})},$_optionMixin_updateFieldList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=Object.keys(e).filter(function(e){return!t.checkStoreField(e)||"item_article_category"===e||"item_category"===e||"extrafield_group"===e});r.length>0&&this.$_optionMixin_handleGetFieldList(r,e,i)},checkStoreField:function(t){return Boolean(this.$store.getters[t+"_list"])}}}},"71Dd":function(t,e,i){var r=i("VU/8")(i("7xx+"),i("Krf8"),!1,null,null,null);t.exports=r.exports},"7xx+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("6D62"),n=i("X50X"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.default={name:"AssetEdit",mixins:[r.a,n.a],data:function(){var t=this;return{fields:[{key:"parent_id",type:"select",desc:"請選擇",label:"父級資源",list:this.$store.getters.asset_list,custom_attrs:{label:"tree_list_title",value:"id"},events:{change:function(e){var i=e.value,r=t.$store.getters.asset_list.filter(function(t){return t.id===i});t.fields[2].prepend_value=r[0].path,t.fields[3].prepend_value=1===i?"src/layout":"views/"}}},{key:"title",desc:"請輸入資源名稱，名稱不可重複",label:"資源名稱"},{key:"path",desc:"開頭須為 /；若為上層預設頁面，請留空",label:"資源訪問路徑",prepend:!0,prepend_value:""},{key:"component",desc:"若上層為根，請勿填寫",label:"資源文件路徑",prepend:!0,prepend_value:"",append:!0,append_value:".vue"},{key:"type",desc:"請輸入資源類型",label:"資源類型",type:"radio",list:[{text:"別名",value:"alias"},{text:"選單",value:"menu"},{text:"選單標頭",value:"separator"},{text:"功能",value:"function"},{text:"外部連結",value:"url"}],events:{change:function(e){var i=e.value;t.defaultValue.redirect="alias"===i?"noredirect":""}}},{key:"redirect",desc:"請輸入重新導向路徑。若類型為 url 請輸入要連結的網址",label:"重新導向路徑"},{key:"icon",label:"icon",desc:"請輸入icon class"},{key:"state",label:"是否啟用",desc:"",type:"radio",list:[{text:"禁用",value:"0"},{text:"啟用",value:"1"}]},{key:"showNav",label:"顯示在選單",desc:"",type:"radio",list:[{text:"隱藏",value:"0"},{text:"顯示",value:"1"}]}],toolbar:{type:"edit"},defaultValue:{parent_id:1,title:"",path:"",type:"menu",icon:"",component:"",redirect:"",state:1,showNav:1}}},created:function(){this.$_optionMixin_updateFieldList({asset:0}),this.setPathPrefix()},methods:{handleSubmit:function(t){var e=this,i=t.submit_data,r=t.btn_type;this.params.id&&(i.id=this.params.id),this.$$api_asset_save({data:i,fn:function(t){var n=t.data,a=t.msg;e.$_editMixin_onSubmitFinish({msg:a,btn_type:r,query:{id:n?n.items.id:i.id,pid:n?n.items.parent_id:i.parent_id}})}})},handleGetData:function(){var t=this;this.$$api_asset_get({pathVar:this.params.id,fn:function(e){var i=e.data;t.defaultValue=a({},t.defaultValue,i.items)}})},setPathPrefix:function(){this.fields[3].prepend_value=1===this.params.pid?"src/layout":"views/"}}}},JeHt:function(t,e,i){"use strict";function r(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function n(t,e,i){return Object.keys(t).reduce(function(e,r){var n=""+r;return e.has(n)?e.set(n,i(e.get(n),t[n])):e},e)}i.d(e,"b",function(){return k}),i.d(e,"a",function(){return $});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},c=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},l=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t){return function(e){return r(e)?e.get(t):e[t]}},f=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var n=r.idAttribute,a=void 0===n?"id":n,s=r.mergeStrategy,c=void 0===s?function(t,e){return u({},t,e)}:s,l=r.processStrategy,f=void 0===l?function(t){return u({},t)}:l;this._key=e,this._getId="function"==typeof a?a:h(a),this._idAttribute=a,this._mergeStrategy=c,this._processStrategy=f,this.define(i)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,n=t[i];return u({},e,((r={})[i]=n,r))},this.schema||{})},t.prototype.getId=function(t,e,i){return this._getId(t,e,i)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,i,r,n){var o=this,s=this._processStrategy(t,e,i);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"===a(s[t])){var e=o.schema[t];s[t]=r(s[t],s,t,e,n)}}),n(this,s,t,e,i),this.getId(t,e,i)},t.prototype.denormalize=function(t,e){var i=this;return r(t)?n(this.schema,t,e):(Object.keys(this.schema).forEach(function(r){if(t.hasOwnProperty(r)){var n=i.schema[r];t[r]=e(t[r],n)}}),t)},s(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),d=function(){function t(e,i){o(this,t),i&&(this._schemaAttribute="string"==typeof i?function(t){return t[i]}:i),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,i){return!this.isSingleSchema&&this._schemaAttribute(t,e,i)},t.prototype.inferSchema=function(t,e,i){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,i);return this.schema[r]},t.prototype.normalizeValue=function(t,e,i,r,n){var a=this.inferSchema(t,e,i);if(!a)return t;var o=r(t,e,i,a,n);return this.isSingleSchema||void 0===o||null===o?o:{id:o,schema:this.getSchemaAttribute(t,e,i)}},t.prototype.denormalizeValue=function(t,e){var i=r(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!i)return t;var n=r(t)?t.get("id"):t.id,a=this.isSingleSchema?this.schema:this.schema[i];return e(n||t,a)},s(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(i,r){if(o(this,e),!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return l(this,t.call(this,i,r))}return c(e,t),e.prototype.normalize=function(t,e,i,r,n){return this.normalizeValue(t,e,i,r,n)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(d),y=function(t){function e(){return o(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,i,r,n){var a=this;return Object.keys(t).reduce(function(e,i,o){var s,c=t[i];return void 0!==c&&null!==c?u({},e,((s={})[i]=a.normalizeValue(c,t,i,r,n),s)):e},{})},e.prototype.denormalize=function(t,e){var i=this;return Object.keys(t).reduce(function(r,n){var a,o=t[n];return u({},r,((a={})[n]=i.denormalizeValue(o,e),a))},{})},e}(d),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},v=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},b=function(t,e,i,r,n,a){return t=m(t),v(e).map(function(e,o){return n(e,i,r,t,a)})},_=function(t){function e(){return o(this,e),l(this,t.apply(this,arguments))}return c(e,t),e.prototype.normalize=function(t,e,i,r,n){var a=this;return v(t).map(function(t,o){return a.normalizeValue(t,e,i,r,n)}).filter(function(t){return void 0!==t&&null!==t})},e.prototype.denormalize=function(t,e){var i=this;return t&&t.map?t.map(function(t){return i.denormalizeValue(t,e)}):t},e}(d),g=function(t,e,i,r,n,a){var o=u({},e);return Object.keys(t).forEach(function(i){var r=t[i],s=n(e[i],e,i,r,a);void 0===s||null===s?delete o[i]:o[i]=s}),o},O=function(t,e,i){if(r(e))return n(t,e,i);var a=u({},e);return Object.keys(t).forEach(function(e){a[e]&&(a[e]=i(a[e],t[e]))}),a},S=function(){function t(e){o(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,i){var r,n=t[i];return u({},e,((r={})[i]=n,r))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return g.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return O.apply(void 0,[this.schema].concat(e))},t}(),k={Array:_,Entity:f,Object:S,Union:p,Values:y},$=function(t,e){if(!t||"object"!==(void 0===t?"undefined":a(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":a(t))+'".');var i={},r=function(t){return function(e,i,r,n,a){var o=e.key,s=e.getId(r,n,a);o in t||(t[o]={});var u=t[o][s];t[o][s]=u?e.merge(u,i):i}}(i);return{entities:i,result:function t(e,i,r,n,o){return"object"===(void 0===e?"undefined":a(e))&&e?"object"!==(void 0===n?"undefined":a(n))||n.normalize&&"function"==typeof n.normalize?n.normalize(e,i,r,t,o):(Array.isArray(n)?b:g)(n,e,i,r,t,o):e}(t,t,null,e,r)}}},Krf8:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("FormData",{attrs:{"default-value":this.defaultValue,"field-list":this.fields,toolbar:this.toolbar},on:{"on-submit":this.handleSubmit,"on-cancel":this.$_editMixin_onCancel}})},staticRenderFns:[]}},X50X:function(t,e,i){"use strict";e.a={data:function(){return{params:{id:"",pid:""},toolbar:{type:"edit"}}},watch:{$route:{immediate:!0,handler:"initData"}},methods:{$_editMixin_onSubmitFinish:function(t){var e=t.msg,i=t.btn_type,r=t.query;switch(this.$message.success(e),i){case"save":this.$router.push({path:this.$route.path,query:r});break;case"savenadd":this.checkRouteNeedCheckout(this.$route.path)&&r.id&&this.handleCheckout(r.id),this.$router.push({path:this.$route.path}),this.$router.go(0);break;case"savenclose":this.$_editMixin_onCancel(r.id)}},$_editMixin_onCancel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkRouteNeedCheckout(this.$route.path)&&t&&this.handleCheckout(t),this.$router.push({path:this.$route.path.replace("/edit",""),query:this.$route.query.from})},checkRouteNeedCheckout:function(t){var e=!0,i=!1,r=void 0;try{for(var n,a=["item","category","menu","site"][Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var o=n.value;if(t.includes(o))return!0}}catch(t){i=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw r}}},updateParams:function(){this.params.id=Number(this.$route.query.id)||"",this.params.pid=Number(this.$route.query.pid)||1,this.$set(this.toolbar,"type",this.params.id?"edit":"add")},initData:function(){this.updateParams(),this.params.id&&this.handleGetData()}}}}});