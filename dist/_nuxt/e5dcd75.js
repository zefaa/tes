(window.webpackJsonp=window.webpackJsonp||[]).push([[30,36,39],{372:function(t,e,n){"use strict";n.r(e);n(1),n(3);var l=n(385),r=n.n(l),o={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new r.a(t)}))}},c=n(55),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shape scene",class:t.addClassName},[e("span",{attrs:{"data-depth":t.dataDepth}},[e("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n.r(e);var l={name:"SectionTitle",props:["title","subTitle","addClassName"]},r=n(55),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title text-center",class:t.addClassName,attrs:{"data-aos":"fade-up"}},[e("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,n){"use strict";n.r(e);n(1),n(48),n(56);var l={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,374))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,372))}}},r=n(55),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:{backgroundImage:"url('/images/bg/newsletter.jpg')"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"newsletter-content"},[e("SectionTitle",{attrs:{title:"Let’s find out how to work together","sub-title":"Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.","add-class-name":"color-light"}}),t._v(" "),t._m(0)],1)])])]),t._v(" "),e("ShapeWithAnimation",{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"newsletter-form"},[e("form",[e("input",{attrs:{type:"email",placeholder:"Ente your email",name:"mail"}}),t._v(" "),e("button",{staticClass:"btn btn-primary btn-hover-secondary"},[t._v("Subscribe")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(374).default,ShapeWithAnimation:n(372).default})}}]);