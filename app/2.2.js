webpackJsonp([2],{21:function(t,e,n){var r,o;n(22),r=n(24);var a=n(25);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-f9bb7d2e",t.exports=r},22:function(t,e,n){var r=n(23);"string"==typeof r&&(r=[[t.id,r,""]]);n(11)(r,{});r.locals&&(t.exports=r.locals)},23:function(t,e,n){e=t.exports=n(10)(),e.push([t.id,".btn[data-v-f9bb7d2e]{padding:50px;text-align:center}.btn button[data-v-f9bb7d2e]{padding:5px 10px}",""])},24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(18),a=n(19);e.default={methods:r({},(0,o.mapActions)([a.USER_SIGNOUT]),{submit:function(){this.USER_SIGNOUT(),this.$router.replace({path:"/login"})}})}},25:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-header",{attrs:{title:"退出"}},[n("router-link",{attrs:{to:"/home"},slot:"left"},[t._v("返回")])],1),t._v(" "),n("div",{staticClass:"btn"},[n("button",{on:{click:t.submit}},[t._v("确认退出")])])],1)},staticRenderFns:[]}}});