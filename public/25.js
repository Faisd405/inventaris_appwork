(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/relasi-barang.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/users/relasi-barang.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: [],
      barang: {},
      barangs: {}
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/").then(function (response) {
      _this.user = response.data.user;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/NoUser").then(function (response) {
      _this.barangs = response.data.barang;
    });
  },
  methods: {
    RelasiUserBarangUpdate: function RelasiUserBarangUpdate() {
      var _this2 = this;

      var uri = "/api/barang/" + this.barang.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.barang).then(function (response) {
        _this2.$router.push("/users/" + _this2.barang.user_id);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/relasi-barang.vue?vue&type=template&id=71b4aaa5&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/users/relasi-barang.vue?vue&type=template&id=71b4aaa5& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Relasi Barang Dan User"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.RelasiUserBarangUpdate.apply(null, arguments)
                  },
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
                          value: _vm.barang.user_id,
                          expression: "barang.user_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "user_id" },
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
                            "user_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih User"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.user, function (user) {
                        return _c(
                          "option",
                          { key: user.id, domProps: { value: user.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(user.name) +
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
                _vm._m(0),
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

/***/ "./resources/assets/src/components/users/relasi-barang.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/src/components/users/relasi-barang.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _relasi_barang_vue_vue_type_template_id_71b4aaa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relasi-barang.vue?vue&type=template&id=71b4aaa5& */ "./resources/assets/src/components/users/relasi-barang.vue?vue&type=template&id=71b4aaa5&");
/* harmony import */ var _relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relasi-barang.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/users/relasi-barang.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _relasi_barang_vue_vue_type_template_id_71b4aaa5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _relasi_barang_vue_vue_type_template_id_71b4aaa5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/users/relasi-barang.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/users/relasi-barang.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/components/users/relasi-barang.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./relasi-barang.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/relasi-barang.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/users/relasi-barang.vue?vue&type=template&id=71b4aaa5&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/src/components/users/relasi-barang.vue?vue&type=template&id=71b4aaa5& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_template_id_71b4aaa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./relasi-barang.vue?vue&type=template&id=71b4aaa5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/relasi-barang.vue?vue&type=template&id=71b4aaa5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_template_id_71b4aaa5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relasi_barang_vue_vue_type_template_id_71b4aaa5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);