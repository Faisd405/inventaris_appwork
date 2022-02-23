(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/lokasi/edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/lokasi/edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Edit Lokasi"
  },
  data: function data() {
    return {
      lokasi: {},
      errors: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/lokasi/".concat(this.$route.params.id)).then(function (response) {
      _this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    LokasiUpdate: function LokasiUpdate() {
      var _this2 = this;

      var uri = "/api/lokasi/" + this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.lokasi).then(function (response) {
        _this2.$router.push("/lokasi");
      });
    },
    checkForm: function checkForm(e) {
      this.errors = [];

      if (this.lokasi.lokasi == "") {
        this.errors.push("Nama lokasi tidak boleh kosong");
      }

      if (this.errors.length > 0) {
        e.preventDefault();
      }

      if (this.errors.length == 0) {
        this.LokasiUpdate();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/lokasi/edit.vue?vue&type=template&id=5fb3d680&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/lokasi/edit.vue?vue&type=template&id=5fb3d680& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid p-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Edit lokasi")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.checkForm.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Nama lokasi")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lokasi.lokasi,
                        expression: "lokasi.lokasi",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan lokasi" },
                    domProps: { value: _vm.lokasi.lokasi },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.lokasi, "lokasi", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _vm.errors.length
                  ? _c("div", [
                      _c("div", { staticClass: "alert alert-danger" }, [
                        _c("b", [_vm._v("Perhatikan hal berikut :")]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          _vm._l(_vm.errors, function (error) {
                            return _c("li", { key: error }, [
                              _vm._v(_vm._s(error)),
                            ])
                          }),
                          0
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-md btn-success", attrs: { type: "submit" } },
        [_vm._v("\n                SIMPAN\n              ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/lokasi/edit.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/src/components/lokasi/edit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_5fb3d680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=5fb3d680& */ "./resources/assets/src/components/lokasi/edit.vue?vue&type=template&id=5fb3d680&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/lokasi/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_5fb3d680___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_5fb3d680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/lokasi/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/lokasi/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/src/components/lokasi/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/lokasi/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/lokasi/edit.vue?vue&type=template&id=5fb3d680&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/src/components/lokasi/edit.vue?vue&type=template&id=5fb3d680& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5fb3d680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=5fb3d680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/lokasi/edit.vue?vue&type=template&id=5fb3d680&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5fb3d680___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5fb3d680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);