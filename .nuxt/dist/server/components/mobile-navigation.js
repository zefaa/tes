exports.ids = [26];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2b58313a", content, true, context)
};

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_cd93aa5a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_cd93aa5a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_cd93aa5a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_cd93aa5a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_cd93aa5a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:\"\";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=cd93aa5a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "mobile-navigation"
  }, [_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">", "</nav>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li class=\"menu-item-has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home One")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/home-two"
    }
  }, [_vm._v("Home Two")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/home-three"
    }
  }, [_vm._v("Home Three")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-item-has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/service"
    }
  }, [_vm._v("Service")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/service"
    }
  }, [_vm._v("Service")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/service/branding"
    }
  }, [_vm._v("Service Details")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-item-has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/project"
    }
  }, [_vm._v("Project")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/project"
    }
  }, [_vm._v("Project")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/project/project-details"
    }
  }, [_vm._v("Project Details")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-item-has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog Grid")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-classic"
    }
  }, [_vm._v("Blog Classic")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v("Blog Details")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=cd93aa5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  name: 'MobileNavMenu',

  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu === null || offcanvasMobileMenu === void 0 ? void 0 : offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "07812924"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mobile-navigation.js.map