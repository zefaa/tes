(window.webpackJsonp=window.webpackJsonp||[]).push([[45,44],{394:function(t,e,n){"use strict";n.r(e);n(24);var o={props:["testimonial"]},l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"static-testimonial mb-30"},[e("div",{staticClass:"testimonial-image"},[e("img",{attrs:{src:t.testimonial.imgSrc,alt:t.testimonial.name}})]),t._v(" "),e("div",{staticClass:"testimonial-content"},[e("p",[t._v(t._s(t.testimonial.text))])]),t._v(" "),e("div",{staticClass:"author-info"},[e("div",{staticClass:"cite"},[e("h6",{staticClass:"name"},[t._v(t._s(t.testimonial.name))]),t._v(" "),e("span",{staticClass:"position"},[t._v(t._s(t.testimonial.position))])])])])}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);n(1),n(48),n(56);var o={components:{TestimonialItem:function(){return Promise.resolve().then(n.bind(null,394))}},data:function(){return{swiperOption:{slidesPerView:3,centeredSlides:!0,loop:!0,speed:1e3,spaceBetween:50,autoHeight:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{1499:{slidesPerView:3},768:{slidesPerView:2},320:{slidesPerView:1}}},testimonialData:[{id:1,text:"We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",imgSrc:"/images/testimonial/author-1.png",name:"Uzzal Hossain",position:"Frontend Developer"},{id:2,text:"We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",imgSrc:"/images/testimonial/author-2.png",name:"Tasnim Akter",position:"Marketing Manager"},{id:3,text:"We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",imgSrc:"/images/testimonial/author-3.png",name:"Yeasin Hossain",position:"Team Leader"}]}}},l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonial-section section-padding-t90 section-padding-bottom"},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"testimonial-slider",attrs:{"data-aos":"fade-up"}},[e("swiper",{attrs:{options:t.swiperOption}},t._l(t.testimonialData,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("TestimonialItem",{attrs:{testimonial:t}})],1)})),0),t._v(" "),e("div",{staticClass:"swiper-pagination text-center"})],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[e("h2",{staticClass:"title fz-32"},[t._v("What our customers are saying about our services")]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v("Get your company heading in the right direction with our digital marketing strategist")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TestimonialItem:n(394).default})}}]);