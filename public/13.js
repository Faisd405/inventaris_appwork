(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/relasi-barang.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/relasi-barang.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Relasi Barang Dan Pengguna"
  },
  data: function data() {
    return {
      pengguna: [],
      barang: {
        pengguna_id: "",
        id: "",
        keterangan: ""
      },
      barangs: {},
      errors: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna/").then(function (response) {
      _this.pengguna = response.data.pengguna;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang").then(function (response) {
      _this.barangs = response.data.barang;
    });
  },
  methods: {
    RelasiUserBarangUpdate: function RelasiUserBarangUpdate() {
      var _this2 = this;

      var uri = "/api/barang/relasi/" + this.barang.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.barang).then(function (response) {
        _this2.$router.push("/pengguna/detail/" + _this2.barang.pengguna_id);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    checkForm: function checkForm(e) {
      this.errors = [];

      if (this.barang.pengguna_id == "") {
        this.errors.push("Pengguna Harus Diisi");
      }

      if (this.barang.id == "") {
        this.errors.push("Barang Harus Diisi");
      }

      e.preventDefault();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/relasi-barang.vue?vue&type=template&id=71ac9188&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/relasi-barang.vue?vue&type=template&id=71ac9188& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Ganti Pengguna Barang"),
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
                      return _vm.RelasiUserBarangUpdate.apply(null, arguments)
                    },
                    _vm.checkForm,
                  ],
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "user_id" } }, [
                    _vm._v("Pengguna"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.barang.pengguna_id,
                          expression: "barang.pengguna_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "pengguna_id" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.barang,
                            "pengguna_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih Pengguna"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.pengguna, function (pengguna) {
                        return _c(
                          "option",
                          {
                            key: pengguna.id,
                            domProps: { value: pengguna.id },
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(pengguna.name) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "barang_id" } }, [
                    _vm._v("Barang"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.barang.id,
                          expression: "barang.id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "barang_id" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.barang,
                            "id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih Barang"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.barangs, function (barang) {
                        return _c(
                          "option",
                          { key: barang.id, domProps: { value: barang.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(barang.nama_barang) +
                                ", Pemakai :\n                  " +
                                _vm._s(barang.pengguna.name) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                      _vm._v(" "),
                      !_vm.barang
                        ? _c("option", { attrs: { disabled: "" } }, [
                            _vm._v("Tidak Ada Barang Baru"),
                          ])
                        : _vm._e(),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "keterangan" } }, [
                    _vm._v("Keterangan"),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.barang.keterangan,
                        expression: "barang.keterangan",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "keterangan",
                      placeholder: "Masukan Keterangan",
                    },
                    domProps: { value: _vm.barang.keterangan },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.barang, "keterangan", $event.target.value)
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
                        _c("b", [_vm._v("Tolong Isi Kolom Tersebut :")]),
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

/***/ "./resources/assets/src/components/barang/relasi-barang.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/src/components/barang/relasi-barang.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _relasi_barang_vue_vue_type_template_id_71ac9188___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relasi-barang.vue?vue&type=template&id=71ac9188& */ "./resources/assets/src/components/barang/relasi-barang.vue?vue&type=template&id=71ac9188&");
/* harmony import */ var _relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relasi-barang.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/barang/relasi-barang.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _relasi_barang_vue_vue_type_template_id_71ac9188___WEBPACK_IMPORTED_MODULE_0__["render"],
  _relasi_barang_vue_vue_type_template_id_71ac9188___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/barang/relasi-barang.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/barang/relasi-barang.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/relasi-barang.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./relasi-barang.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/relasi-barang.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/barang/relasi-barang.vue?vue&type=template&id=71ac9188&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/relasi-barang.vue?vue&type=template&id=71ac9188& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_template_id_71ac9188___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./relasi-barang.vue?vue&type=template&id=71ac9188& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/relasi-barang.vue?vue&type=template&id=71ac9188&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_template_id_71ac9188___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_template_id_71ac9188___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);