exports.ids = [22];
exports.modules = {

/***/ 127:
/***/ (function(module) {

module.exports = JSON.parse("[{\"count\":650,\"text\":\"Happy Clients\"},{\"count\":780,\"text\":\"finished projects\"},{\"count\":245,\"text\":\"skilled experts\"},{\"count\":980,\"text\":\"media posts\"}]");

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunfactWithTitle.vue?vue&type=template&id=2c8ea4a6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90 section-padding-bottom",
    style: {
      backgroundColor: '#f8faff'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">We help our clients solve business problems, increase <br> visibility, and achieve unexpected results</h2></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 mx-auto\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }],
    staticClass: "row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30"
  }, _vm._l(_vm.funFacts, function (item, i) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">", "</div>", [_vm.isVisible ? _vm._ssrNode("<div class=\"funfact\">", "</div>", [_vm._ssrNode("<div class=\"number\">", "</div>", [_vm._ssrNode("<span class=\"counter\">", "</span>", [_c('countTo', {
      attrs: {
        "startVal": _vm.startVal,
        "endVal": item.count,
        "duration": 4000
      }
    })], 1)]), _vm._ssrNode(" <h6 class=\"text\">" + _vm._ssrEscape(_vm._s(item.text)) + "</h6>")], 2) : _vm._e()]);
  }), 0)])])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunfactWithTitle.vue?vue&type=template&id=2c8ea4a6&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(92);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/funfacts.json
var funfacts = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunfactWithTitle.vue?vue&type=script&lang=js&


/* harmony default export */ var FunfactWithTitlevue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      funFacts: funfacts,
      startVal: 0,
      isVisible: false
    };
  },

  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/FunfactWithTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunfactWithTitlevue_type_script_lang_js_ = (FunfactWithTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunfactWithTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunfactWithTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "729700c2"
  
)

/* harmony default export */ var FunfactWithTitle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=funfact-with-title.js.map