(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengajuan/user/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengajuan/user/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
    title: "Create pengajuan"
  },
  data: function data() {
    return {
      pengajuan: {},
      user: {},
      errors: []
    };
  },
  methods: {
    pengajuanStore: function pengajuanStore() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/pengajuan", this.pengajuan).then(function (response) {
        _this.$router.push("/pengajuan/user/" + _this.user.id);
      })["catch"](function (error) {
        console.log(error.response.data.errors);
      });
    },
    checkForm: function checkForm(e) {
      this.errors = [];

      if (!this.pengajuan.nama_barang) {
        this.errors.push("Nama Barang Harus Diisi");
      }

      if (!this.pengajuan.detail_barang) {
        this.errors.push("Detail Barang Harus Diisi");
      }

      if (!this.pengajuan.fungsi) {
        this.errors.push("Fungsi Harus Diisi");
      }

      if (!this.pengajuan.harga_barang) {
        this.errors.push("Harga Barang Harus Diisi");
      }

      if (!this.pengajuan.jumlah_barang) {
        this.errors.push("Jumlah Barang Harus Diisi");
      }

      if (this.errors.length) {
        e.preventDefault();
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this2.user = response.data;
      _this2.loginType = response.data.roles[0].name;
      _this2.pengajuan.user_id = response.data.id;
    })["catch"](function (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this2.$router.push("/login");
      }

      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengajuan/user/create.vue?vue&type=template&id=29de5a9c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengajuan/user/create.vue?vue&type=template&id=29de5a9c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container p-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Create pengajuan"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: [
                    function ($event) {
                      $event.preventDefault()
                      return _vm.pengajuanStore.apply(null, arguments)
                    },
                    _vm.checkForm,
                  ],
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Nama Barang")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengajuan.nama_barang,
                        expression: "pengajuan.nama_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan Nama Barang" },
                    domProps: { value: _vm.pengajuan.nama_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.pengajuan,
                          "nama_barang",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Detail Barang")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengajuan.detail_barang,
                        expression: "pengajuan.detail_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Masukan Detail Barang",
                    },
                    domProps: { value: _vm.pengajuan.detail_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.pengajuan,
                          "detail_barang",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Fungsi")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengajuan.fungsi,
                        expression: "pengajuan.fungsi",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan Fungsi" },
                    domProps: { value: _vm.pengajuan.fungsi },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.pengajuan, "fungsi", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Harga Barang")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengajuan.harga_barang,
                        expression: "pengajuan.harga_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      placeholder: "Masukan Harga Barang",
                    },
                    domProps: { value: _vm.pengajuan.harga_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.pengajuan,
                          "harga_barang",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Jumlah Barang")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pengajuan.jumlah_barang,
                        expression: "pengajuan.jumlah_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      placeholder: "Masukan Jumlah Barang",
                    },
                    domProps: { value: _vm.pengajuan.jumlah_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.pengajuan,
                          "jumlah_barang",
                          $event.target.value
                        )
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

/***/ "./resources/assets/src/components/pengajuan/user/create.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/src/components/pengajuan/user/create.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_29de5a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=29de5a9c& */ "./resources/assets/src/components/pengajuan/user/create.vue?vue&type=template&id=29de5a9c&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/pengajuan/user/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_29de5a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_29de5a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/pengajuan/user/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/pengajuan/user/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/src/components/pengajuan/user/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengajuan/user/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/pengajuan/user/create.vue?vue&type=template&id=29de5a9c&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/src/components/pengajuan/user/create.vue?vue&type=template&id=29de5a9c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_29de5a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=29de5a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengajuan/user/create.vue?vue&type=template&id=29de5a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_29de5a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_29de5a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);