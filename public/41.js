(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
    title: "Create Pengguna"
  },
  data: function data() {
    return {
      pengguna: {
        name: "",
        ktp: null,
        jabatan: "",
        password: "0",
        id_api: "0"
      },
      errors: []
    };
  },
  methods: {
    penggunaStore: function penggunaStore() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/pengguna", this.pengguna).then(function (response) {
        _this.$router.push("/pengguna");
      })["catch"](function (error) {
        console.log(error.response.data.errors);
      });
    },
    checkForm: function checkForm(e) {
      this.errors = [];

      if (this.pengguna.name == "") {
        this.errors.push("Nama pengguna harus diisi");
      }

      if (this.errors.length > 0) {
        e.preventDefault();
      }

      if (this.errors.length == 0) {
        this.penggunaStore();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/create.vue?vue&type=template&id=181dad12&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/create.vue?vue&type=template&id=181dad12& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Create pengguna"),
          ]),
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
                  _c("label", [_vm._v("Nama pengguna")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengguna.name,
                        expression: "pengguna.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Masukan Nama Pengguna",
                    },
                    domProps: { value: _vm.pengguna.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.pengguna, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengguna.email,
                        expression: "pengguna.email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", placeholder: "Masukan Email" },
                    domProps: { value: _vm.pengguna.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.pengguna, "email", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("No KTP")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengguna.ktp,
                        expression: "pengguna.ktp",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Masukan Nomor KTP" },
                    domProps: { value: _vm.pengguna.ktp },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.pengguna, "ktp", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Jabatan Pengguna")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengguna.jabatan,
                        expression: "pengguna.jabatan",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Masukan Jabatan Pengguna",
                    },
                    domProps: { value: _vm.pengguna.jabatan },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.pengguna, "jabatan", $event.target.value)
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

/***/ "./resources/assets/src/components/pengguna/create.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/create.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_181dad12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=181dad12& */ "./resources/assets/src/components/pengguna/create.vue?vue&type=template&id=181dad12&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/pengguna/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_181dad12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_181dad12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/pengguna/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/pengguna/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/pengguna/create.vue?vue&type=template&id=181dad12&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/create.vue?vue&type=template&id=181dad12& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_181dad12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=181dad12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/create.vue?vue&type=template&id=181dad12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_181dad12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_181dad12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);