(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{380:function(t,e,n){var r=n(22);t.exports=function(t){return r(Set.prototype.values,t)}},395:function(t,e,n){n(396)},396:function(t,e,n){"use strict";n(397)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(398))},397:function(t,e,n){"use strict";var r=n(10),o=n(16),c=n(13),f=n(107),d=n(36),h=n(235),l=n(162),v=n(163),m=n(19),S=n(29),w=n(12),y=n(164),E=n(84),R=n(168);t.exports=function(t,e,n){var I=-1!==t.indexOf("Map"),_=-1!==t.indexOf("Weak"),T=I?"set":"add",C=o[t],x=C&&C.prototype,O=C,$={},D=function(t){var e=c(x[t]);d(x,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(_&&!S(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return _&&!S(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!S(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(f(t,!m(C)||!(_||x.forEach&&!w((function(){(new C).entries().next()})))))O=n.getConstructor(e,t,I,T),h.enable();else if(f(t,!0)){var A=new O,k=A[T](_?{}:-0,1)!=A,j=w((function(){A.has(1)})),z=y((function(t){new C(t)})),U=!_&&w((function(){for(var t=new C,e=5;e--;)t[T](e,e);return!t.has(-0)}));z||((O=e((function(t,e){v(t,x);var n=R(new C,t,O);return null!=e&&l(e,n[T],{that:n,AS_ENTRIES:I}),n}))).prototype=x,x.constructor=O),(j||U)&&(D("delete"),D("has"),I&&D("get")),(U||k)&&D(T),_&&x.clear&&delete x.clear}return $[t]=O,r({global:!0,constructor:!0,forced:O!=C},$),E(O,t),_||n.setStrong(O,t,I),O}},398:function(t,e,n){"use strict";var r=n(35).f,o=n(63),c=n(236),f=n(67),d=n(163),h=n(162),l=n(165),v=n(166),m=n(25),S=n(235).fastKey,w=n(59),y=w.set,E=w.getterFor;t.exports={getConstructor:function(t,e,n,l){var v=t((function(t,r){d(t,w),y(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=r&&h(r,t[l],{that:t,AS_ENTRIES:n})})),w=v.prototype,R=E(e),I=function(t,e,n){var r,o,c=R(t),f=_(t,e);return f?f.value=n:(c.last=f={index:o=S(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=f),r&&(r.next=f),m?c.size++:t.size++,"F"!==o&&(c.index[o]=f)),t},_=function(t,e){var n,r=R(t),o=S(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(w,{clear:function(){for(var t=R(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,n=R(e),r=_(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),m?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=R(this),r=f(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!_(this,t)}}),c(w,n?{get:function(t){var e=_(this,t);return e&&e.value},set:function(t,e){return I(this,0===t?0:t,e)}}:{add:function(t){return I(this,t=0===t?0:t,t)}}),m&&r(w,"size",{get:function(){return R(this).size}}),v},setStrong:function(t,e,n){var r=e+" Iterator",o=E(e),c=E(r);l(t,e,(function(t,e){y(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),v(e)}}},399:function(t,e,n){"use strict";n(10)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:n(400)})},400:function(t,e,n){"use strict";var r=n(22),o=n(49),c=n(23);t.exports=function(){for(var t=c(this),e=o(t.add),n=0,f=arguments.length;n<f;n++)r(e,t,arguments[n]);return t}},401:function(t,e,n){"use strict";n(10)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:n(402)})},402:function(t,e,n){"use strict";var r=n(22),o=n(49),c=n(23);t.exports=function(){for(var t,e=c(this),n=o(e.delete),f=!0,d=0,h=arguments.length;d<h;d++)t=r(n,e,arguments[d]),f=f&&t;return!!f}},403:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),f=n(49),d=n(23),h=n(130),l=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=d(this),n=new(h(e,o("Set")))(e),r=f(n.delete);return l(t,(function(t){c(r,n,t)})),n}})},404:function(t,e,n){"use strict";var r=n(10),o=n(23),c=n(67),f=n(380),d=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),n=f(e),r=c(t,arguments.length>1?arguments[1]:void 0);return!d(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},405:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),f=n(49),d=n(23),h=n(67),l=n(130),v=n(380),m=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=d(this),n=v(e),r=h(t,arguments.length>1?arguments[1]:void 0),S=new(l(e,o("Set"))),w=f(S.add);return m(n,(function(t){r(t,t,e)&&c(w,S,t)}),{IS_ITERATOR:!0}),S}})},406:function(t,e,n){"use strict";var r=n(10),o=n(23),c=n(67),f=n(380),d=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),n=f(e),r=c(t,arguments.length>1?arguments[1]:void 0);return d(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},407:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),f=n(49),d=n(23),h=n(130),l=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=d(this),n=new(h(e,o("Set"))),r=f(e.has),v=f(n.add);return l(t,(function(t){c(r,e,t)&&c(v,n,t)})),n}})},408:function(t,e,n){"use strict";var r=n(10),o=n(22),c=n(49),f=n(23),d=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=f(this),n=c(e.has);return!d(t,(function(t,r){if(!0===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},409:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),f=n(49),d=n(19),h=n(23),l=n(131),v=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=l(this),n=h(t),r=n.has;return d(r)||(n=new(o("Set"))(t),r=f(n.has)),!v(e,(function(t,e){if(!1===c(r,n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},410:function(t,e,n){"use strict";var r=n(10),o=n(22),c=n(49),f=n(23),d=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=f(this),n=c(e.has);return!d(t,(function(t,r){if(!1===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},411:function(t,e,n){"use strict";var r=n(10),o=n(13),c=n(23),f=n(30),d=n(380),h=n(162),l=o([].join),v=[].push;r({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),n=d(e),r=void 0===t?",":f(t),o=[];return h(n,v,{that:o,IS_ITERATOR:!0}),l(o,r)}})},412:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(67),f=n(22),d=n(49),h=n(23),l=n(130),v=n(380),m=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=h(this),n=v(e),r=c(t,arguments.length>1?arguments[1]:void 0),S=new(l(e,o("Set"))),w=d(S.add);return m(n,(function(t){f(w,S,r(t,t,e))}),{IS_ITERATOR:!0}),S}})},413:function(t,e,n){"use strict";var r=n(10),o=n(49),c=n(23),f=n(380),d=n(162),h=TypeError;r({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),n=f(e),r=arguments.length<2,l=r?void 0:arguments[1];if(o(t),d(n,(function(n){r?(r=!1,l=n):l=t(l,n,n,e)}),{IS_ITERATOR:!0}),r)throw h("Reduce of empty set with no initial value");return l}})},414:function(t,e,n){"use strict";var r=n(10),o=n(23),c=n(67),f=n(380),d=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),n=f(e),r=c(t,arguments.length>1?arguments[1]:void 0);return d(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},415:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),f=n(49),d=n(23),h=n(130),l=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=d(this),n=new(h(e,o("Set")))(e),r=f(n.delete),v=f(n.add);return l(t,(function(t){c(r,n,t)||c(v,n,t)})),n}})},416:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(49),f=n(23),d=n(130),h=n(162);r({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=f(this),n=new(d(e,o("Set")))(e);return h(t,c(n.add),{that:n}),n}})},417:function(t,e,n){"use strict";var r=n(10),o=n(418),c=n(38),f=n(46),d=n(62),h=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=f(e),r=h(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:d(t)),r}})},418:function(t,e,n){"use strict";var r=n(108),o=n(46),c=n(167),f=n(67),d=function(t,e,source,n,h,l,v,m){for(var element,S,w=h,y=0,E=!!v&&f(v,m);y<n;)y in source&&(element=E?E(source[y],y,e):source[y],l>0&&r(element)?(S=o(element),w=d(t,e,element,S,w,l-1)-1):(c(w+1),t[w]=element),w++),y++;return w};t.exports=d},419:function(t,e,n){n(85)("flat")},438:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",o=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],c=["name","button","icon","url","logout","width","height"],i=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],s=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function f(t,e,n,i,s,r,o,a,u,c){"boolean"!=typeof o&&(u=a,a=o,o=!1);var f,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),r?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=f):e&&(f=o?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),f)if(d.functional){var h=d.render;d.render=function(t,e){return f.call(e),h(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,f):[f]}return n}var d=f({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return c.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(r);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;i.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),a=f({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(r);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return s((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return s((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function u(t,e){void 0===e&&(e={}),t.component("Disqus",d),t.component("DisqusCount",a),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(u)}}]);